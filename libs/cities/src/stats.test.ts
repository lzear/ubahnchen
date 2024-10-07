import { zipStats } from './stats'

describe(zipStats, () => {
  it('should return stats', async () => {
    expect(await zipStats('berlin')).toMatchInlineSnapshot(`
      {
        "isOkay": true,
        "isUpToDate": true,
        "newDate": "Fri, 11 Oct 2024 08:22:40 GMT",
        "newHeaders": {
          "content-length": 60551984,
          "etag": ""6708e050-39bf330"",
          "last-modified": "Fri, 11 Oct 2024 08:22:40 GMT",
        },
        "oldDate": "Fri, 11 Oct 2024 08:22:40 GMT",
        "oldHeaders": {
          "content-length": 60551984,
          "etag": ""6708e050-39bf330"",
          "last-modified": "Fri, 11 Oct 2024 08:22:40 GMT",
        },
        "prettySize": "60.6 MB",
        "size": 60551984,
      }
    `)
  })
})
