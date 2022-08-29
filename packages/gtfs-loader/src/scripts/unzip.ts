import { oraPromise } from 'ora'
import extract from 'extract-zip'
import { GTFS_CSV_UNFILTERED, GTFS_ZIP_PATH } from '../data'

export const unzip = () =>
  oraPromise(
    () =>
      extract(GTFS_ZIP_PATH, {
        dir: GTFS_CSV_UNFILTERED,
      }),
    'Unzip gtfs.zip',
  )
