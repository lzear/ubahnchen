export const schemaMinify =
  //language=SQL
  `
PRAGMA foreign_keys=0;

DROP TABLE shapes_mini;
DROP TABLE shapes_temp;
DROP TABLE stop_pairs_validation;
DROP TABLE stop_pairs;
DROP TABLE shapes;

ALTER TABLE trips RENAME TO trips_old;

CREATE TABLE trips (
     route_id        TEXT NOT NULL,
     service_id      TEXT NOT NULL,
     trip_id         TEXT NOT NULL UNIQUE PRIMARY KEY,
     start_time      INTEGER,
     end_time        INTEGER,
     FOREIGN KEY (route_id) REFERENCES routes (route_id)
);

INSERT INTO trips(route_id, service_id, trip_id, start_time, end_time)
SELECT route_id, service_id, trip_id, start_time, end_time FROM trips_old;

DROP TABLE trips_old;

-- ALTER TABLE trips ADD COLUMN start_time INTEGER NOT NULL;
-- ALTER TABLE trips ADD COLUMN end_time INTEGER NOT NULL;

ALTER TABLE stop_times DROP COLUMN stop_sequence;

DELETE FROM stops WHERE parent_station != '';

--ALTER TABLE stops DROP COLUMN parent_station;

CREATE TABLE stops_new (
    stop_id    TEXT NOT NULL UNIQUE PRIMARY KEY,
    stop_name  TEXT NOT NULL,
    stop_lat   REAL NOT NULL,
    stop_lon   REAL NOT NULL
);

-- 2. Copy data from stops to stops_new
INSERT INTO stops_new (stop_id, stop_name, stop_lat, stop_lon)
SELECT stop_id, stop_name, stop_lat, stop_lon FROM stops;

-- 3. Rename original stops table
ALTER TABLE stops RENAME TO stops_old;

-- 4. Rename stops_new to stops
ALTER TABLE stops_new RENAME TO stops;

-- 5. Drop the old stops table
DROP TABLE stops_old;

-- 1. Identify the routes that will be deleted
CREATE TEMPORARY TABLE routes_to_delete AS
SELECT route_id FROM routes WHERE route_type NOT IN (109, 400);

-- 2. Delete related data in trips
DELETE FROM trips WHERE route_id IN (SELECT route_id FROM routes_to_delete);

-- 3. Delete related data in stop_times using deleted trips
-- DELETE FROM stop_times WHERE trip_id NOT IN (SELECT trip_id FROM trips);
DELETE FROM stop_times
WHERE trip_id NOT IN (
  SELECT stop_times.trip_id
  FROM stop_times
  LEFT JOIN trips ON stop_times.trip_id = trips.trip_id
  WHERE trips.trip_id IS NULL
);

-- 4. At this point, you might want to clean up stops, but the given schema does not show any direct relation between stops and routes.
-- So, we'll skip deleting from stops. However, if there's an indirect relationship, further analysis would be needed.

-- 5. Finally, delete unwanted routes
DELETE FROM routes WHERE route_id IN (SELECT route_id FROM routes_to_delete);

-- 6. Cleanup the temporary table
DROP TABLE routes_to_delete;


DELETE FROM stops WHERE stop_id NOT IN (SELECT DISTINCT stop_id FROM stop_times);

DELETE FROM calendar WHERE service_id NOT IN (SELECT DISTINCT service_id FROM trips);

DELETE FROM calendar_dates WHERE service_id NOT IN (SELECT DISTINCT service_id FROM trips);

VACUUM;
`
