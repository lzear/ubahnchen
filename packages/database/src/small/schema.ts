import {
  index,
  integer,
  numeric,
  real,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core'

export const drizzleMigrations = sqliteTable('__drizzle_migrations', {
  id: numeric('id').primaryKey(),
  hash: text('hash').notNull(),
  createdAt: numeric('created_at'),
})

export const calendar = sqliteTable('calendar', {
  serviceId: text('service_id').primaryKey().notNull(),
  monday: integer('monday').notNull(),
  tuesday: integer('tuesday').notNull(),
  wednesday: integer('wednesday').notNull(),
  thursday: integer('thursday').notNull(),
  friday: integer('friday').notNull(),
  saturday: integer('saturday').notNull(),
  sunday: integer('sunday').notNull(),
  startDate: text('start_date').notNull(),
  endDate: text('end_date').notNull(),
})

export const calendarDates = sqliteTable('calendar_dates', {
  idx: integer('idx').primaryKey().notNull(),
  serviceId: integer('service_id').notNull(),
  date: text('date').notNull(),
  isRemoving: integer('is_removing').notNull(),
})

export const routes = sqliteTable(
  'routes',
  {
    routeId: text('route_id').primaryKey().notNull(),
    routeName: text('route_name').notNull(),
    routeType: integer('route_type').notNull(),
  },
  (table) => {
    return {
      routeNameIdx: index('route_name_idx').on(table.routeName),
    }
  },
)

export const stopTimes = sqliteTable('stop_times', {
  idx: integer('idx').primaryKey({ autoIncrement: true }).notNull(),
  tripId: text('trip_id').notNull(),
  arrivalTime: integer('arrival_time').notNull(),
  departureTime: integer('departure_time').notNull(),
  stopId: text('stop_id').notNull(),
})

export const trips = sqliteTable('trips', {
  routeId: text('route_id')
    .notNull()
    .references(() => routes.routeId),
  serviceId: text('service_id').notNull(),
  tripId: text('trip_id').primaryKey().notNull(),
  startTime: integer('start_time'),
  endTime: integer('end_time'),
})

export const stops = sqliteTable('stops', {
  stopId: text('stop_id').primaryKey().notNull(),
  stopName: text('stop_name').notNull(),
  stopLat: real('stop_lat').notNull(),
  stopLon: real('stop_lon').notNull(),
})
