#!/usr/bin/env -S node --prof --no-warnings --loader ts-node/esm

import { paths } from '@ubahnchen/cities/node'

import { minify } from '../minify'

const city = 'berlin'

const p = paths(city)

const { perf } = await minify(p.SQLITE_BIG, p.SQLITE_SMALL)

perf.logMarks()
