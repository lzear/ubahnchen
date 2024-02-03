#!/usr/bin/env -S node --prof --no-warnings --loader ts-node/esm

import { P } from '@ubahnchen/cities/node'

import { minify } from '../minify'

const city = 'berlin'

const p = P(city)

const { perf } = await minify(p.SQLITE.BIG, p.SQLITE.SMALL)

perf.logMarks()
