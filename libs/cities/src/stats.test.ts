import { zipStats } from './stats'

describe(zipStats, () => {
  it('should return stats', async () => {
    expect(await zipStats('berlin')).toStrictEqual({
      zipUpToDate: [
        true,
        {
          newHeaders: {
            etag: '"654e0200-4326c62"',
            'last-modified': 'Fri, 10 Nov 2023 10:12:16 GMT',
          },
          oldHeaders: {
            etag: '"654e0200-4326c62"',
            'last-modified': 'Fri, 10 Nov 2023 10:12:16 GMT',
          },
        },
      ],
    })
  })
})
