import { zipStats } from './stats'

describe(zipStats, () => {
  it('should return stats', async () => {
    expect(await zipStats('berlin')).toMatchInlineSnapshot(`
      {
        "isOkay": true,
        "isUpToDate": true,
        "newDate": "Fri, 24 May 2024 09:21:56 GMT",
        "newHeaders": {
          "content-length": 73331907,
          "etag": ""66505c34-45ef4c3"",
          "last-modified": "Fri, 24 May 2024 09:21:56 GMT",
        },
        "oldDate": "Fri, 24 May 2024 09:21:56 GMT",
        "oldHeaders": {
          "content-length": 73331907,
          "etag": ""66505c34-45ef4c3"",
          "last-modified": "Fri, 24 May 2024 09:21:56 GMT",
        },
        "prettySize": "73.3 MB",
        "size": 73331907,
      }
    `)
  })
})
