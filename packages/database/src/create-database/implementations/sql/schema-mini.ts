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
--   stop_sequence  INTEGER  NOT NULL,
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
     stop_lon   REAL          NOT NULL
  );

CREATE TABLE trips
  (
     route_id        TEXT      NOT NULL,
     service_id      TEXT      NOT NULL,
     trip_id         TEXT      NOT NULL UNIQUE PRIMARY KEY,
     start_time      INTEGER   NOT NULL,
     end_time        INTEGER   NOT NULL,
     FOREIGN KEY (route_id) REFERENCES routes (route_id)
  );

CREATE INDEX IF NOT EXISTS idx_route_name ON routes (route_name);
CREATE INDEX IF NOT EXISTS idx_stop_times_trip_id ON stop_times(trip_id);
CREATE INDEX IF NOT EXISTS idx_trips_trip_id ON trips(trip_id);
CREATE INDEX IF NOT EXISTS idx_trips_route_id ON trips(route_id);
CREATE INDEX IF NOT EXISTS idx_routes_route_id ON routes(route_id);
CREATE INDEX IF NOT EXISTS idx_routes_route_name ON routes(route_name);

COMMIT; 
`
