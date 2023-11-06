import type { DefaultOptions } from './00-seed.js'

export const seedCalendar = async ({
  databasePath,
  gtfsIterator,
  inserter,
}: DefaultOptions) =>
  inserter({
    databasePath,
    prepare: `INSERT INTO calendar (service_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday, start_date, end_date)
              VALUES (@service_id, @monday, @tuesday, @wednesday, @thursday, @friday, @saturday, @sunday, @start_date, @end_date)`,
    run: (pusher) => gtfsIterator.iterate('calendar')(({ row }) => pusher(row)),
  })
