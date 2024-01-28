import { zipStats } from './stats'

describe(zipStats, () => {
  it('should return stats', async () => {
    expect(await zipStats('berlin')).toMatchInlineSnapshot(`
      {
        "isUpToDate": true,
        "newDate": "Thu, 25 Jan 2024 16:26:02 GMT",
        "newHeaders": {
          "content-length": 71911064,
          "etag": ""65b28b9a-4494698"",
          "last-modified": "Thu, 25 Jan 2024 16:26:02 GMT",
        },
        "oldDate": "Thu, 25 Jan 2024 16:26:02 GMT",
        "oldHeaders": {
          "content-length": 71911064,
          "etag": ""65b28b9a-4494698"",
          "last-modified": "Thu, 25 Jan 2024 16:26:02 GMT",
        },
        "prettySize": "71.9 MB",
        "size": 71911064,
      }
    `)
  })
})
