CREATE TABLE `calendar` (
	`service_id` text PRIMARY KEY NOT NULL,
	`monday` integer NOT NULL,
	`tuesday` integer NOT NULL,
	`wednesday` integer NOT NULL,
	`thursday` integer NOT NULL,
	`friday` integer NOT NULL,
	`saturday` integer NOT NULL,
	`sunday` integer NOT NULL,
	`start_date` text NOT NULL,
	`end_date` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `calendar_dates` (
	`idx` integer PRIMARY KEY NOT NULL,
	`service_id` text NOT NULL,
	`date` text NOT NULL,
	`is_removing` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `routes` (
	`route_id` text PRIMARY KEY NOT NULL,
	`route_name` text NOT NULL,
	`route_type` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `shapes` (
	`shape_id` text PRIMARY KEY NOT NULL,
	`shape_pts` text NOT NULL,
	`lat_min` real NOT NULL,
	`lat_max` real NOT NULL,
	`lon_min` real NOT NULL,
	`lon_max` real NOT NULL
);
--> statement-breakpoint
CREATE TABLE `stop_pairs` (
	`idx` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`stop_id_1` text NOT NULL,
	`stop_id_2` text NOT NULL,
	`route_id` text NOT NULL,
	`count` integer NOT NULL,
	`is_one_way` integer NOT NULL,
	FOREIGN KEY (`stop_id_1`) REFERENCES `stops`(`stop_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`stop_id_2`) REFERENCES `stops`(`stop_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`route_id`) REFERENCES `routes`(`route_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `stop_pairs_svg_paths` (
	`stop_pair_idx` integer NOT NULL,
	`map` text NOT NULL,
	`waypoints` text NOT NULL,
	`length` real NOT NULL,
	FOREIGN KEY (`stop_pair_idx`) REFERENCES `stop_pairs`(`idx`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `stop_times` (
	`idx` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`trip_id` text NOT NULL,
	`arrival_time` integer NOT NULL,
	`departure_time` integer NOT NULL,
	`stop_id` text NOT NULL,
	`stop_sequence` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `stops` (
	`stop_id` text PRIMARY KEY NOT NULL,
	`stop_name` text NOT NULL,
	`stop_lat` real NOT NULL,
	`stop_lon` real NOT NULL,
	`parent_station` text,
	FOREIGN KEY (`parent_station`) REFERENCES `stops`(`stop_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `trips` (
	`route_id` text NOT NULL,
	`shape_id` text,
	`service_id` text NOT NULL,
	`trip_id` text PRIMARY KEY NOT NULL,
	`trip_headsign` text NOT NULL,
	`start_time` integer,
	`end_time` integer,
	FOREIGN KEY (`route_id`) REFERENCES `routes`(`route_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `route_name_idx` ON `routes` (`route_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `uniqueIdx` ON `stop_pairs` (`idx`);--> statement-breakpoint
CREATE UNIQUE INDEX `uniqueRouteStops` ON `stop_pairs` (`route_id`,`stop_id_1`,`stop_id_2`);--> statement-breakpoint
CREATE UNIQUE INDEX `uniquePerMap` ON `stop_pairs_svg_paths` (`stop_pair_idx`,`map`);