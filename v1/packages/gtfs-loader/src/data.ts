import { getAbsPath } from './files/files'

export const GTFS_ZIP_HEADERS = getAbsPath('dist/zip/headers.json')
export const GTFS_ZIP_PATH = getAbsPath('dist/zip/gtfs.zip')

export const GTFS_CSV_HEADERS = getAbsPath('dist/csv/headers.json')
export const GTFS_CSV_UNFILTERED = getAbsPath('dist/csv/0-all')
export const GTFS_CSV_FILTERED_MODES = getAbsPath('dist/csv/1-modes')

export const DB_HEADERS = getAbsPath('dist/db/headers.json')
export const DB_PATH = getAbsPath('dist/db/ubahnchen.db')
