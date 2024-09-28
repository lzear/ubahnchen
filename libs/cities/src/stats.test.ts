import { zipStats } from './stats'

describe(zipStats, () => {
  it('should return stats', async () => {
    expect(await zipStats('berlin')).toMatchInlineSnapshot(`
      {
        "isOkay": false,
        "isUpToDate": false,
        "newDate": "Fri, 27 Sep 2024 08:21:03 GMT",
        "newHeaders": {
          "content-length": 71579487,
          "etag": ""66f66aef-444375f"",
          "last-modified": "Fri, 27 Sep 2024 08:21:03 GMT",
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
