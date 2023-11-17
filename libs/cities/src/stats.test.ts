import { zipStats } from './stats'

describe(zipStats, () => {
  it('should return stats', async () => {
    expect(await zipStats('berlin')).toMatchInlineSnapshot(`
      {
        "isUpToDate": false,
        "newDate": "Fri, 17 Nov 2023 07:56:02 GMT",
        "newHeaders": {
          "etag": ""65571c92-4583698"",
          "last-modified": "Fri, 17 Nov 2023 07:56:02 GMT",
        },
        "oldDate": "Fri, 10 Nov 2023 10:12:16 GMT",
        "oldHeaders": {
          "etag": ""654e0200-4326c62"",
          "last-modified": "Fri, 10 Nov 2023 10:12:16 GMT",
        },
        "prettySize": "1.5 MB",
        "size": 1504759,
      }
    `)
  })
})
