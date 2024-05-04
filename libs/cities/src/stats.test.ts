import { zipStats } from './stats'

describe(zipStats, () => {
  it('should return stats', async () => {
    expect(await zipStats('berlin')).toMatchInlineSnapshot(`
      {
        "isUpToDate": false,
        "newDate": "Thu, 02 May 2024 15:48:54 GMT",
        "newHeaders": {
          "content-length": 74113247,
          "etag": ""6633b5e6-46ae0df"",
          "last-modified": "Thu, 02 May 2024 15:48:54 GMT",
        },
        "oldDate": "Thu, 02 May 2024 15:48:54 GMT",
        "oldHeaders": {
          "content-length": 74113247,
          "etag": ""6633b5e6-46ae0df"",
          "last-modified": "Thu, 02 May 2024 15:48:54 GMT",
        },
        "prettySize": "74.1 MB",
        "size": 74113247,
      }
    `)
  })
})
