CREATE TABLE `calendar` (
  `service_id` TEXT PRIMARY KEY NOT NULL,
  `monday` INTEGER NOT NULL,
  `tuesday` INTEGER NOT NULL,
  `wednesday` INTEGER NOT NULL,
  `thursday` INTEGER NOT NULL,
  `friday` INTEGER NOT NULL,
  `saturday` INTEGER NOT NULL,
  `sunday` INTEGER NOT NULL,
  `start_date` TEXT NOT NULL,
  `end_date` TEXT NOT NULL
);
-- > statement-breakpoint
CREATE TABLE `calendar_dates` (
  `idx` INTEGER PRIMARY KEY NOT NULL,
  `service_id` TEXT NOT NULL,
  `date` TEXT NOT NULL,
  `is_removing` INTEGER NOT NULL
);
-- > statement-breakpoint
CREATE TABLE `routes` (
  `route_id` TEXT PRIMARY KEY NOT NULL,
  `route_name` TEXT NOT NULL,
  `route_type` INTEGER NOT NULL
);
-- > statement-breakpoint
CREATE TABLE `shapes` (
  `shape_id` TEXT PRIMARY KEY NOT NULL,
  `shape_pts` TEXT NOT NULL,
  `lat_min` REAL NOT NULL,
  `lat_max` REAL NOT NULL,
  `lon_min` REAL NOT NULL,
  `lon_max` REAL NOT NULL
);
-- > statement-breakpoint
CREATE TABLE `stop_pairs` (
  `idx` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `stop_id_1` TEXT NOT NULL,
  `stop_id_2` TEXT NOT NULL,
  `route_id` TEXT NOT NULL,
  `count` INTEGER NOT NULL,
  `is_one_way` INTEGER NOT NULL,
  FOREIGN KEY (`stop_id_1`) REFERENCES `stops` (`stop_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  FOREIGN KEY (`stop_id_2`) REFERENCES `stops` (`stop_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  FOREIGN KEY (`route_id`) REFERENCES `routes` (`route_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
);
-- > statement-breakpoint
CREATE TABLE `stop_pairs_svg_paths` (
  `stop_pair_idx` INTEGER NOT NULL,
  `map` TEXT NOT NULL,
  `segments` TEXT NOT NULL,
  `length` REAL NOT NULL,
  FOREIGN KEY (`stop_pair_idx`) REFERENCES `stop_pairs` (`idx`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
);
-- > statement-breakpoint
CREATE TABLE `stop_times` (
  `idx` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `trip_id` TEXT NOT NULL,
  `arrival_time` INTEGER NOT NULL,
  `departure_time` INTEGER NOT NULL,
  `stop_id` TEXT NOT NULL,
  `stop_sequence` INTEGER NOT NULL
);
-- > statement-breakpoint
CREATE TABLE `stops` (
  `stop_id` TEXT PRIMARY KEY NOT NULL,
  `stop_name` TEXT NOT NULL,
  `stop_lat` REAL NOT NULL,
  `stop_lon` REAL NOT NULL,
  `parent_station` TEXT,
  FOREIGN KEY (`parent_station`) REFERENCES `stops` (`stop_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
);
-- > statement-breakpoint
CREATE TABLE `trips` (
  `route_id` TEXT NOT NULL,
  `shape_id` TEXT,
  `service_id` TEXT NOT NULL,
  `trip_id` TEXT PRIMARY KEY NOT NULL,
  `trip_headsign` TEXT NOT NULL,
  `start_time` INTEGER,
  `end_time` INTEGER,
  FOREIGN KEY (`route_id`) REFERENCES `routes` (`route_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
);
-- > statement-breakpoint
CREATE INDEX `route_name_idx` ON `routes` (`route_name`); -- > statement-breakpoint
CREATE UNIQUE INDEX `uniqueIdx` ON `stop_pairs` (`idx`); -- > statement-breakpoint
CREATE UNIQUE INDEX `uniqueRouteStops` ON `stop_pairs` (
  `route_id`,
  `stop_id_1`,
  `stop_id_2`
); -- > statement-breakpoint
CREATE UNIQUE INDEX `uniquePerMap` ON `stop_pairs_svg_paths` (
  `stop_pair_idx`,
  `map`
);
