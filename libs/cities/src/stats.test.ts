import { zipStats } from './stats'

describe(zipStats, () => {
  it('should return stats', async () => {
    expect(await zipStats('berlin')).toMatchInlineSnapshot(`
      {
        "isOkay": false,
        "isUpToDate": false,
        "newDate": "Tue, 01 Oct 2024 11:15:38 GMT",
        "newHeaders": {
          "content-length": 59460142,
          "etag": ""66fbd9da-38b4a2e"",
          "last-modified": "Tue, 01 Oct 2024 11:15:38 GMT",
        },
        "oldDate": "Fri, 13 Sep 2024 06:52:00 GMT",
        "oldHeaders": {
          "content-length": 70395389,
          "etag": ""66e3e110-43225fd"",
          "last-modified": "Fri, 13 Sep 2024 06:52:00 GMT",
        },
        "prettySize": "70.4 MB",
        "size": 70395389,
      }
    `)
  })
})
