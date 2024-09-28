export const schema =
  //language=SQL
  `
BEGIN TRANSACTION;


CREATE TABLE calendar
  (
     service_id TEXT     NOT NULL UNIQUE PRIMARY KEY,
     monday     INTEGER  NOT NULL,
     tuesday    INTEGER  NOT NULL,
     wednesday  INTEGER  NOT NULL,
     thursday   INTEGER  NOT NULL,
     friday     INTEGER  NOT NULL,
     saturday   INTEGER  NOT NULL,
     sunday     INTEGER  NOT NULL,
     start_date CHAR(8)  NOT NULL,
     end_date   CHAR(8)  NOT NULL
  );

CREATE TABLE calendar_dates
  (
     idx            INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
     service_id     INTEGER  NOT NULL,
     date           CHAR(8)  NOT NULL,
     is_removing    INTEGER  NOT NULL
     
--     CONSTRAINT PK_calendar_dates PRIMARY KEY (service_id, date)
  );


CREATE TABLE routes
  (
     route_id    TEXT          NOT NULL UNIQUE PRIMARY KEY,
     route_name  TEXT          NOT NULL,
     route_type  INTEGER       NOT NULL
  );


CREATE TABLE stop_times
  (
     idx            INTEGER  NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
     trip_id        TEXT     NOT NULL,
     arrival_time   INTEGER  NOT NULL,
     departure_time INTEGER  NOT NULL,
     stop_id        TEXT     NOT NULL,
     stop_sequence  INTEGER  NOT NULL,
--   stop_headsign  TEXT     NOT NULL,
--   stop_headsign  INTEGER,
     
     FOREIGN KEY (trip_id) REFERENCES trips (trip_id),
     FOREIGN KEY (stop_id) REFERENCES stops (stop_id)
  );

CREATE TABLE stops
  (
     stop_id    TEXT          NOT NULL UNIQUE PRIMARY KEY,
     stop_name  TEXT          NOT NULL,
     stop_lat   REAL          NOT NULL,
     stop_lon   REAL          NOT NULL,
     parent_station TEXT      REFERENCES stops(stop_id)
  );

CREATE TABLE shapes_temp
  (
    shape_id          TEXT      NOT NULL,
    shape_pt_lat      REAL      NOT NULL,
    shape_pt_lon      REAL      NOT NULL,
    shape_pt_sequence INTEGER   NOT NULL,
    
    PRIMARY KEY (shape_id, shape_pt_sequence)
  );

CREATE TABLE shapes
  (
    shape_id  TEXT NOT NULL PRIMARY KEY,
    shape_pts TEXT NOT NULL,
    lat_min   REAL NOT NULL,
    lat_max   REAL NOT NULL,
    lon_min   REAL NOT NULL,
    lon_max   REAL NOT NULL
  );

CREATE TABLE shapes_mini
  (
    idx        INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
    shape_pts  TEXT     NOT NULL,
    route_name TEXT     NOT NULL -- REFERENCES routes (route_name)
  );

CREATE TABLE trips
  (
     route_id        TEXT      NOT NULL,
     shape_id        TEXT,
     service_id      TEXT      NOT NULL,
     trip_id         TEXT      NOT NULL UNIQUE PRIMARY KEY,
--   trip_headsign   TEXT      NOT NULL,
     trip_headsign   TEXT      NOT NULL,
--   trip_short_name TEXT      NOT NULL,
--   direction_id    INTEGER   NOT NULL,
     start_time      INTEGER,
     end_time        INTEGER,
     
     FOREIGN KEY (route_id) REFERENCES routes (route_id),
     FOREIGN KEY (shape_id) REFERENCES shapes (shape_id)
  );

CREATE TABLE stop_pairs
  (
     idx            INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
     stop_id_1      TEXT    NOT NULL,
     stop_id_2      TEXT    NOT NULL,
     route_id       TEXT    NOT NULL REFERENCES routes (route_id),
     count          INTEGER NOT NULL,
     is_one_way     BOOLEAN,
     
     UNIQUE (route_id, stop_id_1, stop_id_2),
     
     FOREIGN KEY (stop_id_1)  REFERENCES stops (stop_id),
     FOREIGN KEY (stop_id_2)  REFERENCES stops (stop_id)
-- , FOREIGN KEY (route_id) REFERENCES routes (route_id)
  );

CREATE TABLE stop_pairs_validation
  (
     stop_pair_idx   INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
     stop_id_between TEXT, 
     FOREIGN KEY (stop_pair_idx)   REFERENCES stop_pairs (idx),
     FOREIGN KEY (stop_id_between) REFERENCES stops      (stop_id)
  );

CREATE TABLE stop_pairs_svg_paths (
    stop_pair_idx integer NOT NULL,
    map text NOT NULL,
    waypoints text NOT NULL,
    length real NOT NULL,
    FOREIGN KEY (stop_pair_idx) REFERENCES stop_pairs(idx) ON UPDATE no action ON DELETE no action
);

CREATE UNIQUE INDEX uniquePerMap ON stop_pairs_svg_paths (stop_pair_idx,map);

-- CREATE INDEX route_name_idx ON routes (route_name);

CREATE INDEX IF NOT EXISTS idx_route_name ON routes (route_name);
CREATE INDEX IF NOT EXISTS idx_stop_times_trip_id ON stop_times(trip_id);
CREATE INDEX IF NOT EXISTS idx_trips_trip_id ON trips(trip_id);
CREATE INDEX IF NOT EXISTS idx_trips_route_id ON trips(route_id);
CREATE INDEX IF NOT EXISTS idx_routes_route_id ON routes(route_id);
CREATE INDEX IF NOT EXISTS idx_routes_route_name ON routes(route_name);

COMMIT; 
`
