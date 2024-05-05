import { describe, expect } from '@jest/globals'

import type { JsonSchema } from './canonicalize'
import { canonicalize, canonicalizeToString } from './canonicalize'

describe(canonicalize, () => {
  it('should canonicalize JSON', () => {
    const input = {
      b: 2,
      g: [3, 2, 1],
      a: 1,
      c: { f: 4, d: 5, e: 6 },
    }
    const canonicalized = canonicalizeToString(input)
    expect(canonicalized).toMatchInlineSnapshot(`
      "{
        "a": 1,
        "b": 2,
        "c": {
          "d": 5,
          "e": 6,
          "f": 4
        },
        "g": [
          1,
          2,
          3
        ]
      }"
    `)
  })
  it('should canonicalize JSON', () => {
    const schema: JsonSchema = {
      $schema: 'http://json-schema.org/draft-07/schema#',
      title: 'Person',
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'integer',
        },
        addresses: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              city: {
                type: 'string',
              },
              country: {
                type: 'string',
              },
              zipCodes: {
                type: 'array',
                items: {
                  type: 'string',
                },
                canonicalOrder: 'numerical',
              },
            },
            required: ['city', 'country'],
            canonicalOrder: 'alphabetical',
          },
          canonicalOrder: 'alphabetical',
        },
      },
      required: ['name', 'age'],
      canonicalOrder: 'alphabetical',
    }

    const data = {
      age: 25,
      name: 'John Doe',
      addresses: [
        { city: 'San Francisco', country: 'USA' },
        { country: 'Germany', city: 'Berlin' },
        {
          country: 'UK',
          city: 'London',
          zipCodes: ['001', '02', '3', '100', 1000, 12_000, 4],
        },
      ],
    }

    const canonicalData = canonicalize(data, schema)

    expect(canonicalData).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "city": "Berlin",
            "country": "Germany",
          },
          {
            "city": "London",
            "country": "UK",
            "zipCodes": [
              "001",
              "02",
              "3",
              4,
              "100",
              1000,
              12000,
            ],
          },
          {
            "city": "San Francisco",
            "country": "USA",
          },
        ],
        "age": 25,
        "name": "John Doe",
      }
    `)
  })
})
