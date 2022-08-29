export const schema =
  //language=SQL
  `
BEGIN TRANSACTION;


CREATE TABLE stops
  (
     stop_idx   INTEGER       NOT NULL PRIMARY KEY AUTOINCREMENT,
     stop_id    TEXT          NOT NULL,
     stop_name  TEXT          NOT NULL
--   stop_lat   REAL          NOT NULL,
--   stop_lon   REAL          NOT NULL
  );

CREATE TABLE routes
  (
     route_id    TEXT          NOT NULL PRIMARY KEY,
     route_name  CHAR(3)       NOT NULL
  );

CREATE TABLE calendar
  (
     service_id INTEGER  NOT NULL PRIMARY KEY,
     monday     INTEGER  NOT NULL,
     tuesday    INTEGER  NOT NULL,
     wednesday  INTEGER  NOT NULL,
     thursday   INTEGER  NOT NULL,
     friday     INTEGER  NOT NULL,
     saturday   INTEGER  NOT NULL,
     sunday     INTEGER  NOT NULL,
     start_date CHAR(8) NOT NULL,
     end_date   CHAR(8) NOT NULL
  );

CREATE TABLE calendar_dates
  (
     idx            INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
     service_id     INTEGER  NOT NULL,
     date           CHAR(8)  NOT NULL,
     is_removing    INTEGER  NOT NULL
     
--     CONSTRAINT PK_calendar_dates PRIMARY KEY (service_id, date)
  );

CREATE TABLE trips
  (
     route_id        TEXT      NOT NULL,
     service_id      INTEGER  NOT NULL,
     trip_id         INTEGER  NOT NULL PRIMARY KEY,
--   trip_headsign   TEXT      NOT NULL,
     trip_headsign   TEXT      NOT NULL,
--   trip_short_name TEXT      NOT NULL,
--   direction_id    INTEGER       NOT NULL,
     start_time      INTEGER,
     end_time        INTEGER,
     
     FOREIGN KEY (route_id) REFERENCES routes (route_id)
  );

CREATE TABLE stop_times
  (
     idx            INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
     trip_id        INTEGER  NOT NULL,
--   arrival_time   CHAR(15) NOT NULL,
--   departure_time CHAR(15) NOT NULL,
     arrival_time   INTEGER  NOT NULL,
     departure_time INTEGER  NOT NULL,
--   stop_id        INTEGER  NOT NULL,
     stop_idx       INTEGER  NOT NULL,
--   stop_sequence  INTEGER  NOT NULL,
--   stop_headsign  TEXT     NOT NULL,
--   stop_headsign  INTEGER,
     
     FOREIGN KEY (trip_id)  REFERENCES trips (trip_id),
     FOREIGN KEY (stop_idx) REFERENCES stops (stop_idx)
  );

COMMIT; 
`
