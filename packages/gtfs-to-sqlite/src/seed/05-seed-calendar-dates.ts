import type { DefaultOptions } from './00-seed.js'

export const seedCalendarDates = async ({
  databasePath,
  gtfsIterator,
  inserter,
}: DefaultOptions) =>
  inserter({
    databasePath,
    prepare: `INSERT INTO calendar_dates (service_id,date,is_removing)
                          VALUES (@service_id, @date, @is_removing)`,
    run: (pusher) =>
      gtfsIterator.iterate('calendar_dates')(({ row }) =>
        pusher({
          service_id: row.service_id,
          date: row.date,
          is_removing: row.exception_type === '2' ? 1 : 0,
        }),
      ),
  })
