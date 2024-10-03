import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

//
import { splitSvgSubpaths } from './split-by-subpath'

describe(splitSvgSubpaths, () => {
  it('splits a path with multiple subpaths into multiple paths', async () => {
    const input = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      `./__tests__/s-unsplit.svg`,
    )

    const output = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      `./__tests__/s-unsplit-result.svg`,
    )

    const svg = fs.readFileSync(input, 'utf8')

    const svgElement = new DOMParser().parseFromString(svg, 'image/svg+xml')
      .documentElement as unknown as SVGSVGElement

    const result = splitSvgSubpaths(svgElement)

    expect(result).toMatchInlineSnapshot(`
      <svg
        fill="none"
        height="1363"
        width="1831"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          clip-path="url(#a)"
          data-ubhnchn="0"
        >
          <path
            d="M1830.3 0H0v1362.7h1830.3V0Z"
            data-ubhnchn="1"
            fill="#fff"
          />
          <path
            d="M771 448.7c0-10.1 3.8-17 9.6-22.8L1046 160.6"
            data-ubhnchn="2"
            stroke="#007734"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M771 128.3v43.8s-.4 7.8 5.9 14.1l108.3 108.4a30.3 30.3 0 0 1 0 43.7l-96.3 96.3s-5.8 5.1-5.8 14v16.5"
            data-ubhnchn="3"
            stroke="#fff"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M771 260.5v84.7c0 12.2 12 17.2 12 34.6v68.9"
            data-ubhnchn="4"
            stroke="#fff"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M771 128.3v43.8s-.4 7.8 5.9 14.1l108.3 108.4a30.3 30.3 0 0 1 0 43.7l-96.3 96.3s-5.8 5.1-5.8 14v16.5"
            data-ubhnchn="5"
            stroke="#6A2"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M1218.3 1323.6h16a7 7 0 1 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="6"
            fill="#CD9C53"
          />
          <path
            d="M1717.5 531.9v83.5c0 16.1-12.1 30.8-30.9 30.8h-397.3a30 30 0 0 0-22.7 9.6l-97.3 97.2a30 30 0 0 1-22.7 9.6h-39.8"
            data-ubhnchn="8"
            stroke="#EC7405"
            stroke-width="8"
          />
          <path
            d="M1575.8 891H1289a30 30 0 0 1-22.8-9.6L1169 784a30 30 0 0 0-22.8-9.6h-39.7"
            data-ubhnchn="9"
            stroke="#0066AD"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M771.3 993.5H475.9c-16.1 0-30.8-12-30.8-30.8V790.2"
            data-ubhnchn="10"
            stroke="#AD5937"
            stroke-width="8"
          />
          <path
            d="m444.8 816.4 7.4 18.5-7.1-6-7.8 6.6 7.5-19.1Z"
            data-ubhnchn="11"
            fill="#AD5937"
          />
          <path
            d="m437.3 835.5 7.5-19.1 7.4 18.5"
            data-ubhnchn="12"
            stroke="#fff"
          />
          <path
            d="M769.8 1005.5H476.4c-28.5 0-43-22.6-43-43.4V784.2"
            data-ubhnchn="13"
            stroke="#CB6418"
            stroke-width="8"
          />
          <path
            d="m433.4 873.2 7.3-18.6-7 6-7.9-6.6 7.6 19.2Z"
            data-ubhnchn="14"
            fill="#CB6418"
          />
          <path
            d="m425.8 854 7.6 19.2 7.3-18.6"
            data-ubhnchn="15"
            stroke="#fff"
          />
          <path
            d="M759.4 544.6H476a30.3 30.3 0 0 0-30.8 30.9v172.4"
            data-ubhnchn="16"
            stroke="#AD5937"
            stroke-width="8"
          />
          <path
            d="m724.1 544.3-18.5 7.4 6-7.1-6.6-7.8 19.1 7.5Z"
            data-ubhnchn="17"
            fill="#AD5937"
          />
          <path
            d="m705 536.8 19.1 7.5-18.5 7.4"
            data-ubhnchn="18"
            stroke="#fff"
          />
          <path
            d="M424.3 774.6H392s-7.8.4-14.1-5.9L154.2 545"
            data-ubhnchn="19"
            stroke="#0066AD"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M425.8 786.6h-33.6a30 30 0 0 1-22.8-9.4L144.8 552.6"
            data-ubhnchn="20"
            stroke="#992746"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M423.4 750.6H392s-7.8-.5-14.1 5.8L213 921.2s-5.9 5.2-5.9 14.1V1194c0 9-5.8 14-5.8 14L95.2 1314.2"
            data-ubhnchn="21"
            stroke="#fff"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M423.4 750.6H392s-7.8-.5-14.1 5.8L213 921.2s-5.9 5.2-5.9 14.1V1194c0 9-5.8 14-5.8 14L95.2 1314.2"
            data-ubhnchn="22"
            stroke="#816DA6"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="m142 549.8 8.5-8.5a6 6 0 1 1 8.5 8.5l-8.5 8.5a6 6 0 0 1-8.5-8.5Z"
            data-ubhnchn="23"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M844.4 520.2h-18.2c-28.5 0-43.1-22.7-43.1-43.4v-10"
            data-ubhnchn="24"
            stroke="#6A2"
            stroke-width="8"
          />
          <path
            d="M769.5 786.5h260c28.5 0 43.2 22.7 43.2 43.4v10"
            data-ubhnchn="25"
            stroke="#992746"
            stroke-width="8"
          />
          <path
            d="M1107.2 750.6h39c9 0 14.1-5.9 14.1-5.9l274.4-274.4"
            data-ubhnchn="26"
            stroke="#816DA6"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M758.5 532.5h-282c-28.6 0-43.2 22.7-43.2 43.4v177"
            data-ubhnchn="27"
            stroke="#CB6418"
            stroke-width="8"
          />
          <path
            d="M769.8 1017.5H476.2c-33.2 0-54.8-26-54.8-54.8V600.1"
            data-ubhnchn="28"
            stroke="#CD9C53"
            stroke-width="8"
          />
          <path
            d="M770.3 993.5h283.5c16.1 0 30.9-12 30.9-30.9V766.2"
            data-ubhnchn="29"
            stroke="#AD5937"
            stroke-width="8"
          />
          <path
            d="M771.3 1005.6h282c28.5 0 43.1-22.7 43.1-43.4V769.3"
            data-ubhnchn="30"
            stroke="#CB6418"
            stroke-width="8"
          />
          <path
            d="M770.3 544.6h283.5a30.3 30.3 0 0 1 30.9 30.9v172.4"
            data-ubhnchn="31"
            stroke="#AD5937"
            stroke-width="8"
          />
          <path
            d="M771.3 532.5h282c28.5 0 43.1 22.7 43.1 43.4v177.6"
            data-ubhnchn="32"
            stroke="#CB6418"
            stroke-width="8"
          />
          <path
            d="M845.8 520.2h207.8c33.1 0 54.8 25.9 54.8 54.8v265.6"
            data-ubhnchn="33"
            stroke="#6A2"
            stroke-width="8"
          />
          <path
            d="M759 791.4v142.8s.6 7.8-5.8 14.1l-256.4 256.5s-5.3 5.9-14.2 5.9H223.9c-9 0-14.1 5.9-14.1 5.9l-34 34"
            data-ubhnchn="34"
            stroke="#DA6BA2"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M1108.6 839.4v31.8s-.5 7.7 5.9 14l394 394.2"
            data-ubhnchn="35"
            stroke="#6A2"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M1298 1313.2 1398 1213c20.2-20.1 14.5-46.5-.2-61.2"
            data-ubhnchn="36"
            stroke="#fff"
            stroke-width="12"
          />
          <path
            d="M442.2 762.6h670"
            data-ubhnchn="37"
            stroke="#EC7405"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M444.8 750.6h667.4"
            data-ubhnchn="38"
            stroke="#816DA6"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M441.3 774.6h670.9"
            data-ubhnchn="39"
            stroke="#0066AD"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M439.6 786.6h322.6"
            data-ubhnchn="40"
            stroke="#992746"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M759 41.5v731"
            data-ubhnchn="50"
            stroke="#DA6BA2"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M771 383.2c0-10.1-3.6-17-9.5-22.8L581.8 180.7"
            data-ubhnchn="51"
            stroke="#fff"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M771 1276V383v.2c0-10.1-3.6-17-9.5-22.8L581.8 180.7"
            data-ubhnchn="52"
            stroke="#007734"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M771 260.5v84.7c0 12.2 12 17.2 12 34.6v68.9"
            data-ubhnchn="53"
            stroke="#6A2"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M759 744.6h12.1a6 6 0 0 1 6 5.9v36.1a6 6 0 0 1-6 6H759a6 6 0 0 1-6-6v-36.1a6 6 0 0 1 6-6Z"
            data-ubhnchn="54"
            fill="#fff"
            stroke="#000"
            stroke-width="2"
          />
          <path
            d="M1006.8 817.6h16a7 7 0 1 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="59"
            fill="#816DA6"
          />
          <path
            d="M421.3 744.5h24.1a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6h-24.1a6 6 0 0 1-6-6v-36a6 6 0 0 1 6-6Z"
            data-ubhnchn="61"
            fill="#fff"
            stroke="#000"
            stroke-width="2"
          />
          <path
            d="m1122.3 910.1-43.8-43.8c-6.3-6.3-5.8-14-5.8-14v-12.9"
            data-ubhnchn="62"
            stroke="#fff"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="m1278 1316 103.3-103.2a30.3 30.3 0 0 0 0-43.7l-302.8-302.8c-6.3-6.3-5.8-14-5.8-14v-12.9"
            data-ubhnchn="63"
            stroke="#992746"
            stroke-width="8"
          />
          <path
            d="M770.7 1017.5h484.7s7.7-.5 14 5.9l276.1 276"
            data-ubhnchn="64"
            stroke="#fff"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M1084.6 744.6h24.1a6 6 0 0 1 6 5.9v24.1a6 6 0 0 1-6 6h-24.1a6 6 0 0 1-6-6v-24.1a6 6 0 0 1 6-6Z"
            data-ubhnchn="65"
            fill="#fff"
            stroke="#000"
            stroke-width="2"
          />
          <path
            d="M759 526.5h12.1a6 6 0 0 1 6 6v12.1a6 6 0 0 1-6 6H759a6 6 0 0 1-6-6v-12.1a6 6 0 0 1 6-6Z"
            data-ubhnchn="72"
            fill="#fff"
            stroke="#000"
            stroke-width="2"
          />
          <path
            d="M1108.6 846.7h-36a6 6 0 1 1 0-12h36a6 6 0 0 1 0 12Z"
            data-ubhnchn="76"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M445.4 765.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="77"
            fill="#EC7405"
          />
          <path
            d="M770.7 1017.5h484.7s7.7-.5 14 5.9l276.1 276"
            data-ubhnchn="80"
            stroke="#CD9C53"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M765 1017.5v-24a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0Z"
            data-ubhnchn="81"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="m677.7 1015.4 28-28a6 6 0 1 1 8.4 8.5l-28 28a6 6 0 0 1-8.4-8.5Z"
            data-ubhnchn="83"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M741.6 962.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="85"
            fill="#fff"
          />
          <path
            d="M1139.8 1020.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="90"
            fill="#fff"
          />
          <path
            d="M968.3 1017.5v-24a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0Z"
            data-ubhnchn="91"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M421.2 592.9h24a6 6 0 0 1 0 12h-24a6 6 0 0 1 0-12Z"
            data-ubhnchn="96"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M787.3 1035.2h16a7 7 0 0 1 0 14h-16a7 7 0 1 1 0-14Z"
            data-ubhnchn="104"
            fill="#CD9C53"
          />
          <path
            d="M387.6 599.8h16a7 7 0 0 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="106"
            fill="#CD9C53"
          />
          <path
            d="M146.3 557a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="123"
            fill="#992746"
          />
          <path
            d="M119.7 553.2h9a7 7 0 1 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="127"
            fill="#992746"
          />
          <path
            d="M667.3 532.5 686 540l-6-7.1 6.6-7.8-19.2 7.5Z"
            data-ubhnchn="129"
            fill="#CB6418"
          />
          <path
            d="m686.5 525-19.2 7.5L686 540"
            data-ubhnchn="130"
            stroke="#fff"
          />
          <path
            d="m799.9 993.6 18.5-7.4-6 7.1 6.6 7.8-19.1-7.5Z"
            data-ubhnchn="135"
            fill="#AD5937"
          />
          <path
            d="m819 1001.1-19.1-7.5 18.5-7.4"
            data-ubhnchn="136"
            stroke="#fff"
          />
          <path
            d="m856.7 1005.5-18.5-7.3 6 7-6.6 7.9 19.1-7.6Z"
            data-ubhnchn="137"
            fill="#CB6418"
          />
          <path
            d="m837.6 1013.1 19.1-7.6-18.5-7.3"
            data-ubhnchn="138"
            stroke="#fff"
          />
          <path
            d="m1084.4 719.7-7.3-18.6 7 6 7.9-6.6-7.6 19.2Z"
            data-ubhnchn="141"
            fill="#AD5937"
          />
          <path
            d="m1092 700.5-7.6 19.2-7.3-18.5"
            data-ubhnchn="142"
            stroke="#fff"
          />
          <path
            d="m1096.3 662.9-7.4 18.5 7.1-6 7.8 6.6-7.5-19.1Z"
            data-ubhnchn="143"
            fill="#CB6418"
          />
          <path
            d="m1103.8 682-7.5-19.1-7.4 18.5"
            data-ubhnchn="144"
            stroke="#fff"
          />
          <path
            d="M1190 808a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="147"
            fill="#fff"
          />
          <path
            d="M1218.2 836.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="149"
            fill="#fff"
          />
          <path
            d="M1246.5 864.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="151"
            fill="#fff"
          />
          <path
            d="M1189.8 735.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="153"
            fill="#fff"
          />
          <path
            d="M1482.7 894a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="166"
            fill="#fff"
          />
          <path
            d="M1322.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="169"
            fill="#fff"
          />
          <path
            d="M1463.6 654.9h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2c.4 0 .8 0 1.1.2l-.1 1-.7-.2c-.2 0-.3 0-.4.2l-.1.5v.4h1v1h-1v4.2h-1.4V656h-.8v-1.1Z"
            data-ubhnchn="173"
            fill="#000"
          />
          <path
            d="M1339.4 633.6h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2c.4 0 .7 0 1.1.2l-.2 1-.6-.1-.4.1-.2.6v.3h1v1.1h-1v4.1h-1.3v-4h-.8v-1.2Z"
            data-ubhnchn="177"
            fill="#000"
          />
          <path
            d="M1562.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="178"
            fill="#fff"
          />
          <path
            d="M1576.8 896.8a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="182"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M1576.8 893.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="183"
            fill="#0066AD"
          />
          <path
            d="M1594.1 890.8h9a7 7 0 1 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="185"
            fill="#0066AD"
          />
          <path
            d="M1717.5 537.6a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="190"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M1299.6 605.5c6.3-6.3 5.8-14 5.8-14V479"
            data-ubhnchn="194"
            stroke="#816DA6"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M1305.5 485.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="197"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M1305.5 482.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="198"
            fill="#816DA6"
          />
          <path
            d="M1272.2 478.2h16a7 7 0 0 1 0 14h-16a7 7 0 1 1 0-14Z"
            data-ubhnchn="201"
            fill="#816DA6"
          />
          <path
            d="M1358.2 549.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="204"
            fill="#fff"
          />
          <path
            d="M1382.2 525.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="206"
            fill="#fff"
          />
          <path
            d="M1406.3 501.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="208"
            fill="#fff"
          />
          <path
            d="M1433.4 477.6a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="210"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M1433.4 474.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="211"
            fill="#816DA6"
          />
          <path
            d="M1450.5 467.4h9a7 7 0 1 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="213"
            fill="#816DA6"
          />
          <path
            d="m1291 1078.7 17-17a6 6 0 1 1 8.4 8.5l-17 17a6 6 0 0 1-8.5 0 6 6 0 0 1 0-8.5Z"
            data-ubhnchn="216"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="m1365 1152.7 16.9-17a6 6 0 0 1 8.5 8.5l-17 17a6 6 0 0 1-8.5 0 6 6 0 0 1 0-8.5Z"
            data-ubhnchn="221"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="m1286 1325 112.1-112c20.2-20.1 14.5-46.5-.2-61.2"
            data-ubhnchn="223"
            stroke="#CD9C53"
            stroke-width="8"
          />
          <path
            d="m1428.6 1199.4 8.5-8.5a6 6 0 0 1 8.4 8.5l-8.5 8.5a6 6 0 0 1-8.4-8.5Z"
            data-ubhnchn="224"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M1432.8 1206.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="225"
            fill="#6A2"
          />
          <path
            d="m1504.3 1275.2 8.5-8.5a6 6 0 1 1 8.5 8.5l-8.5 8.4a6 6 0 1 1-8.5-8.4Z"
            data-ubhnchn="227"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M1508.5 1282.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="228"
            fill="#6A2"
          />
          <path
            d="M1545.5 1305.4a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="230"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M1545.5 1302.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="231"
            fill="#CD9C53"
          />
          <path
            d="M1378 1219a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="235"
            fill="#fff"
          />
          <path
            d="m1282 1329.2-8.6-8.5a6 6 0 1 1 8.5-8.5l8.5 8.5a6 6 0 1 1-8.5 8.5Z"
            data-ubhnchn="239"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M1286.2 1328a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="240"
            fill="#CD9C53"
          />
          <path
            d="M1277.7 1319.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="241"
            fill="#992746"
          />
          <path
            d="M1562.5 1300.6h16a7 7 0 1 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="242"
            fill="#CD9C53"
          />
          <path
            d="M1458 1181.8h16a7 7 0 0 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="244"
            fill="#6A2"
          />
          <path
            d="M1250 1323.6h9a7 7 0 1 1 0 14h-9a7 7 0 0 1 0-14Z"
            data-ubhnchn="246"
            fill="#992746"
          />
          <path
            d="M771 1084s-.4 7.7 6 14l156.3 156.4"
            data-ubhnchn="250"
            stroke="#007734"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M771 1244.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="254"
            fill="#fff"
          />
          <path
            d="M771.1 1279.7a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="257"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M771.1 1276.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="258"
            fill="#007734"
          />
          <path
            d="M705.4 1275.8h16a7 7 0 0 1 0 14h-16a7 7 0 1 1 0-14Z"
            data-ubhnchn="260"
            fill="#007734"
          />
          <path
            d="M737.4 1275.8h16a7 7 0 0 1 0 14h-16a7 7 0 1 1 0-14Z"
            data-ubhnchn="262"
            fill="#007734"
          />
          <path
            d="M899.3 352h16a7 7 0 0 1 0 14h-16a7 7 0 1 1 0-14Z"
            data-ubhnchn="264"
            fill="#007734"
          />
          <path
            d="M820 1144.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="267"
            fill="#fff"
          />
          <path
            d="M842.7 1166.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="269"
            fill="#fff"
          />
          <path
            d="M865.3 1189.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="271"
            fill="#fff"
          />
          <path
            d="M888 1212a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="273"
            fill="#fff"
          />
          <path
            d="M910.6 1234.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="275"
            fill="#fff"
          />
          <path
            d="M933.7 1260.9a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="277"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M759 255h12a6 6 0 0 1 0 12h-12a6 6 0 1 1 0-12Z"
            data-ubhnchn="282"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M771 264a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="283"
            fill="#6A2"
          />
          <path
            d="m819 387.4 8.5 8.5a6 6 0 1 1-8.5 8.5l-8.5-8.5a6 6 0 1 1 8.5-8.5Z"
            data-ubhnchn="286"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M823.3 403.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="287"
            fill="#6A2"
          />
          <path
            d="m878.6 328 8.4 8.4a6 6 0 1 1-8.4 8.5l-8.5-8.5a6 6 0 1 1 8.5-8.5Z"
            data-ubhnchn="288"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M839.7 411.3h16a7 7 0 1 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="291"
            fill="#6A2"
          />
          <path
            d="M759 124h12a6 6 0 0 1 0 12h-12a6 6 0 1 1 0-12Z"
            data-ubhnchn="294"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M771 133a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="295"
            fill="#6A2"
          />
          <path
            d="M759.1 168.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="297"
            fill="#fff"
          />
          <path
            d="M771.1 168.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="299"
            fill="#fff"
          />
          <path
            d="M732.5 130h9a7 7 0 0 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="301"
            fill="#6A2"
          />
          <path
            d="M759.1 74.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="304"
            fill="#fff"
          />
          <path
            d="M759 48a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="306"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M759 45a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="307"
            fill="#DA6BA2"
          />
          <path
            d="M732.5 37.2h9a7 7 0 0 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="309"
            fill="#DA6BA2"
          />
          <path
            d="M970.4 239a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="312"
            fill="#fff"
          />
          <path
            d="M994.5 215a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="314"
            fill="#fff"
          />
          <path
            d="M1018.5 191a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="316"
            fill="#fff"
          />
          <path
            d="M1045.6 166.9a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="318"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M1045.6 163.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="319"
            fill="#007734"
          />
          <path
            d="M1062.8 156.7h9a7 7 0 1 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="321"
            fill="#007734"
          />
          <path
            d="M628.8 240.5h.8v-.4l.1-1c.1-.2.3-.4.6-.5a2 2 0 0 1 .9-.2l1.1.1-.1 1H631l-.1.6v.4h1v1h-1v4.1h-1.4v-4h-.8v-1.1Z"
            data-ubhnchn="328"
            fill="#000"
          />
          <path
            d="M614.3 216.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="329"
            fill="#fff"
          />
          <path
            d="M582.1 187a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="331"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="m1408.6 1025-47 46.9a30.3 30.3 0 0 1-43.6 0"
            data-ubhnchn="334"
            stroke="#CD9C53"
            stroke-linejoin="round"
            stroke-width="8"
          />
          <path
            d="M1378.7 1058a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="335"
            fill="#fff"
          />
          <path
            d="M1408.4 1031.2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="336"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M1408.4 1028.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="337"
            fill="#CD9C53"
          />
          <path
            d="M1425.2 1020.5h16a7 7 0 0 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="339"
            fill="#CD9C53"
          />
          <path
            d="M597.5 1107a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="343"
            fill="#fff"
          />
          <path
            d="M621.6 1083a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="345"
            fill="#fff"
          />
          <path
            d="M645.6 1059a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="347"
            fill="#fff"
          />
          <path
            d="M549.5 1155a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="349"
            fill="#fff"
          />
          <path
            d="M525.4 1179.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="352"
            fill="#fff"
          />
          <path
            d="M501.4 1203.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="354"
            fill="#fff"
          />
          <path
            d="M554 1207h.7v-.4l.1-1c.1-.2.3-.4.6-.5a2 2 0 0 1 .9-.2c.4 0 .8 0 1.1.2l-.1 1-.7-.1h-.4l-.1.6v.4h1v1h-1v4.2h-1.4v-4.1h-.8v-1.1Z"
            data-ubhnchn="356"
            fill="#000"
          />
          <path
            d="m171.5 1237.9 8.4 8.4a6 6 0 0 1-8.4 8.5l-8.5-8.5a6 6 0 1 1 8.5-8.4Z"
            data-ubhnchn="357"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M175.7 1253.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="358"
            fill="#DA6BA2"
          />
          <path
            d="M191.3 1221a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="361"
            fill="#fff"
          />
          <path
            d="M95 1320.4a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            data-ubhnchn="363"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2.6"
          />
          <path
            d="M188.8 1256.8h9a7 7 0 0 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="366"
            fill="#DA6BA2"
          />
          <path
            d="M409.4 1213.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="369"
            fill="#fff"
          />
          <path
            d="M305.9 1213.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="371"
            fill="#fff"
          />
          <path
            d="M1020.7 750.6v36a6 6 0 0 1-12 0v-36a6 6 0 1 1 12 0Z"
            data-ubhnchn="373"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M1014.7 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="374"
            fill="#816DA6"
          />
          <path
            d="M1534.3 1257.3h9a7 7 0 0 1 0 14h-9a7 7 0 0 1 0-14Z"
            data-ubhnchn="377"
            fill="#6A2"
          />
          <path
            d="M771.4 923h-12.6a6 6 0 0 1 0-12h12.6a6 6 0 0 1 0 12Z"
            data-ubhnchn="379"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M459.6 730h9a7 7 0 0 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="380"
            fill="#EC7405"
          />
          <path
            d="M874.3 335.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="383"
            fill="#007734"
          />
          <path
            d="M789 253.8h16a7 7 0 1 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="384"
            fill="#6A2"
          />
          <path
            d="m1214.2 1332.2 1.6-.2c.2.6.4 1 .7 1.2.3.3.7.4 1.2.4.6 0 1 0 1.3-.3.3-.3.4-.5.4-.8 0-.3 0-.4-.2-.6l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9-.5-.4-.7-1-.7-1.7 0-.4 0-.8.3-1.2.3-.4.7-.7 1.1-.9.5-.2 1-.3 1.7-.3 1 0 1.9.3 2.4.7.6.5.9 1.1.9 2h-1.7c-.1-.5-.3-.8-.5-1-.3-.2-.6-.3-1.1-.3a2 2 0 0 0-1.2.4c-.2 0-.3.3-.3.5s.1.4.3.5c.2.2.7.4 1.6.6a8 8 0 0 1 1.8.6c.5.2.8.5 1 .9.2.4.3.8.3 1.4 0 .4 0 .9-.4 1.3-.2.5-.6.8-1.1 1-.5.2-1.1.3-1.9.3-1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.1Z"
            data-ubhnchn="7"
            fill="#fff"
          />
          <path
            d="M1228.8 1335v-1.8h-3.5v-1.4l3.7-5.5h1.4v5.5h1v1.4h-1v1.8h-1.6Zm0-3.2v-3l-2 3h2Z"
            data-ubhnchn="7"
            fill="#fff"
          />
          <path
            d="M1232.3 1332.7l1.6-.1c0 .3.2.6.4.9.3.2.5.3.8.3.4 0 .7-.2 1-.4.2-.3.3-.7.3-1.3 0-.5-.2-1-.4-1.2-.2-.3-.5-.4-1-.4-.4 0-.8.2-1.2.6l-1.3-.1.8-4.5h4.4v1.5h-3.1l-.3 1.5 1.1-.3c.8 0 1.4.3 1.9.8s.8 1.2.8 2a3 3 0 0 1-.6 2c-.6.7-1.4 1.1-2.4 1.1-.8 0-1.4-.2-2-.6-.4-.5-.7-1-.8-1.8Z"
            data-ubhnchn="7"
            fill="#fff"
          />
          <path
            d="M499.7 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="41"
            fill="#fff"
          />
          <path
            d="M499.7 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="41"
            fill="#fff"
          />
          <path
            d="M499.7 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="41"
            fill="#fff"
          />
          <path
            d="M499.7 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="41"
            fill="#fff"
          />
          <path
            d="m478.2 798.5 1.4.5c-.2.8-.5 1.3-1 1.7a3 3 0 0 1-2 .6 3 3 0 0 1-2.3-1c-.6-.6-.9-1.5-.9-2.7a4 4 0 0 1 1-2.7c.5-.7 1.3-1 2.3-1a3 3 0 0 1 2.2.8c.3.3.6.7.7 1.3l-1.4.3c-.1-.4-.3-.6-.5-.9-.3-.2-.6-.3-1-.3-.6 0-1 .2-1.3.6-.3.4-.5 1-.5 1.8 0 1 .1 1.6.5 2 .3.4.7.5 1.2.5.4 0 .8 0 1-.3.3-.3.5-.6.6-1.2Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M482.2 794v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.2 1v2.6H481V794h1.3Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M488 797.6l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7H490a5.4 5.4 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2c0-.2 0-.4-.2-.5 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2l.3-.5V798.7Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M493.9 801.2h-1.4V796h1.3v.7l.6-.7.5-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M496.4 801.2V794h1.4v7.2h-1.4Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M498.9 798.5c0-.5.1-.9.3-1.3.3-.5.6-.8 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .7-.2 1.4-.7 1.9-.5.5-1.2.8-2 .8a3 3 0 0 1-1.3-.3l-1-1c-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M507.7 796v1h-1V800l.2.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5v-3.2h-.6V796h.6v-1l1.4-.9v1.9h.9Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M511 796v1h-.9V800l.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7V796h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M515 799.5l1.4.2c-.2.5-.5 1-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.2 1.8.7c.4.5.7 1.3.6 2.4H513c0 .4.1.7.3 1 .3.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M522.3 801.2h-1.4v-3.7l-.4-.5a.8.8 0 0 0-.4 0 1 1 0 0 0-.7.1 1 1 0 0 0-.4.5V801.2h-1.4V796h1.2v.7a2 2 0 0 1 1.7-.8l.9.1.5.4.3.6v4.2Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M523.5 799.3v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M489.2 811.2V804h1.3v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.8-.7v.8h-1.2Zm1.3-2.7c0 .5.1.9.3 1.1.2.4.5.6 1 .6.2 0 .5-.1.7-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M498.7 811.2v-.8a2 2 0 0 1-2.7.7l-.5-.7-.2-1.1V806h1.4v3.7l.3.4.5.1a1 1 0 0 0 1-.6l.1-1.4V806h1.4v5.2h-1.3Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M502.8 811.2h-1.4V806h1.3v.7l.5-.7.6-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1c-.1.2-.3.3-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M505.2 811.5l1.6.2c0 .2 0 .3.2.4l.6.1.8-.1.2-.4.1-.6v-.8c-.4.6-1 .9-1.5.9a2 2 0 0 1-1.7-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.6c.7 0 1.2.2 1.6.8v-.7h1.3v4.6c0 .6 0 1.1-.2 1.4 0 .3-.2.5-.4.7l-.7.4-1.2.2c-.9 0-1.5-.2-1.9-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.2-3c0 .5.1 1 .3 1.2.3.2.5.4.8.4.4 0 .7-.2.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="42"
            fill="#000"
          />
          <path
            d="M539.7 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="43"
            fill="#fff"
          />
          <path
            d="M539.7 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="43"
            fill="#fff"
          />
          <path
            d="M539.7 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="43"
            fill="#fff"
          />
          <path
            d="M539.7 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="43"
            fill="#fff"
          />
          <path
            d="M579.7 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="43"
            fill="#fff"
          />
          <path
            d="M579.7 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="43"
            fill="#fff"
          />
          <path
            d="M579.7 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="43"
            fill="#fff"
          />
          <path
            d="M579.7 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="43"
            fill="#fff"
          />
          <path
            d="M548.3 801.2v-1.3l3.8-4.7h-3.4V794h5.3v1.1l-4 4.9h4.1v1.2h-5.8Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M554.7 798.5c0-.5.1-.9.4-1.3.2-.5.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 1.9s-1.1.8-1.9.8a3 3 0 0 1-1.4-.3l-1-1c-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4s.7-.2.9-.4c.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.2-.3-.5-.4-.9-.4s-.7.1-1 .4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M560.8 798.5c0-.5.1-.9.4-1.3.2-.5.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 1.9s-1.1.8-1.9.8a3 3 0 0 1-1.3-.3c-.5-.3-.8-.6-1-1-.3-.4-.4-1-.4-1.5Zm1.4 0c0 .6.2 1 .4 1.3.2.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.7.1-.9.4-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M567.3 801.2V794h1.3v7.2h-1.3Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M569.7 798.5c0-.5.1-.9.4-1.3.2-.5.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 1.9s-1.1.8-1.9.8a3 3 0 0 1-1.4-.3l-1-1c-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4s.7-.2.9-.4c.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.2-.3-.5-.4-.9-.4s-.7.1-1 .4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M576 801.5l1.6.2c0 .2 0 .3.2.4l.6.1.8-.1.3-.4v-1.4c-.4.6-.9.9-1.5.9a2 2 0 0 1-1.7-1 3 3 0 0 1-.5-1.7c0-.8.3-1.5.7-2a2 2 0 0 1 1.5-.6c.7 0 1.2.2 1.6.8v-.7h1.3v4.6c0 .6 0 1.1-.2 1.4 0 .3-.2.5-.4.7l-.7.4-1.2.2c-.8 0-1.5-.2-1.8-.5-.4-.3-.6-.7-.6-1.1v-.2Zm1.2-3c0 .5.2 1 .4 1.2.2.2.4.4.8.4.3 0 .6-.2.8-.4.2-.3.4-.7.4-1.2s-.2-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.4.6-.4 1.2Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M582.3 795.3V794h1.3v1.3h-1.3Zm0 5.9V796h1.3v5.2h-1.3Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M584.6 799.7l1.3-.2c0 .2.2.4.4.6l.7.2c.4 0 .7 0 .8-.2.2-.1.2-.2.2-.4v-.2l-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.3-.7-.7-.7-1.1 0-.5.2-.9.6-1.2.3-.3.9-.4 1.6-.4.7 0 1.3 0 1.6.3.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.2-.8.2-.2.3s0 .2.2.2l1.2.4 1.6.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.2-.2-1.6-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M595.1 797.5l-1.3.3a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.4.9.4l.6-.3c.2-.1.3-.4.3-.7l1.4.2c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.2-1.5.7-2 .4-.5 1-.7 1.8-.7.6 0 1.2.1 1.5.4.4.2.7.7.8 1.2Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M597.5 794v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.2 1v2.6h-1.3V794h1.3Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M605.3 799.5l1.4.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M609.2 801.2h-1.4V796h1.3v.7l.6-.7.5-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M567.5 808.5v-1.2h3.2v2.9a4.8 4.8 0 0 1-3 1.1 4 4 0 0 1-2-.5 3 3 0 0 1-1.3-1.3c-.3-.6-.4-1.3-.4-2s.1-1.4.4-2c.3-.5.8-1 1.4-1.3.5-.2 1-.3 1.7-.3 1 0 1.6.2 2.1.5.5.4.8 1 1 1.6l-1.5.3c0-.4-.3-.7-.5-.9-.3-.2-.7-.3-1-.3a2 2 0 0 0-1.6.6c-.4.4-.5 1-.5 1.8 0 .9.1 1.5.5 2a2.5 2.5 0 0 0 2.4.5l.8-.6v-.9h-1.7Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M573 807.6l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7H575a5 5 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2c0-.2 0-.4-.2-.5 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2l.3-.5V808.7Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M578.9 811.2h-1.4V806h1.3v.7l.6-.7.5-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="44"
            fill="#000"
          />
          <path
            d="M583.8 806v1h-1v2.2l.1.7.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5v-3.2h-.6V806h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="45"
            fill="#000"
          />
          <path
            d="M587.8 809.5l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.2-1.5.6-2 .5-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="45"
            fill="#000"
          />
          <path
            d="M595 811.2h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4V806h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="45"
            fill="#000"
          />
          <path
            d="M619.7 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="46"
            fill="#fff"
          />
          <path
            d="M619.7 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="46"
            fill="#fff"
          />
          <path
            d="M619.7 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="46"
            fill="#fff"
          />
          <path
            d="M619.7 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="46"
            fill="#fff"
          />
          <path
            d="M699.7 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="46"
            fill="#fff"
          />
          <path
            d="M699.7 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="46"
            fill="#fff"
          />
          <path
            d="M699.7 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="46"
            fill="#fff"
          />
          <path
            d="M699.7 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="46"
            fill="#fff"
          />
          <path
            d="M684.5 733.1V726h1.4v2.8h2.9V726h1.4v7.1h-1.4V730h-2.9v3.1h-1.4Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M692.7 729.5l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4l1.4.2.6.6c.2.2.2.6.2 1.2v2.6l.3.7H695a5.4 5.4 0 0 1-.2-.5l-.8.5-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.6-.5-1s.1-.6.3-.9l.5-.5 1.1-.3 1.4-.4c0-.4-.1-.5-.2-.7l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M700.7 733.1v-.7a2 2 0 0 1-2.7.7l-.6-.7-.2-1.2V728h1.4v3.8l.4.4.5.1a1 1 0 0 0 1-.7V728h1.5v5.2h-1.3Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M703.3 728h1.3v.7a2 2 0 0 1 1.6-.9 2 2 0 0 1 1.6.7c.4.5.6 1.2.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.6l-.8-.6v2.6h-1.4v-7.2Zm1.4 2.4c0 .6.1 1 .4 1.3.2.3.5.5.8.5.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.3 0-.5-.1-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.1Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M711.9 728v1h-1V732l.2.1.2.1.6-.1v1c-.2.2-.6.2-1 .2h-.7a1 1 0 0 1-.4-.4l-.2-.5V729h-.7v-1h.7v-1l1.3-.9v1.8h1Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M712.7 731.2v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M680.5 743.1V736h1.4v2.5a2 2 0 0 1 3 0c.5.5.7 1.1.7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.8-.6v.7h-1.3Zm1.4-2.7c0 .6 0 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.3 0-.5-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M687.7 739.5l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4l1.4.2.6.6c.2.2.2.6.2 1.2v2.6l.3.7H690a5.4 5.4 0 0 1-.2-.5l-.8.5-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.6-.5-1s.1-.6.3-.9l.5-.5 1.1-.3 1.4-.4c0-.4-.1-.5-.2-.7l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M693.6 736v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3V736h1.3Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M703.1 743.1h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.1 1 1 0 0 0-.7.2 1 1 0 0 0-.3.5l-.2 1.2v2.3h-1.3V738h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .5 0 .8.2l.6.4.2.6.1.9v3.2Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M705.9 736v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1l.1 1v3.1h-1.4v-3.7c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4V736h1.4Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M710.3 740.5c0-.5.1-1 .3-1.4l1-1c.4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .8-.2 1.5-.7 2-.5.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.7-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .5.1 1 .4 1.2.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.3.3-.7.3-1.2s0-.9-.3-1.1c-.3-.3-.6-.5-1-.5-.3 0-.6.2-.8.5-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M716.1 738h.8v-.5l.1-1 .5-.5a2 2 0 0 1 1-.2l1.1.2-.2 1-.6-.1-.4.1-.1.6v.3h1v1.1h-1v4.1h-1.4v-4h-.8v-1.2Z"
            data-ubhnchn="47"
            fill="#000"
          />
          <path
            d="M659.7 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="48"
            fill="#fff"
          />
          <path
            d="M659.7 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="48"
            fill="#fff"
          />
          <path
            d="M659.7 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="48"
            fill="#fff"
          />
          <path
            d="M659.7 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="48"
            fill="#fff"
          />
          <path
            d="M639.8 794h4.1l.7.4c.3.1.4.3.6.6l.2.8c0 .3 0 .6-.3 1l-.7.6c.4 0 .8.3 1 .6.2.3.4.7.4 1a2.1 2.1 0 0 1-.9 1.8 2 2 0 0 1-1 .3h-4.1V794Zm1.4 1.2v1.6h2c.3 0 .5 0 .6-.2l.2-.6c0-.2 0-.4-.2-.5a.8.8 0 0 0-.5-.3h-2.1Zm0 2.8v2h2.4l.5-.4.2-.6c0-.2 0-.4-.2-.5a.9.9 0 0 0-.4-.4 5 5 0 0 0-1.3 0h-1.2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M650 799.5l1.4.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.6 1.3.6 2.4H648c0 .4.1.7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M652.5 801.2V794h1.4v7.2h-1.4Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M655.3 801.2V794h1.4v7.2h-1.4Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M661.1 799.5l1.4.2c-.2.5-.5 1-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M665 801.2l-2-5.2h1.4l1 2.6.3 1a12.3 12.3 0 0 0 .3-1l1-2.6h1.4l-2 5.2H665Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M672.6 801.2v-.8a2 2 0 0 1-2.7.7l-.5-.7-.2-1.1V796h1.4v3.7c0 .2.2.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4V796h1.4v5.2h-1.3Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M678.3 799.5l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M597.5 743.1v-6h-2.1V736h5.7v1.3h-2.2v5.9h-1.4Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M602 737.2V736h1.4v1.3H602Zm0 5.9v-5.2h1.4v5.2H602Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M607.8 741.5l1.3.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2l.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M611.6 743.1h-1.3v-5.2h1.2v.8l.6-.7.6-.2c.3 0 .6 0 1 .3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2-.2 0-.3.3-.4.6v3.3Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M614 743.4l1.6.2.2.4.6.2.9-.2.2-.4V742.3c-.3.5-.8.8-1.5.8a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1.2.3 1.6.8v-.7h1.3v4.7c0 .6 0 1-.2 1.3 0 .3-.2.6-.4.8l-.7.4-1.2.1c-.9 0-1.5-.1-1.9-.4-.3-.3-.5-.7-.5-1.2v-.2Zm1.3-3c0 .6.1 1 .3 1.2.2.3.5.4.8.4.4 0 .6-.1.9-.4.2-.3.3-.6.3-1.2 0-.5-.1-.9-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M621.3 739.5l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4.7 0 1.1 0 1.4.2.3.2.5.3.6.6.2.2.2.6.2 1.2v2.6l.3.7h-1.3a5 5 0 0 1-.2-.6c-.2.3-.5.4-.8.6l-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.1.6-.3 1-.3l1.4-.4v-.1c0-.3 0-.5-.2-.6l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2 0-.3.2-.3.4l.2.5.6.3c.2 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M627.2 743.1h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.4 1.2-.7-.3c-.2 0-.3 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M632.2 738v1h-1v2.8l.2.2h.7l.2 1-1.1.2-.7-.1a1 1 0 0 1-.4-.3l-.2-.6V739h-.7v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M636.1 741.5l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3H634c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M643.4 743.1H642v-3.7l-.3-.4a.8.8 0 0 0-.5-.2l-.7.2a1 1 0 0 0-.4.6v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.8-.9c.3 0 .5 0 .8.2.2 0 .4.2.6.4l.2.6.1.9v3.2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M519.1 730.8l1.4-.1.5 1c.3.2.6.3 1 .3.5 0 .9 0 1.1-.3.3-.2.4-.4.4-.7 0-.1 0-.3-.2-.4l-.5-.3-1.1-.3a4 4 0 0 1-1.7-.7 1.9 1.9 0 0 1-.3-2.5c.2-.3.5-.5.9-.7.4-.2.8-.3 1.4-.3.9 0 1.6.2 2 .6.5.4.7 1 .7 1.6h-1.4c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-1-.3-.3 0-.7.1-1 .3l-.1.4c0 .2 0 .4.2.5l1.3.5a7 7 0 0 1 1.6.5l.8.7.2 1.1a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.5.3c-1 0-1.6-.3-2.1-.7-.5-.4-.8-1-.9-1.8Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M527.2 729.5l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4l1.3.2.7.6.2 1.2v2.6c0 .2.1.5.3.7h-1.4a5 5 0 0 1-.2-.5l-.7.5-.9.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.4c0-.4 0-.5-.2-.7l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5-.1.7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M533.1 733.1l-2-5.2h1.4l1 2.7.3.9a12.9 12.9 0 0 0 .2-1l1-2.6h1.4l-2 5.2H533Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M537.3 727.2V726h1.4v1.2h-1.4Zm0 6v-5.3h1.4v5.2h-1.4Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M540 733.5l1.5.2c0 .1 0 .3.2.3l.6.2c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.4.5-.9.8-1.5.8a2 2 0 0 1-1.7-.9 3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.9v-.8h1.3v4.7l-.1 1.4-.5.7-.7.4-1.2.1c-.8 0-1.5-.1-1.8-.4-.4-.3-.6-.7-.6-1.2v-.1Zm1.2-3c0 .5 0 .9.3 1.1.2.3.5.4.8.4.3 0 .6-.1.8-.4.2-.2.4-.6.4-1.1 0-.6-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M550.9 733.1h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4V728h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2l.5.4.3.6V733Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M551.6 728h1.5l1.2 3.6 1.2-3.7h1.5l-1.9 5-.3 1-.3.6a1.5 1.5 0 0 1-1 .6l-.6.1h-.8l-.1-1.1h.5c.4 0 .6 0 .8-.2l.3-.8-2-5.2Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M557.7 731.2v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M528.9 738h1.3v.7a2 2 0 0 1 1.6-.9 2 2 0 0 1 1.5.7c.4.5.7 1.2.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.3.6l-.7-.6v2.6h-1.4v-7.2Zm1.4 2.4c0 .6 0 1 .3 1.3.2.3.5.5.8.5.4 0 .6-.2.8-.4.3-.3.4-.7.4-1.3 0-.5-.2-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.1Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M535 743.1V736h1.4v7.1H535Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M538.8 739.5l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4l1.4.2.6.6c.2.2.2.6.2 1.2v2.6l.3.7H541a5 5 0 0 1-.2-.5l-.8.5-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.4c0-.4 0-.5-.2-.7l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5l.2.5.6.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M545.8 738v1h-1V742l.2.1.2.1.6-.1v1c-.2.2-.6.2-1 .2h-.7a1 1 0 0 1-.4-.4l-.2-.5V739h-.7v-1h.7v-1l1.3-.9v1.8h1Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M546.2 743.1v-1l2-2.3.6-.7h-2.4v-1.2h4.3v1l-2 2.3-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="49"
            fill="#000"
          />
          <path
            d="M833.8 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="55"
            fill="#fff"
          />
          <path
            d="M833.8 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="55"
            fill="#fff"
          />
          <path
            d="M833.8 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="55"
            fill="#fff"
          />
          <path
            d="M833.8 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="55"
            fill="#fff"
          />
          <path
            d="M806.4 801.2V794h1.5v2.8h2.8V794h1.4v7.2h-1.4V798h-2.8v3.2h-1.5Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M814.7 797.6l-1.3-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.1 1.3v2.6l.3.7h-1.3a5 5 0 0 1-.2-.6l-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2c-.2.1-.3.3-.3.5s.1.4.3.5l.5.2c.2 0 .5 0 .7-.2.2-.2.3-.3.3-.5V798.7Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M823.7 797.5l-1.3.3a1 1 0 0 0-.4-.7 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.4.8.4.3 0 .5-.1.7-.3.1-.1.3-.4.3-.7l1.4.2c-.2.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.2-1.5.7-2 .4-.5 1-.7 1.8-.7.6 0 1.1.1 1.5.4.4.2.7.7.8 1.2Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M824.7 801.2V794h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 1.9 3.3H828l-1.3-2.4-.6.7v1.7h-1.4Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M833.3 799.5l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.2.6-.2 1h2Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M835.4 799.7l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.2.5.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2-.8.2-.1.3.1.2 1.3.4 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M846 797.5l-1.4.3a1 1 0 0 0-.3-.7 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.2.5.4.8.4.3 0 .5-.1.6-.3.2-.1.3-.4.4-.7l1.3.2c0 .6-.4 1-.8 1.4-.4.3-.9.5-1.6.5-.7 0-1.3-.3-1.8-.7-.4-.5-.6-1.2-.6-2 0-.9.2-1.5.6-2 .5-.5 1.1-.7 1.9-.7.6 0 1.1.1 1.5.4.3.2.6.7.8 1.2Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M848.4 794v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6H847V794h1.4Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M856.1 799.5l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4H854c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M860 801.2h-1.4V796h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6V801.2Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M821.1 811.2V804h2.2l1.3 4.9 1.3-4.9h2.1v7.2h-1.3v-5.7l-1.4 5.7h-1.4l-1.4-5.7v5.7H821Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M830.5 807.6l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a5 5 0 0 1-.1-.6l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2l-.1-.5-.8-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2l.3-.5V808.7Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M836.4 811.2H835V806h1.3v.7l.6-.7.5-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M838.9 811.2V804h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 1.9 3.3h-1.5l-1.3-2.4-.6.7v1.7h-1.4Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M846.9 806v1h-1V810l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7V806h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="56"
            fill="#000"
          />
          <path
            d="M873.8 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="57"
            fill="#fff"
          />
          <path
            d="M873.8 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="57"
            fill="#fff"
          />
          <path
            d="M873.8 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="57"
            fill="#fff"
          />
          <path
            d="M873.8 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="57"
            fill="#fff"
          />
          <path
            d="M913.8 753.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="57"
            fill="#fff"
          />
          <path
            d="M913.8 765.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="57"
            fill="#fff"
          />
          <path
            d="M913.8 777.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="57"
            fill="#fff"
          />
          <path
            d="M913.8 789.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="57"
            fill="#fff"
          />
          <path
            d="M891.2 794h1.5v4.5c0 .6 0 1-.2 1.4a2 2 0 0 1-.7 1c-.4.3-.9.4-1.5.4-.7 0-1.2-.2-1.6-.6-.4-.4-.6-1-.6-1.8l1.4-.1.1.9c.2.2.4.3.8.3.3 0 .5 0 .6-.2.2-.2.2-.6.2-1.2V794Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M895.2 797.6l-1.2-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.5-.4s1.1 0 1.4.2c.3.1.5.3.6.5.2.3.2.7.2 1.3v2.6l.3.7h-1.3a5 5 0 0 1-.2-.6l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.2-.5-.6-.5-1 0-.3.1-.6.3-.8.1-.3.3-.4.5-.6l1.1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1-.9.3-.7.2c-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .5 0 .7-.2.2-.2.3-.3.3-.5V798.7Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M904.5 801.2H903v-3.7l-.4-.5a.8.8 0 0 0-.4 0l-.7.1a1 1 0 0 0-.4.5V801.2h-1.4V796h1.2v.7a2 2 0 0 1 1.8-.8l.8.1.5.4.3.6v4.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M910.6 801.2h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5 0l-.7.1a1 1 0 0 0-.3.5l-.1 1.2v2.4h-1.4V796h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M911.7 798.5c0-.5.1-.9.3-1.3.2-.5.6-.8 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .7-.2 1.4-.7 1.9-.5.5-1.2.8-2 .8a3 3 0 0 1-1.3-.3c-.4-.3-.8-.6-1-1-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M919 801.2l-1.6-5.2h1.4l1 3.4.8-3.4h1.4l.8 3.4 1-3.4h1.4l-1.7 5.2h-1.3l-.9-3.4-.9 3.4h-1.3Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M925.9 795.3V794h1.4v1.3h-1.4Zm0 5.9V796h1.4v5.2h-1.4Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M931 796v1h-.9V800l.2.2h.7l.2 1-1.1.2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7V796h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M931.5 801.2V800l1.9-2.2.7-.8h-2.5V796h4.3v1l-2 2.2-.6.8h2.7v1.2h-4.5Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M936.8 799.3v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M898 811.2V804h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.5.5 2 2 0 0 1-.7-.7v.8H898Zm1.4-2.7c0 .5 0 .9.2 1.1.3.4.6.6 1 .6.3 0 .6-.1.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M905.5 811.2h-1.4V806h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6V811.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M911.5 811.2v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1V806h1.3v2.4l.1 1.3c0 .2.1.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4V806h1.4v5.2h-1.3Zm-2.7-6.1v-1.2h1.2v1.2h-1.2Zm2 0v-1.2h1.3v1.2h-1.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M918.7 807.5l-1.3.3a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.4.9.4l.6-.3c.2-.1.3-.4.3-.7l1.4.2c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.2-1.5.7-2 .4-.5 1-.7 1.8-.7.6 0 1.1.1 1.5.4.4.2.7.7.8 1.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M919.7 811.2V804h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 2 3.3H923l-1.3-2.4-.6.7v1.7h-1.4Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M928.3 809.5l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M855.1 733.1h-1.6l-.6-1.6H850l-.5 1.6h-1.6l2.8-7.1h1.5l2.9 7.1Zm-2.7-2.8-1-2.7-1 2.7h2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M855.9 733.1V726h1.3v7.1H856Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M861.6 731.5l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.8.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M863.5 733.1l2-2.6-1.9-2.6h1.7l1 1.5.9-1.5h1.6l-1.8 2.5 2 2.7h-1.7l-1-1.6-1.2 1.6h-1.6Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M870.8 729.5l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4l1.4.2.6.6.2 1.2v2.6l.3.7h-1.4a5.4 5.4 0 0 1-.2-.5l-.7.5-.9.1c-.5 0-1-.1-1.2-.4-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1.1-.3 1.3-.4c0-.4 0-.5-.2-.7l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5-.1.7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M880 733.1h-1.3v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4V728h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3.1.5.2.6.4l.3.6V733Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M886.2 733.1h-1.3v-.7a2 2 0 0 1-1.6.8 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-.9.2-1.5.7-2a2 2 0 0 1 3 0V726h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.4.6-.4 1.1Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M890.6 731.5l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M894.4 733.1h-1.3V728h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6-.1.3-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M896.9 731.2v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M863 738h1.3v.7a2 2 0 0 1 1.7-.9 2 2 0 0 1 1.5.7c.4.5.6 1.2.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.6l-.8-.6v2.6h-1.3v-7.2Zm1.4 2.4c0 .6.1 1 .4 1.3.2.3.5.5.8.5.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.3 0-.5 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.1Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M869.2 743.1V736h1.4v7.1h-1.4Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M873 739.5l-1.2-.2c.1-.5.3-.9.7-1.1.3-.3.8-.4 1.5-.4l1.4.2.6.6.2 1.2v2.6l.3.7H875a5.4 5.4 0 0 1-.1-.5l-.8.5-.9.1c-.5 0-1-.1-1.2-.4-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1.1-.3c.7-.1 1.1-.3 1.3-.4l-.1-.7-.8-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.7.3c-.2.1-.3.3-.3.5s0 .3.2.5l.6.2.7-.3.3-.4v-1Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M880 738v1h-1V742l.1.1.3.1.5-.1.1 1c-.3.2-.6.2-1 .2h-.7a1 1 0 0 1-.4-.4l-.2-.5V739h-.7v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M880.3 743.1v-1l2-2.3.7-.7h-2.5v-1.2h4.3v1l-2 2.3-.7.8H885v1.1h-4.7Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M987.7 803.2 986 796h1.5l1.1 5 1.3-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.5l-1.5-5.4-1.4 5.4h-1.6Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M997.2 799.6l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.3.1.6.3.7.5l.2 1.3v2.6l.3.7h-1.4a5.4 5.4 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.4-.2-.5-.6-.5-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V800.7Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1003 803.2h-1.3V798h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2-.5.1-.4.6V803.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1005.1 801.7l1.4-.2c0 .2.2.4.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.5 7.5 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.1 0-.5.2-.9.6-1.2.3-.3.9-.4 1.6-.4.7 0 1.2 0 1.6.3.3.2.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2-.8.2-.1.3.1.2 1.3.4c.7.2 1.3.4 1.5.6.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.7-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1015.7 799.5l-1.4.3a1 1 0 0 0-.3-.7 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.2.5.4.8.4.3 0 .5-.1.7-.3.1-.1.3-.4.3-.7l1.4.2c-.2.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.9-.7-.4-.5-.6-1.2-.6-2 0-.9.2-1.5.6-2 .5-.5 1.1-.7 1.9-.7.6 0 1.1.1 1.5.4.4.2.6.7.8 1.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1018.1 796v2.6a2 2 0 0 1 1.6-.7l.8.1a1.4 1.4 0 0 1 .9 1v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6v3.6h-1.5V796h1.4Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1023.9 799.6l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.3.1.6.3.7.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V800.7Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1031.8 803.2v-.8a2.1 2.1 0 0 1-2.6.7c-.3-.2-.5-.4-.6-.7l-.2-1.1V798h1.4v3.7c0 .2.2.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4V798h1.4v5.2h-1.3Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1037.5 801.5l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2 1h2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1041.4 803.2h-1.4V798h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6V803.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M999.4 810.8l1.4-.1c.1.5.3.8.5 1 .3.3.7.4 1 .4.6 0 1-.1 1.1-.3.3-.2.4-.5.4-.7l-.1-.5-.6-.3-1.1-.3a4 4 0 0 1-1.7-.7 1.9 1.9 0 0 1-.3-2.4c.2-.4.5-.6.9-.8l1.4-.2c.9 0 1.6.2 2 .6.5.4.7.9.7 1.5l-1.4.1c0-.4-.2-.6-.4-.8l-1-.2c-.3 0-.7 0-1 .2l-.1.5c0 .2 0 .3.2.4.2.2.6.3 1.3.5l1.6.5.8.7c.1.3.3.7.3 1.2 0 .4-.2.8-.4 1.1a2 2 0 0 1-1 .8 4 4 0 0 1-1.5.3c-1 0-1.6-.2-2.1-.6-.5-.5-.8-1-.9-1.9Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1008.8 808v1h-.9V812l.1.2h.8l.2 1-1.1.2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7V808h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1011.1 813.2h-1.4V808h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1a1 1 0 0 0-.3.6V813.2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1014.7 809.6l-1.2-.3c.1-.5.4-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2l-.1-.5-.8-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2l.3-.5V810.7Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1019.2 813.2v-4.7c0-.6 0-1.1.2-1.5.1-.3.3-.6.7-.8.3-.2.7-.3 1.3-.3.6 0 1.1.1 1.4.4.4.3.5.6.5 1 0 .3 0 .7-.2 1l-.3.6v.5l.6.6c.4.4.6.6.7.9l.2.7c0 .5-.2.9-.5 1.2-.3.3-.7.5-1.2.5-.4 0-.7-.1-1-.3l-.6-.6 1-.6c0 .1 0 .2.2.3H1022.8l.1-.4-.1-.4-.7-.7c-.6-.5-.8-1-.8-1.2 0-.2 0-.6.3-1l.3-.6v-.3l-.1-.4a.6.6 0 0 0-.5-.1h-.4l-.2.4-.1 1.1v4.7h-1.4Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="M1028.4 811.5l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="58"
            fill="#000"
          />
          <path
            d="m1002.6 826.2 1.7-.2c.1.6.4 1 .7 1.3.3.2.7.4 1.2.4.6 0 1-.2 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5 0-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.3-.4.6-.7 1.1-.9.5-.2 1-.3 1.7-.3 1 0 1.9.3 2.4.7.6.5.9 1.1.9 2h-1.7l-.5-1-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.7.4 1.6.6l1.9.6a2.4 2.4 0 0 1 1.2 2.3 2.6 2.6 0 0 1-1.5 2.3c-.5.2-1.2.3-1.9.3-1 0-2-.2-2.5-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="60"
            fill="#fff"
          />
          <path
            d="M1014 822v-1.5h5.7v1.2a11.4 11.4 0 0 0-2.9 7.3h-1.6c0-1.2.3-2.4.8-3.7.4-1.2 1-2.3 1.8-3.3h-3.7Z"
            data-ubhnchn="60"
            fill="#fff"
          />
          <path
            d="M1020.8 826.8l1.6-.2c0 .4.2.7.4.9a1.1 1.1 0 0 0 1.7-.1c.2-.3.4-.7.4-1.3 0-.5-.2-.9-.4-1.2-.2-.2-.5-.4-1-.4-.4 0-.8.2-1.2.7l-1.3-.2.8-4.5h4.4v1.5h-3.1l-.3 1.5a2.5 2.5 0 0 1 3 .5c.5.6.8 1.2.8 2s-.3 1.4-.7 2c-.5.7-1.3 1.1-2.3 1.1-.8 0-1.4-.2-2-.6-.4-.4-.7-1-.8-1.7Z"
            data-ubhnchn="60"
            fill="#fff"
          />
          <path
            d="M780.2 733.1V726h5v1.2h-3.5v1.7h3v1.2h-3v3h-1.5Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M787.6 733.1h-1.3V728h1.2v.8c.2-.4.4-.6.6-.7l.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M790.2 727.2V726h1.4v1.2h-1.4Zm0 6v-5.3h1.4v5.2h-1.4Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M796 731.5l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.3H794c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M803.3 733.1H802v-.7a2 2 0 0 1-1.6.8 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-.9.2-1.5.7-2a2 2 0 0 1 3 0V726h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M806 733.1h-1.4V728h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M808.5 727.2V726h1.4v1.2h-1.4Zm0 6v-5.3h1.4v5.2h-1.4Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M815.8 729.5l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1 0 .7.1 1 .3 1.3.2.3.5.4.9.4.2 0 .4 0 .6-.2.2-.1.3-.4.4-.8l1.3.3c-.1.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.8-.7-.5-.5-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.7 0 1.2.2 1.5.4.4.3.7.7.8 1.3Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M818.2 726v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1l.1 1v3.1h-1.4v-3.7l-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.2 1v2.6H817V726h1.3Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M822.8 731.2v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M779.7 741.6l1.4-.2c0 .3.2.5.4.6.1.2.4.3.7.3l.8-.2.2-.4-.1-.3-.5-.1a7.4 7.4 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.6.4c.3.2.6.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.3 0-.6 0-.8.2l-.1.2.1.3 1.3.4c.7.1 1.2.3 1.5.6.3.2.5.6.5 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M788.1 738v1h-.9V742l.2.1.2.1.5-.1.2 1c-.4.2-.7.2-1.1.2h-.7a1 1 0 0 1-.4-.4l-.2-.5V739h-.7v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M790.4 743.1H789V738h1.3v.8c.2-.4.4-.6.6-.7l.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M794 739.5l-1.2-.2c.1-.5.4-.9.7-1.1.3-.3.8-.4 1.5-.4l1.4.2.6.6.2 1.2v2.6l.3.7h-1.4a5.1 5.1 0 0 1-.1-.5l-.8.5-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.6-.5-1l.2-.9.6-.5 1.1-.3 1.4-.4c0-.4-.1-.5-.2-.7l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5s0 .3.2.5l.6.2.7-.3.3-.4v-1Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M798.5 743.1v-4.6c0-.7 0-1.2.2-1.5.1-.3.3-.6.7-.8.3-.2.7-.4 1.3-.4.6 0 1.1.2 1.4.5.4.3.5.6.5 1 0 .3 0 .6-.2 1a7 7 0 0 0-.3.5V739.4l.6.6c.4.3.6.6.7.8l.2.8c0 .5-.2.9-.5 1.2-.3.3-.7.4-1.2.4-.4 0-.7 0-1-.2-.3-.2-.5-.4-.6-.7l1-.5s0 .2.2.3h.2l.4-.1.1-.4-.1-.4-.7-.6c-.5-.6-.8-1-.8-1.3 0-.2 0-.5.3-1l.3-.6v-.3l-.1-.3a.6.6 0 0 0-.5-.2c-.1 0-.3 0-.4.2-.1 0-.2.1-.2.3l-.1 1v4.7h-1.4Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M807.7 741.5l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="66"
            fill="#000"
          />
          <path
            d="M759.1 685a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="67"
            fill="#fff"
          />
          <path
            d="M771.1 685a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="67"
            fill="#fff"
          />
          <path
            d="M780 677.2c0-.8 0-1.4.2-1.9l.7-1 1-.6a4 4 0 0 1 1.5-.3c1 0 1.9.4 2.5 1 .6.7 1 1.6 1 2.7 0 1.2-.4 2.1-1 2.8-.6.6-1.4 1-2.5 1-1 0-2-.4-2.5-1-.7-.7-1-1.6-1-2.7Zm1.4 0c0 .7.2 1.4.6 1.8.3.4.8.6 1.4.6.6 0 1-.2 1.4-.6.4-.4.6-1 .6-1.9 0-.8-.2-1.4-.6-1.8-.3-.4-.8-.6-1.4-.6-.6 0-1 .2-1.4.6-.4.4-.6 1-.6 1.8Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M789.3 680.7h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.4 1.2-.7-.3c-.2 0-.3 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M792.9 677.1l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2l.6.6.2 1.2v2.6c0 .2.1.5.3.7H795a5.2 5.2 0 0 1-.2-.6l-.7.6-.9.1c-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3-.2.5c0 .1 0 .3.2.4.1.2.3.3.5.3.3 0 .5-.1.7-.3l.4-.4v-1Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M802.1 680.7h-1.3v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.3.6V680.7Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M803.5 674.8v-1.2h1.4v1.2h-1.4Zm0 6v-5.3h1.4v5.2h-1.4Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M809.3 679l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.6 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M816.6 680.7h-1.4V677l-.3-.4a.8.8 0 0 0-.5-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.8-.9c.3 0 .5 0 .8.2a1.4 1.4 0 0 1 .8 1l.1.9v3.2Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M818 680.7v-7.1h1.3v2.5a2 2 0 0 1 3 0c.5.5.7 1.1.7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.8-.7v.8H818Zm1.3-2.7c0 .5 0 1 .3 1.2.2.4.5.5.9.5.3 0 .6 0 .8-.3.2-.3.3-.7.3-1.3 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M827.5 680.7v-.8a2 2 0 0 1-2.7.7l-.5-.6c-.2-.3-.2-.7-.2-1.2v-3.3h1.3v2.4l.1 1.3c0 .2.2.3.3.4l.5.2a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M831.5 680.7h-1.3v-5.2h1.2v.8l.6-.7.6-.2c.3 0 .6 0 1 .3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M834 681l1.5.2.2.4.6.2c.4 0 .7 0 .8-.2.2 0 .3-.2.3-.3v-1.4c-.3.5-.8.8-1.5.8a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.2.3 1.6.9v-.8h1.3v4.7c0 .6 0 1-.2 1.3 0 .4-.2.6-.4.8l-.7.4-1.2.1c-.9 0-1.5-.1-1.9-.4-.3-.3-.5-.7-.5-1.2v-.2Zm1.2-3c0 .6.1 1 .3 1.2.2.3.5.4.8.4.3 0 .6-.1.9-.4.2-.3.3-.6.3-1.2 0-.5-.1-.9-.3-1.2a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M843.2 679l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.6 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M847.1 680.7h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.4 1.2-.7-.3c-.2 0-.3 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M779.8 688.4l1.5-.2c0 .5.2.9.5 1 .2.3.6.4 1 .4.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.6 1-.7.3-.2.8-.3 1.3-.3 1 0 1.6.2 2 .6.5.4.7 1 .8 1.6H784c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-.9-.3s-.7.1-1 .3l-.2.4c0 .2 0 .3.2.5.2.1.6.3 1.3.4a7 7 0 0 1 1.6.6c.3.1.6.4.8.7.2.3.3.7.3 1.1a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M789.3 685.5v1.1h-1v2.8l.2.2h.8v1c-.2.2-.6.2-1 .2l-.7-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M791.5 690.7h-1.3v-5.2h1.2v.8l.6-.7.6-.2c.3 0 .6 0 1 .3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M795.1 687.1l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4s1.1 0 1.4.2l.6.6c.2.2.2.6.2 1.2v2.6l.3.7h-1.3a5.2 5.2 0 0 1-.2-.6l-.8.6-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8l.5-.5 1.1-.3 1.4-.4v-.1l-.2-.6-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2 0-.3.3-.3.5 0 .1 0 .3.2.4l.6.3c.2 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M799.6 690.7v-4.6c0-.7 0-1.2.2-1.5.1-.4.3-.6.7-.9.3-.2.7-.3 1.3-.3.6 0 1.1.2 1.5.5.3.2.5.6.5 1l-.3 1a7 7 0 0 0-.3.5v.5l.7.7.6.8c.2.3.2.5.2.8 0 .4-.2.8-.5 1.2-.3.3-.7.4-1.2.4-.4 0-.7 0-1-.2-.2-.2-.5-.4-.6-.7l1-.6c0 .2.1.3.2.3l.3.1.3-.1.1-.4-.1-.4-.7-.7c-.5-.5-.8-.9-.8-1.2l.3-1 .3-.6v-.3l-.1-.3a.6.6 0 0 0-.4-.2l-.5.1-.2.4v5.7h-1.5Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M808.8 689l1.4.3c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.6 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="68"
            fill="#000"
          />
          <path
            d="M759.1 645a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="69"
            fill="#fff"
          />
          <path
            d="M771.1 645a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="69"
            fill="#fff"
          />
          <path
            d="M780.2 645.3V638h1.4l3 4.8V638h1.3v7.2h-1.4l-3-4.7v4.7h-1.3Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M787.1 642.6c0-.5.1-1 .3-1.3.3-.5.6-.8 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.7 2.6c0 .8-.3 1.5-.8 2s-1.1.8-2 .8a3 3 0 0 1-1.3-.3l-1-1c-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.2.2.3.5.5.9.5.3 0 .6-.2.9-.5.2-.2.3-.6.3-1.1 0-.6 0-1-.3-1.2-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.6-.4 1.2Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M794.9 645.3h-1.4V640h1.3v.7l.5-.7.6-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1c-.2.1-.3.3-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M802.2 645.3h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 3.1 0V638h1.4v7.2Zm-3.7-2.7c0 .5.1.9.3 1.2a1 1 0 0 0 1.7 0c.2-.2.3-.6.3-1.1 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.6-.4 1.2Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M803.5 645.3V638h1.4v2.6a2 2 0 0 1 3 0c.4.4.6 1 .6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.7-.7v.8h-1.3Zm1.3-2.7c0 .5.1.9.3 1.1.2.4.6.6 1 .6.2 0 .5-.1.7-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.4.6-.4 1.2Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M810.7 641.7l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.3.1.6.3.7.5l.2 1.3v2.6l.3.7h-1.4a5 5 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.4-.3-.5-.6-.5-1s0-.6.2-.8c.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.6Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V642.8Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M816.6 638.1v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4V638h1.4Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M826 645.3h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4V640h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M828.8 638.1v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.6h-1.5V638h1.4Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M833.2 642.6c0-.5.2-1 .4-1.3.2-.5.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.6c0 .8-.3 1.5-.8 2s-1.1.8-1.9.8a3 3 0 0 1-1.3-.3c-.5-.3-.8-.6-1-1-.2-.4-.4-1-.4-1.5Zm1.4 0c0 .6.2 1 .4 1.2.3.3.6.5 1 .5.3 0 .6-.2.8-.5.3-.2.4-.6.4-1.1 0-.6-.1-1-.4-1.2-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.4.6-.4 1.2Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M839 640h.8v-.3c0-.5 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.2c-.2 0-.4 0-.5.2v.9h1v1h-1v4.2h-1.5V641h-.7v-1Z"
            data-ubhnchn="70"
            fill="#000"
          />
          <path
            d="M759.1 605a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="71"
            fill="#fff"
          />
          <path
            d="M771.1 605a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="71"
            fill="#fff"
          />
          <path
            d="M783 474.3h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 0 12Z"
            data-ubhnchn="73"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M783 392.2h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 0 12Z"
            data-ubhnchn="73"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M839.6 543.6v-24a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0Z"
            data-ubhnchn="73"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M793.7 461.4h4.2l.7.3.6.6.2.9-.3.9c-.2.3-.4.5-.7.6l1 .7c.2.3.3.6.3 1a2.1 2.1 0 0 1-.8 1.7 2 2 0 0 1-1 .4h-4.2v-7.1Zm1.5 1.2v1.6h2l.6-.3.2-.5c0-.2 0-.4-.2-.6a.8.8 0 0 0-.6-.2h-2Zm0 2.8v2h1.3l1-.1c.2 0 .4-.2.5-.3.2-.2.2-.4.2-.6l-.1-.6a.9.9 0 0 0-.5-.3 5 5 0 0 0-1.3 0h-1.1Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M800.6 465.9c0-.5.1-1 .4-1.4.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.7-1.9.7a3 3 0 0 1-1.4-.3c-.4-.2-.7-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .6.2 1 .4 1.2.2.3.5.4.9.4s.7-.1.9-.4c.2-.3.4-.7.4-1.2s-.2-.9-.4-1.1c-.2-.3-.5-.5-.9-.5s-.7.2-.9.5c-.2.2-.4.6-.4 1.1Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M808.4 468.5H807v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M815.7 468.5h-1.4V466l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3.1.5.2.6.4l.3.6v4.1Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M818.4 461.4v2.6a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2a1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.4-.1l-.7.1a1 1 0 0 0-.4.5v3.6H817v-7.1h1.3Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M822.9 465.9c0-.5 0-1 .3-1.4.2-.4.5-.7 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.5-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .6 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.1c-.2-.3-.5-.5-.9-.5-.3 0-.6.2-.9.5-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M829.3 468.5v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M832 463.3h1.2v.8a2 2 0 0 1 1.6-.9c.4 0 .7 0 .9.2l.6.7.7-.7.9-.2c.4 0 .7.1 1 .3.2.1.4.3.5.6l.2 1.1v3.3h-1.4v-3l-.1-1-.6-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.1 1v2.5H835v-3.8l-.3-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.6.1 1 1 0 0 0-.4.5v3.6H832v-5.2Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M844 466.9l1.3.2c-.2.5-.4.9-.8 1.2-.4.2-.9.3-1.4.3-1 0-1.6-.2-2-.8a3 3 0 0 1-.6-1.8c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.8.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M847.8 468.5h-1.3v-5.2h1.2v.8c.2-.4.4-.6.6-.7l.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M793.4 476.2l1.4-.1c0 .4.2.8.5 1 .2.2.6.3 1 .3.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.5 1-.7.3-.2.8-.3 1.3-.3 1 0 1.6.2 2 .6.5.4.8 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-.9-.3s-.7.1-1 .3l-.2.4c0 .2 0 .4.2.5l1.3.5c.7.1 1.3.3 1.6.5l.8.7c.2.3.3.7.3 1.1a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.3c-.9 0-1.6-.3-2-.7-.6-.4-.8-1-1-1.8Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M802.8 473.3v1.1h-1V477.3l.2.1.2.1.6-.1v1c-.2.2-.6.2-1 .2h-.7a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.7v-1l1.3-.9v1.8h1Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M805 478.5h-1.3v-5.2h1.3v.8l.5-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6-.1.3-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M808.6 475l-1.2-.3c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4l1.4.2.6.6c.2.2.2.6.2 1.2v2.6l.3.7h-1.3a5.3 5.3 0 0 1-.2-.5l-.8.5-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3c.7-.1 1.1-.2 1.4-.4 0-.4 0-.5-.2-.7l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.4.5Zm1.9 1-.9.2-.7.3c-.2.1-.3.3-.3.5l.2.5.6.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M813.1 478.5V474l.2-1.5c.1-.3.4-.6.7-.8.3-.2.8-.4 1.3-.4.7 0 1.1.2 1.5.5.3.3.5.6.5 1l-.3 1a7 7 0 0 0-.3.5V474.8l.7.6.7.9.1.7c0 .5-.1.9-.5 1.2-.3.3-.7.4-1.2.4-.4 0-.7 0-1-.2l-.6-.7 1-.5.2.3h.6l.2-.5-.2-.4-.7-.6c-.5-.6-.8-1-.8-1.3l.3-1 .3-.6v-.3l-.1-.3a.6.6 0 0 0-.4-.2c-.2 0-.3 0-.4.2-.2 0-.2.1-.3.3v5.7H813Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M822.3 476.9l1.4.2c-.2.5-.5.9-.9 1.2-.3.2-.8.3-1.4.3-.9 0-1.6-.2-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .3.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="74"
            fill="#000"
          />
          <path
            d="M759.1 830a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="75"
            fill="#fff"
          />
          <path
            d="M771.1 830a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="75"
            fill="#fff"
          />
          <path
            d="M1120.8 841.4v-6h-2.1v-1.1h5.7v1.2h-2.2v6h-1.4Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1126.6 841.4h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.4 1.2c-.3-.2-.5-.2-.7-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1132.2 839.8l1.3.2c-.1.5-.4.9-.8 1.2-.4.2-.9.3-1.4.3-1 0-1.6-.2-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1134.7 836.2h1.3v.8a1.9 1.9 0 0 1 1.6-.9 2 2 0 0 1 1.5.7c.5.5.7 1.2.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.3.6l-.7-.6v2.6h-1.4v-7.2Zm1.4 2.5c0 .6 0 1 .3 1.3.2.3.5.5.8.5.4 0 .6-.2.8-.4.3-.3.4-.7.4-1.3 0-.5-.2-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.1Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1143.2 836.2v1.1h-1v2.1l.1.8.1.1.3.1.5-.1.1 1c-.3.2-.6.2-1 .2h-.7a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1143.9 838.8c0-.5 0-1 .3-1.4.2-.4.5-.7 1-1 .4-.2.8-.3 1.3-.3a2.7 2.7 0 0 1 2.7 2.7c0 .8-.2 1.5-.7 2-.5.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .6.1 1 .4 1.2.2.3.5.4.8.4.4 0 .7-.1 1-.4.2-.3.3-.7.3-1.2s-.1-.9-.3-1.1c-.3-.3-.6-.5-1-.5-.3 0-.6.2-.8.5-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1151.3 841.4l-1.7-5.2h1.4l1 3.4.8-3.4h1.4l.8 3.4 1-3.4h1.4l-1.7 5.2h-1.3l-1-3.3-.8 3.3h-1.3Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1161 839.8l1.5.2c-.2.5-.5.9-.9 1.2-.4.2-.8.3-1.4.3-1 0-1.6-.2-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm.2-1.4c0-.4-.2-.7-.4-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1165 841.4h-1.4v-5.2h1.3v.8l.5-.7.6-.2c.3 0 .7.1 1 .3l-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1119.2 851.4v-7.1h4c.4.2.8.4 1 .8.3.3.5.8.5 1.4 0 .4-.1.8-.3 1a2 2 0 0 1-1.3 1.1l-1.5.1h-1v2.7h-1.4Zm1.4-6v2.1h.8l1.2-.1a1 1 0 0 0 .6-1 1 1 0 0 0-.8-.9h-1.8Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1126.9 847.8l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4l1.3.2.7.6.2 1.2v2.6c0 .3.1.5.3.7h-1.4a3.5 3.5 0 0 1-.2-.5l-.7.5-.9.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3c.7-.1 1.2-.2 1.4-.4 0-.4 0-.5-.2-.7l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1a8 8 0 0 1-.8.2l-.8.3-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5-.1.7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1132.7 851.4h-1.3v-5.2h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.6-.2l-.5.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M1135.3 851.4v-7.1h1.3v3.8l1.6-1.9h1.7l-1.8 2 2 3.2h-1.5l-1.3-2.3-.7.7v1.6h-1.3Z"
            data-ubhnchn="78"
            fill="#000"
          />
          <path
            d="M759.1 860a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="79"
            fill="#fff"
          />
          <path
            d="M771.1 860a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="79"
            fill="#fff"
          />
          <path
            d="M759.1 890a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="79"
            fill="#fff"
          />
          <path
            d="M771.1 890a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="79"
            fill="#fff"
          />
          <path
            d="M679.6 818.4h4.2l.7.4.6.6.2.8c0 .3-.1.7-.3 1l-.7.6c.4 0 .7.3 1 .6.2.3.3.7.3 1a2.1 2.1 0 0 1-.8 1.8 2 2 0 0 1-1 .3h-4.2v-7Zm1.5 1.2v1.7h2l.6-.3.2-.6c0-.2 0-.4-.2-.5a.8.8 0 0 0-.6-.3h-2Zm0 2.8v2h2.3l.5-.4c.2-.1.2-.3.2-.6l-.1-.5a.9.9 0 0 0-.5-.4 5 5 0 0 0-1.3 0h-1.1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M688.2 825.6h-1.4v-5.2h1.3v.7l.5-.7.6-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1c-.1.2-.3.3-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M691.8 822l-1.3-.3c.2-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.1 1.3v2.6l.3.7H694a5.4 5.4 0 0 1-.2-.6l-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2c-.2.2-.3.3-.3.5s.1.4.3.5l.5.2c.3 0 .5 0 .7-.2.2-.2.3-.3.3-.5V823.1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M701 825.6h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M707.2 825.6h-1.3v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-.8.2 2 2 0 0 1-1.6-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.5v7.2Zm-3.7-2.7c0 .5 0 1 .2 1.2.3.3.6.5 1 .5.3 0 .5-.1.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M711.5 824l1.4.1c-.2.5-.5 1-.8 1.2-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.1.4.3.8.3l.5-.2c.1-.1.3-.3.3-.6Zm.1-1.5c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.2 1h2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M718.8 825.6h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5 0l-.7.1a1 1 0 0 0-.3.5l-.1 1.2v2.4H714v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M720.1 825.6v-7.2h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.8-.7v.8h-1.3Zm1.4-2.7c0 .5 0 .9.3 1.2.2.3.5.5 1 .5.2 0 .5-.1.7-.4.2-.2.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M729.7 825.6v-.8a2 2 0 0 1-2.7.7l-.5-.7c-.2-.3-.2-.7-.2-1.1v-3.3h1.4v3.7c0 .2.2.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M733.7 825.6h-1.3v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2-.5.1c-.2.2-.3.3-.3.6l-.2 1.8v1.6Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M736.2 826l1.6.1.1.4.7.1.8-.1.2-.4v-1.4c-.3.6-.8.9-1.5.9a2 2 0 0 1-1.6-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.6c.6 0 1.2.2 1.6.8v-.7h1.3v4.6c0 .6 0 1.1-.2 1.4 0 .3-.2.5-.4.7l-.7.4-1.2.2c-.9 0-1.5-.2-1.9-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.2-3.1c0 .5.1 1 .3 1.2.2.2.5.4.8.4.4 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M745.4 824l1.4.1c-.2.5-.5 1-.8 1.2-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.1-.1.3-.3.3-.6Zm.1-1.5c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2 1h2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M749.3 825.6H748v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6V825.6Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M737.4 835.6v-6h-2.1v-1.2h5.7v1.2h-2.2v6h-1.4Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M741.6 832.9c0-.5 0-.9.3-1.3.2-.5.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.3-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M749.3 835.6H748v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6V835.6Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M700.2 855.6v-7.2h2.3l1.7.1c.4.1.8.4 1 .7.3.4.5.8.5 1.4 0 .4-.1.8-.3 1.1a2 2 0 0 1-.6.7l-.7.4h-2.5v2.8h-1.4Zm1.4-6v2h2a1 1 0 0 0 .6-1l-.3-.6a1 1 0 0 0-.5-.3h-1.8Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M706.5 852.9c0-.5.1-.9.4-1.3.2-.5.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 2a3 3 0 0 1-3.3.5l-1-1c-.2-.5-.3-1-.3-1.6Zm1.4 0c0 .6.2 1 .4 1.3.2.2.5.4.9.4s.7-.2.9-.4c.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.2-.3-.5-.4-.9-.4s-.7.1-.9.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M715.3 850.4v1h-.9V854.4l.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7v-1.1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M715.8 854l1.4-.1.3.6.8.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2s-.2-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.3-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.2.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2-.8.2-.1.3.1.2 1.3.4 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.2-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M726.6 855.6h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.6-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.7.1c.2-.3.4-.7.4-1.2 0-.6-.2-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M729 852l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7H731a5.4 5.4 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2c0-.2 0-.4-.2-.5 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.1-.7.2-.2.2-.3.3-.3.5s0 .4.2.5l.5.2c.3 0 .5 0 .8-.2l.3-.5V853.1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M733.4 850.4h1.3v.7a2 2 0 0 1 1.6-.8c.4 0 .6 0 .9.2l.6.6.7-.6c.3-.2.6-.2.9-.2.4 0 .7 0 1 .2.2.1.4.4.5.7l.2 1v3.4h-1.4v-3l-.1-1-.6-.3a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.2 1v2.6h-1.3v-2.9l-.1-1-.2-.3a.7.7 0 0 0-.4 0 1 1 0 0 0-.6 0 1 1 0 0 0-.4.6v3.6h-1.5v-5.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M745.4 854l1.4.1c-.2.5-.5 1-.8 1.2-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.1-.1.3-.3.3-.6Zm.1-1.5c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2 1h2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M749.3 855.6H748v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6V855.6Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M728.5 865.6v-7.2h2.4l1.7.1c.4.1.7.4 1 .7.3.4.4.8.4 1.4 0 .4 0 .8-.2 1.1a2 2 0 0 1-.6.7l-.8.4H730v2.8h-1.4Zm1.5-6v2H731.9a1 1 0 0 0 .6-1c0-.2 0-.4-.2-.6a1 1 0 0 0-.6-.3H730Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M735.2 865.6v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M739 862l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7H741a5.4 5.4 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2c0-.2 0-.4-.2-.5 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.1-.7.2-.2.2-.3.3-.3.5s0 .4.2.5l.5.2c.3 0 .5 0 .8-.2l.3-.5V863.1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M746 860.4v1h-1V864.4l.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.1-.5v-3.2h-.7v-1.1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M746.3 865.6v-1.1l2-2.2.7-.8h-2.5v-1.1h4.3v1l-2 2.2-.7.8H751v1.2h-4.7Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M717.8 885.6h-1.6l-.6-1.7h-2.9l-.6 1.7h-1.5l2.8-7.2h1.5l2.9 7.2Zm-2.7-2.9-1-2.6-1 2.6h2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M723.2 885.6H722v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0 1 1 0 0 0-.6.1 1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M726 878.4v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1H728v-2.7l-.1-1c0-.2-.1-.3-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M731.8 882l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.3.1.6.3.7.5l.2 1.3v2.6l.3.7h-1.4a5.4 5.4 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V883.1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M736.3 885.6v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M741.5 880.4v1h-1V884.4l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7v-1.1h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M745.4 884l1.4.1c-.2.5-.5 1-.8 1.2-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.1-.1.3-.3.3-.6Zm.1-1.5c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2 1h2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M749.3 885.6H748v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6V885.6Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M711.3 888.4h4.1l.8.4c.2.1.4.3.5.6.2.2.3.5.3.8 0 .3-.1.7-.3 1l-.7.6c.4 0 .7.3 1 .6.2.3.3.7.3 1a2.1 2.1 0 0 1-.8 1.8 2 2 0 0 1-1 .3h-4.2v-7Zm1.5 1.2v1.7h2l.5-.3.3-.6-.2-.5a.8.8 0 0 0-.6-.3h-2Zm0 2.8v2h2.3l.5-.4.2-.6-.1-.5a.9.9 0 0 0-.5-.4 5 5 0 0 0-1.3 0h-1.1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M719.5 892l-1.2-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2.3.1.5.3.6.5.2.3.2.7.2 1.3v2.6l.3.7h-1.3a5.4 5.4 0 0 1-.2-.6l-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.4.5Zm1.9 1-.8.3-.8.2c-.2.2-.3.3-.3.5s.1.4.3.5l.5.2c.2 0 .5 0 .7-.2.2-.2.3-.3.3-.5V893.1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M725.5 888.4v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1l.1 1.1v3h-1.4v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6H724v-7.2h1.4Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M735 895.6h-1.5v-3.7l-.3-.5a.8.8 0 0 0-.5 0 1 1 0 0 0-.6.1 1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M737.7 888.4v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M742.1 892.9c0-.5.1-.9.4-1.3.2-.5.5-.8.9-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 2-.5.4-1.1.7-2 .7a3 3 0 0 1-1.3-.3l-1-1c-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M748 890.4h.7v-.4l.1-1c.1-.2.3-.4.6-.5a2 2 0 0 1 .9-.2c.4 0 .8 0 1.1.2l-.1 1-.7-.2c-.2 0-.3 0-.4.2l-.1.5v.4h1v1h-1v4.2h-1.4v-4.1h-.8v-1.1Z"
            data-ubhnchn="82"
            fill="#000"
          />
          <path
            d="M779.8 1029.8h1.5c0 .4.2.7.5 1 .2.2.6.3 1 .3.5 0 .8-.1 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.4-1.2-.3c-.8-.2-1.3-.4-1.6-.7-.5-.4-.7-.8-.7-1.4 0-.4.1-.7.3-1 .2-.4.5-.6 1-.8l1.3-.2c1 0 1.6.2 2 .6.5.4.7 1 .8 1.6H784c0-.3-.2-.6-.4-.8l-.9-.2c-.4 0-.7 0-1 .3l-.2.4c0 .2 0 .3.2.4.2.2.6.3 1.3.5.7.2 1.3.3 1.6.5.3.2.6.4.8.8.2.3.3.6.3 1a2 2 0 0 1-1.3 2 4 4 0 0 1-1.6.3c-.9 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.9Z"
            data-ubhnchn="84"
            fill="#000"
          />
          <path
            d="M790.3 1032.2v-.8a2 2 0 0 1-.8.7 2.2 2.2 0 0 1-1.9 0l-.6-.7-.1-1.1v-3.3h1.3v2.4l.1 1.3c0 .2.1.3.3.4l.5.2a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2h-1.3Zm-2.7-6.1v-1.2h1.2v1.2h-1.2Zm2 0v-1.2h1.3v1.2h-1.2Z"
            data-ubhnchn="84"
            fill="#000"
          />
          <path
            d="M797.8 1032.2h-1.3v-.8l-.8.7a2 2 0 0 1-2.4-.5 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.5v7.2Zm-3.7-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.8.1c.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="84"
            fill="#000"
          />
          <path
            d="M799 1032.2v-7.2h1.4v3.8l1.6-1.8h1.7l-1.7 1.9 1.9 3.3h-1.5l-1.3-2.4-.7.7v1.7h-1.3Z"
            data-ubhnchn="84"
            fill="#000"
          />
          <path
            d="M806 1032.2h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="84"
            fill="#000"
          />
          <path
            d="M811.6 1030.5l1.3.3c-.1.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.6.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="84"
            fill="#000"
          />
          <path
            d="M817.5 1032.2v-.8a2 2 0 0 1-.7.7 2.2 2.2 0 0 1-2 0l-.5-.7-.2-1.1v-3.3h1.4v3.7c0 .2.2.3.3.4l.5.2a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="84"
            fill="#000"
          />
          <path
            d="M819.7 1032.2v-1l2-2.3.6-.8H820v-1.1h4.3v1l-2 2.3-.7.7h2.8v1.2h-4.6Z"
            data-ubhnchn="84"
            fill="#000"
          />
          <path
            d="M677.6 939.2h1.5v4.6c0 .6 0 1-.2 1.3a2 2 0 0 1-.8 1c-.3.3-.8.4-1.4.4-.7 0-1.3-.2-1.6-.6-.4-.4-.6-1-.6-1.7l1.3-.2.2.9c.2.3.4.4.7.4.4 0 .6-.1.7-.3.2-.2.2-.5.2-1.1v-4.7Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M684 946.4v-.8a2 2 0 0 1-2.7.7l-.5-.7c-.2-.2-.2-.6-.2-1.1v-3.3h1.3v2.4l.1 1.3c0 .2.2.3.3.4l.5.2a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2H684Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M686.7 946.4v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M689.5 940.5v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M695.7 946.4v-.8a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1v-3.3h1.4v3.7l.4.4.5.2a1 1 0 0 0 1-.7v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M697.9 945l1.4-.3c0 .3.1.5.3.6.2.2.5.2.8.2.3 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.4 7.4 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2s.2-.8.5-1.1c.4-.3 1-.5 1.7-.5s1.2.1 1.5.3c.4.3.6.6.8 1l-1.3.3c0-.2-.2-.3-.3-.5l-.7-.1-.8.1-.1.3v.3l1.4.4c.7.1 1.2.3 1.5.6.3.2.4.5.4 1s-.2.9-.6 1.2c-.4.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M703.8 944.5V943h2.7v1.4h-2.7Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M707.3 946.4v-7.1h1.5v5.9h3.6v1.2h-5Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M716.4 944.8l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M718.9 946.4v-7.2h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1.1.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.7-.7v.8h-1.3Zm1.4-2.7c0 .5 0 1 .2 1.2.3.4.6.5 1 .5.3 0 .5 0 .7-.4.3-.2.4-.6.4-1.2s-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M728 944.8l1.4.2c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2l.4-.5Zm.2-1.4c0-.4-.2-.7-.4-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M732 946.4h-1.4v-5.2h1.3v.8l.5-.7.6-.2c.3 0 .6 0 1 .3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2-.2 0-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M734.4 944.5V943h2.7v1.4h-2.7Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M704 949.2h2.8l1.3.1c.3 0 .5.2.7.3l.6.6.2.8c0 .4 0 .7-.3 1-.2.3-.4.5-.7.6.4.1.8.3 1 .6.2.4.4.7.4 1.1a2.1 2.1 0 0 1-.9 1.7 2 2 0 0 1-1 .4H704v-7.2Zm1.4 1.2v1.7h2l.6-.3.2-.5c0-.3 0-.4-.2-.6a.8.8 0 0 0-.5-.2h-2.1Zm0 2.9v1.9h2.3l.6-.3.2-.6-.2-.6a.9.9 0 0 0-.5-.3 5 5 0 0 0-1.2-.1h-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M712.5 956.4H711v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M718.5 956.4v-.8a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1v-3.3h1.4v3.7l.3.4.6.2a1 1 0 0 0 1-.7v-3.6h1.4v5.2h-1.2Zm-2.8-6.1v-1.2h1.2v1.2h-1.2Zm2.1 0v-1.2h1.2v1.2h-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M725.7 952.8l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2 0 .6 0 1 .3 1.3.2.3.5.4.8.4.3 0 .5 0 .7-.2l.3-.8 1.4.2c-.2.7-.5 1.1-.8 1.4-.4.4-1 .5-1.6.5-.8 0-1.4-.2-1.9-.7-.4-.5-.6-1.1-.6-2 0-.8.2-1.5.6-2 .5-.5 1.1-.7 1.9-.7.6 0 1.1.1 1.5.4.4.3.6.7.8 1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M726.7 956.4v-7.2h1.4v3.8l1.6-1.8h1.7l-1.8 2 1.9 3.2H730l-1.3-2.3-.6.6v1.7h-1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M735.3 954.8l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M646.7 981.9l1.4-.1c.1.4.3.8.6 1 .2.2.6.3 1 .3.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.5 1-.7.3-.2.8-.3 1.3-.3 1 0 1.6.2 2 .6.5.4.7 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-.9-.3s-.7.1-1 .3l-.2.4c0 .2 0 .4.2.5l1.3.5a7 7 0 0 1 1.6.5l.8.7c.2.3.3.7.3 1.1a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.3c-.9 0-1.6-.3-2-.7-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M658.3 980.6l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1 0 .7 0 1 .3 1.3.2.3.5.4.8.4.3 0 .5 0 .7-.2.1-.1.3-.4.3-.8l1.4.3c-.2.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.8-.7-.5-.5-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.6 0 1.1.2 1.5.4.4.3.6.7.8 1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M660.7 977v2.7a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5v3.6h-1.5v-7.1h1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M665.1 981.6c0-.5.2-1 .4-1.4.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.2-.3-.4-.8-.4-1.4Zm1.4 0c0 .5.2 1 .4 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.1c-.2-.3-.5-.5-.9-.5-.3 0-.6.2-.9.5-.2.2-.4.6-.4 1.1Zm-.4-3.5V977h1.2v1.2h-1.2Zm2.1 0V977h1.2v1.2h-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M676.3 984.2h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4V979h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2l.5.4.3.6V984.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M680.7 982.6l1.4.2c-.2.5-.5.9-.9 1.2-.4.2-.8.3-1.4.3-.9 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M683.2 984.2v-7.1h1.4v2.5a2 2 0 0 1 3 0c.4.5.7 1.1.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-1.5.7c-.3 0-.6 0-.9-.2-.3-.1-.5-.3-.7-.6v.7h-1.3Zm1.4-2.7c0 .6 0 1 .2 1.2.2.4.6.6 1 .6.3 0 .5-.2.7-.4.2-.3.4-.7.4-1.3 0-.5-.2-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M692.4 982.6l1.3.2c-.1.5-.4.9-.8 1.2-.4.2-.9.3-1.4.3-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M696.2 984.2H695V979h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6-.1.3-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M698.7 984.6l1.6.2.1.3.7.2c.3 0 .6 0 .8-.2l.2-.3.1-.7v-.7c-.4.5-1 .8-1.6.8a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.2.3 1.6.9v-.8h1.3v4.7c0 .6 0 1-.2 1.4 0 .3-.2.5-.4.7l-.7.4-1.2.1c-.9 0-1.5-.1-1.9-.4-.3-.3-.5-.7-.5-1.2v-.1Zm1.2-3c0 .5.1.9.3 1.1.3.3.5.4.8.4.4 0 .6-.1.9-.4.2-.2.3-.6.3-1.1 0-.6 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1035.1 739.6c0-.7.1-1.3.3-1.8l.7-1 1-.7a4 4 0 0 1 1.5-.2c1 0 1.9.3 2.5 1 .6.6 1 1.5 1 2.7 0 1.1-.4 2-1 2.7-.6.6-1.5 1-2.5 1s-2-.4-2.6-1c-.6-.7-.9-1.6-.9-2.7Zm1.5 0c0 .8.2 1.4.6 1.8.3.4.8.6 1.4.6.6 0 1-.2 1.4-.6.4-.4.5-1 .5-1.9 0-.8-.1-1.4-.5-1.8-.3-.4-.8-.6-1.4-.6-.6 0-1.1.2-1.5.6-.3.4-.5 1-.5 1.9Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1042.7 741.7l1.3-.2.4.6.8.2.8-.2.1-.4v-.3l-.5-.1a7.5 7.5 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.3-.3.9-.5 1.6-.5.8 0 1.3.2 1.6.4.4.2.6.6.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.6 0-.8.2-.1 0-.2.1-.2.3l.2.2 1.3.4 1.5.6c.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .6-1.8.6-.6 0-1.2-.2-1.6-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1051.1 738v1h-1V742l.2.2h.2l.6-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.2-.5V739h-.6v-1h.6v-1l1.4-.9v1.9h.9Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1052 743.1V736h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 1.9 3.2h-1.5l-1.3-2.3-.6.7v1.6h-1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1059 743.1h-1.4V738h1.2v.7l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1064.5 741.5l1.4.2c-.2.5-.5.9-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .5.1.8.3 1 .3.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1070.5 743.1v-.7a2 2 0 0 1-1.7.9 2 2 0 0 1-1-.3l-.6-.6a3 3 0 0 1-.2-1.2V738h1.4V741.7l.4.4.5.1c.2 0 .4 0 .6-.2l.4-.5V738h1.5v5.1h-1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1072.6 743.1v-1l2-2.3.7-.7h-2.5V738h4.3v1l-2 2.2-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M937 739.6c0-.8.2-1.4.4-1.9l.7-1 .9-.6a4 4 0 0 1 1.5-.3c1 0 2 .4 2.6 1 .6.7 1 1.6 1 2.7 0 1.2-.4 2.1-1 2.8-.7.6-1.5 1-2.6 1-1 0-1.9-.4-2.5-1-.6-.7-1-1.6-1-2.7Zm1.6 0c0 .7.1 1.4.5 1.8.4.4.9.6 1.4.6.6 0 1.1-.2 1.5-.6.3-.4.5-1 .5-1.9 0-.8-.2-1.4-.5-1.8-.4-.4-.9-.6-1.5-.6-.5 0-1 .2-1.4.6-.4.4-.5 1-.5 1.8Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M944.6 741.6l1.4-.2c0 .3.2.5.4.6.2.2.4.2.7.2.4 0 .6 0 .8-.2l.2-.3v-.3l-.5-.2a7.4 7.4 0 0 1-2.2-.6c-.4-.3-.6-.7-.6-1.2s.2-.8.6-1.1c.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.3.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4-.2-.2-.4-.2-.7-.2l-.7.1-.2.3.1.3 1.3.4c.8.1 1.3.3 1.6.6.2.2.4.5.4 1s-.2.9-.6 1.2c-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.9-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M953 738v1h-.9v2.8l.2.2h.8v1c-.2.2-.6.2-1 .2l-.7-.1a1 1 0 0 1-.4-.3l-.2-.6V739h-.7v-1h.7v-1.1l1.3-.8v1.8h1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M954 743.1V736h1.3v2.5a2 2 0 0 1 3 0c.5.5.7 1.1.7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.8-.7v.8H954Zm1.3-2.7c0 .5.1 1 .3 1.2.2.4.5.5 1 .5.2 0 .5 0 .7-.3.2-.3.3-.7.3-1.3 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.3 1 1 0 0 0-.8.3c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M961.2 739.5l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.2 1.2v2.6c0 .2.1.5.3.7h-1.4a5 5 0 0 1-.2-.6l-.7.6-.9.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2.1-.2.3-.2.5 0 .1 0 .3.2.4.1.2.3.3.5.3.3 0 .5-.1.7-.3l.4-.4v-1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M967 736v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4V736h1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M976.5 743.1h-1.3v-2.6l-.1-1.1a.8.8 0 0 0-.8-.5c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4V738h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.3.6V743Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M979.3 736v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4V736h1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M983.7 740.4c0-.4.1-.9.4-1.3.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.3-.4-.4-.9-.4-1.5Zm1.4.1c0 .5.2 1 .4 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4-.3 0-.6.2-.9.4-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M989.6 738h.7v-.5c0-.4 0-.7.2-1 0-.2.2-.3.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.1-.5.1-.1.6v.3h1v1.1h-1v4.1h-1.4V739h-.7v-1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M455 727.3l-1.7-7.2h1.4l1.1 5 1.3-5h1.8l1.2 5 1.1-5h1.5l-1.8 7.2h-1.5l-1.4-5.4-1.5 5.4H455Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M466.4 725.6l1.4.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M468.5 725.8l1.3-.2.4.6.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1 .3-.4.9-.5 1.6-.5.8 0 1.3 0 1.6.3.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.2c-.4 0-.7 0-.8.2l-.2.3s0 .2.2.2l1.3.4 1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5-.8 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M476.9 722v1.2h-1v2.8l.2.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5v-3.2h-.6V722h.6v-1l1.4-.9v1.9h.9Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M477.8 727.3V720h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 2 3.3H481l-1.3-2.4-.6.7v1.7h-1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M484.7 727.3h-1.3V722h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2-.5.1c-.2.2-.3.3-.3.6l-.2 1.8v1.6Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M490.3 725.6l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.1.4.3.7.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M496.3 727.3v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1V722h1.3v2.4l.1 1.3c0 .2.1.3.3.4l.5.1a1 1 0 0 0 1-.6V722h1.5v5.2h-1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M498.4 727.3v-1.1l2-2.2.7-.8h-2.5v-1.1h4.3v1l-2 2.2-.7.8H503.1v1.2h-4.7Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M716.6 512.4v-1.2h3.1v2.9a4.8 4.8 0 0 1-3 1.1 4 4 0 0 1-2-.5 3 3 0 0 1-1.3-1.3c-.3-.6-.4-1.2-.4-2 0-.7.2-1.3.5-2 .3-.5.7-1 1.3-1.3.5-.2 1-.3 1.8-.3s1.5.2 2 .6c.5.3.9.8 1 1.5l-1.4.3c-.1-.4-.3-.7-.6-.9-.3-.2-.6-.3-1-.3a2 2 0 0 0-1.5.6c-.4.4-.6 1-.6 1.8 0 .9.2 1.5.6 2 .3.3.8.6 1.4.6l1-.2.7-.4v-1h-1.6Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M724 513.4l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4H722c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2.1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M726.1 513.6l1.4-.2c0 .3.2.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.3-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.2.5.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.3.3-1 .5-1.7.5s-1.3-.2-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M735.6 515v-.7a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1v-3.3h1.4v3.7l.3.4.6.1a1 1 0 0 0 1-.6v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M743 515h-1.4v-3.6c-.1-.2-.2-.4-.4-.4a.8.8 0 0 0-.4-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V515.1h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-1l.9.2.5.5c.2.1.3.3.3.5v4.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M749.1 515H748v-.7a2 2 0 0 1-1.7.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.6-2.6c0 .5 0 1 .2 1.2.2.3.5.5 1 .5.2 0 .5-.1.7-.4.3-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M750.3 513.2v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M713.8 525v-7h1.3v2.5a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.8-.7v.8h-1.2Zm1.3-2.6c0 .5.1.9.3 1.2.2.3.5.5 1 .5.2 0 .5-.1.7-.4.2-.2.3-.6.3-1.2s-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M721.2 525H720V520h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2-.2 0-.3.3-.3.5l-.2 1.8v1.6Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M727.2 525v-.7a2 2 0 0 1-2.7.7l-.5-.7c-.2-.3-.2-.6-.2-1.1v-3.3h1.4v3.7c0 .2.2.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M734.6 525h-1.3v-2.6l-.1-1c0-.2-.2-.4-.3-.4a.8.8 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.8.2c.3.1.5.3.6.5l.3.5v4.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M740.8 525h-1.4v-2.6l-.1-1c0-.2-.2-.4-.3-.4a.8.8 0 0 0-.5-.2 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5l-.1 1.2v2.4H736v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.8.2c.3.1.5.3.6.5l.3.5v4.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M745.2 523.4l1.3.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M752.4 525h-1.3v-2.6l-.1-1c0-.2-.2-.4-.3-.4a.8.8 0 0 0-.5-.2 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.8.2c.3.1.5.3.6.5l.3.5v4.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M814.1 556.9l1.4-.2c.1.5.3.9.6 1 .2.3.6.4 1 .4.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.6-.3-1.1-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.6.9-.7.4-.2.9-.3 1.4-.3.9 0 1.6.2 2 .6.5.4.7 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-1-.3-.3 0-.7.1-.9.3l-.2.4c0 .2 0 .3.2.5.2.1.6.3 1.3.4a7 7 0 0 1 1.6.6c.3.1.6.4.8.7.2.3.3.7.3 1.1a2.1 2.1 0 0 1-1.4 2 4 4 0 0 1-1.5.2c-1 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M825.7 555.6l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2 0 .6 0 1 .3 1.3.2.3.5.4.8.4.3 0 .5 0 .7-.2l.3-.8 1.4.3c-.2.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.9-.7-.4-.5-.6-1.1-.6-2 0-.8.2-1.5.6-2 .5-.5 1.1-.7 1.9-.7.6 0 1.1.1 1.5.4.4.3.6.7.8 1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M828.1 552v2.7a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-2.7l-.1-1c0-.2-.1-.3-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.1h1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M832.5 556.5c0-.4.1-.8.4-1.3.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.3-.3-.4-.9-.4-1.5Zm1.4.1c0 .5.2 1 .4 1.2.2.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4s-.7.2-.9.4c-.2.3-.4.7-.4 1.2Zm-.4-3.5V552h1.2v1.2h-1.2Zm2.1 0V552h1.2v1.2h-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M843.7 559.2h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5H839V554h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4l.3.6V559.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M846.4 552v2.7a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.1h1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M852.2 555.6l-1.2-.2c.1-.5.4-.9.7-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2l.6.6.2 1.2v2.6l.3.7h-1.4a4.9 4.9 0 0 1-.1-.6l-.8.6-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1l.2-.8.6-.5 1.1-.3 1.4-.4v-.1l-.2-.6-.8-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.9 1.1a8 8 0 0 1-.9.2l-.7.3c-.2.1-.3.3-.3.5 0 .1 0 .3.2.5l.6.2.7-.3.3-.4v-1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M860.2 559.2v-.8a2 2 0 0 1-2.7.7c-.3-.1-.5-.4-.6-.6l-.2-1.2V554h1.4v3.8l.3.3.6.2a1 1 0 0 0 1-.7V554h1.4v5.2h-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M862.4 557.7l1.4-.2c0 .3.1.5.3.6.2.2.4.2.8.2.3 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.4 7.4 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.5.4c.4.2.6.5.8 1l-1.3.2c0-.2-.2-.3-.4-.4l-.6-.2-.8.1-.1.3v.3l1.4.4c.7.1 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M871.4 557.6l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M875.3 559.2H874V554h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.4 1.2-.7-.3-.5.2-.3.6v3.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M840.7 569.2h-1.6l-.6-1.6h-2.9l-.5 1.6h-1.6l2.8-7.1h1.5l2.9 7.1Zm-2.7-2.8-1-2.7-1 2.7h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M841.5 569.2v-7.1h1.3v7.1h-1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M844.2 569.2v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M850 567.6l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3H848c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M855.6 567.6l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M780.2 605.3V598h1.5v2.8h2.8v-2.8h1.4v7.2h-1.4V602h-2.8v3.2h-1.5Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M790.8 605.3v-.8a2 2 0 0 1-2.7.7l-.5-.7-.2-1.1V600h1.4v3.7l.3.4.5.1a1 1 0 0 0 1-.6l.1-1.4V600h1.4v5.2h-1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M793.4 600h1.3v.8a2 2 0 0 1 1.6-.8c.4 0 .6 0 .9.2.2 0 .4.3.6.6l.7-.6c.3-.2.6-.2.9-.2.3 0 .7 0 1 .2.2.1.4.4.5.7l.2 1v3.4h-1.4v-3l-.1-1-.6-.3a1 1 0 0 0-1 .7v3.6h-1.4v-2.9l-.1-1-.2-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-1 .7v3.6h-1.5V600Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M802.4 605.3V598h1.3v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.8-.7v.8h-1.2Zm1.3-2.8c0 .6.1 1 .3 1.2.2.4.5.6 1 .6.2 0 .5-.1.7-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M808.2 602.6c0-.5.1-1 .4-1.3.2-.5.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.6c0 .8-.3 1.5-.8 2s-1.1.8-1.9.8a3 3 0 0 1-1.4-.4c-.4-.2-.7-.5-1-.9-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.2 1 .4 1.2.2.3.5.5.9.5s.7-.2.9-.5c.2-.2.4-.6.4-1.1 0-.6-.2-1-.4-1.2-.2-.3-.5-.4-.9-.4s-.7.1-.9.4c-.2.3-.4.6-.4 1.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M814.7 605.3V598h1.3v7.2h-1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M822.2 605.3h-1.3v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-1 .2 2 2 0 0 1-1.4-.7 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 3.1 0V598h1.4v7.2Zm-3.7-2.8c0 .6.1 1 .3 1.3a1 1 0 0 0 1.7 0c.2-.2.3-.6.3-1.1 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M826 600v1.2h-1v2.8l.1.2h.3l.5-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.2-.5v-3.2h-.6V600h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M828.2 598.1v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1l.1 1.1v3h-1.4v-3.7l-.3-.4a.9.9 0 0 0-.5-.1c-.3 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.2 1v2.6H827V598h1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M834 601.7l-1.2-.3c.1-.5.4-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a5.1 5.1 0 0 1-.1-.6l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1l.2-.8.6-.6 1.1-.3 1.4-.3v-.2l-.2-.5-.8-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.4.6Zm1.9 1-.9.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2l.3-.5V602.8Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M838.6 599.4V598h1.3v1.3h-1.3Zm0 5.9V600h1.3v5.2h-1.3Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M846 605.3h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4V600h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="86"
            fill="#000"
          />
          <path
            d="M1170.4 944.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="87"
            fill="#fff"
          />
          <path
            d="M1162 952.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="87"
            fill="#fff"
          />
          <path
            d="M1176 936.5v-7.2h2.3l1.7.1c.4.2.7.4 1 .8.3.3.4.8.4 1.3s0 .9-.2 1.2a2 2 0 0 1-.6.7l-.8.3-1.5.1h-1v2.7h-1.4Zm1.4-6v2H1179.3l.5-.4.1-.5a1 1 0 0 0-.8-1h-1.7Z"
            data-ubhnchn="88"
            fill="#000"
          />
          <path
            d="M1182.6 936.5v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="88"
            fill="#000"
          />
          <path
            d="M1186.4 932.9l-1.2-.2c.1-.5.3-.9.7-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.2.5.3.6.6l.2 1.2v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5c-.3.2-.5.2-.8.2-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1l.2-.8.6-.5c.3-.1.6-.3 1.1-.3l1.3-.4v-.1c0-.3 0-.5-.2-.6 0 0-.3-.2-.7-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.8 1.1a9 9 0 0 1-.8.2l-.7.3c-.2 0-.3.2-.3.4s0 .4.2.5c.2.2.3.3.6.3l.7-.3.3-.4v-1Zm-2.4-3.6v-1.2h1.2v1.2h-1.2Zm2.1 0v-1.2h1.2v1.2h-1.2Z"
            data-ubhnchn="88"
            fill="#000"
          />
          <path
            d="M1195.7 936.5h-1.4v-3.7l-.4-.4a.9.9 0 0 0-.5-.2 1 1 0 0 0-.6.2 1 1 0 0 0-.4.6v3.5h-1.5v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4.2.1.2.3.3.6V936.5Z"
            data-ubhnchn="88"
            fill="#000"
          />
          <path
            d="M1199.4 931.3v1.1h-.9v2.8c0 .1 0 .2.2.2h.7l.1 1-1 .2-.7-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="88"
            fill="#000"
          />
          <path
            d="M1203.4 934.8l1.4.3c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="88"
            fill="#000"
          />
          <path
            d="M1207.3 936.5h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="88"
            fill="#000"
          />
          <path
            d="m1210.8 936.5-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.9 3.4 1-3.4h1.3l-1.7 5.2h-1.3l-.9-3.3-.8 3.3h-1.4Z"
            data-ubhnchn="89"
            fill="#000"
          />
          <path
            d="M1218.7 932.9l-1.3-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.1 1.2v2.6l.3.7h-1.3l-.1-.4-.1-.2c-.2.3-.5.4-.8.5-.2.2-.5.2-.8.2-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.1.6-.3 1-.3l1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2 0-.3.2-.3.4s.1.4.3.5c.1.2.3.3.5.3.3 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="89"
            fill="#000"
          />
          <path
            d="M1223.2 936.5v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="89"
            fill="#000"
          />
          <path
            d="M1230.7 936.5h-1.2v-.8c-.3.3-.5.6-.8.7a2 2 0 0 1-2.4-.5 3 3 0 0 1-.6-2c0-.9.2-1.6.6-2a2 2 0 0 1 1.5-.7c.6 0 1.1.2 1.6.7v-2.6h1.3v7.2Zm-3.6-2.7c0 .5 0 1 .2 1.2.2.4.5.5 1 .5.2 0 .5-.1.7-.4.3-.2.4-.6.4-1.2s-.2-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="89"
            fill="#000"
          />
          <path
            d="M904.5 996.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="92"
            fill="#fff"
          />
          <path
            d="M904.5 1008.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="92"
            fill="#fff"
          />
          <path
            d="M904.5 1020.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="92"
            fill="#fff"
          />
          <path
            d="M882.2 1032.6v-6H880v-1.1h5.7v1.2h-2.1v6h-1.4Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M889.7 1031l1.3.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.6-1.8c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M892.1 1027.4h1.3v.8a2 2 0 0 1 1.6-.9c.3 0 .6 0 .9.2l.6.7.7-.7.8-.2c.4 0 .7.1 1 .3.3.1.5.3.6.6l.1 1.1v3.3h-1.3v-3c0-.5 0-.8-.2-1l-.6-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.4.6v3.5h-1.5v-3.8c0-.1-.1-.3-.3-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.5.1 1 1 0 0 0-.4.5l-.1 1.1v2.5H892v-5.2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M901 1027.4h1.3v.8c.2-.3.4-.5.7-.6.3-.2.6-.3 1-.3a2 2 0 0 1 1.5.7c.4.5.6 1.2.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.6l-.8-.6v2.6h-1.3v-7.2Zm1.4 2.5c0 .6.1 1 .4 1.3.2.3.5.5.8.5.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.3 0-.5 0-1-.3-1.2a1 1 0 0 0-1.6 0c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M910.2 1031l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.8.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M912.8 1032.6v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M917 1025.5v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1v4.1H919v-3.7l-.4-.4a.9.9 0 0 0-.4-.1l-.7.1a1 1 0 0 0-.4.5v3.6h-1.4v-7.1h1.3Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M921.4 1030c0-.5 0-1 .3-1.4.2-.4.5-.7 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.5-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.2-.3-.3-.9-.3-1.4Zm1.4 0c0 .5 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4-.3 0-.6.2-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M927.2 1027.4h.7v-.4c0-.4 0-.7.2-1l.5-.5 1-.2 1 .2-.1 1-.6-.1-.5.1V1027.4h1v1.1h-1v4.1h-1.5v-4h-.7v-1.2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M951 1032.6v-7.1h1.5v2.8h2.9v-2.8h1.4v7.1h-1.4v-3h-2.9v3h-1.4Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M961.3 1031l1.4.2c-.2.5-.5.9-.9 1.2-.3.2-.8.3-1.4.3-.9 0-1.5-.2-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .3.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M965.2 1032.6h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M967.7 1027.5h1.2v.7a2 2 0 0 1 1.6-.9l.9.2.6.7.7-.7.9-.2c.4 0 .7.1 1 .3.2.1.4.4.5.7l.2 1v3.3h-1.4v-3l-.1-1-.6-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.1 1v2.5h-1.4v-3.8l-.3-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.6.1 1 1 0 0 0-.4.5v3.6h-1.4v-5.1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M977.7 1029l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 .1 1.3.3l.7.5.2 1.2v2.6c0 .3.1.5.3.7h-1.4a4.9 4.9 0 0 1-.2-.5l-.7.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3a8 8 0 0 0 1.4-.3v-.2c0-.3 0-.4-.2-.5-.1-.2-.4-.2-.7-.2l-.6.1a1 1 0 0 0-.3.5Zm1.8 1.2-.8.2-.8.2c-.2.1-.2.3-.2.5s0 .3.2.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M987 1032.6h-1.4v-2.6l-.1-1.1a.8.8 0 0 0-.8-.5c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 2.5-.7c.3.1.5.2.6.4l.3.6v4.1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M993 1032.6h-1.3v-2.6l-.1-1.1a.8.8 0 0 0-.8-.5c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 2.5-.7c.3.1.5.2.6.4l.3.6v4.1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M994.3 1030.7v-1.3h2.7v1.3h-2.7Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M959 1041.2l1.3-.3c0 .3.2.5.4.6.1.2.4.3.7.3l.8-.2.2-.4-.1-.3-.5-.1a7.3 7.3 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.2 1.6.4c.3.2.6.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.3 0-.6 0-.8.2l-.1.3.1.2 1.3.4c.7.1 1.3.3 1.5.6.3.2.5.6.5 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.3 0-1.7-.4a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M967.4 1037.5v1h-1V1041.5l.2.1.2.1.5-.1.2 1c-.4.2-.7.3-1.1.3-.3 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M969.6 1042.6h-1.3v-5.1h1.2v.7c.2-.4.4-.6.6-.7l.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M973.2 1039l-1.2-.2c.1-.5.4-.9.7-1.1.3-.3.9-.4 1.5-.4s1 .1 1.4.3c.3.1.5.3.6.5l.2 1.2v2.6l.3.7h-1.3a4.9 4.9 0 0 1-.2-.5l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1l.2-.9.6-.5 1.1-.3a8 8 0 0 0 1.4-.3v-.2c0-.3-.1-.4-.2-.5-.2-.2-.4-.2-.8-.2l-.5.1a1 1 0 0 0-.4.5Zm1.9 1.2c-.2 0-.5 0-.9.2-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5 0 .7-.3.1 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M977.7 1042.6v-4.6c0-.7 0-1.2.2-1.5.1-.3.3-.6.7-.8.3-.2.7-.3 1.3-.3.6 0 1.1.1 1.5.4.3.3.5.6.5 1l-.3 1a7 7 0 0 0-.3.5V1039l.6.6c.4.3.6.6.7.9l.2.7c0 .5-.2.9-.5 1.2a1.7 1.7 0 0 1-2.2.2c-.3-.2-.5-.4-.6-.7l1-.5.2.3h.6l.1-.4-.1-.5-.7-.6c-.5-.6-.8-1-.8-1.3l.3-1 .3-.6v-.3l-.1-.3a.6.6 0 0 0-.4-.2c-.2 0-.4 0-.5.2l-.2.3-.1 1v4.7h-1.4Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M986.9 1041l1.4.2c-.2.5-.5.9-.9 1.2-.4.2-.8.3-1.4.3-1 0-1.6-.2-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3H985c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1019 1033v-7h1.5l2.9 4.7v-4.8h1.3v7.2h-1.4l-3-4.7v4.7h-1.3Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1029.3 1031.4l1.3.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1035.2 1033v-.7a2 2 0 0 1-.7.7 2 2 0 0 1-2 0l-.5-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7c0 .2.2.3.3.4l.5.2.7-.2c.1-.2.3-.3.3-.5l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1037.9 1033v-7h1.3v3.7l1.7-1.8h1.6l-1.7 1.9 1.9 3.3h-1.5l-1.3-2.3-.7.6v1.7h-1.3Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1043.2 1030.4c0-.5 0-.9.3-1.3.2-.4.6-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.3-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.8.4.4 0 .7-.2 1-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Zm-.4-3.4v-1.2h1.1v1.2h-1.1Zm2 0v-1.2h1.3v1.2h-1.2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1049.6 1033v-7h1.4v7h-1.4Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1052.4 1033v-7h1.3v7h-1.3Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1059.9 1033h-1.4v-3.6c-.2-.2-.2-.4-.4-.4a.8.8 0 0 0-.4-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V1033.1h-1.5v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.9.2.5.4.3.6v4.2Z"
            data-ubhnchn="93"
            fill="#000"
          />
          <path
            d="M1084.7 929.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="94"
            fill="#fff"
          />
          <path
            d="M1096.4 929.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="94"
            fill="#fff"
          />
          <path
            d="m1018.2 927.7 1.4-.2c0 .5.2.9.5 1 .2.3.6.4 1 .4.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.3-1.2-.3c-.8-.2-1.3-.4-1.6-.7a1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.6 1-.7.3-.2.8-.3 1.3-.3 1 0 1.6.2 2 .6.5.4.8 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-.9-.3s-.7.1-1 .3l-.2.4c0 .2 0 .3.2.5.2.1.6.3 1.3.4l1.6.6c.3.1.6.4.8.7.2.3.3.7.3 1.1a2 2 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1024.9 927.3c0-.4 0-.8.3-1.3.2-.4.6-.7 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.4-.7 2-.5.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.5-1-1-.2-.4-.3-.9-.3-1.5Zm1.4.1c0 .5.1 1 .4 1.2.2.3.5.4.8.4.4 0 .7-.1 1-.4.2-.3.3-.7.3-1.2s-.1-.9-.3-1.2c-.3-.2-.6-.4-1-.4-.3 0-.6.2-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1036 930h-1.3v-2.6l-.1-1.1-.3-.4a.8.8 0 0 0-.5-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.3.6V930Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1042.1 930h-1.3v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.3.6V930Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1046.5 928.4l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.7c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3l-.2.9h2Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1053.8 930h-1.3v-2.6l-.1-1.1-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .4.2.6.4l.2.6.1.9v3.2Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1056.2 926.4l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4s1.1 0 1.4.2l.6.6c.2.2.2.6.2 1.2v2.6l.3.7h-1.3l-.2-.4v-.1l-.8.5-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1a8 8 0 0 1-.9.2l-.7.3c-.2.1-.3.3-.3.5 0 .1 0 .3.2.5l.6.2c.2 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1060.8 930V923h1.4v7.1h-1.4Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1063.5 930V923h1.4v7.1h-1.4Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1069.3 928.4l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.1.2-.3.5-.2.9h2Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="M1074.9 928.4l1.4.2c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="95"
            fill="#000"
          />
          <path
            d="m371.2 597.3-1.7-7.2h1.5l1 5 1.4-5h1.7l1.2 5 1.1-5h1.5l-1.7 7.2h-1.6l-1.4-5.4-1.4 5.4h-1.6Z"
            data-ubhnchn="97"
            fill="#000"
          />
          <path
            d="M382.6 595.6l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.6Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="97"
            fill="#000"
          />
          <path
            d="M384.7 595.8l1.4-.2c0 .3.2.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.2-.6-.6-.6-1.1 0-.5.2-.8.5-1.2.4-.3 1-.4 1.7-.4s1.2.1 1.6.3l.7 1-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.3 1.3.3 1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.3.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="97"
            fill="#000"
          />
          <path
            d="M393.1 592.1v1.1h-1v2l.1.8.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.3l-.1-.6v-3.2h-.7v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="97"
            fill="#000"
          />
          <path
            d="M397 595.6l1.5.3c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.8c.4.5.7 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm.2-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="97"
            fill="#000"
          />
          <path
            d="M404.4 597.3H403v-3.7a.8.8 0 0 0-.9-.6l-.6.2a1 1 0 0 0-.4.6v3.5h-1.5V592h1.3v.8a2 2 0 0 1 1.7-1l.9.3c.2 0 .4.2.5.4.2.1.2.3.3.5v4.2Z"
            data-ubhnchn="97"
            fill="#000"
          />
          <path
            d="M410.5 597.3h-1.3v-.8a2 2 0 0 1-1.6 1 2 2 0 0 1-1.5-.8 3 3 0 0 1-.6-2c0-.9.2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.6-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.7.1c.2-.2.4-.6.4-1.2s-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="97"
            fill="#000"
          />
          <path
            d="M445 674.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="98"
            fill="#fff"
          />
          <path
            d="M433.3 674.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="98"
            fill="#fff"
          />
          <path
            d="M421.4 674.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="98"
            fill="#fff"
          />
          <path
            d="M337.5 674.7v-7.1h2.2l1.3 4.8 1.3-4.8h2.1v7.1h-1.3v-5.6l-1.4 5.6h-1.4l-1.4-5.6v5.6h-1.4Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M348.9 673l1.3.3c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3H347c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M351 673.2l1.3-.2c0 .3.2.5.4.6.2.2.4.3.7.3l.8-.2c.2-.1.2-.3.2-.4v-.3l-.5-.2a7.4 7.4 0 0 1-2.1-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.3.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.7-.2c-.3 0-.6 0-.7.2l-.2.2.1.3 1.3.4c.8.1 1.3.3 1.6.6.2.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.9-1.2Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M356.5 673.2l1.4-.2c0 .3.2.5.3.6.2.2.5.3.8.3l.8-.2.2-.4-.1-.3-.5-.2a7.4 7.4 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.6.4c.3.2.5.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.4 0-.6 0-.8.2l-.1.2.1.3 1.3.4c.7.1 1.2.3 1.5.6.3.2.5.6.5 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M365.6 673l1.3.3c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M371 674.7v-7.1h1.3l3 4.7v-4.7h1.3v7.1h-1.4l-3-4.6v4.6H371Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M377.8 672l.3-1.3 1-1c.4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.7-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4.1c0 .5.1 1 .4 1.2.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.3.4-.7.4-1.2s-.2-.9-.4-1.1c-.3-.3-.6-.5-1-.5-.3 0-.6.2-.8.5-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M385.6 674.7h-1.4v-5.2h1.3v.8l.5-.7.6-.2c.4 0 .7.1 1 .3l-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.1.1-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M392.9 674.7h-1.3v-.7a2 2 0 0 1-1.6.8 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-.9.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2.2.4.5.6.9.6.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M393.5 674.8l1.8-7.4h1l-1.8 7.4h-1Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M397 674.7v-7.1h1.4v7.1H397Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M404.4 672l1.4.5c-.2.8-.6 1.4-1 1.8a3 3 0 0 1-2 .5 3 3 0 0 1-2.3-1c-.7-.6-1-1.5-1-2.6a4 4 0 0 1 1-2.8c.6-.6 1.4-1 2.4-1a3 3 0 0 1 2.1.8c.4.3.6.8.8 1.3l-1.5.4c0-.4-.2-.7-.5-.9-.3-.2-.6-.3-1-.3-.5 0-1 .2-1.3.5-.3.4-.5 1-.5 1.9 0 1 .2 1.6.5 2 .3.3.8.5 1.3.5.4 0 .7-.1 1-.4.3-.2.5-.6.6-1.1Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M411.6 672l1.4.5c-.2.8-.6 1.4-1 1.8a3 3 0 0 1-2 .5 3 3 0 0 1-2.3-1c-.6-.6-1-1.5-1-2.6a4 4 0 0 1 1-2.8c.6-.6 1.4-1 2.4-1a3 3 0 0 1 2.2.8c.3.3.5.8.7 1.3l-1.4.4c-.1-.4-.3-.7-.6-.9-.2-.2-.6-.3-1-.3-.5 0-1 .2-1.2.5-.4.4-.5 1-.5 1.9 0 1 .1 1.6.4 2 .4.3.8.5 1.3.5.4 0 .7-.1 1-.4.3-.2.5-.6.6-1.1Z"
            data-ubhnchn="99"
            fill="#000"
          />
          <path
            d="M445 901.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M433.3 901.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M421.4 901.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M445 942.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M433.3 942.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M421.4 942.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M586.8 996.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M586.8 1008.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M586.8 1020.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M515.3 996.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M515.3 1008.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M515.3 1020.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M454.8 988.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M446.2 996.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M437.8 1005.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="100"
            fill="#fff"
          />
          <path
            d="M372.6 1012.4v-7.1h1.4v2.8h2.9v-2.8h1.4v7.1h-1.4v-3.1H374v3.1h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M382.8 1010.8l1.4.2c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M385.4 1006.5v-1.2h1.3v1.2h-1.3Zm0 6v-5.3h1.3v5.2h-1.3Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M392.9 1012.4h-1.3v-.7a2 2 0 0 1-.7.6c-.3.2-.6.2-1 .2a2 2 0 0 1-1.4-.7 3 3 0 0 1-.7-2c0-.9.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2.2.4.5.6.9.6.3 0 .6-.2.8-.5.2-.2.3-.6.3-1.1 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M397.2 1010.8l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.7c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.8.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M399.8 1012.4v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M402.5 1012.4v-7.1h1.4v2.5a2 2 0 0 1 3 0c.5.5.7 1.1.7 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.5.5l-.7-.6v.7h-1.3Zm1.4-2.7c0 .5 0 1 .2 1.2.3.4.6.6 1 .6.3 0 .5-.2.8-.4.2-.3.3-.7.3-1.3 0-.5-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M411.7 1010.8l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M415.6 1012.4h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2-.6-.3-.5.2-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M418 1012.8l1.6.2c0 .1 0 .3.2.3l.6.2c.3 0 .6 0 .8-.2l.3-.3v-1.4c-.4.5-.9.8-1.5.8a2 2 0 0 1-1.7-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.9v-.8h1.3v4.7c0 .6 0 1-.2 1.4 0 .3-.2.5-.4.7l-.7.4-1.2.1c-.8 0-1.5-.1-1.8-.4-.4-.3-.6-.7-.6-1.2v-.1Zm1.2-3c0 .5.2.9.4 1.1.2.3.4.4.8.4.3 0 .6-.1.8-.4.2-.2.4-.6.4-1.1 0-.6-.2-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.3c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M427.3 1010.8l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M431.1 1012.4h-1.3v-5.2h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2-.6-.3-.5.2c-.2.1-.3.3-.3.6-.1.3-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M410.4 1022.4v-7.1h4c.4.2.8.4 1 .8.3.3.4.8.4 1.4 0 .4 0 .8-.2 1a2 2 0 0 1-.6.8c-.2.2-.5.3-.7.3l-1.5.1h-1v2.7h-1.4Zm1.4-6v2.1h.8l1.1-.1c.2 0 .4-.2.5-.4l.2-.5c0-.3-.1-.5-.3-.7a1 1 0 0 0-.5-.3h-1.8Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M417 1022.4v-7.1h1.4v7.1H417Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M420.8 1018.8l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4s1.1 0 1.4.2l.6.6c.2.2.2.6.2 1.2v2.6l.3.7H423l-.2-.4v-.1l-.8.5-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.6-.5-1s.1-.6.3-.9l.5-.5 1.1-.3 1.4-.4v-.1c0-.3 0-.4-.2-.6l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5 0 .1 0 .3.2.5l.6.2c.2 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M427.8 1017.2v1.1h-1V1021.2l.2.1.2.1.5-.1.2 1c-.4.2-.7.2-1.1.2h-.7a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M428.2 1022.4v-1l2-2.3.6-.8h-2.4v-1h4.2v1l-2 2.2-.6.8h2.7v1.1h-4.5Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M558.5 1032.1v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M566 1032.1h-1.4v-3.7a.8.8 0 0 0-.8-.5c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 2.5-.7l.6.4.2.6.1 1v3.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M572.1 1032.1h-1.3v-2.6l-.1-1.1a.8.8 0 0 0-.8-.5c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 2.5-.7c.3.1.5.2.6.4l.3.6v4.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M573 1030.7l1.4-.3c0 .3.2.5.4.6.2.2.4.3.7.3l.8-.2c.2-.1.2-.3.2-.4v-.3l-.5-.1a7.3 7.3 0 0 1-2.1-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.2 1.6.4.3.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.7-.2c-.3 0-.6 0-.7.2-.1 0-.2.1-.2.3l.1.2 1.3.4c.8.1 1.3.3 1.6.6.2.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.2 0-1.6-.4a2 2 0 0 1-.9-1.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M579 1032.1v-7.1h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 1.9 0 .9-.2 1.6-.6 2a2 2 0 0 1-2.4.5c-.3-.1-.6-.3-.8-.6v.7H579Zm1.4-2.7c0 .6 0 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M586.5 1032.1h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M592.5 1032.1v-.7a2 2 0 0 1-2.7.7l-.5-.7a3 3 0 0 1-.2-1.2v-3.3h1.3v2.4l.1 1.4.3.4.5.1a1 1 0 0 0 1-.7l.1-1.4v-2.1h1.4v5.1h-1.3Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M599.7 1028.5l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.3.9.3.2 0 .4 0 .6-.2.2-.1.3-.4.4-.8l1.3.3c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.4-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.7 0 1.2.2 1.5.4.4.3.7.7.8 1.3Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M600.7 1032.1v-7.1h1.4v3.8l1.6-1.8h1.7l-1.8 1.8 2 3.3H604l-1.3-2.3-.6.7v1.6h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M609.3 1030.5l1.4.2c-.2.5-.4.9-.8 1.2-.4.2-.9.3-1.4.3-1 0-1.6-.2-2-.8a3 3 0 0 1-.6-1.8c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.8.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M613.2 1032.1h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M575.5 1042.1v-7.1h4c.4.2.8.4 1 .8.3.3.5.8.5 1.4 0 .4-.1.8-.3 1a2 2 0 0 1-1.4 1 8 8 0 0 1-1.4.2h-1v2.7h-1.4Zm1.4-6v2.1h2l.4-.4.2-.6c0-.3 0-.5-.2-.7a1 1 0 0 0-.6-.3 6 6 0 0 0-1 0h-.8Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M582.2 1042.1v-7.1h1.3v7.1h-1.3Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M586 1038.5l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 .1 1.3.3l.7.5.1 1.2v1.6l.1 1 .2.7h-1.3a4.9 4.9 0 0 1-.2-.5l-.7.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3a8 8 0 0 0 1.4-.3v-.2c0-.3 0-.4-.2-.5-.1-.2-.4-.2-.7-.2l-.6.1a1 1 0 0 0-.3.5Zm1.8 1.2c-.2 0-.5 0-.8.2l-.8.2c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.3-.4l.1-.7v-.3Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M592.9 1037v1h-1V1041l.2.1.2.1.6-.1v1c-.2.2-.6.3-1 .3-.2 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M593.3 1042.1v-1l2-2.3.6-.7h-2.4v-1.1h4.3v1l-2 2.2-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M486 1025h4.1l.7.3.6.6.2.9-.3.9c-.2.3-.4.5-.7.6l1 .7c.2.3.3.7.3 1a2.1 2.1 0 0 1-.8 1.8 2 2 0 0 1-1 .3H486v-7.1Zm1.4 1.2v1.6h2l.6-.3.2-.5c0-.2 0-.4-.2-.5a.8.8 0 0 0-.6-.3h-2Zm0 2.8v2h1.3l1-.1c.2 0 .4-.2.5-.3.2-.1.2-.3.2-.6l-.1-.5a.9.9 0 0 0-.5-.4H487.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M496.6 1032.1v-.7a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7a3 3 0 0 1-.2-1.2v-3.3h1.4v3.8l.3.4.5.1a1 1 0 0 0 1-.7c.1-.2.2-.6.2-1.4v-2.1h1.3v5.1h-1.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M504 1032.1h-1.4v-3.7a.8.8 0 0 0-.8-.5c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.5v-5.1h1.3v.7a2 2 0 0 1 2.6-.7l.5.4.3.6v4.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M510.1 1032.1H509v-.7c-.3.3-.5.5-.8.6a2 2 0 0 1-2.4-.5 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2a1 1 0 0 0 1.7.2c.2-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M514.5 1030.5l1.4.2c-.2.5-.5.9-.9 1.2-.4.2-.8.3-1.4.3-.9 0-1.6-.2-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M516.6 1030.7l1.3-.3c.1.3.2.5.4.6.2.2.4.3.8.3l.8-.2.1-.4v-.3l-.5-.1a7.3 7.3 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.2 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.7 0-.8.2-.1 0-.2.1-.2.3l.2.2 1.3.4c.7.1 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.7.5-.8 0-1.3 0-1.7-.4a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M522.6 1027h1.3v.7c.1-.3.3-.5.6-.6.3-.2.6-.3 1-.3a2 2 0 0 1 1.5.7c.4.5.6 1.2.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-1.5.8l-.8-.2-.8-.6v2.6h-1.3v-7.1Zm1.3 2.5c0 .5.1 1 .4 1.3.2.2.5.4.8.4.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.3 0-.5 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M528.7 1032.1v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M532.5 1028.5l-1.2-.2c.1-.5.4-.9.7-1.1.3-.3.9-.4 1.5-.4s1.1.1 1.4.3c.3.1.5.3.6.5l.2 1.2v2.6l.3.7h-1.3a4.9 4.9 0 0 1-.2-.5l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1s.1-.6.3-.9c0-.2.3-.4.5-.5l1.1-.3a8 8 0 0 0 1.4-.3v-.2c0-.3-.1-.4-.2-.5-.2-.2-.4-.2-.8-.2l-.5.1a1 1 0 0 0-.4.5Zm1.9 1.2c-.2 0-.5 0-.9.2-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5 0 .7-.3.1 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M539.4 1027v1h-.9V1031l.2.1.2.1.5-.1.2 1c-.4.2-.7.3-1.1.3-.3 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M539.9 1032.1v-1l1.9-2.3.7-.7H540v-1.1h4.3v1l-2 2.2-.6.8h2.7v1.1H540Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M454.3 901.4v-7.2h1.4v2.8h2.9v-2.8h1.4v7.2h-1.4v-3.2h-2.9v3.2h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M462.5 897.8l-1.2-.3c.1-.5.4-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a5 5 0 0 1-.1-.6l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.2-.5-.6-.5-1l.2-.8.6-.6 1.1-.3 1.4-.3v-.2l-.2-.5-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1-.9.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2l.3-.5V899Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M467 901.4v-7.2h1.4v7.2h-1.3Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M472.8 899.7l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M480.1 901.4h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M481 899.9l1.4-.2c0 .2.2.4.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.1 0-.5.2-.9.6-1.2.3-.3.9-.4 1.6-.4.7 0 1.2 0 1.6.3.3.2.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2-.7.2c-.2 0-.2.2-.2.3l.1.2 1.3.4c.7.2 1.3.4 1.5.6.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.2-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M490 899.7l1.5.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm.2-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M495.6 899.7l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M454.3 939.4v-7.2h1.4v2.8h2.9v-2.8h1.4v7.2h-1.4v-3.2h-2.9v3.2h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M461.2 936.7c0-.5 0-.9.3-1.3.2-.5.6-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.3-.8-.6-1-1-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M469 932.2v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1H471v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M476.7 937.7l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.1.4.3.8.3l.5-.2.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.2 1h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M484 939.4h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5 0l-.7.1a1 1 0 0 0-.3.5l-.2 1.2v2.4h-1.3v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M484.9 939.4v-1.1l1.9-2.2.7-.8H485v-1.1h4.3v1l-2 2.2-.7.8h2.8v1.2H485Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M490 936.7c0-.5.2-.9.4-1.3.2-.5.6-.8 1-1 .4-.2.8-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .7-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.3-.8-.6-1-1-.2-.4-.3-1-.3-1.5Zm1.5 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M496.5 939.4v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M499.3 939.4v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M505 937.7l1.4.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M509 939.4h-1.4v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2-.5.1c-.2.2-.3.3-.3.6l-.2 1.8v1.6Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M516.2 939.4H515v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0 1 1 0 0 0-.6.1 1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M517.5 937.5V936h2.7v1.4h-2.7Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M459 949.4h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.6-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.7 0c.2-.2.4-.6.4-1.1 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M461.4 945.8l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a5 5 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2c0-.2 0-.4-.2-.5 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2l.3-.5V947Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M465.8 944.2h1.3v.7a2 2 0 0 1 1.6-.8c.4 0 .6 0 .9.2l.6.6.7-.6c.3-.2.6-.2.9-.2.4 0 .7 0 1 .2.2.1.4.4.5.7l.2 1v3.4H472v-3l-.1-1-.6-.3a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.1 1v2.6H469v-3.9l-.3-.3a.7.7 0 0 0-.4 0 1 1 0 0 0-.6 0 1 1 0 0 0-.4.6v3.6h-1.5v-5.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M474.7 944.2h1.3v.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2l.6.6.7-.6c.3-.2.6-.2.9-.2.3 0 .7 0 1 .2.2.1.4.4.5.7l.2 1v3.4H481v-3c0-.5 0-.8-.2-1 0-.2-.3-.3-.5-.3a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.2 1v2.6H478v-2.9l-.1-1-.2-.3a.7.7 0 0 0-.5 0 1 1 0 0 0-.5 0 1 1 0 0 0-.4.6v3.6h-1.5v-5.2Z"
            data-ubhnchn="101"
            fill="#000"
          />
          <path
            d="M421.2 601.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="102"
            fill="#CD9C53"
          />
          <path
            d="M771 1020.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="102"
            fill="#CD9C53"
          />
          <path
            d="M974.3 1020.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="102"
            fill="#CD9C53"
          />
          <path
            d="M965.3 1045.7h16a7 7 0 1 1 0 14h-16a7 7 0 0 1 0-14Z"
            data-ubhnchn="102"
            fill="#CD9C53"
          />
          <path
            d="m961.2 1054.3 1.6-.2c.1.6.3 1 .7 1.2.3.3.7.4 1.2.4.6 0 1 0 1.3-.3.3-.3.4-.5.4-.8 0-.3 0-.4-.2-.6l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9a2.2 2.2 0 0 1-.4-3c.3-.3.6-.6 1.1-.8.5-.2 1-.3 1.7-.3 1 0 1.9.3 2.4.7.6.5.9 1.1.9 2h-1.7c-.1-.5-.3-.8-.5-1-.3-.2-.6-.3-1.1-.3a2 2 0 0 0-1.2.4c-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.7.4 1.6.6l1.8.6c.4.2.8.5 1 .9.2.3.3.8.3 1.3a2.5 2.5 0 0 1-1.5 2.4c-.5.2-1.2.3-1.9.3-1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.1Z"
            data-ubhnchn="103"
            fill="#fff"
          />
          <path
            d="M975.8 1057v-1.7h-3.5v-1.4l3.7-5.5h1.4v5.5h1v1.4h-1v1.8h-1.6Zm0-3.1v-3l-2 3h2Z"
            data-ubhnchn="103"
            fill="#fff"
          />
          <path
            d="M979.3 1050.1v-1.5h5.6v1.2c-.5.4-1 1-1.4 2a11.6 11.6 0 0 0-1.5 5.3h-1.6a12.1 12.1 0 0 1 2.6-7h-3.7Z"
            data-ubhnchn="103"
            fill="#fff"
          />
          <path
            d="m783.2 1043.8 1.7-.2c.1.6.3 1 .6 1.2.3.3.7.4 1.3.4.5 0 1 0 1.2-.3.3-.3.5-.5.5-.8l-.2-.6-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9a2.2 2.2 0 0 1-.4-3c.2-.3.6-.6 1-.8.5-.2 1-.3 1.8-.3 1 0 1.8.3 2.4.7.5.5.8 1.1.8 2h-1.7c0-.5-.2-.8-.5-1-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.3.4l-.2.5c0 .2 0 .4.2.5l1.6.6a8 8 0 0 1 1.9.6c.4.2.7.5 1 .9.2.3.3.8.3 1.3a2.5 2.5 0 0 1-1.6 2.4c-.5.2-1.1.3-1.8.3-1.1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.1Z"
            data-ubhnchn="105"
            fill="#fff"
          />
          <path
            d="M797.9 1046.5v-1.7h-3.6v-1.4l3.8-5.5h1.3v5.5h1.1v1.4h-1v1.8h-1.6Zm0-3.1v-3l-2 3h2Z"
            data-ubhnchn="105"
            fill="#fff"
          />
          <path
            d="M801.3 1044.3l1.7-.1c0 .3.2.6.4.8a1.1 1.1 0 0 0 1.7 0c.2-.3.3-.7.3-1.3 0-.5-.1-1-.3-1.2-.3-.3-.6-.4-1-.4s-.9.2-1.2.6l-1.4-.2.9-4.4h4.3v1.5h-3l-.3 1.5c.3-.2.7-.3 1-.3.8 0 1.4.3 2 .8.5.5.7 1.2.7 2s-.2 1.4-.6 2c-.6.7-1.3 1.1-2.3 1.1a3 3 0 0 1-2-.6c-.5-.5-.8-1-.9-1.8Z"
            data-ubhnchn="105"
            fill="#fff"
          />
          <path
            d="m383.5 608.4 1.7-.2c.1.6.3 1 .6 1.2.3.3.8.4 1.3.4s1 0 1.2-.3c.3-.3.5-.5.5-.8 0-.2 0-.4-.2-.6l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9a2.2 2.2 0 0 1-.4-3c.2-.3.6-.6 1-.8.5-.2 1.1-.3 1.8-.3 1 0 1.9.2 2.4.7.5.5.8 1.1.9 2h-1.8c0-.5-.2-.8-.5-1-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.2.4c-.2 0-.3.3-.3.5s0 .4.2.5l1.6.6 2 .6.9.9c.2.3.3.8.3 1.3a2.5 2.5 0 0 1-1.6 2.4c-.5.2-1 .3-1.8.3-1.1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.1Z"
            data-ubhnchn="107"
            fill="#fff"
          />
          <path
            d="M398.2 611.1v-1.7h-3.6V608l3.8-5.5h1.4v5.5h1v1.4h-1v1.8h-1.6Zm0-3.1v-3l-2 3h2Z"
            data-ubhnchn="107"
            fill="#fff"
          />
          <path
            d="M407.2 604.7l-1.6.1c0-.3-.1-.5-.3-.7a.9.9 0 0 0-.6-.2 1 1 0 0 0-1 .4c-.2.4-.3 1-.4 2a2 2 0 0 1 1.5-.7c.7 0 1.3.2 1.8.8.5.5.7 1.2.7 2a3 3 0 0 1-.7 2.1c-.5.5-1.2.8-2 .8-.9 0-1.6-.3-2.1-1-.6-.7-.9-1.8-.9-3.3 0-1.6.3-2.7.9-3.4.6-.7 1.3-1 2.3-1 .6 0 1.1.1 1.6.5.4.3.7.9.8 1.6Zm-3.7 3.6c0 .5 0 .9.3 1.2.3.3.6.4.9.4.3 0 .5 0 .7-.3.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1Z"
            data-ubhnchn="107"
            fill="#fff"
          />
          <path
            d="M486.8 547.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="107"
            fill="#fff"
          />
          <path
            d="M486.8 535.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="107"
            fill="#fff"
          />
          <path
            d="M467 508h1.4v4.5l-.1 1.3a2 2 0 0 1-.8 1c-.4.3-.9.4-1.5.4-.7 0-1.2-.2-1.6-.6-.4-.4-.6-1-.6-1.7l1.4-.2c0 .4 0 .7.2.9.1.2.4.4.7.4.3 0 .5-.1.7-.3l.2-1.2V508Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M473.4 515v-.7a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1v-3.3h1.4v3.7l.3.4.6.2a1 1 0 0 0 1-.7v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M480.8 515h-1.4v-3.6l-.4-.4a.8.8 0 0 0-.4-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V515.1H476v-5.2h1.2v.8a2 2 0 0 1 1.7-1l.9.2.5.5c.2.1.3.3.3.5v4.2Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M482 515.4l1.6.2.2.4.6.1.8-.1.3-.4v-1.4c-.4.6-.9.9-1.5.9a2 2 0 0 1-1.7-1 3 3 0 0 1-.4-1.6c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.5.8v-.7h1.3v4.6l-.1 1.4-.4.7-.8.4-1.1.2c-1 0-1.5-.2-1.9-.5-.4-.3-.6-.7-.6-1.1v-.2Zm1.3-3c0 .5 0 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M487.7 509.9h.8v-1.4l.6-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1.1.2l-.2 1-.6-.1h-.4l-.2.6v.4h1v1h-1v4.2h-1.3V511h-.8v-1.1Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M494.6 513.4l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4l-.2.8h2Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M498.5 515h-1.4V510h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5V515.1Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M505.8 515h-1.4v-3.6l-.3-.4a.8.8 0 0 0-.5-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.3.5l-.2 1.2v2.4h-1.3v-5.2h1.2v.8a2 2 0 0 1 1.8-1l.8.2.6.5.2.5.1 1v3.2Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M507 513.2v-1.4h2.7v1.4H507Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M475.8 518v2.6a2 2 0 0 1 1.5-.8c.4 0 .6 0 .9.2a1.4 1.4 0 0 1 .8 1l.1 1v3h-1.4v-3.7l-.3-.3a.9.9 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M483.5 523.4l1.4.3c-.2.5-.5.8-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M486 519.2v-1.3h1.4v1.3h-1.3Zm0 5.9v-5.2h1.4v5.2h-1.3Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M493.6 525h-1.3v-.7a2 2 0 0 1-.7.7 2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-1 .2-1.6.7-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.7-2.6c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M498 523.4l1.3.3c-.1.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.6.6 1.3.6 2.4H496c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="108"
            fill="#000"
          />
          <path
            d="M539.8 547.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="109"
            fill="#fff"
          />
          <path
            d="M539.8 535.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="109"
            fill="#fff"
          />
          <path
            d="M519.6 552h2.9l1.2.1a1.9 1.9 0 0 1 1.3 1c.2.2.3.4.3.7a1.7 1.7 0 0 1-1 1.6c.4.1.7.3 1 .6a2.1 2.1 0 0 1-.5 2.8 2 2 0 0 1-1 .4h-4.2V552Zm1.5 1.2v1.7h2c.2 0 .4-.1.5-.3.2-.1.3-.3.3-.5l-.2-.6a.8.8 0 0 0-.6-.2h-2Zm0 2.9v1.9h2.3c.2 0 .4-.2.5-.3.2-.2.2-.4.2-.6l-.1-.6a.9.9 0 0 0-.5-.3 5 5 0 0 0-1.3-.1h-1.1Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M529.8 557.6l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3l-.2.9h2Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M535.8 559.2v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1V554h1.3v2.4l.1 1.3c0 .2.2.3.3.4l.5.2a1 1 0 0 0 1-.7l.1-1.4V554h1.4v5.2h-1.3Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M538 557.7l1.4-.2c0 .3.2.5.4.6.1.2.4.2.7.2.4 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.4 7.4 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2s.2-.8.5-1.1c.4-.3 1-.5 1.7-.5s1.2.1 1.6.3c.3.3.6.6.7 1l-1.3.3c0-.2-.2-.3-.3-.5l-.7-.1-.8.1-.1.3.1.3 1.3.4c.7.1 1.2.3 1.5.6.3.2.5.5.5 1s-.2.9-.6 1.2c-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M543.6 557.7l1.4-.2c0 .3.1.5.3.6.2.2.5.2.8.2.3 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.4 7.4 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2s.2-.8.5-1.1c.4-.3 1-.5 1.7-.5s1.2.1 1.5.3c.4.3.6.6.8 1l-1.3.3c0-.2-.2-.3-.4-.5l-.6-.1-.8.1-.1.3v.3l1.4.4c.7.1 1.2.3 1.5.6.3.2.4.5.4 1s-.2.9-.6 1.2c-.4.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M552.6 557.6l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.5Zm.1-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M555.2 559.2V552h1.4v7.2h-1.4Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M557.8 557.3v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M525 567.7l1.3-.2c0 .3.2.5.4.6.2.2.4.2.7.2.4 0 .7 0 .8-.2.2 0 .2-.2.2-.3v-.3l-.5-.2a7.4 7.4 0 0 1-2.1-.6c-.4-.3-.7-.7-.7-1.2s.2-.8.6-1.1c.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.3.4.3.6.6.7 1l-1.3.3c0-.2-.1-.3-.3-.5l-.6-.1-.8.1-.2.3c0 .1 0 .2.2.3l1.2.4c.8.1 1.3.3 1.6.6.3.2.4.5.4 1s-.2.9-.6 1.2c-.4.3-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M533.4 564v1.1h-1v2.8l.2.2h.8l.1 1c-.3.2-.7.2-1 .2l-.8-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1h.7V563l1.3-.8v1.8h1Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M535.7 569.2h-1.4V564h1.3v.8c.2-.4.4-.6.6-.7l.5-.2c.4 0 .7 0 1 .3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M539.3 565.6l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.1 1.2v2.6l.3.7h-1.3a5.2 5.2 0 0 1-.2-.6c-.2.3-.5.4-.8.6l-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.1.6-.3 1-.3l1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2 0-.3.3-.3.4 0 .2.1.4.3.5.1.2.3.3.5.3.3 0 .5-.1.7-.3.2-.1.3-.3.3-.4l.1-.7v-.3Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M543.8 569.2v-4.6l.1-1.5.7-.9c.3-.2.8-.3 1.3-.3.7 0 1.2.2 1.5.5.3.2.5.6.5 1l-.3 1-.3.5v.5l.7.7.7.8a1.7 1.7 0 0 1-1.6 2.4c-.3 0-.7 0-1-.2l-.6-.7 1-.6c0 .2.1.3.2.3l.3.1.3-.1.2-.4-.2-.4-.7-.7c-.5-.5-.8-.9-.8-1.2l.3-1 .3-.6v-.6a.6.6 0 0 0-.5-.2l-.4.1c-.2.1-.2.2-.3.4v5.7h-1.4Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M553 567.6l1.3.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="110"
            fill="#000"
          />
          <path
            d="M592.8 547.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="111"
            fill="#fff"
          />
          <path
            d="M592.8 535.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="111"
            fill="#fff"
          />
          <path
            d="M645.8 547.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="111"
            fill="#fff"
          />
          <path
            d="M645.8 535.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="111"
            fill="#fff"
          />
          <path
            d="m626.4 559.2-1.7-7.2h1.4l1.1 5 1.3-5h1.8l1.2 5 1.1-5h1.5l-1.8 7.2h-1.5l-1.4-5.3-1.5 5.3h-1.5Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M637.8 557.6l1.4.2c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M645.1 559.2h-1.3v-.8a2 2 0 0 1-1.6 1 2 2 0 0 1-1.5-.8 3 3 0 0 1-.7-2c0-.9.2-1.6.7-2a2 2 0 0 1 3 0V552h1.4v7.2Zm-3.7-2.7c0 .6.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.2.3-.6.3-1.2s0-1-.3-1.3a1 1 0 0 0-.8-.3 1 1 0 0 0-.8.3c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M651.2 559.2H650v-.8a2 2 0 0 1-1.6 1 2 2 0 0 1-1.5-.8 3 3 0 0 1-.6-2c0-.9.2-1.6.6-2a2 2 0 0 1 3 0V552h1.4v7.2Zm-3.6-2.7c0 .6 0 1 .2 1.2a1 1 0 0 0 1.7.1c.2-.2.4-.6.4-1.2s-.2-1-.4-1.3a1 1 0 0 0-.8-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M652.6 553.3V552h1.3v1.3h-1.3Zm0 5.9V554h1.3v5.2h-1.3Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M660 559.2h-1.3v-2.6l-.1-1.1c0-.2-.1-.3-.3-.4a.8.8 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.6v3.5h-1.5V554h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2a1.4 1.4 0 0 1 .8 1V559.2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M661.3 559.5l1.6.2c0 .2 0 .3.2.4l.6.2.8-.2.3-.4V558.5c-.4.5-.9.8-1.5.8a2 2 0 0 1-1.7-.9 3 3 0 0 1-.4-1.7c0-.9.2-1.6.6-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.8v-.7h1.3v4.7l-.1 1.3-.5.8-.7.4-1.1.1c-1 0-1.6-.1-2-.4-.3-.3-.5-.7-.5-1.2v-.2Zm1.3-3c0 .6 0 1 .3 1.2.2.3.5.4.8.4.3 0 .6-.1.8-.4.2-.3.4-.6.4-1.2 0-.5-.1-.9-.4-1.2a1 1 0 0 0-.8-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M569.2 525l-1.7-7h1.5l1 4.8 1.3-4.9h1.8l1.2 5 1.1-5h1.5l-1.8 7.2h-1.5l-1.4-5.4-1.4 5.4h-1.6Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M580.6 523.4l1.4.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M582.7 523.6l1.4-.2c0 .3.1.5.3.6l.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.3-.6-.6-.6-1.1 0-.5.1-.9.5-1.2.4-.3.9-.4 1.6-.4.8 0 1.3 0 1.6.3.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.1-.8.1-.2.3s0 .2.2.2c.1.1.5.3 1.3.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.2-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M591.1 519.9v1h-1V523.9l.2.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5V521h-.6v-1.1h.6v-1l1.4-.8v1.8h.9Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M593.4 518v2.5a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1.1v4h-1.3v-3.7l-.3-.3a.9.9 0 0 0-.5-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M599.2 521.5l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a4.9 4.9 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8l.6-.6 1.1-.3c.6 0 1-.2 1.3-.3v-.1c0-.3 0-.5-.2-.6 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1a8 8 0 0 1-.8.3c-.4 0-.6.2-.7.2-.2.2-.3.3-.3.5s0 .4.2.5c.1.2.3.2.6.2.2 0 .4 0 .7-.2l.3-.5V522.6Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M603.1 519.9h.8v-.4l.1-1c.1-.2.3-.4.6-.5a2 2 0 0 1 .9-.2c.4 0 .8 0 1.1.2l-.1 1-.7-.2c-.2 0-.3 0-.4.2l-.1.5v.4h1v1h-1v4.2h-1.4V521h-.8v-1.1Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M610 523.4l1.5.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm.2-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M617.4 525H616v-3.6c-.2-.2-.2-.4-.4-.4a.8.8 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5V525.1h-1.5v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.9.2.5.5c.2.1.2.3.3.5v4.2Z"
            data-ubhnchn="112"
            fill="#000"
          />
          <path
            d="M1093.4 539.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1084.7 548.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1076.2 557a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1007.1 523.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1007.1 535.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1007.1 547.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M925 523.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M925 535.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M925 547.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1084.6 605.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1096.4 605.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1108.4 605.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1084.6 648.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1096.4 648.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1108.4 648.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="113"
            fill="#fff"
          />
          <path
            d="M1098.8 523v-7.2h1.4v6h3.6v1.1h-5Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1105.8 519.3l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4l1.4.2.6.6c.2.2.2.6.2 1.2v2.6l.3.7h-1.3l-.2-.4v-.1l-.8.5-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.4c0-.4 0-.5-.2-.7l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1115.1 523h-1.4V519.1l-.3-.4a.8.8 0 0 0-.5-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .5 0 .8.2l.6.4.2.6.1.9v3.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1121.3 523h-1.3v-.8a2 2 0 0 1-3.2.2 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.5v7.1Zm-3.7-2.8c0 .6 0 1 .2 1.2.3.4.5.6 1 .6.3 0 .5-.2.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1122.1 521.4l1.4-.2c0 .3.2.5.4.6.1.2.4.3.7.3l.8-.2.2-.4-.1-.3-.5-.2a7.3 7.3 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5a3 3 0 0 1 1.6.4c.3.2.6.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.3 0-.6 0-.8.2l-.1.2.1.3 1.3.4c.8.1 1.3.3 1.5.6.3.2.5.6.5 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1128.1 523v-7.2h1.4v2.5a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.6.7c.4.5.6 1.1.6 2 0 .9-.2 1.5-.7 2a2 2 0 0 1-3.1-.1v.7h-1.3Zm1.4-2.8c0 .6 0 1 .2 1.2.3.4.6.6 1 .6.3 0 .5-.2.8-.4.2-.3.3-.7.3-1.3 0-.5-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1137.3 521.3l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1141.2 523h-1.4v-5.3h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1143.6 523.3l1.6.2c0 .1 0 .3.2.3l.6.2c.3 0 .6 0 .8-.2l.3-.3V522c-.4.5-.9.8-1.5.8-.7 0-1.3-.3-1.7-.9a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.9v-.8h1.3v4.7c0 .6 0 1-.2 1.4a1.6 1.6 0 0 1-1.1 1c-.3.2-.7.2-1.2.2-.8 0-1.5-.1-1.8-.4-.4-.3-.6-.7-.6-1.2v-.1Zm1.3-3c0 .5 0 .9.3 1.1.2.3.4.4.8.4.3 0 .6-.1.8-.4.2-.2.4-.6.4-1.1 0-.6-.2-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1152.9 521.3l1.3.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1156.7 523h-1.3v-5.3h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1a1 1 0 0 0-.3.6c-.1.3-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1105.2 533h-1.6l-.6-1.7h-2.9l-.6 1.6h-1.5l2.8-7.1h1.5l2.9 7.1Zm-2.7-3-1-2.6-1 2.7h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1106 533v-7.2h1.3v7.1h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1108.7 533v-7.2h1.4v7.1h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1114.5 531.3l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1120 531.3l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.8.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1118 644.1v-7.2h4.9v1.3h-3.5v1.6h3v1.3h-3v3h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1125.4 644.1h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.3 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1129 640.5l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.4.2.6.3.7.6l.2 1.2v2.6c0 .2.1.5.3.7h-1.4l-.1-.4v-.2l-.8.6-.9.1c-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8.2-.2.3-.4.6-.5.3-.1.6-.3 1-.3l1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3-.2.4c0 .2 0 .4.2.5.1.2.3.3.5.3.3 0 .5-.1.7-.3l.4-.4v-1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1138.2 644.1h-1.3v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.2l-.6.2a1 1 0 0 0-.4.6l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.3.6V644Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1139.6 644.1v-7.2h1.4v3.8l1.6-1.8h1.7l-1.8 2 1.9 3.2h-1.5l-1.3-2.3-.6.6v1.7h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1144.6 639h.8v-.5l.1-1 .5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1.1.2l-.2 1-.6-.1-.4.1-.2.6v.3h1v1.1h-1v4.1h-1.3V640h-.8v-1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1152 644.1v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-1.9 0c-.3-.2-.5-.4-.6-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7l.3.4.5.2c.3 0 .5 0 .7-.2l.4-.5v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1156 644.1h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2a1 1 0 0 0-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1161 639v1h-1v2.8l.1.2h.8l.1 1c-.3.2-.7.2-1 .2l-.7-.1a1 1 0 0 1-.5-.3l-.1-.6V640h-.7v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1164.9 642.5l1.4.2c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1168.8 644.1h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.5-.2c.4 0 .7 0 1 .3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1124.4 654.1h-1.6l-.6-1.6h-2.8l-.6 1.6h-1.6l2.8-7.2h1.6l2.8 7.2Zm-2.6-2.8-1-2.7-1 2.7h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1125.2 654.1v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1128 654.1v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1133.7 652.5l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4l-.2.9h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1139.3 652.5l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1117.6 600.1l1.4-.1c0 .5.3.8.5 1 .3.3.6.4 1 .4.5 0 .9-.1 1.1-.3.3-.2.4-.4.4-.7 0-.2 0-.3-.2-.4 0-.2-.2-.3-.5-.4l-1.1-.3a4 4 0 0 1-1.7-.7 1.9 1.9 0 0 1-.3-2.4c.2-.4.5-.6.9-.8l1.4-.2c.9 0 1.5.2 2 .6.5.4.7.9.7 1.6h-1.4c0-.3-.2-.6-.4-.8l-1-.2c-.4 0-.7 0-1 .2l-.2.5c0 .2.1.3.3.4.1.2.6.3 1.3.5l1.5.5c.4.2.7.4.8.7.2.4.3.7.3 1.2 0 .4 0 .8-.3 1.1a2 2 0 0 1-1 .8 4 4 0 0 1-1.5.3c-1 0-1.6-.2-2.1-.6-.5-.5-.8-1-.9-1.9Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1127 597.3v1h-1v2.2l.1.7.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5v-3.2h-.6v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1127.7 599.8c0-.5 0-.9.3-1.3.2-.4.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.2 1.4-.8 2-.5.4-1 .7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.3-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6 0 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1135.4 602.5h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5V602.5Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1138 602.5v-7.2h1.3v3.8l1.6-1.8h1.7l-1.8 1.9 2 3.3h-1.5l-1.4-2.4-.6.7v1.7h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1143.2 599.8c0-.5.1-.9.4-1.3.2-.4.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 2a3 3 0 0 1-3.3.5l-1-1a3 3 0 0 1-.3-1.6Zm1.4 0c0 .6.2 1 .4 1.3.2.2.5.4.9.4s.7-.2.9-.4c.3-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.2-.3-.5-.4-.9-.4s-.7.1-.9.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1150.6 602.5l-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.9 3.4 1-3.4h1.3l-1.7 5.2h-1.3l-.9-3.4-.8 3.4h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1160.4 600.8l1.4.2c-.2.5-.5 1-.8 1.2-.4.3-.9.4-1.5.4-.8 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2 1h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1164.3 602.5h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2a1 1 0 0 0-.3.5V602.5Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1117.6 610.1l1.4-.1c0 .5.3.8.5 1 .3.3.6.4 1 .4.5 0 .9-.1 1.1-.3.3-.2.4-.4.4-.7 0-.2 0-.3-.2-.4 0-.2-.2-.3-.5-.4l-1.1-.3a4 4 0 0 1-1.7-.7 1.9 1.9 0 0 1-.3-2.4c.2-.4.5-.6.9-.8l1.4-.2c.9 0 1.5.2 2 .6.5.4.7.9.7 1.6h-1.4c0-.3-.2-.6-.4-.8l-1-.2c-.4 0-.7 0-1 .2l-.2.5c0 .2.1.3.3.4.1.2.6.3 1.3.5l1.5.5c.4.2.7.4.8.7.2.4.3.7.3 1.2 0 .4 0 .8-.3 1.1a2 2 0 0 1-1 .8 4 4 0 0 1-1.5.3c-1 0-1.6-.2-2.1-.6-.5-.5-.8-1-.9-1.9Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1127 607.3v1h-1v2.2l.1.7.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5v-3.2h-.6v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1129.3 612.5h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2a1 1 0 0 0-.3.5l-.1 1.8v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1132.9 608.9l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.1c0-.3 0-.5-.2-.6-.1-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .8-.2l.3-.5V610Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1137.4 612.5v-4.7c0-.6 0-1.1.2-1.5 0-.3.3-.6.6-.8.4-.2.8-.3 1.3-.3.7 0 1.2.1 1.5.4.3.3.5.6.5 1s0 .7-.3 1l-.3.6v.2l.1.3.6.6.7.9.2.7c0 .5-.2.9-.5 1.2-.3.3-.8.5-1.3.5l-.9-.3-.6-.6 1-.6.1.3h.7l.1-.4-.1-.4-.7-.7c-.6-.5-.8-1-.8-1.2 0-.2 0-.6.3-1l.3-.6v-.3l-.1-.4a.6.6 0 0 0-.5-.1.7.7 0 0 0-.7.4V612.5h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1146.5 610.8l1.4.2c-.2.5-.4 1-.8 1.2-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M981 500.5v-1.2h3v2.9a4.8 4.8 0 0 1-3 1.1 4 4 0 0 1-2-.5 3 3 0 0 1-1.2-1.3c-.3-.6-.4-1.3-.4-2s.1-1.4.4-2c.4-.5.8-1 1.4-1.3.5-.2 1-.3 1.7-.3 1 0 1.6.2 2.1.5.5.4.8 1 1 1.6l-1.5.3c0-.4-.3-.7-.5-.9-.3-.2-.7-.3-1-.3a2 2 0 0 0-1.6.6c-.4.4-.5 1-.5 1.8s.1 1.5.5 2a2.5 2.5 0 0 0 2.4.5l.8-.6v-.9H981Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M986.7 503.2h-1.4V498h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M992.3 501.5l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M994.8 497.3V496h1.4v1.3h-1.4Zm0 5.9V498h1.4v5.2h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M997 498h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2c.4 0 .7 0 1.1.2l-.2 1-.6-.2c-.2 0-.3 0-.4.2-.1 0-.2.2-.2.5v.4h1v1h-1v4.2h-1.3V499h-.8v-1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1000.5 501.7l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7.5 7.5 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1 .3-.4.9-.5 1.6-.5.8 0 1.3 0 1.6.3.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.2c-.4 0-.6 0-.8.2l-.2.3.2.2 1.3.4 1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5-.8 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1007.5 503.2l-1.7-5.2h1.4l1 3.4.8-3.4h1.4l.8 3.4 1-3.4h1.4l-1.7 5.2h-1.3l-.9-3.4-.9 3.4h-1.3Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1015.3 499.6l-1.2-.3c.1-.5.4-.8.7-1 .3-.3.9-.4 1.5-.4s1 0 1.4.2c.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a3.4 3.4 0 0 1-.1-.6l-.8.5-.9.2c-.5 0-.9-.2-1.2-.5-.3-.2-.5-.6-.5-1l.2-.8.6-.6 1.1-.3 1.4-.3v-.2l-.2-.5-.8-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.9 1-.9.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2.1-.2.3-.3.3-.5V500.7Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1019.9 503.2V496h1.3v7.2h-1.3Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1027.4 503.2h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .2-1.6.7-2a2 2 0 0 1 1.5-.7c.6 0 1 .2 1.5.7V496h1.4v7.2Zm-3.7-2.7c0 .5.1.9.3 1.2a1 1 0 0 0 1.7 0c.2-.2.3-.6.3-1.1 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.6-.4 1.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1031.8 501.5l1.3.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.6-1.7c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1035.6 503.2h-1.3V498h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2-.5.1-.3.6V503.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M992 510.8l1.4-.1c0 .5.2.8.5 1 .3.3.6.4 1 .4.5 0 .9-.1 1.1-.3.2-.2.3-.5.3-.7l-.1-.5-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.4c.3-.4.5-.6 1-.8l1.3-.2c1 0 1.6.2 2 .6.5.4.8.9.8 1.5l-1.5.1c0-.4-.1-.6-.4-.8l-.9-.2c-.4 0-.7 0-1 .2l-.2.5c0 .1 0 .3.2.4.2.2.7.3 1.4.5a7 7 0 0 1 1.5.5c.4.2.6.4.8.7.2.3.3.7.3 1.2a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.6-.5-.5-.8-1-1-1.9Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1001.4 508v1h-1V512l.2.2h.2l.6-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.6 0-.8-.2a1 1 0 0 1-.4-.3l-.2-.5V509h-.7V508h.7v-1l1.4-.9v1.9h.9Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1003.7 513.2h-1.4V508h1.3v.7l.5-.7.6-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1a1 1 0 0 0-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1007.3 509.6l-1.3-.3c.2-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.2 1.3v2.6l.2.7h-1.3a3.1 3.1 0 0 1-.2-.6l-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1s0-.6.2-.8c.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1a9 9 0 0 1-.8.3l-.8.2c-.2.1-.3.3-.3.5s.1.4.3.5l.5.2c.3 0 .5 0 .7-.2.2-.2.3-.3.3-.5l.1-.7v-.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1011.8 513.2v-4.7l.1-1.5c.1-.3.4-.6.7-.8.3-.2.8-.3 1.3-.3.7 0 1.2.1 1.5.4.3.3.5.6.5 1l-.3 1-.3.6v.1l.1.4.6.6.7.9.1.7c0 .5-.1.9-.4 1.2-.4.3-.8.5-1.3.5l-1-.3-.6-.6 1-.6.2.3a.5.5 0 0 0 .6 0l.2-.4c0-.2 0-.3-.2-.4l-.6-.7c-.6-.5-.9-1-.9-1.3l.3-.9.3-.6v-.7a.6.6 0 0 0-.5-.1h-.4l-.3.4V513.2h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1021 511.5l1.3.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.1.4.3.7.3l.6-.2.3-.6Zm0-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2.1Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M899.8 503.2V496h2.3l1.7.1c.5.1.8.3 1 .7.3.4.5.8.5 1.4 0 .4 0 .8-.3 1.1a2 2 0 0 1-.6.7l-.7.4h-2.5v2.8h-1.4Zm1.4-6v2h2a1 1 0 0 0 .6-1c0-.2 0-.5-.2-.6a1 1 0 0 0-.6-.3h-1.8Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M907.8 503.2h-1.4V498h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M913.4 501.5l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M920.6 503.2h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4V498h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M921.5 503.2V502l2-2.2.6-.8h-2.4V498h4.3v1l-2 2.2-.7.8h2.8v1.2h-4.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M927 503.2V496h1.4v7.2H927Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M930.8 499.6l-1.2-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.5-.4.7 0 1.1 0 1.4.2.3.1.5.3.6.5.2.2.2.7.2 1.3v2.6l.3.7H933a4.9 4.9 0 0 1-.2-.6l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1s0-.6.2-.8c.1-.3.3-.4.5-.6l1.1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1-.9.3-.7.2c-.2.1-.3.3-.3.5l.2.5.6.2c.2 0 .5 0 .7-.2.2-.2.3-.3.3-.5V500.7Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M938.8 503.2v-.8a2 2 0 0 1-2.7.7l-.6-.7-.2-1.1V498h1.4v2.4l.1 1.3c0 .2.1.3.3.4l.5.1a1 1 0 0 0 1-.6V498h1.5v5.2h-1.3Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M944.5 501.5l1.4.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M948.4 503.2H947V498h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M919.9 513.2h-1.6l-.6-1.7h-2.9l-.6 1.7h-1.5l2.8-7.2h1.5l2.9 7.2Zm-2.7-2.9-1-2.6-1 2.6h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M920.6 513.2V506h1.4v7.2h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M923.4 513.2V506h1.4v7.2h-1.4Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M929.2 511.5l1.4.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M934.8 511.5l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="114"
            fill="#000"
          />
          <path
            d="M1039 996.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="115"
            fill="#fff"
          />
          <path
            d="M1039 1008.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="115"
            fill="#fff"
          />
          <path
            d="M1039 1020.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="115"
            fill="#fff"
          />
          <path
            d="M332.1 726a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="115"
            fill="#fff"
          />
          <path
            d="M323.6 734.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="115"
            fill="#fff"
          />
          <path
            d="M296.8 690.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="115"
            fill="#fff"
          />
          <path
            d="M288.3 699a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="115"
            fill="#fff"
          />
          <path
            d="M232.5 706.6v-7.2h1.4v2.8h2.8v-2.8h1.5v7.2h-1.5v-3.1H234v3h-1.4Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M242.7 705l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M248.2 705l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M252.1 706.6h-1.4v-5.2h1.3v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5V706.6Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M254.2 705.1l1.4-.2c0 .3.2.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.8.5-1.2.4-.3 1-.4 1.7-.4s1.2.1 1.6.3l.7 1-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.3 1.3.3 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M262.6 701.4v1.1h-.9v2.8l.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M265 706.6h-1.5v-5.2h1.3v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5V706.6Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M268.5 703l-1.2-.2c.1-.5.3-1 .7-1.2.3-.2.8-.3 1.5-.3.6 0 1 0 1.4.2.3.1.5.3.6.6l.2 1.2v2.6l.3.7h-1.4a5 5 0 0 1-.1-.6l-.8.5c-.3.2-.6.2-.9.2-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8l.6-.5 1.1-.4c.7 0 1.1-.2 1.3-.3v-.1c0-.3 0-.5-.2-.6 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.1a8 8 0 0 1-.8.2c-.4 0-.6.2-.7.2-.2.2-.3.3-.3.5s0 .4.2.5c.2.2.3.2.6.2.2 0 .4 0 .7-.2l.3-.5V704.1Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M273 706.6v-4.7c0-.6 0-1.1.2-1.4.1-.4.3-.7.7-.9.3-.2.7-.3 1.3-.3.6 0 1.1.2 1.4.4.4.3.5.7.5 1 0 .4 0 .7-.2 1l-.3.6v.5l.6.6.7 1 .2.6c0 .5-.2 1-.5 1.2-.3.4-.7.5-1.2.5-.4 0-.7 0-1-.3-.3-.1-.5-.4-.6-.6l1-.6c0 .2 0 .2.2.3l.2.1.4-.1.1-.4-.1-.4-.7-.7c-.6-.5-.8-1-.8-1.2 0-.2 0-.5.3-1l.3-.6v-.3l-.1-.4a.6.6 0 0 0-.5-.1l-.4.1-.2.3-.1 1.1v4.7H273Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M282.2 705l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="116"
            fill="#000"
          />
          <path
            d="M261.4 655.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="117"
            fill="#fff"
          />
          <path
            d="M253 663.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="117"
            fill="#fff"
          />
          <path
            d="M174 667.7c0-.7.2-1.3.4-1.8.1-.4.4-.7.6-1l1-.7a4 4 0 0 1 1.5-.2c1 0 2 .3 2.5 1 .7.6 1 1.5 1 2.7 0 1.1-.3 2-1 2.7-.6.6-1.4 1-2.5 1-1 0-1.9-.4-2.5-1-.6-.7-1-1.6-1-2.7Zm1.5 0c0 .8.2 1.4.6 1.8.4.4.9.6 1.4.6.6 0 1-.2 1.4-.6.4-.4.6-1 .6-1.9 0-.8-.2-1.4-.5-1.8-.4-.4-.9-.6-1.5-.6s-1 .2-1.4.6c-.4.4-.6 1-.6 1.8Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M182.1 671.2v-7.1h1.4v7.1H182Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M184.2 666h1.5l1.2 3.7 1.2-3.7h1.5l-1.9 5-.3 1-.3.6a1.5 1.5 0 0 1-1 .7h-1.4l-.1-1.1h.5c.4 0 .6 0 .8-.2l.3-.8-2-5.2Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M190.3 666h1.3v.8a2 2 0 0 1 1.6-.9l.9.2.6.7.7-.7.9-.2c.4 0 .7.1 1 .3.2.1.4.3.5.6l.2 1.1v3.3h-1.4v-3l-.1-1-.6-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.1 1v2.5h-1.4v-3.8l-.3-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.4v3.6h-1.5V666Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M199.3 666h1.3v.8a2 2 0 0 1 1.6-.9 2 2 0 0 1 1.5.7c.4.5.7 1.2.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.3.6l-.7-.6v2.6h-1.4V666Zm1.4 2.6c0 .5 0 1 .3 1.2.2.3.5.5.8.5.4 0 .6-.2.8-.4.3-.3.4-.7.4-1.3 0-.5-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M205.4 665.3v-1.2h1.4v1.2h-1.4Zm0 6V666h1.4v5.2h-1.4Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M209.2 667.6l-1.2-.2c.1-.5.4-.9.7-1.1.4-.2.9-.4 1.5-.4l1.4.2.6.6c.2.2.2.6.2 1.2v2.6l.3.7h-1.3a5 5 0 0 1-.2-.5l-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5-.1-.2-.4-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.3-.7.2c-.2.1-.3.3-.3.5l.2.5.6.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M213.3 669.8l1.4-.3c0 .3.2.5.3.7l.8.2.8-.2.2-.4-.1-.3-.5-.1a7.4 7.4 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.6.4c.3.2.5.6.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.4 0-.6 0-.8.2l-.1.2.1.3 1.3.4c.7.1 1.2.3 1.5.6.3.2.5.6.5 1 0 .5-.2.9-.6 1.2-.4.4-1 .6-1.8.6-.7 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M221.7 666v1.1h-1v2.1l.1.8.1.1.3.1.5-.1.1 1c-.3.2-.6.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5V667h-.7v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M223.7 667.6l-1.2-.2c.1-.5.4-.9.7-1.1.3-.2.8-.4 1.5-.4l1.4.2.6.6.2 1.2v2.6l.3.7h-1.4a5 5 0 0 1-.1-.5l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1l.2-.9.6-.5 1.1-.3 1.4-.3v-.2l-.2-.5c-.2-.2-.4-.2-.8-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5-.1.7-.3.1 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M233 671.2h-1.3v-.7a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.8 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M234.4 665.3v-1.2h1.3v1.2h-1.3Zm0 6V666h1.3v5.2h-1.3Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M236.8 668.6c0-.5.1-1 .4-1.4.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.8-1.9.8a3 3 0 0 1-1.3-.4c-.5-.2-.8-.5-1-1-.3-.3-.4-.8-.4-1.4Zm1.4 0c0 .6.2 1 .4 1.2.2.3.5.4 1 .4.3 0 .6-.1.8-.4.2-.3.4-.6.4-1.2 0-.5-.2-.9-.4-1.1-.2-.3-.5-.5-.9-.5s-.7.2-.9.5c-.2.2-.4.6-.4 1.1Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M248 671.2h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4V666h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2l.5.4.3.6v4.1Z"
            data-ubhnchn="118"
            fill="#000"
          />
          <path
            d="M226 619.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="119"
            fill="#fff"
          />
          <path
            d="M217.6 628.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="119"
            fill="#fff"
          />
          <path
            d="M157.3 635.9v-7.2h2.3l1.7.1c.5.1.8.4 1 .7.4.4.5.9.5 1.4 0 .5 0 .8-.2 1.1a2 2 0 0 1-.7.7 2 2 0 0 1-.7.4h-2.5v2.8h-1.4Zm1.5-6v2h1.9l.4-.4c.2-.2.2-.3.2-.6 0-.2 0-.4-.2-.6a1 1 0 0 0-.6-.3h-1.7Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M164 630v-1.3h1.4v1.3H164Zm0 5.9v-5.2h1.4v5.2H164Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M171.3 632.2l-1.4.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.3.5.4.8.4l.6-.2.4-.8 1.3.2c0 .6-.4 1.1-.8 1.4-.4.3-.9.5-1.6.5-.7 0-1.3-.2-1.8-.7-.4-.5-.6-1.2-.6-2 0-.9.2-1.5.6-2 .5-.5 1.1-.7 1.9-.7.6 0 1.1.1 1.5.4.3.3.6.7.8 1.2Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M173.7 628.7v2.7a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4h-1.3v-2.7l-.1-1-.3-.3a.9.9 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M181.4 634.2l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M184 635.9v-7.2h1.4v7.2H184Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M186.3 634.4l1.4-.2c0 .3.1.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.2-.6-.6-.6-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.5.3c.4.3.6.6.8 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3v.2c.2.1.6.3 1.4.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M192.3 635.9v-7.2h1.4v2.6a2 2 0 0 1 3 0c.4.4.6 1 .6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5l-.7-.7v.8h-1.3Zm1.3-2.7c0 .5.1 1 .3 1.2.2.3.6.5 1 .5.2 0 .5-.1.7-.4.2-.2.3-.6.3-1.2s0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M201.5 634.2l1.3.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M205.3 635.9H204v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.4.2-.2 0-.3.3-.4.5V636Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M207.8 636.2l1.5.2.2.4.6.1.8-.1c.2-.1.3-.2.3-.4V635c-.3.6-.8.9-1.5.9a2 2 0 0 1-1.6-1 3 3 0 0 1-.5-1.6c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1.2.3 1.6.8v-.7h1.3v4.6c0 .7 0 1.1-.2 1.4-.1.3-.2.6-.4.7l-.8.4-1.1.2c-.9 0-1.5-.2-1.9-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.2-3c0 .5.1 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="120"
            fill="#000"
          />
          <path
            d="M190.7 584.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="121"
            fill="#fff"
          />
          <path
            d="M182.2 593a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="121"
            fill="#fff"
          />
          <path
            d="m139.4 598.2 1.4-.1c0 .4.2.8.5 1 .3.2.6.3 1 .3.5 0 .9 0 1.1-.3.2-.2.4-.4.4-.7 0-.1 0-.3-.2-.4l-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.3-2.5l.8-.7c.4-.2 1-.3 1.5-.3.9 0 1.5.2 2 .6.4.4.7 1 .7 1.6h-1.4c-.1-.3-.2-.6-.4-.7-.2-.2-.6-.3-1-.3s-.7.1-1 .3l-.2.4.2.5 1.4.5a7 7 0 0 1 1.5.5c.4.1.6.4.8.7.2.3.3.7.3 1.1a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.3c-.9 0-1.6-.3-2-.7-.5-.4-.8-1-1-1.8Z"
            data-ubhnchn="122"
            fill="#000"
          />
          <path
            d="M148.8 595.3v1.1h-1V599.3l.2.1.2.1.6-.1.1 1c-.3.2-.7.2-1 .2h-.7a1 1 0 0 1-.5-.4l-.2-.5v-3.3h-.6v-1h.6v-1l1.4-.9v1.8h.9Z"
            data-ubhnchn="122"
            fill="#000"
          />
          <path
            d="M151 600.5h-1.3v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2-.6-.3-.5.2-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="122"
            fill="#000"
          />
          <path
            d="M156.6 598.9l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.6-1.8c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="122"
            fill="#000"
          />
          <path
            d="M158.7 599l1.4-.2c0 .3.2.5.4.6.1.2.4.2.7.2l.8-.1.2-.4-.1-.3-.5-.2a7.4 7.4 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.2.1 1.6.4.3.2.6.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.3 0-.6 0-.8.2l-.1.2.1.3 1.3.4c.7.1 1.3.3 1.5.6.3.2.5.6.5 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="122"
            fill="#000"
          />
          <path
            d="M164.5 597.9c0-.5 0-1 .3-1.4.2-.4.5-.7 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.5-.7 2-.6.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .5 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4-.3 0-.6.2-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="122"
            fill="#000"
          />
          <path
            d="M171.9 600.5l-1.7-5.2h1.4l1 3.4.8-3.4h1.3l.9 3.4 1-3.4h1.3l-1.6 5.2H175l-1-3.3-.8 3.3h-1.3Z"
            data-ubhnchn="122"
            fill="#000"
          />
          <path
            d="m89.3 547.7 1.5-.1c0 .5.2.8.5 1 .2.2.6.4 1 .4.5 0 .8-.1 1-.3.3-.2.4-.5.4-.7l-.1-.5-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.5 1-.7l1.3-.2c1 0 1.6.2 2 .6.5.4.7.9.8 1.5l-1.5.1c0-.4-.2-.6-.4-.8-.2-.2-.5-.2-.9-.2s-.7 0-1 .2l-.2.5c0 .1 0 .3.2.4.2.2.6.3 1.3.5a7 7 0 0 1 1.6.5l.8.7c.2.3.3.7.3 1.2a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.6-.6-.5-.9-1-1-1.9Z"
            data-ubhnchn="124"
            fill="#000"
          />
          <path
            d="M96.3 544.9h1.3v.7a2 2 0 0 1 1.6-.9 2 2 0 0 1 1.6.8c.4.4.6 1 .6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.5l-.8-.6v2.6h-1.4V545Zm1.4 2.5c0 .6.1 1 .3 1.3.3.2.6.4.9.4.3 0 .6-.1.8-.4.2-.3.3-.7.3-1.3 0-.5-.1-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="124"
            fill="#000"
          />
          <path
            d="M103.5 546.4l-1.2-.2c.1-.5.4-.9.7-1 .3-.3.9-.5 1.5-.5s1 .1 1.4.3c.3.1.5.3.6.5l.2 1.2v2.6l.3.8h-1.4a5 5 0 0 1-.1-.6l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1l.2-.8.6-.6 1.1-.3 1.4-.3v-.2l-.2-.5-.8-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.2c-.2 0-.5 0-.9.2-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5 0 .7-.2.1-.2.3-.3.3-.5V547.6Z"
            data-ubhnchn="124"
            fill="#000"
          />
          <path
            d="M112.8 550h-1.4v-3.6a.8.8 0 0 0-.8-.6 1 1 0 0 0-.7.2 1 1 0 0 0-.4.5V550.1H108v-5.2h1.2v.7a2 2 0 0 1 1.7-.9l.9.2.5.4.3.6v4.2Z"
            data-ubhnchn="124"
            fill="#000"
          />
          <path
            d="M119 550h-1.3v-.7a2 2 0 0 1-1.7.9 2 2 0 0 1-1.5-.8 3 3 0 0 1-.6-2c0-.8.2-1.5.6-2a2 2 0 0 1 3 0V543h1.4v7.2Zm-3.7-2.7c0 .6 0 1 .2 1.2a1 1 0 0 0 1.7.2c.3-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="124"
            fill="#000"
          />
          <path
            d="M121.3 546.4l-1.2-.2c.1-.5.4-.9.7-1 .3-.3.8-.5 1.5-.5.6 0 1 .1 1.4.3.3.1.5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.8h-1.4a5 5 0 0 1-.1-.6l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1l.2-.8.6-.6 1.1-.3 1.4-.3v-.2l-.2-.5-.8-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.9 1.2c-.2 0-.5 0-.9.2-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .4 0 .7-.2l.3-.5V547.6Z"
            data-ubhnchn="124"
            fill="#000"
          />
          <path
            d="M129.3 550v-.7a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.2V545h1.4V548.6l.3.4.6.1a1 1 0 0 0 1-.6v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="124"
            fill="#000"
          />
          <path
            d="M154.7 548.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="125"
            fill="#0066AD"
          />
          <path
            d="M95 553.2h9a7 7 0 1 1 0 14h-9a7 7 0 1 1 0-14Z"
            data-ubhnchn="125"
            fill="#0066AD"
          />
          <path
            d="m90.6 561.8 1.7-.2c0 .6.3 1 .6 1.3.3.3.7.4 1.2.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5 0-.2-.3-.3-.6-.4l-1.4-.4c-.9-.2-1.5-.5-2-.8a2.2 2.2 0 0 1-.3-3c.2-.4.6-.6 1-.8.5-.2 1-.3 1.7-.3 1.1 0 2 .2 2.5.7.5.4.8 1 .8 1.9h-1.7c0-.4-.3-.7-.5-1l-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5l.3.6 1.6.5c.8.2 1.5.4 1.9.7l1 .8c.1.4.3.9.3 1.4a2.5 2.5 0 0 1-1.6 2.3c-.5.2-1.1.3-1.9.3-1 0-1.9-.2-2.5-.7-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="126"
            fill="#fff"
          />
          <path
            d="M102 562.3l1.5-.2c0 .4.2.7.4 1 .3.2.5.3.9.3.3 0 .6-.1.8-.4.2-.3.4-.6.4-1 0-.5-.2-.8-.4-1a1 1 0 0 0-.8-.4l-.7.1.1-1.3c.5 0 .8-.1 1-.3.3-.2.4-.5.4-.8 0-.3 0-.5-.3-.7a1 1 0 0 0-.6-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9l-1.5-.3c0-.5.2-1 .4-1.2.3-.3.5-.6 1-.8a3 3 0 0 1 1.2-.2c.8 0 1.5.2 2 .7.4.5.6 1 .6 1.5 0 .7-.5 1.3-1.3 1.8a2 2 0 0 1 1.6 2c0 .8-.2 1.4-.8 2-.5.5-1.2.7-2 .7s-1.5-.2-2-.6c-.5-.5-.8-1-.9-1.8Z"
            data-ubhnchn="126"
            fill="#fff"
          />
          <path
            d="m115.3 561.8 1.7-.2c.1.6.3 1 .6 1.3.3.3.8.4 1.3.4s1-.1 1.3-.4c.2-.2.4-.5.4-.8 0-.2 0-.4-.2-.5-.1-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.3-.4.6-.6 1-.8.5-.2 1.1-.3 1.8-.3 1 0 1.9.2 2.4.7.5.4.8 1 .9 1.9h-1.8c0-.4-.2-.7-.4-1l-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s0 .4.3.6l1.5.5c.9.2 1.5.4 2 .7l.9.8c.2.4.3.9.3 1.4a2.5 2.5 0 0 1-1.6 2.3c-.5.2-1 .3-1.8.3-1.1 0-2-.2-2.5-.7-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="128"
            fill="#fff"
          />
          <path
            d="M126.8 562.6l1.6-.2c0 .4.1.6.3.8l.6.2c.4 0 .7-.2.9-.5.2-.3.4-1 .5-2a2 2 0 0 1-1.6.8c-.7 0-1.3-.3-1.7-.8-.5-.5-.8-1.2-.8-2 0-.9.3-1.6.8-2.1.5-.6 1.2-.8 2-.8s1.6.3 2.1 1c.6.7.9 1.8.9 3.3 0 1.6-.3 2.7-1 3.4-.5.7-1.3 1-2.2 1-.7 0-1.2-.1-1.6-.5-.4-.3-.7-.9-.8-1.6Zm3.7-3.6c0-.5-.1-1-.4-1.2a1 1 0 0 0-.8-.5 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2 0 .5.1 1 .4 1.2.2.3.5.4.8.4.3 0 .6-.1.8-.4.2-.2.3-.6.3-1Z"
            data-ubhnchn="128"
            fill="#fff"
          />
          <path
            d="m701 558.9 1.7-.2c0 .6.3 1 .6 1.3.3.2.7.4 1.3.4.5 0 1-.1 1.2-.4.3-.2.5-.5.5-.8l-.2-.5c-.1-.2-.4-.3-.7-.4l-1.3-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.2-.4.6-.6 1-.8.5-.2 1-.3 1.7-.3 1.1 0 2 .2 2.5.7.5.4.8 1 .8 1.9H706c0-.4-.2-.7-.5-1l-1-.2a2 2 0 0 0-1.3.3l-.2.5c0 .2 0 .4.2.6l1.6.5 1.9.6 1 1c.2.3.3.7.3 1.3a2.5 2.5 0 0 1-1.6 2.3c-.5.2-1.1.3-1.9.3-1 0-1.9-.2-2.5-.7-.5-.5-.9-1.2-1-2.2Z"
            data-ubhnchn="131"
            fill="#AD5937"
          />
          <path
            d="M715.6 561.7V560h-3.5v-1.5l3.8-5.4h1.3v5.4h1.1v1.5h-1v1.7h-1.7Zm0-3.2v-3l-2 3h2Z"
            data-ubhnchn="131"
            fill="#AD5937"
          />
          <path
            d="M723.3 561.7h-1.6v-6.2c-.6.6-1.3 1-2.2 1.2v-1.5c.5-.1 1-.4 1.4-.8a3 3 0 0 0 1-1.3h1.4v8.6Z"
            data-ubhnchn="131"
            fill="#AD5937"
          />
          <path
            d="m666.7 520.9 1.7-.2c0 .6.3 1 .6 1.2.3.3.7.4 1.3.4.5 0 1 0 1.2-.3.3-.3.4-.5.4-.8l-.1-.6-.7-.3-1.4-.4c-.9-.2-1.5-.5-2-.9a2.2 2.2 0 0 1-.3-3c.2-.3.6-.6 1-.8.5-.2 1-.3 1.7-.3 1.1 0 2 .2 2.5.7.5.5.8 1.1.8 2h-1.7c0-.5-.2-.8-.5-1-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.3.4c-.2 0-.2.3-.2.5s0 .4.2.5c.2.2.8.4 1.6.6l1.9.6c.4.2.7.5 1 .9.2.3.3.8.3 1.3a2.5 2.5 0 0 1-1.6 2.4c-.5.2-1.1.3-1.9.3-1 0-1.9-.3-2.5-.8-.6-.5-.9-1.2-1-2.1Z"
            data-ubhnchn="132"
            fill="#CB6418"
          />
          <path
            d="M681.3 523.7v-1.8h-3.5v-1.4l3.7-5.5h1.4v5.5h1.1v1.4h-1v1.8h-1.7Zm0-3.2v-3l-2 3h2Z"
            data-ubhnchn="132"
            fill="#CB6418"
          />
          <path
            d="M690.4 522.1v1.6h-5.8c0-.6.2-1.2.5-1.7.4-.5 1-1.2 1.9-2l1.4-1.5c.2-.3.3-.6.3-1 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3-.4 0-.6 0-.8.3-.2.2-.4.6-.4 1l-1.6-.1c0-1 .4-1.6.9-2a3 3 0 0 1 2-.6c.8 0 1.4.3 2 .7.4.5.7 1 .7 1.7 0 .4-.1.8-.3 1.1-.1.4-.3.7-.6 1.1l-1 1.1a16.6 16.6 0 0 0-1.4 1.4h3.3Z"
            data-ubhnchn="132"
            fill="#CB6418"
          />
          <path
            d="m459.4 839.5-.2-1.7a2 2 0 0 0 1.3-.6c.2-.3.4-.7.4-1.3 0-.5-.1-1-.4-1.2a1 1 0 0 0-.8-.4l-.5.1-.4.7-.4 1.3c-.2 1-.5 1.6-.8 2a2.2 2.2 0 0 1-3 .4c-.4-.2-.7-.6-.9-1l-.2-1.7c0-1.1.2-2 .7-2.5.4-.5 1-.8 1.9-.8v1.7c-.4 0-.7.2-1 .5l-.2 1c0 .6 0 1 .3 1.3l.5.2c.2 0 .4 0 .6-.2l.5-1.6.6-1.9c.3-.4.5-.7 1-1 .3-.2.7-.3 1.3-.3a2.5 2.5 0 0 1 2.3 1.6c.2.5.3 1.1.3 1.9 0 1-.2 1.9-.7 2.5-.5.5-1.2.9-2.2 1Z"
            data-ubhnchn="133"
            fill="#AD5937"
          />
          <path
            d="M462.2 824.9h-1.7v3.5H459l-5.4-3.8v-1.3h5.4v-1.1h1.5v1h1.7v1.7Zm-3.2 0h-3l3 2v-2Z"
            data-ubhnchn="133"
            fill="#AD5937"
          />
          <path
            d="M462.2 817.2v1.6H456c.5.6 1 1.4 1.2 2.2h-1.5c-.1-.5-.4-1-.8-1.4a3 3 0 0 0-1.3-1v-1.4h8.6Z"
            data-ubhnchn="133"
            fill="#AD5937"
          />
          <path
            d="m459.4 874.8-.2-1.7a2 2 0 0 0 1.3-.6c.3-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4c-.2 0-.4 0-.5.2-.2 0-.3.3-.4.6l-.4 1.4c-.2.9-.5 1.6-.8 2a2.2 2.2 0 0 1-3 .3c-.3-.2-.6-.6-.8-1-.2-.5-.3-1-.3-1.7 0-1 .2-2 .7-2.5.4-.5 1-.8 1.9-.8v1.7l-1 .5-.2 1.1c0 .5.1.9.3 1.2.1.2.3.3.5.3l.6-.3.5-1.6c.2-.8.4-1.5.7-1.9l.8-1c.4-.1.9-.3 1.4-.3a2.5 2.5 0 0 1 2.3 1.6c.2.5.4 1.1.4 1.9 0 1-.3 1.9-.8 2.5-.5.6-1.2 1-2.2 1Z"
            data-ubhnchn="134"
            fill="#CB6418"
          />
          <path
            d="M462.2 860.2h-1.7v3.5H459l-5.4-3.7v-1.4h5.4v-1h1.5v1h1.7v1.6Zm-3.2 0h-3l3 2v-2Z"
            data-ubhnchn="134"
            fill="#CB6418"
          />
          <path
            d="M460.7 851.2h1.5v5.7a4 4 0 0 1-1.6-.5 11 11 0 0 1-2.1-1.9l-1.4-1.3c-.3-.3-.7-.4-1-.4-.4 0-.7.1-.9.3-.2.2-.3.5-.3.8 0 .4.1.7.4.9.2.2.5.3 1 .3l-.2 1.6c-.9 0-1.5-.4-2-.9a3 3 0 0 1-.5-2c0-.8.2-1.4.7-1.9.4-.5 1-.7 1.7-.7.4 0 .7 0 1 .2l1.2.6 1 1.1a17.7 17.7 0 0 0 1.5 1.3v-3.2Z"
            data-ubhnchn="134"
            fill="#CB6418"
          />
          <path
            d="m799.3 983.2 1.7-.2c0 .6.3 1 .6 1.3.3.2.7.4 1.2.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5 0-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.3-.4.7-.7 1.1-.9.5-.2 1-.3 1.7-.3 1 0 1.9.3 2.4.8.6.4.9 1 .9 1.9h-1.7l-.5-1-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.7.4 1.6.6l1.9.6c.4.3.7.5.9 1 .2.3.3.7.3 1.3a2.5 2.5 0 0 1-1.5 2.3c-.5.2-1.1.3-1.9.3-1 0-2-.2-2.5-.7-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="139"
            fill="#AD5937"
          />
          <path
            d="M814 986v-1.7h-3.6v-1.5l3.7-5.4h1.4v5.4h1v1.5h-1v1.7h-1.6Zm0-3.2v-3l-2 3h2Z"
            data-ubhnchn="139"
            fill="#AD5937"
          />
          <path
            d="M821.6 986h-1.7v-6.2c-.6.5-1.3 1-2.1 1.2v-1.5c.4-.1.9-.4 1.4-.8a3 3 0 0 0 1-1.3h1.4v8.6Z"
            data-ubhnchn="139"
            fill="#AD5937"
          />
          <path
            d="m834.8 983.2 1.7-.2c0 .6.3 1 .6 1.3.3.2.7.4 1.2.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5 0-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.3-.4.7-.7 1.1-.9.5-.2 1-.3 1.7-.3 1 0 1.9.3 2.4.8.6.4.9 1 .9 1.9h-1.7l-.5-1-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.7.4 1.6.6l1.9.6c.4.3.7.5.9 1 .2.3.3.7.3 1.3a2.5 2.5 0 0 1-1.5 2.3c-.5.2-1.1.3-1.9.3-1 0-2-.2-2.5-.7-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="140"
            fill="#CB6418"
          />
          <path
            d="M849.4 986v-1.7H846v-1.5l3.7-5.4h1.4v5.4h1v1.5h-1v1.7h-1.6Zm0-3.2v-3l-2 3h2Z"
            data-ubhnchn="140"
            fill="#CB6418"
          />
          <path
            d="M858.4 984.5v1.5h-5.7c0-.6.2-1.1.5-1.7.3-.5 1-1.2 1.9-2l1.3-1.4c.3-.4.4-.7.4-1 0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.8-.3-.4 0-.7.1-.9.3-.2.2-.3.6-.3 1l-1.7-.1c.1-.9.4-1.6 1-2a3 3 0 0 1 1.9-.5c.8 0 1.5.2 2 .6.5.5.7 1 .7 1.8 0 .3 0 .7-.2 1l-.6 1.2-1.1 1a17.6 17.6 0 0 0-1.3 1.5h3.2Z"
            data-ubhnchn="140"
            fill="#CB6418"
          />
          <path
            d="m1069.9 696.5.1 1.7c-.5.1-1 .3-1.2.6-.3.4-.4.8-.4 1.3 0 .6.1 1 .3 1.3.3.2.6.4.9.4.2 0 .4 0 .5-.2l.4-.6.3-1.4c.3-1 .5-1.6.9-2a2.2 2.2 0 0 1 3-.4l.8 1c.2.6.3 1.1.3 1.8 0 1-.2 1.9-.7 2.4-.5.6-1.1.8-1.9.9v-1.8c.4 0 .7-.2.9-.4.2-.3.3-.6.3-1.1a2 2 0 0 0-.3-1.2.6.6 0 0 0-.6-.3c-.2 0-.3 0-.5.3-.2.2-.4.7-.6 1.6l-.6 1.8-.8 1c-.4.2-.9.3-1.4.3a2.5 2.5 0 0 1-2.4-1.6c-.2-.5-.3-1-.3-1.8 0-1.1.3-2 .8-2.5.5-.6 1.2-1 2.2-1Z"
            data-ubhnchn="145"
            fill="#AD5937"
          />
          <path
            d="M1067 711.2h1.8v-3.5h1.4l5.5 3.7v1.4h-5.5v1h-1.4v-1h-1.7v-1.6Zm3.3 0h2.9l-3-2v2Z"
            data-ubhnchn="145"
            fill="#AD5937"
          />
          <path
            d="M1067 718.8v-1.6h6.3c-.6-.6-1-1.3-1.3-2.1h1.5l.8 1.4c.4.5.9.8 1.4 1v1.3h-8.6Z"
            data-ubhnchn="145"
            fill="#AD5937"
          />
          <path
            d="m1069.8 661.2.2 1.7a2 2 0 0 0-1.2.6c-.3.3-.4.7-.4 1.3 0 .5 0 1 .3 1.2.3.3.5.5.8.5l.6-.2.4-.6.3-1.4c.3-1 .5-1.6.9-2a2.2 2.2 0 0 1 3-.4c.3.2.6.6.8 1 .2.5.3 1.1.3 1.8 0 1-.2 1.8-.7 2.4-.5.5-1.1.8-1.9.9v-1.8c.4 0 .7-.2.9-.5.2-.2.3-.6.3-1a2 2 0 0 0-.4-1.2.6.6 0 0 0-.5-.3c-.2 0-.4 0-.5.2l-.6 1.6a8 8 0 0 1-.6 1.9c-.2.4-.5.7-.9 1-.3.2-.8.3-1.3.3a2.5 2.5 0 0 1-2.4-1.6c-.2-.5-.3-1.1-.3-1.8 0-1.1.3-2 .8-2.5.5-.6 1.2-1 2.1-1Z"
            data-ubhnchn="146"
            fill="#CB6418"
          />
          <path
            d="M1067 675.9h1.8v-3.6h1.4l5.5 3.8v1.4h-5.5v1h-1.4v-1h-1.7v-1.6Zm3.2 0h3l-3-2v2Z"
            data-ubhnchn="146"
            fill="#CB6418"
          />
          <path
            d="M1068.6 684.9h-1.5V679a4 4 0 0 1 1.6.6c.5.3 1.2.9 2 1.8l1.5 1.4c.3.2.6.3 1 .3.3 0 .6 0 .8-.3.2-.2.3-.4.3-.8a1 1 0 0 0-.3-.8c-.2-.2-.5-.3-1-.4l.1-1.6c1 0 1.6.4 2 1 .4.4.6 1 .6 1.8 0 .9-.2 1.6-.7 2-.5.5-1 .8-1.7.8a3 3 0 0 1-1.1-.2l-1.1-.7-1.1-1a21 21 0 0 0-1.4-1.4v3.3Z"
            data-ubhnchn="146"
            fill="#CB6418"
          />
          <path
            d="M1195.5 800.4v-7.2h3c.8 0 1.3 0 1.7.2.3.1.6.3.8.7.2.3.3.7.3 1.1 0 .5-.1 1-.5 1.3-.3.4-.8.6-1.4.7l.8.6.8 1.2.9 1.4h-1.7l-1-1.6c-.5-.6-.7-1-.9-1a1 1 0 0 0-.4-.4h-1v3h-1.5Zm1.4-4.2h2.4l.4-.4.1-.5c0-.2 0-.4-.2-.6a.9.9 0 0 0-.5-.3h-2.2v1.8Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1206 800.4v-.8a2 2 0 0 1-.7.6 2 2 0 0 1-1.9 0c-.3-.1-.5-.3-.6-.6a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7l.4.4.5.1c.2 0 .4 0 .6-.2.2 0 .3-.3.4-.4v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1208.7 795.2h1.2v.7a2 2 0 0 1 1.7-.8c.3 0 .6 0 .8.2.3.1.5.3.6.6.3-.3.5-.5.8-.6.2-.2.5-.2.8-.2.4 0 .7 0 1 .2l.6.7.1 1v3.4h-1.4v-3l-.1-1a.6.6 0 0 0-.6-.3 1 1 0 0 0-.9.7l-.1 1v2.6h-1.4v-3.9l-.3-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.2 1v2.6h-1.3v-5.2Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1217.6 795.2h1.2v.7a2 2 0 0 1 1.6-.8c.4 0 .7 0 1 .2l.5.6c.2-.3.5-.5.8-.6.2-.2.5-.2.8-.2.4 0 .7 0 1 .2.2.1.4.4.5.7l.2 1v3.4h-1.4v-3l-.1-1c-.2-.2-.3-.3-.6-.3a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-3.9l-.3-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5v3.6h-1.4v-5.2Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1229.6 798.7l1.3.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1l.8.2.5-.1c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1232.1 800.4v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1234.4 798.9l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.3 7.3 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1 .4-.4 1-.5 1.7-.5s1.2 0 1.6.3c.3.2.5.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2c-.3 0-.6 0-.8.2l-.1.3.1.2 1.3.4 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1240.4 800.4v-7.2h1.4v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.5.6c.5.5.7 1.2.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-3.1-.1v.8h-1.3Zm1.4-2.8c0 .6 0 1 .2 1.2.3.4.6.6 1 .6.3 0 .5-.1.7-.4.3-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1250 800.4v-.8a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1v-3.3h1.4v3.7l.4.4.5.1c.2 0 .4 0 .6-.2.2 0 .3-.3.4-.4v-3.6h1.5v5.2h-1.3Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1254 800.4h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1256.5 800.7l1.5.2.2.4.6.1c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.4.6-.9.9-1.5.9a2 2 0 0 1-1.7-1 3 3 0 0 1-.4-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.5-.6 2 2 0 0 1 1.6.8v-.7h1.3v4.6l-.1 1.4-.5.7a2 2 0 0 1-.7.4l-1.1.2c-1 0-1.5-.2-2-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.2-3c0 .5 0 1 .3 1.2.2.2.5.3.8.3.3 0 .6 0 .8-.3.3-.3.4-.7.4-1.2s-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="148"
            fill="#000"
          />
          <path
            d="M1224.6 815h4.2l.7.3.5.6c.2.3.3.5.3.8a1.7 1.7 0 0 1-1 1.6c.4.1.7.3 1 .6.2.4.3.7.3 1.1a2.1 2.1 0 0 1-.8 1.7 2 2 0 0 1-1 .3l-1.7.1h-2.5v-7.2Zm1.5 1.1v1.7h2l.6-.3.2-.6-.2-.5a.8.8 0 0 0-.6-.2h-2Zm0 2.9v1.9h2.3c.2 0 .4-.2.5-.3.2-.2.2-.4.2-.6l-.1-.6a1 1 0 0 0-.5-.3 5 5 0 0 0-1.3-.1h-1.1Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1234.8 820.4l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4l-.2.9h2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1239.8 817v1h-1v2.8l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.3l-.2-.6V818h-.7v-1h.7v-1.1l1.3-.8v1.8h1Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1242 822.1h-1.3v-5.2h1.3v.7l.5-.6.6-.2c.4 0 .7 0 1 .3l-.5 1.1-.6-.2c-.2 0-.4 0-.5.2-.2 0-.3.3-.3.6-.1.2-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1244.6 816.2V815h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1250.4 820.4l1.4.3c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1253 822.1v-7.2h1.3v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.5.7c.5.4.7 1.1.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-3.1-.2v.8h-1.3Zm1.3-2.7c0 .5 0 1 .2 1.2.3.3.6.5 1 .5.3 0 .5-.1.8-.4.2-.2.3-.6.3-1.2s-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1258.6 820.6l1.4-.2c0 .3.2.5.3.6.2.2.5.2.8.2.3 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.5 7.5 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2s.2-.8.5-1.1c.4-.4 1-.5 1.7-.5s1.2.1 1.5.3c.4.3.6.6.8 1l-1.3.3c0-.2-.2-.3-.3-.5l-.7-.1-.8.1-.1.3.1.3 1.3.3c.7.2 1.2.4 1.5.7.3.2.4.5.4 1s-.2.9-.6 1.2c-.3.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1264.6 822.1v-7.2h1.4v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.5.7c.4.4.7 1.1.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-3.1-.2v.8h-1.3Zm1.4-2.7c0 .5 0 1 .2 1.2.2.3.6.5 1 .5.3 0 .5-.1.7-.4.2-.2.3-.6.3-1.2s0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1271.8 818.5l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.2.5.3.6.6l.2 1.2v2.6l.3.7h-1.4a3.4 3.4 0 0 1-.2-.6c-.2.3-.5.4-.7.5-.3.2-.6.2-.9.2-.5 0-1-.1-1.2-.4-.4-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8l.6-.5c.3-.1.6-.3 1-.3l1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3-.2.4c0 .2 0 .4.2.5.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V819.6Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1277.7 815v2.6a2 2 0 0 1 2.4-.6c.3 0 .5.2.6.4l.3.6v4.1h-1.3v-2.7l-.1-1c0-.2-.1-.3-.3-.4a1.1 1.1 0 0 0-1.1 0 1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1287.2 822.1h-1.4v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.2l-.6.2a1 1 0 0 0-.4.6l-.1 1.1v2.4h-1.4v-5.2h1.3v.8a2.1 2.1 0 0 1 2.5-.7c.3 0 .5.2.6.4l.3.6V822Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1290 815v2.6a2 2 0 0 1 1.5-.8c.3 0 .6 0 .9.2.2 0 .4.2.5.4l.3.6v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.2l-.6.2a1 1 0 0 0-.4.5v3.6h-1.5v-7.2h1.4Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1294.3 819.4c0-.4.2-.9.4-1.3s.5-.7 1-1c.3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1a3 3 0 0 1-.4-1.5Zm1.5.1c0 .5 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4-.3 0-.6.2-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1300.2 817h.7v-.5c0-.4 0-.7.2-1 0-.2.3-.3.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.1-.5.1v.9h1v1h-1v4.2h-1.5V818h-.7v-1Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1224.6 832.1v-7.2h3l1.7.2c.4.2.7.4.9.7.2.3.3.7.3 1.1 0 .6-.2 1-.5 1.4-.3.3-.8.5-1.4.6l.8.6.8 1.2.9 1.4h-1.8l-1-1.6-.8-1c-.1-.2-.3-.3-.4-.3h-1v2.9h-1.5Zm1.5-4.1h1l1.3-.1c.2 0 .3-.2.4-.3l.2-.6c0-.2 0-.4-.2-.5a.9.9 0 0 0-.5-.3h-2.2v1.8Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1235.3 832.1v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-2 0l-.5-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7l.3.4.5.2c.3 0 .5 0 .7-.2.1-.1.3-.3.3-.5l.2-1.4v-2.2h1.3v5.2h-1.3Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1237.8 827h1.3v.6a2 2 0 0 1 1.6-.8c.4 0 .6 0 .9.2l.6.6.7-.6.9-.2c.4 0 .7 0 1 .2l.5.7.2 1v3.4h-1.4v-3l-.1-1-.6-.3a1 1 0 0 0-1 .7v3.6h-1.4v-3.8l-.3-.3a.7.7 0 0 0-.4-.2 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5v3.6h-1.5v-5.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1246.7 827h1.3v.6a2 2 0 0 1 1.6-.8c.4 0 .6 0 .9.2l.6.6.7-.6.9-.2c.3 0 .7 0 1 .2l.5.7.2 1v3.4h-1.4v-3c0-.5 0-.8-.2-1a.7.7 0 0 0-.5-.3 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5v3.6h-1.4v-2.8l-.1-1c0-.2-.1-.3-.2-.3a.7.7 0 0 0-.4-.2 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5v3.6h-1.5v-5.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1258.7 830.4l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.7.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1261.3 832.1v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1263.6 830.6l1.4-.2c0 .3.1.5.3.6.2.2.4.2.8.2.3 0 .6 0 .8-.2l.1-.3v-.3l-.5-.2a7.5 7.5 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2s.2-.8.5-1.1c.4-.4.9-.5 1.7-.5.7 0 1.2.1 1.5.3.4.3.6.6.8 1l-1.3.3-.4-.5-.6-.1-.8.1-.2.3c0 .1 0 .2.2.3l1.3.3c.7.2 1.2.4 1.5.7.3.2.4.5.4 1s-.2.9-.6 1.2c-.4.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1269.6 832.1v-7.2h1.3v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.6.7c.4.4.6 1.1.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-3.2-.2v.8h-1.2Zm1.3-2.7c0 .5.1 1 .3 1.2.2.3.5.5 1 .5.2 0 .5-.1.7-.4.2-.2.3-.6.3-1.2s0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1279.2 832.1v-.8a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1v-3.3h1.4v3.7l.3.4.5.2a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1283.2 832.1h-1.4v-5.2h1.3v.7l.6-.6.5-.2c.4 0 .7 0 1 .3l-.5 1.1-.6-.2c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1285.6 832.4l1.6.2c0 .2 0 .3.2.4l.6.2.8-.2.3-.4V831.3c-.4.5-1 .8-1.5.8a2 2 0 0 1-1.7-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.6.8v-.7h1.3v4.7c0 .6 0 1-.2 1.3 0 .3-.2.6-.4.8a2 2 0 0 1-.7.4l-1.2.1c-.8 0-1.5-.1-1.8-.5-.4-.3-.6-.6-.6-1.1v-.2Zm1.2-3c0 .5.2 1 .4 1.2.2.3.4.4.8.4.3 0 .6-.1.8-.4.2-.3.4-.7.4-1.2s-.2-.9-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="150"
            fill="#000"
          />
          <path
            d="M1252 857v-7.2h1.5v3.1l2.9-3.1h2l-2.8 2.8 2.9 4.3h-1.9l-2-3.3-1.1 1.2v2.1h-1.5Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1260.3 853.3l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.2 1.2v2.6l.2.7h-1.3a3.1 3.1 0 0 1-.2-.5l-.8.5-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.4-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.3 0 .5-.1.7-.3.2 0 .3-.2.3-.4l.1-.7v-.3Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1266.1 857h-1.4v-5.3h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.4 1.2c-.3-.2-.5-.2-.7-.2l-.5.1-.3.6v3.3Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1268.7 857v-7.2h1.4v7.1h-1.4Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1271 855.4l1.4-.2c0 .3.1.5.3.6.2.2.4.2.8.2l.8-.1.2-.4c0-.1 0-.2-.2-.3l-.4-.2a7.5 7.5 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.4-.3 1-.5 1.6-.5.8 0 1.3.1 1.6.4.4.2.6.5.8 1l-1.4.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.6 0-.8.2l-.1.2v.3l1.4.4c.7.1 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1278.4 849.8v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-2.7l-.1-1c0-.2-.1-.3-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.1h1.4Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1282.8 854.3c0-.5.1-1 .4-1.4.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3.8 0 1.4.3 2 .8.4.5.7 1.1.7 2 0 .7-.3 1.4-.8 1.9s-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.3-.3-.4-.8-.4-1.4Zm1.4 0c0 .5.1 1 .4 1.2.2.3.5.4.9.4s.7-.1.9-.4c.2-.3.4-.7.4-1.2s-.2-.9-.4-1.1c-.2-.3-.5-.5-.9-.5s-.7.2-.9.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1290.6 857h-1.4v-5.3h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6.1.8.3l-.4 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1292.7 855.4l1.3-.2c0 .3.2.5.4.6.2.2.4.2.7.2l.8-.1c.2-.1.2-.3.2-.4v-.3l-.5-.2a7.5 7.5 0 0 1-2.1-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.7 0-.8.2l-.2.2c0 .1 0 .2.2.3l1.2.4c.8.1 1.3.3 1.6.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1301 851.7v1.1h-.8V855.7l.1.1.2.1.6-.1.1 1c-.3.2-.7.2-1 .2h-.8a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.7v-1l1.4-.9v1.8h.9Z"
            data-ubhnchn="152"
            fill="#000"
          />
          <path
            d="M1195.5 744.8v-7.1h1.4l2.9 4.8v-4.8h1.3v7.1h-1.4l-2.9-4.6v4.6h-1.3Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1202.3 742.2c0-.5.2-1 .4-1.3.2-.5.5-.8 1-1a2.6 2.6 0 0 1 4 2.4c0 .7-.3 1.4-.8 1.9s-1.1.8-1.9.8a3 3 0 0 1-1.3-.4c-.5-.2-.8-.5-1-.9a3 3 0 0 1-.4-1.5Zm1.5 0c0 .6 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6 0 .8-.4.3-.2.4-.6.4-1.2 0-.5-.1-.9-.4-1.1-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.2-.3.6-.3 1.2Zm-.5-3.5v-1.1h1.2v1.1h-1.2Zm2.1 0v-1.1h1.2v1.1h-1.2Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1208.8 744.8v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1216.3 744.8h-1.3v-.7a2 2 0 0 1-3.1.2 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 1.5-.8c.6 0 1.1.3 1.5.8v-2.6h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2.2.4.5.6.9.6.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1222.4 744.8h-1.4v-3.6c-.1-.3-.2-.4-.4-.5a.8.8 0 0 0-.4-.1 1 1 0 0 0-.7.2 1 1 0 0 0-.4.5v3.5h-1.4v-5.1h1.2v.7a2 2 0 0 1 1.7-.9l.9.2.5.4.3.6v4.1Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1226.8 743.2l1.4.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3.9.2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1230.7 744.8h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.5-.2c.3 0 .7.1 1 .3l-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.1.1-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1233.2 739.7h1.3v.7a1.9 1.9 0 0 1 1.6-.9 2 2 0 0 1 1.5.8c.4.4.7 1 .7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.3.5l-.7-.6v2.6h-1.4v-7.1Zm1.3 2.5c0 .5.2 1 .4 1.3.2.2.5.4.8.4.4 0 .6-.2.8-.4.3-.3.4-.7.4-1.3 0-.5-.2-1-.4-1.2a1 1 0 0 0-1.6 0c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1239.3 744.8v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1243.2 741.2l-1.3-.2c.1-.5.4-.9.7-1 .4-.3.9-.5 1.6-.5.6 0 1 .1 1.3.3l.7.5.1 1.2v2.6l.3.7h-1.3l-.2-.4v-.1l-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.8-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.3.5Zm1.8 1.2c-.2 0-.5 0-.8.2l-.8.2c-.2.1-.3.3-.3.5l.2.5.6.2c.2 0 .5 0 .7-.2.2-.2.3-.3.3-.5V742.4Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1250 739.7v1h-.9V743.7l.2.2h.2l.6-.1v1c-.2.2-.6.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.2h-.7v-1.1h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1250.5 744.8v-1l2-2.3.6-.7h-2.4v-1.1h4.3v1l-2 2.2-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="154"
            fill="#000"
          />
          <path
            d="M1181.3 726.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="155"
            fill="#fff"
          />
          <path
            d="M1218 707a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="155"
            fill="#fff"
          />
          <path
            d="M1223.8 716.6v-7.1h1.4v5.9h3.6v1.2h-5Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1229.8 710.7v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1237.1 713l-1.3.2a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.4.9.4l.6-.3c.2-.1.3-.4.3-.7l1.4.2c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.2-1.5.7-2 .4-.5 1-.7 1.8-.7.7 0 1.2.1 1.5.4.4.2.7.7.8 1.2Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1239.5 709.4v2.6a2 2 0 0 1 2.5-.6l.6.5.2.6v4h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1246.7 711.4v1h-1V715.4l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7v-1.1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1250.6 715l1.4.1c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.3-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.5c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.2.6-.2 1h2Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1258 716.6h-1.5v-3.7l-.3-.5a.8.8 0 0 0-.5 0 1 1 0 0 0-.7.1 1 1 0 0 0-.3.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1259.3 716.6v-7.2h1.3v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.6.6c.4.5.6 1.2.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-3.2-.1v.8h-1.3Zm1.3-2.7c0 .5.1.9.3 1.1.2.4.5.6 1 .6.2 0 .5-.1.7-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1268.4 715l1.4.1c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.1.4.3.8.3l.5-.2c.1-.1.3-.3.3-.6Zm.1-1.5c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2.1Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1272.3 716.6h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1a1 1 0 0 0-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1274.8 716.9l1.5.2.2.4.6.1.8-.1.3-.4v-1.4c-.4.6-.9.9-1.5.9-.7 0-1.3-.3-1.7-1a3 3 0 0 1-.4-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.5-.6c.7 0 1.2.2 1.6.8v-.7h1.3v4.6l-.1 1.4-.5.7c-.1.2-.4.3-.7.4l-1.1.2c-1 0-1.5-.2-1.9-.5-.4-.3-.6-.7-.6-1.1v-.2Zm1.2-3c0 .5 0 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="156"
            fill="#000"
          />
          <path
            d="M1209.6 698.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="157"
            fill="#fff"
          />
          <path
            d="M1246.3 678.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="157"
            fill="#fff"
          />
          <path
            d="M1252 688.3V681h5v1.2h-3.5v1.7h3v1.2h-3v3h-1.5Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1259.4 688.3h-1.3V683h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.4.2-.2 0-.3.3-.4.5V688.3Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1262 682.4V681h1.4v1.3h-1.4Zm0 5.9V683h1.4v5.2h-1.4Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1267.8 686.6l1.4.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1275.1 688.3h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .3-1.6.7-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1277.8 688.3h-1.4V683h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2a1 1 0 0 0-.3.5l-.1 1.8v1.6Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1280.3 682.4V681h1.4v1.3h-1.4Zm0 5.9V683h1.4v5.2h-1.4Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1287.6 684.6l-1.3.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.3.3.5.4.9.4.2 0 .4 0 .6-.2l.4-.8 1.3.2c-.1.6-.4 1.1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.3-.2-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.3-1.5.7-2 .5-.5 1-.7 1.8-.7.7 0 1.2.1 1.5.4.4.3.7.7.8 1.2Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1290 681.1v2.7a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1l.1 1v3h-1.4v-3.7l-.3-.3a.9.9 0 0 0-.5-.2c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4V681h1.3Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1294.3 686.8l1.4-.2c0 .3.2.5.3.6l.8.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.5 7.5 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.3.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1299.8 683h.7v-.3c0-.4 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.1h-.5l-.1.6v.4h1v1h-1v4.2h-1.4v-4.1h-.7V683Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1306.7 686.6l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-1 .4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1309.3 688.3V681h1.4v7.2h-1.4Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1316.8 688.3h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .3-1.6.7-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1321.2 686.6l1.3.3c-.1.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1326.2 684.7c0-.7.1-1.3.3-1.8l.7-1c.3-.3.6-.5 1-.6a4 4 0 0 1 1.5-.3c1 0 1.9.3 2.5 1 .6.6 1 1.5 1 2.7 0 1.2-.4 2-1 2.7-.6.7-1.5 1-2.5 1s-2-.3-2.5-1c-.7-.6-1-1.5-1-2.7Zm1.5 0c0 .8.2 1.4.6 1.8.3.5.8.7 1.4.7.6 0 1-.2 1.4-.7.4-.4.6-1 .6-1.8s-.2-1.5-.6-1.9c-.3-.4-.8-.6-1.4-.6-.6 0-1 .2-1.5.6-.3.5-.5 1-.5 1.9Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1333.8 686.8l1.4-.2c0 .3.1.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.2 7.2 0 0 1-2.1-.7c-.4-.2-.6-.6-.6-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4a3 3 0 0 1 1.5.3c.4.3.6.6.8 1l-1.3.3c0-.2-.2-.4-.4-.5l-.6-.1-.8.1-.1.3v.2c.2.1.6.3 1.4.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1342.2 683v1.2h-1v2l.1.8.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.1-.5-.1-1v-2.2h-.6V683h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="158"
            fill="#000"
          />
          <path
            d="M1237.9 670.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="159"
            fill="#fff"
          />
          <path
            d="M1322.7 894a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="159"
            fill="#fff"
          />
          <path
            d="m1299.1 904.7-1.7-7.1h1.5l1 5 1.4-5h1.7l1.2 5 1.1-5h1.5l-1.8 7.1h-1.5l-1.4-5.3-1.4 5.3h-1.6Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1311 904.7v-.7a2 2 0 0 1-1.8.9 2 2 0 0 1-1-.3c-.2-.1-.4-.3-.5-.6a3 3 0 0 1-.2-1.2v-3.2h1.3v2.3l.1 1.4c0 .2.2.3.3.4l.5.1c.2 0 .5 0 .6-.2l.4-.4.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1315 897.6v2.6a2 2 0 0 1 1.6-.8l.8.2a1.4 1.4 0 0 1 .9 1v4.1h-1.3V902l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.5h-1.4v-7.1h1.4Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1319.7 904.7v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1323.9 897.6v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.4V901c0-.2-.2-.3-.3-.4a1.1 1.1 0 0 0-1.1 0 1 1 0 0 0-.4.6l-.1 1v2.5h-1.4v-7.1h1.4Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1331.6 903.1l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4.9.2.2.4.3.8.3l.5-.1c.1-.2.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2.1Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1334.2 898.9v-1.3h1.4v1.3h-1.4Zm0 5.8v-5.1h1.4v5.1h-1.4Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1341.7 904.7h-1.3v-.7a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.8 3 3 0 0 1-.6-2c0-.8.2-1.5.6-2a2 2 0 0 1 1.5-.7c.6 0 1.1.3 1.5.8v-2.6h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2.2.4.5.6 1 .6l.7-.4c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.4.6-.4 1.1Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1346 903.1l1.4.2c-.1.5-.4 1-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3.9.2.2.5.3.8.3l.5-.1.4-.6Zm.2-1.4c0-.4-.2-.7-.4-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="160"
            fill="#000"
          />
          <path
            d="M1362.7 894a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="161"
            fill="#fff"
          />
          <path
            d="M1402.7 894a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="161"
            fill="#fff"
          />
          <path
            d="M1386.1 904.7v-7.1h1.5v2.8h2.8v-2.8h1.5v7.1h-1.5v-3h-2.8v3h-1.5Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1393.3 898.9v-1.3h1.4v1.3h-1.4Zm0 5.8v-5.1h1.4v5.1h-1.4Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1397.4 904.7h-1.3v-5.1h1.2v.7l.6-.7.6-.2 1 .3-.5 1.2-.7-.2-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1399.5 903.3l1.4-.2c0 .2.2.4.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.3 7.3 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.2 1.6.4c.3.2.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2c-.3 0-.6 0-.8.2l-.1.3.1.2 1.3.4c.7.2 1.3.4 1.5.6.3.2.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1410.1 901.1l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.2.5.3.8.3.3 0 .5 0 .7-.2.1-.1.3-.4.3-.7l1.4.2c-.2.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.4-.7-1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7a2.3 2.3 0 0 1 2.3 1.7Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1412.5 897.6v2.6a2 2 0 0 1 1.6-.8l.9.2a1.4 1.4 0 0 1 .8 1v4.1h-1.3V901l-.4-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5h-1.5v-7.1h1.4Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1417.1 902.8v-1.3h2.7v1.3h-2.7Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1388 915l1.5.3c0 .2 0 .3.2.4l.6.1c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.4.6-.9.8-1.5.8-.7 0-1.3-.2-1.7-.8a3 3 0 0 1-.4-1.8c0-.8.2-1.5.6-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.9v-.7h1.3v4.6l-.1 1.4-.5.7c-.1.2-.4.3-.7.4l-1.2.2c-.8 0-1.5-.2-1.8-.5-.4-.3-.6-.7-.6-1.1v-.2Zm1.2-3c0 .6 0 1 .3 1.3.2.2.5.3.8.3.3 0 .6 0 .8-.4.3-.2.4-.6.4-1.1 0-.6-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1395.2 911.1l-1.2-.2c.1-.5.3-.9.7-1 .3-.3.8-.5 1.5-.5.6 0 1 .1 1.4.3.3.1.5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.8h-1.4l-.1-.5v-.1l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2c0-.2 0-.4-.2-.5 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.2-.8.2c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.5.2c.3 0 .5 0 .8-.2l.3-.5V912.3Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1401 914.7h-1.3v-5.1h1.3v.7l.5-.7.6-.2c.4 0 .7.1 1 .3l-.5 1.2-.6-.2-.5.1c-.2.1-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="162"
            fill="#000"
          />
          <path
            d="M1406 909.6v1h-1v2.1l.1.8.1.2h.3l.5-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.2-.5v-3.2h-.6v-1.1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="163"
            fill="#000"
          />
          <path
            d="M1410 913.1l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3.9.2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="163"
            fill="#000"
          />
          <path
            d="M1417.3 914.7h-1.4v-2.6l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9l.8.2.6.4.3.6v4.1Z"
            data-ubhnchn="163"
            fill="#000"
          />
          <path
            d="M1442.7 894a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="164"
            fill="#fff"
          />
          <path
            d="M1522.7 894a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="164"
            fill="#fff"
          />
          <path
            d="m1500.8 873.5-1.7-7.2h1.4l1.1 5 1.3-5h1.8l1.2 5 1.1-5h1.5l-1.8 7.2h-1.5l-1.4-5.4-1.5 5.4h-1.5Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1509.2 867.6v-1.3h1.3v1.3h-1.3Zm0 5.9v-5.2h1.3v5.2h-1.3Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1512 873.5v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1516 866.3v2.7a2 2 0 0 1 1.7-.8c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.3.6v4h-1.3v-2.7l-.1-1-.3-.3a1 1 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1523.8 871.8l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1526.4 873.5v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1529 868.3h1.3v.7a2 2 0 0 1 1.7-.8c.3 0 .6 0 .8.2.3.1.5.3.6.6.3-.3.5-.5.8-.6.2-.2.5-.2.8-.2.4 0 .7 0 1 .2l.6.7.1 1v3.4h-1.4v-3l-.1-1c-.1-.2-.3-.3-.6-.3a1 1 0 0 0-.9.7l-.1 1v2.6h-1.4v-3.9l-.3-.3a.7.7 0 0 0-.4 0 1 1 0 0 0-.6.1 1 1 0 0 0-.3.5l-.1 1v2.6h-1.4v-5.2Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1537.6 872l1.4-.2c0 .3.1.5.3.6l.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7.2 7.2 0 0 1-2.1-.7c-.4-.2-.6-.6-.6-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4a3 3 0 0 1 1.5.3c.4.3.6.6.8 1l-1.3.3-.4-.5-.6-.1-.8.1-.2.3s0 .2.2.2c.1.1.5.3 1.3.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1543.5 871.6v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1510 876.3v2.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .8.2a1.4 1.4 0 0 1 .9 1v4h-1.3v-2.7l-.1-1-.3-.3a.9.9 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1515.8 879.9l-1.3-.2c.2-.5.4-1 .7-1.2.4-.2.9-.3 1.6-.3.6 0 1 0 1.3.2.3.1.5.3.7.6l.1 1.2v2.6l.3.7h-1.3l-.2-.4v-.2l-.8.5-.8.2c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.1-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1a9 9 0 0 1-.8.3l-.8.2c-.2.2-.3.3-.3.5s.1.4.3.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2.2-.1.3-.3.3-.5l.1-.6v-.3Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1520.2 883.8l1.5.2.2.4.6.1.8-.1c.2-.1.3-.2.3-.4v-1.4c-.3.6-.8.9-1.5.9a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7 2 2 0 0 1 1.6.8v-.7h1.3v4.7l-.2 1.3c-.1.3-.2.6-.4.7a2 2 0 0 1-.8.4 4 4 0 0 1-1.1.2c-.9 0-1.5-.2-1.9-.5-.4-.3-.5-.6-.5-1.1v-.2Zm1.2-3c0 .5.1 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1529.4 881.8l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2.1Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1536.7 883.5h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.3.5l-.2 1.2v2.4h-1.3v-5.2h1.2v.8a2.1 2.1 0 0 1 2.6-.8l.5.5c.2.1.3.3.3.5l.1 1v3.2Z"
            data-ubhnchn="165"
            fill="#000"
          />
          <path
            d="M1458.3 904.7v-7.1h3.1c.8 0 1.3 0 1.7.2.3.1.6.3.8.7.2.3.3.7.3 1.1 0 .5-.2 1-.5 1.3-.3.4-.8.6-1.4.7l.8.6.8 1.2.9 1.3h-1.7l-1-1.5-.8-1-.5-.4h-1v3h-1.5Zm1.5-4h1c.8 0 1.2-.1 1.4-.2l.4-.3.1-.5c0-.3 0-.4-.2-.6a.9.9 0 0 0-.5-.3h-2.2v1.8Z"
            data-ubhnchn="167"
            fill="#000"
          />
          <path
            d="M1466.6 901.1l-1.3-.2c.2-.5.4-.9.8-1 .3-.3.8-.5 1.5-.5.6 0 1 .1 1.4.3.3.1.5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.8h-1.4l-.1-.5v-.1l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.8c.1-.3.3-.5.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.2-.8.2-.8.2-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V902.3Z"
            data-ubhnchn="167"
            fill="#000"
          />
          <path
            d="M1472.5 897.6v2.6a2 2 0 0 1 1.6-.8l.8.2a1.4 1.4 0 0 1 .9 1v4.1h-1.3V902l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.5h-1.4v-7.1h1.4Z"
            data-ubhnchn="167"
            fill="#000"
          />
          <path
            d="M1482 904.7h-1.4v-2.6l-.1-1c0-.2-.2-.4-.3-.5a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9l.8.2.6.4.3.6v4.1Z"
            data-ubhnchn="167"
            fill="#000"
          />
          <path
            d="M1482.9 903.3l1.3-.2.4.6.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7.3 7.3 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.4-.3.9-.5 1.7-.5.7 0 1.2.2 1.5.4.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.2c-.4 0-.6 0-.8.2-.1 0-.2.1-.2.3l.2.2 1.3.4 1.5.6c.3.2.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5-.8 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="167"
            fill="#000"
          />
          <path
            d="M1493.7 904.7h-1.3v-.7l-.7.6a2 2 0 0 1-2.5-.5 3 3 0 0 1-.6-2c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1 .3 1.5.8v-2.6h1.4v7.1Zm-3.7-2.7c0 .6 0 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="167"
            fill="#000"
          />
          <path
            d="M1494.7 902c0-.4.1-.8.4-1.2.2-.5.5-.8 1-1a2.6 2.6 0 0 1 4 2.4c0 .7-.3 1.4-.8 1.9s-1.1.8-1.9.8a3 3 0 0 1-1.4-.4c-.4-.2-.7-.5-1-.9a3 3 0 0 1-.3-1.5Zm1.4.2c0 .5.2.9.4 1.1.2.3.5.4.9.4.3 0 .6 0 .9-.4.2-.2.4-.6.4-1.2 0-.5-.2-.9-.4-1.1-.3-.3-.5-.4-1-.4-.3 0-.6.1-.8.4-.3.2-.4.6-.4 1.2Z"
            data-ubhnchn="167"
            fill="#000"
          />
          <path
            d="M1502.5 904.7h-1.4v-5.1h1.3v.7l.5-.7.6-.2c.4 0 .7.1 1 .3l-.5 1.2-.6-.2-.5.1a1 1 0 0 0-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="167"
            fill="#000"
          />
          <path
            d="M1504.4 899.6h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2l1.1.1-.1 1h-1.1l-.1.6v.4h1v1h-1v4.1h-1.4v-4h-.8v-1.1Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1340.9 883.5v-7.2h1.4v3.2l3-3.2h1.9l-2.7 2.8 2.8 4.4h-1.8l-2-3.4-1.2 1.2v2.2h-1.4Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1347.8 880.8c0-.4 0-.9.3-1.3.2-.4.5-.7 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.2-.4-.3-.9-.3-1.5Zm1.4.1c0 .5 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4-.3 0-.6.2-.9.4-.2.3-.3.7-.3 1.2Zm-.5-3.5v-1.2h1.2v1.2h-1.2Zm2.1 0v-1.2h1.2v1.2h-1.2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1354.1 878.3h1.3v.8a1.9 1.9 0 0 1 1.6-.9 2 2 0 0 1 1.6.7c.4.5.6 1.1.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.5c-.3 0-.5-.3-.8-.5v2.6h-1.4v-7.2Zm1.4 2.5c0 .6.1 1 .3 1.3.3.3.6.4.9.4.3 0 .6-.1.8-.4.2-.2.3-.6.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1363.3 881.8l1.4.3c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1370.6 883.5h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.5-.2l-.6.2a1 1 0 0 0-.4.6v3.5h-1.5v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4.2.1.3.3.3.6V883.5Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1372 877.6v-1.3h1.3v1.3h-1.3Zm0 5.9v-5.2h1.3v5.2h-1.3Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1379.3 879.8l-1.4.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.3.3-.4.7-.4 1.2 0 .6.2 1 .4 1.3.2.3.5.4.8.4.3 0 .5 0 .6-.2l.4-.8 1.3.2c-.1.7-.4 1.1-.8 1.4-.4.4-.9.5-1.6.5-.7 0-1.3-.2-1.8-.7-.4-.5-.7-1.1-.7-2 0-.8.3-1.5.7-2 .5-.5 1-.7 1.9-.7.6 0 1 .1 1.5.4.3.3.6.7.8 1.2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1380.3 883.5v-7.2h1.3v3.8l1.6-1.8h1.7l-1.7 2 1.9 3.2h-1.5l-1.3-2.3-.7.6v1.7h-1.3Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1417 873.5v-7.2h5v1.2h-3.5v1.7h3v1.2h-3v3h-1.5Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1424.4 873.5h-1.3v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.4.2-.2 0-.3.3-.4.5V873.5Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1427 867.6v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1432.8 871.8l1.4.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.6.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1440.1 873.5h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7c-.5-.5-.7-1.2-.7-2 0-1 .3-1.6.7-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1442.8 873.5h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2a1 1 0 0 0-.3.5l-.1 1.8v1.6Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1445.3 867.6v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1452.6 869.8l-1.3.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1.2s.1 1 .3 1.3c.3.3.5.4.9.4.2 0 .4 0 .6-.2l.4-.8 1.3.2c-.1.6-.4 1.1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.3-.2-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.3-1.5.7-2 .5-.5 1-.7 1.8-.7.7 0 1.2.1 1.5.4.4.3.7.7.8 1.2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1455 866.3v2.7a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1l.1 1v3h-1.4v-3.7l-.3-.3a.9.9 0 0 0-.5-.2c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1459.3 872l1.4-.2c0 .3.2.5.3.6l.8.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.5 7.5 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3l.7 1-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.7-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1465.2 871.6v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1429.5 876.3v2.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .8.2a1.4 1.4 0 0 1 .9 1v4h-1.3v-2.7l-.1-1-.3-.3a.9.9 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1435.3 879.9l-1.3-.2c.2-.5.4-1 .7-1.2.4-.2.9-.3 1.6-.3.6 0 1 0 1.3.2.3.1.5.3.7.6l.1 1.2v2.6l.3.7h-1.3l-.2-.4v-.2l-.8.5-.8.2c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.1-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1a9 9 0 0 1-.8.3l-.8.2c-.2.2-.3.3-.3.5s.1.4.3.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2.2-.1.3-.3.3-.5l.1-.6v-.3Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1439.7 883.8l1.5.2.2.4.6.1.8-.1c.2-.1.3-.2.3-.4v-1.4c-.3.6-.8.9-1.5.9a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7 2 2 0 0 1 1.6.8v-.7h1.3v4.7l-.2 1.3a1.6 1.6 0 0 1-1.2 1.1l-1.1.2c-.9 0-1.5-.2-1.9-.5-.4-.3-.5-.6-.5-1.1v-.2Zm1.2-3c0 .5.1 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1449 881.8l1.3.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="M1456.2 883.5h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.3.5l-.2 1.2v2.4h-1.3v-5.2h1.2v.8a2.1 2.1 0 0 1 2.6-.8l.5.5c.2.1.3.3.3.5l.1 1v3.2Z"
            data-ubhnchn="168"
            fill="#000"
          />
          <path
            d="m1343.8 660-1.7-7.1h1.5l1.1 5 1.3-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.5l-1.5-5.4-1.4 5.4h-1.6Z"
            data-ubhnchn="170"
            fill="#000"
          />
          <path
            d="M1355.7 660v-.7a2 2 0 0 1-1.8.9 2 2 0 0 1-.9-.3c-.3-.1-.5-.3-.6-.6a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7l.4.4.5.1c.2 0 .4 0 .6-.2.2 0 .3-.2.4-.4v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="170"
            fill="#000"
          />
          <path
            d="M1359.7 652.9v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 1 1v4.1h-1.4v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.7a1 1 0 0 0-.3.6l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="170"
            fill="#000"
          />
          <path
            d="M1364.5 660V653h1.3v7.2h-1.3Z"
            data-ubhnchn="170"
            fill="#000"
          />
          <path
            d="M1370.3 658.4l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.6-1.7c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="170"
            fill="#000"
          />
          <path
            d="M1375.2 654.9v1h-1V658.9l.2.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5V656h-.7v-1.1h.7v-1l1.4-.9v1.9h.9Z"
            data-ubhnchn="170"
            fill="#000"
          />
          <path
            d="M1377.2 656.5l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5-.1-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V657.6Z"
            data-ubhnchn="170"
            fill="#000"
          />
          <path
            d="M1381.7 660V653h1.4v7.2h-1.4Z"
            data-ubhnchn="170"
            fill="#000"
          />
          <path
            d="M1362.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="171"
            fill="#fff"
          />
          <path
            d="M1402.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="171"
            fill="#fff"
          />
          <path
            d="M1419.8 660V653h2.1l1.3 4.9 1.3-4.9h2.2v7.2h-1.4v-5.7l-1.4 5.7h-1.4l-1.4-5.7v5.7h-1.3Z"
            data-ubhnchn="172"
            fill="#000"
          />
          <path
            d="M1429.1 656.5l-1.2-.3c.1-.5.4-.8.7-1 .3-.3.9-.4 1.5-.4s1 0 1.4.2c.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.3l-.2-.4v-.2l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.2-.5-.6-.5-1l.2-.8.6-.6 1.1-.3 1.4-.3v-.2l-.2-.5-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1-.9.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .4.2.5l.6.2c.2 0 .4 0 .7-.2.1-.2.3-.3.3-.5V657.6Z"
            data-ubhnchn="172"
            fill="#000"
          />
          <path
            d="M1435 652.9v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.7a1 1 0 0 0-.3.6l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="172"
            fill="#000"
          />
          <path
            d="M1439.8 660V653h1.4v7.2h-1.4Z"
            data-ubhnchn="172"
            fill="#000"
          />
          <path
            d="M1442 658.6l1.4-.2.4.6.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7.5 7.5 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.1 0-.5.1-.9.5-1.2.3-.3.9-.4 1.6-.4.8 0 1.3 0 1.6.3.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.2-.8.2-.2.3s0 .2.2.2l1.3.4 1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.6-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="172"
            fill="#000"
          />
          <path
            d="M1452.9 660h-1.3v-.7l-.8.7a2 2 0 0 1-2.3-.5 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1 .2 1.5.7v-2.6h1.4v7.2Zm-3.7-2.6c0 .5 0 1 .2 1.2a1 1 0 0 0 1.8 0c.2-.2.3-.6.3-1.1 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="172"
            fill="#000"
          />
          <path
            d="M1454 657.4c0-.5 0-.9.3-1.3.2-.5.5-.8.9-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 1.9s-1.1.8-2 .8a3 3 0 0 1-1.3-.3l-1-1c-.2-.4-.3-1-.3-1.5Zm1.3 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="172"
            fill="#000"
          />
          <path
            d="M1461.7 660h-1.4V655h1.3v.7l.6-.7.5-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2-.5.1c-.1.2-.3.3-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="172"
            fill="#000"
          />
          <path
            d="M1442.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="174"
            fill="#fff"
          />
          <path
            d="M1522.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="174"
            fill="#fff"
          />
          <path
            d="M1482.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="174"
            fill="#fff"
          />
          <path
            d="M1492.8 660V653h1.5v2.8h2.8V653h1.4v7.2h-1.4v-3.2h-2.8v3.2h-1.5Z"
            data-ubhnchn="175"
            fill="#000"
          />
          <path
            d="M1499.7 657.4c0-.5.1-.9.3-1.3.3-.5.6-.8 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 1.9s-1.1.8-2 .8a3 3 0 0 1-1.3-.3l-1-1c-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="175"
            fill="#000"
          />
          <path
            d="M1506.1 654.9h1.3v.7a2 2 0 0 1 1.6-.8 2 2 0 0 1 1.5.7c.5.4.7 1.1.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.3.5l-.7-.6v2.6h-1.4V655Zm1.4 2.5c0 .6 0 1 .3 1.3.2.3.5.4.9.4.3 0 .5-.1.8-.4.2-.2.3-.7.3-1.3 0-.5-.1-.9-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="175"
            fill="#000"
          />
          <path
            d="M1512.2 654.9h1.3v.7a1.9 1.9 0 0 1 1.6-.8 2 2 0 0 1 1.6.7c.4.4.6 1.1.6 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.3.5l-.7-.6v2.6h-1.4V655Zm1.4 2.5c0 .6 0 1 .3 1.3.3.3.5.4.9.4.3 0 .5-.1.8-.4.2-.2.3-.7.3-1.3 0-.5-.1-.9-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="175"
            fill="#000"
          />
          <path
            d="M1521.4 658.4l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="175"
            fill="#000"
          />
          <path
            d="M1523.8 660.4l1.6.2c0 .2 0 .3.2.4l.6.1.8-.1.3-.4v-1.4c-.4.6-1 .9-1.5.9-.7 0-1.3-.3-1.7-1a3 3 0 0 1-.5-1.7c0-.8.2-1.5.7-2a2 2 0 0 1 1.5-.6c.7 0 1.2.2 1.6.8v-.7h1.3v4.6c0 .6 0 1.1-.2 1.4 0 .3-.2.5-.4.7l-.7.4-1.2.2c-.9 0-1.5-.2-1.8-.5-.4-.3-.6-.7-.6-1.1v-.2Zm1.2-3c0 .5.1 1 .3 1.2.3.2.5.4.8.4.4 0 .7-.2.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="175"
            fill="#000"
          />
          <path
            d="M1531 656.5l-1.2-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2l.7.5.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm2 1a8 8 0 0 1-1 .3l-.7.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V657.6Z"
            data-ubhnchn="175"
            fill="#000"
          />
          <path
            d="M1537 660h-1.4V655h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2-.4.1-.4.6V660.1Z"
            data-ubhnchn="175"
            fill="#000"
          />
          <path
            d="M1541.9 654.9v1h-1V658.9l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5V656h-.7v-1.1h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1545.8 658.4l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.6-1.7c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1553.1 660h-1.3v-2.6l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1302.8 631.7h4.1c.3 0 .5.2.8.3l.5.6.2.9a1.7 1.7 0 0 1-1 1.5c.4.1.8.4 1 .7.3.3.4.6.4 1a2.2 2.2 0 0 1-.9 1.7 2 2 0 0 1-1 .4h-4.1v-7.1Zm1.4 1.1v1.7h2c.3 0 .5-.1.6-.3l.2-.5c0-.3 0-.4-.2-.6a.8.8 0 0 0-.5-.2h-2.1Zm0 2.9v1.9h2.4c.2 0 .3-.2.5-.3l.2-.6c0-.2 0-.4-.2-.6a1 1 0 0 0-.4-.3 5 5 0 0 0-1.3-.1h-1.2Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1310 633v-1.3h1.4v1.2h-1.4Zm0 5.8v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1315.8 637.2l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1317.8 637.3l1.4-.2c0 .3.2.5.4.6.2.2.4.2.7.2.4 0 .7 0 .8-.2.2 0 .2-.2.2-.3v-.3l-.5-.2a7.3 7.3 0 0 1-2.1-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.3.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4-.2-.2-.4-.2-.7-.2l-.7.1-.2.3c0 .1 0 .2.2.3l1.2.4c.8.1 1.3.3 1.6.6.2.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.9-1.2Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1328.7 638.8h-1.3v-.8a2 2 0 0 1-1.7 1 2 2 0 0 1-1.5-.8 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.5 0 1 .2 1.5.7v-2.5h1.4v7.1Zm-3.7-2.7c0 .6 0 1 .2 1.2a1 1 0 0 0 1.8.1c.2-.2.3-.6.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1329.7 636.1c0-.4.1-.9.3-1.3l1-1c.4-.2.8-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .8-.2 1.4-.7 2-.5.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.5-1-1a3 3 0 0 1-.3-1.5Zm1.4.1c0 .5.1 1 .4 1.2.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.3.3-.7.3-1.2s0-.9-.3-1.2c-.3-.2-.6-.4-1-.4-.3 0-.6.2-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1337.4 638.8h-1.3v-5.2h1.2v.8l.6-.7.6-.2c.3 0 .6 0 1 .3l-.5 1.2c-.2-.2-.5-.3-.7-.3-.1 0-.3 0-.4.2a1 1 0 0 0-.4.6v3.3Z"
            data-ubhnchn="176"
            fill="#000"
          />
          <path
            d="M1575.6 660V653h4.9v1.2h-3.5v1.7h3v1.2h-3v3h-1.4Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1583 660h-1.4V655h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1588.6 658.4l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1595.9 660h-1.3v-.7a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1 .2 1.5.7v-2.6h1.4v7.2Zm-3.7-2.6c0 .5.1 1 .3 1.2.2.3.5.5.9.5.3 0 .6-.1.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1600.2 658.4l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.5.4-.8 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1604.1 660h-1.3V655h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2-.5.1a1 1 0 0 0-.3.6V660.1Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1606.2 658.6l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.2 7.2 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4a3 3 0 0 1 1.6.3c.3.2.5.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2-.8.2-.1.3.1.2 1.3.4 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1617 660h-1.3v-.7a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.7-2.6c0 .5.1 1 .3 1.2.2.3.5.5 1 .5.2 0 .5-.1.7-.4.2-.3.4-.7.4-1.2 0-.6-.2-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4l-.4 1.2Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1618 657.4c0-.5.2-.9.4-1.3.2-.5.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.2 1.4-.8 1.9-.5.5-1 .8-1.9.8a3 3 0 0 1-1.3-.3c-.5-.3-.8-.6-1-1a3 3 0 0 1-.3-1.5Zm1.5 0c0 .6 0 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1625.8 660h-1.4V655h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1a1 1 0 0 0-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1627.8 654.9h.7v-.4c0-.5 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.2c-.2 0-.4 0-.5.2v.9h1v1h-1v4.2h-1.5V656h-.7v-1.1Z"
            data-ubhnchn="179"
            fill="#000"
          />
          <path
            d="M1602.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="180"
            fill="#fff"
          />
          <path
            d="M1682.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="180"
            fill="#fff"
          />
          <path
            d="M1642.7 649.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="180"
            fill="#fff"
          />
          <path
            d="m1656.9 657.7 1.4-.1c0 .5.2.8.5 1 .3.3.6.4 1 .4.5 0 .9-.1 1-.3.3-.2.4-.5.4-.7l-.1-.5-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7c-.5-.4-.7-.9-.7-1.4a1.9 1.9 0 0 1 1.2-1.7c.4-.2.9-.3 1.4-.3 1 0 1.6.2 2 .6.5.4.8.9.8 1.5l-1.5.1c0-.4-.2-.6-.4-.8l-.9-.2c-.4 0-.7 0-1 .2l-.2.5c0 .1 0 .3.2.4.2.2.6.3 1.3.5.8.2 1.3.3 1.6.5.4.2.6.4.8.7.2.3.3.7.3 1.2a2 2 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.6-.5-.5-.8-1-1-1.9Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1666.3 654.9v1h-1V658.9l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5V656h-.7v-1.1h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1668.6 660h-1.4V655h1.3v.7l.5-.7.6-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1c-.2.2-.3.3-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1672.2 656.5l-1.3-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.1 1.3v2.6l.3.7h-1.3l-.1-.4-.1-.2-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1a8 8 0 0 1-.8.3l-.8.2c-.2.1-.3.3-.3.5s.1.4.3.5l.5.2c.3 0 .5 0 .7-.2.2-.2.3-.3.3-.5V657.6Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1680.1 660v-.7a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1v-3.3h1.3v2.4l.1 1.3c0 .2.2.3.3.4l.5.1c.2 0 .4 0 .6-.2.2 0 .3-.2.4-.4l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1682.3 658.6l1.4-.2c0 .2.2.4.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.5 7.5 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.2.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2-.8.2-.1.3.1.2 1.3.4c.7.2 1.3.4 1.5.6.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1688.3 660V653h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2 0 .8-.2 1.5-.7 2a2 2 0 0 1-3.1-.2v.8h-1.3Zm1.4-2.6c0 .5 0 .9.2 1.1.3.4.6.6 1 .6.3 0 .5-.1.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1697.5 658.4l1.4.2c-.2.5-.5 1-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1701.4 660h-1.4V655h1.3v.7l.6-.7.5-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1703.8 660.4l1.6.2c0 .2 0 .3.2.4l.6.1.8-.1.3-.4v-1.4c-.4.6-1 .9-1.5.9a2 2 0 0 1-1.7-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.7-2a2 2 0 0 1 1.5-.6 2 2 0 0 1 1.6.8v-.7h1.3v4.6c0 .6 0 1.1-.2 1.4a1.6 1.6 0 0 1-1.1 1.1l-1.2.2c-.9 0-1.5-.2-1.8-.5-.4-.3-.6-.7-.6-1.1v-.2Zm1.2-3c0 .5.2 1 .4 1.2.2.2.4.4.8.4.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.2Z"
            data-ubhnchn="181"
            fill="#000"
          />
          <path
            d="M1587 888v-7.2h5.3v1.3h-3.9v1.5h3.6v1.3h-3.6v1.9h4v1.2h-5.4Z"
            data-ubhnchn="184"
            fill="#000"
          />
          <path
            d="M1595 888h-1.4v-5.2h1.2v.8l.6-.7.6-.2c.3 0 .6 0 1 .3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2a1 1 0 0 0-.3.6c-.1.2-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="184"
            fill="#000"
          />
          <path
            d="M1597.5 888v-7.2h1.3v3.8l1.6-1.8h1.7l-1.7 2 1.9 3.2h-1.5l-1.3-2.3-.7.6v1.7h-1.3Z"
            data-ubhnchn="184"
            fill="#000"
          />
          <path
            d="M1607.8 888h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1 1 1 0 0 0-.7.1 1 1 0 0 0-.4.6v3.5h-1.4v-5.2h1.2v.8a2.1 2.1 0 0 1 2.6-.7 1.3 1.3 0 0 1 .8 1l.1.9v3.2Z"
            data-ubhnchn="184"
            fill="#000"
          />
          <path
            d="M1612.2 886.4l1.4.2c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="184"
            fill="#000"
          />
          <path
            d="M1616 888h-1.3v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2a1 1 0 0 0-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="184"
            fill="#000"
          />
          <path
            d="m1589.8 899.4 1.6-.2c.1.6.3 1 .6 1.3.4.3.8.4 1.3.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5-.1-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8-.5-.5-.7-1-.7-1.7 0-.5 0-.9.3-1.3s.6-.6 1.1-.8c.5-.2 1-.3 1.7-.3 1 0 1.9.2 2.4.7.6.4.9 1 .9 1.9h-1.8c0-.4-.2-.7-.4-1l-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5l.3.6 1.6.5c.8.2 1.4.4 1.8.7.4.2.8.5 1 .8.2.4.3.9.3 1.4 0 .5-.1 1-.4 1.4-.3.4-.6.7-1.1 1l-2 .2c-1 0-1.8-.2-2.4-.7-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="186"
            fill="#fff"
          />
          <path
            d="M1601.1 900l1.6-.3c0 .4.2.7.4 1 .2.2.5.3.8.3.4 0 .6-.1.9-.4.2-.3.3-.6.3-1 0-.5 0-.8-.3-1a1 1 0 0 0-.8-.4 3 3 0 0 0-.8.1l.2-1.3c.4 0 .8-.1 1-.3.3-.2.4-.5.4-.8 0-.3-.1-.5-.3-.7a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9l-1.6-.3c.1-.5.3-1 .5-1.2.2-.3.5-.6.9-.8a3 3 0 0 1 1.3-.2c.8 0 1.4.2 2 .7.3.5.5 1 .5 1.5 0 .7-.4 1.3-1.2 1.8.5 0 .9.3 1.2.7.3.4.4.8.4 1.3 0 .8-.3 1.4-.8 2-.6.5-1.2.7-2 .7s-1.5-.2-2-.6c-.5-.5-.8-1-.9-1.8Z"
            data-ubhnchn="186"
            fill="#fff"
          />
          <path
            d="M1380.1 638.8v-7.1h1.5v3.1l2.9-3.1h2l-2.8 2.7 2.9 4.4h-1.9l-2-3.3-1.1 1.1v2.2h-1.5Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1388.4 635.2l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.1 1.2v2.6l.3.7h-1.3a3.5 3.5 0 0 1-.2-.6c-.2.3-.5.4-.8.6l-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2.1-.3.3-.3.5l.3.5.5.2c.3 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1396.3 638.8v-.8a2 2 0 0 1-1.7 1c-.4 0-.7-.1-1-.3l-.5-.6a3 3 0 0 1-.2-1.2v-3.3h1.3v2.4l.1 1.3c0 .2.2.3.3.4l.5.2c.2 0 .4 0 .6-.2l.4-.5.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1399 638.8v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1401.3 637.3l1.4-.2c0 .3.2.5.3.6.2.2.5.2.8.2.3 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.3 7.3 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.6.4c.3.2.5.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4-.2-.2-.4-.2-.7-.2l-.8.1-.1.3.1.3 1.3.4c.7.1 1.2.3 1.5.6.3.2.5.6.5 1 0 .5-.3.9-.7 1.2-.3.4-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1412.1 638.8h-1.3v-.8a2 2 0 0 1-1.6 1 2 2 0 0 1-1.5-.8 3 3 0 0 1-.7-2c0-.9.3-1.5.7-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2.2.4.5.5.9.5.3 0 .6 0 .8-.4.2-.2.3-.6.3-1.2s0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.3c-.3.3-.3.7-.3 1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1413.2 636.1c0-.4 0-.9.3-1.3.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1a3 3 0 0 1-.3-1.5Zm1.3.1c0 .5.2 1 .4 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4-.3 0-.6.2-.9.4-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1420.9 638.8h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.3 0-.5.2a1 1 0 0 0-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1422.9 633.6h.7v-.4c0-.4 0-.7.2-1 0-.2.2-.3.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.7-.1-.4.1-.1.6v.3h1v1.1h-1v4.1h-1.4v-4h-.7v-1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1455.4 631.7h4.2a1.8 1.8 0 0 1 1.2 1c.2.2.3.4.3.8l-.3.9c-.2.3-.4.5-.7.6.4.1.7.4 1 .7.2.3.3.6.3 1a2.2 2.2 0 0 1-.8 1.7 2 2 0 0 1-1 .4h-4.2v-7.1Zm1.5 1.1v1.7h2c.2 0 .4-.1.5-.3.2-.1.3-.3.3-.5l-.2-.6a.8.8 0 0 0-.6-.2h-2Zm0 2.9v1.9h2.3c.2 0 .4-.2.5-.3l.2-.6-.1-.6a.9.9 0 0 0-.5-.3l-1.3-.1h-1.1Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1462.6 633v-1.3h1.4v1.2h-1.4Zm0 5.8v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1466.7 638.8h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 1 .3l-.5 1.2-.7-.3c-.2 0-.3 0-.4.2-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1469.2 638.8v-7.1h1.4v3.8l1.6-1.9h1.7l-1.8 2 2 3.2h-1.5l-1.3-2.3-.7.7v1.6h-1.4Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1477.9 637.2l1.3.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1485.1 638.8h-1.3v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.3.6V638.8Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1486 637.3l1.4-.2c0 .3.2.5.4.6.2.2.4.2.7.2.4 0 .7 0 .8-.2.2 0 .2-.2.2-.3v-.3l-.5-.2a7.5 7.5 0 0 1-2.1-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4-.1-.2-.4-.2-.6-.2l-.8.1-.2.3c0 .1 0 .2.2.3l1.2.4c.8.1 1.3.3 1.6.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5a3 3 0 0 1-1.6-.4 2 2 0 0 1-.9-1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1494.5 633.6v1.1h-1v2.8l.2.2h.8v1c-.2.2-.6.2-1 .2l-.7-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1h.7v-1.1l1.3-.8v1.8h1Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1498.5 637.2l1.3.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.7c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1501 633v-1.3h1.4v1.2h-1.4Zm0 5.8v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1508.5 638.8h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.1 1 1 0 0 0-.7.2 1 1 0 0 0-.3.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .5 0 .8.2.2 0 .4.2.6.4l.2.6.1.9v3.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1533.2 638.8v-7.1h1.3l3 4.7v-4.7h1.3v7.1h-1.4l-3-4.7v4.7h-1.3Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1543.3 637.2l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1549.3 638.8v-.8a2 2 0 0 1-2.7.7l-.5-.6a3 3 0 0 1-.2-1.2v-3.3h1.4v3.7c0 .2.2.3.3.4l.5.2c.3 0 .5 0 .7-.2.1-.1.3-.3.3-.5l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1555 637.2l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.1 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.1.2-.3.5-.2.9h2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1562.3 638.8h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .4.2.6.4l.2.6.1.9v3.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1565 631.7v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1l.1 1v3.1h-1.4v-3.7c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.1h1.4Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1570.8 635.2l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4.7 0 1.1 0 1.4.2l.6.6c.2.2.2.6.2 1.2v2.6l.3.7h-1.3a3.5 3.5 0 0 1-.2-.6c-.2.3-.5.4-.8.6l-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5l.3.5.5.2c.2 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1575.3 639.2l1.5.1.2.4.6.2c.4 0 .7 0 .8-.2l.3-.3V638c-.4.5-.9.8-1.5.8-.7 0-1.2-.3-1.6-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.5.9v-.8h1.3v4.7l-.1 1.4-.4.7-.8.4-1.1.1c-.9 0-1.5-.1-1.9-.4-.4-.3-.5-.7-.5-1.2v-.1Zm1.2-3c0 .5 0 .9.3 1.1.2.3.5.4.8.4.3 0 .6-.1.8-.4.3-.3.4-.6.4-1.2 0-.5-.1-.9-.3-1.2a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1584.5 637.2l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1591.8 638.8h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1 1 1 0 0 0-.7.2 1 1 0 0 0-.4.5v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4l.3.6V638.8Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1613.1 628.8v-7.1h4.1c.4.2.7.4 1 .8.3.3.4.8.4 1.4 0 .4 0 .8-.2 1a2 2 0 0 1-1.4 1.1l-1.5.1h-1v2.7h-1.4Zm1.5-6v2.1h.8l1.1-.1a1 1 0 0 0 .6-1 1 1 0 0 0-.8-.9h-1.7Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1622.8 627.2l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1627.7 623.6v1.1h-.9v2.8c0 .1 0 .2.2.2h.7l.1 1c-.3.2-.6.2-1 .2l-.7-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1631.7 627.2l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.3.3 1.8.8s.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1635.6 628.8h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1637.7 627.3l1.3-.2c.1.3.2.5.4.6.2.2.4.2.8.2.3 0 .6 0 .8-.2l.1-.3v-.3l-.5-.2a7.5 7.5 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.3-.3.9-.5 1.6-.5.8 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4-.1-.2-.4-.2-.6-.2l-.8.1-.2.3c0 .1 0 .2.2.3l1.3.4c.7.1 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.6 0-1.2-.1-1.6-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1645 621.7v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.1h1.4Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1650.9 625.2l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.1 1.2v2.6l.3.7h-1.3a3.5 3.5 0 0 1-.2-.6c-.2.3-.5.4-.8.6l-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2.1-.3.3-.3.5l.3.5.5.2c.3 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1655.3 629.2l1.5.1.2.4.6.2c.4 0 .7 0 .8-.2.2 0 .3-.2.3-.3V628c-.3.5-.9.8-1.5.8-.7 0-1.2-.3-1.6-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.2.3 1.6.9v-.8h1.3v4.7l-.2 1.4-.4.7-.8.4-1.1.1c-.9 0-1.5-.1-1.9-.4-.3-.3-.5-.7-.5-1.2v-.1Zm1.2-3c0 .5.1.9.3 1.1.2.3.5.4.8.4.3 0 .6-.1.9-.4.2-.3.3-.6.3-1.2 0-.5-.1-.9-.3-1.2a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1664.5 627.2l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1671.8 628.8h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1 1 1 0 0 0-.7.2 1 1 0 0 0-.4.5v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.8-.9c.3 0 .5 0 .8.2.2 0 .4.2.5.4l.3.6V628.8Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1631.5 638.8v-7.1h1.4l3 4.7v-4.7h1.3v7.1h-1.5l-2.9-4.7v4.7h-1.3Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1638.4 636.1c0-.4.1-.9.3-1.3l1-1c.4-.2.8-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .8-.2 1.4-.7 2-.5.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.5-1-1a3 3 0 0 1-.3-1.5Zm1.4.1c0 .5.1 1 .4 1.2.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.3.3-.7.3-1.2s0-.9-.3-1.2c-.3-.2-.6-.4-1-.4-.3 0-.6.2-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1646.1 638.8h-1.3v-5.2h1.2v.8l.6-.7.6-.2c.3 0 .6 0 1 .3l-.5 1.2c-.2-.2-.5-.3-.7-.3-.1 0-.3 0-.4.2-.2.1-.3.3-.3.6-.1.2-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1653.5 638.8h-1.3v-.8a2 2 0 0 1-1.6 1 2 2 0 0 1-1.6-.8c-.4-.5-.6-1.1-.6-2 0-.9.2-1.5.6-2a2 2 0 0 1 3 0v-2.5h1.5v7.1Zm-3.7-2.7c0 .6 0 1 .2 1.2.3.4.6.5 1 .5.3 0 .5 0 .8-.4.2-.2.3-.6.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="187"
            fill="#000"
          />
          <path
            d="M1717.5 617.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="188"
            fill="#fff"
          />
          <path
            d="M1717.5 577.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="188"
            fill="#fff"
          />
          <path
            d="M1725.6 617.6v-7.2h1.5v2.8h2.8v-2.8h1.4v7.2h-1.4v-3.2h-2.9v3.2h-1.4Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1735.8 616l1.4.2c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.5c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2.1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1738.3 618l1.5.1.2.4.6.1.8-.1.3-.4v-1.4c-.4.6-.9.9-1.5.9-.7 0-1.2-.3-1.6-1a3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.6c.6 0 1.1.3 1.5.8v-.7h1.3v4.6l-.1 1.4-.4.7-.8.4-1.1.2c-.9 0-1.5-.2-1.9-.5-.4-.3-.5-.7-.5-1.1v-.2Zm1.2-3.1c0 .5 0 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1747.5 616l1.4.2c-.2.5-.5.8-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.5c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1751.4 617.6h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1753.8 612.4h1.3v.7a2 2 0 0 1 1.6-.8c.4 0 .6 0 .9.2l.6.6.7-.6c.3-.2.6-.2.9-.2.4 0 .7 0 1 .2l.5.7.2 1v3.4h-1.4v-3l-.1-1-.6-.3a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.1 1v2.6h-1.4v-3.9l-.3-.3a.8.8 0 0 0-.4 0 1 1 0 0 0-1 .7v3.5h-1.5v-5.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1766.3 617.6v-.8a2 2 0 0 1-1.8.9 2 2 0 0 1-1-.2l-.5-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7l.3.4.5.1.7-.1c.1-.2.3-.3.3-.5l.2-1.4v-2.2h1.3v5.2h-1.3Zm-2.8-6.1v-1.2h1.2v1.2h-1.2Zm2.1 0v-1.2h1.2v1.2h-1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1770.3 610.4v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1.1v4h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6v3.6h-1.5v-7.2h1.4Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1775 617.6v-7.2h1.4v7.2h-1.3Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1780.8 616l1.4.2c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.5c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1725.2 575.2h1.4c.1.4.3.7.6 1 .2.2.6.3 1 .3.5 0 .8-.1 1-.3.3-.2.4-.4.4-.7l-.1-.4c-.1-.2-.3-.3-.6-.4l-1.1-.3a4 4 0 0 1-1.6-.7c-.5-.4-.7-.8-.7-1.4a1.9 1.9 0 0 1 1.2-1.7c.4-.2.9-.3 1.4-.3 1 0 1.6.2 2 .6.5.4.7.9.8 1.6h-1.5c0-.3-.2-.6-.4-.8l-1-.2c-.3 0-.7 0-.9.2l-.2.5c0 .2 0 .3.2.4.2.2.6.3 1.3.5l1.6.5a2 2 0 0 1 1 1.9c0 .4 0 .8-.3 1.1a2 2 0 0 1-1 .8 4 4 0 0 1-1.5.3c-1 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.9Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1734.7 572.4v1h-1V576.4l.2.2h.7l.2 1-1.1.2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1737 577.6h-1.5v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.5.2l-.3.5V577.6Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1740.5 574l-1.2-.3c.1-.5.4-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5.2.3.2.7.2 1.3v2.6l.3.7h-1.3l-.2-.4v-.2l-.8.5-.8.2c-.6 0-1-.2-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8 0-.3.3-.4.5-.6l1.1-.3c.7 0 1.1-.2 1.4-.3v-.1l-.2-.6-.8-.2a1 1 0 0 0-.5.2c-.2 0-.3.2-.4.5Zm1.9 1-.9.3c-.4 0-.6.2-.7.2-.2.2-.3.3-.3.5s0 .4.2.5c.2.2.3.2.6.2.2 0 .5 0 .7-.2.1-.1.3-.3.3-.5V575.1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1748.5 577.6v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-1.9 0c-.3-.2-.5-.4-.6-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7l.4.4.5.1.6-.1.4-.5v-3.6h1.5v5.2h-1.3Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1750.7 576l1.4-.1c0 .3.2.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.3 7.3 0 0 1-2.1-.7c-.4-.3-.6-.6-.6-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.2.5.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.5.3 1.3.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.2-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1756.7 577.6v-7.2h1.4v2.6a2 2 0 0 1 3 0c.4.4.7 1 .7 2a3 3 0 0 1-.7 2 2 2 0 0 1-1.5.7 2 2 0 0 1-.9-.2l-.7-.7v.8h-1.3Zm1.3-2.7c0 .5.1.9.3 1.2.2.3.6.5 1 .5.3 0 .5-.1.7-.4.2-.2.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.4.6-.4 1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1765.9 576l1.3.2c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.5c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1769.7 577.6h-1.3v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2-.2 0-.3.3-.4.5V577.6Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1772.2 578l1.5.1.2.4.6.1.8-.1c.2-.1.3-.2.3-.4v-1.4c-.3.6-.8.9-1.5.9a2 2 0 0 1-1.6-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.6 2 2 0 0 1 1.6.8v-.7h1.3v4.6c0 .7 0 1.1-.2 1.4a1.6 1.6 0 0 1-1.1 1.1l-1.2.2c-.9 0-1.5-.2-1.9-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.2-3.1c0 .5.1 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1780.8 575.2h1.5c0 .4.2.7.5 1 .2.2.6.3 1 .3.5 0 .8-.1 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.4-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.4c.2-.4.5-.6 1-.8l1.3-.2c1 0 1.6.2 2 .6.5.4.7.9.8 1.6h-1.5c0-.3-.2-.6-.4-.8l-.9-.2c-.4 0-.8 0-1 .2l-.2.5c0 .2 0 .3.2.4.2.2.6.3 1.3.5.7.2 1.3.3 1.6.5l.8.7c.2.4.3.7.3 1.2a2 2 0 0 1-1.4 2 4 4 0 0 1-1.5.2c-1 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.9Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1790.3 572.4v1h-1V576.4l.2.2h.7l.2 1-1.1.2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1792.2 574l-1.2-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.5-.4.7 0 1.1 0 1.4.2.3.1.5.3.6.5.2.3.2.7.2 1.3v2.6l.3.7h-1.3l-.2-.4v-.2l-.8.5-.8.2c-.6 0-1-.2-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8.1-.3.3-.4.6-.6l1-.3c.7 0 1.1-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1a8 8 0 0 1-.9.3l-.7.2c-.2.2-.3.3-.3.5l.2.5c.2.2.4.2.6.2.2 0 .5 0 .7-.2.2-.1.3-.3.3-.5V575.1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1801.5 577.6h-1.2v-.8l-.8.7a2 2 0 0 1-.8.2 2 2 0 0 1-1.6-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.5 0 1 .2 1.5.7v-2.6h1.3v7.2Zm-3.6-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.7.1c.3-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1805.3 572.4v1h-1V576.4l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7v-1.1h.7v-1l1.3-.8v1.8h1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1727.5 526.7l1.5-.2c0 .5.2.9.5 1 .2.3.6.4 1 .4.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.6 1-.7.3-.2.8-.3 1.3-.3 1 0 1.6.2 2 .6.5.4.7 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-.9-.3s-.8.1-1 .3l-.2.4c0 .2 0 .3.2.5.2.1.6.3 1.3.4l1.6.6c.3.1.6.4.8.7.2.3.3.7.3 1.1a2 2 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-1 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1737 523.8v1.1h-1V527.8l.2.1h.7l.2 1c-.3.2-.7.2-1.1.2h-.7a1 1 0 0 1-.4-.4l-.2-.6V525h-.7v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1739.2 529h-1.3v-5.2h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2-.6-.3-.5.2a1 1 0 0 0-.4.6v3.3Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1742.8 525.4l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4s1.1 0 1.4.2l.6.6c.2.2.2.6.2 1.2v2.6l.3.7h-1.3l-.2-.4v-.1l-.8.5-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8 0-.2.3-.4.5-.5l1.1-.3 1.4-.4v-.1l-.2-.6-.8-.1a1 1 0 0 0-.5.1l-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5 0 .1 0 .3.2.5l.6.2c.2 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1750.8 529v-.8a2 2 0 0 1-2.7.7l-.6-.6-.2-1.2v-3.3h1.4v3.8l.4.3.5.2c.2 0 .4 0 .6-.2l.4-.5v-3.6h1.5v5.2h-1.3Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1753 527.5l1.4-.2c0 .3.2.5.3.6.2.2.5.2.8.2.3 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.3 7.3 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.6.4c.3.2.5.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2-.8.1-.1.3.1.3 1.3.4c.7.1 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.1.9-.5 1.2-.5.4-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1759 529V522h1.4v2.5a2 2 0 0 1 3 0c.4.5.7 1.1.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-3.1-.1v.7h-1.3Zm1.3-2.7c0 .5.1 1 .3 1.2.3.4.6.5 1 .5.3 0 .5 0 .7-.3.2-.3.4-.7.4-1.3 0-.6-.2-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.3c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1768.2 527.4l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1772 529h-1.3v-5.2h1.3v.8l.5-.7.6-.2 1 .3-.5 1.2-.6-.3-.5.2c-.2.1-.3.3-.3.6-.1.3-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1774.5 529.4l1.6.1.1.4.6.2c.4 0 .7 0 .9-.2l.2-.3v-1.4c-.3.5-.8.8-1.5.8s-1.2-.3-1.6-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.2.3 1.6.9v-.8h1.3v4.7c0 .6 0 1-.2 1.4 0 .3-.2.5-.4.7l-.7.4-1.2.1c-.9 0-1.5-.1-1.9-.4-.3-.3-.5-.7-.5-1.2v-.1Zm1.2-3c0 .5.1.9.3 1.1.3.3.5.4.8.4.4 0 .6-.1.9-.4.2-.2.3-.6.3-1.2 0-.5 0-.9-.3-1.1a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1783.5 529V522h1.4l3 4.7V522h1.3v7.1h-1.4l-3-4.7v4.7h-1.3Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1790.4 526.3l.3-1.3 1-1c.4-.2.9-.3 1.4-.3.8 0 1.4.3 2 .8.4.5.7 1.1.7 2 0 .7-.3 1.3-.8 1.9-.5.5-1.1.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.7-.5-1-1-.2-.3-.3-.9-.3-1.5Zm1.4.1c0 .5.1 1 .4 1.2.2.3.5.4.9.4s.7-.1.9-.4c.2-.3.3-.7.3-1.2s0-.9-.3-1.2c-.3-.2-.5-.4-1-.4-.3 0-.6.2-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1798.2 529h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.5-.2c.3 0 .7.1 1 .3l-.5 1.2-.6-.3-.5.2c-.1.1-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1805.5 529h-1.3v-.7a2 2 0 0 1-1.6.8 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1 .3 1.5.7V522h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2.2.4.5.5.9.5.3 0 .6 0 .8-.4.2-.2.3-.6.3-1.2s0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="189"
            fill="#000"
          />
          <path
            d="M1717.5 534.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="191"
            fill="#EC7405"
          />
          <path
            d="M1735.3 531.8h9a7 7 0 1 1 0 14h-9a7 7 0 0 1 0-14Z"
            data-ubhnchn="191"
            fill="#EC7405"
          />
          <path
            d="m1731 540.4 1.6-.2c.1.6.3 1 .6 1.3.3.2.8.4 1.3.4s1-.2 1.3-.4c.2-.2.4-.5.4-.8 0-.2 0-.4-.2-.6l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.8-.5-.5-.8-1.1-.8-1.8 0-.4.2-.8.4-1.2.3-.4.6-.7 1-.9.6-.2 1.1-.3 1.8-.3 1 0 1.9.3 2.4.7.5.5.8 1.1.9 2h-1.8c0-.4-.2-.8-.5-1l-1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s0 .4.3.5c.2.2.7.4 1.5.6l2 .6.9.9c.2.4.3.8.3 1.4 0 .5-.1 1-.4 1.3-.3.5-.7.8-1.2 1-.5.2-1 .3-1.8.3-1.1 0-2-.2-2.5-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="192"
            fill="#fff"
          />
          <path
            d="M1742.4 541l1.6-.2c0 .4.2.6.4.9.3.2.5.3.8.3.4 0 .7-.1.9-.4.2-.3.4-.7.4-1.3 0-.5-.2-1-.4-1.2-.2-.2-.5-.4-1-.4-.4 0-.8.2-1.2.7l-1.3-.2.8-4.5h4.4v1.5h-3.1l-.3 1.5 1.1-.3c.8 0 1.4.3 1.9.8s.8 1.2.8 2-.3 1.4-.7 2c-.5.7-1.3 1.1-2.3 1.1-.8 0-1.4-.2-2-.6-.4-.5-.7-1-.8-1.7Z"
            data-ubhnchn="192"
            fill="#fff"
          />
          <path
            d="M1288 620a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="192"
            fill="#fff"
          />
          <path
            d="m1228.3 609.9 1.5-.2c0 .5.2.9.5 1 .2.3.6.4 1 .4.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.6 1-.7.3-.2.8-.3 1.3-.3 1 0 1.6.2 2 .6.5.4.8 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-.9-.3s-.7.1-1 .3l-.2.4c0 .2 0 .3.2.5.2.1.6.3 1.3.4l1.6.6c.3.1.6.4.8.7a2.1 2.1 0 0 1 0 2.3 2 2 0 0 1-1 .8 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.6-.6-.4-.8-1-1-1.8Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1235.3 607h1.3v.8c.2-.3.4-.5.7-.6.3-.2.6-.3 1-.3a2 2 0 0 1 1.5.7c.4.5.6 1.1.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.6l-.8-.6v2.6h-1.4V607Zm1.4 2.5c0 .6.1 1 .4 1.3.2.3.5.4.8.4.3 0 .6 0 .8-.3.2-.3.3-.7.3-1.3 0-.5 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1242.8 612.2h-1.3V607h1.2v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.4 1.2-.7-.3c-.2 0-.3 0-.5.2l-.3.6v3.3Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1245.4 606.3v-1.2h1.4v1.2h-1.4Zm0 6V607h1.4v5.2h-1.4Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1252.9 612.2h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4V607h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4l.3.6V612.2Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1254.2 612.6l1.5.1.2.4.6.2c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.3.5-.9.8-1.5.8-.7 0-1.3-.3-1.6-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.5.9v-.8h1.3v4.7l-.1 1.3c-.1.4-.3.6-.5.8l-.7.4-1.1.1c-1 0-1.5-.1-1.9-.4-.4-.3-.5-.7-.5-1.2v-.2Zm1.2-3c0 .5 0 .9.3 1.1.2.3.5.4.8.4.3 0 .6-.1.8-.4.3-.3.4-.6.4-1.2 0-.5-.1-.9-.4-1.2a1 1 0 0 0-.8-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1260.3 607h1.3v.8c.2-.3.4-.5.7-.6.3-.2.6-.3 1-.3a2 2 0 0 1 1.5.7c.4.5.6 1.1.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.6l-.8-.6v2.6h-1.4V607Zm1.4 2.5c0 .6.1 1 .4 1.3.2.3.5.4.8.4.3 0 .6 0 .8-.3.2-.3.3-.7.3-1.3 0-.5 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1265.9 607h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2c.4 0 .7 0 1.1.2l-.2 1-.6-.1-.4.1-.2.6v.3h1v1.1h-1v4.1h-1.3v-4.1h-.8v-1Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1273.3 612.2v-.8a2 2 0 0 1-2.7.7l-.6-.6a3 3 0 0 1-.2-1.2V607h1.4v3.8l.3.3.5.2c.3 0 .5 0 .7-.2l.4-.5V607h1.4v5.2h-1.2Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1277.3 605v2.7a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5-.1l-.7.1a1 1 0 0 0-.3.5l-.2 1v2.6h-1.3v-7.1h1.3Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1282 612.2v-7.1h1.4v7.1h-1.3Z"
            data-ubhnchn="193"
            fill="#000"
          />
          <path
            d="M1305.5 566.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="195"
            fill="#fff"
          />
          <path
            d="M1305.5 526.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="195"
            fill="#fff"
          />
          <path
            d="M1202.6 526.7v-7.2h1.4v2.8h2.8v-2.8h1.5v7.2h-1.5v-3.2h-2.8v3.2h-1.4Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1209.5 524c0-.4 0-.9.3-1.3.2-.4.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.6-1-1a3 3 0 0 1-.3-1.5Zm1.4 0c0 .6.1 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1217.3 519.5v2.7a2 2 0 0 1 1.5-.8c.4 0 .7 0 1 .2a1.4 1.4 0 0 1 .7 1l.1 1v3h-1.4V523l-.3-.3a.9.9 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1225 525l1.4.3c-.2.5-.5.8-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1232.3 526.7h-1.4V523l-.4-.4a.8.8 0 0 0-.4-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V526.7h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.8-1l.8.2.5.5c.2.1.3.3.3.5v1l.1 3.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1233.2 525.2l1.4-.2c0 .3.2.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.5 7.5 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3l.7 1-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1243.8 523l-1.4.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.3.5.4.8.4.3 0 .5 0 .7-.2l.3-.8 1.3.2c0 .6-.4 1.1-.8 1.4-.3.3-.9.5-1.5.5-.8 0-1.4-.2-1.9-.7-.4-.5-.6-1.2-.6-2 0-.9.2-1.5.6-2 .5-.5 1.1-.7 1.9-.7.6 0 1.1.1 1.5.4.3.3.6.7.8 1.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1246.2 519.5v2.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .8.2a1.4 1.4 0 0 1 .9 1v4h-1.3V524l-.1-1c0-.1-.1-.3-.3-.3a1 1 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1250.6 524c0-.4.1-.9.4-1.3.2-.4.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.4-1.1.7-1.9.7a3 3 0 0 1-1.4-.3c-.4-.2-.7-.6-1-1a3 3 0 0 1-.3-1.5Zm1.4 0c0 .6.2 1 .4 1.3.2.2.5.4.9.4s.7-.2.9-.4c.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.3-.3-.5-.4-.9-.4s-.7.1-1 .4c-.1.3-.3.7-.3 1.2Zm-.4-3.4v-1.2h1.2v1.2h-1.2Zm2.1 0v-1.2h1.2v1.2h-1.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1261.8 526.7h-1.4V523l-.4-.4a.8.8 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5V526.7h-1.5v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.8.2c.3.1.5.3.6.5l.3.5v4.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1264.5 519.5v2.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2.2 0 .4.2.5.4l.3.6v4h-1.3V523l-.3-.3a1 1 0 0 0-.5-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.3.5l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1270.3 523l-1.2-.1c.1-.5.3-1 .7-1.2.3-.2.8-.3 1.5-.3.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8l.6-.5 1.1-.4c.7 0 1-.2 1.3-.3v-.1c0-.3 0-.5-.2-.6 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.2-.8.2c-.4 0-.6.2-.7.2-.2.2-.3.3-.3.5s0 .4.2.5c.2.2.3.2.5.2.3 0 .5 0 .8-.2l.3-.5V524.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1278.3 526.7v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-1.9 0c-.3-.2-.5-.4-.6-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7l.3.4.5.2.7-.2.4-.5v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1280.5 525.2l1.3-.2c.1.3.2.5.4.6l.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7.5 7.5 0 0 1-2.1-.7c-.4-.2-.6-.6-.6-1.1 0-.5.1-.9.5-1.2.3-.3.9-.4 1.6-.4.8 0 1.3 0 1.6.3.4.3.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.1-.8.1-.2.3s0 .2.2.2c.1.1.5.3 1.3.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5-.8 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1289.5 525l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.1.2-.3.5-.3.8h2.1Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1296.8 526.7h-1.4V523l-.3-.4a.8.8 0 0 0-.5-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2.1 2.1 0 0 1 2.5-.8l.6.5.2.5.1 1v3.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1219.8 564v-1.2h3.1v2.9l-1.3.8-1.8.3a4 4 0 0 1-2-.5 3 3 0 0 1-1.2-1.3c-.3-.6-.4-1.2-.4-2 0-.7.2-1.3.5-2 .3-.5.8-1 1.3-1.2.5-.3 1-.4 1.8-.4.9 0 1.5.2 2 .6.5.3.9.8 1 1.5l-1.4.3c-.1-.4-.3-.7-.6-.9-.3-.2-.6-.3-1-.3a2 2 0 0 0-1.5.6c-.4.4-.6 1-.6 1.8 0 .9.2 1.5.6 2 .3.4.8.6 1.5.6.3 0 .5 0 .9-.2l.7-.4v-1h-1.6Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1227.2 565l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2.1Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1231.2 559.5v2.7a2 2 0 0 1 2.4-.6c.3 0 .4.2.6.4l.2.6.1 1v3h-1.4V563l-.3-.3a1.1 1.1 0 0 0-1.1 0 1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1237.2 566.7h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2a1 1 0 0 0-.3.5V566.7Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1242.8 565l1.4.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.6.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1250 566.7h-1.3V563l-.4-.4a.8.8 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5V566.7h-1.5v-5.2h1.3v.8a2.1 2.1 0 0 1 2.5-.7 1.4 1.4 0 0 1 .9 1V566.6Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1251 565.2l1.4-.2c0 .3.1.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.4-.2-.2-.4-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.2-.6-.6-.6-1.1 0-.5.1-.9.5-1.2.4-.3 1-.4 1.6-.4a3 3 0 0 1 1.6.3c.4.3.6.6.8 1l-1.4.3c0-.2-.1-.4-.3-.5l-.6-.1-.8.1-.1.3v.2c.2.1.6.3 1.4.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1260 565l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4l-.2.8h2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1265.6 565l1.4.3c-.2.5-.5.8-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.4.6.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1267.7 565.2l1.4-.2c0 .3.1.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.4-.2-.2-.4-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.2-.6-.6-.6-1.1 0-.5.1-.9.5-1.2.4-.3 1-.4 1.6-.4a3 3 0 0 1 1.6.3c.4.3.6.6.8 1l-1.4.3c0-.2-.1-.4-.3-.5l-.6-.1-.8.1-.1.3v.2c.2.1.6.3 1.4.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1276.1 561.5v1h-1v2.2l.1.7.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5v-3.2h-.6v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1278.4 566.7h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.3 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1282 563l-1.3-.1c.2-.5.4-1 .8-1.2.3-.2.8-.3 1.5-.3.6 0 1 0 1.3.2.4.1.6.3.7.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.4c.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6-.1-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.2-.8.2-.8.2-.2.5c0 .2 0 .4.2.5.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V564.2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1286.5 566.7V562c0-.6 0-1.1.2-1.5 0-.3.3-.6.6-.8.4-.2.8-.3 1.3-.3.7 0 1.2.1 1.5.4.3.3.5.7.5 1 0 .4 0 .7-.3 1a8 8 0 0 0-.3.6v.2l.1.3.6.6.7.9.2.7c0 .5-.2 1-.5 1.2-.3.3-.8.5-1.3.5-.3 0-.6 0-1-.3l-.5-.6 1-.6.1.3.3.1.3-.1.2-.4c0-.1 0-.3-.2-.4l-.6-.7c-.6-.5-.9-1-.9-1.2l.4-1 .3-.6v-.3c0-.1 0-.3-.2-.4a.6.6 0 0 0-.4-.1l-.4.1-.3.3V566.7h-1.4Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="M1295.6 565l1.4.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="196"
            fill="#000"
          />
          <path
            d="m1241.8 475-1.8-7.2h1.5l1.1 5 1.3-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.5l-1.5-5.4-1.4 5.4h-1.5Z"
            data-ubhnchn="199"
            fill="#000"
          />
          <path
            d="M1251.2 471.4l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.3.1.6.3.7.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3c.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V472.5Z"
            data-ubhnchn="199"
            fill="#000"
          />
          <path
            d="M1257 475h-1.3v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2-.2 0-.3.3-.3.5l-.2 1.8v1.6Z"
            data-ubhnchn="199"
            fill="#000"
          />
          <path
            d="M1262 469.8v1h-1V473.8l.2.2h.8l.1 1-1 .2-.8-.1a1 1 0 0 1-.4-.4l-.2-.5V471h-.7v-1.1h.7v-1l1.3-.8v1.8h1Z"
            data-ubhnchn="200"
            fill="#000"
          />
          <path
            d="M1266 473.3l1.3.2c-.2.6-.4 1-.8 1.2-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="200"
            fill="#000"
          />
          <path
            d="M1273.2 475h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.4a.8.8 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="200"
            fill="#000"
          />
          <path
            d="M1274.6 475v-7.2h1.3v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.6.7c.4.4.6 1 .6 2a3 3 0 0 1-.6 2 2 2 0 0 1-3.2-.2v.8h-1.2Zm1.3-2.7c0 .5.1.9.3 1.2.2.3.5.5 1 .5.2 0 .5-.1.7-.4.2-.2.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.6-.4 1.2Z"
            data-ubhnchn="200"
            fill="#000"
          />
          <path
            d="M1283.7 473.3l1.4.2c-.2.6-.4 1-.8 1.2-.4.3-.9.4-1.5.4-.8 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="200"
            fill="#000"
          />
          <path
            d="M1287.6 475h-1.3v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.2 0-.3 0-.5.2a1 1 0 0 0-.3.5V475Z"
            data-ubhnchn="200"
            fill="#000"
          />
          <path
            d="M1290 475.3l1.6.2.2.4.6.1.8-.1c.2-.1.3-.2.3-.4v-1.4c-.3.6-.9.9-1.5.9a2 2 0 0 1-1.6-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.6 2 2 0 0 1 1.6.8v-.7h1.2v4.6l-.1 1.4-.4.7a2 2 0 0 1-.8.4 4 4 0 0 1-1.1.2c-.9 0-1.5-.2-1.9-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.3-3c0 .5.1 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="200"
            fill="#000"
          />
          <path
            d="m1268 486.7 1.8-.1c0 .5.3 1 .6 1.2.3.3.7.4 1.2.4.6 0 1-.1 1.3-.3.3-.3.4-.6.4-.9 0-.2 0-.4-.2-.5l-.6-.4-1.4-.3c-1-.3-1.6-.6-2-.9-.5-.5-.7-1-.7-1.7 0-.5 0-.9.3-1.3.3-.3.6-.6 1.1-.8.5-.2 1-.3 1.7-.3 1 0 1.9.2 2.4.7.6.5.9 1 .9 1.9h-1.7c-.1-.4-.3-.7-.5-.9-.3-.2-.6-.3-1.1-.3a2 2 0 0 0-1.2.3c-.2.2-.3.3-.3.6 0 .2.1.3.3.5.2.2.7.4 1.6.6l1.8.6c.5.2.8.5 1 .8.2.4.3.9.3 1.4 0 .5 0 1-.4 1.4-.2.4-.6.7-1.1 1-.5.2-1.2.3-1.9.3-1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="202"
            fill="#fff"
          />
          <path
            d="M1279.5 482.6V481h5.6v1.2a11.9 11.9 0 0 0-2.9 7.3h-1.6c0-1.2.3-2.4.8-3.6.4-1.2 1-2.4 1.8-3.3h-3.7Z"
            data-ubhnchn="202"
            fill="#fff"
          />
          <path
            d="M1286.2 487.3l1.6-.2c0 .4.2.7.4 1l.8.2c.4 0 .7 0 1-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.4-1.2-.2-.3-.5-.4-1-.4-.4 0-.8.2-1.2.6l-1.3-.2.8-4.5h4.4v1.6h-3.1l-.3 1.4 1.1-.2c.8 0 1.4.2 1.9.8.5.5.8 1.2.8 2 0 .7-.2 1.4-.7 2-.5.7-1.3 1-2.3 1-.8 0-1.4-.1-2-.6-.4-.4-.7-1-.8-1.7Z"
            data-ubhnchn="202"
            fill="#fff"
          />
          <path
            d="M1334.1 573.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="202"
            fill="#fff"
          />
          <path
            d="M1339 582.9v-7.2h2.2l1.8.1c.4.1.7.4 1 .7.3.4.4.9.4 1.4 0 .5 0 .8-.3 1.1a2 2 0 0 1-1.4 1l-1.4.2h-1v2.7h-1.4Zm1.3-6v2h2l.4-.4.2-.6c0-.2 0-.4-.2-.6a1 1 0 0 0-.6-.3 7 7 0 0 0-1 0h-.8Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1345.3 580.2c0-.4 0-.9.3-1.3.2-.4.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.4-.8 2a3 3 0 0 1-3.3.5l-.9-1a3 3 0 0 1-.3-1.6Zm1.4 0c0 .6 0 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1354.7 581.2l1.4.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1357.3 582.9v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1364.5 579.2l-1.3.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.9.3c-.2.2-.3.6-.3 1.2s.1 1 .4 1.3c.2.3.4.4.8.4l.6-.2.4-.8 1.3.2c-.1.6-.4 1.1-.8 1.4-.4.3-1 .5-1.6.5-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.3-1.5.7-2 .5-.5 1-.7 1.8-.7.7 0 1.2.1 1.5.4.4.3.7.7.8 1.2Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1367 575.7v2.6a2 2 0 0 1 2.4-.5c.3 0 .4.2.6.4l.2.6.1 1v3h-1.4v-3.7l-.3-.3a1.1 1.1 0 0 0-1.1 0 1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1372.7 579.3l-1.2-.3c.1-.5.4-.8.7-1 .3-.3.9-.4 1.5-.4s1.1 0 1.4.2c.3.1.5.3.6.5.2.3.2.7.2 1.3v2.6l.3.7h-1.3l-.2-.4v-.2l-.8.5-.8.2c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8.1-.3.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.1-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1-.9.3-.7.2c-.2.2-.3.3-.3.5s0 .4.2.5c.2.2.4.2.6.2.2 0 .5 0 .7-.2.2-.1.3-.3.3-.5V580.4Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1380.7 582.9v-.8a2 2 0 0 1-1.7.9 2 2 0 0 1-1-.2c-.2-.2-.5-.4-.6-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7a.8.8 0 0 0 .9.6l.6-.2.4-.5v-3.6h1.5v5.2h-1.3Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1383 581.4l1.3-.2c0 .3.2.5.3.6l.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.5 7.5 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3l.7 1-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.5.6.5 1 0 .5-.3 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.7-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1391.3 577.7v1h-.9V581.7l.1.2h.8l.2 1-1.1.2-.7-.1a1 1 0 0 1-.5-.4l-.1-.5v-3.2h-.7v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1393.6 582.9h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5V583Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1397.2 579.3l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8.2-.3.4-.4.6-.5l1.1-.4c.6 0 1-.2 1.3-.3v-.1c0-.3 0-.5-.2-.6 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.2-.7.2-.2.2-.3.3-.3.5s0 .4.2.5c.1.2.3.2.6.2.2 0 .4 0 .7-.2l.3-.5V580.4Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1401.7 582.9v-4.7c0-.6 0-1.1.2-1.5.1-.3.3-.6.6-.8.4-.2.8-.3 1.3-.3.7 0 1.2.1 1.5.4.4.3.5.7.5 1 0 .4 0 .7-.2 1a11.3 11.3 0 0 0-.4.8l.1.3.6.6.7.9.2.7c0 .5-.2.9-.5 1.2-.3.3-.7.5-1.3.5-.3 0-.6 0-.9-.3-.3-.1-.5-.4-.6-.6l1-.6c0 .1 0 .2.2.3l.2.1.4-.1.1-.4-.1-.4-.7-.7c-.5-.5-.8-1-.8-1.2 0-.2 0-.5.3-1l.3-.6v-.3l-.1-.4a.6.6 0 0 0-.5-.1l-.4.1-.2.3-.1 1.1v4.7h-1.4Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1410.9 581.2l1.3.3c-.1.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="203"
            fill="#000"
          />
          <path
            d="M1363 558.8v-7.1h2l1.4 4.9 1.3-5h2.1v7.2h-1.3v-5.6l-1.4 5.6h-1.4l-1.4-5.6v5.6h-1.4Z"
            data-ubhnchn="205"
            fill="#000"
          />
          <path
            d="M1372.3 555.2l-1.2-.2c.1-.5.3-.9.7-1.1.3-.2.8-.4 1.5-.4l1.4.2.6.6.2 1.2v2.6c0 .3.2.5.3.7h-1.4l-.1-.4v-.1l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1.1-.3 1.3-.3v-.2l-.1-.5c-.2-.2-.4-.2-.8-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.5.2c.3 0 .5-.1.8-.3l.3-.4v-1Z"
            data-ubhnchn="205"
            fill="#000"
          />
          <path
            d="M1378.2 558.8h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.5-.2c.3 0 .7.1 1 .3l-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.1.1-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="205"
            fill="#000"
          />
          <path
            d="M1380.2 558.8v-1l2-2.3.6-.7h-2.4v-1.1h4.3v1l-2 2.2-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="205"
            fill="#000"
          />
          <path
            d="M1386.8 555.2l-1.3-.2c.2-.5.4-.9.7-1.1.4-.2.9-.4 1.6-.4l1.3.2.7.6.1 1.2v2.6l.3.7h-1.3l-.2-.4v-.1l-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5-.1-.2-.4-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3-.8.2c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.3 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="205"
            fill="#000"
          />
          <path
            d="M1392.7 551.7v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1l.1 1v3.1h-1.4v-3.7c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.1h1.4Z"
            data-ubhnchn="205"
            fill="#000"
          />
          <path
            d="M1402.1 558.8h-1.3v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2a1.3 1.3 0 0 1 .8 1l.1 1v3.1Z"
            data-ubhnchn="205"
            fill="#000"
          />
          <path
            d="M1387 534.8v-7.2h3l1.7.2.8.7c.3.3.3.7.3 1.1 0 .6-.1 1-.4 1.4-.3.3-.8.5-1.4.6l.7.6.8 1.2 1 1.4h-1.8l-1-1.6-.8-1a1 1 0 0 0-.4-.3l-.8-.1h-.3v3h-1.4Zm1.4-4.1h1.1l1.3-.1c.2 0 .3-.2.4-.3l.2-.6-.2-.6a.9.9 0 0 0-.6-.2h-2.2v1.8Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1395.2 531.2l-1.2-.2c.1-.5.4-1 .7-1.1.3-.3.9-.4 1.5-.4s1.1 0 1.4.2c.3.2.5.3.6.6l.2 1.2v2.6l.3.7h-1.3l-.2-.4v-.2l-.8.5c-.2.2-.5.2-.8.2-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8 0-.2.3-.4.5-.5l1.1-.4c.7 0 1.1-.2 1.4-.3v-.1l-.2-.6-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2c-.4 0-.6.2-.7.3-.2 0-.3.2-.3.4s0 .4.2.5c.2.2.4.2.6.2.2 0 .5 0 .7-.2.1-.1.3-.3.3-.5V532.3Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1399.5 532.1c0-.4 0-.9.3-1.3.2-.4.5-.7 1-1 .4-.2.8-.3 1.3-.3.8 0 1.5.2 2 .8.5.5.7 1.1.7 1.9 0 .8-.2 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.2-.4-.3-.9-.3-1.5Zm1.4.1c0 .5 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1409.3 534.8v-.8a2 2 0 0 1-1.7 1 2 2 0 0 1-1-.3l-.6-.7a3 3 0 0 1-.1-1.1v-3.3h1.3v2.4l.1 1.3c0 .2.2.3.3.4l.5.2.6-.2.4-.5.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1412 534.8v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1414.6 532.9v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1419.1 534.8l-1.7-7.2h1.5l1 5 1.4-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.5l-1.5-5.4-1.4 5.4h-1.6Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1428.6 531.2l-1.3-.2c.2-.5.4-1 .8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2l.7.6.2 1.2v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5c-.3.2-.6.2-.9.2-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2c-.4 0-.7.2-.8.3l-.2.4c0 .2 0 .4.2.5.1.2.3.2.5.2.3 0 .5 0 .7-.2.2-.1.3-.3.3-.5l.1-.6v-.3Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1433.1 534.8v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1435.9 534.8v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1441.7 533.1l1.3.3c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1449 534.8h-1.4V532l-.1-1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.2 1 1 0 0 0-.6.2 1 1 0 0 0-.4.6l-.1 1.1v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-1c.3 0 .6.1.8.3.3 0 .5.2.6.4l.3.5v4.2Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1450.3 534.8v-7.2h1.4v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.5.7c.4.4.6 1 .6 2a3 3 0 0 1-.6 2 2 2 0 0 1-3.2-.2v.8h-1.2Zm1.3-2.7c0 .5.1 1 .3 1.2.2.3.5.5 1 .5.3 0 .5-.1.7-.4.2-.2.3-.6.3-1.2s0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1459.5 533.1l1.3.3c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1463.3 534.8h-1.3v-5.2h1.2v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.4.2a1 1 0 0 0-.3.6c-.1.2-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1465.8 535.1l1.5.2.2.4.6.1.9-.1.2-.4V534c-.3.5-.8.8-1.5.8s-1.2-.3-1.6-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1.2.3 1.6.8v-.7h1.3v4.7c0 .6 0 1-.2 1.3 0 .3-.2.6-.4.7-.2.2-.4.4-.8.5l-1.1.1c-.9 0-1.5-.2-1.9-.5-.3-.3-.5-.6-.5-1.1v-.2Zm1.2-3c0 .5.1 1 .3 1.2.2.3.5.4.8.4.4 0 .6-.1.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1471.9 532.9v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1475 532.5l1.4-.2c0 .5.3.8.5 1 .3.3.6.4 1 .4.5 0 .9-.1 1.1-.3.3-.2.4-.4.4-.7 0-.2 0-.3-.2-.4l-.5-.3-1.2-.3a4 4 0 0 1-1.6-.8 1.9 1.9 0 0 1-.3-2.4c.2-.3.5-.6.9-.7.4-.2.8-.3 1.4-.3.9 0 1.5.2 2 .6.5.4.7 1 .7 1.6h-1.4c0-.3-.2-.6-.4-.8l-1-.2c-.4 0-.7 0-1 .3l-.1.4c0 .2 0 .3.2.4.1.2.6.4 1.3.5l1.5.5c.4.2.6.5.8.8a2.2 2.2 0 0 1 0 2.3 2 2 0 0 1-1 .8 4 4 0 0 1-1.5.2c-1 0-1.6-.2-2.1-.6-.5-.4-.8-1-.9-1.8Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1484.4 529.6v1.1h-1v2l.1.8.1.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.3l-.1-.6-.1-1v-2.2h-.6v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1486.7 534.8h-1.4v-5.2h1.3v.7l.6-.6c.2-.2.3-.2.6-.2s.6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.3 0-.5.2a1 1 0 0 0-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1490.3 531.2l-1.3-.2c.2-.5.4-1 .8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.2.5.3.6.6l.2 1.2v2.6l.3.7h-1.4a3.2 3.2 0 0 1-.2-.6c-.2.3-.5.4-.7.5-.3.2-.6.2-.9.2-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8l.6-.5 1-.4c.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6-.1-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2c-.4 0-.6.2-.8.3l-.2.4c0 .2 0 .4.2.5.1.2.3.2.5.2.3 0 .5 0 .8-.2l.3-.5V532.3Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1494.8 534.8V530c0-.6 0-1.1.2-1.4 0-.4.3-.7.6-.9.4-.2.8-.3 1.3-.3.7 0 1.2.2 1.5.4.3.3.5.7.5 1 0 .4 0 .7-.3 1a8 8 0 0 0-.3.6v.2l.1.3.6.6.7 1 .2.7c0 .4-.2.8-.5 1.1-.4.4-.8.5-1.3.5-.3 0-.6 0-.9-.3-.3-.1-.5-.4-.6-.6l1-.6.1.3.3.1.4-.1.1-.4c0-.1 0-.3-.2-.4l-.6-.7c-.6-.5-.9-1-.9-1.2l.4-1 .3-.6v-.3c0-.1 0-.3-.2-.4a.6.6 0 0 0-.4-.1l-.4.1-.3.3V534.8h-1.4Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1504 533.1l1.3.3c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="207"
            fill="#000"
          />
          <path
            d="M1411 510.8v-7.2h2.2l1.3 4.9 1.3-5h2.1v7.3h-1.3V505l-1.4 5.7h-1.4l-1.5-5.7v5.7h-1.3Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1422.4 509.1l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3.9.2.2.5.3.8.3l.5-.1c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1426.3 503.6v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3V508l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1432.3 510.8h-1.3v-5.2h1.3v.7l.5-.7.6-.2 1 .3-.5 1.2-.6-.2-.5.1a1 1 0 0 0-.3.6l-.2 1.7v1.7Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1434.6 508c0-.4.1-.8.4-1.2.2-.5.5-.8.9-1 .4-.2.9-.4 1.4-.4a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.8-2 .8a3 3 0 0 1-1.3-.4c-.4-.2-.7-.5-1-.9a3 3 0 0 1-.3-1.5Zm1.4.2c0 .5.1.9.4 1.1.2.3.5.4.9.4.3 0 .7 0 .9-.4.2-.2.3-.6.3-1.2 0-.5 0-.8-.3-1.1-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.6-.4 1.2Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1442 510.8l-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.8 3.4 1-3.4h1.4l-1.7 5.2h-1.3l-.9-3.4-.9 3.4h-1.3Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1451.8 509.1l1.4.2c-.2.5-.5 1-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4.9.2.2.4.3.7.3l.6-.1.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2.1Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1455.7 510.8h-1.4v-5.2h1.3v.7l.6-.7.6-.2.9.3-.4 1.2-.7-.2-.5.1-.3.6-.1 1.7v1.7Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1467.5 510.8h-1.6l-.6-1.7h-2.8l-.6 1.7h-1.6l2.8-7.2h1.5l3 7.2Zm-2.7-2.9-1-2.6-1 2.6h2Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1468.3 510.8v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1471 510.8v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1476.8 509.1l1.4.2c-.2.5-.5 1-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4.9.2.2.4.3.7.3l.6-.1.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2.1Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1482.4 509.1l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3.9.2.2.5.3.8.3l.5-.1c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="209"
            fill="#000"
          />
          <path
            d="M1449.9 464.5h-1.6l-.6-1.6h-2.9l-.5 1.6h-1.6l2.8-7.1h1.5l2.9 7.1Zm-2.7-2.8-1-2.7-1 2.7h2Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1452 457.4v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5-.1l-.7.1a1 1 0 0 0-.3.5l-.2 1v2.6h-1.3v-7.1h1.3Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1458 464.5h-1.3v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.4 1.2c-.3-.2-.5-.2-.7-.2l-.5.1a1 1 0 0 0-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1463.7 462.9l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1471 464.5h-1.4V462l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2a1.3 1.3 0 0 1 .9 1V464.5Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1471.9 463l1.3-.2c.1.3.2.5.4.6.2.2.4.3.8.3l.8-.2.1-.4v-.3l-.5-.2a7.3 7.3 0 0 1-2.1-.6c-.4-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.7 0-.8.2l-.2.2c0 .1 0 .2.2.3l1.3.4c.7.1 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1477.3 459.3h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2l1.1.2-.2 1-.6-.1-.4.1-.1.6v.3h1v1.1h-1v4.1h-1.4v-4h-.8v-1.2Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1484.3 462.9l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.6-1.8c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1486.8 464.5v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1494.3 464.5h-1.2v-.7a2 2 0 0 1-1.6.8 2 2 0 0 1-1.6-.7 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.5 0 1 .3 1.5.7v-2.5h1.3v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2.2.4.5.6 1 .6.3 0 .5-.2.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="M1498.7 462.9l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.8.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="212"
            fill="#000"
          />
          <path
            d="m1446.2 476 1.6-.2c.1.6.3 1 .7 1.2.3.3.7.4 1.2.4.6 0 1 0 1.3-.3.3-.3.4-.5.4-.8 0-.2 0-.4-.2-.6l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9-.5-.4-.7-1-.7-1.7 0-.4 0-.8.3-1.2.3-.4.6-.7 1.1-.9.5-.2 1-.3 1.7-.3 1 0 1.9.3 2.4.7.6.5.9 1.1.9 2h-1.8c0-.4-.2-.8-.4-1-.3-.2-.6-.3-1.1-.3a2 2 0 0 0-1.2.4c-.2 0-.3.3-.3.5s.1.4.3.5c.2.2.7.4 1.6.6l1.8.6c.4.2.8.5 1 .9.2.3.3.8.3 1.3a2.6 2.6 0 0 1-1.5 2.4c-.5.2-1.2.3-2 .3-1 0-1.8-.2-2.4-.8-.6-.5-1-1.2-1-2.1Z"
            data-ubhnchn="214"
            fill="#fff"
          />
          <path
            d="M1457.6 471.8v-1.5h5.6v1.2c-.5.4-1 1-1.4 2a11.4 11.4 0 0 0-1.5 5.3h-1.6c0-1.2.3-2.4.8-3.7.4-1.2 1-2.3 1.8-3.3h-3.7Z"
            data-ubhnchn="214"
            fill="#fff"
          />
          <path
            d="M1184.6 1049h4.1c.3 0 .5.2.8.3l.5.6a1.7 1.7 0 0 1 0 1.8c-.2.3-.5.5-.8.6.5.2.8.4 1 .7.3.3.4.6.4 1a2.1 2.1 0 0 1-.9 1.7 2 2 0 0 1-1 .4h-4.1v-7.1Zm1.4 1.2v1.6h2c.3 0 .5-.1.6-.3l.2-.5c0-.2 0-.4-.2-.6l-.5-.2h-2.1Zm0 2.8v2h1.3l1-.1c.3 0 .4-.2.6-.3l.2-.6c0-.2 0-.4-.2-.6a1 1 0 0 0-.4-.3h-2.5Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1192.8 1052.5l-1.2-.2c.1-.5.3-.9.7-1.1.3-.3.8-.4 1.5-.4.6 0 1 .1 1.4.3.3 0 .5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.7h-1.4l-.1-.4v-.1l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1.1-.3 1.3-.3v-.2l-.1-.5c-.2-.2-.4-.2-.8-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.5.2c.3 0 .5-.1.8-.3l.3-.4v-1Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1200.8 1056.1v-.7a2.1 2.1 0 0 1-1.8.8 2 2 0 0 1-.9-.2c-.3-.1-.5-.3-.6-.6l-.2-1.2v-3.3h1.4v3.8l.3.4.5.1a1.1 1.1 0 0 0 1-.7c.1-.2.2-.6.2-1.4v-2.1h1.3v5.1h-1.2Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1203.4 1051h1.2v.7a2 2 0 0 1 1.6-.9l.9.2c.3.2.5.4.6.7l.7-.7.9-.2c.4 0 .7.1 1 .3.2.1.4.3.5.6l.2 1.1v3.3h-1.4v-3l-.1-1-.6-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.6l-.1 1v2.5h-1.4v-3.8l-.3-.3a.8.8 0 0 0-.4-.1 1 1 0 0 0-1 .7v3.5h-1.4v-5.2Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1211.9 1054.7l1.3-.3c.1.3.2.5.4.6.2.2.4.3.8.3l.8-.2.1-.4v-.3c-.1 0-.3 0-.5-.2a7.5 7.5 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.3-.3.9-.5 1.6-.5.8 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.7 0-.8.2l-.2.2c0 .1 0 .2.2.3l1.3.4c.7.1 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5a3 3 0 0 1-1.6-.4 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1222.4 1052.5l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.3.9.3.2 0 .4 0 .6-.2.2-.1.3-.4.4-.8l1.3.3c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.5-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.7 0 1.2.2 1.5.4.4.3.7.7.8 1.3Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1224.8 1049v2.6a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2l.6.5.2.6.1 1v3h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.1h1.3Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1233 1056.1v-.7a2 2 0 0 1-.7.6 2 2 0 0 1-2 0c-.2-.1-.4-.3-.5-.6-.2-.3-.2-.7-.2-1.2v-3.3h1.3v2.4l.1 1.4.3.4.5.1a1.1 1.1 0 0 0 1-.7l.1-1.4v-2.1h1.4v5.1h-1.3Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1235.7 1056.1v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1241.5 1054.5l1.3.2a2.2 2.2 0 0 1-2.2 1.5c-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1248.8 1056.1h-1.4v-2.6l-.1-1.1c0-.2-.1-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5h-1.5v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3.1.5.2.6.4l.3.6v4.1Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1250 1054.2v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1235 1066.1l-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.9 3.4 1-3.4h1.3l-1.7 5.2h-1.3l-.9-3.3-.9 3.3h-1.3Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1244.8 1064.5l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.5-1.5.5-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.8.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.1 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="M1247.3 1066.5l1.5.2.2.3.6.2c.4 0 .7 0 .8-.2l.3-.3v-1.4c-.4.5-.9.8-1.5.8a2 2 0 0 1-1.6-.8 3 3 0 0 1-.5-1.8c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.5.9v-.8h1.3v4.7l-.1 1.4-.4.7-.8.4-1.1.1c-.9 0-1.5-.1-1.9-.4-.4-.3-.5-.7-.5-1.2v-.1Zm1.2-3c0 .5 0 .9.3 1.1.2.3.5.4.8.4.3 0 .6-.1.8-.4.3-.2.4-.6.4-1.1 0-.6-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="215"
            fill="#000"
          />
          <path
            d="m1225.5 1092.3 1.5-.2c0 .5.2.8.5 1 .2.3.6.4 1 .4.5 0 .8-.1 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.3-1.2-.3a4 4 0 0 1-1.6-.8c-.5-.3-.7-.8-.7-1.4 0-.4.1-.7.3-1 .2-.3.5-.6.9-.7.4-.2.9-.3 1.4-.3 1 0 1.6.2 2 .6.5.4.7 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.8l-.9-.2c-.4 0-.8 0-1 .3l-.2.4c0 .2 0 .3.2.5.2.1.6.3 1.3.4l1.6.5.8.8c.2.3.3.7.3 1.1a2 2 0 0 1-1.4 2 4 4 0 0 1-1.5.2c-1 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1237.1 1091l-1.3.2a1 1 0 0 0-.4-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1.2s0 1 .3 1.3c.2.3.5.4.8.4.3 0 .5 0 .7-.2.1-.2.3-.4.3-.8l1.4.2c-.2.7-.4 1.1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.2-1.8-.7-.5-.5-.7-1.2-.7-2s.2-1.5.7-2c.4-.5 1-.7 1.8-.7.6 0 1.1.1 1.5.4.4.3.6.7.8 1.2Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1239.5 1087.4v2.7a2 2 0 0 1 2.5-.6c.2 0 .4.2.5.4l.3.6v4h-1.3v-3.7l-.4-.3a.8.8 0 0 0-.5-.2 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5v3.6h-1.5v-7.2h1.4Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1244 1092c0-.5 0-1 .3-1.4.2-.4.5-.8 1-1 .3-.2.8-.3 1.3-.3.8 0 1.4.3 2 .8.4.5.7 1.1.7 1.9 0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1a3 3 0 0 1-.4-1.5Zm1.3 0c0 .5.2 1 .4 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.4.7-.4 1.2Zm-.4-3.5v-1.2h1.2v1.2h-1.2Zm2.1 0v-1.2h1.2v1.2h-1.2Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1255 1094.6h-1.3v-3.7l-.4-.4a.8.8 0 0 0-.4-.2l-.7.2a1 1 0 0 0-.4.5V1094.6h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-1c.4 0 .6.1.9.3.2 0 .4.2.5.4.2.1.3.3.3.5v4.2Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1259.5 1093l1.3.2c-.1.5-.4.8-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.3 1.8.8c.4.5.6 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1263 1094.6l-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.9 3.4 1-3.4h1.3l-1.7 5.2h-1.3l-.9-3.3-.9 3.3h-1.3Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1272.8 1093l1.4.2c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1275.4 1088.7v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1283 1094.6h-1.4v-.8a2 2 0 0 1-1.6 1 2 2 0 0 1-1.5-.8 3 3 0 0 1-.7-2c0-.9.3-1.6.7-2a2 2 0 0 1 1.5-.7c.6 0 1.1.2 1.5.7v-2.6h1.4v7.2Zm-3.7-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.7.1c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1287.3 1093l1.4.2c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.8-.7.7 0 1.3.3 1.8.8.4.5.6 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="217"
            fill="#000"
          />
          <path
            d="M1266.6 1040.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="218"
            fill="#fff"
          />
          <path
            d="M1258.1 1049a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="218"
            fill="#fff"
          />
          <path
            d="M1275.1 1032a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="218"
            fill="#fff"
          />
          <path
            d="M1268.4 1123h1.4v4.5l-.1 1.4a2 2 0 0 1-.8 1c-.4.2-.9.3-1.5.3-.7 0-1.2-.2-1.6-.5-.4-.4-.6-1-.6-1.8l1.4-.1c0 .4 0 .7.2.8.1.3.4.4.7.4.3 0 .5 0 .7-.3.1-.1.2-.5.2-1.1v-4.6Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1271 1127.5c0-.5.1-1 .4-1.4.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7 2.6 2.6 0 0 1-2.7 2.8 3 3 0 0 1-1.4-.4c-.4-.2-.7-.5-1-1a3 3 0 0 1-.3-1.4Zm1.4 0c0 .5.2 1 .4 1.2.3.3.5.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.2-.9-.4-1.1c-.2-.3-.5-.5-.9-.5s-.7.2-.9.5c-.2.2-.4.6-.4 1.1Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1278.8 1123v2.6a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2l.5.5c.2.1.3.3.3.6v4h-1.3v-3.7l-.3-.4a.8.8 0 0 0-.5-.1l-.7.1a1 1 0 0 0-.3.5l-.2 1v2.6h-1.3v-7.1h1.3Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1284.6 1126.5l-1.2-.2c.1-.5.3-.9.7-1.1.3-.3.8-.4 1.5-.4.6 0 1 .1 1.4.3.3 0 .5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.7h-1.4l-.1-.4v-.1l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1.1-.3a8 8 0 0 0 1.3-.3v-.2c0-.3 0-.4-.2-.5 0-.2-.3-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3-.8.2-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5-.1.8-.3l.3-.4v-1Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1293.9 1130.1h-1.4v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.7.7 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2a1.3 1.3 0 0 1 .9 1v4.1Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1300 1130.1h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5h-1.5v-5.1h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2l.5.4.3.6v4.1Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1301.4 1124.2v-1.2h1.3v1.2h-1.3Zm0 6v-5.3h1.3v5.2h-1.3Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1303.7 1128.7l1.3-.3c0 .3.2.5.4.6.2.2.4.3.7.3l.8-.2c.2-.1.2-.3.2-.4v-.3l-.5-.1a7.7 7.7 0 0 1-2.1-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.7 0-.8.2l-.2.2c0 .1 0 .2.2.3l1.2.4c.8.1 1.3.3 1.6.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5a3 3 0 0 1-1.6-.4 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1312 1125v1h-.8V1129l.1.1.2.1.6-.1.1 1a1.8 1.8 0 0 1-1.8 0 1 1 0 0 1-.4-.2l-.2-.5v-3.3h-.7v-1h.7v-1l1.4-.9v1.8h.9Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1314.4 1123v2.6a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2l.5.5c.2.1.3.3.3.6v4h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5v3.6h-1.5v-7.1h1.4Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1320.2 1126.5l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4.6 0 1 .1 1.3.3.3 0 .6.3.7.5l.2 1.2v2.6c0 .3.1.5.3.7h-1.4l-.1-.4v-.1a3 3 0 0 1-.8.5l-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.9c.2-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.3 0-.4-.2-.5-.1-.2-.3-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3-.8.2-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5-.1.7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1324.7 1130.1v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="219"
            fill="#000"
          />
          <path
            d="M1340.6 1114.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="220"
            fill="#fff"
          />
          <path
            d="M1332.1 1123a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="220"
            fill="#fff"
          />
          <path
            d="M1349.1 1106a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="220"
            fill="#fff"
          />
          <path
            d="M1400.5 1133h-1.6l-.6-1.6h-2.8l-.6 1.6h-1.6l2.8-7.2h1.5l3 7.2Zm-2.7-2.8-1-2.7-1 2.7h2Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1406 1133h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.6-2c0-.9.2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.6-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.7.1c.3-.3.4-.6.4-1.2s-.2-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1407.4 1133v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1413.2 1131.3l1.3.3c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1417 1133h-1.3v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .3l-.5 1.1-.6-.2c-.2 0-.4 0-.5.2-.2 0-.3.3-.3.6-.1.2-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1419.1 1131.5l1.4-.2c0 .3.2.5.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.7 7.7 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2s.2-.8.5-1.1c.4-.4 1-.5 1.7-.5s1.2.1 1.6.3c.3.3.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.3 1.3.3c.7.2 1.3.4 1.5.6.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.7-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1426.5 1125.8v2.7a2 2 0 0 1 2.5-.6c.2 0 .4.2.6.4l.2.6v4h-1.3v-3.7l-.3-.3a.9.9 0 0 0-.5-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1431 1130.3c0-.4 0-.9.3-1.3.2-.4.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7 2.6 2.6 0 0 1-2.6 2.7 3 3 0 0 1-1.4-.3c-.4-.2-.8-.5-1-1a3 3 0 0 1-.3-1.5Zm1.4.1c0 .5.1 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.8-.4-.4 0-.7.1-1 .4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1436.8 1127.8h.8v-.4l.1-1c0-.2.3-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1.1.2l-.2 1-.6-.1-.4.1-.2.5v.4h1v1h-1v4.2h-1.3v-4.1h-.8v-1Z"
            data-ubhnchn="222"
            fill="#000"
          />
          <path
            d="M1457.6 1231.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="226"
            fill="#fff"
          />
          <path
            d="M1466.1 1223a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="226"
            fill="#fff"
          />
          <path
            d="M1453.9 1177v-1.2h3.1v2.8a4 4 0 0 1-1.3.8l-1.8.3a4 4 0 0 1-2-.4 3 3 0 0 1-1.2-1.4c-.3-.6-.4-1.2-.4-1.9s.2-1.4.5-2c.3-.5.7-1 1.3-1.3.5-.3 1-.4 1.8-.4s1.5.2 2 .6c.5.4.9.9 1 1.5l-1.4.3c-.1-.3-.3-.6-.6-.8-.3-.2-.6-.3-1-.3a2 2 0 0 0-1.6.6c-.3.4-.5 1-.5 1.8s.2 1.4.6 1.9c.3.4.8.6 1.4.6.3 0 .7 0 1-.2.3 0 .5-.2.7-.4v-1h-1.6Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1459.6 1179.6h-1.3v-5.2h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.5-.3-.7-.3l-.4.2c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1465.6 1179.6v-.8l-.7.7a2 2 0 0 1-2 0l-.5-.6c-.2-.3-.2-.7-.2-1.2v-3.3h1.3v2.4l.1 1.4.3.3.5.2c.2 0 .4 0 .6-.2l.4-.5.1-1.4v-2.2h1.4v5.2h-1.3Zm-2.7-6v-1.3h1.2v1.2h-1.2Zm2 0v-1.3h1.3v1.2h-1.2Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1473 1179.6h-1.3v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 2.5-.7c.3 0 .5.2.6.4l.3.6V1179.6Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1475.5 1176l-1.3-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.1 1.2v2.6l.3.7h-1.3l-.1-.4-.1-.2c-.2.3-.5.5-.8.6a2 2 0 0 1-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.5.2-.8.1-.2.3-.4.6-.5l1-.3a7 7 0 0 0 1.4-.4v-.1c0-.3 0-.4-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.3 0 .5-.1.7-.3.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1483.4 1179.6v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-2 0l-.5-.6a3 3 0 0 1-.2-1.2v-3.3h1.3v2.4l.1 1.4c0 .1.1.3.3.3l.5.2c.2 0 .4 0 .6-.2l.4-.5.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1495.5 1237.8v-1.3l3.8-4.7h-3.4v-1.2h5.3v1.1l-4 4.8h4.1v1.3h-5.8Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1505.2 1236.1l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.5.4-.8 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.1-.2.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-1.5 0l-.2 1h2Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1511.2 1237.8v-.8a2 2 0 0 1-2.7.7l-.5-.7c-.2-.3-.2-.7-.2-1.2v-3.2h1.3v2.4l.1 1.3c0 .2.2.3.3.4l.5.1c.2 0 .4 0 .6-.2.2 0 .3-.3.4-.4l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1516.3 1232.6v1h-1V1236.6l.2.2h.2l.6-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.6 0-.8-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.2h-.7v-1.1h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1518.6 1230.6v2.6a2 2 0 0 1 2.5-.6l.5.5.3.6v4h-1.3v-3.7l-.4-.4a1 1 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.3.5l-.2 1v2.5h-1.3v-7.1h1.3Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1526.4 1236.1l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1533.7 1237.8h-1.4v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 2.5-.7l.6.4.3.6v4.2Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1472.2 1215v-7.1h5.3v1.2h-3.8v1.6h3.5v1.2h-3.5v2h4v1.1h-5.5Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1478.9 1209.2v-1.3h1.3v1.3h-1.3Zm0 5.8v-5.2h1.3v5.2h-1.3Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1486.2 1211.4l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1 0 .7 0 1.1.3 1.4.2.2.5.3.8.3.3 0 .5 0 .6-.2.2-.1.3-.4.4-.8l1.3.3c-.1.6-.4 1-.8 1.4-.4.3-.9.5-1.6.5-.7 0-1.3-.3-1.8-.8-.4-.4-.7-1.1-.7-2 0-.8.3-1.5.7-2 .5-.4 1-.7 1.9-.7.6 0 1.1.2 1.5.4.3.3.6.7.8 1.3Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1488.6 1207.9v2.6a2 2 0 0 1 1.6-.8l.8.2a1.5 1.5 0 0 1 .9 1v4.1h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.5h-1.4v-7.1h1.4Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1494.3 1215l-1.6-5.2h1.3l1 3.5.9-3.5h1.3l.8 3.5 1-3.5h1.4l-1.7 5.2h-1.3l-.9-3.3-.9 3.3h-1.3Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1502.1 1211.4l-1.2-.2c.1-.5.4-.9.7-1.1.4-.2.9-.4 1.5-.4.7 0 1.1.1 1.4.3.3.1.5.3.6.5.2.2.2.6.2 1.2v2.6l.3.7h-1.3l-.2-.4v-.1l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1s.1-.6.3-.9l.5-.5 1.1-.3a8 8 0 0 0 1.4-.3v-.2l-.2-.5c-.2-.2-.4-.2-.8-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.3-.7.2c-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5 0 .7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1506.7 1215v-7.1h1.3v7.1h-1.3Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1514.2 1215h-1.3v-.7c-.2.3-.4.5-.7.6a2 2 0 0 1-.9.3 2 2 0 0 1-1.5-.8 3 3 0 0 1-.7-2c0-.9.3-1.5.7-2a2 2 0 0 1 1.5-.7c.6 0 1.1.3 1.5.8v-2.6h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1518.6 1213.4l1.3.2c-.2.5-.4.9-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .5 0 .8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="229"
            fill="#000"
          />
          <path
            d="M1554.8 1297.5v-7.2h1.4v3.2l3-3.2h1.9l-2.7 2.8 2.8 4.4h-1.8l-2-3.4-1.2 1.2v2.2h-1.4Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1561.7 1294.8c0-.5 0-1 .3-1.3.2-.5.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.6c0 .8-.2 1.5-.8 2-.5.5-1 .8-1.9.8a3 3 0 0 1-1.3-.3c-.5-.3-.8-.6-1-1-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6 0 1 .3 1.2.3.3.6.5 1 .5.3 0 .6-.2.8-.5.3-.2.4-.6.4-1.2 0-.5-.1-.8-.4-1.1-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.6-.3 1.2Zm-.4-3.5v-1.1h1.1v1.1h-1.1Zm2 0v-1.1h1.2v1.1h-1.2Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1572.8 1297.5h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5-.1c-.3 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1574.2 1291.6v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1576.8 1297.8l1.6.2.2.4.6.1c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.3.6-.9.9-1.5.9a2 2 0 0 1-1.6-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.6 2 2 0 0 1 1.5.8v-.7h1.3v4.6l-.1 1.4a1.6 1.6 0 0 1-1.2 1.1l-1.1.2c-1 0-1.5-.2-1.9-.5-.4-.3-.6-.7-.6-1.1v-.2Zm1.3-3c0 .5 0 .9.3 1.2.2.2.5.3.8.3.3 0 .6 0 .8-.3.3-.3.4-.7.4-1.2s-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1582.6 1296l1.4-.2.3.6.8.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.5 7.5 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1 .4-.4 1-.5 1.7-.5s1.2 0 1.6.3c.3.2.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2c-.4 0-.6 0-.8.2l-.1.3.1.2 1.3.4 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.7-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1592.5 1297.5l-1.8-7.2h1.5l1.1 5 1.3-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.5l-1.5-5.4-1.4 5.4h-1.5Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1604.3 1297.5v-.8a2.1 2.1 0 0 1-1.7.9 2 2 0 0 1-1-.3c-.3-.1-.5-.3-.6-.6a3 3 0 0 1-.2-1.2v-3.2h1.4v3.7l.4.4.5.1c.2 0 .4 0 .6-.2.2 0 .3-.3.4-.5v-3.5h1.5v5.2h-1.3Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1606.5 1296l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.7 7.7 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.2-.8.5-1 .4-.4 1-.5 1.7-.5s1.2 0 1.5.3c.4.2.6.6.8 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2c-.4 0-.6 0-.8.2l-.1.3.1.2 1.3.4 1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5a3 3 0 0 1-1.7-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1615 1292.3v1h-1V1296.3l.1.2h.3l.5-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.1-.5v-3.2h-.7v-1.1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1618.9 1295.8l1.4.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1622.8 1297.5h-1.4v-5.2h1.3v.7l.6-.7.5-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.5Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1626.7 1290.3v2.6a2 2 0 0 1 2.5-.6l.5.5.3.6v4h-1.3v-2.7l-.1-1c0-.2-.1-.3-.3-.4a.9.9 0 0 0-.5-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5v3.5h-1.5v-7.1h1.4Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1632.5 1293.8l-1.3-.2c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.4.1.6.3.7.5.1.2.2.6.2 1.3v2.5c0 .3.1.5.3.8h-1.4l-.1-.5v-.1a2.3 2.3 0 0 1-1.7.7c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.8c.1-.3.3-.5.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.2-.8.2-.8.2c-.2.1-.2.3-.2.5s0 .3.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V1295Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1640.4 1297.5v-.8a2.1 2.1 0 0 1-1.7.9 2 2 0 0 1-1-.3c-.2-.1-.4-.3-.5-.6a3 3 0 0 1-.2-1.2v-3.2h1.4v3.7c0 .2.2.3.3.4l.5.1c.3 0 .5 0 .6-.2.2 0 .4-.3.4-.5l.1-1.3v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1642.7 1296l1.3-.2c0 .2.2.4.4.6l.7.2c.4 0 .7 0 .8-.2l.2-.4v-.2l-.5-.2a7.7 7.7 0 0 1-2.1-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1 .3-.4.9-.5 1.6-.5.7 0 1.3 0 1.6.3.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.7-.2c-.3 0-.6 0-.7.2l-.2.3.2.2 1.2.4 1.6.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.6-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1651.7 1295.8l1.4.2c-.2.5-.5 1-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .3.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1659 1297.5h-1.4v-3.7l-.4-.5a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V1297.5h-1.5v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.9.1.5.4.3.6v4.2Z"
            data-ubhnchn="232"
            fill="#000"
          />
          <path
            d="M1338.5 1275.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="233"
            fill="#fff"
          />
          <path
            d="M1330 1267.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="233"
            fill="#fff"
          />
          <path
            d="M1362.5 1251.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="233"
            fill="#fff"
          />
          <path
            d="M1354 1243.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="233"
            fill="#fff"
          />
          <path
            d="M1386.6 1227.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="233"
            fill="#fff"
          />
          <path
            d="M1324 1210h-1.5l-.6-1.7h-2.9l-.6 1.6h-1.5l2.8-7.1h1.5l2.9 7.1Zm-2.6-2.9-1-2.6-1 2.6h2Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1324.8 1210v-7.2h1.4v7.1h-1.4Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1330 1204.8v1h-1V1208.8l.2.2h.3l.5-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.2-.5v-3.3h-.6v-1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1330.8 1210.3l1.6.2c0 .2 0 .3.2.3.1.2.3.2.6.2.4 0 .6 0 .8-.2l.3-.3v-1.4c-.4.6-.9.8-1.5.8-.7 0-1.3-.3-1.7-.8a3 3 0 0 1-.4-1.8c0-.8.2-1.5.6-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.9v-.7h1.3v4.6l-.1 1.4-.5.7c-.1.2-.4.3-.7.4l-1.1.1c-1 0-1.5-.1-2-.4-.3-.3-.5-.7-.5-1.1v-.2Zm1.3-3c0 .5 0 .9.3 1.2.2.2.5.3.8.3.3 0 .6 0 .8-.4.3-.2.4-.6.4-1.1 0-.6-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1337 1210v-7.2h1.5v7.1h-1.4Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1339.8 1204v-1.2h1.4v1.3h-1.4Zm0 6v-5.2h1.4v5.1h-1.4Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1345.6 1208.3l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .5.2.8.4 1 .2.2.4.3.8.3l.5-.1.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.2 1h2Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1353 1210h-1.5v-3.7l-.3-.5a.9.9 0 0 0-.5-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.3.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9l.8.2.6.4.2.6.1 1v3.1Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1354.3 1204v-1.2h1.4v1.3h-1.4Zm0 6v-5.2h1.4v5.1h-1.4Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1361.6 1206.3l-1.3.2a1 1 0 0 0-.4-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.2.5.4.8.4.3 0 .5-.1.7-.3.1-.1.3-.4.3-.7l1.4.2c-.2.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.4-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.6 0 1.1.2 1.5.5.4.2.6.6.8 1.2Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1362.6 1210v-7.2h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 1.9 3.3h-1.5l-1.3-2.4-.6.7v1.7h-1.4Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1371.2 1208.3l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .5.1.8.3 1 .3.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-1.5 0c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="234"
            fill="#000"
          />
          <path
            d="M1285.3 1231.3v-1.1h3v2.8c-.2.3-.7.5-1.2.8l-1.8.3a4 4 0 0 1-2-.5 3 3 0 0 1-1.2-1.3c-.3-.6-.4-1.2-.4-2 0-.7.1-1.3.5-1.9.3-.6.7-1 1.3-1.3.5-.3 1-.4 1.7-.4 1 0 1.6.2 2.1.6.5.3.9.9 1 1.5l-1.5.3c0-.4-.2-.6-.5-.8-.3-.3-.6-.4-1-.4a2 2 0 0 0-1.6.6c-.3.4-.5 1-.5 1.8 0 .9.2 1.5.5 2 .4.4 1 .6 1.5.6a2.7 2.7 0 0 0 1.7-.6v-1h-1.6Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1291 1234h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2a1 1 0 0 0-.3.6v3.3Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1297 1234v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-1.9 0l-.6-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v2.4l.1 1.3c0 .2.2.3.3.4l.5.2.6-.2.4-.5.1-1.4v-2.2h1.4v5.2h-1.3Zm-2.7-6.1v-1.2h1.2v1.2h-1.2Zm2 0v-1.2h1.3v1.2h-1.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1304.4 1234h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.2l-.7.2a1 1 0 0 0-.3.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2.1 2.1 0 0 1 2.5-.8l.6.5.2.5.1 1v3.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1305.8 1234v-7.2h1.3v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.6.7c.4.4.6 1 .6 2a3 3 0 0 1-.6 2 2 2 0 0 1-3.2-.2v.8h-1.3Zm1.3-2.7c0 .5.1 1 .3 1.2.2.3.5.5 1 .5.2 0 .5-.1.7-.4.2-.2.3-.6.3-1.2s-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1315 1232.3l1.3.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.1.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.6Zm0-1.3c0-.5-.1-.8-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.2.9h2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1318.8 1234h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.6v3.3Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1321.3 1234.3l1.5.2.2.4.6.1.8-.1.3-.4v-1.4c-.4.6-.9.9-1.5.9a2 2 0 0 1-1.7-.9 3 3 0 0 1-.4-1.7c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.5.8v-.7h1.3v4.7l-.1 1.3a1.6 1.6 0 0 1-1.2 1.1l-1.1.2c-1 0-1.5-.2-1.9-.5-.4-.3-.5-.6-.5-1.1v-.2Zm1.2-3c0 .5 0 1 .3 1.2.2.3.5.4.8.4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1328.5 1230.4l-1.2-.2c.1-.5.4-1 .7-1.2.3-.2.8-.3 1.5-.3.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4v-.4l-.1-.2-.8.5-.9.2c-.5 0-.9-.1-1.2-.4-.3-.3-.5-.7-.5-1.1l.2-.8.6-.5 1.1-.4c.7 0 1.1-.2 1.3-.3v-.1l-.1-.6-.8-.2a1 1 0 0 0-.6.2l-.3.5Zm1.8 1.1-.8.2c-.4 0-.6.2-.7.3-.2 0-.3.2-.3.4s0 .4.2.5c.2.2.3.2.6.2.2 0 .5 0 .7-.2.1-.1.3-.3.3-.5V1231.5Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1333 1234v-7.2h1.4v7.2h-1.3Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1335.8 1234v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1341.6 1232.3l1.4.3c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.4.5.7 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.5 0-.8-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1347.2 1232.3l1.3.3c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.8c.4.5.6 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.5 0-.8-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1229.9 1282l-1.7-7h1.4l1.1 4.8 1.3-4.9h1.8l1.2 5 1.1-5h1.5l-1.8 7.2h-1.5l-1.4-5.4-1.5 5.4h-1.5Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1239.3 1278.5l-1.2-.3c.1-.5.3-.8.7-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1.1-.3 1.3-.3v-.2c0-.2 0-.4-.2-.5 0-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3c-.4 0-.6.2-.7.2-.2.2-.3.3-.3.5s0 .4.2.5c.2.2.3.2.5.2.3 0 .5 0 .8-.2l.3-.5V1279.6Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1243.8 1282v-4.6c0-.6 0-1.1.2-1.5 0-.3.3-.6.7-.8.3-.2.7-.3 1.2-.3.7 0 1.2.1 1.5.4.4.3.5.6.5 1 0 .3 0 .7-.2 1a8 8 0 0 0-.4.6v.2l.1.3.6.6c.4.4.6.6.7.9l.2.7a1.7 1.7 0 0 1-1.7 1.7c-.4 0-.7-.1-1-.3l-.6-.6 1-.6c0 .1 0 .2.2.3H1247.3l.1-.4-.1-.4-.7-.7c-.6-.5-.8-1-.8-1.2 0-.2 0-.5.3-1l.3-.6v-.3l-.1-.4a.6.6 0 0 0-.5-.1h-.4l-.2.4-.1 1.1v4.7h-1.4Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1249.8 1276.9h1.3v.7a2 2 0 0 1 1.6-.8c.4 0 .7 0 .9.2l.6.6.7-.6c.3-.2.6-.2.9-.2.4 0 .7 0 1 .2l.5.7.2 1v3.4h-1.4v-3l-.1-1c-.2-.2-.3-.3-.6-.3a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.1 1v2.6h-1.4v-3.9l-.3-.3a.7.7 0 0 0-.4 0 1 1 0 0 0-1 .6v3.6h-1.4v-5.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1259.9 1278.5l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2l.7.5.1 1.3v1.6l.1 1 .3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.2-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2c-.2.2-.3.3-.3.5s.1.4.3.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V1279.6Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1269.1 1282h-1.3v-2.6l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.8.2.6.4.3.6v4.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1275.2 1282h-1.3v-2.6l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.8.2.6.4.3.6v4.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1276.2 1280.6l1.3-.2c0 .3.2.4.4.6l.7.2c.4 0 .7 0 .8-.2.2 0 .2-.2.2-.4v-.2l-.5-.2a7 7 0 0 1-2.1-.7c-.5-.3-.7-.6-.7-1.1 0-.5.2-.9.6-1.2.3-.3.9-.4 1.6-.4a3 3 0 0 1 1.6.3c.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.7-.2-.7.2-.2.3s0 .2.2.2c0 .1.5.3 1.2.4l1.6.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.6-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1287 1282h-1.3v-.7l-.8.7a2 2 0 0 1-.8.2 2 2 0 0 1-1.6-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1 .2 1.5.7v-2.6h1.4v7.2Zm-3.7-2.6c0 .5 0 1 .2 1.2.3.3.6.5 1 .5.3 0 .5-.1.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1288 1279.4c0-.5.1-.9.3-1.3.3-.4.6-.8 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7 2.6 2.6 0 0 1-2.6 2.7 3 3 0 0 1-1.4-.3l-1-1c-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1295.7 1282h-1.3v-5.1h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2a1 1 0 0 0-.3.5l-.2 1.8v1.6Z"
            data-ubhnchn="236"
            fill="#000"
          />
          <path
            d="M1297.7 1276.9h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2c.4 0 .8 0 1.1.2l-.2 1-.6-.2c-.2 0-.3 0-.4.2l-.2.5v.4h1v1h-1v4.2h-1.3v-4.1h-.8v-1.1Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1193.3 1319.3v-7.1h4.9v1.2h-3.5v1.7h3v1.2h-3v3h-1.4Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1199.4 1319.3v-7.1h1.3v7.1h-1.3Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1205.6 1319.3v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-1.9 0c-.3-.1-.5-.4-.6-.6a3 3 0 0 1-.2-1.2v-3.3h1.4v3.8l.3.4.5.1c.3 0 .5 0 .7-.2l.4-.5v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1208.1 1319.7l1.6.2c0 .1 0 .3.2.3l.6.2c.3 0 .6 0 .8-.2l.3-.3v-1.4c-.4.5-.9.8-1.5.8a2 2 0 0 1-1.7-.9 3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.9v-.8h1.3v4.7l-.1 1.4-.5.7a2 2 0 0 1-.7.4l-1.2.1c-.8 0-1.5-.1-1.8-.4-.4-.3-.6-.7-.6-1.2v-.1Zm1.3-3c0 .5 0 .9.3 1.1.2.3.5.4.8.4.3 0 .6-.1.8-.4.2-.2.4-.6.4-1.1 0-.6-.2-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1215.7 1312.2v2.6a2 2 0 0 1 2.4-.6l.7.5.2.6v4h-1.3v-3.7l-.4-.4a.8.8 0 0 0-.4-.1l-.7.1a1 1 0 0 0-.4.5v3.6h-1.4v-7.1h1.3Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1221.5 1315.7l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4.6 0 1 .1 1.4.3.3 0 .5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.7h-1.4l-.1-.4v-.1l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1.1-.3 1.3-.3v-.2c0-.3 0-.4-.2-.5 0-.2-.3-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3-.8.2-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5-.1.8-.3l.3-.4v-1Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1225.4 1314.1h.8v-.3l.1-1 .5-.5a2 2 0 0 1 1-.3l1.1.2-.1 1-.7-.1-.4.1-.1.6v.3h1v1.1h-1v4.1h-1.4v-4h-.8v-1.2Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1232.4 1317.7l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1239.7 1319.3h-1.4v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3.1.5.2.6.4l.3.6v4.1Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1243.8 1312.2h4.2a1.9 1.9 0 0 1 1.3 1l.2.8a1.7 1.7 0 0 1-1 1.5l1 .7c.2.3.3.6.3 1s0 .7-.2 1a2 2 0 0 1-.6.7 2 2 0 0 1-1 .4h-4.2v-7.1Zm1.5 1.2v1.6h2c.2 0 .4-.1.5-.3.2-.1.3-.3.3-.5s0-.4-.2-.6l-.6-.2h-2Zm0 2.8v2h1.3l1-.1c.2 0 .4-.2.5-.3.2-.2.2-.4.2-.6l-.1-.6a.9.9 0 0 0-.5-.3H1245.3Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1251 1319.3v-7.1h5.3v1.2h-3.8v1.6h3.6v1.2h-3.6v2h4v1.1h-5.5Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1257.7 1319.3v-7.1h3c.8 0 1.4 0 1.7.2.4 0 .6.3.9.6l.3 1.2c0 .5-.2 1-.5 1.3-.3.4-.8.6-1.4.7l.8.6.8 1.1.9 1.4h-1.8l-1-1.5c-.4-.6-.6-1-.8-1a1 1 0 0 0-.4-.4h-1v3h-1.5Zm1.5-4.1h2.3l.4-.4.2-.5c0-.3 0-.5-.2-.6a.8.8 0 0 0-.6-.3h-2.1v1.8Z"
            data-ubhnchn="237"
            fill="#000"
          />
          <path
            d="M1314.5 1299.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="238"
            fill="#fff"
          />
          <path
            d="M1306 1291.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="238"
            fill="#fff"
          />
          <path
            d="m1558.4 1309.1 1.7-.1c.1.5.3 1 .6 1.2.3.3.8.4 1.3.4s1-.1 1.2-.3c.3-.3.5-.5.5-.9l-.2-.5-.6-.4-1.4-.3c-1-.3-1.6-.5-2-.9-.5-.5-.8-1-.8-1.7 0-.4.1-.9.4-1.2.2-.4.6-.7 1-1l1.8-.2c1 0 1.8.2 2.4.7.5.5.8 1.1.9 1.9h-1.8c0-.4-.2-.7-.5-.9-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.2.3c-.2.2-.3.3-.3.6 0 .2 0 .3.2.5l1.6.6 2 .6c.3.2.6.5.8.9.3.3.4.8.4 1.3a2.6 2.6 0 0 1-1.6 2.4c-.5.2-1.1.3-1.8.3-1.1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="243"
            fill="#fff"
          />
          <path
            d="M1573 1312v-1.8h-3.5v-1.4l3.8-5.5h1.4v5.5h1v1.4h-1v1.7h-1.6Zm0-3.2v-3l-2 3h2Z"
            data-ubhnchn="243"
            fill="#fff"
          />
          <path
            d="M1582 1305.5l-1.5.1c0-.3-.1-.5-.3-.7a.9.9 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.3.3-.4 1-.5 2a2 2 0 0 1 1.5-.8c.7 0 1.3.3 1.8.8.5.6.8 1.2.8 2a3 3 0 0 1-.8 2.2c-.5.5-1.2.8-2 .8-.9 0-1.6-.4-2.2-1-.5-.7-.8-1.8-.8-3.3 0-1.6.3-2.8.9-3.5.6-.6 1.3-1 2.3-1 .6 0 1.1.2 1.6.6.4.3.7.8.8 1.5Zm-3.6 3.5c0 .6 0 1 .3 1.3.3.3.6.4.9.4.3 0 .5-.1.7-.3.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1.1Z"
            data-ubhnchn="243"
            fill="#fff"
          />
          <path
            d="m1454 1190.4 1.7-.1c0 .5.3 1 .6 1.2.3.3.7.4 1.3.4.5 0 1-.1 1.2-.3.3-.3.5-.6.5-.9l-.2-.5-.7-.4-1.4-.3c-.9-.3-1.5-.5-1.9-.9-.5-.5-.8-1-.8-1.7 0-.5.1-.9.4-1.3.2-.3.6-.6 1-.8.5-.2 1-.3 1.7-.3 1.1 0 2 .2 2.5.7.5.5.8 1.1.8 1.9h-1.7c0-.4-.2-.7-.5-.9-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.3.3l-.2.6c0 .2 0 .3.2.5s.8.4 1.6.6l1.9.6 1 .8c.2.4.3.9.3 1.4a2.6 2.6 0 0 1-1.6 2.4c-.5.2-1.1.3-1.9.3-1 0-1.9-.3-2.5-.8-.5-.5-.9-1.2-1-2.2Z"
            data-ubhnchn="245"
            fill="#fff"
          />
          <path
            d="M1466.8 1188.6a2 2 0 0 1-.9-.8 2 2 0 0 1-.3-1c0-.6.2-1.2.7-1.6.4-.4 1-.6 1.9-.6.8 0 1.4.2 1.9.6.4.4.7 1 .7 1.6a1.9 1.9 0 0 1-1.2 1.8 2.2 2.2 0 0 1 1.5 2.1c0 .8-.3 1.4-.8 2-.5.4-1.2.7-2 .7a3 3 0 0 1-2-.6c-.6-.5-1-1.2-1-2 0-.5.2-1 .4-1.3.3-.4.6-.7 1.1-1Zm.4-1.7c0 .4 0 .6.3.8.1.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3 1 1 0 0 0-.2.7Zm-.2 3.7c0 .5.1.8.4 1 .2.3.5.5.8.5.4 0 .7-.2.9-.4.2-.3.3-.6.3-1 0-.5-.1-.8-.3-1a1 1 0 0 0-.9-.4c-.4 0-.7.1-.9.4-.2.3-.3.6-.3 1Z"
            data-ubhnchn="245"
            fill="#fff"
          />
          <path
            d="M1472.1 1191l1.7-.2c0 .4.2.7.4 1 .2.1.5.3.8.3.3 0 .6-.2.8-.5.3-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.2-.2-.3-.5-.4-.9-.4-.5 0-.9.2-1.3.6l-1.3-.2.9-4.5h4.3v1.6h-3l-.3 1.5c.3-.2.7-.3 1-.3.8 0 1.4.2 2 .8.4.5.7 1.2.7 2 0 .7-.2 1.4-.6 2-.6.7-1.3 1-2.3 1a3 3 0 0 1-2-.6c-.5-.4-.8-1-.9-1.7Z"
            data-ubhnchn="245"
            fill="#fff"
          />
          <path
            d="m1245.7 1332.2 1.6-.2c.1.6.4 1 .7 1.3.3.2.7.3 1.2.3.6 0 1 0 1.3-.3.3-.3.4-.5.4-.8 0-.2 0-.4-.2-.6l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9-.5-.4-.7-1-.7-1.7 0-.4 0-.8.3-1.2.3-.4.6-.7 1.1-.9.5-.2 1-.3 1.7-.3 1 0 1.9.3 2.4.7.6.5.9 1.1.9 2h-1.8c0-.4-.2-.8-.4-1-.3-.2-.6-.3-1.1-.3a2 2 0 0 0-1.2.4c-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.7.4 1.6.6l1.8.6c.5.2.8.5 1 .9.2.4.3.8.3 1.4 0 .4-.1 1-.4 1.3-.3.5-.6.8-1.1 1-.5.2-1.2.3-2 .3-1 0-1.8-.3-2.4-.8-.6-.5-1-1.2-1-2.1Z"
            data-ubhnchn="247"
            fill="#fff"
          />
          <path
            d="M1257.1 1333l1.6-.2c0 .3.1.6.3.7.2.2.4.3.7.3.3 0 .6-.2.8-.5.3-.3.4-1 .5-2a2 2 0 0 1-1.6.8c-.7 0-1.2-.3-1.7-.8s-.8-1.2-.8-2c0-1 .3-1.6.8-2.2.5-.5 1.2-.8 2-.8.9 0 1.6.4 2.1 1 .6.7.9 1.8.9 3.4 0 1.5-.3 2.7-.9 3.4-.6.7-1.3 1-2.3 1-.6 0-1.2-.2-1.6-.5-.4-.4-.7-1-.8-1.6Zm3.7-3.6c0-.6 0-1-.3-1.3-.3-.3-.6-.4-.9-.4a1 1 0 0 0-.7.4c-.2.2-.3.6-.3 1.1 0 .6 0 1 .3 1.3.2.2.5.3.8.3.3 0 .6 0 .8-.3.2-.3.3-.6.3-1.1Z"
            data-ubhnchn="247"
            fill="#fff"
          />
          <path
            d="M771.1 1075a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="247"
            fill="#fff"
          />
          <path
            d="M780.2 1075.2v-7.2h2.3l1.7.1c.5.1.8.4 1 .7.4.4.5.9.5 1.4 0 .5 0 .8-.2 1.1a2 2 0 0 1-.7.7l-.7.4a8 8 0 0 1-1.5 0h-1v2.8h-1.4Zm1.5-6v2h1.9l.4-.4.2-.6c0-.2 0-.4-.2-.6a1 1 0 0 0-.6-.3 6 6 0 0 0-1 0h-.7Z"
            data-ubhnchn="248"
            fill="#000"
          />
          <path
            d="M788.2 1075.2h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="248"
            fill="#000"
          />
          <path
            d="M790.8 1069.3v-1.3h1.3v1.3h-1.3Zm0 5.9v-5.2h1.3v5.2h-1.3Z"
            data-ubhnchn="248"
            fill="#000"
          />
          <path
            d="M796.5 1073.5l1.4.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="248"
            fill="#000"
          />
          <path
            d="M798.6 1073.7l1.4-.2c0 .3.2.5.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.3 7.3 0 0 1-2-.7c-.5-.3-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.3.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="248"
            fill="#000"
          />
          <path
            d="M807 1070v1h-.9V1074l.2.2h.7l.2 1-1.1.2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="248"
            fill="#000"
          />
          <path
            d="M811 1073.5l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4H809c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="248"
            fill="#000"
          />
          <path
            d="M814.9 1075.2h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="248"
            fill="#000"
          />
          <path
            d="m818.4 1075.2-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.9 3.4 1-3.4h1.3l-1.6 5.2h-1.4l-.9-3.4-.8 3.4h-1.4Z"
            data-ubhnchn="249"
            fill="#000"
          />
          <path
            d="M828.2 1073.5l1.4.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="249"
            fill="#000"
          />
          <path
            d="M830.7 1075.5l1.5.2.2.4.6.1.8-.1c.2-.1.3-.2.3-.4v-1.4c-.3.6-.8.9-1.5.9a2 2 0 0 1-1.6-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.6c.6 0 1.2.3 1.6.8v-.7h1.3v4.6c0 .7 0 1.1-.2 1.4 0 .3-.2.6-.4.7l-.7.4-1.2.2c-.9 0-1.5-.2-1.9-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.2-3c0 .5.1 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="249"
            fill="#000"
          />
          <path
            d="M771 1132.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="251"
            fill="#fff"
          />
          <path
            d="M771 1160.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="251"
            fill="#fff"
          />
          <path
            d="M771 1188.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="251"
            fill="#fff"
          />
          <path
            d="M771 1216.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="251"
            fill="#fff"
          />
          <path
            d="M687.4 1213c0-.7.1-1.3.3-1.8a3.3 3.3 0 0 1 1.6-1.7c.5-.2 1-.2 1.6-.2 1 0 1.9.3 2.5 1 .6.6 1 1.5 1 2.7 0 1.1-.4 2-1 2.7-.6.6-1.5 1-2.5 1s-2-.4-2.6-1c-.6-.7-1-1.6-1-2.7Zm1.5 0c0 .8.2 1.4.5 1.8.4.4.9.6 1.5.6.5 0 1-.2 1.4-.6.4-.4.5-1 .5-1.9 0-.8-.1-1.4-.5-1.8-.4-.4-.8-.6-1.4-.6-.6 0-1.1.2-1.5.6-.3.4-.5 1-.5 1.9Z"
            data-ubhnchn="252"
            fill="#000"
          />
          <path
            d="M695 1215l1.3-.2.4.7.7.2.8-.2c.2-.1.2-.2.2-.4v-.3l-.5-.1a7 7 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.4.2.6.6.7 1l-1.3.3c0-.3-.1-.4-.3-.5l-.6-.2c-.4 0-.7 0-.8.2-.1 0-.2.1-.2.3l.2.2 1.2.4 1.6.6c.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .6-1.8.6-.7 0-1.2-.2-1.6-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="252"
            fill="#000"
          />
          <path
            d="M705.8 1216.5h-1.3v-.7c-.2.3-.5.5-.8.6a2 2 0 0 1-.8.3 2 2 0 0 1-1.6-.8c-.4-.4-.6-1.1-.6-2 0-.9.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.1Zm-3.7-2.7c0 .6 0 1 .2 1.2.3.4.6.6 1 .6.3 0 .5-.2.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="252"
            fill="#000"
          />
          <path
            d="M706.8 1213.9c0-.5.1-1 .3-1.4l1-1c.4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.7 2.7 2.7 2.7 0 0 1-2.7 2.8 3 3 0 0 1-1.4-.4c-.4-.2-.7-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .6.1 1 .4 1.2.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.3.3-.6.3-1.2 0-.5 0-.9-.3-1.1-.3-.3-.6-.5-1-.5-.3 0-.6.2-.8.5-.3.2-.4.6-.4 1.2Z"
            data-ubhnchn="252"
            fill="#000"
          />
          <path
            d="M714.6 1216.5h-1.4v-5.2h1.3v.8l.5-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="252"
            fill="#000"
          />
          <path
            d="M716.5 1211.3h.8v-.3l.1-1 .5-.5a2 2 0 0 1 1-.2l1.1.1-.2 1h-1l-.1.6v.3h1v1.1h-1v4.1h-1.4v-4h-.8v-1.2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M723.5 1214.9l1.3.2c-.1.5-.4.9-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .5 0 .8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M727.3 1216.5H726v-5.2h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6-.1.3-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M732.3 1214.2l1.4-.1c.1.4.3.8.6 1 .2.2.6.3 1 .3.5 0 .8 0 1-.3.3-.1.4-.4.4-.6l-.1-.5-.6-.3-1.1-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1 .5-3.2c.4-.2.9-.2 1.4-.2 1 0 1.6.2 2 .5.5.4.7 1 .8 1.6h-1.5c0-.3-.2-.5-.4-.7-.2-.2-.5-.3-1-.3-.3 0-.7.1-.9.3l-.2.5c0 .1 0 .3.2.4l1.3.5a7 7 0 0 1 1.6.5l.8.7c.2.3.3.7.3 1.2a2.1 2.1 0 0 1-1.4 2l-1.5.2c-1 0-1.6-.2-2-.7-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M741.8 1211.3v1.2h-1v2.8l.2.2h.2l.5-.1.2 1c-.4.2-.7.3-1.1.3-.3 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M744 1216.5h-1.3v-5.2h1.2v.8c.2-.4.4-.6.6-.7l.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M747.6 1213l-1.2-.3c.1-.5.4-.9.7-1.1.3-.2.9-.4 1.5-.4s1 .1 1.4.3c.3.1.5.3.6.5l.2 1.2v2.6l.3.7h-1.4v-.4l-.1-.1-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1l.2-.9.6-.5 1.1-.3a8 8 0 0 0 1.4-.3v-.2l-.2-.5c-.2-.2-.4-.2-.8-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1-.9.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5 0 .7-.3.1 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M752.1 1216.5v-4.6c0-.7 0-1.2.2-1.5.1-.3.3-.6.7-.8.3-.2.7-.3 1.3-.3.6 0 1.1.1 1.5.4.3.3.4.6.4 1 0 .3 0 .6-.2 1l-.3.5V1212.8l.6.6c.4.3.6.6.7.9l.2.7c0 .5-.2.9-.5 1.2a1.7 1.7 0 0 1-2.2.2c-.3-.2-.5-.4-.6-.7l1-.5c0 .1 0 .2.2.3h.6l.1-.4-.1-.4-.7-.7c-.5-.5-.8-1-.8-1.3 0-.2 0-.5.3-1l.3-.6v-.3l-.1-.3a.6.6 0 0 0-.4-.2c-.2 0-.4 0-.5.2l-.2.3-.1 1v4.7h-1.4Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M761.3 1214.9l1.3.2c-.1.5-.4.9-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M687.7 1188.5v-7h1.5v5.8h3.6v1.2h-5Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M693.8 1182.7v-1.3h1.4v1.3h-1.4Zm0 5.8v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M701 1184.9l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1 0 .7 0 1.1.3 1.4.2.2.5.3.8.3.3 0 .5 0 .6-.2.2-.1.3-.4.4-.8l1.3.3c0 .6-.4 1-.8 1.4-.4.3-.9.5-1.6.5-.7 0-1.3-.3-1.8-.8-.4-.4-.6-1.1-.6-2 0-.8.2-1.5.6-2 .5-.4 1.1-.7 1.9-.7.6 0 1.1.2 1.5.4.4.3.6.7.8 1.3Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M703.5 1181.4v2.6a2 2 0 0 1 1.6-.8l.8.2c.3.1.5.3.6.5l.3.6v4h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a1 1 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.5H702v-7.1h1.4Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M710.6 1183.3v1.2h-1v2l.1.8.1.2h.3l.5-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.2-.5v-3.3h-.6v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M714.6 1186.9l1.3.2c-.1.5-.4.9-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M718.5 1188.5H717v-5.2h1.3v.8l.5-.7.6-.2c.4 0 .7.1 1 .3l-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.1.1-.3.3-.3.6l-.1 1.7v1.6Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M720.4 1183.3h.8v-.3l.1-1 .5-.5a2 2 0 0 1 1-.2l1.1.1-.1 1h-1.1l-.1.6v.3h1v1.1h-1v4.1h-1.4v-4h-.8v-1.2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M727.4 1186.9l1.3.2c-.1.5-.4.9-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M730 1188.5v-7.1h1.3v7.1H730Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M737.5 1188.5h-1.3v-.7c-.2.3-.5.5-.8.6a2 2 0 0 1-.8.3 2 2 0 0 1-1.6-.8 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.1Zm-3.7-2.7c0 .6 0 1 .2 1.2.3.4.6.6 1 .6.3 0 .5-.2.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M741.8 1186.9l1.4.2c-.2.5-.5.9-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .5.2.8.4 1 .2.2.4.3.8.3l.5-.1c.1-.2.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.2.5-.2.9h2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M746.9 1185c0-.7 0-1.3.3-1.8a3.3 3.3 0 0 1 1.6-1.7c.4-.2 1-.2 1.5-.2 1.1 0 2 .3 2.6 1 .6.6 1 1.5 1 2.7 0 1.1-.4 2-1 2.7-.6.6-1.5 1-2.5 1-1.1 0-2-.4-2.6-1-.6-.7-1-1.6-1-2.7Zm1.5 0c0 .8.2 1.4.5 1.8.4.4.9.6 1.5.6.5 0 1-.2 1.4-.6.3-.4.5-1 .5-1.9 0-.8-.1-1.4-.5-1.8-.4-.4-.8-.6-1.4-.6-.6 0-1.1.2-1.5.6-.3.4-.5 1-.5 1.9Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M754.5 1187l1.3-.2c0 .3.2.5.4.7l.7.2.8-.2c.2-.1.2-.3.2-.4v-.3l-.5-.1a7.3 7.3 0 0 1-2.1-.7c-.4-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.4.2.6.6.7 1l-1.3.3c0-.3-.1-.4-.3-.5l-.6-.2c-.4 0-.7 0-.8.2-.1 0-.2.1-.2.3l.2.2 1.2.4 1.6.6c.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .6-1.8.6-.7 0-1.2-.2-1.6-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M762.9 1183.3v1.2h-1v2.8l.2.2h.2l.6-.1v1c-.2.2-.6.3-1 .3-.2 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.7v-1l1.3-.9v1.8h1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M721.6 1160.5v-7h1.5v5.8h3.6v1.2h-5Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M728.7 1157l-1.2-.3c.1-.5.4-.9.7-1.1.4-.2.9-.4 1.5-.4s1.1.1 1.4.3c.3.1.5.3.6.5.2.2.2.6.2 1.2v2.6l.3.7H731l-.2-.4v-.1l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1s.1-.6.3-.9l.5-.5 1.1-.3a8 8 0 0 0 1.4-.3v-.2c0-.2 0-.4-.2-.5-.2-.2-.4-.2-.8-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1-.9.3-.7.2c-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5 0 .7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M738 1160.5h-1.4v-3.6c-.1-.3-.2-.4-.4-.5a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.8-.9c.3 0 .5 0 .8.2l.5.4.3.6v4.1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M739.3 1160.5v-7.1h1.4v3.8l1.6-1.9h1.7l-1.8 2 2 3.2h-1.5l-1.3-2.3-.7.7v1.6h-1.4Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M746 1160.5l-1.7-5.2h1.3l1 3.5.9-3.5h1.3l.9 3.5 1-3.5h1.3l-1.7 5.2H749l-.9-3.3-.8 3.3h-1.4Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M752.7 1154.7v-1.3h1.4v1.3h-1.4Zm0 5.8v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M757.9 1155.3v1.2h-1v2.8l.2.2h.2l.6-.1v1c-.2.2-.6.3-1 .3-.2 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.7v-1l1.3-.9v1.8h1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M758.3 1160.5v-1l2-2.3.6-.7h-2.4v-1.1h4.3v1l-2 2.2-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M721.2 1130.2l1.4-.1.5 1c.3.2.7.3 1 .3.6 0 1 0 1.1-.3.3-.1.4-.4.4-.6 0-.2 0-.3-.2-.5l-.5-.3-1.1-.3a4 4 0 0 1-1.7-.7 1.9 1.9 0 0 1 .6-3.2c.4-.2.8-.2 1.4-.2.9 0 1.6.2 2 .5.5.4.7 1 .7 1.6h-1.4c0-.3-.2-.5-.4-.7-.2-.2-.5-.3-1-.3-.3 0-.7.1-1 .3l-.1.5c0 .1 0 .3.2.4l1.3.5a7 7 0 0 1 1.6.5l.8.7.2 1.2a2.1 2.1 0 0 1-1.3 2l-1.5.2c-1 0-1.6-.2-2.1-.7-.5-.4-.8-1-.9-1.8Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M731.7 1132.5v-.7a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.2v-3.3h1.4v3.8l.4.4.5.1a1 1 0 0 0 1-.7v-3.6h1.4v5.2h-1.2Zm-2.7-6v-1.2h1.1v1.1H729Zm2 0v-1.2h1.2v1.1h-1.1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M739.1 1132.5H738v-.7c-.3.3-.5.5-.8.6a2 2 0 0 1-.9.3 2 2 0 0 1-1.5-.8c-.4-.4-.6-1.1-.6-2 0-.9.2-1.5.6-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2.2.4.5.6 1 .6l.7-.4c.3-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M743.5 1130.9l1.4.2c-.2.5-.5.9-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M750.8 1132.5h-1.4v-3.6l-.4-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5H746v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2l.5.4.3.6v4.1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M757 1132.5h-1.4v-.7c-.2.3-.4.5-.7.6a2 2 0 0 1-.9.3 2 2 0 0 1-1.5-.8c-.4-.4-.6-1.1-.6-2 0-.9.2-1.5.6-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.7-2.7c0 .6 0 1 .2 1.2.2.4.5.6 1 .6l.7-.4c.2-.3.4-.7.4-1.2 0-.6-.2-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M761.3 1130.9l1.3.2c-.1.5-.4.9-.8 1.2-.4.2-.8.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.8-.8.7 0 1.3.3 1.8.8.4.5.6 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="253"
            fill="#000"
          />
          <path
            d="M685.5 1244.5v-7h1.4v5.8h3.6v1.2h-5Z"
            data-ubhnchn="255"
            fill="#000"
          />
          <path
            d="M691.6 1238.7v-1.3h1.3v1.3h-1.3Zm0 5.8v-5.2h1.3v5.2h-1.3Z"
            data-ubhnchn="255"
            fill="#000"
          />
          <path
            d="M698.9 1240.9l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1 0 .7.1 1.1.4 1.4.2.2.4.3.8.3.2 0 .5 0 .6-.2.2-.1.3-.4.4-.8l1.3.3c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.7 0-1.3-.3-1.8-.8-.4-.4-.7-1.1-.7-2 0-.8.3-1.5.7-2 .5-.4 1-.7 1.8-.7.7 0 1.2.2 1.6.4.3.3.6.7.8 1.3Z"
            data-ubhnchn="255"
            fill="#000"
          />
          <path
            d="M701.3 1237.4v2.6a2 2 0 0 1 1.6-.8l.8.2c.3.1.5.3.6.5l.2.6.1 1v3h-1.4v-3.7c0-.2-.2-.3-.3-.4a1 1 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.5h-1.4v-7.1h1.4Z"
            data-ubhnchn="255"
            fill="#000"
          />
          <path
            d="M708.4 1239.3v1.2h-1v2.8l.2.2h.2l.6-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.6 0-.8-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.7v-1l1.4-.9v1.8h.9Z"
            data-ubhnchn="255"
            fill="#000"
          />
          <path
            d="M712.4 1242.9l1.3.2c-.2.5-.4.9-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .5 0 .8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="255"
            fill="#000"
          />
          <path
            d="M716.2 1244.5H715v-5.2h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.5-.2-.7-.2l-.4.1c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="255"
            fill="#000"
          />
          <path
            d="M718.2 1239.3h.8v-.3l.1-1 .5-.5a2 2 0 0 1 1-.2l1.1.1-.2 1h-1l-.2.6v.3h1v1.1h-1v4.1H719v-4h-.8v-1.2Z"
            data-ubhnchn="256"
            fill="#000"
          />
          <path
            d="M725.1 1242.9l1.4.2c-.2.5-.4.9-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.6-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3H723c0 .5.2.8.4 1 .2.2.5.3.8.3l.5-.1c.2-.2.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="256"
            fill="#000"
          />
          <path
            d="M727.7 1244.5v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="256"
            fill="#000"
          />
          <path
            d="M735.2 1244.5H734v-.7c-.2.3-.5.5-.8.6a2 2 0 0 1-2.4-.5 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2.2.4.5.6 1 .6.3 0 .5-.2.7-.4.3-.3.4-.7.4-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="256"
            fill="#000"
          />
          <path
            d="M739.6 1242.9l1.4.2c-.2.5-.5.9-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="256"
            fill="#000"
          />
          <path
            d="M744.6 1242.2l1.4-.1c0 .4.2.8.5 1 .3.2.6.3 1 .3.5 0 .9 0 1.1-.3.2-.1.4-.4.4-.6 0-.2 0-.4-.2-.5l-.5-.3-1.2-.3c-.7-.2-1.3-.4-1.6-.7a1.9 1.9 0 0 1-.3-2.5l.8-.7c.4-.2.9-.2 1.5-.2.9 0 1.5.2 2 .5.4.4.7 1 .7 1.6h-1.4l-.4-.7c-.2-.2-.6-.3-1-.3s-.7.1-1 .3l-.2.5c0 .1 0 .3.2.4l1.4.5a7 7 0 0 1 1.5.5c.4.2.6.4.8.7.2.3.3.7.3 1.2a2.1 2.1 0 0 1-1.3 2l-1.6.2c-.9 0-1.6-.2-2-.7-.5-.4-.8-1-1-1.8Z"
            data-ubhnchn="256"
            fill="#000"
          />
          <path
            d="M755 1244.5v-.7a2 2 0 0 1-2.7.7l-.5-.7a3 3 0 0 1-.2-1.2v-3.3h1.4v3.8l.3.4.5.1a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2H755Zm-2.7-6v-1.2h1.2v1.1h-1.2Zm2.1 0v-1.2h1.2v1.1h-1.2Z"
            data-ubhnchn="256"
            fill="#000"
          />
          <path
            d="M762.5 1244.5h-1.3v-.7c-.2.3-.4.5-.7.6a2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-.9.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2.2.4.5.6.9.6.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="256"
            fill="#000"
          />
          <path
            d="M703.2 1272.7v-6h-2.1v-1.2h5.7v1.2h-2.2v6h-1.4Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M710.7 1271l1.4.3c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.8c.4.5.6 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.5 0-.8-.2-1a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M713.3 1272.7v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M718.4 1267.5v1.1h-1v2.8l.2.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.3l-.2-.6v-3.2h-.6v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M719 1270c0-.4.2-.9.4-1.3s.5-.8 1-1c.4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.2-.4-.3-.9-.3-1.5Zm1.5 0c0 .6 0 1 .3 1.3.3.3.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M726.4 1272.7l-1.6-5.2h1.3l1 3.4 1-3.4h1.2l.9 3.4 1-3.4h1.3l-1.6 5.2h-1.3l-1-3.4-.8 3.4h-1.4Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M735.7 1270.4l1.4-.2c0 .5.2.8.5 1 .3.3.6.4 1 .4.5 0 .9-.1 1-.3.3-.2.4-.4.4-.7l-.1-.4c-.1-.1-.3-.3-.5-.3l-1.2-.4c-.8-.1-1.3-.4-1.6-.7a1.9 1.9 0 0 1-.4-2.4c.2-.3.5-.6 1-.7.3-.2.8-.3 1.3-.3 1 0 1.6.2 2 .6.5.4.8 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.8l-.9-.2c-.4 0-.7 0-1 .3l-.2.4c0 .2 0 .3.2.4.2.2.7.3 1.4.5a7 7 0 0 1 1.5.5c.4.2.6.5.8.8a2.1 2.1 0 0 1 0 2.3 2 2 0 0 1-1 .8 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.6-.5-.4-.8-1-1-1.8Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M745 1267.5v1.1h-.9v2.8l.2.2h.8l.1 1-1 .2-.8-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1.1h.7v-1l1.3-.8v1.8h1Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M747 1269l-1.2-.1c.2-.5.4-1 .8-1.2.3-.2.8-.3 1.5-.3.6 0 1 0 1.3.2.3.2.6.3.7.6l.2 1.2v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5c-.3.2-.6.2-.9.2-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4a8 8 0 0 0 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.3.5Zm2 1.2-1 .2c-.3 0-.6.2-.7.3-.2 0-.2.2-.2.4s0 .4.2.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V1270.2Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M756.4 1272.7H755v-.8l-.8.7a2 2 0 0 1-2.4-.5 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3.1 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5 0 1 .2 1.2.3.3.6.5 1 .5.3 0 .5-.1.8-.4.2-.3.3-.6.3-1.2s-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="M760.1 1267.5v1.1h-1v2.8l.2.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.3l-.2-.6v-3.2h-.6v-1.1h.6v-1l1.4-.8v1.8h.9Z"
            data-ubhnchn="259"
            fill="#000"
          />
          <path
            d="m701.3 1284.4 1.7-.2c.1.6.3 1 .6 1.3.4.2.8.3 1.3.3.6 0 1 0 1.3-.3.2-.2.4-.5.4-.8 0-.2 0-.4-.2-.5-.1-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.3-.4.6-.7 1-.9.6-.2 1.1-.3 1.8-.3 1 0 1.9.3 2.4.7.6.5.9 1.1.9 2h-1.8c0-.4-.2-.8-.4-1l-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s0 .4.3.5c.2.2.7.4 1.6.6l1.8.6c.4.2.8.5 1 .9.2.4.3.8.3 1.4a2.5 2.5 0 0 1-1.5 2.3c-.5.2-1.2.3-2 .3-1 0-1.8-.2-2.4-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="261"
            fill="#fff"
          />
          <path
            d="M718.3 1285.6v1.6h-5.8c.1-.6.3-1.2.6-1.7s1-1.2 1.9-2l1.3-1.4c.3-.4.4-.7.4-1 0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.8-.3a1 1 0 0 0-.9.3c-.2.2-.3.6-.3 1l-1.7-.1c.1-1 .4-1.6 1-2 .5-.4 1.1-.6 1.9-.6.8 0 1.5.3 2 .7.5.5.7 1 .7 1.7 0 .4 0 .8-.2 1.1-.1.4-.3.8-.6 1.1l-1.1 1.1a17.4 17.4 0 0 0-1.3 1.4h3.2Z"
            data-ubhnchn="261"
            fill="#fff"
          />
          <path
            d="M719.5 1285l1.6-.2c0 .4.2.7.4.9a1.1 1.1 0 0 0 1.7-.1c.2-.3.3-.7.3-1.3 0-.5 0-1-.3-1.2-.2-.2-.6-.4-1-.4s-.8.2-1.2.7l-1.3-.2.8-4.5h4.4v1.5h-3.1l-.3 1.5a2.5 2.5 0 0 1 3 .5c.5.5.7 1.2.7 2s-.2 1.4-.6 2c-.5.7-1.3 1.1-2.3 1.1-.8 0-1.4-.2-2-.6-.4-.5-.7-1-.8-1.7Z"
            data-ubhnchn="261"
            fill="#fff"
          />
          <path
            d="m733.3 1284.4 1.7-.2c.1.6.3 1 .6 1.3.4.2.8.3 1.3.3.6 0 1 0 1.3-.3.2-.2.4-.5.4-.8 0-.2 0-.4-.2-.5-.1-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.3-.4.6-.7 1-.9.6-.2 1.1-.3 1.8-.3 1 0 1.9.3 2.4.7.6.5.8 1.1.9 2h-1.8c0-.4-.2-.8-.4-1l-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s0 .4.3.5c.2.2.7.4 1.6.6l1.8.6c.4.2.7.5 1 .9.2.4.3.8.3 1.4a2.5 2.5 0 0 1-1.5 2.3c-.5.2-1.2.3-2 .3-1 0-1.8-.2-2.4-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="263"
            fill="#fff"
          />
          <path
            d="M750.3 1285.6v1.6h-5.8c.1-.6.3-1.2.6-1.7s1-1.2 1.9-2l1.3-1.4c.3-.4.4-.7.4-1 0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.8-.3a1 1 0 0 0-.9.3c-.2.2-.3.6-.3 1l-1.7-.1c.1-1 .4-1.6 1-2 .5-.4 1.1-.6 1.9-.6.8 0 1.5.3 2 .7.5.5.7 1 .7 1.7 0 .4 0 .8-.2 1.1-.1.4-.3.8-.6 1.1l-1.1 1.1a17.2 17.2 0 0 0-1.4 1.4h3.3Z"
            data-ubhnchn="263"
            fill="#fff"
          />
          <path
            d="M757 1280.7l-1.6.2c0-.4-.1-.6-.3-.8a.9.9 0 0 0-.6-.2 1 1 0 0 0-1 .5l-.4 2a2 2 0 0 1 1.6-.8c.7 0 1.2.3 1.7.8s.8 1.2.8 2a3 3 0 0 1-.8 2.1c-.5.5-1.2.8-2 .8-.9 0-1.6-.3-2.1-1-.6-.7-.9-1.8-.9-3.3 0-1.6.3-2.7 1-3.4.5-.7 1.2-1 2.2-1 .6 0 1.2.1 1.6.5.4.4.7.9.8 1.6Zm-3.7 3.6c0 .5.1 1 .4 1.2.2.3.5.5.8.5.3 0 .6-.2.8-.4.2-.3.3-.6.3-1.2 0-.5-.1-1-.4-1.2a1 1 0 0 0-1.6 0c-.2.2-.3.6-.3 1Z"
            data-ubhnchn="263"
            fill="#fff"
          />
          <path
            d="m895.2 360.6 1.7-.2c.1.6.3 1 .6 1.3.3.2.8.3 1.3.3s1 0 1.2-.3c.3-.2.5-.5.5-.8 0-.2 0-.4-.2-.6l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9a2.2 2.2 0 0 1-.4-3l1-.8c.5-.2 1.1-.3 1.8-.3 1 0 1.9.3 2.4.7.5.5.8 1.1.9 2h-1.8c0-.4-.2-.8-.5-1l-1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s0 .4.2.5l1.6.6 2 .6.9.9c.2.4.3.8.3 1.4a2.5 2.5 0 0 1-1.6 2.3c-.5.2-1 .3-1.8.3-1.1 0-2-.2-2.5-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="265"
            fill="#fff"
          />
          <path
            d="M912.2 361.8v1.6h-5.8c0-.6.3-1.2.6-1.7s1-1.2 1.8-2l1.4-1.4c.2-.4.4-.7.4-1 0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.9-.3-.3 0-.6.1-.8.3-.2.2-.3.6-.3 1l-1.7-.1c.1-1 .4-1.6 1-2a3 3 0 0 1 1.9-.6c.8 0 1.5.3 2 .7.5.5.7 1 .7 1.7 0 .4 0 .8-.2 1.1-.1.4-.4.7-.7 1.1l-1 1.1a17.7 17.7 0 0 0-1.4 1.4h3.3Z"
            data-ubhnchn="265"
            fill="#fff"
          />
          <path
            d="M918.9 356.9l-1.6.2c0-.4-.1-.6-.3-.8a.9.9 0 0 0-.6-.2 1 1 0 0 0-1 .5c-.2.3-.3 1-.4 2a2 2 0 0 1 1.6-.8c.6 0 1.2.2 1.7.8.5.5.8 1.2.8 2a3 3 0 0 1-.8 2.1c-.5.5-1.2.8-2 .8-.9 0-1.6-.3-2.1-1-.6-.7-.9-1.8-.9-3.3 0-1.6.3-2.7.9-3.4.6-.7 1.3-1 2.3-1 .6 0 1.2.1 1.6.5.4.3.7.9.8 1.6Zm-3.7 3.6c0 .5 0 1 .3 1.2.3.3.6.4.9.4.3 0 .5 0 .7-.3.2-.3.3-.6.3-1.2 0-.5 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1Z"
            data-ubhnchn="265"
            fill="#fff"
          />
          <path
            d="M797.4 1121.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="265"
            fill="#fff"
          />
          <path
            d="M809.4 1113.8H808l-.7-1.6h-2.8l-.6 1.6h-1.5l2.7-7.1h1.6l2.8 7.1Zm-2.6-2.8-1-2.7-1 2.7h2Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M812.6 1108.7v1h-1V1112.6l.2.1.2.1.6-.1v1c-.2.2-.6.3-1 .3l-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.7v-1l1.3-.9v1.8h1Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M816 1108.7v1h-1V1112.6l.1.1.3.1.5-.1.1 1a1.8 1.8 0 0 1-1.8 0 1 1 0 0 1-.4-.2l-.2-.5v-3.3h-.6v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M816.9 1108v-1.3h1.3v1.2H817Zm0 5.8v-5.1h1.3v5.1H817Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M819.6 1113.8v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M823.4 1110.2l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4.7 0 1.1.1 1.4.3.3 0 .5.3.6.5.2.2.2.6.2 1.2v2.6l.3.7h-1.3a4.7 4.7 0 0 1-.2-.5l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.3 0-.4-.2-.5-.1-.2-.4-.2-.8-.2a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.3-.7.2c-.2.1-.3.3-.3.5l.2.5.6.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M827.5 1112.3l1.4-.2c0 .3.2.5.3.7l.8.2.8-.2.2-.4-.1-.3-.5-.1a7.7 7.7 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.6.4c.3.2.5.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.4 0-.6 0-.8.2l-.1.2.1.3 1.3.4c.7.1 1.2.4 1.5.6.3.2.4.6.4 1 0 .5-.1.9-.5 1.2-.4.4-1 .5-1.8.5a3 3 0 0 1-1.7-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M836 1108.7v1h-1V1112.6l.1.1.3.1.5-.1.1 1a1.8 1.8 0 0 1-1.8 0 1 1 0 0 1-.3-.2l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M838.2 1113.8h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.6-.2.9.3-.4 1.2c-.3-.2-.5-.2-.7-.2l-.5.1-.3.6v3.3Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M841.8 1110.2l-1.2-.2c.1-.5.3-.9.7-1.1.3-.3.8-.4 1.5-.4.6 0 1 .1 1.4.3.3 0 .5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.7h-1.4a4.7 4.7 0 0 1-.2-.5l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1.1-.3 1.3-.3v-.2c0-.3 0-.4-.2-.5 0-.2-.3-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.6.2.7-.3.3-.4v-1Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M846.3 1113.8v-4.6c0-.7 0-1.2.2-1.5.1-.3.3-.6.7-.8.3-.2.7-.4 1.2-.4.7 0 1.2.2 1.5.5.4.3.5.6.5 1 0 .3 0 .6-.2 1a6 6 0 0 0-.3.5V1110.1l.6.6c.4.3.6.6.7.8l.2.8c0 .5-.2.9-.5 1.2a1.7 1.7 0 0 1-2.2.2c-.3-.2-.5-.4-.6-.7l1-.5s0 .2.2.3H849.9l.1-.5-.1-.4-.7-.6c-.6-.6-.8-1-.8-1.3 0-.2 0-.5.3-1l.3-.6v-.3l-.1-.3a.6.6 0 0 0-.5-.2c-.1 0-.3 0-.4.2l-.2.3-.1 1v4.7h-1.4Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M855.5 1112.2l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.5-1.4.5-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="266"
            fill="#000"
          />
          <path
            d="M825.6 1136.5v-7.2h2.1l1.3 4.9 1.3-4.9h2.2v7.2h-1.3v-5.7l-1.5 5.7h-1.4l-1.4-5.7v5.7h-1.3Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M835 1132.9l-1.3-.3c.2-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.1 1.3v1.6l.1 1 .2.7h-1.3a6 6 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3a8 8 0 0 0 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.6Zm1.8 1-.8.3-.8.2c-.2.1-.3.3-.3.5s.1.4.3.5l.5.2c.3 0 .5 0 .7-.2.2-.2.3-.3.3-.5l.1-.7v-.2Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M840.8 1136.5h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6V1136.5Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M843.4 1130.6v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M849.2 1134.8l1.3.2c-.1.5-.4 1-.8 1.2-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M856.4 1136.5h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1a1.4 1.4 0 0 1 .9 1v4.2Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M857.2 1131.3h.8v-.4l.1-1c.1-.2.3-.4.6-.5a2 2 0 0 1 .9-.2l1.1.1-.1 1h-1.1l-.1.6v.4h1v1h-1v4.2H858v-4.2h-.8v-1Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M864.2 1134.8l1.4.2c-.2.5-.5 1-.9 1.2-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M866.7 1136.5v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M874.3 1136.5H873v-.8l-.7.7a2 2 0 0 1-1 .2 2 2 0 0 1-1.4-.7 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1 .2 1.5.7v-2.6h1.4v7.2Zm-3.7-2.8c0 .6 0 1 .2 1.3.3.3.6.5 1 .5.3 0 .6-.1.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M878.6 1134.8l1.4.2c-.2.5-.4 1-.8 1.2-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="268"
            fill="#000"
          />
          <path
            d="M848.2 1152h4.2c.2 0 .5.1.7.3l.6.6.2.8c0 .4-.1.7-.3 1l-.7.6c.4.1.7.3 1 .6.2.3.3.7.3 1.1a2.1 2.1 0 0 1-.8 1.7c-.3.2-.6.3-1 .3h-4.2v-7Zm1.5 1.1v1.7h2l.6-.3.2-.6c0-.2 0-.4-.2-.5a.8.8 0 0 0-.6-.3h-2Zm0 2.9v1.9h2.3l.5-.4c.2-.1.2-.3.2-.6l-.1-.5a.9.9 0 0 0-.5-.3l-1.3-.1h-1.1Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M858.9 1159v-.7a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1v-3.3h1.4v3.7l.3.4.5.2a1 1 0 0 0 1-.7l.2-1.4v-2.2h1.3v5.2H859Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M866 1155.4l-1.3.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1.2s0 1 .3 1.3c.2.3.5.4.8.4.3 0 .5 0 .7-.2l.3-.8 1.4.2c-.2.7-.5 1.1-.9 1.4-.3.3-.9.5-1.5.5-.8 0-1.4-.2-1.9-.7-.4-.5-.6-1.2-.6-2 0-.9.2-1.5.6-2 .5-.5 1.1-.7 1.9-.7.6 0 1.1.1 1.5.4.4.3.6.7.8 1.2Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M867 1159v-7h1.5v3.7l1.6-1.8h1.6l-1.7 1.9 1.9 3.3h-1.5l-1.3-2.3-.6.6v1.7H867Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M872.4 1156.4c0-.4 0-.9.3-1.3.2-.4.6-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.4-.7 2-.5.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M879.8 1159l-1.7-5.1h1.4l1 3.4.8-3.4h1.4l.8 3.4 1-3.4h1.4l-1.7 5.2h-1.3l-1-3.3-.8 3.3h-1.3Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M889.6 1157.4l1.4.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.8c.4.5.6 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.3 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M893.5 1159H892v-5.1h1.3v.7l.6-.6c.1-.2.3-.2.5-.2.4 0 .7 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M903.4 1156.5l1.4.4c-.2.8-.6 1.4-1 1.7a3 3 0 0 1-2 .6 3 3 0 0 1-2.3-1c-.6-.6-1-1.5-1-2.6a4 4 0 0 1 1-2.8c.6-.7 1.4-1 2.4-1a3 3 0 0 1 2.1.8c.4.3.6.7.8 1.3l-1.5.3c0-.3-.2-.6-.5-.8-.2-.3-.6-.4-1-.4-.5 0-1 .2-1.3.6-.3.4-.4 1-.4 1.9 0 .9.1 1.5.4 1.9.4.4.8.6 1.3.6.4 0 .7-.2 1-.4.3-.2.5-.6.6-1.1Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M907.4 1152v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4h-1.3v-2.7l-.1-1c0-.1-.1-.3-.3-.3a1 1 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6H906v-7.2h1.4Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M913.2 1155.5l-1.3-.2c.2-.5.4-1 .8-1.2.3-.2.8-.3 1.5-.3.6 0 1 0 1.3.2.3.2.6.3.7.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2a2.4 2.4 0 0 1-1.7.7c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.3.5Zm1.8 1.1a21.5 21.5 0 0 1-1.6.4c-.2.2-.2.3-.2.5s0 .4.2.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V1156.6Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M921.1 1159v-.7a2 2 0 0 1-2.7.7l-.5-.7c-.2-.3-.2-.6-.2-1.1v-3.3h1.4v3.7c0 .2.2.3.3.4l.5.2a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M923.3 1157.6l1.4-.2c0 .3.2.5.4.6l.7.2c.4 0 .7 0 .8-.2.2 0 .2-.2.2-.3v-.3l-.5-.2a7.3 7.3 0 0 1-2.1-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.6-1.2.3-.3.9-.4 1.6-.4.7 0 1.3.1 1.6.3.3.3.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.7-.1-.7.1-.2.3.1.3 1.3.3 1.6.6c.2.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.9-1.2Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M929 1157.6l1.3-.2c0 .3.2.5.3.6l.8.2c.4 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.3 7.3 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2.1 1.6.3l.7 1-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.3 1.3.3 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M938 1157.4l1.3.3c-.1.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3H936c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.3 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="M943.5 1157.4l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .3 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.4c0-.3-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.2.5-.2.8h2Z"
            data-ubhnchn="270"
            fill="#000"
          />
          <path
            d="m870.5 1179.4 1.4-.2c0 .5.3.9.5 1 .3.3.6.4 1 .4.5 0 .9 0 1.1-.3.3-.2.4-.4.4-.7 0-.1 0-.3-.2-.4l-.5-.3-1.2-.3c-.7-.2-1.3-.4-1.6-.7a1.9 1.9 0 0 1-.3-2.5c.2-.3.5-.6.9-.7.3-.2.8-.3 1.4-.3.9 0 1.5.2 2 .6.4.4.7 1 .7 1.6h-1.4c-.1-.3-.2-.6-.4-.7-.2-.2-.5-.3-1-.3-.4 0-.7.1-1 .3l-.2.4c0 .2.1.4.3.5l1.3.5c.7.1 1.2.3 1.5.5.4.1.6.4.8.7.2.3.3.7.3 1.1a2 2 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.6-.5-.4-.8-1-1-1.8Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M882 1178l-1.3.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.9.3c-.2.3-.3.7-.3 1.2 0 .6.1 1 .3 1.3.3.3.5.4.9.4.2 0 .5 0 .6-.2l.4-.8 1.3.3c-.1.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.7 0-1.3-.2-1.8-.7-.4-.5-.7-1.1-.7-2 0-.8.3-1.5.7-2 .5-.4 1-.7 1.8-.7.7 0 1.2.1 1.5.4.4.3.7.7.9 1.3Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M884.5 1174.6v2.6a2 2 0 0 1 2.4-.6l.6.4.2.6.1 1v3.1h-1.4v-3.7c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6H883v-7.1h1.4Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M889.2 1175.8v-1.2h1.4v1.2h-1.4Zm0 6v-5.3h1.4v5.2h-1.4Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M896.5 1178l-1.3.3c-.1-.3-.2-.5-.4-.6a1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2 0 .6.1 1 .3 1.3.2.3.5.4.8.4.3 0 .5 0 .7-.2.1-.2.3-.4.3-.8l1.4.3c-.2.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.8-.7-.5-.5-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.6 0 1.1.1 1.5.4.4.3.6.7.8 1.3Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M899 1174.6v2.6a2 2 0 0 1 2.4-.6l.5.4.3.6v4.1H901v-3.7l-.4-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5v3.6h-1.5v-7.1h1.4Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M904.7 1178.1l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2l.6.6.2 1.2v2.6c0 .2.1.5.3.7h-1.4a6.5 6.5 0 0 1-.2-.5l-.7.5a2 2 0 0 1-.9.1c-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8.2-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3-.2.5c0 .1 0 .3.2.5l.5.2c.3 0 .5-.1.7-.3l.4-.4v-1Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M912.6 1181.7v-.8a2 2 0 0 1-2.7.7l-.5-.6a3 3 0 0 1-.2-1.2v-3.3h1.4v3.7l.3.4.5.2c.3 0 .5 0 .7-.2.1-.1.3-.3.3-.5l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M916.3 1181.7l-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.9 3.4 1-3.4h1.3l-1.7 5.2h-1.3l-.9-3.3-.9 3.3h-1.3Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M926.1 1180l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3H924c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M928.6 1182l1.5.3.2.3.6.2c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.4.5-.9.8-1.5.8a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.5.9v-.8h1.3v4.7l-.1 1.3-.4.8a2 2 0 0 1-.8.4l-1.1.1c-1 0-1.5-.1-1.9-.4-.4-.3-.6-.7-.6-1.2v-.2Zm1.2-3c0 .6 0 1 .3 1.2.2.3.5.4.8.4.3 0 .6-.1.8-.4.3-.3.4-.6.4-1.2 0-.5-.1-.9-.3-1.2a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="272"
            fill="#000"
          />
          <path
            d="M893.5 1204.3v-7h1.5v5.8h3.6v1.2h-5Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M899.6 1198.5v-1.3h1.4v1.3h-1.4Zm0 5.8v-5.1h1.4v5.1h-1.4Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M906.9 1200.7l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.2.5.3.8.3.3 0 .5 0 .7-.2l.3-.7 1.4.2c-.2.6-.5 1-.9 1.4-.3.3-.9.5-1.5.5-.8 0-1.4-.3-1.9-.8-.4-.4-.6-1.1-.6-2 0-.8.2-1.5.6-2 .5-.4 1.1-.7 1.9-.7.6 0 1.1.2 1.5.5.4.2.6.6.8 1.2Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M909.3 1197.2v2.6a2 2 0 0 1 1.6-.8l.8.2c.3.1.5.3.6.5l.3.6v4h-1.3v-2.7l-.1-1c0-.2-.1-.3-.3-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.5h-1.4v-7.1h1.4Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M916.4 1199.2v1h-1v2.1l.1.8.1.2h.3l.5-.1.1 1c-.3.2-.6.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.1-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M920.4 1202.7l1.4.2c-.2.5-.5.9-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M927.7 1204.3h-1.4v-3.6a.8.8 0 0 0-.9-.6c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5h-1.5v-5.1h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2l.5.4.3.6v4.1Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M930.4 1204.3H929v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M934 1200.7l-1.3-.2c.2-.5.4-.9.8-1.1.3-.2.8-.4 1.5-.4.6 0 1 .1 1.3.3.3.1.6.3.7.5l.2 1.2v2.6c0 .3.1.5.3.7H936a4.4 4.4 0 0 1-.2-.5l-.7.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3-.8.2-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M943.3 1204.3H942v-.7a2 2 0 0 1-3.2.1 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.1Zm-3.7-2.7c0 .6 0 1 .2 1.2a1 1 0 0 0 1.8.2c.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M947.6 1202.7l1.4.2c-.2.5-.5.9-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .5.2.8.4 1 .2.2.4.3.8.3l.5-.1c.1-.2.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2.9h2Z"
            data-ubhnchn="274"
            fill="#000"
          />
          <path
            d="M916.1 1227v-7.2h2.2l1.3 4.9 1.2-4.9h2.2v7.2h-1.3v-5.7l-1.5 5.7H919l-1.5-5.7v5.7h-1.3Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M925.5 1223.4l-1.3-.3c.2-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.3-.4-.3-.3-.4-.7-.4-1.2 0-.2 0-.5.2-.7.1-.3.3-.4.6-.6l1-.3a8 8 0 0 0 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2c-.2.1-.2.3-.2.5s0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V1224.5Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M931.4 1219.8v2.6a2 2 0 0 1 1.6-.7l.8.1.6.5.3.6v4h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a1 1 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6H930v-7.2h1.4Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M936.1 1227v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M938.6 1224.3c0-.5 0-.9.3-1.3.2-.5.6-.8 1-1 .4-.2.8-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7 2.7 2.7 0 0 1-2.6 2.7 3 3 0 0 1-1.4-.3c-.4-.3-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M946 1227l-1.7-5.2h1.4l1 3.4.8-3.4h1.4l.8 3.4 1-3.4h1.4l-1.7 5.2h-1.3l-1-3.4-.8 3.4H946Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M944 1244h4.2a1.9 1.9 0 0 1 1.3.9l.2.8c0 .4-.1.7-.3 1l-.7.6c.4.1.7.3 1 .6a2.1 2.1 0 0 1-.5 2.8 2 2 0 0 1-1 .3H944v-7Zm1.5 1.1v1.7h2l.6-.3.2-.6c0-.2 0-.4-.2-.5a.8.8 0 0 0-.6-.3h-2Zm0 2.9v1.9h2.3l.5-.4c.2-.1.2-.3.2-.6l-.1-.5a.9.9 0 0 0-.5-.3l-1.3-.1h-1.1Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M951.2 1251v-7h1.4v7h-1.4Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M955 1247.5l-1.2-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.5-.4.7 0 1.1 0 1.4.2.3.1.5.3.6.5.2.3.2.7.2 1.3v2.6l.3.7h-1.3a5 5 0 0 1-.2-.6l-.8.5-.8.2c-.6 0-1-.2-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3c.7 0 1.1-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.8-.2c-.2 0-.4 0-.5.2a1 1 0 0 0-.4.5Zm1.9 1c-.2.2-.5.2-.9.3l-.7.2c-.2.2-.3.3-.3.5l.2.5c.2.2.4.2.6.2.2 0 .5 0 .7-.2.2-.1.3-.3.3-.5V1248.6Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M964.3 1251h-1.4v-3.6a.8.8 0 0 0-.8-.6c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V1251.1h-1.4v-5.2h1.2v.8a2 2 0 0 1 2.6-.8 1.4 1.4 0 0 1 .8 1l.1 1v3.2Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M965.6 1251v-7h1.4v3.7l1.6-1.8h1.7l-1.8 1.9 2 3.3H969l-1.3-2.3-.7.6v1.7h-1.4Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M974.3 1249.4l1.3.3c-.1.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M981.5 1251h-1.3v-2.6l-.1-1a.8.8 0 0 0-.8-.6c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 2.5-.8 1.4 1.4 0 0 1 .9 1v4.2Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M982.3 1245.9h.8v-.4l.1-1c.1-.2.3-.4.6-.5a2 2 0 0 1 .9-.2c.4 0 .8 0 1.1.2l-.1 1-.7-.2-.4.2-.1.5v.4h1v1h-1v4.2H983v-4.1h-.8v-1.1Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M989.3 1249.4l1.4.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M991.9 1251v-7h1.3v7h-1.4Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M999.4 1251H998v-.7l-.7.7a2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 3.1 0v-2.6h1.4v7.2Zm-3.7-2.6c0 .5 0 1 .2 1.2.3.3.6.5 1 .5.3 0 .6-.1.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M1003.7 1249.4l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-1.5 0l-.2 1h2Z"
            data-ubhnchn="276"
            fill="#000"
          />
          <path
            d="M933.7 1257.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="278"
            fill="#007734"
          />
          <path
            d="M951.6 1254.2h9a7 7 0 1 1 0 14h-9a7 7 0 0 1 0-14Z"
            data-ubhnchn="278"
            fill="#007734"
          />
          <path
            d="m947.2 1262.8 1.7-.2c.1.6.3 1 .6 1.2.3.3.8.4 1.3.4s1 0 1.3-.3c.2-.3.4-.5.4-.8 0-.2 0-.4-.2-.6l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9a2.2 2.2 0 0 1-.4-3l1-.8c.5-.2 1.1-.3 1.8-.3 1 0 1.9.3 2.4.7.5.5.8 1.1.9 2h-1.8c0-.5-.2-.8-.5-1-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.2.4c-.2.1-.3.3-.3.5s0 .4.3.5c.2.2.7.4 1.5.6l2 .6.9.9c.2.3.3.8.3 1.3a2.5 2.5 0 0 1-1.6 2.4c-.5.2-1 .3-1.8.3-1.1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.1Z"
            data-ubhnchn="279"
            fill="#fff"
          />
          <path
            d="M964.2 1264v1.5h-5.8l.6-1.6c.3-.5 1-1.2 1.8-2 .8-.7 1.2-1.2 1.4-1.5.2-.3.4-.6.4-1 0-.3-.1-.6-.3-.8a1 1 0 0 0-.9-.3c-.3 0-.6.1-.8.3-.2.2-.3.6-.3 1l-1.7-.1c.1-1 .4-1.6 1-2 .5-.4 1.1-.6 1.9-.6.8 0 1.5.3 2 .7.5.5.7 1 .7 1.7 0 .4 0 .8-.2 1.1-.1.4-.4.7-.7 1.1l-1 1.1a17.4 17.4 0 0 0-1.4 1.4h3.3Z"
            data-ubhnchn="279"
            fill="#fff"
          />
          <path
            d="M759.1 410.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="279"
            fill="#fff"
          />
          <path
            d="M771.1 410.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="279"
            fill="#fff"
          />
          <path
            d="M783.1 410.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="279"
            fill="#fff"
          />
          <path
            d="m684.5 409.8-1.7-7.2h1.5l1 5 1.4-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.6l-1.4-5.3-1.4 5.3h-1.6Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M692.6 407.1c0-.4.1-.9.4-1.3.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.4-.3c-.4-.2-.7-.5-1-1-.2-.4-.3-.9-.3-1.5Zm1.4.1c0 .5.1 1 .4 1.2.2.3.5.4.9.4s.7-.1.9-.4c.2-.3.4-.7.4-1.2s-.2-.9-.4-1.2c-.2-.2-.5-.4-.9-.4s-.7.2-1 .4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M699 409.8v-7.2h1.4v7.2h-1.3Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M701.8 409.8v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M705.6 406.2l-1.2-.2c.1-.5.4-.9.7-1.1.3-.3.9-.4 1.5-.4s1 0 1.4.2l.6.6.2 1.2v2.6l.3.7h-1.4a5.4 5.4 0 0 1-.1-.6l-.8.6-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1l.2-.8.6-.5 1.1-.3 1.4-.4v-.1l-.2-.6-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2 0-.3.3-.3.4 0 .2 0 .4.2.5.2.2.3.3.6.3.2 0 .5-.1.7-.3l.3-.4v-1Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M714.9 409.8h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1l-.7.1a1 1 0 0 0-.4.6v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4.2.2.3.3.3.6V409.8Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M716.2 409.8v-7.2h1.4v3.8l1.6-1.8h1.7l-1.8 2 2 3.2h-1.6l-1.3-2.3-.6.6v1.7h-1.4Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M721.4 408.3l1.3-.2c.1.3.2.5.4.6.2.2.4.2.7.2.4 0 .7 0 .8-.2.2 0 .2-.2.2-.3v-.3l-.5-.2a7.4 7.4 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2s.1-.8.5-1.1c.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4-.1-.2-.4-.2-.6-.2l-.8.1-.2.3c0 .1 0 .2.2.3l1.2.4c.8.1 1.3.3 1.6.6.3.2.4.5.4 1s-.2.9-.6 1.2c-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M729.8 404.6v1.1h-1v2.8l.2.2h.8l.1 1c-.3.2-.7.2-1 .2l-.8-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1h.7v-1.1l1.4-.8v1.8h.9Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M732 409.8h-1.3v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.5-.2c.4 0 .7 0 1 .3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M735.7 406.2l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.1 1.2v1.6l.1 1 .2.7h-1.3a5.4 5.4 0 0 1-.2-.6l-.7.6-.9.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2 0-.3.3-.3.4 0 .2.1.4.3.5.1.2.3.3.5.3.3 0 .5-.1.7-.3.2-.1.3-.3.3-.4l.1-.7v-.3Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M740.2 409.8v-4.6l.1-1.5.7-.9c.3-.2.8-.3 1.3-.3.7 0 1.2.2 1.5.5.3.2.5.6.5 1l-.3 1-.3.5v.2l.1.3.6.7.7.8.1.8c0 .4-.1.8-.4 1.1-.4.4-.8.5-1.3.5-.3 0-.6 0-1-.2l-.6-.7 1-.6c0 .2.1.3.2.3l.3.1.3-.1.2-.4-.2-.4-.6-.7c-.6-.5-.9-.9-.9-1.2l.3-1 .3-.6v-.6a.6.6 0 0 0-.5-.2l-.4.1c-.2.1-.2.2-.3.4v5.7h-1.4Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M749.3 408.2l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-1 .2-1.6.7-2 .4-.6 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M698 386.4l1.4-.1c0 .5.2.8.5 1 .2.2.6.4 1 .4.5 0 .9-.1 1-.3.3-.2.4-.5.4-.7l-.1-.5-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.5 1-.7l1.3-.2c1 0 1.6.2 2 .6.5.4.8.9.8 1.5l-1.5.1c0-.4-.2-.6-.4-.8-.2-.2-.5-.2-.9-.2s-.7 0-1 .2l-.2.5c0 .1 0 .3.2.4.2.2.7.3 1.4.5a7 7 0 0 1 1.5.5c.4.2.6.4.8.7.2.3.3.7.3 1.2a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.7-.5-.4-.8-1-1-1.8Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M709.5 385l-1.3.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.3.9.3.2 0 .4 0 .6-.2.2-.1.3-.4.3-.7l1.4.2c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.4-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.6 0 1.1.2 1.5.5.4.2.7.6.8 1.2Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M712 381.6v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1v4.1H714V385l-.3-.4a.9.9 0 0 0-.5-.1c-.3 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.2 1v2.5h-1.3v-7.1h1.3Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M716.4 386c0-.4 0-.8.3-1.2.2-.5.5-.8 1-1 .4-.2.8-.4 1.3-.4a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.5-.7 2-.5.5-1.2.8-2 .8a3 3 0 0 1-1.3-.4c-.4-.2-.8-.5-1-.9-.2-.4-.3-1-.3-1.5Zm1.4.2c0 .5 0 .9.3 1.1.3.3.6.4 1 .4.3 0 .6 0 .8-.4.3-.2.4-.6.4-1.2 0-.5-.1-.9-.4-1.1-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.2-.3.6-.3 1.2Zm-.4-3.6v-1.1h1.1v1.1h-1.1Zm2 0v-1.1h1.2v1.1h-1.1Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M727.5 388.7h-1.4v-3.6l-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9l.8.2.6.4.2.6.1 1v3.1Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M730.3 381.6v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3V386l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.5h-1.4v-7.1h1.4Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M734.7 386l.3-1.2c.3-.5.6-.8 1-1 .4-.2.9-.4 1.4-.4a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.8-2 .8a3 3 0 0 1-1.3-.4c-.4-.2-.7-.5-1-.9-.2-.4-.3-1-.3-1.5Zm1.4.2c0 .5.1.9.4 1.1.2.3.5.4.9.4.3 0 .6 0 .9-.4.2-.2.3-.6.3-1.2 0-.5 0-.9-.3-1.1-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.2-.4.6-.4 1.2Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M741.1 388.7v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M743.4 388.7v-1l1.9-2.3.7-.7h-2.5v-1.1h4.3v1l-2 2.2-.6.8h2.7v1.1h-4.5Z"
            data-ubhnchn="280"
            fill="#000"
          />
          <path
            d="M759.1 299.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="281"
            fill="#fff"
          />
          <path
            d="M771.1 299.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="281"
            fill="#fff"
          />
          <path
            d="M759.1 329.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="281"
            fill="#fff"
          />
          <path
            d="M771.1 329.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="281"
            fill="#fff"
          />
          <path
            d="m781.2 329.4-1.7-7.2h1.5l1 5 1.4-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.6l-1.4-5.3-1.4 5.3h-1.6Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M789.6 323.5v-1.3h1.4v1.3h-1.4Zm0 6v-5.3h1.4v5.2h-1.4Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M792.4 329.4v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M796.5 322.2v2.7a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1l.1 1v3.1h-1.4v-3.7l-.3-.4a1.1 1.1 0 0 0-1.1 0 1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M804.3 327.8l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-1 .2-1.6.7-2 .4-.6 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M806.9 329.4v-7.2h1.3v7.2H807Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M809.5 324.2h1.3v.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2l.6.6.7-.6.9-.2c.3 0 .7 0 1 .2l.5.7.2 1v3.4h-1.4v-3c0-.5 0-.8-.2-1l-.5-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5l-.2 1.1v2.5h-1.3v-2.8l-.1-1c0-.2-.1-.3-.2-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.6.1 1 1 0 0 0-.4.5v3.6h-1.5v-5.2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M818 328l1.4-.3c0 .3.2.5.4.6.2.2.4.2.7.2.4 0 .6 0 .8-.2l.2-.3v-.3l-.6-.2a7.4 7.4 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2s.2-.8.6-1.1c.3-.3.9-.5 1.6-.5.7 0 1.2.1 1.6.3.3.3.6.6.7 1l-1.3.3c0-.2-.1-.3-.3-.4-.2-.2-.4-.2-.7-.2l-.7.1-.2.3.1.3 1.3.4c.8.1 1.3.3 1.6.6.2.2.4.5.4 1s-.2.9-.6 1.2c-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M825.4 329.4H824v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.4 1.2-.7-.3c-.2 0-.3 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M831.4 329.4v-.8a2 2 0 0 1-2.7.7l-.6-.7-.2-1.1v-3.3h1.4v3.7l.4.4.5.2a1 1 0 0 0 1-.7v-3.6h1.5v5.2h-1.3Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M835.5 322.2v2.7a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1l.1 1v3.1h-1.4v-3.7l-.3-.4a1.1 1.1 0 0 0-1.1 0 1 1 0 0 0-.4.5l-.1 1v2.6H834v-7.2h1.4Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M781.2 300.2l-1.7-7.1h1.5l1 4.9 1.4-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.6l-1.4-5.3-1.4 5.3h-1.6Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M789.6 294.3v-1.2h1.4v1.2h-1.4Zm0 6V295h1.4v5.1h-1.4Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M794.8 295v1.1h-1V299l.2.1.2.1.6-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.6 0-.8-.2a1 1 0 0 1-.4-.3l-.2-.5V296h-.7v-1h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M798.1 295v1.1h-1v2.1l.1.8.1.1.3.1.5-.1.1 1c-.3.2-.6.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.1-.5V296h-.7v-1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M802 298.6l1.5.2c-.2.5-.5.9-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm.2-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M809.4 300.2H808v-3.6c-.1-.3-.2-.4-.4-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5h-1.5v-5.1h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2l.5.4.3.6v4.1Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M811.8 296.6l-1.3-.2c.2-.5.4-.9.8-1.1.3-.2.8-.4 1.5-.4.6 0 1 .1 1.4.3.3.1.5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.7h-1.4a5 5 0 0 1-.2-.5l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5-.1-.2-.3-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3-.8.2-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M819.7 300.2v-.7a2 2 0 0 1-2.7.7l-.5-.7-.2-1.2v-3.2h1.4V298.8l.3.4.5.1a1 1 0 0 0 1-.7l.1-1.4v-2.1h1.4v5.1h-1.3Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M692.2 258.9l-1.8-7.2h1.5l1.1 5 1.3-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.5l-1.5-5.4-1.4 5.4h-1.5Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M701.6 255.3l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a4.9 4.9 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8l.6-.6 1-.3c.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6-.1-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V256.4Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M706.1 253v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M713.7 258.9h-1.3v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-.8.2 2 2 0 0 1-1.6-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.5v7.2Zm-3.7-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.8.1c.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M715 253.7h1.2v.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2l.6.6c.2-.3.4-.5.7-.6.3-.2.5-.2.8-.2.4 0 .7 0 1 .2.3.2.5.4.6.7l.1 1v3.4h-1.3v-3c0-.5 0-.8-.2-1-.1-.2-.3-.3-.6-.3a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5v3.6H718V256l-.1-1-.2-.3a.7.7 0 0 0-.5 0 1 1 0 0 0-.5 0 1 1 0 0 0-.4.6l-.1 1v2.6h-1.4v-5.2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M725 255.3l-1.3-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.5-.4s1.1 0 1.4.2c.3.1.5.3.6.5.2.3.2.7.2 1.3v2.6l.3.7h-1.3a4.9 4.9 0 0 1-.2-.6l-.8.5-.8.2c-.6 0-1-.2-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8 0-.3.3-.4.5-.6l1.1-.3c.7 0 1.1-.2 1.4-.3v-.1l-.2-.6-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.8 1-.9.3-.7.2c-.2.2-.3.3-.3.5s0 .4.2.5c.2.2.4.2.6.2.2 0 .5 0 .7-.2.2-.1.3-.3.3-.5V256.4Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M734.2 258.9h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V259h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-1l.9.2.5.5c.2.1.3.3.3.5v4.2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M740.3 258.9h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.3.5l-.2 1.2v2.4h-1.3v-5.2h1.2v.8a2 2 0 0 1 1.8-1l.8.2.6.5.2.5.1 1v3.2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M741.2 257.4l1.4-.2c0 .3.2.5.3.6l.8.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.3.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M747.1 257v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M732.8 268.9v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M739 268.9v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1v-3.3h1.3v2.4l.1 1.3c0 .2.1.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4v-2.2h1.4v5.2H739Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M741.2 267.4l1.4-.2c0 .3.2.5.3.6l.8.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.3.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M749.6 263.7v1h-.9V267.7l.2.2h.7l.2 1-1.1.2-.7-.1a1 1 0 0 1-.4-.4l-.2-.5v-3.2h-.7v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="284"
            fill="#000"
          />
          <path
            d="M759.1 198.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="285"
            fill="#fff"
          />
          <path
            d="M759.1 228.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="285"
            fill="#fff"
          />
          <path
            d="M882.8 343.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="285"
            fill="#fff"
          />
          <path
            d="M843.5 366a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="285"
            fill="#fff"
          />
          <path
            d="M852 374.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="285"
            fill="#fff"
          />
          <path
            d="M893.4 342.7h2.8l1.3.1c.3 0 .5.1.7.3.3.1.4.3.6.6l.2.8c0 .4 0 .7-.3 1l-.7.6c.4.1.8.3 1 .6.2.3.4.7.4 1.1a2.1 2.1 0 0 1-.9 1.7 2 2 0 0 1-1 .3h-4.1v-7Zm1.4 1.2v1.7h2c.3 0 .4-.2.6-.3l.2-.6c0-.2 0-.4-.2-.5a.8.8 0 0 0-.5-.3h-2.1Zm0 2.9v1.9h2.3l.6-.4.2-.6c0-.2 0-.4-.2-.5a.9.9 0 0 0-.4-.3 5 5 0 0 0-1.3-.1h-1.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M900.6 349.9v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M904.4 346.3l-1.3-.2c.2-.5.4-1 .8-1.2.3-.2.8-.3 1.5-.3.6 0 1 0 1.3.2.3.1.6.3.7.5l.2 1.3v2.6l.3.7h-1.4a4.9 4.9 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1c-.2.2-.4.2-.8.3l-.8.2c-.2.2-.2.3-.2.5s0 .4.2.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V347.4Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M913.6 349.9h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.8.2.6.5.3.5v4.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M915 349.9v-7.2h1.4v3.8l1.6-1.8h1.6l-1.7 1.9 1.9 3.3h-1.5l-1.3-2.3-.6.6v1.7H915Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M923.6 348.2l1.4.3c-.2.5-.5.8-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.2 1.8.7c.4.6.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M930.9 349.9h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.2c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V350H926v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.9.2.5.5c.2.1.3.3.3.5v4.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M932.2 349.9v-7.2h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.4.5l-.7-.7v.8h-1.3Zm1.4-2.7c0 .5 0 1 .2 1.2.3.3.6.5 1 .5.3 0 .5-.1.8-.4.2-.2.3-.6.3-1.2s-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M941.8 349.9v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1v-3.3h1.3v2.4l.1 1.3c0 .2.1.3.3.4l.5.2a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M945.8 349.9h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5V350Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M948.3 350.2l1.5.2.2.4.6.1.8-.1.3-.4V349c-.3.6-.9.9-1.5.9a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-1 .2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.6.8v-.7h1.2v4.6l-.1 1.4-.4.7-.8.4-1.1.2c-.9 0-1.5-.2-1.9-.5-.4-.3-.5-.6-.5-1.1v-.2Zm1.2-3c0 .5 0 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M857.6 383.5v-7.2h2.3l1.7.1c.4.1.8.4 1 .7.3.4.5.8.5 1.4 0 .4-.1.8-.3 1.1a2 2 0 0 1-.6.7 2 2 0 0 1-.7.4H859v2.8h-1.4Zm1.4-6v2h2a1 1 0 0 0 .6-1c0-.2 0-.4-.2-.6a1 1 0 0 0-.6-.3H859Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M865.3 379.9l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a4.9 4.9 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.2-.5-.3-.2-.5-.6-.5-1 0-.3 0-.6.2-.8l.6-.6 1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5-.1-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V381Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M874.5 383.5h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M875.9 383.5v-7.2h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 1.9 3.3h-1.5L878 381l-.6.7v1.7h-1.4Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M881.2 380.8c0-.5.1-.9.3-1.3.3-.5.6-.8 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .7-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3l-1-1c-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M888.6 383.5l-1.6-5.2h1.3l1 3.4.8-3.4h1.4l.8 3.4 1-3.4h1.4l-1.7 5.2h-1.3l-.9-3.4-.9 3.4h-1.3Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M895.2 381.6v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M898.8 383.5v-7.2h1.4v2.8h2.8v-2.8h1.5v7.2H903v-3.2h-2.8v3.2h-1.4Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M909 381.8l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4H907c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M911.5 377.6v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M919 383.5h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M923.4 381.8l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.1.4.3.7.3l.6-.2.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2.1Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M927.3 383.5h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M929.4 382l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.3-.6-.6-.6-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.5.3c.4.2.6.6.8 1l-1.3.3c0-.2-.2-.4-.4-.5l-.6-.2-.8.2-.1.3v.2l1.4.4 1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M940.2 383.5h-1.3v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-.9.2 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 3.1 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7 0c.2-.2.3-.6.3-1.1 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.6-.4 1.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M941.2 380.8c0-.5.1-.9.4-1.3.2-.5.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 2a3 3 0 0 1-3.3.5l-1-1c-.2-.5-.3-1-.3-1.6Zm1.4 0c0 .6.2 1 .4 1.3.2.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.7.1-.9.4-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M949 383.5h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="289"
            fill="#000"
          />
          <path
            d="M951 378.3h.7v-.4c0-.4 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.7-.2c-.2 0-.3 0-.4.2l-.1.5v.4h1v1h-1v4.2h-1.4v-4.1h-.8v-1.1Z"
            data-ubhnchn="290"
            fill="#000"
          />
          <path
            d="M833.2 409.3v-7.1h4.1c.4.2.7.4 1 .8.3.3.4.8.4 1.4 0 .4 0 .8-.2 1a2 2 0 0 1-.6.8 2 2 0 0 1-.8.3l-1.5.1h-1v2.7h-1.4Zm1.5-6v2.1H836.6a1 1 0 0 0 .6-1c0-.3 0-.5-.2-.6a1 1 0 0 0-.6-.4h-1.7Z"
            data-ubhnchn="290"
            fill="#000"
          />
          <path
            d="M841 405.7l-1.3-.2c.1-.5.4-.9.7-1.1.3-.2.8-.4 1.5-.4.6 0 1 .1 1.4.3.3.1.5.3.6.5l.2 1.2v2.6c0 .3.2.5.3.7H843a4.9 4.9 0 0 1-.1-.5l-.8.5-.8.2c-.6 0-1-.2-1.3-.5-.3-.3-.5-.6-.5-1l.2-.9.6-.5 1.1-.3 1.4-.3v-.2l-.2-.5c-.2-.2-.4-.2-.8-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.9.3c-.4 0-.6.1-.7.2-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .4 0 .7-.3l.3-.4v-1Z"
            data-ubhnchn="290"
            fill="#000"
          />
          <path
            d="M850.2 409.3h-1.4v-3.6c-.1-.3-.2-.4-.4-.5a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.5v-5.1h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2l.5.4.3.6v4.1Z"
            data-ubhnchn="290"
            fill="#000"
          />
          <path
            d="M851.5 409.3v-7.1h1.4v3.8l1.6-1.8h1.7l-1.8 1.8 2 3.3h-1.6l-1.3-2.3-.6.7v1.6h-1.4Z"
            data-ubhnchn="290"
            fill="#000"
          />
          <path
            d="M856.8 406.7c0-.5.1-1 .4-1.4.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.8-1.9.8a3 3 0 0 1-1.4-.4c-.4-.2-.7-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .6.1 1 .4 1.2.2.3.5.4.9.4s.7-.1.9-.4c.2-.2.4-.6.4-1.2 0-.5-.2-.9-.4-1.1-.2-.3-.5-.4-1-.4-.3 0-.6 0-.8.4-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="290"
            fill="#000"
          />
          <path
            d="M864.2 409.3l-1.6-5.1h1.3l1 3.4.9-3.4h1.3l.9 3.4 1-3.4h1.3l-1.7 5.1h-1.3l-.9-3.3-.9 3.3h-1.3Z"
            data-ubhnchn="290"
            fill="#000"
          />
          <path
            d="m835.6 419.8 1.7-.1c.1.5.3 1 .6 1.2.3.3.7.4 1.3.4.5 0 1-.1 1.2-.3.3-.3.5-.6.5-.9l-.2-.5-.6-.4-1.4-.3c-1-.3-1.6-.5-2-.9a2.2 2.2 0 0 1-.4-3c.2-.3.6-.6 1-.8.5-.2 1.1-.3 1.8-.3 1 0 1.8.2 2.4.7.5.5.8 1.1.9 1.9h-1.8c0-.4-.2-.7-.5-.9-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.2.3c-.2.2-.3.3-.3.6 0 .2 0 .3.2.5l1.6.6 2 .6.9.9c.2.3.3.8.3 1.3a2.5 2.5 0 0 1-1.6 2.4c-.5.2-1.1.3-1.8.3-1.1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="292"
            fill="#fff"
          />
          <path
            d="M848.4 418a2 2 0 0 1-.9-.8 2 2 0 0 1-.3-1c0-.6.3-1.2.7-1.6.4-.4 1-.6 1.9-.6.8 0 1.5.2 2 .6.4.4.6 1 .6 1.6a1.9 1.9 0 0 1-1.2 1.8c.5.2.8.5 1 .8.3.4.5.8.5 1.3 0 .8-.3 1.4-.8 2-.5.4-1.2.7-2 .7a3 3 0 0 1-2-.6c-.6-.5-.9-1.2-.9-2 0-.5.1-1 .4-1.3.2-.4.6-.7 1-1Zm.4-1.7c0 .4 0 .6.3.8.1.2.4.3.7.3.3 0 .6-.1.8-.3l.2-.8c0-.3 0-.5-.2-.7a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7Zm-.2 3.7c0 .5.1.8.4 1 .2.3.5.5.9.5.3 0 .6-.2.8-.4.2-.3.3-.6.3-1 0-.5 0-.8-.3-1-.2-.3-.5-.4-.9-.4s-.7.1-.9.4c-.2.3-.3.6-.3 1Z"
            data-ubhnchn="292"
            fill="#fff"
          />
          <path
            d="M853.7 420.4l1.7-.2c0 .4.2.7.4 1a1.1 1.1 0 0 0 1.7-.2c.2-.2.3-.7.3-1.2 0-.6-.1-1-.3-1.2-.3-.3-.6-.4-1-.4s-.9.2-1.2.6l-1.4-.2.9-4.4h4.3v1.5h-3l-.3 1.5c.3-.2.7-.3 1.1-.3.7 0 1.3.2 1.9.8.5.5.7 1.2.7 2 0 .7-.2 1.4-.6 2-.6.7-1.3 1-2.3 1-.8 0-1.5-.1-2-.6-.5-.4-.8-1-.9-1.7Z"
            data-ubhnchn="292"
            fill="#fff"
          />
          <path
            d="M822.7 235a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="292"
            fill="#fff"
          />
          <path
            d="M848.9 261.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="292"
            fill="#fff"
          />
          <path
            d="M796.6 208.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="292"
            fill="#fff"
          />
          <path
            d="M802.1 194.3h4.1l.8.4c.2.1.4.3.5.6.2.2.2.5.2.8a1.7 1.7 0 0 1-1 1.6c.5.1.8.3 1 .6.3.3.4.7.4 1.1a2.1 2.1 0 0 1-.9 1.7 2 2 0 0 1-1 .3h-4.1v-7Zm1.4 1.2v1.7h2c.3 0 .5-.2.6-.3.2-.2.2-.3.2-.6l-.1-.5a.8.8 0 0 0-.6-.3h-2.1Zm0 2.9v1.9h2.4l.5-.4.2-.6c0-.2 0-.4-.2-.5a.9.9 0 0 0-.4-.3 5 5 0 0 0-1.3-.1h-1.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M812.3 199.8l1.4.3c-.2.5-.5.8-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M816.2 201.5h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M818.6 201.8l1.6.2c0 .2 0 .3.2.4l.6.1.8-.1.3-.4v-1.4c-.4.6-.9.9-1.5.9a2 2 0 0 1-1.7-1 3 3 0 0 1-.4-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.5-.6c.7 0 1.2.3 1.6.8v-.7h1.3v4.6l-.1 1.4c-.1.3-.3.6-.5.7-.1.2-.4.3-.7.4l-1.1.2c-1 0-1.6-.2-2-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.3-3c0 .5 0 1 .3 1.2.2.2.5.4.8.4.3 0 .6-.2.8-.4.2-.3.4-.7.4-1.2s-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M824.3 196.3h.7v-.4c0-.4 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.2c-.2 0-.4 0-.5.2l-.1.5v.4h1v1h-1v4.2H825v-4.1h-.7v-1.1Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M831.2 199.8l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M833.8 201.5v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M841.3 201.5H840v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-.9.2 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .3-1.6.7-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2.2.3.5.5.9.5.3 0 .6-.1.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M845.7 199.8l1.3.3c-.1.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M828.3 224.9l1.4-.1c.1.4.3.8.6 1 .2.2.6.3 1 .3.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.6-.3-1.1-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.5.9-.7.4-.2.9-.3 1.4-.3 1 0 1.6.2 2 .6.5.4.7 1 .8 1.6h-1.5c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-.9-.3s-.8.1-1 .3l-.2.4c0 .2 0 .4.2.5l1.3.5a7 7 0 0 1 1.6.5c.3.1.6.4.8.7.2.3.3.7.3 1.1a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-1 0-1.6-.2-2-.6-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M839.9 223.6l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2 0 .7 0 1 .3 1.3.2.3.5.4.8.4.3 0 .5 0 .7-.2l.3-.8 1.4.3c-.2.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.9-.7-.4-.5-.6-1.1-.6-2 0-.8.2-1.5.6-2 .5-.4 1.1-.7 1.9-.7.6 0 1.1.2 1.5.4.4.3.6.7.8 1.3Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M842.3 220v2.7a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5v3.6h-1.5v-7.1h1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M846.7 224.6c0-.5.1-1 .4-1.4.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.3-.3-.4-.9-.4-1.4Zm1.4 0c0 .5.2 1 .4 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4-.3 0-.6.2-.9.4-.2.3-.4.7-.4 1.2Zm-.4-3.5V220h1.2v1.2h-1.2Zm2.1 0V220h1.2v1.2h-1.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M857.9 227.2h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4V222h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4l.3.6V227.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M858.7 222h.7v-.4c0-.4 0-.7.2-1l.5-.5a2 2 0 0 1 1-.2l1 .2-.1 1-.6-.1-.5.1V222h1v1.1h-1v4.1h-1.5v-4h-.7V222Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M862.6 227.2v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M865.4 221.3v-1.2h1.4v1.2h-1.4Zm0 6V222h1.4v5.2h-1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M871.2 225.6l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M873.7 227.2v-4.6c0-.7 0-1.2.2-1.5 0-.4.3-.6.6-.8.4-.3.8-.4 1.3-.4.7 0 1.2.2 1.5.5.4.2.5.6.5 1 0 .3 0 .6-.3 1l-.3.5v.2l.1.3.6.7.7.8.2.8c0 .4-.2.8-.5 1.2-.3.3-.8.4-1.3.4-.3 0-.6 0-.9-.2-.3-.2-.5-.4-.6-.7l1-.5.1.2.3.1.4-.1.1-.4-.1-.4-.7-.7c-.6-.5-.8-.9-.8-1.2 0-.2 0-.5.3-1l.3-.6v-.3c0-.1 0-.2-.2-.3a.6.6 0 0 0-.4-.2l-.4.1-.2.4-.1 1v4.7h-1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M859 250v-7.2h2.1l1.3 4.9 1.3-4.9h2.1v7.2h-1.3v-5.7l-1.4 5.7h-1.4l-1.4-5.7v5.7h-1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M870.7 250v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1v-3.3h1.3v2.4l.1 1.3c0 .2.1.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4v-2.2h1.4v5.2h-1.3Zm-2.7-6.1v-1.2h1.2v1.2H868Zm2 0v-1.2h1.3v1.2H870Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M874.8 242.8v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1.1l.1 1v3h-1.4v-3.7c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M879.5 250v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M885.3 248.3l1.4.2c-.2.5-.5 1-.9 1.2-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M892.6 250h-1.4v-3.7c-.2-.2-.2-.4-.4-.4a.8.8 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5V250h-1.5v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.9.1.5.4.3.6v4.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M893.9 250v-7.2h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.7-.7v.8h-1.3Zm1.4-2.7c0 .5 0 .9.2 1.2.3.3.6.5 1 .5.3 0 .5-.1.7-.4.3-.2.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M903 248.3l1.4.2c-.1.5-.4 1-.8 1.2-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm.2-1.4c0-.4-.2-.7-.4-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M910.2 246.3l-1.4.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.3 1 1 0 0 0-.8.4c-.2.2-.4.6-.4 1.2s.2 1 .4 1.3c.2.2.4.4.8.4.3 0 .5-.1.6-.3.2-.1.3-.4.4-.7l1.3.2c-.1.6-.4 1.1-.8 1.4-.4.3-.9.5-1.6.5-.7 0-1.3-.3-1.8-.7-.4-.5-.7-1.2-.7-2 0-.9.3-1.5.7-2 .5-.5 1-.7 1.9-.7.6 0 1 .1 1.5.4.3.2.6.7.8 1.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M911.2 250v-7.2h1.3v3.8l1.6-1.8h1.7l-1.7 1.9 1.9 3.3h-1.5l-1.3-2.4-.7.7v1.7h-1.3Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M916.6 248v-1.3h2.7v1.4h-2.7Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M859 260v-7.2h2.1l1.3 4.9 1.3-4.9h2.1v7.2h-1.3v-5.7l-1.4 5.7h-1.4l-1.4-5.7v5.7h-1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M867 257.3c0-.5 0-.9.3-1.3.2-.4.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.3-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6 0 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Zm-.4-3.4v-1.2h1.1v1.2H868Zm2 0v-1.2h1.2v1.2h-1.1Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M878.1 260h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.2c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M884 256.3l-1.3.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.4.9.4l.6-.3c.2-.1.3-.4.4-.7l1.3.2c-.1.6-.4 1.1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.2-1.5.7-2 .4-.5 1-.7 1.8-.7.7 0 1.2.1 1.5.4.4.2.7.7.8 1.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M886.4 252.8v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1.1v4h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M891 254.8h1.4v.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .8.2.3.1.5.3.6.6.3-.3.5-.5.8-.6.2-.2.5-.2.8-.2.4 0 .7 0 1 .2l.6.7.1 1v3.4h-1.4v-3l-.1-1c-.1-.2-.3-.3-.6-.3a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5l-.1 1v2.6h-1.4V256l-.3-.3a.7.7 0 0 0-.4 0 1 1 0 0 0-1 .7v3.5H891v-5.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M903.5 260v-.8a2 2 0 0 1-2.7.7l-.6-.7-.2-1.1v-3.3h1.4v3.7l.4.4.5.1a1 1 0 0 0 1-.6v-3.6h1.5v5.2h-1.3Zm-2.7-6.1v-1.2h1.1v1.2h-1.1Zm2 0v-1.2h1.3v1.2h-1.2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M907.6 252.8v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1.1l.1 1v3h-1.4v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M912.3 260v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M918 258.3l1.4.2c-.1.5-.4 1-.8 1.2-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm.2-1.4c0-.4-.2-.7-.4-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="293"
            fill="#000"
          />
          <path
            d="M702.5 228.3V221h1.5v2.8h2.8v-2.8h1.5v7.2h-1.5V225H704v3.2h-1.5Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M712.7 226.6l1.4.2c-.2.5-.4 1-.8 1.2-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M716.6 228.3h-1.4V223h1.3v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.2 0-.3 0-.4.2-.2 0-.3.3-.4.5V228.3Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M719 223h1.4v.8a2 2 0 0 1 1.6-.8c.3 0 .6 0 .8.2.3.1.5.3.6.6.3-.3.5-.5.8-.6.2-.2.5-.2.8-.2.4 0 .7 0 1 .2l.6.7.1 1v3.4h-1.4v-4c-.2-.2-.4-.3-.7-.3a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-3.9l-.3-.3a.7.7 0 0 0-.4 0 1 1 0 0 0-.6 0 1 1 0 0 0-.3.6l-.1 1v2.6H719V223Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M727.6 226.8l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.3-.6-.6-.6-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2 0 1.6.3c.3.2.5.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.2c.1.1.6.3 1.3.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.3.3-1 .5-1.7.5s-1.3-.2-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M738.4 228.3h-1.3v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-1 .2-1.6.7-2a2 2 0 0 1 3 0V221h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M739.4 225.6c0-.5.2-.9.4-1.3s.5-.8 1-1c.3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 2a3 3 0 0 1-3.3.5l-1-1c-.1-.5-.3-1-.3-1.6Zm1.5 0c0 .6 0 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M747.2 228.3h-1.4V223h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.3 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M749.2 223h.7v-.3c0-.4 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.2c-.2 0-.4 0-.5.2l-.1.5v.4h1v1h-1v4.2h-1.4v-4.1h-.7V223Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M713.1 198.3V191h5v1.2h-3.6v1.7h3v1.2h-3v3h-1.4Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M720.5 198.3h-1.4V193h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2c-.2 0-.3 0-.5.2l-.3.5V198.3Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M722.8 195.6c0-.5 0-.9.3-1.3.2-.4.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6 0 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M730.6 191.1v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1.1l.1 1v3h-1.4v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6h-1.4V191h1.4Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M740 198.3h-1.3v-2.7l-.1-1a.8.8 0 0 0-.8-.6c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4V193h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M742.4 194.7l-1.2-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.5-.4.7 0 1.1 0 1.4.2.3.1.5.3.6.5.2.3.2.7.2 1.3v2.6l.3.7h-1.3a5 5 0 0 1-.2-.6l-.8.5-.8.2c-.5 0-1-.2-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3c.7 0 1.1-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1-.9.3-.7.2c-.2.2-.3.3-.3.5l.2.5c.2.2.4.2.6.2.2 0 .5 0 .7-.2.2-.1.3-.3.3-.5V195.8Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M750.4 198.3v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1V193h1.3v2.4l.1 1.3c0 .2.1.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4V193h1.4v5.2h-1.3Z"
            data-ubhnchn="296"
            fill="#000"
          />
          <path
            d="M669.2 168.3V161h1.4v2.8h2.8v-2.8h1.5v7.2h-1.5V165h-2.8v3.2h-1.4Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M676 165.6c0-.5.2-.9.4-1.3s.5-.8 1-1c.4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.5 0c0 .6 0 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M683.9 161.1v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1.1l.1 1v3h-1.4v-3.7l-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6h-1.4V161h1.4Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M691.6 166.6l1.4.3c-.2.5-.5.8-.9 1-.3.4-.8.5-1.4.5-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M698.9 168.3h-1.4v-3.7a.8.8 0 0 0-.8-.6c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V168.3h-1.4V163h1.2v.7a2 2 0 0 1 1.7-.8l.9.1.5.4.3.6v4.2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M703 168.3V161h1.5l3 4.8V161h1.3v7.2h-1.5l-2.9-4.7v4.7h-1.3Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M713.3 166.6l1.4.3c-.2.5-.5.8-.9 1-.4.4-.8.5-1.4.5-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M719.3 168.3v-.8a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1V163h1.4v3.7l.3.4.6.1a1 1 0 0 0 1-.6V163h1.4v5.2h-1.2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M725 166.6l1.3.3c-.1.5-.4.8-.8 1-.4.4-.8.5-1.4.5-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4H723c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M732.3 168.3h-1.4v-2.7l-.1-1a.8.8 0 0 0-.8-.6c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4V163h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M738.4 168.3h-1.3v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-1 .2-1.6.7-2a2 2 0 0 1 3 0V161h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M739.4 165.6c0-.5.2-.9.4-1.3s.5-.8 1-1c.3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 2a3 3 0 0 1-3.3.5l-1-1c-.1-.5-.3-1-.3-1.6Zm1.5 0c0 .6 0 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M747.2 168.3h-1.4V163h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.3 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M749.2 163h.7v-.3c0-.4 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.2c-.2 0-.4 0-.5.2l-.1.5v.4h1v1h-1v4.2h-1.4v-4.1h-.7V163Z"
            data-ubhnchn="298"
            fill="#000"
          />
          <path
            d="M686.2 120.2h2.9l1.2.1c.3 0 .5.2.8.3l.5.6c.2.3.2.5.2.8 0 .4 0 .7-.2 1-.2.2-.5.5-.8.6.5.1.8.3 1 .6.3.3.4.7.4 1.1a2.1 2.1 0 0 1-.9 1.7 2 2 0 0 1-1 .3l-1.7.1h-2.4v-7.2Zm1.4 1.2v1.7h2c.3 0 .5-.2.6-.3.2-.1.2-.3.2-.6 0-.2 0-.4-.2-.5a.8.8 0 0 0-.5-.2h-2.1Zm0 2.9v1.9h2.4c.2 0 .4-.2.5-.3l.2-.6c0-.3 0-.4-.2-.6a.9.9 0 0 0-.4-.3 5 5 0 0 0-1.3-.1h-1.2Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M693.4 121.5v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M697.5 127.4H696v-5.2h1.3v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 .9.3l-.4 1.1-.7-.2c-.2 0-.3 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M700 127.4v-7.2h1.4v3.8l1.6-1.8h1.7l-1.8 2 2 3.2h-1.6l-1.3-2.3-.6.6v1.7H700Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M708.6 125.7l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4l-.2.9h2Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M716 127.4h-1.5v-3.7a.8.8 0 0 0-.8-.6l-.7.2a1 1 0 0 0-.3.6l-.1 1.1v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-1c.3 0 .5.1.8.3.2 0 .4.2.6.4l.2.5.1 1v3.2Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M718.3 127.4l-1.7-5.2h1.4l1 3.4.8-3.4h1.4l.8 3.4 1-3.4h1.4l-1.7 5.2h-1.3l-1-3.3-.8 3.3h-1.3Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M728 125.7l1.5.3c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.8c.4.5.6 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm.2-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M732 127.4h-1.4v-5.2h1.3v.7l.6-.6c.1-.2.3-.2.5-.2.4 0 .7 0 1 .3l-.5 1.1-.6-.2c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M739.3 127.4H738v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-.9.2-1.6.6-2a2 2 0 0 1 3.1 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.2.3-.6.3-1.2s0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M743.7 125.7l1.3.3c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="M747.5 127.4h-1.3v-5.2h1.2v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 1 .3l-.5 1.1-.7-.2c-.1 0-.3 0-.4.2-.2 0-.3.3-.4.6v3.3Z"
            data-ubhnchn="300"
            fill="#000"
          />
          <path
            d="m728.2 138.5 1.7-.1c0 .5.3 1 .6 1.2.3.3.7.4 1.2.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5l-.6-.4-1.4-.3c-.9-.3-1.6-.6-2-.9a2.2 2.2 0 0 1-.3-3c.2-.3.6-.6 1-.8.5-.2 1-.3 1.7-.3 1 0 1.9.2 2.4.7.6.5.9 1 1 1.9h-1.8c-.1-.4-.3-.7-.5-.9-.2-.2-.6-.3-1.1-.3a2 2 0 0 0-1.2.3c-.2.2-.3.3-.3.6 0 .2.1.3.3.5.2.2.7.3 1.6.5l1.9.7 1 .8c.1.4.3.9.3 1.4a2.5 2.5 0 0 1-1.6 2.3c-.5.3-1.1.4-1.9.4-1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="302"
            fill="#fff"
          />
          <path
            d="M741 136.7a2 2 0 0 1-1-.8 2 2 0 0 1-.2-1c0-.6.2-1.2.7-1.6.4-.4 1-.6 1.9-.6.8 0 1.4.2 1.9.6.4.4.6 1 .6 1.6a1.9 1.9 0 0 1-1.1 1.8c.4.2.8.4 1 .8.3.4.4.8.4 1.3 0 .8-.2 1.4-.7 2-.6.4-1.2.7-2 .7a3 3 0 0 1-2-.7c-.6-.4-1-1.1-1-2 0-.4.2-.8.4-1.2.2-.4.6-.7 1.1-1Zm.3-1.7c0 .3.1.6.3.8.2.2.5.3.8.3.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.3-.1-.5-.3-.7a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3 1 1 0 0 0-.3.7Zm-.1 3.7c0 .5.1.8.3 1 .3.3.6.4 1 .4.2 0 .5 0 .8-.3.2-.3.3-.6.3-1 0-.5-.1-.8-.4-1-.2-.3-.5-.4-.8-.4-.4 0-.7.1-1 .4l-.2.9Z"
            data-ubhnchn="302"
            fill="#fff"
          />
          <path
            d="M759.1 101.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="302"
            fill="#fff"
          />
          <path
            d="M704.8 93.6h4.1l.7.3.6.6.2.9c0 .3 0 .6-.3 1l-.7.5c.4.2.8.4 1 .7.2.3.4.7.4 1a2.1 2.1 0 0 1-.9 1.8 2 2 0 0 1-1 .3h-4.1v-7.1Zm1.4 1.2v1.6h2l.6-.3.2-.5c0-.2 0-.4-.2-.5a.8.8 0 0 0-.5-.3h-2.1Zm0 2.8v2h1.3l1-.1.6-.3.2-.6c0-.2 0-.4-.2-.6a.9.9 0 0 0-.5-.3 5 5 0 0 0-1.2 0h-1.2Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M711.7 98c0-.4 0-.8.3-1.2.2-.5.5-.8 1-1 .4-.3.8-.4 1.3-.4a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.8-1.9.8a3 3 0 0 1-1.3-.4c-.5-.2-.8-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4.1c0 .6 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.2.4-.6.4-1.2 0-.5-.1-.9-.4-1.1-.2-.3-.5-.4-.9-.4-.3 0-.6 0-.9.4-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M719.4 100.7H718v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.6-.2.9.3-.4 1.2c-.3-.2-.5-.2-.7-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M721.8 101l1.6.3c0 .2.1.3.2.3l.6.2c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.4.6-.9.8-1.5.8a2 2 0 0 1-1.7-.8 3 3 0 0 1-.4-1.8c0-.9.2-1.5.6-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.9v-.7h1.3v4.6l-.1 1.4-.5.7c-.1.2-.4.3-.7.4l-1.1.1c-1 0-1.5-.1-2-.4-.3-.3-.5-.7-.5-1.2v-.1Zm1.3-3c0 .6 0 1 .3 1.2.2.3.5.4.8.4.3 0 .6-.1.8-.4.3-.2.4-.6.4-1.1 0-.6-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M727.6 99.3l1.4-.2.3.6.8.2.8-.2.2-.4-.1-.3-.5-.1a7.4 7.4 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.2 1.6.4c.3.2.5.6.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.4 0-.6 0-.8.2l-.1.3.1.2 1.3.4 1.5.6c.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.3.4-1 .6-1.7.6s-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M738.4 100.7h-1.3v-.7a2 2 0 0 1-.7.6 2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-.9.2-1.5.7-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.4.6-.4 1.1Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M739.4 98c0-.4.2-.8.4-1.2.2-.5.5-.8 1-1 .3-.3.8-.4 1.3-.4a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.8-1.9.8a3 3 0 0 1-1.3-.4c-.5-.2-.8-.5-1-1-.2-.3-.4-.8-.4-1.4Zm1.5.1c0 .6 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.2.4-.6.4-1.2 0-.5-.1-.9-.4-1.1-.2-.3-.5-.4-.9-.4-.3 0-.6 0-.9.4-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M747.2 100.7h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M749.2 95.6h.7v-.4c0-.5 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2l1 .1-.1 1h-1.1l-.1.6v.4h1v1h-1v4.1h-1.4v-4h-.7v-1.1Z"
            data-ubhnchn="303"
            fill="#000"
          />
          <path
            d="M718.1 73.7v-7h1.5v5.8h3.6v1.2h-5Z"
            data-ubhnchn="305"
            fill="#000"
          />
          <path
            d="M727.2 72l1.4.3c-.2.5-.5.9-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.3c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="305"
            fill="#000"
          />
          <path
            d="M731.1 66.6v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3V70l-.3-.4a.9.9 0 0 0-.5-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.3.5l-.2 1v2.5h-1.3v-7.1h1.3Z"
            data-ubhnchn="305"
            fill="#000"
          />
          <path
            d="M740.6 73.7h-1.4v-3.6a.8.8 0 0 0-.8-.6c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4v-5.1h1.2v.7a2 2 0 0 1 1.7-.9c.4 0 .6 0 .9.2l.5.4.3.6v4.1Z"
            data-ubhnchn="305"
            fill="#000"
          />
          <path
            d="M742 67.9v-1.3h1.4v1.3H742Zm0 5.8v-5.1h1.4v5.1H742Z"
            data-ubhnchn="305"
            fill="#000"
          />
          <path
            d="M747.1 68.6v1h-.9V72.5l.2.2h.2l.5-.1.2 1c-.4.2-.7.3-1.1.3-.3 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="305"
            fill="#000"
          />
          <path
            d="M747.5 73.7v-1l2-2.3.7-.7h-2.5v-1.1h4.3v1l-2 2.2-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="305"
            fill="#000"
          />
          <path
            d="M689.8 30.3c0-.8.1-1.4.3-1.9l.7-1 1-.6a4 4 0 0 1 1.5-.3c1 0 1.9.4 2.5 1 .6.7 1 1.6 1 2.7 0 1.2-.4 2.1-1 2.8-.6.6-1.5 1-2.5 1s-2-.4-2.6-1c-.6-.7-.9-1.6-.9-2.7Zm1.5 0c0 .7.2 1.3.6 1.8.3.4.8.6 1.4.6.6 0 1-.2 1.4-.6.4-.4.5-1 .5-1.9 0-.8-.1-1.4-.5-1.8-.4-.4-.8-.6-1.4-.6-.6 0-1.1.2-1.5.6-.3.4-.5 1-.5 1.8Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M699.2 33.8h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M702.8 30.2l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.2 1.2v2.6l.2.7H705a5 5 0 0 1-.2-.6l-.7.6-.9.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2 0-.2.3-.2.5 0 .1 0 .3.2.4.1.2.3.3.5.3.3 0 .5-.1.7-.3.2-.1.3-.3.3-.4l.1-.7v-.3Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M712 33.8h-1.3v-2.6l-.1-1.1a.8.8 0 0 0-.8-.5c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.2.6.1.9v3.2Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M713.4 28v-1.3h1.4v1.2h-1.4Zm0 5.8v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M719.2 32.2l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.6 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M726.5 33.8H725v-3.7a.8.8 0 0 0-.8-.5c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4.2.2.3.3.3.6V33.8Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M727.8 33.8v-7.1h1.4v2.5a2 2 0 0 1 3 0c.5.4.7 1.1.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-1.5.7c-.3 0-.6 0-.9-.2a2 2 0 0 1-.7-.7v.8h-1.3Zm1.4-2.7c0 .5 0 1 .2 1.2.3.4.6.5 1 .5.3 0 .5 0 .8-.3.2-.3.3-.7.3-1.3 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M737.4 33.8V33a2 2 0 0 1-2.7.7l-.6-.6-.1-1.2v-3.3h1.3V31l.1 1.3c0 .2.1.3.3.4l.5.2a1 1 0 0 0 1-.7l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M741.4 33.8H740v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3L743 30l-.7-.3c-.2 0-.3 0-.5.2l-.3.6v3.3Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="M743.9 34.2l1.5.1.2.4.6.2c.4 0 .7 0 .8-.2l.3-.3V33c-.3.5-.9.8-1.5.8a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.6.9v-.8h1.2v4.7l-.1 1.3-.4.8-.8.4-1.1.1c-.9 0-1.5-.1-1.9-.4-.4-.3-.5-.7-.5-1.2v-.2Zm1.2-3c0 .5 0 .9.3 1.1.2.3.5.4.8.4.3 0 .6-.1.8-.4.3-.3.4-.6.4-1.2 0-.5-.1-.9-.3-1.2a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="308"
            fill="#000"
          />
          <path
            d="m729 45.8 1.7-.2c0 .6.3 1 .6 1.3.3.3.7.4 1.2.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5 0-.2-.3-.3-.6-.4l-1.4-.4c-.9-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.3-.4.7-.6 1.1-.8.5-.2 1-.3 1.7-.3 1 0 1.9.2 2.4.7.6.4.9 1 .9 1.9H734l-.5-1-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5l.3.6 1.6.5c.8.2 1.5.4 1.9.7l1 .8c.1.4.3.9.3 1.4a2.5 2.5 0 0 1-1.6 2.3c-.5.2-1.1.3-1.9.3-1 0-2-.2-2.5-.7-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="310"
            fill="#fff"
          />
          <path
            d="M744.6 48.6H743v-6.2c-.6.6-1.4 1-2.2 1.2v-1.5c.5 0 1-.4 1.4-.8a3 3 0 0 0 1-1.3h1.4v8.6Z"
            data-ubhnchn="310"
            fill="#fff"
          />
          <path
            d="M946.4 263.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="310"
            fill="#fff"
          />
          <path
            d="M951.2 265h4.1l.8.4c.2.1.4.3.5.6.2.2.2.5.2.8 0 .3 0 .6-.2 1l-.8.5c.5.2.8.4 1 .7.3.3.4.7.4 1a2.1 2.1 0 0 1-.9 1.8 2 2 0 0 1-1 .3h-4.1V265Zm1.4 1.2v1.6h2l.6-.2.2-.6c0-.2 0-.4-.2-.5a.8.8 0 0 0-.5-.3h-2.1Zm0 2.8v2h1.4l1-.1c.2 0 .3-.1.5-.3l.2-.6c0-.2 0-.4-.2-.5a.9.9 0 0 0-.4-.4 5 5 0 0 0-1.3 0h-1.2Z"
            data-ubhnchn="311"
            fill="#000"
          />
          <path
            d="M961.8 272.1v-.7a2 2 0 0 1-2.7.7l-.6-.7-.1-1.2V267h1.3v2.3l.1 1.4c0 .2.2.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.4V267h1.4v5.2h-1.3Z"
            data-ubhnchn="311"
            fill="#000"
          />
          <path
            d="M969 268.5l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.3.9.3.2 0 .4 0 .6-.2.2-.1.3-.4.3-.7l1.4.2c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.4-.7-1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.6 0 1.2.2 1.5.5.4.2.7.6.8 1.2Z"
            data-ubhnchn="311"
            fill="#000"
          />
          <path
            d="M971.4 265v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5-.1c-.3 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3V265h1.3Z"
            data-ubhnchn="311"
            fill="#000"
          />
          <path
            d="M975.2 248.1V241h3l1.7.1c.4.2.7.4.9.7.2.4.3.7.3 1.2s-.2 1-.5 1.3c-.3.3-.8.6-1.4.7.3.1.6.3.8.6l.8 1.1.9 1.4h-1.8l-1-1.5c-.4-.6-.6-1-.8-1.1l-.4-.3h-1v3h-1.5Zm1.5-4.1h1l1.3-.1c.2 0 .3-.2.4-.3l.2-.6c0-.2 0-.4-.2-.5a.9.9 0 0 0-.5-.3h-2.2v1.8Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M982.1 245.4c0-.4.1-.9.4-1.3.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.4-.3c-.4-.2-.7-.5-1-1-.2-.4-.3-.9-.3-1.5Zm1.4.1c0 .5.1 1 .4 1.2.2.3.5.4.9.4.3 0 .7-.1.9-.4.2-.3.4-.7.4-1.2s-.2-.9-.4-1.2c-.3-.2-.6-.4-1-.4-.3 0-.6.2-.8.4-.3.3-.4.7-.4 1.2Zm-.4-3.5v-1.2h1.2v1.2H983Zm2.1 0v-1.2h1.2v1.2h-1.2Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M993.3 248.1h-1.4v-2.6l-.1-1.1c0-.2-.1-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5h-1.5V243h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4l.3.6V248Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M997 243v1h-.9v2.8l.1.2h.8l.1 1c-.3.2-.6.2-1 .2l-.7-.1a1 1 0 0 1-.4-.3l-.2-.6V244h-.7v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M997.9 248.4l1.5.2.2.4.6.2c.4 0 .7 0 .8-.2.2 0 .3-.2.3-.3v-1.4c-.3.5-.8.8-1.5.8a2 2 0 0 1-1.6-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7 2 2 0 0 1 1.6.8v-.7h1.3v4.7l-.2 1.3-.4.8a2 2 0 0 1-.8.4l-1.1.1c-.9 0-1.5-.1-1.9-.4-.3-.3-.5-.7-.5-1.2v-.2Zm1.2-3c0 .6.1 1 .3 1.2.2.3.5.4.8.4.3 0 .6-.1.9-.4.2-.3.3-.6.3-1.2 0-.5-.1-.9-.3-1.2a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M1007.1 246.5l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.7c0-1 .2-1.6.7-2 .4-.6 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.7.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M1014.4 248.1h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4V243h1.2v.8a2.1 2.1 0 0 1 2.6-.7c.2 0 .4.2.5.4.2.2.3.3.3.6l.1.9v3.2Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M1018.2 243v1h-1v2.8l.2.2h.8v1c-.2.2-.6.2-1 .2l-.7-.1a1 1 0 0 1-.4-.3l-.2-.6V244h-.7v-1h.7v-1.1l1.3-.8v1.8h1Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M1020.2 244.5l-1.3-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.1 1.2v2.6l.3.7h-1.3l-.1-.4-.1-.2c-.2.3-.5.4-.8.6l-.8.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3c-.2 0-.3.3-.3.5l.3.4c.1.2.3.3.5.3.3 0 .5-.1.7-.3.2-.1.3-.3.3-.4l.1-.7v-.3Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M1024.7 248.1V241h1.4v7.1h-1.4Z"
            data-ubhnchn="313"
            fill="#000"
          />
          <path
            d="M998.6 224v-1.2l3.8-4.7h-3.3V217h5.2v1.1l-4 4.9h4.2v1.2h-5.9Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1008.4 222.4l1.3.2c-.1.5-.4 1-.8 1.2-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1010.9 218.9h1.3v.7l.6-.6c.3-.2.6-.2 1-.2a2 2 0 0 1 1.5.7c.4.4.7 1.1.7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.3.5l-.7-.6v2.6h-1.4V219Zm1.4 2.5c0 .6 0 1 .3 1.3.2.3.5.4.8.4.4 0 .6-.1.8-.4.3-.2.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1020 222.4l1.4.2c-.2.5-.4 1-.8 1.2-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.5c0 .4.2.7.4 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1024 224h-1.5V219h1.3v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.5.2a1 1 0 0 0-.3.5V224.1Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1031.2 224h-1.4v-3.6l-.3-.5a.8.8 0 0 0-.5 0l-.7.1a1 1 0 0 0-.3.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1032.6 218.2v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1039.9 220.4l-1.4.3a1 1 0 0 0-.3-.7 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.2.5.4.8.4.3 0 .5-.1.7-.3.1-.1.3-.4.3-.7l1.4.2c-.2.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.2-1.5.7-2 .4-.5 1-.7 1.8-.7.6 0 1.1.1 1.5.4.4.2.6.7.8 1.2Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1040.9 224v-7h1.4v3.7l1.6-1.8h1.7l-1.8 1.9 1.9 3.3h-1.5l-1.3-2.4-.6.7v1.7h-1.4Z"
            data-ubhnchn="315"
            fill="#000"
          />
          <path
            d="M1023.3 192.9h4.1c.3 0 .6.2.8.3l.5.6.3.9-.3.9c-.2.3-.5.5-.8.6.5.1.8.4 1 .7.3.3.4.6.4 1s0 .7-.2 1a2 2 0 0 1-.6.7 2 2 0 0 1-1 .4h-4.2V193Zm1.5 1.2v1.6h1.9c.3 0 .5-.1.6-.3.2-.1.2-.3.2-.5l-.1-.6a.8.8 0 0 0-.6-.2h-2Zm0 2.8v2h1.3l1-.1a.9.9 0 0 0 .7-1l-.1-.5a.9.9 0 0 0-.5-.3 5 5 0 0 0-1.3 0h-1.2Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1033.5 198.4l1.4.2c-.2.5-.5.9-.8 1.2-.4.2-.9.3-1.5.3-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.8.3 1 .3.2.5.3.9.3.2 0 .3 0 .5-.2l.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2.1Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1037.4 200h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.4 1.2c-.3-.2-.5-.2-.7-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1044.7 200h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2.2 0 .4.2.5.4l.3.6V200Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1047.1 196.4l-1.2-.2c.1-.5.3-.9.7-1.1.3-.3.8-.4 1.5-.4l1.4.2.6.6.2 1.2v2.6l.3.7h-1.4l-.1-.4v-.1l-.8.5-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.6-.5-1s0-.6.2-.9l.6-.5 1.1-.3 1.4-.4c0-.4-.1-.5-.3-.7l-.7-.1a1 1 0 0 0-.6.1l-.3.5Zm1.9 1.1a9 9 0 0 1-.9.2l-.7.3c-.2.1-.3.3-.3.5s0 .3.2.5l.6.2.7-.3.3-.4v-1Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1055 200v-.8a2 2 0 0 1-2.6.7c-.3-.1-.5-.4-.6-.6a3 3 0 0 1-.2-1.2v-3.3h1.4v3.8l.3.4.5.1a1 1 0 0 0 1-.7c.1-.2.2-.6.2-1.4v-2.2h1.3v5.2h-1.2Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1057.6 198.1v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1061.1 200V193h5v1.2h-3.5v1.7h3v1.2h-3v3h-1.5Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1068.5 200h-1.3v-5.2h1.2v.8l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6-.1.3-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1071.1 194.1V193h1.4v1.2h-1.4Zm0 6v-5.3h1.4v5.2h-1.4Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1076.9 198.4l1.3.2c-.1.5-.4.9-.8 1.2-.4.2-.8.3-1.4.3-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.6-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4.1.8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1084.2 200h-1.3v-.7c-.2.3-.4.5-.7.6a2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-.9.2-1.5.7-2a2 2 0 0 1 1.5-.7c.6 0 1.1.3 1.5.7V193h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2.2.4.5.6.9.6.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1088.6 198.4l1.3.2c-.2.5-.4.9-.8 1.2-.4.2-.9.3-1.4.3-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1095.8 200h-1.3v-2.6l-.1-1.1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3 0 .5.2.6.4l.3.6V200Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1096.8 198.5l1.3-.2c0 .3.2.5.4.6.2.2.4.3.7.3l.8-.2c.2-.1.2-.3.2-.4v-.3c-.2 0-.3 0-.5-.2a7.5 7.5 0 0 1-2.1-.6c-.4-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.3.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.7 0-.8.2l-.2.2c0 .1 0 .2.2.3l1.2.4c.8.1 1.3.3 1.6.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1105.2 194.8v1.1h-1V198.8l.2.1.2.1.6-.1v1c-.2.2-.6.2-1 .2h-.7a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.7v-1l1.3-.9v1.8h1Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1107.2 196.4l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4l1.3.2.7.6.1 1.2v1.6l.1 1c0 .2.1.5.3.7h-1.4l-.1-.4v-.1l-.8.5-.9.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.4c0-.4 0-.5-.2-.7l-.7-.1a1 1 0 0 0-.6.1c-.1.1-.3.3-.3.5Zm1.8 1.1-.8.2-.8.3c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.3 0 .5-.1.7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1111.7 200V193h1.4v7.1h-1.4Z"
            data-ubhnchn="317"
            fill="#000"
          />
          <path
            d="M1055.7 146.6h2.9l1.3.1.7.3.6.6.2.8a1.7 1.7 0 0 1-1 1.6c.4.1.7.3 1 .6a2.1 2.1 0 0 1-.5 2.8 2 2 0 0 1-1 .3l-1.7.1h-2.5v-7.2Zm1.5 1.2v1.7h2c.2 0 .4-.2.5-.3.2-.1.3-.3.3-.6l-.2-.5a.8.8 0 0 0-.6-.2h-2Zm0 2.9v1.9h2.3c.2 0 .4-.2.5-.3.2-.2.2-.4.2-.6l-.1-.6a1 1 0 0 0-.5-.3 5 5 0 0 0-1.3-.1h-1.1Z"
            data-ubhnchn="320"
            fill="#000"
          />
          <path
            d="M1066 152.1l1.3.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.8 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm0-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4l-.2.9h2Z"
            data-ubhnchn="320"
            fill="#000"
          />
          <path
            d="M1069.8 153.8h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.4 1.2-.7-.3c-.2 0-.3 0-.5.2a1 1 0 0 0-.3.6v3.3Z"
            data-ubhnchn="320"
            fill="#000"
          />
          <path
            d="M1077.1 153.8h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.2l-.7.2a1 1 0 0 0-.4.6v3.5h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .5 0 .8.2.2 0 .4.2.6.4l.2.6.1.9v3.2Z"
            data-ubhnchn="320"
            fill="#000"
          />
          <path
            d="M1079.5 150.2l-1.2-.2c.1-.5.4-.9.7-1.1.3-.3.8-.4 1.5-.4.6 0 1.1 0 1.4.2.3.2.5.3.6.6.2.2.2.6.2 1.2v2.6l.3.7h-1.3a3.4 3.4 0 0 1-.2-.6l-.8.5c-.3.2-.5.2-.8.2-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8 0-.2.3-.4.5-.5.3-.1.6-.3 1.1-.3l1.4-.4v-.1l-.2-.6-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2 0-.3.2-.3.4s0 .4.2.5c.2.2.3.2.6.2.2 0 .5 0 .7-.2.2-.1.3-.3.3-.4v-1Z"
            data-ubhnchn="320"
            fill="#000"
          />
          <path
            d="M1087.5 153.8v-.8a2 2 0 0 1-1.7 1 2 2 0 0 1-1-.3c-.3-.2-.5-.4-.6-.7a3 3 0 0 1-.2-1.1v-3.3h1.4v3.7l.4.4.5.2c.2 0 .4 0 .6-.2l.4-.5v-3.6h1.5v5.2h-1.3Z"
            data-ubhnchn="320"
            fill="#000"
          />
          <path
            d="m1058.4 165.2 1.7-.1c.1.5.3 1 .6 1.2.3.3.8.4 1.3.4s1-.1 1.2-.3c.3-.3.5-.6.5-.9 0-.2 0-.3-.2-.5l-.6-.4-1.4-.3c-1-.3-1.6-.6-2-.9-.5-.5-.8-1-.8-1.7 0-.5.1-.9.4-1.2l1-1 1.8-.2c1 0 1.8.2 2.4.7.5.5.8 1.1.9 1.9h-1.8c0-.4-.2-.7-.5-.9-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.2.3c-.2.2-.3.3-.3.6 0 .2 0 .3.2.5l1.6.6 2 .6.9.9c.2.3.3.8.3 1.3a2.6 2.6 0 0 1-1.6 2.4c-.5.2-1 .3-1.8.3-1.1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="322"
            fill="#fff"
          />
          <path
            d="M1075.4 166.5v1.5h-5.8c0-.6.3-1.1.6-1.6s1-1.2 1.8-2l1.4-1.5c.2-.3.3-.7.3-1 0-.4 0-.6-.3-.8-.2-.2-.4-.3-.8-.3-.3 0-.6 0-.8.3-.2.2-.3.5-.3 1l-1.7-.2c.1-.9.4-1.5 1-2 .5-.3 1.1-.5 1.9-.5.8 0 1.5.2 2 .7.5.4.7 1 .7 1.7 0 .4 0 .7-.2 1l-.7 1.2-1 1a21.5 21.5 0 0 0-1.4 1.5h3.3Z"
            data-ubhnchn="322"
            fill="#fff"
          />
          <path
            d="M922.4 287.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="322"
            fill="#fff"
          />
          <path
            d="M927.2 296.2V289h1.4v3.2l3-3.2h1.9l-2.7 2.8 2.8 4.4h-1.8l-2-3.4-1.2 1.2v2.2h-1.4Z"
            data-ubhnchn="323"
            fill="#000"
          />
          <path
            d="M935.4 292.6l-1.3-.3c.2-.5.4-.8.8-1 .3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2.3.1.5.3.6.5l.2 1.3v2.6l.3.7h-1.4a5.3 5.3 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8.2-.2.3-.4.6-.5l1-.4c.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6-.1-.1-.3-.2-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2-.2.5c0 .2 0 .4.2.5.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V293.7Z"
            data-ubhnchn="323"
            fill="#000"
          />
          <path
            d="M941.2 296.2H940V291h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2-.2 0-.3.3-.3.5l-.2 1.8v1.6Z"
            data-ubhnchn="323"
            fill="#000"
          />
          <path
            d="M943.5 293.5c0-.4.1-.9.3-1.3.3-.4.6-.8 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.7-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4.3 0 .6-.2.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="323"
            fill="#000"
          />
          <path
            d="M950.9 296.2l-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.8 3.4 1-3.4h1.4l-1.7 5.2H954l-.9-3.4-.9 3.4H951Z"
            data-ubhnchn="323"
            fill="#000"
          />
          <path
            d="M711.2 313.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="324"
            fill="#fff"
          />
          <path
            d="M687.2 289a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="324"
            fill="#fff"
          />
          <path
            d="M663.1 265a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="324"
            fill="#fff"
          />
          <path
            d="M639 241a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="324"
            fill="#fff"
          />
          <path
            d="M735.2 337.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="324"
            fill="#fff"
          />
          <path
            d="M654.8 344.6h-1.5l-.7-1.6h-2.8l-.6 1.6h-1.5l2.8-7.1h1.5l2.8 7.1Zm-2.6-2.8-1-2.6-1 2.6h2Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M655.6 344.6v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M660.8 339.5v1h-1V343.4l.2.2h.2l.6-.1v1c-.3.2-.6.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M661.6 342.7v-1.3h2.7v1.3h-2.7Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M665 344.6v-7.1h3.1c.8 0 1.3 0 1.7.2.3.1.6.3.8.7.2.3.3.7.3 1 0 .6-.1 1-.4 1.4-.4.4-.8.6-1.5.7l.8.6.8 1.1 1 1.4h-1.8l-1-1.5-.8-1-.5-.4h-1v3h-1.4Zm1.5-4h1c.8 0 1.2-.1 1.4-.2.2 0 .3-.1.4-.3l.1-.5c0-.3 0-.5-.2-.6a.9.9 0 0 0-.5-.3h-2.2v1.8Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M675.3 343l1.4.2c-.2.5-.5.9-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M677.9 338.8v-1.3h1.3v1.3H678Zm0 5.8v-5.1h1.3v5.1H678Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M685.3 344.6H684V342l-.1-1c0-.3-.2-.4-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3.1.5.2.6.4l.3.6v4.1Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M686.7 338.8v-1.3h1.4v1.3h-1.4Zm0 5.8v-5.1h1.4v5.1h-1.4Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M694 341l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.3.9.3.2 0 .4 0 .6-.2.2-.1.3-.4.4-.7l1.3.2c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.4-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.7 0 1.2.2 1.5.4.4.3.7.7.8 1.3Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M695 344.6v-7.1h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 2 3.2h-1.6l-1.3-2.3-.6.7v1.6H695Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M703.6 343l1.4.2c-.2.5-.4.9-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.6-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .5.2.8.4 1 .2.2.5.3.8.3l.5-.1.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M711 344.6h-1.4V342l-.1-1c0-.3-.2-.4-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2.3.1.5.2.6.4l.3.6v4.1Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M717 344.6h-1.2v-.7a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.8 3 3 0 0 1-.7-2c0-.9.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2.3.4.6.6 1 .6.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M718.1 342c0-.5.1-1 .4-1.3.2-.5.5-.8 1-1 .3-.3.8-.4 1.3-.4a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.8-1.9.8a3 3 0 0 1-1.4-.4c-.4-.2-.7-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .6.1 1 .4 1.2.2.3.5.4.9.4s.7-.1.9-.4c.2-.2.4-.6.4-1.2 0-.5-.2-.9-.4-1.1-.2-.3-.5-.4-.9-.4s-.7 0-1 .4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M725.9 344.6h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.5-.2c.4 0 .7.1 1 .3l-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="325"
            fill="#000"
          />
          <path
            d="M727.8 339.5h.8v-.4l.1-1c.1-.2.3-.4.6-.5a2 2 0 0 1 .9-.2l1.1.1-.1 1H730l-.1.6v.4h1v1h-1v4.1h-1.4v-4h-.8v-1.1Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M568 319.9v-7.2h1.5v3.2l3-3.2h1.9l-2.7 2.8 2.8 4.4h-1.9l-2-3.4-1.1 1.2v2.2h-1.4Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M576.3 316.3l-1.3-.2c.2-.5.4-1 .8-1.2.3-.2.8-.3 1.5-.3.6 0 1 0 1.3.2.3.2.6.3.7.6l.2 1.2v2.6l.3.7h-1.4a5.5 5.5 0 0 1-.2-.6c-.2.3-.5.4-.7.5-.3.2-.6.2-.9.2-.5 0-1-.1-1.2-.4-.4-.3-.5-.7-.5-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2c-.4 0-.7.2-.8.3l-.2.4c0 .2 0 .4.2.5.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V317.4Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M582.1 319.9h-1.3v-5.2h1.2v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.4.2-.2 0-.3.3-.4.6v3.3Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M584.7 319.9v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M587.3 318v-1.4h2.7v1.4h-2.7Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M590.8 312.7h2.9l1.3.1c.2 0 .5.1.7.3l.6.6.2.8c0 .4-.1.7-.3 1l-.7.6c.4.1.7.3 1 .6a2.1 2.1 0 0 1-.5 2.8 2 2 0 0 1-1 .3h-4.2v-7Zm1.5 1.2v1.7h2l.6-.3.2-.6c0-.2 0-.4-.2-.5a.8.8 0 0 0-.6-.3h-2Zm0 2.9v1.9h2.3l.5-.3c.2-.2.2-.4.2-.7l-.1-.5a.9.9 0 0 0-.5-.3 5 5 0 0 0-1.3-.1h-1.1Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M597.7 317.2c0-.4.1-.9.4-1.3.2-.4.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2a3 3 0 0 1-3.3.5l-1-1c-.2-.5-.3-1-.3-1.6Zm1.4.1c0 .5.2 1 .4 1.2.2.3.5.4.9.4s.7-.1.9-.4c.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.2-.3-.5-.4-.9-.4s-.7.1-.9.4c-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M608.9 319.9h-1.4v-3.7a.8.8 0 0 0-.8-.6l-.7.2a1 1 0 0 0-.4.6v3.5H604v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.9.3c.2 0 .4.2.5.4.2.1.2.3.3.5v4.2Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M611.6 312.7v2.7a2 2 0 0 1 1.6-.8c.3 0 .6 0 .9.2a1.4 1.4 0 0 1 .8 1v4h-1.3v-3.6l-.3-.4a.9.9 0 0 0-.5-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M616 317.2c0-.4.2-.9.4-1.3s.5-.8 1-1c.4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.5-1-1-.2-.4-.3-.9-.3-1.5Zm1.5.1c0 .5.1 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M625.5 318.2l1.4.3c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.2 1.8.8c.4.5.7 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M627.5 314.7h.7v-.4c0-.4 0-.7.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.1-.5.1-.1.5v.4h1v1h-1v4.2h-1.4v-4.1h-.7v-1Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M630.8 314.7h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2c.4 0 .7 0 1.1.2l-.2 1-.6-.1-.4.1-.2.5v.4h1v1h-1v4.2h-1.3v-4.1h-.8v-1Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M637.7 318.2l1.4.3c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M641.6 319.9h-1.3v-5.2h1.2v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.2 0-.3 0-.4.2-.2 0-.3.3-.4.6v3.3Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M644 318v-1.4h2.7v1.4H644Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M647.6 319.9v-7.2h1.4l2.9 4.8v-4.8h1.3v7.2h-1.4l-2.9-4.7v4.7h-1.3Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M657.8 318.2l1.3.3c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="M661.6 319.9h-1.3v-5.2h1.2v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2-.2 0-.3.3-.3.6-.1.2-.2.8-.2 1.7v1.6Z"
            data-ubhnchn="326"
            fill="#000"
          />
          <path
            d="m665.6 319.9-2-5.2h1.4l1 2.7.3.8a13.1 13.1 0 0 0 .2-.8l1-2.7h1.4l-2 5.2h-1.3Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M672.8 318.2l1.4.3c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.8c.4.5.6 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M680 319.9h-1.3v-2.7l-.1-1a.8.8 0 0 0-.8-.6l-.6.2a1 1 0 0 0-.4.6v3.5h-1.5v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.9.3c.2 0 .4.2.5.4l.3.5v4.2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M681.4 319.9v-7.2h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 2 3.3h-1.6l-1.3-2.3-.6.6v1.7h-1.4Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M687 319.9v-7.2h1.4v7.2H687Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M689.8 314v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M697.3 319.9h-1.4v-3.7a.8.8 0 0 0-.8-.6l-.7.2a1 1 0 0 0-.4.6v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-1c.4 0 .6.1.9.3.2 0 .4.2.5.4.2.1.3.3.3.5v4.2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M698.7 314v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M701.4 319.9v-7.2h1.4v3.8l1.6-1.8h1.7l-1.8 1.9 2 3.3h-1.6l-1.3-2.3-.6.6v1.7h-1.4Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M609.5 295.1V288h5.3v1.2h-3.9v1.6h3.6v1.2H611v2h4v1.1h-5.4Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M616.1 289.3V288h1.4v1.3h-1.4Zm0 5.8V290h1.4v5.1h-1.4Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M623.4 291.5l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.3.9.3.2 0 .4 0 .6-.2.2-.1.3-.4.4-.7l1.3.2c-.1.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.4-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.7 0 1.2.2 1.5.4.4.3.7.7.8 1.3Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M625.9 288v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .8 1l.1 1.1v3h-1.4v-3.7l-.3-.4a.9.9 0 0 0-.5-.1c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.5h-1.4V288h1.4Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M630.5 295.1V288h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 1.9a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5 2 2 0 0 1-.8-.6v.7h-1.3Zm1.4-2.7c0 .6 0 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M636.4 292.5c0-.5.1-1 .3-1.3.3-.5.6-.8 1-1 .4-.2.9-.4 1.4-.4a2.6 2.6 0 0 1 2.6 2.7c0 .8-.2 1.5-.7 2-.5.5-1.2.8-2 .8a3 3 0 0 1-1.3-.4c-.4-.2-.7-.5-1-.9-.2-.4-.3-1-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.2.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.2.3-.6.3-1.2 0-.5 0-.9-.3-1.1-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.2-.4.6-.4 1.2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M644.1 295.1h-1.3V290h1.2v.7l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6l-.2 1.7v1.6Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M651.4 295.1h-1.3v-2.6l-.1-1c0-.3-.2-.4-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4V290h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .6 0 .8.2l.6.4.3.6v4.1Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M657.6 295.1h-1.3v-.7a2 2 0 0 1-.7.6 2 2 0 0 1-1 .3 2 2 0 0 1-1.4-.8 3 3 0 0 1-.7-2c0-.8.2-1.5.6-2a2 2 0 0 1 3.1 0V288h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2.2.4.5.6.9.6.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M660 291.5l-1.3-.2c.2-.5.4-.9.7-1.1.4-.2.9-.4 1.6-.4.6 0 1 .1 1.3.3l.7.5.1 1.2v1.6l.1 1 .2.7h-1.3a5.2 5.2 0 0 1-.2-.5l-.7.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5-.1-.2-.4-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.2c-.2 0-.5 0-.8.2l-.8.2c-.2.1-.2.3-.2.5s0 .3.2.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.3-.4l.1-.7v-.2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M664.4 290h1.3v.7a2 2 0 0 1 1.6-.9l.8.2c.3.2.5.4.6.7l.8-.7.8-.2c.4 0 .7.1 1 .3.3.1.5.4.6.7l.1 1v3.3h-1.3v-3c0-.4 0-.8-.2-1l-.6-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5v3.5h-1.5v-3.8l-.3-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.5.2 1 1 0 0 0-.4.5l-.1 1v2.5h-1.4V290Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M673.3 290h1.3v.7a2 2 0 0 1 1.6-.9l.8.2c.3.2.5.4.6.7l.8-.7.8-.2c.4 0 .7.1 1 .3.3.1.4.4.6.7l.1 1v3.3h-1.4v-3l-.1-1-.6-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5l-.1 1v2.5h-1.4v-3.8l-.3-.3a.7.7 0 0 0-.4-.1 1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.1 1v2.5h-1.4V290Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M633 270.4v-6H631v-1.2h5.7v1.2h-2.1v6H633Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M640.5 268.7l1.4.3c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M643 270.7l1.5.2.2.4.6.1.8-.1.3-.4V269.6c-.4.5-.9.8-1.5.8a2 2 0 0 1-1.7-.9 3 3 0 0 1-.4-1.7c0-.9.2-1.6.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.5.8v-.7h1.3v4.7l-.1 1.3-.4.7-.8.5-1.1.1c-1 0-1.5-.2-1.9-.5-.4-.3-.6-.6-.6-1.1v-.2Zm1.2-3c0 .5 0 1 .3 1.2.2.3.5.4.8.4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M652.2 268.7l1.4.3c-.2.5-.5.9-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.8c.4.5.7 1.2.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M654.8 270.4v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M569 243.3l1.5-.1c0 .5.2.8.5 1 .2.2.6.4 1 .4.5 0 .8-.1 1-.3.3-.2.4-.5.4-.7l-.1-.5-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1-.4-2.5c.2-.3.5-.5 1-.7.3-.2.8-.2 1.3-.2 1 0 1.6.2 2 .6.5.4.7.9.8 1.5l-1.5.1c0-.4-.2-.6-.4-.8-.2-.2-.5-.2-.9-.2s-.7 0-1 .2l-.2.5c0 .1 0 .3.2.4.2.2.6.3 1.3.5a7 7 0 0 1 1.6.5l.8.7c.2.3.3.7.3 1.2a2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.6.2c-.9 0-1.6-.2-2-.7-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M580.6 242l-1.3.2a1 1 0 0 0-.4-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2s0 1 .3 1.3c.2.2.5.3.8.3.3 0 .5 0 .7-.2.1-.1.3-.4.3-.7l1.4.2c-.2.6-.4 1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.8-.5-.4-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.6 0 1.1.2 1.5.5.4.2.6.6.8 1.2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M583 238.5v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1H585V242l-.4-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5h-1.5v-7.1h1.4Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M591.2 245.6v-.7a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.2v-3.2h1.4V244.2l.4.4.5.1c.2 0 .4 0 .6-.2l.4-.5v-3.5h1.5v5.1h-1.3Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M593.9 245.6v-7.1h1.3v7.1H594Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M596.1 245.6v-1l2-2.3.6-.7h-2.4v-1.1h4.3v1l-2 2.2-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M604.7 244l1.3.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.6-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .5 0 .8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M612 245.6h-1.4V243l-.1-1c0-.3-.2-.4-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.3h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9l.8.2.6.4.3.6v4.1Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M618 245.6h-1.2v-.7a2 2 0 0 1-.7.6 2 2 0 0 1-1 .3 2 2 0 0 1-1.4-.8 3 3 0 0 1-.7-2c0-.8.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6.1 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M619.1 243c0-.5.1-1 .4-1.3.2-.5.5-.8 1-1a2.6 2.6 0 0 1 4 2.4c0 .7-.3 1.4-.8 1.9s-1.1.8-1.9.8a3 3 0 0 1-1.4-.4c-.4-.2-.7-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .6.2 1 .4 1.2.2.3.5.4.9.4s.7 0 .9-.4c.2-.2.4-.6.4-1.2 0-.5-.2-.9-.4-1.1-.2-.3-.5-.4-.9-.4s-.7.1-.9.4c-.2.2-.4.6-.4 1.2Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M626.9 245.6h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="327"
            fill="#000"
          />
          <path
            d="M552.4 220.9v-7.2h1.5v2.9h2.8v-2.9h1.5v7.2h-1.5v-3.1H554v3.1h-1.5Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M562.7 219.2l1.3.3c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M565.2 215v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M568 220.9v-7.2h1.4v7.2H568Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M570.8 215v-1.3h1.3v1.3h-1.3Zm0 5.9v-5.2h1.3v5.2h-1.3Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M573.4 221.2l1.6.2c0 .2 0 .3.2.4l.6.1.8-.1.3-.4V220.1c-.4.5-1 .8-1.5.8a2 2 0 0 1-1.7-.9 3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.8v-.7h1.3v4.7c0 .6 0 1-.2 1.3 0 .3-.2.6-.4.7l-.7.5-1.2.1c-.8 0-1.5-.2-1.8-.5-.4-.3-.6-.6-.6-1.1v-.2Zm1.2-3c0 .5.1 1 .4 1.2.2.3.4.4.7.4.4 0 .7-.1.9-.4.2-.3.3-.7.3-1.2s0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M582.7 219.2l1.3.3c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M590 220.9h-1.4v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.2l-.6.2a1 1 0 0 0-.4.6l-.1 1.1v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 1.7-1c.3 0 .6.1.8.3.3 0 .5.2.6.4l.3.6V220.8Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M590.9 219.4l1.3-.2c0 .3.2.5.4.6.2.2.4.2.7.2.4 0 .7 0 .8-.2.2 0 .2-.2.2-.3v-.3l-.5-.2a7.4 7.4 0 0 1-2.1-.6c-.5-.3-.7-.7-.7-1.2s.2-.8.6-1.1c.3-.4.9-.5 1.6-.5.7 0 1.3.1 1.6.3.4.3.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.7-.1-.7.1-.2.3c0 .1 0 .2.2.3l1.2.3c.8.2 1.3.4 1.6.7.3.2.4.5.4 1 0 .4-.2.9-.6 1.2-.4.3-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M599.9 219.2l1.4.3c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.2 1.8.8c.4.5.7 1.2.6 2.3H598c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M605.5 219.2l1.3.3c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M513.8 177.2V170h1.5v2.8h2.8V170h1.4v7.2h-1.4V174h-2.9v3.2h-1.4Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M524 175.5l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4H522c0 .4.1.7.4 1 .2.1.4.3.7.3l.6-.2.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2.1Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M531.3 177.2h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5V177.2h-1.4V172h1.2v.7a2 2 0 0 1 1.8-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M537.4 177.2H536v-3.7l-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4V172h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M538.8 171.3V170h1.4v1.3h-1.4Zm0 5.9V172h1.4v5.2h-1.4Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M541.5 177.5l1.5.2.2.4.6.1.8-.1.3-.4v-1.4c-.3.6-.9.9-1.5.9a2 2 0 0 1-1.6-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.6c.6 0 1.1.2 1.5.8v-.7h1.3v4.6l-.1 1.4-.4.7-.8.4-1.1.2c-1 0-1.5-.2-1.9-.5-.4-.3-.5-.7-.5-1.1v-.2Zm1.2-3c0 .5 0 1 .3 1.2.2.2.5.3.8.3.3 0 .6 0 .8-.3.3-.3.4-.7.4-1.2s-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M547.2 175.7l1.4-.2.3.6.8.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1 .4-.4 1-.5 1.7-.5s1.2 0 1.6.3c.3.2.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2c-.4 0-.6 0-.8.2l-.1.3.1.2 1.3.4 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.2-1.7-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M558 177.2h-1.3v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-.9.2 2 2 0 0 1-1.5-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0V170h1.4v7.2Zm-3.6-2.7c0 .5 0 1 .2 1.2a1 1 0 0 0 1.7 0c.2-.2.4-.6.4-1.1 0-.6-.2-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M559 174.5c0-.5.2-1 .4-1.3.2-.5.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.2 1.4-.7 1.9-.6.5-1.2.8-2 .8a3 3 0 0 1-1.3-.3c-.5-.3-.8-.6-1-1-.2-.4-.3-1-.3-1.5Zm1.5 0c0 .6 0 1 .3 1.2.3.3.6.5 1 .5.3 0 .6-.2.8-.5.3-.2.4-.6.4-1.1 0-.6-.1-1-.4-1.2-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M566.8 177.2h-1.4V172h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.4 1.2-.7-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M568.8 172h.7v-.4c0-.5 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.2c-.2 0-.4 0-.5.2v.9h1v1h-1v4.2h-1.5V173h-.7V172Z"
            data-ubhnchn="330"
            fill="#000"
          />
          <path
            d="M582.1 184a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="332"
            fill="#007734"
          />
          <path
            d="M548.4 180h16a7 7 0 1 1 0 14h-16a7 7 0 1 1 0-14Z"
            data-ubhnchn="332"
            fill="#007734"
          />
          <path
            d="m544.3 188.6 1.7-.1c.1.6.3 1 .6 1.2.3.3.8.4 1.3.4s1 0 1.2-.3c.3-.3.5-.5.5-.9 0-.2 0-.3-.2-.5l-.6-.3-1.4-.4c-1-.2-1.6-.5-2-.9a2.2 2.2 0 0 1-.4-3c.2-.3.6-.6 1-.8.5-.2 1.1-.3 1.8-.3 1 0 1.9.2 2.4.7.5.5.8 1.1.9 2h-1.8c0-.5-.2-.8-.5-1-.2-.2-.6-.3-1-.3a2 2 0 0 0-1.2.4c-.2 0-.3.3-.3.5s0 .4.2.5l1.6.6 2 .6.9.9c.2.3.3.8.3 1.3a2.5 2.5 0 0 1-1.6 2.4c-.5.2-1 .3-1.8.3-1.1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="333"
            fill="#fff"
          />
          <path
            d="M561.3 190v1.4h-5.8c0-.5.3-1 .6-1.6.3-.5 1-1.2 1.8-2l1.4-1.5c.2-.3.3-.6.3-1 0-.3 0-.6-.3-.8-.1-.2-.4-.3-.8-.3-.3 0-.6 0-.8.3-.2.2-.3.5-.3 1l-1.7-.1c.1-1 .4-1.6 1-2a3 3 0 0 1 1.9-.6c.8 0 1.5.2 2 .7.5.5.7 1 .7 1.7 0 .4 0 .8-.2 1.1-.1.4-.4.7-.7 1.1l-1 1.1a17.7 17.7 0 0 0-1.4 1.4h3.3Z"
            data-ubhnchn="333"
            fill="#fff"
          />
          <path
            d="M562.4 189.2l1.7-.1c0 .3.2.6.4.8a1.1 1.1 0 0 0 1.7 0c.2-.3.3-.7.3-1.3 0-.5-.1-1-.3-1.2-.3-.3-.6-.4-1-.4s-.9.2-1.2.6l-1.4-.2.9-4.4h4.3v1.5h-3l-.3 1.5c.3-.2.7-.3 1.1-.3.7 0 1.3.3 1.9.8.5.5.7 1.2.7 2s-.2 1.4-.6 2c-.6.7-1.3 1-2.3 1-.8 0-1.5-.1-2-.6-.5-.4-.8-1-.9-1.7Z"
            data-ubhnchn="333"
            fill="#fff"
          />
          <path
            d="M1383.4 1063.4c0-.7.1-1.3.3-1.8a3.3 3.3 0 0 1 1.6-1.6 4 4 0 0 1 1.6-.3c1 0 1.9.3 2.5 1 .6.6 1 1.5 1 2.7 0 1.1-.4 2-1 2.7-.6.7-1.4 1-2.5 1-1 0-2-.3-2.5-1-.7-.6-1-1.5-1-2.7Zm1.5 0c0 .8.2 1.4.6 1.8.3.5.8.7 1.4.7.6 0 1-.3 1.4-.7.4-.4.6-1 .6-1.8 0-.9-.2-1.5-.6-1.9-.3-.4-.8-.6-1.4-.6-.6 0-1 .2-1.4.6-.4.4-.6 1-.6 1.9Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1391.4 1067v-7.2h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.7 2 2 2 0 0 1-1.5.7c-.3 0-.6 0-.9-.2a2 2 0 0 1-.7-.7v.8h-1.3Zm1.4-2.7c0 .5 0 .9.2 1.2.3.3.6.5 1 .5.3 0 .5-.1.8-.4.2-.3.3-.6.3-1.2s-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1400.6 1065.3l1.4.3a2.2 2.2 0 0 1-2.3 1.5c-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.4.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1404.5 1067h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2-.5.1a1 1 0 0 0-.3.6l-.1 1.8v1.6Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1406.6 1065.5l1.3-.2c.1.3.2.5.4.6l.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7 7 0 0 1-2.1-.7c-.4-.3-.7-.6-.7-1.1 0-.5.2-.9.6-1.2.3-.3.9-.4 1.6-.4.8 0 1.3 0 1.6.3.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.1-.8.1-.2.3s0 .2.2.2c0 .1.5.3 1.3.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.6-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1412.6 1061.8h1.3v.8c.1-.3.3-.5.6-.7.3-.2.6-.2 1-.2a2 2 0 0 1 1.5.7c.4.4.6 1.1.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.5l-.8-.6v2.6h-1.3v-7.1Zm1.3 2.5c0 .6.1 1 .4 1.3.2.3.5.4.8.4.3 0 .6-.1.8-.4.2-.2.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.3 1 1 0 0 0-.8.3c-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1420 1067h-1.3v-5.2h1.2v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.6-.2-.5.1c-.2.2-.3.3-.3.6l-.2 1.8v1.6Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1425.6 1065.3l1.4.3a2.2 2.2 0 0 1-2.3 1.5c-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.4 1 .2.2.4.3.7.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1431.2 1065.3l1.3.3c-.1.5-.4.8-.8 1-.4.4-.8.5-1.4.5-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1418 1015.2l1.4-.1c0 .4.2.8.5 1 .2.2.6.3 1 .3.5 0 .8 0 1-.3.3-.1.4-.4.4-.6l-.1-.5-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1 .5-3.2c.4-.2.9-.2 1.4-.2 1 0 1.6.2 2 .6.5.3.8.9.8 1.5h-1.5c0-.3-.2-.5-.4-.7-.2-.2-.5-.3-.9-.3s-.7.1-1 .3l-.2.5c0 .1 0 .3.2.4l1.4.5 1.5.5.8.7c.2.3.3.7.3 1.2 0 .4-.1.8-.3 1.1a2 2 0 0 1-1 .8c-.4.2-1 .3-1.6.3-.9 0-1.6-.2-2-.7-.6-.4-.8-1-1-1.8Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1425 1012.4h1.2v.7a2 2 0 0 1 1.7-.9 2 2 0 0 1 1.5.7c.4.5.6 1.2.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.6l-.8-.6v2.6h-1.3v-7.1Zm1.3 2.5c0 .5.1 1 .4 1.3.2.2.5.4.8.4.3 0 .6-.2.8-.4.2-.3.3-.7.3-1.3 0-.5 0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.6-.4 1.2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1431.1 1011.6v-1.2h1.4v1.3h-1.4Zm0 6v-5.3h1.4v5.2h-1.4Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1438.6 1017.5h-1.4v-3.6l-.3-.5a.8.8 0 0 0-.5-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4v-5.1h1.3v.7a2 2 0 0 1 1.7-.9c.3 0 .5 0 .8.2l.6.4.2.6.1 1v3.1Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1444.8 1017.5h-1.3v-.7c-.2.3-.5.5-.8.6a2 2 0 0 1-.8.3 2 2 0 0 1-1.6-.8 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1 .3 1.5.8v-2.6h1.4v7.1Zm-3.7-2.7c0 .6 0 1 .2 1.2.2.4.5.6 1 .6.3 0 .5-.2.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1446.1 1017.5v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1451.9 1015.9l1.4.2c-.2.5-.5.9-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.6 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1455.8 1017.5h-1.4v-5.1h1.3v.7c.2-.4.4-.6.6-.7l.5-.2c.4 0 .7.1 1 .3l-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1457.9 1016l1.3-.1c0 .2.2.4.4.6l.7.2.8-.2c.2-.1.2-.3.2-.4v-.3l-.5-.1a7 7 0 0 1-2.1-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.3c0-.3-.1-.4-.3-.5l-.7-.2c-.3 0-.6 0-.7.2-.1 0-.2.1-.2.3l.2.2 1.2.4 1.6.6c.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5a3 3 0 0 1-1.6-.4 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1463.3 1012.4h.8v-.4l.1-1 .5-.5a2 2 0 0 1 1-.2l1.1.1-.2 1h-1l-.2.6v.4h1v1h-1v4.1h-1.3v-4h-.8v-1.1Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1470.3 1015.9l1.3.2c-.2.5-.4.9-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.6-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .5.2.8.4 1 .2.2.5.3.8.3l.5-.1.3-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1472.8 1017.5v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="M1480.3 1017.5h-1.2v-.7c-.2.3-.5.5-.8.6a2 2 0 0 1-2.4-.5c-.4-.4-.6-1.1-.6-2 0-.9.2-1.5.6-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2.2.4.5.6 1 .6.3 0 .5-.2.7-.4.3-.3.4-.7.4-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="338"
            fill="#000"
          />
          <path
            d="m1421 1029 1.8-.1c0 .6.3 1 .6 1.3.3.2.7.3 1.2.3.6 0 1 0 1.3-.3.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.6l-.6-.3-1.4-.4c-.9-.2-1.5-.5-2-.8a2.3 2.3 0 0 1-.3-3c.2-.4.6-.7 1-.9.5-.2 1-.3 1.7-.3 1 0 2 .3 2.5.7.5.5.8 1.1.8 2h-1.7l-.5-1-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.8.4 1.6.6a8 8 0 0 1 1.9.6c.4.2.7.5 1 .9.1.4.3.8.3 1.3s-.2 1-.4 1.4c-.3.5-.7.8-1.2 1a5 5 0 0 1-1.9.3c-1 0-1.9-.2-2.5-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="340"
            fill="#fff"
          />
          <path
            d="M1435.7 1031.9v-1.8h-3.5v-1.4l3.7-5.5h1.4v5.5h1v1.4h-1v1.8h-1.6Zm0-3.2v-3l-2 3h2Z"
            data-ubhnchn="340"
            fill="#fff"
          />
          <path
            d="M1439.2 1025v-1.6h5.6v1.2a12 12 0 0 0-2.9 7.3h-1.6c0-1.2.3-2.4.8-3.7a12 12 0 0 1 1.8-3.3h-3.7Z"
            data-ubhnchn="340"
            fill="#fff"
          />
          <path
            d="M573.5 1131a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="340"
            fill="#fff"
          />
          <path
            d="M578.3 1133h4.1c.3 0 .5.1.8.3.2.1.4.3.5.6.2.2.2.5.2.8 0 .4 0 .7-.2 1l-.8.6c.5.1.8.3 1 .6.3.3.4.7.4 1.1a2.1 2.1 0 0 1-.9 1.7c-.2.2-.6.3-1 .3h-4.1v-7Zm1.4 1.1v1.7h2c.3 0 .5-.2.6-.3.2-.2.2-.3.2-.6 0-.2 0-.4-.2-.5a.8.8 0 0 0-.5-.3h-2.1Zm0 2.9v1.9h2.4l.5-.4.2-.6c0-.2 0-.4-.2-.5a.9.9 0 0 0-.4-.3l-1.3-.1h-1.2Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M585.2 1137.4c0-.4 0-.9.3-1.3.2-.4.6-.8 1-1 .4-.2.8-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .8-.2 1.4-.7 2-.5.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.6-1-1-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.3.3-.7.3-1.2s-.1-1-.3-1.2c-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.7-.4 1.2Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M594 1134.9v1.1h-1v2.8l.2.2h.8l.1 1-1 .2-.8-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1.1h.7v-1l1.3-.8v1.8h1Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M596 1136.5l-1.3-.2c.2-.5.4-1 .8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.3.2.6.3.7.5l.2 1.3v2.6l.3.7H598l-.1-.4v-.2a2.4 2.4 0 0 1-1.7.7c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.2c-.2.2-.2.3-.2.5s0 .4.2.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V1137.6Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M605.2 1140H604v-2.6l-.1-1a.8.8 0 0 0-.8-.6l-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 2.5-.8l.6.5.3.5v4.2Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M606.6 1134.2v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M609 1138.6l1.3-.2c0 .3.2.5.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7.3 7.3 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.5-1.2.4-.3 1-.4 1.7-.4s1.2.1 1.6.3c.3.3.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.8.1-.1.3.1.3 1.3.3 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M619.5 1136.4l-1.4.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1.2s0 1 .3 1.3c.2.3.5.4.8.4.3 0 .5 0 .7-.2l.3-.8 1.4.2c-.2.7-.5 1.1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.2-1.9-.7-.4-.5-.6-1.2-.6-2 0-.9.2-1.5.6-2 .5-.5 1.1-.7 1.9-.7.6 0 1.1.1 1.5.4.4.3.6.7.8 1.2Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M621.9 1133v2.6a2 2 0 0 1 2.4-.6 1.4 1.4 0 0 1 .9 1v4H624v-2.7l-.1-1c0-.1-.1-.3-.3-.3a1 1 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M629.6 1138.4l1.4.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.8.4.5.6 1.2.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm.1-1.4c0-.3 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M633.5 1140h-1.3v-5.1h1.2v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.4.2-.2 0-.3.3-.4.5V1140.2Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M642.2 1137.5v-1.3h3.1v2.9a4 4 0 0 1-1.3.8c-.6.2-1.1.3-1.7.3a4 4 0 0 1-2-.5 3 3 0 0 1-1.2-1.3c-.3-.6-.5-1.2-.5-2 0-.7.2-1.3.5-1.9.3-.6.8-1 1.4-1.3.4-.3 1-.4 1.7-.4.9 0 1.6.2 2 .6.6.3.9.8 1 1.5l-1.4.3c-.1-.4-.3-.7-.6-.9-.2-.1-.6-.3-1-.3a2 2 0 0 0-1.5.6c-.4.4-.6 1-.6 1.8 0 .9.2 1.5.6 2 .4.4.9.6 1.5.6.3 0 .6 0 .9-.2l.8-.4v-1h-1.7Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M647.7 1136.5l-1.3-.2c.2-.5.4-1 .8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.3.2.6.3.7.5l.2 1.3v2.6l.3.7h-1.4l-.1-.4v-.2a2.4 2.4 0 0 1-1.7.7c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.2.6-.3 1-.4.7 0 1.2-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.2c-.2.2-.2.3-.2.5s0 .4.2.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2l.4-.5V1137.6Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M653.5 1140h-1.3v-5.1h1.2v.7l.6-.6c.2-.2.4-.2.6-.2.3 0 .6 0 1 .2l-.5 1.2-.7-.2c-.1 0-.3 0-.4.2-.2 0-.3.3-.4.5V1140.2Z"
            data-ubhnchn="341"
            fill="#000"
          />
          <path
            d="M658.5 1134.9v1.1h-1v2.8l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1.1h.7v-1l1.3-.8v1.8h1Z"
            data-ubhnchn="342"
            fill="#000"
          />
          <path
            d="M662.4 1138.4l1.4.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.8.5.5.7 1.2.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.4c0-.3 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="342"
            fill="#000"
          />
          <path
            d="M669.7 1140h-1.3v-2.6l-.1-1a.8.8 0 0 0-.8-.6l-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4H665v-5.2h1.3v.8a2 2 0 0 1 2.5-.8l.6.5.2.5.1 1v3.2Z"
            data-ubhnchn="342"
            fill="#000"
          />
          <path
            d="M602.3 1116v-7.1h3c.8 0 1.4 0 1.7.2.4.1.7.3.9.7.2.3.3.7.3 1 0 .6-.2 1-.5 1.4-.3.4-.8.6-1.4.7l.8.6.8 1.2.9 1.3H607l-1-1.5c-.4-.6-.6-1-.8-1l-.4-.4h-1v3h-1.5Zm1.5-4h1c.7 0 1.2-.1 1.3-.2.2 0 .3-.1.4-.3l.2-.5c0-.3 0-.5-.2-.6a1 1 0 0 0-.5-.3h-2.2v1.8Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M610.6 1112.4l-1.3-.2c.2-.5.4-.9.7-1.1.4-.2.9-.4 1.6-.4.6 0 1 .1 1.3.3l.7.5.1 1.2v1.6l.1 1 .2.8h-1.3a5 5 0 0 1-.2-.6l-.7.5a2 2 0 0 1-.9.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5-.1-.2-.4-.2-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.1-.8.3-.8.2c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.3-.4l.1-.7v-.3Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M617.5 1110.9v1h-1V1114.9l.2.2h.2l.6-.1v1c-.2.2-.6.3-1 .3-.2 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.7v-1l1.3-.9v1.9h1Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M619.8 1108.9v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.1c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5v3.5h-1.5v-7.1h1.4Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M625.6 1112.4l-1.3-.2c.2-.5.4-.9.8-1.1.3-.2.8-.4 1.5-.4.6 0 1 .1 1.4.3l.6.5.2 1.2v2.6c0 .3.1.5.3.8h-1.4a5 5 0 0 1-.2-.6l-.7.5a2 2 0 0 1-.9.2c-.5 0-1-.2-1.2-.5-.4-.3-.5-.6-.5-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5-.1-.2-.4-.2-.7-.2a1 1 0 0 0-.6.1l-.3.5Zm1.8 1.1-.8.3-.8.2-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.4-.4v-1Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M633.5 1116v-.7a2 2 0 0 1-2.7.7l-.5-.7-.2-1.2v-3.2h1.4V1114.6c0 .2.2.3.3.4l.5.1a1 1 0 0 0 1-.6l.1-1.5v-2.1h1.4v5.1h-1.3Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M635.8 1114.6l1.3-.2c0 .2.2.4.4.6l.7.2c.4 0 .7 0 .8-.2.2-.1.2-.2.2-.4v-.3l-.5-.1a7.3 7.3 0 0 1-2.1-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.2 1.6.4.4.2.6.6.7 1l-1.3.3c0-.3-.1-.4-.3-.5l-.6-.2c-.4 0-.7 0-.8.2-.1 0-.2.1-.2.3l.2.2 1.2.4 1.6.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.2-.2-1.6-.5a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M644.2 1113.7l1.4-.1c.1.5.3.8.5 1 .3.2.6.4 1 .4.6 0 .9-.2 1.1-.3.3-.2.4-.5.4-.7 0-.2 0-.3-.2-.5l-.5-.3-1.1-.3c-.8-.2-1.3-.4-1.7-.7-.4-.4-.6-.9-.6-1.4 0-.4 0-.7.3-1 .2-.4.5-.6.9-.8.4-.2.8-.2 1.4-.2.9 0 1.6.2 2 .6.5.3.7.9.7 1.5l-1.4.1c0-.4-.2-.6-.4-.8-.2-.2-.5-.2-1-.2-.3 0-.7 0-1 .2l-.1.5c0 .1 0 .3.2.4.2.2.6.3 1.3.5l1.6.5.8.7.2 1.2a2 2 0 0 1-1.3 2 4 4 0 0 1-1.5.2c-1 0-1.6-.2-2.1-.7-.5-.4-.8-1-.9-1.8Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M653.6 1110.9v1h-.9V1114.9l.1.2h.3l.5-.1.1 1c-.3.2-.6.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.4-.3l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M657.6 1114.4l1.4.2c-.2.5-.5 1-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M660 1116.4l1.6.2c0 .2 0 .3.2.4l.6.1c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.4.6-.9.8-1.5.8a2 2 0 0 1-1.7-.8 3 3 0 0 1-.4-1.8c0-.9.2-1.5.6-2a2 2 0 0 1 1.5-.7c.7 0 1.2.3 1.6.9v-.7h1.3v4.6l-.1 1.4-.5.7a2 2 0 0 1-.7.4l-1.1.2c-1 0-1.5-.2-2-.5-.3-.3-.5-.7-.5-1.2v-.1Zm1.3-3c0 .5 0 .9.3 1.1.2.3.5.4.8.4.3 0 .6 0 .8-.4.2-.2.4-.6.4-1.1 0-.6-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M666.3 1116v-7.1h1.3v7.1h-1.3Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M669 1110.2v-1.3h1.4v1.3H669Zm0 5.8v-5.1h1.4v5.1H669Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M674.2 1110.9v1h-1V1114.9l.2.2h.2l.6-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.2-.5v-3.3h-.6v-1h.6v-1l1.4-.9v1.9h.9Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M674.6 1116v-1l2-2.3.7-.7h-2.5v-1.1h4.3v1l-2 2.2-.7.8h2.8v1.1h-4.6Z"
            data-ubhnchn="344"
            fill="#000"
          />
          <path
            d="M626.4 1092v-7.2h4.9v1.3h-3.5v1.7h3v1.2h-3v3h-1.4Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M635.5 1090.3l1.3.3c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M641.4 1092v-.8a2 2 0 0 1-2.7.7l-.5-.7-.2-1.1v-3.3h1.4v3.7l.3.4.5.2c.3 0 .5 0 .7-.2.1-.1.3-.3.3-.5l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M647.1 1090.3l1.4.3c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3H645c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M651 1092h-1.3v-5.2h1.2v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 1 .3l-.5 1.2c-.2-.2-.5-.3-.7-.3-.1 0-.3 0-.4.2-.2 0-.3.3-.4.6v3.3Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M653.5 1092v-7.2h1.4v2.6a2 2 0 0 1 1.5-.7 2 2 0 0 1 1.6.7c.4.4.6 1.1.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5l-.8-.7v.8h-1.3Zm1.4-2.7c0 .5 0 1 .3 1.2.2.3.5.5.9.5.3 0 .6 0 .8-.3.2-.3.3-.7.3-1.3 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.3 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M660.7 1088.4l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4s1.1 0 1.4.2c.3.2.5.3.6.6.2.2.2.6.2 1.2v2.6l.3.7H663a4.7 4.7 0 0 1-.2-.6l-.8.5a2 2 0 0 1-.8.2c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8l.5-.5c.3-.1.7-.3 1.1-.3l1.4-.4v-.1c0-.3 0-.5-.2-.6l-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2 0-.3.3-.3.4 0 .2 0 .4.2.5l.6.3c.2 0 .5-.1.7-.3.2-.1.3-.3.3-.5V1089.5Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M669.8 1088.3l-1.4.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2 0 .6 0 1 .3 1.3.2.3.5.4.8.4.3 0 .5 0 .7-.2.1-.2.3-.4.3-.8l1.4.3c-.2.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.8-.7-.5-.5-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.5 1-.7 1.8-.7.6 0 1.1.1 1.5.4.4.3.6.7.8 1.3Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M672.2 1084.8v2.7a2 2 0 0 1 2.5-.6c.2 0 .4.2.5.4l.3.6v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.2 1 1 0 0 0-.6.2 1 1 0 0 0-.4.5v3.6h-1.5v-7.2h1.4Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M676.5 1090.5l1.4-.2c0 .3.1.5.3.6.2.2.4.2.8.2.3 0 .6 0 .8-.2l.1-.3v-.3l-.5-.2a7.7 7.7 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2s.1-.8.5-1.1c.4-.4.9-.5 1.6-.5.8 0 1.3.1 1.6.3.4.3.6.6.7 1l-1.3.3c0-.2-.1-.3-.3-.5l-.6-.1-.8.1-.2.3c0 .1 0 .2.2.3l1.3.3c.7.2 1.2.4 1.5.7.3.2.4.5.4 1s-.2.9-.6 1.2c-.4.4-1 .5-1.7.5s-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M684.9 1086.8v1.1h-1v2.8l.2.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.3l-.2-.6v-3.2h-.6v-1h.6v-1.1l1.4-.8v1.8h.9Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M687.2 1092h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2c.3 0 .6 0 .9.3l-.5 1.2-.6-.3c-.2 0-.4 0-.5.2l-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M690.8 1088.4l-1.3-.2c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.3.2.3.2.6.3.7.6l.2 1.2v2.6c0 .2.1.5.3.7h-1.4a4.7 4.7 0 0 1-.2-.6c-.2.3-.5.4-.7.5a2 2 0 0 1-.9.2c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.2.3-.4.6-.5.2-.1.6-.3 1-.3l1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.1-.8.2-.8.3-.2.4c0 .2 0 .4.2.5.1.2.3.3.5.3.3 0 .5-.1.7-.3l.4-.5V1089.5Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M695.3 1092v-4.6c0-.7 0-1.2.2-1.5 0-.4.3-.6.6-.9.4-.2.8-.3 1.3-.3.7 0 1.2.2 1.5.5.3.2.5.6.5 1 0 .3 0 .6-.3 1a7.6 7.6 0 0 0-.3.7l.1.3.6.7.7.8.2.8c0 .4-.2.8-.5 1.2-.4.3-.8.4-1.3.4a1.8 1.8 0 0 1-1.6-.9l1-.6c0 .2.1.3.2.3l.3.1.3-.1.2-.4c0-.1 0-.3-.2-.4l-.6-.7c-.6-.5-.9-.9-.9-1.2l.4-1 .2-.6v-.6a.6.6 0 0 0-.5-.2l-.4.1-.3.3v5.8h-1.4Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M704.4 1090.3l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4l-.2.9h2Z"
            data-ubhnchn="346"
            fill="#000"
          />
          <path
            d="M650.4 1068v-7.2h5v1.2h-3.5v1.7h3v1.2h-3v3h-1.5Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M657.8 1068h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 1 .2l-.5 1.2-.7-.2-.5.1-.3.6V1068Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M660.4 1062v-1.2h1.4v1.3h-1.4Zm0 6v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M666.2 1066.3l1.3.2c-.1.5-.4 1-.8 1.2-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.9.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M673.5 1068h-1.3v-.8a2 2 0 0 1-.7.7l-1 .2a2 2 0 0 1-1.4-.7 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 3.1 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7 0c.2-.2.3-.6.3-1.1 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.3.3-.4.6-.4 1.2Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M677.9 1066.3l1.3.2c-.2.5-.4 1-.8 1.2-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.9.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.1.5.3.8.3l.5-.2c.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.5-.3 1h2Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M685.1 1068h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1.6.4.3.6v4.2Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M687.6 1064.4l-1.3-.3c.1-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.1 1.3v2.6l.3.7h-1.3l-.2-.4v-.2l-.8.5-.8.2c-.5 0-1-.2-1.3-.4-.3-.3-.4-.7-.4-1.2 0-.3 0-.5.2-.7.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2c-.2.1-.3.3-.3.5s.1.4.3.5l.5.2c.2 0 .5 0 .7-.2.2-.2.3-.3.3-.5V1065.5Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M695.5 1068v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.1v-3.3h1.3v2.4l.1 1.3c0 .2.2.3.3.4l.5.1c.2 0 .4 0 .6-.2.2 0 .3-.2.4-.4l.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="348"
            fill="#000"
          />
          <path
            d="M554.3 1164.1v-7h1.4v5.8h3.6v1.2h-5Z"
            data-ubhnchn="350"
            fill="#000"
          />
          <path
            d="M560.4 1158.2v-1.2h1.3v1.2h-1.3Zm0 6v-5.3h1.3v5.2h-1.3Z"
            data-ubhnchn="350"
            fill="#000"
          />
          <path
            d="M567.6 1160.5l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.9.3c-.2.3-.3.7-.3 1.2 0 .6.1 1 .3 1.3.3.3.5.4.9.4.2 0 .5 0 .6-.2l.4-.8 1.3.3c-.1.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-2 0-.8.3-1.5.7-2 .5-.5 1-.7 1.8-.7.7 0 1.2.2 1.5.4.4.3.7.7.8 1.3Z"
            data-ubhnchn="350"
            fill="#000"
          />
          <path
            d="M570 1157v2.6a2 2 0 0 1 2.5-.6l.6.4.2.6.1 1v3.1H572v-3.7c0-.2-.2-.3-.3-.4a1 1 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.1 1v2.6h-1.4v-7.1h1.4Z"
            data-ubhnchn="350"
            fill="#000"
          />
          <path
            d="M577.2 1159v1h-1V1163l.2.1h.8l.1 1c-.3.2-.7.2-1 .2h-.8a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.7v-1.1l1.3-.8v1.8h1Z"
            data-ubhnchn="350"
            fill="#000"
          />
          <path
            d="M581.1 1162.5l1.4.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.7c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm.1-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="350"
            fill="#000"
          />
          <path
            d="M585 1164.1h-1.3v-5.2h1.2v.8c.2-.4.4-.6.6-.7l.6-.2 1 .3-.5 1.2c-.2-.2-.5-.3-.7-.3l-.4.2c-.2.1-.3.3-.4.6v3.3Z"
            data-ubhnchn="350"
            fill="#000"
          />
          <path
            d="M587 1159h.8v-.5l.1-1c0-.2.3-.3.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1.1.2l-.2 1-.6-.1-.4.1-.2.6v.3h1v1.1h-1v4.1h-1.3v-4h-.8v-1.2Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="M594 1162.5l1.3.2c-.2.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.7c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.3-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="M596.5 1164.1v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="M604 1164.1h-1.2v-.8a2 2 0 0 1-3.2.2 3 3 0 0 1-.6-2c0-.9.2-1.5.6-2a2 2 0 0 1 3 0v-2.5h1.4v7.1Zm-3.6-2.7c0 .6 0 1 .2 1.2a1 1 0 0 0 1.7.2c.3-.3.4-.7.4-1.3 0-.5-.1-1-.4-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.3c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="M608.4 1162.5l1.4.2c-.2.5-.5.9-.9 1.1-.3.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8s1.4.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4 0-.7-.2-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="M614.8 1164.1l-1.8-7.1h1.5l1.1 4.9 1.3-5h1.7l1.3 5 1-5h1.5l-1.7 7.2h-1.5l-1.5-5.3-1.4 5.3h-1.5Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="M626.2 1162.5l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.7c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="M628.2 1162.6l1.4-.2c0 .3.2.5.4.6.2.2.4.2.7.2.4 0 .7 0 .8-.2.2 0 .2-.2.2-.3v-.3l-.5-.2a7.3 7.3 0 0 1-2.1-.6c-.5-.3-.7-.7-.7-1.2s.2-.8.6-1.1c.3-.3.9-.5 1.6-.5.7 0 1.3.1 1.6.4.3.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4-.1-.2-.4-.2-.7-.2-.3 0-.6 0-.7.2l-.2.2c0 .1 0 .2.2.3l1.2.4c.8.1 1.3.3 1.6.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.9-1.2Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="M636.7 1159v1h-1V1163l.2.1h.8v1c-.2.2-.6.2-1 .2h-.7a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.7v-1.1l1.3-.8v1.8h1Z"
            data-ubhnchn="351"
            fill="#000"
          />
          <path
            d="m529.9 1185.8 1.4-.1c0 .5.2.8.5 1 .2.2.6.4 1 .4.5 0 .8-.1 1-.3.3-.2.4-.5.4-.7l-.1-.5-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1 .5-3.2l1.4-.2c1 0 1.6.2 2 .6.5.3.7.9.8 1.5l-1.5.1c0-.4-.2-.6-.4-.8l-.9-.2c-.4 0-.7 0-1 .2l-.2.5c0 .1 0 .3.2.4.2.2.6.3 1.3.5a7 7 0 0 1 1.6.5l.8.7c.2.3.3.7.3 1.2a2.1 2.1 0 0 1-1.3 2l-1.6.2c-.9 0-1.6-.2-2-.6-.6-.5-.9-1-1-1.9Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M540.3 1188.2v-.8a2 2 0 0 1-2.7.7l-.6-.7-.1-1.2v-3.2h1.3v2.3l.1 1.4.3.4.5.1a1 1 0 0 0 1-.7l.1-1.3v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M547.7 1188.2h-1.4v-3.7l-.3-.5a.8.8 0 0 0-.5-.1c-.2 0-.5 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4H543v-5.2h1.3v.7a2 2 0 0 1 1.7-.9l.8.2.6.4.2.6.1 1v3.2Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M553.9 1188.2h-1.3v-.8c-.2.3-.5.5-.8.6a2 2 0 0 1-.8.3 2 2 0 0 1-1.6-.8 3 3 0 0 1-.6-2c0-.8.2-1.5.6-2a2 2 0 0 1 3.1 0v-2.5h1.4v7.2Zm-3.7-2.8c0 .6 0 1 .2 1.3a1 1 0 0 0 1.8 0c.2-.2.3-.6.3-1.1 0-.6-.1-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M555.1 1188.5l1.6.2.1.4.7.1c.3 0 .6 0 .8-.2l.2-.3.1-.6v-.8c-.4.6-1 .9-1.5.9a2 2 0 0 1-1.7-1 3 3 0 0 1-.5-1.7c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.2.3 1.6.9v-.7h1.3v4.6c0 .6 0 1-.2 1.4 0 .3-.2.5-.4.7a2 2 0 0 1-.7.4l-1.2.2c-.9 0-1.5-.2-1.9-.5-.3-.3-.5-.7-.5-1.1v-.2Zm1.2-3c0 .5.1.9.3 1.2.3.2.5.3.8.3.4 0 .7 0 .9-.3.2-.3.3-.7.3-1.2s0-1-.3-1.2a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.2Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M562.4 1184.5l-1.3-.2c.2-.5.4-.8.7-1 .4-.3.9-.5 1.6-.5.6 0 1 .1 1.3.3l.7.5.1 1.2v1.7l.1 1 .2.7h-1.3l-.1-.5v-.1l-.8.5-.9.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.8c.1-.3.3-.5.6-.6l1-.3a8 8 0 0 0 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.2c-.2 0-.5 0-.8.2l-.8.2c-.2.1-.3.3-.3.5s.1.4.3.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.3-.4l.1-.7v-.2Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M570.3 1188.2v-.8a2 2 0 0 1-2.7.7l-.5-.7c-.2-.3-.2-.7-.2-1.2v-3.2h1.3v2.3l.1 1.4.3.4.5.1a1 1 0 0 0 1-.7l.1-1.3v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M576 1186.5l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.4H574c0 .4.1.7.4.9.2.2.4.3.7.3l.6-.1.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2.1Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M579.9 1188.2h-1.4v-5.2h1.3v.7c.2-.4.4-.6.6-.7l.6-.2.9.3-.4 1.2-.7-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M584.9 1185.8l1.4-.1c0 .5.3.8.5 1 .3.2.6.4 1 .4.5 0 .9-.1 1.1-.3l.4-.7c0-.2 0-.3-.2-.5l-.5-.3-1.2-.3a4 4 0 0 1-1.6-.7 1.9 1.9 0 0 1 .6-3.2l1.4-.2c.9 0 1.5.2 2 .6.4.3.7.9.7 1.5l-1.4.1-.4-.8-1-.2c-.4 0-.7 0-1 .2l-.2.5.2.4c.2.2.7.3 1.4.5a7 7 0 0 1 1.5.5c.4.2.6.4.8.7.2.3.3.7.3 1.2a2.1 2.1 0 0 1-1.3 2l-1.6.2c-.9 0-1.6-.2-2-.6-.5-.5-.8-1-1-1.9Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M594.3 1183v1h-1V1187l.2.2h.2l.6-.1.1 1c-.3.2-.7.3-1 .3-.3 0-.5 0-.7-.2a1 1 0 0 1-.5-.3l-.2-.5v-3.2h-.6v-1.1h.6v-1l1.4-.9v1.9h.9Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M596.6 1188.2h-1.4v-5.2h1.3v.7c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2-.6-.2-.5.1-.3.6-.1 1.8v1.6Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M600.2 1184.5l-1.3-.2c.2-.5.4-.8.8-1 .3-.3.8-.5 1.5-.5.6 0 1 .1 1.3.3.3.1.6.3.7.5l.2 1.2v2.7l.3.7h-1.4l-.1-.5v-.1l-.8.5-.9.2c-.5 0-1-.2-1.2-.5-.4-.3-.5-.6-.5-1s0-.6.2-.8c.1-.3.3-.5.6-.6l1-.3a8 8 0 0 0 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1.2-.8.2-.8.2-.2.5c0 .2 0 .4.2.5l.5.2c.3 0 .5 0 .7-.3.2 0 .3-.2.4-.4V1185.7Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M604.7 1188.2v-4.7c0-.7 0-1.2.2-1.5 0-.3.3-.6.6-.8.4-.2.8-.3 1.3-.3.7 0 1.2.1 1.5.4.3.3.5.6.5 1 0 .3 0 .6-.3 1a7 7 0 0 0-.3.5v.2l.1.4.6.6c.3.3.6.6.7.9a1.7 1.7 0 0 1-.3 1.9c-.4.3-.8.5-1.3.5l-1-.3-.6-.7 1-.5.2.3h.3a.5.5 0 0 0 .5-.4c0-.2 0-.3-.2-.4l-.6-.7c-.6-.5-.9-1-.9-1.3l.4-1 .3-.5v-.3c0-.2 0-.3-.2-.4a.6.6 0 0 0-.4-.1h-.4l-.3.4V1188.2h-1.4Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M613.8 1186.5l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4.9.2.2.4.3.8.3l.5-.1c.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2 1h2Z"
            data-ubhnchn="353"
            fill="#000"
          />
          <path
            d="M505.6 1212.2v-1.3l3.7-4.7H506v-1.2h5.2v1.1l-3.9 4.9h4v1.2h-5.7Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M515.3 1210.5l1.4.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.6.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M519.2 1205v2.7a2 2 0 0 1 1.6-.8l.9.1.5.5.3.6v4h-1.3v-3.7l-.4-.4a1 1 0 0 0-.4 0h-.7a1 1 0 0 0-.4.6v3.6h-1.4v-7.2h1.3Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M524 1212.2v-7.2h1.3v7.2H524Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M529.7 1210.5l1.4.3c-.2.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.6-1.8c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.3-.6Zm.1-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M537 1212.2h-1.3v-2.7l-.1-1a.8.8 0 0 0-.8-.6c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.8a2 2 0 0 1 2.5-.8l.6.5.3.5v4.2Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M543.2 1212.2h-1.3v-.8l-.7.7a2 2 0 0 1-2.4-.5 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 3.1 0v-2.6h1.4v7.2Zm-3.7-2.7.2 1.2c.3.3.6.5 1 .5.3 0 .6-.1.8-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M544.2 1209.5c0-.4.1-.9.4-1.3.2-.4.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2a3 3 0 0 1-3.3.5l-1-1c-.2-.5-.3-1-.3-1.6Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4s.7-.2.9-.4c.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.2-.3-.5-.4-.9-.4s-.7.1-1 .4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M552 1212.2h-1.4v-5.2h1.3v.7l.6-.7.5-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="355"
            fill="#000"
          />
          <path
            d="M119.2 1293.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="359"
            fill="#fff"
          />
          <path
            d="M143.2 1269.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="359"
            fill="#fff"
          />
          <path
            d="M82.4 1258v-1.3h3.1v2.9a4.9 4.9 0 0 1-3 1.1 4 4 0 0 1-2-.5 3 3 0 0 1-1.3-1.4c-.2-.5-.4-1.2-.4-1.8 0-.8.2-1.5.5-2 .3-.6.8-1 1.4-1.4.4-.2 1-.3 1.7-.3.9 0 1.6.2 2 .5.6.4.9 1 1 1.6l-1.4.2c-.1-.3-.3-.6-.6-.8-.3-.2-.6-.3-1-.3a2 2 0 0 0-1.5.6c-.4.4-.6 1-.6 1.8s.2 1.5.6 1.9c.4.4.8.6 1.5.6l.9-.1.8-.5v-.9h-1.7Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M88.1 1260.5h-1.3v-5.1H88v.7l.6-.7.6-.2 1 .3-.5 1.2c-.2-.2-.4-.2-.6-.2l-.5.1c-.2.1-.3.3-.3.6l-.2 1.8v1.5Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M90.7 1254.7v-1.3h1.4v1.3h-1.4Zm0 5.8v-5.1h1.4v5.1h-1.4Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M96.5 1258.9l1.4.2c-.2.5-.5 1-.9 1.2-.4.2-.8.4-1.4.4-.9 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M99 1260.5v-7.1h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 1.9a3 3 0 0 1-.7 2 2 2 0 0 1-2.4.5c-.3-.1-.5-.3-.7-.6v.8H99Zm1.4-2.7c0 .6 0 1 .2 1.2.3.4.6.6 1 .6.3 0 .5-.1.7-.4.2-.3.4-.7.4-1.2 0-.6-.2-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M109.9 1260.5h-1.4v-3.6c-.1-.3-.2-.4-.4-.5a.8.8 0 0 0-.4-.1c-.3 0-.5 0-.7.2a1 1 0 0 0-.4.5v3.5h-1.4v-5.1h1.2v.7a2 2 0 0 1 1.7-.8l.9.1.5.4.3.6v4.1Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M111.3 1254.7v-1.3h1.4v1.3h-1.4Zm0 5.8v-5.1h1.4v5.1h-1.4Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M116.4 1255.4v1h-.9V1259.4l.1.2h.3l.5-.1.1 1a1.8 1.8 0 0 1-1.8 0 1 1 0 0 1-.3-.2l-.2-.5v-3.2h-.7v-1.1h.6v-1l1.4-.9v1.9h1Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M116.8 1260.5v-1l2-2.3.7-.7H117v-1.1h4.3v1l-2 2.2-.7.8H121.5v1.1h-4.7Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M122 1259l1.3-.1.3.6.8.2c.4 0 .6 0 .8-.2l.2-.4-.1-.3-.5-.1a7 7 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.2 1.6.4c.3.2.5.6.7 1l-1.3.3c0-.3-.2-.4-.3-.5l-.7-.2c-.4 0-.6 0-.8.2l-.1.3.1.2 1.3.4 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.7-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M131 1258.9l1.3.2c-.1.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3H129c0 .5 0 .8.3 1 .2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M136.5 1258.9l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .5.2.8.4 1 .2.2.4.3.8.3l.5-.1c.1-.2.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2 1h2Z"
            data-ubhnchn="360"
            fill="#000"
          />
          <path
            d="M60.1 1277.9h4.1l.8.4c.2.1.4.3.5.6.2.2.3.5.3.8a1.7 1.7 0 0 1-1 1.5l1 .7c.2.3.3.7.3 1a2.1 2.1 0 0 1-.8 1.8 2 2 0 0 1-1 .3h-4.2v-7.1Zm1.5 1.2v1.6h2l.5-.2.3-.6-.2-.5a.8.8 0 0 0-.6-.3h-2Zm0 2.8v2h1.3l1-.1c.2 0 .4-.1.5-.3.2-.1.2-.3.2-.6l-.1-.5a.9.9 0 0 0-.5-.4H61.6Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M68.4 1281.5l-1.3-.3c.1-.5.4-.9.7-1 .4-.3.9-.5 1.6-.5.6 0 1 .1 1.3.3l.7.5.1 1.2v2.6l.3.8h-1.3a5.9 5.9 0 0 1-.2-.6l-.8.5-.8.2c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9l.6-.5 1-.3a8 8 0 0 0 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.2 0 .5 0 .7-.3.2 0 .3-.2.3-.4V1282.6Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M72.8 1285v-7.1h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 1.9a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5c-.3-.1-.6-.3-.8-.6v.8h-1.3Zm1.4-2.7c0 .6 0 1 .3 1.2.2.4.5.6.9.6.3 0 .6-.1.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M82 1283.4l1.4.2c-.2.5-.5 1-.9 1.2-.3.2-.8.4-1.4.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3H80c0 .5.1.8.3 1 .3.2.5.3.8.3l.6-.1.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M84.6 1285v-7.1h1.3v7.1h-1.3Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M86.9 1283.6l1.3-.2.4.6.8.2c.3 0 .6 0 .8-.2l.1-.4v-.3l-.5-.1a7 7 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.3-.3.9-.5 1.6-.5.7 0 1.3.2 1.6.4.4.2.6.6.7 1l-1.3.3c0-.3-.1-.4-.3-.5l-.6-.2c-.4 0-.7 0-.8.2-.1 0-.2.1-.2.3l.2.2 1.2.4 1.6.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5a3 3 0 0 1-1.7-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M92.9 1285v-7.1h1.3v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 1.9a3 3 0 0 1-.6 2 2 2 0 0 1-2.4.5c-.3-.1-.6-.3-.8-.6v.8H93Zm1.3-2.7c0 .6.1 1 .3 1.2.2.4.5.6 1 .6.2 0 .5-.1.7-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M102 1283.4l1.4.2c-.2.5-.5 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3H100c0 .5.2.8.4 1 .2.2.4.3.8.3l.5-.1c.1-.2.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3l-.2 1h2Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M106 1285h-1.5v-5.1h1.3v.7l.6-.7.6-.2.9.3-.4 1.2c-.3-.2-.5-.2-.7-.2l-.5.1-.3.6v3.3Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M108.4 1285.4l1.5.2.2.4.6.1c.4 0 .6 0 .8-.2l.3-.3v-1.4c-.3.6-.9.8-1.5.8a2 2 0 0 1-1.6-.8 3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2a2 2 0 0 1 1.6-.7c.6 0 1.1.3 1.5.9v-.7h1.3v4.6l-.1 1.4-.4.7a2 2 0 0 1-.8.4l-1.1.2c-1 0-1.5-.2-1.9-.5-.4-.3-.6-.7-.6-1.2v-.1Zm1.2-3c0 .5 0 .9.3 1.2.2.2.5.3.8.3.3 0 .6 0 .8-.4.3-.2.4-.6.4-1.1 0-.6-.1-1-.3-1.2a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M25.1 1310.8v-7.2h2.3l1.7.1c.4.1.8.4 1 .7.3.4.5.9.5 1.4 0 .5-.1.8-.3 1.1a2 2 0 0 1-.6.8l-.7.3h-2.5v2.8h-1.4Zm1.4-6v2h2l.4-.4.2-.6c0-.2 0-.4-.2-.6a1 1 0 0 0-.6-.3h-1.8Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M31.4 1308.1c0-.4.2-.9.4-1.3s.5-.8 1-1c.4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7 2.6 2.6 0 0 1-2.7 2.7 3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.2-.4-.4-.9-.4-1.5Zm1.5.1c0 .5 0 1 .3 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M40.3 1305.6v1.1h-1v2.8l.2.2h.8v1l-1 .2-.7-.1a1 1 0 0 1-.4-.3l-.2-.6v-3.2h-.7v-1.1h.6v-1l1.4-.8v1.8h1Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M40.7 1309.3l1.4-.2c0 .3.2.5.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.8.6-1.1.3-.4.9-.5 1.6-.5.7 0 1.2.1 1.6.3.3.3.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.1-.7.1-.2.3.1.3 1.3.3c.8.2 1.3.4 1.6.7.2.2.4.5.4 1 0 .4-.2.8-.6 1.2-.4.3-1 .5-1.8.5a3 3 0 0 1-1.7-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M51.5 1310.8h-1.2v-.8a2 2 0 0 1-.8.7l-.9.2a2 2 0 0 1-1.5-.7 3 3 0 0 1-.6-2c0-.9.2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M48 1308c0 .5 0 1 .2 1.2.2.3.5.5 1 .5.3 0 .5-.1.7-.4.3-.3.4-.7.4-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M54 1307.2l-1.3-.2c.1-.5.4-1 .7-1.2.3-.2.9-.3 1.5-.3s1 0 1.4.2c.3.1.5.3.6.6l.2 1.2v2.6l.3.7H56v-.4l-.1-.2-.8.5-.8.2c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1l.2-.8.6-.5c.3-.2.7-.3 1.1-.3l1.4-.4v-.1l-.2-.6-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.8 1.1-.9.2c-.4 0-.6.2-.7.3-.2 0-.3.2-.3.4s0 .4.2.5c.2.2.4.2.6.2.2 0 .5 0 .7-.2.1-.1.3-.3.3-.5V1308.3Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M58.4 1305.6h1.2v.7a2 2 0 0 1 1.6-.8c.4 0 .7 0 1 .2.2.1.4.3.5.6l.7-.6.9-.2c.4 0 .7 0 1 .2l.5.7.2 1v3.4h-1.4v-3l-.1-1c-.1-.2-.3-.3-.6-.3a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5l-.1 1.1v2.5h-1.4v-3.8l-.3-.4a.7.7 0 0 0-.4 0 1 1 0 0 0-1 .6v3.6h-1.4v-5.2Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M70.1 1310.8v-7.2h1.5v2.9h2.8v-2.9H76v7.2h-1.5v-3.1h-2.8v3H70Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M77.3 1310.8v-7.2h1.4v2.6a2 2 0 0 1 3 0c.5.4.7 1 .7 2a3 3 0 0 1-.7 2 2 2 0 0 1-2.4.5l-.7-.7v.8h-1.3Zm1.4-2.7c0 .5 0 1 .2 1.2.2.3.6.5 1 .5.3 0 .5-.1.7-.4.2-.2.4-.6.4-1.2s-.2-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M82.9 1305.6h.7v-.4c0-.4 0-.8.2-1 0-.2.2-.4.5-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1 .2l-.1 1-.6-.1-.5.1-.1.5v.4h1v1h-1v4.2h-1.4v-4.1H83v-1.1Z"
            data-ubhnchn="362"
            fill="#000"
          />
          <path
            d="M95 1317.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="364"
            fill="#816DA6"
          />
          <path
            d="M69 1313.2h9a7 7 0 1 1 0 14h-9a7 7 0 0 1 0-14Z"
            data-ubhnchn="364"
            fill="#816DA6"
          />
          <path
            d="m64.7 1321.8 1.7-.2c.1.6.3 1 .6 1.3.3.3.8.4 1.3.4s1-.1 1.2-.4c.3-.2.5-.5.5-.8 0-.2 0-.4-.2-.5-.1-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3l1-.8c.5-.2 1.1-.3 1.8-.3 1 0 1.9.2 2.4.7.5.5.8 1 .9 1.9h-1.8c0-.4-.2-.7-.5-1l-1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5 0 .3 0 .4.2.6l1.6.5a8 8 0 0 1 2 .7l.9.8c.2.4.3.9.3 1.4a2.5 2.5 0 0 1-1.6 2.3c-.5.3-1 .3-1.8.3-1.1 0-2-.2-2.5-.7-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="365"
            fill="#fff"
          />
          <path
            d="M76.1 1317.7v-1.6h5.7v1.2a11.6 11.6 0 0 0-2.9 7.3h-1.6a12.1 12.1 0 0 1 2.6-7H76Z"
            data-ubhnchn="365"
            fill="#fff"
          />
          <path
            d="m185.2 1265.4 1.7-.2c.1.6.3 1 .7 1.3.3.2.7.4 1.2.4.6 0 1-.2 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5-.1-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.3-.4.6-.7 1.1-.9.5-.2 1-.3 1.7-.3 1 0 1.9.3 2.4.7.6.5.9 1.2.9 2h-1.7l-.5-1-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.7.4 1.6.6a8 8 0 0 1 1.8.6c.4.2.8.5 1 .9.2.4.3.8.3 1.4a2.5 2.5 0 0 1-1.5 2.3c-.5.2-1.2.3-2 .3-1 0-1.8-.2-2.4-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="367"
            fill="#fff"
          />
          <path
            d="M200.9 1268.2h-1.7v-6.2c-.6.5-1.3 1-2 1.2v-1.5l1.3-.8a3 3 0 0 0 1-1.4h1.4v8.7Z"
            data-ubhnchn="367"
            fill="#fff"
          />
          <path
            d="M199.8 1229.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="367"
            fill="#fff"
          />
          <path
            d="M257 880.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="367"
            fill="#fff"
          />
          <path
            d="M204.5 869v-1.2h3.2v2.9c-.3.3-.8.5-1.4.8-.5.2-1.1.3-1.7.3a4 4 0 0 1-2-.5 3 3 0 0 1-1.2-1.3c-.3-.6-.4-1.2-.4-2 0-.7.1-1.3.4-2 .3-.5.8-1 1.4-1.2.5-.3 1-.4 1.7-.4 1 0 1.6.2 2.1.6.5.3.8.8 1 1.5l-1.5.3c0-.4-.3-.7-.5-.9-.3-.2-.7-.3-1-.3a2 2 0 0 0-1.6.6c-.4.4-.5 1-.5 1.8 0 .9.1 1.5.5 2 .4.4.9.6 1.5.6l1-.2.7-.4v-1h-1.7Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M210.3 871.7h-1.4v-5.2h1.3v.7l.6-.7.6-.1c.3 0 .6 0 .9.2l-.5 1.2-.6-.2c-.2 0-.3 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M216.3 871.7v-.8a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.1v-3.3h1.4v3.7l.4.4.5.1a1 1 0 0 0 1-.6v-3.6h1.4v5.2h-1.2Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M223.7 871.7h-1.4V868c-.1-.2-.2-.4-.4-.4a.8.8 0 0 0-.4-.2 1 1 0 0 0-.7.2 1 1 0 0 0-.4.5V871.7H219v-5.2h1.2v.8a2 2 0 0 1 1.7-1l.9.2.5.5c.2.1.3.3.3.5v4.2Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M228 870l1.5.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-.9 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7s1.3.2 1.8.7c.4.5.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .6-.2l.3-.6Zm.2-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M231.6 871.7l-1.6-5.2h1.3l1 3.4.9-3.4h1.3l.9 3.4 1-3.4h1.3l-1.7 5.2h-1.3l-.9-3.4-.8 3.4h-1.4Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M239.5 868l-1.3-.2c.1-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.1 1.3v2.6l.3.7h-1.3a5 5 0 0 1-.2-.6l-.8.5-.8.2c-.5 0-1-.2-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3c.7 0 1.1-.2 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1.2-.8.2-.8.2c-.2.2-.3.3-.3.5s.1.4.3.5c.1.2.3.2.5.2s.5 0 .7-.2c.2-.1.3-.3.3-.5V869.2Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M244 871.7v-7.2h1.4v7.2H244Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M251.5 871.7h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M248 869c0 .5 0 1 .2 1.2a1 1 0 0 0 1.7.1c.2-.3.4-.7.4-1.2 0-.6-.1-1-.4-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="368"
            fill="#000"
          />
          <path
            d="M381.4 1225.3v-7.1h2.1l1.3 4.8 1.3-4.8h2.2v7.1H387v-5.6l-1.5 5.6h-1.4l-1.4-5.6v5.6h-1.3Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M392.7 1223.7l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.8.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3l-.2.9h2Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M394.6 1225.3l2-2.6-1.9-2.6h1.7l1 1.5.9-1.5h1.6l-1.8 2.5 2 2.7h-1.7l-1-1.6-1.2 1.6h-1.6Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M400.9 1219.4v-1.2h1.3v1.2H401Zm0 6v-5.3h1.3v5.2H401Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M403.6 1225.3v-7.1h1.4v3.8l1.6-1.9h1.7l-1.8 2 1.9 3.2h-1.5l-1.3-2.3-.6.7v1.6h-1.4Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M408.9 1222.7c0-.5.1-1 .3-1.4.2-.4.6-.7 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.6 2.7c0 .8-.2 1.5-.7 2-.5.5-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4 0c0 .5.1 1 .4 1.2.2.3.5.4.9.4.3 0 .6-.1.9-.4.2-.3.3-.7.3-1.2s-.1-.9-.3-1.2c-.3-.2-.6-.4-1-.4-.3 0-.6.2-.8.5-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M415.3 1220.1h1.3v.8c.1-.3.3-.5.6-.6.3-.2.6-.3 1-.3a2 2 0 0 1 1.5.7c.4.5.6 1.2.6 2a3 3 0 0 1-.6 2 2 2 0 0 1-2.3.6l-.8-.6v2.6h-1.3v-7.2Zm1.3 2.5c0 .6.2 1 .4 1.3.2.3.5.4.8.4.3 0 .6 0 .8-.3.2-.3.3-.7.3-1.3 0-.5 0-1-.3-1.2a1 1 0 0 0-1.6 0c-.3.3-.4.6-.4 1.1Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M421.4 1225.3v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M425.2 1221.7l-1.2-.2c.1-.5.4-.9.7-1.1.3-.3.9-.4 1.5-.4s1.1 0 1.4.2l.6.6c.2.2.2.6.2 1.2v2.6l.3.7h-1.3l-.2-.4v-.1l-.8.5a2 2 0 0 1-.8.1c-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1 0-.4.1-.7.3-.9 0-.2.3-.4.5-.5l1.1-.3 1.4-.4c0-.4-.1-.6-.2-.7l-.8-.1a1 1 0 0 0-.5.1 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2.1-.3.3-.3.5s0 .3.2.5l.6.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M432.1 1220.1v1.1h-.9V1224.1l.2.1.2.1.5-.1.2 1c-.4.2-.7.2-1.1.2h-.7a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="M432.6 1225.3v-1l1.9-2.3.7-.8h-2.5v-1h4.3v1l-2 2.2-.6.8h2.7v1.1h-4.5Z"
            data-ubhnchn="370"
            fill="#000"
          />
          <path
            d="m270.8 1223 1.5-.1c0 .4.2.8.5 1 .2.2.6.3 1 .3.5 0 .8 0 1-.3.3-.2.4-.4.4-.7l-.1-.4-.5-.3-1.2-.3c-.8-.2-1.3-.4-1.6-.7-.5-.4-.7-.9-.7-1.5 0-.3.1-.7.3-1 .2-.3.5-.5 1-.7.3-.2.8-.3 1.3-.3 1 0 1.6.2 2 .6.5.4.7 1 .8 1.6H275c0-.3-.2-.6-.4-.7-.2-.2-.5-.3-.9-.3s-.7.1-1 .3l-.2.4c0 .2 0 .4.2.5l1.3.5c.7.1 1.3.3 1.6.5.3.1.6.4.8.7.2.3.3.7.3 1.1a2 2 0 0 1-1.3 2 4 4 0 0 1-1.6.3c-.9 0-1.6-.3-2-.7-.6-.4-.9-1-1-1.8Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M282.4 1221.7l-1.3.2a1 1 0 0 0-.4-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1 0 .7 0 1 .3 1.3.2.3.5.4.8.4.3 0 .5 0 .7-.2.1-.1.3-.4.3-.8l1.4.3c-.2.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.8-.7-.5-.5-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.6 0 1.1.2 1.5.4.4.3.6.7.8 1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M284.8 1218.2v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.4-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5v3.6h-1.5v-7.1h1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M289.6 1225.3v-7.1h1.3v7.1h-1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M293.4 1221.7l-1.3-.2c.2-.5.4-.9.7-1.1.4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.6.1 1.2v1.6l.1 1 .2.7h-1.3a6.5 6.5 0 0 1-.2-.5l-.7.5a2 2 0 0 1-.9.1c-.5 0-1-.1-1.3-.4-.3-.3-.4-.7-.4-1 0-.4 0-.7.2-.9.1-.2.3-.4.6-.5l1-.3 1.4-.4c0-.4 0-.6-.2-.7l-.7-.1a1 1 0 0 0-.6.1c-.1.1-.3.3-.3.5Zm1.8 1.1-.8.2-.8.3c-.2.1-.3.3-.3.5s.1.3.3.5l.5.2c.3 0 .5-.1.7-.3.2 0 .3-.2.3-.4l.1-.7v-.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M302.4 1221.7l-1.3.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1 0 .7.1 1 .3 1.3.2.3.5.4.9.4.2 0 .4 0 .6-.2.2-.1.3-.4.3-.8l1.4.3c-.1.6-.4 1-.8 1.4-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.8-.7-.5-.5-.7-1.1-.7-2 0-.8.2-1.5.7-2 .4-.4 1-.7 1.8-.7.6 0 1.1.2 1.5.4.4.3.7.7.8 1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M304.8 1218.2v2.6a2 2 0 0 1 2.5-.6 1.4 1.4 0 0 1 .8 1v4.1h-1.3v-3.7l-.3-.4a.9.9 0 0 0-.5-.1l-.6.1a1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.1h1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M312 1220.1v1.1h-1V1224.1l.2.1.2.1.6-.1v1c-.2.2-.6.2-1 .2h-.7a1 1 0 0 1-.4-.4l-.2-.5v-3.3h-.7v-1h.6v-1l1.4-.9v1.8h1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M316 1223.7l1.3.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.1.8.4 1 .2.2.4.3.7.3.3 0 .4 0 .6-.2l.3-.5Zm0-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.2.9h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M323.2 1225.3h-1.4v-3.7a.8.8 0 0 0-.8-.5c-.3 0-.5 0-.7.2a1 1 0 0 0-.3.5l-.2 1.2v2.3h-1.3v-5.2h1.3v.8a2 2 0 0 1 1.7-.9c.3 0 .5 0 .8.2.2 0 .4.2.6.4l.2.6.1.9v3.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M324.1 1223.8l1.4-.2c0 .3.2.5.4.6.1.2.4.3.7.3.4 0 .6-.1.8-.3l.2-.3-.1-.3-.5-.1a7.7 7.7 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.6.4c.3.2.6.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.3 0-.6 0-.8.2l-.1.2.1.3 1.3.4c.7.1 1.2.3 1.5.6.3.2.5.6.5 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M333.2 1223.7l1.3.2c-.1.5-.4.9-.8 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.6.6-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .8.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2 0 .3-.3.4-.5Zm0-1.4c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M338.7 1223.7l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.8.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3l-.2.9h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M134.9 1211.7v-7.1h1.4l3 4.8v-4.8h1.3v7.1H139l-2.9-4.6v4.6H135Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M142.1 1205.8v-1.2h1.4v1.3H142Zm0 6v-5.3h1.4v5.2H142Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M144.8 1211.7v-7.1h1.4v3.8l1.6-1.9h1.7l-1.8 2 2 3.2H148l-1.3-2.3-.6.7v1.6h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M150.1 1209c0-.4.1-.8.4-1.3.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.5-.8 2s-1.1.8-1.9.8a3 3 0 0 1-1.4-.4c-.4-.2-.7-.5-1-1-.2-.3-.3-.8-.3-1.4Zm1.4.1c0 .6.1 1 .4 1.2.2.3.5.4.9.4s.7-.1.9-.4c.2-.3.4-.6.4-1.2 0-.5-.2-.9-.4-1.1-.2-.3-.5-.5-1-.5-.3 0-.6.2-.8.5-.3.2-.4.6-.4 1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M156.5 1211.7v-7.1h1.4v7.1h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M160.3 1208.1l-1.2-.2c.1-.5.4-.9.7-1.1.4-.3.9-.4 1.5-.4.7 0 1.1.1 1.4.3.3.1.5.3.6.5.2.2.2.6.2 1.2v2.6l.3.7h-1.3l-.2-.4v-.1a2.4 2.4 0 0 1-1.6.7c-.5 0-1-.2-1.3-.5-.3-.3-.4-.6-.4-1s0-.6.2-.9c.1-.2.3-.4.6-.5l1-.3c.7-.1 1.1-.2 1.4-.4 0-.3 0-.5-.2-.6-.1-.2-.4-.2-.7-.2l-.6.1-.4.5Zm1.9 1.2a21.3 21.3 0 0 1-1.6.4c-.2.1-.3.3-.3.5l.2.5.6.2c.2 0 .5-.1.7-.3.2 0 .3-.2.3-.4v-1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M164.4 1210.3l1.4-.3c0 .3.2.5.3.7l.8.2.8-.2.2-.4-.1-.3-.5-.1a7.3 7.3 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.6.4c.3.2.5.5.7 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.4 0-.6 0-.8.2l-.1.3.1.2 1.3.4c.7.2 1.2.3 1.5.6.3.2.5.6.5 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.8.5-.7 0-1.3 0-1.7-.4a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M170 1210.3l1.3-.3.4.7.8.2.8-.2.1-.4v-.3l-.5-.1a7.3 7.3 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.1-.8.5-1.1.4-.3.9-.5 1.6-.5.8 0 1.3.1 1.6.4.4.2.6.5.7 1l-1.3.2c0-.2-.1-.3-.3-.4l-.6-.2c-.4 0-.7 0-.8.2-.1 0-.2.1-.2.3l.2.2 1.3.4c.7.2 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.7.5s-1.3 0-1.7-.4a2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M179 1210l1.4.3c-.2.5-.5.9-.8 1.2-.4.2-.9.3-1.5.3-.9 0-1.5-.2-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3H177c0 .5.1.8.4 1 .2.2.4.3.8.3l.5-.1.3-.6Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.5-.2.9h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M184.6 1210l1.4.3c-.2.5-.5.9-.9 1.2-.4.2-.8.3-1.4.3-.9 0-1.6-.2-2-.8a3 3 0 0 1-.5-1.8c0-.9.2-1.5.7-2 .4-.5 1-.8 1.7-.8s1.3.3 1.8.8c.4.5.7 1.3.6 2.3h-3.4c0 .5.1.8.3 1 .2.2.5.3.8.3l.6-.1.3-.6Zm0-1.3c0-.4 0-.7-.2-1a1 1 0 0 0-.8-.2 1 1 0 0 0-.7.3c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M117.3 1235l-1.7-7.2h1.5l1 5 1.4-5h1.7l1.2 5 1.1-5h1.5l-1.8 7.2h-1.5l-1.4-5.3-1.4 5.3h-1.6Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M126.7 1231.4l-1.2-.2c.1-.5.4-.9.7-1.1.3-.3.9-.4 1.5-.4s1.1 0 1.4.2c.3.2.5.3.6.6.2.2.2.6.2 1.2v2.6l.3.7H129a4.9 4.9 0 0 1-.2-.6l-.8.5c-.2.2-.5.2-.8.2-.6 0-1-.1-1.3-.4-.3-.3-.5-.7-.5-1.1 0-.3.1-.6.3-.8 0-.2.3-.4.5-.5.3-.1.7-.3 1.1-.3a8 8 0 0 0 1.4-.4v-.1l-.2-.6-.8-.2a1 1 0 0 0-.5.2 1 1 0 0 0-.4.5Zm1.9 1.1-.9.2-.7.3c-.2 0-.3.3-.3.4 0 .2 0 .4.2.5l.6.3c.2 0 .5-.1.7-.3.1-.1.3-.3.3-.5V1232.5Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M136 1235h-1.4v-3.7l-.4-.4a.8.8 0 0 0-.4-.2l-.7.2a1 1 0 0 0-.4.6v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.7-.9c.3 0 .6 0 .9.2a1.4 1.4 0 0 1 .8 1V1235Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M142.1 1235h-1.4v-3.7l-.3-.4a.8.8 0 0 0-.5-.2l-.7.2a1 1 0 0 0-.4.6v3.5h-1.4v-5.2h1.2v.8a2 2 0 0 1 1.8-.9c.3 0 .5 0 .8.2a1.4 1.4 0 0 1 .8 1l.1.9v3.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M143 1233.5l1.4-.2c0 .3.2.5.3.6l.8.2c.4 0 .6 0 .8-.2l.2-.3-.1-.3-.5-.2a7 7 0 0 1-2-.6c-.5-.3-.7-.7-.7-1.2s.2-.8.5-1.1c.4-.4 1-.5 1.7-.5s1.2.1 1.6.3c.3.3.6.6.7 1l-1.3.3c0-.2-.2-.3-.3-.5l-.7-.1-.8.1-.1.3.1.3 1.3.3 1.5.6c.3.3.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.3-.1-1.7-.4a2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M152 1233.3l1.4.3c-.1.5-.4.9-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.3h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm.1-1.3c0-.4 0-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.9h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M157.6 1233.3l1.4.3c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.3-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1-.1.3-.3.3-.6Zm.1-1.3c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.2.5-.2.9h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1115 1000.4v-7.2h1.5v3.2l3-3.2h1.9l-2.7 2.8 2.8 4.4h-1.8l-2-3.4-1.2 1.2v2.2h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1122 997.7c0-.4 0-.9.3-1.3.2-.4.5-.8 1-1 .4-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.2 1.4-.7 2-.5.4-1.2.7-2 .7a3 3 0 0 1-1.3-.3c-.4-.2-.8-.6-1-1a3 3 0 0 1-.3-1.5Zm1.4 0c0 .6.1 1 .3 1.3.3.2.6.4 1 .4.3 0 .6-.2.8-.4.3-.3.4-.7.4-1.2s-.1-1-.4-1.2c-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.9.4-.2.3-.3.7-.3 1.2Zm-.4-3.4V993h1.1v1.2h-1.1Zm2 0V993h1.2v1.2h-1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1128.4 1000.4v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1131.2 1000.4v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1138.7 1000.4h-1.4v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.8.8 0 0 0-.5-.2c-.2 0-.4 0-.6.2a1 1 0 0 0-.4.5V1000.4h-1.5v-5.2h1.3v.8a2 2 0 0 1 1.7-1l.8.2c.3.1.5.3.6.5.2.1.2.3.3.5v4.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1140 994.5v-1.3h1.4v1.3h-1.3Zm0 5.9v-5.2h1.4v5.2h-1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1142.3 998.9l1.4-.2c0 .3.2.5.4.6l.7.2c.4 0 .7 0 .8-.2.2 0 .2-.2.2-.4v-.2l-.5-.2a7.2 7.2 0 0 1-2.1-.7c-.5-.2-.7-.6-.7-1.1 0-.5.2-.9.6-1.2.3-.3.9-.4 1.6-.4.7 0 1.3 0 1.6.3.4.3.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.7-.1-.7.1-.2.3s0 .2.2.2c0 .1.5.3 1.2.4l1.6.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4a2 2 0 0 1-.9-1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1153 996.7l-1.4.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3c-.2.2-.3.6-.3 1.2s.1 1 .3 1.3c.2.2.5.4.9.4l.6-.2c.2-.2.3-.5.3-.8l1.4.2c-.2.6-.4 1.1-.8 1.4-.4.3-1 .5-1.6.5-.8 0-1.4-.3-1.8-.7-.5-.5-.7-1.2-.7-2 0-.9.2-1.5.7-2 .4-.5 1-.7 1.8-.7.6 0 1.2.1 1.5.4.4.3.7.7.8 1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1155.3 993.2v2.6a2 2 0 0 1 2.5-.5 1.4 1.4 0 0 1 .8 1v4h-1.3v-3.7l-.3-.3a1.1 1.1 0 0 0-1.1 0 1 1 0 0 0-.4.5l-.2 1v2.6h-1.3v-7.2h1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1163 998.7l1.5.3c-.2.5-.5.8-.9 1.1-.4.3-.8.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.5.6 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm.2-1.4c0-.4-.2-.7-.4-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1126.7 1010.4v-7.2h1.5v2.8h2.8v-2.8h1.5v7.2h-1.5v-3.1h-2.8v3h-1.5Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1137 1008.7l1.3.3c-.1.5-.4.8-.8 1.1-.4.3-.9.4-1.4.4-1 0-1.6-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.6-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.9.7.4.6.6 1.3.6 2.4h-3.4c0 .4 0 .7.3 1 .2.2.5.3.8.3.2 0 .4 0 .5-.2.2-.1.3-.3.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1139.5 1004.5v-1.3h1.4v1.3h-1.4Zm0 5.9v-5.2h1.4v5.2h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1147 1010.4h-1.2v-.8a2 2 0 0 1-.8.7 2 2 0 0 1-2.4-.5 3 3 0 0 1-.6-2c0-1 .2-1.6.6-2a2 2 0 0 1 3 0v-2.6h1.5v7.2Zm-3.6-2.7c0 .5 0 1 .2 1.2.2.3.6.5 1 .5.3 0 .5-.1.8-.4.2-.3.3-.7.3-1.2 0-.6-.1-1-.3-1.3a1 1 0 0 0-.9-.4 1 1 0 0 0-.8.4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M1151.4 1008.7l1.4.3c-.2.5-.5.8-.8 1.1-.4.3-1 .4-1.5.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.6.7 1.3.6 2.4h-3.4c0 .4.1.7.3 1 .3.2.5.3.8.3.3 0 .4 0 .6-.2l.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M695.8 913.8v-3l-2.6-4.2h1.7l1.7 2.8 1.6-2.8h1.7l-2.7 4.2v3h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M699.5 911.1c0-.5.1-.9.4-1.3.2-.4.5-.8 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .7-.3 1.4-.8 2-.5.4-1.1.7-1.9.7a3 3 0 0 1-1.4-.3l-1-1c-.2-.4-.3-.9-.3-1.5Zm1.4 0c0 .6.1 1 .4 1.3.2.2.5.4.9.4s.7-.2.9-.4c.2-.3.4-.7.4-1.2s-.2-1-.4-1.2c-.2-.3-.5-.4-.9-.4s-.7.1-1 .4c-.2.3-.3.7-.3 1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M707.3 913.8h-1.4v-5.2h1.3v.7l.5-.7.6-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2-.1 0-.3.3-.3.5l-.1 1.8v1.6Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M714.4 910.1l-1.4.3a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.3 1 1 0 0 0-.9.4c-.2.2-.3.6-.3 1.2s.1 1 .4 1.3c.2.2.4.4.8.4.2 0 .5-.1.6-.3.2-.1.3-.4.4-.7l1.3.2c-.1.6-.4 1.1-.8 1.4-.4.3-1 .5-1.6.5-.7 0-1.3-.3-1.8-.7-.4-.5-.7-1.2-.7-2 0-.9.3-1.5.7-2 .5-.5 1-.7 1.8-.7.7 0 1.2.1 1.6.4.3.2.6.7.8 1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M715.4 913.8v-7.2h1.3v3.8l1.6-1.8h1.7l-1.8 1.9 2 3.3h-1.5l-1.3-2.4-.7.7v1.7h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M720.5 912.3l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.1-.4v-.2l-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.3-.6-.6-.6-1.1 0-.5.1-.9.5-1.2.4-.3.9-.4 1.6-.4.8 0 1.3 0 1.6.3.4.2.6.6.7 1l-1.3.3c0-.2-.1-.4-.3-.5l-.6-.1-.8.1-.2.3s0 .2.2.2c.1.1.5.3 1.3.4l1.5.6c.3.3.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5a3 3 0 0 1-1.7-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M728.9 908.6v1h-1V912.6l.2.2h.8l.1 1-1 .2-.7-.1a1 1 0 0 1-.5-.4l-.2-.5v-3.2h-.6v-1.1h.6v-1l1.4-.8v1.8h.9Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M731.2 913.8h-1.4v-5.2h1.3v.7l.6-.7.5-.1c.4 0 .7 0 1 .2l-.5 1.2-.6-.2c-.2 0-.4 0-.5.2l-.3.5-.1 1.8v1.6Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M734.8 910.2l-1.3-.3c.2-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.2 1.3v2.6l.3.7h-1.4a5 5 0 0 1-.2-.6l-.7.5-.9.2c-.5 0-1-.2-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3 1.4-.3v-.1c0-.3 0-.5-.2-.6l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2c-.2.2-.2.3-.2.5s0 .4.2.5l.5.2c.3 0 .5 0 .7-.2l.4-.5V911.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M739.3 913.8V909l.1-1.5.7-.8c.3-.2.8-.3 1.3-.3.7 0 1.2.1 1.5.4.3.3.5.6.5 1s-.1.7-.3 1l-.3.6v.2l.1.3.6.6.7.9a1.7 1.7 0 0 1-.4 2c-.3.2-.7.4-1.2.4l-1-.3-.6-.6 1-.6.2.3h.6l.2-.4c0-.1 0-.3-.2-.4l-.6-.7c-.6-.5-.9-1-.9-1.2l.3-1 .3-.6v-.7a.6.6 0 0 0-.5-.1h-.4l-.3.4V913.8h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M748.4 912.1l1.4.2c-.2.5-.5 1-.9 1.2-.3.3-.8.4-1.4.4-.9 0-1.5-.3-2-.9a3 3 0 0 1-.5-1.8c0-.8.2-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.1.7.3 1 .3.1.5.3.8.3l.6-.2.3-.6Zm0-1.4c0-.4 0-.7-.2-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M668.2 925.5h-.8c-.4-.6-.7-1.3-.9-2a6.1 6.1 0 0 1 1-5.6h.7a12 12 0 0 0-.7 2 7.6 7.6 0 0 0 .2 4.4l.5 1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M671.7 921.7v-1h2.5v2.3l-1 .6-1.4.3c-.6 0-1.2-.2-1.6-.4-.5-.3-.8-.6-1-1-.2-.6-.4-1-.4-1.6 0-.6.2-1.1.4-1.6.3-.5.6-.8 1.1-1a3 3 0 0 1 1.4-.4c.7 0 1.3.2 1.7.5.4.3.6.7.7 1.2l-1.1.2-.5-.6c-.2-.2-.5-.3-.8-.3-.5 0-1 .2-1.2.5-.3.3-.5.8-.5 1.4 0 .7.2 1.2.5 1.6.3.3.7.5 1.2.5.2 0 .5 0 .7-.2.3 0 .5-.2.6-.3v-.7h-1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M676.3 923.8h-1v-4.2h1v.6c.1-.3.3-.5.4-.5l.5-.2.7.2-.3 1a1 1 0 0 0-.6-.2l-.3.1c-.2.1-.2.3-.3.5v2.7Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M678.1 921.6c0-.3.1-.7.3-1 .2-.4.4-.6.8-.8a2 2 0 0 1 3.3 1.9c-.1.6-.3 1.1-.7 1.5a2 2 0 0 1-1.5.7c-.4 0-.8-.1-1.1-.3-.4-.2-.6-.4-.8-.8-.2-.3-.3-.7-.3-1.2Zm1.1.1c0 .4.1.7.3 1 .2.2.5.3.8.3.2 0 .5-.1.7-.4.2-.2.3-.5.3-1l-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M683.2 923.8V920c0-.5 0-.9.2-1.1 0-.3.2-.5.5-.7.3-.2.6-.3 1-.3.6 0 1 .2 1.2.4.3.2.4.5.4.8 0 .3 0 .5-.2.8l-.2.4v.4l.5.5.6.7v.6c0 .4 0 .7-.3 1-.3.2-.6.4-1 .4l-.7-.2-.6-.6.8-.4.2.2h.5l.1-.3-.1-.3-.6-.6c-.4-.4-.6-.7-.6-1 0-.1 0-.4.2-.7l.3-.6v-.2l-.1-.3-.4-.1-.3.1-.2.3v4.6h-1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M688 924l1.3.2.1.3.5.1.7-.1.2-.3v-1.1c-.3.4-.7.7-1.2.7s-1-.3-1.3-.7c-.3-.4-.4-.9-.4-1.4 0-.7.2-1.3.5-1.6.3-.4.8-.6 1.3-.6s.9.3 1.2.7v-.6h1V924.4l-.4.6-.6.3a3 3 0 0 1-1 .2c-.6 0-1.1-.2-1.4-.4-.3-.3-.5-.6-.5-1Zm1-2.4c0 .4.1.8.3 1l.6.3c.3 0 .5-.1.7-.3.2-.2.3-.6.3-1s-.1-.7-.3-1a.8.8 0 0 0-.7-.2c-.2 0-.4 0-.6.3-.2.2-.3.5-.3 1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M692.8 921.6c0-.3 0-.7.2-1 .2-.4.5-.6.8-.8.3-.2.7-.3 1.1-.3a2 2 0 0 1 2.2 2.2c0 .6-.2 1.1-.6 1.5a2 2 0 0 1-1.6.7c-.4 0-.7-.1-1-.3-.4-.2-.7-.4-.9-.8l-.2-1.2Zm1.1.1c0 .4.1.7.3 1 .2.2.4.3.7.3.3 0 .5-.1.7-.4.2-.2.3-.5.3-1 0-.3 0-.6-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.3-.3.6-.3 1Zm-.3-2.8v-1h.9v1h-1Zm1.6 0v-1h1v1h-1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M699 923.8h-1.1v-4.2h1v.6c.2-.3.3-.5.5-.5l.4-.2.8.2-.4 1a1 1 0 0 0-.5-.2l-.4.1-.2.5-.1 1.4v1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M700.6 922.6l1.1-.2c0 .2.2.4.3.5l.6.2c.3 0 .5 0 .7-.2l.1-.3v-.2l-.4-.1a6 6 0 0 1-1.7-.6 1 1 0 0 1-.5-.9c0-.4.1-.7.4-1 .3-.2.8-.3 1.3-.3.6 0 1 .1 1.3.3.3.2.5.5.6.8l-1 .2-.3-.4a1 1 0 0 0-.5 0h-.7v.5l1 .3c.6.1 1 .3 1.3.5.2.1.3.4.3.8s-.1.7-.5 1c-.3.2-.7.4-1.4.4-.5 0-1-.2-1.3-.4-.3-.2-.6-.5-.7-1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M709.1 920.8l-1 .2-.3-.4a.7.7 0 0 0-.5-.2c-.3 0-.5 0-.7.3l-.2 1c0 .4 0 .8.2 1 .2.2.4.3.7.3.2 0 .4 0 .5-.2l.3-.6 1 .2a2 2 0 0 1-.6 1 2 2 0 0 1-1.3.5 2 2 0 0 1-1.4-.6c-.4-.4-.6-1-.6-1.6 0-.7.2-1.2.6-1.6a2 2 0 0 1 1.5-.6c.5 0 .9.1 1.2.4.3.2.5.5.6 1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M711 918v2.1a1.6 1.6 0 0 1 2-.4c.2 0 .3.2.4.3l.2.5.1.8v2.5h-1v-2.2c0-.5-.1-.7-.2-.9 0 0 0-.2-.2-.2a.7.7 0 0 0-.4-.1l-.5.1-.3.4v2.8h-1.2V918h1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M717.2 922.4l1.1.2c-.1.4-.3.7-.7 1a2 2 0 0 1-1 .3c-.8 0-1.3-.3-1.7-.7-.3-.4-.4-.9-.4-1.5 0-.7.2-1.2.5-1.6.4-.4.9-.6 1.4-.6.6 0 1.1.2 1.5.6.3.4.5 1 .5 2h-2.8c0 .2.1.5.3.7.2.2.4.2.6.2l.5-.1s.2-.2.2-.5Zm0-1c0-.4 0-.6-.2-.8a.8.8 0 0 0-.5-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.3.7h1.7Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M723 923.8h-1v-2.1l-.1-1a.6.6 0 0 0-.6-.3l-.5.1-.4.4v2.9h-1.1v-4.2h1v.6c.3-.4.8-.7 1.3-.7.3 0 .5 0 .7.2a1 1 0 0 1 .7.8v3.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M723.8 922.6l1-.2.4.5.6.2c.2 0 .5 0 .6-.2l.1-.3v-.2l-.4-.1a6 6 0 0 1-1.7-.6 1 1 0 0 1-.5-.9c0-.4.2-.7.4-1 .3-.2.8-.3 1.4-.3.5 0 1 .1 1.2.3.3.2.5.5.6.8l-1 .2-.3-.4a1 1 0 0 0-.5 0h-.6l-.2.3.2.2 1 .3c.6.1 1 .3 1.2.5.2.1.3.4.3.8s-.1.7-.4 1c-.3.2-.8.4-1.4.4-.6 0-1-.2-1.4-.4-.3-.2-.5-.5-.6-1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M730.5 919.6v.9h-.7v2.4h.7l.1.8-.9.2-.5-.1a.8.8 0 0 1-.4-.3 1 1 0 0 1-.1-.4v-2.6h-.5v-.9h.5v-.8l1-.6v1.4h.8Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M732.3 923.8h-1v-4.2h1v.6c.1-.3.3-.5.4-.5l.5-.2.7.2-.3 1a1 1 0 0 0-.5-.2l-.4.1-.3.5v2.7Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M735.2 920.9l-1-.2c.1-.4.3-.7.6-.9.3-.2.7-.3 1.2-.3s.9 0 1.1.2l.5.4.1 1v2.1l.3.6h-1.1a4.7 4.7 0 0 1-.1-.5 2 2 0 0 1-.6.4l-.7.2c-.5 0-.8-.2-1-.4-.3-.2-.4-.5-.4-.9 0-.2 0-.4.2-.6 0-.2.2-.3.4-.4l.9-.3a6 6 0 0 0 1-.2v-.6l-.7-.1h-.4l-.3.5Zm1.5.9a7 7 0 0 1-.7.1 2 2 0 0 0-.6.2l-.2.4c0 .2 0 .3.2.4l.4.2c.2 0 .4 0 .6-.2l.2-.4v-.7Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M738.8 923.8V920l.1-1.1c.1-.3.3-.5.6-.7.2-.2.6-.3 1-.3.5 0 1 .2 1.2.4.3.2.4.5.4.8 0 .3 0 .5-.2.8l-.3.4v.2l.1.2.5.5.5.7.2.6c0 .4-.2.7-.4 1-.3.2-.6.4-1 .4l-.8-.2-.5-.6.8-.4s0 .2.2.2h.5v-.6l-.6-.6c-.4-.4-.6-.7-.6-1 0-.1 0-.4.2-.7l.2-.6v-.5l-.4-.1-.3.1-.2.3-.1.8v3.8h-1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M746.1 922.4l1.1.2c-.1.4-.3.7-.7 1a2 2 0 0 1-1 .3c-.8 0-1.3-.3-1.7-.7-.3-.4-.4-.9-.4-1.5 0-.7.2-1.2.5-1.6.4-.4.8-.6 1.4-.6.6 0 1.1.2 1.5.6.3.4.5 1 .5 2h-2.8c0 .2.1.5.3.7.2.2.4.2.6.2l.5-.1s.2-.2.2-.5Zm0-1c0-.4 0-.6-.2-.8a.8.8 0 0 0-.5-.2c-.3 0-.5 0-.6.2a1 1 0 0 0-.3.7h1.7Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M747.9 925.5a13.2 13.2 0 0 0 .7-2 8.7 8.7 0 0 0 .2-1.8c0-.6 0-1.2-.2-1.7-.1-.6-.4-1.3-.7-2h.7l1 1.7a5.8 5.8 0 0 1 0 3.7c-.2.7-.5 1.4-1 2h-.7Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M783 919.5v-3l-2.7-4.1h1.7l1.7 2.8 1.6-2.8h1.7l-2.6 4.1v3h-1.5Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M786.6 916.9c0-.5.1-1 .4-1.4.2-.4.5-.7 1-1 .3-.2.8-.3 1.3-.3a2.6 2.6 0 0 1 2.7 2.7c0 .8-.3 1.4-.8 2-.5.5-1.1.7-1.9.7a3 3 0 0 1-1.3-.3c-.5-.2-.8-.5-1-1-.3-.3-.4-.9-.4-1.4Zm1.4 0c0 .5.2 1 .4 1.2.3.3.6.4 1 .4.3 0 .6-.1.8-.4.3-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.2-.5-.4-.9-.4-.3 0-.6.2-.9.4-.2.3-.4.7-.4 1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M794.4 919.5H793v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2-.6-.3-.5.2-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M801.5 915.9l-1.4.2a1 1 0 0 0-.3-.6 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.2.2-.3.6-.3 1.1 0 .6 0 1 .3 1.3.2.3.5.4.8.4.3 0 .5 0 .6-.2.2-.1.3-.4.4-.8l1.3.3c0 .6-.4 1-.8 1.4-.4.3-.9.4-1.6.4-.7 0-1.3-.2-1.8-.7-.4-.5-.6-1.1-.6-2 0-.8.2-1.5.6-2 .5-.4 1.1-.7 1.9-.7.6 0 1.1.2 1.5.4.3.3.6.7.8 1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M802.5 919.5v-7.1h1.3v3.8l1.6-1.9h1.7l-1.7 2 1.9 3.2h-1.5l-1.3-2.3-.7.7v1.6h-1.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M807.6 918l1.4-.2c0 .3.1.5.3.6.2.2.5.2.8.2l.8-.1.2-.4-.1-.3-.5-.2a7.4 7.4 0 0 1-2.1-.6c-.4-.3-.6-.7-.6-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.1 1.5.4c.4.2.6.5.8 1l-1.3.2c0-.2-.2-.3-.3-.4l-.7-.2c-.4 0-.6 0-.8.2l-.1.2.1.3 1.3.4c.7.1 1.2.3 1.5.6.3.2.4.6.4 1 0 .5-.2.9-.6 1.2-.4.4-1 .5-1.7.5a3 3 0 0 1-1.7-.4 2 2 0 0 1-.8-1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M816 914.3v1.1h-1v2.1l.1.8.1.1.3.1.5-.1.1 1c-.3.2-.7.2-1 .2h-.7a1 1 0 0 1-.5-.4l-.2-.5v-3.3h-.6v-1h.6v-1.1l1.4-.8v1.8h1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M818.3 919.5h-1.4v-5.2h1.3v.8c.2-.4.4-.6.6-.7l.6-.2.9.3-.5 1.2-.6-.3-.5.2-.3.6-.1 1.7v1.6Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M821.9 916l-1.3-.3c.2-.5.4-.9.8-1.1.3-.3.8-.4 1.5-.4.6 0 1 0 1.4.2l.6.6.2 1.2v2.6c0 .2.1.5.3.7H824a5 5 0 0 1-.2-.5l-.7.5-.9.1c-.5 0-1-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.3 0-.5.2-.8.1-.2.3-.4.6-.5l1-.3 1.4-.4v-.1c0-.3 0-.5-.2-.6l-.7-.1a1 1 0 0 0-.6.1 1 1 0 0 0-.3.5Zm1.8 1-.8.2-.8.3-.2.5c0 .2 0 .3.2.5l.5.2c.3 0 .5-.1.7-.3l.4-.4v-1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M826.4 919.5V915c0-.7 0-1.2.2-1.5 0-.4.3-.6.6-.8.4-.3.8-.4 1.3-.4.7 0 1.2.2 1.5.5.3.2.5.6.5 1 0 .3 0 .6-.3 1l-.3.5v.2l.1.3.6.7.7.8.2.8c0 .5-.2.8-.5 1.2-.4.3-.8.4-1.3.4-.3 0-.6 0-1-.2l-.6-.7 1-.5.2.2.3.1.3-.1.2-.4-.2-.4-.6-.6c-.6-.6-.9-1-.9-1.3l.4-1 .3-.6v-.3c0-.1 0-.2-.2-.3a.6.6 0 0 0-.4-.2l-.4.1-.3.4v5.7h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M835.5 917.9l1.4.2c-.2.5-.5.9-.8 1.1-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-.8a3 3 0 0 1-.5-1.8c0-.9.3-1.6.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.3h-3.5c0 .4.2.7.4 1 .2.2.4.3.8.3.2 0 .4 0 .5-.2.1 0 .3-.3.3-.5Zm.1-1.4c0-.4-.1-.7-.3-1a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.3l-.2.9h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M266.8 742.1V735h2.2l1.3 4.9 1.3-5h2.1v7.2h-1.3v-5.6l-1.4 5.6h-1.4l-1.4-5.6v5.6h-1.4Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M278.2 740.5l1.3.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.4.4-1 0-1.6-.3-2-1a3 3 0 0 1-.6-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.9.8.4.5.6 1.3.6 2.4h-3.4c0 .4 0 .7.3.9.2.2.5.3.8.3l.5-.1.4-.6Zm0-1.4c0-.4 0-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M280.2 740.7l1.4-.2c0 .2.2.4.4.6l.7.2c.4 0 .6 0 .8-.2l.2-.4-.1-.2c0-.1-.2-.2-.5-.2a7.4 7.4 0 0 1-2-.7c-.5-.3-.7-.7-.7-1.2 0-.4.2-.8.6-1.1.3-.3.9-.5 1.6-.5.7 0 1.2.2 1.6.4.3.2.6.6.7 1l-1.3.3c0-.2-.2-.4-.3-.5l-.7-.2c-.3 0-.6 0-.7.2-.2 0-.2.1-.2.3l.1.2 1.3.4c.7.2 1.3.4 1.5.6.3.2.5.6.5 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.8.5a3 3 0 0 1-1.7-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M285.8 740.7l1.4-.2.3.6.8.2c.3 0 .6 0 .8-.2l.2-.4-.1-.2-.5-.2a7.4 7.4 0 0 1-2.1-.7c-.4-.3-.6-.7-.6-1.2 0-.4.2-.8.5-1.1.4-.3 1-.5 1.7-.5s1.2.2 1.5.4c.4.2.6.6.8 1l-1.3.3c0-.2-.2-.4-.4-.5l-.6-.2c-.4 0-.6 0-.8.2l-.1.3v.2l1.4.4 1.5.6c.3.2.4.6.4 1 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5a3 3 0 0 1-1.7-.5 2 2 0 0 1-.8-1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M294.8 740.5l1.4.2c-.2.5-.4 1-.8 1.2-.4.2-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.9.3-1.5.7-2 .5-.5 1-.8 1.7-.8.8 0 1.4.3 1.8.8.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4.9.2.2.4.3.8.3l.5-.1c.2-.2.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.3.5-.3 1h2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M299.8 739.8l1.4-.1c.1.5.3.8.5 1 .3.2.6.4 1 .4.6 0 .9-.1 1.1-.3.3-.2.4-.5.4-.7 0-.2 0-.3-.2-.5l-.5-.3-1.1-.3a4 4 0 0 1-1.7-.7 1.9 1.9 0 0 1-.3-2.5c.2-.3.5-.5.9-.7l1.4-.2c.9 0 1.6.2 2 .6.5.4.7.9.7 1.5l-1.4.1c0-.4-.2-.6-.4-.8-.2-.2-.5-.2-1-.2-.3 0-.7 0-1 .2l-.1.5c0 .1 0 .3.2.4.2.2.6.3 1.3.5.7.1 1.2.3 1.6.5a2 2 0 0 1 1 1.9 2.1 2.1 0 0 1-1.3 2 4 4 0 0 1-1.5.2c-1 0-1.6-.2-2.1-.6-.5-.5-.8-1-.9-1.9Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M310.3 742.1v-.7a2 2 0 0 1-2.7.7c-.3-.2-.5-.4-.6-.7l-.2-1.2V737h1.4V740.7l.3.4.5.1c.3 0 .5 0 .7-.2l.4-.4V737h1.4v5.1h-1.2Zm-2.8-6v-1.2h1.2v1.1h-1.2Zm2.1 0v-1.2h1.2v1.1h-1.2Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M317.7 742.1h-1.3v-.7a2 2 0 0 1-.7.6 2 2 0 0 1-.9.3 2 2 0 0 1-1.5-.8 3 3 0 0 1-.7-2c0-.8.3-1.5.7-2a2 2 0 0 1 1.5-.7c.6 0 1.1.3 1.5.8V735h1.4v7.1Zm-3.7-2.7c0 .6.1 1 .3 1.2a1 1 0 0 0 1.7.2c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.2-.4.6-.4 1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M277.6 753.8h-.7l-1-1.8a6.1 6.1 0 0 1 1-5.7h.7a12 12 0 0 0-.7 2 7.5 7.5 0 0 0 .2 4.4l.5 1.1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M278.5 752.1v-5.7h4.2v1h-3v1.3h2.8v1h-2.9v1.5h3.2v1h-4.3Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M283.8 747.4v-1h1v1h-1Zm0 4.7V748h1v4.1h-1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M289.6 749.2l-1 .2c0-.2-.2-.4-.3-.5a.7.7 0 0 0-.5-.1c-.3 0-.5 0-.7.3l-.2.9c0 .5 0 .8.3 1 .1.2.3.3.6.3l.5-.1c.2-.1.3-.4.3-.6l1 .1a2 2 0 0 1-.6 1.2 2 2 0 0 1-1.2.3 2 2 0 0 1-1.5-.5c-.3-.4-.5-1-.5-1.6 0-.7.2-1.2.5-1.6a2 2 0 0 1 1.5-.6c.5 0 .9.1 1.2.3.3.3.5.6.6 1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M291.6 746.4v2.1a1.6 1.6 0 0 1 2-.5l.4.4.2.5v3.2h-1V750l-.1-.9-.2-.2a.7.7 0 0 0-.4-.2c-.2 0-.4 0-.5.2-.2 0-.3.2-.3.4l-.1.8v2h-1.1v-5.7h1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M295.3 752.1v-5.7h1.1v3l1.3-1.4h1.4l-1.5 1.5 1.6 2.6H298l-1-1.8-.6.5v1.3h-1Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M300.6 749.3l-1-.2c.1-.4.3-.7.6-1l1.2-.2c.5 0 .9 0 1.1.2.3.1.4.2.5.4l.2 1v2.1l.2.5h-1l-.2-.3v-.1a2 2 0 0 1-.6.4l-.7.1c-.4 0-.8 0-1-.3-.3-.2-.4-.5-.4-.9 0-.2 0-.4.2-.6l.5-.4.8-.3a6 6 0 0 0 1-.3v-.5l-.7-.2c-.1 0-.3 0-.4.2l-.3.4Zm1.5.9-.7.1a2 2 0 0 0-.6.2l-.2.4c0 .2 0 .3.2.4l.4.2.6-.2.3-.4v-.7Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M304.2 748h1v.6c.3-.5.8-.7 1.3-.7.2 0 .5 0 .7.2.2 0 .3.2.4.5.2-.3.4-.4.6-.5l.7-.2c.3 0 .6 0 .8.2l.5.5v3.5h-1v-2.3l-.1-.8c-.1-.2-.3-.3-.5-.3s-.3 0-.4.2c-.2 0-.3.2-.3.4l-.1.9v2h-1.1V749l-.3-.3h-.8l-.2.5-.1.8v2h-1.1V748Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M311.3 748h1v.6a1.5 1.5 0 0 1 1.4-.7c.4 0 .8.2 1.2.6.3.3.5.9.5 1.5 0 .7-.2 1.3-.5 1.7a1.6 1.6 0 0 1-1.9.4c-.2 0-.4-.2-.6-.5v2.1h-1V748Zm1.1 2c0 .5.1.8.3 1 .2.3.4.4.7.4l.6-.3c.2-.2.3-.6.3-1 0-.5-.1-.8-.3-1a.8.8 0 0 0-.6-.3c-.3 0-.5 0-.7.3-.2.2-.3.5-.3.9Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M316 753.8a14 14 0 0 0 .7-1.9 9 9 0 0 0 .2-1.8c0-.6 0-1.2-.2-1.8l-.8-2h.8a7 7 0 0 1 .9 1.8 5.8 5.8 0 0 1 0 3.7c-.1.7-.4 1.4-.9 2h-.8Z"
            data-ubhnchn="372"
            fill="#000"
          />
          <path
            d="M964.8 753.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="375"
            fill="#fff"
          />
          <path
            d="M964.8 765.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="375"
            fill="#fff"
          />
          <path
            d="M964.8 777.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="375"
            fill="#fff"
          />
          <path
            d="M964.8 789.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="375"
            fill="#fff"
          />
          <path
            d="m1524.5 1254.6-1.7-7.2h1.4l1.1 5 1.3-5h1.8l1.2 5 1.1-5h1.5l-1.8 7.2h-1.5l-1.4-5.4-1.5 5.4h-1.5Z"
            data-ubhnchn="376"
            fill="#000"
          />
          <path
            d="M1532.9 1248.7v-1.3h1.3v1.3h-1.3Zm0 5.9v-5.2h1.3v5.2h-1.3Z"
            data-ubhnchn="376"
            fill="#000"
          />
          <path
            d="M1535.7 1254.6v-7.2h1.3v7.2h-1.3Z"
            data-ubhnchn="376"
            fill="#000"
          />
          <path
            d="M1543.2 1254.6h-1.3v-.8a2 2 0 0 1-1.6.9 2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .2-1.6.6-2a2 2 0 0 1 3.1 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5.1 1 .3 1.2a1 1 0 0 0 1.7.1c.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.9.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="376"
            fill="#000"
          />
          <path
            d="M1545.6 1251l-1.3-.3c.2-.5.4-.8.7-1 .4-.3.9-.4 1.6-.4.6 0 1 0 1.3.2l.7.5.2 1.3v2.6l.2.7h-1.3l-.1-.4v-.2l-.8.5-.9.2c-.5 0-1-.2-1.3-.4-.3-.3-.4-.7-.4-1.1 0-.3 0-.6.2-.8.1-.3.3-.4.6-.6l1-.3c.7 0 1.2-.2 1.4-.3v-.2c0-.2 0-.4-.2-.5l-.7-.2a1 1 0 0 0-.6.2 1 1 0 0 0-.3.5Zm1.8 1-.8.3-.8.2c-.2.2-.3.3-.3.5s.1.4.3.5c.1.2.3.2.5.2.3 0 .5 0 .7-.2.2-.2.3-.3.3-.5l.1-.7v-.2Z"
            data-ubhnchn="376"
            fill="#000"
          />
          <path
            d="M1553.5 1254.6v-.8a2 2 0 0 1-.7.7 2 2 0 0 1-2 0l-.5-.7c-.2-.3-.2-.6-.2-1.1v-3.3h1.4v3.7c0 .2.2.3.3.4l.5.1.6-.1.4-.5.1-1.4v-2.2h1.4v5.2h-1.3Z"
            data-ubhnchn="376"
            fill="#000"
          />
          <path
            d="m1530 1265.9 1.6-.2c.1.6.3 1 .6 1.3.3.2.8.3 1.3.3.6 0 1 0 1.3-.3.2-.2.4-.5.4-.8 0-.2 0-.4-.2-.5-.1-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.9-.5-.4-.8-1-.8-1.7 0-.4.2-.8.4-1.2.3-.4.6-.7 1-.9.6-.2 1.1-.3 1.8-.3 1 0 1.9.3 2.4.7.6.5.9 1.1.9 2h-1.8c0-.4-.2-.8-.4-1l-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s0 .4.3.5c.2.2.7.4 1.6.6l1.8.6c.4.2.8.5 1 .9.2.4.3.8.3 1.4a2.6 2.6 0 0 1-1.6 2.3c-.5.2-1 .3-1.8.3-1.1 0-2-.2-2.5-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="378"
            fill="#fff"
          />
          <path
            d="M1542.8 1264a2 2 0 0 1-1-.7 2 2 0 0 1 .4-2.6c.5-.5 1.1-.7 2-.7.7 0 1.4.3 1.8.7.5.4.7 1 .7 1.6a1.9 1.9 0 0 1-1.2 1.7c.5.2.9.5 1.1.9.3.3.4.8.4 1.2 0 .8-.3 1.5-.8 2s-1.2.7-2 .7a3 3 0 0 1-2-.6c-.6-.5-.9-1.2-.9-2 0-.5.2-.9.4-1.3s.6-.7 1-.9Zm.3-1.6c0 .3.1.6.3.7.2.2.4.3.7.3.3 0 .6 0 .8-.3.2-.1.3-.4.3-.7a1 1 0 0 0-.3-.8 1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.8Zm-.1 3.6c0 .5 0 .9.3 1.1.2.3.5.4.9.4.3 0 .6-.1.8-.4.2-.2.3-.6.3-1s0-.8-.3-1c-.2-.2-.5-.4-.8-.4-.5 0-.8.2-1 .5-.2.2-.3.5-.3.8Z"
            data-ubhnchn="378"
            fill="#fff"
          />
          <path
            d="M1482.5 1256.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="378"
            fill="#fff"
          />
          <path
            d="M1491 1248a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            data-ubhnchn="378"
            fill="#fff"
          />
          <path
            d="m455.2 738.6 1.7-.2c.1.6.3 1 .6 1.3.3.3.8.4 1.3.4s1-.1 1.2-.4c.3-.2.5-.5.5-.8 0-.2 0-.4-.2-.5-.1-.2-.3-.3-.6-.4l-1.4-.4c-1-.2-1.6-.5-2-.8a2.2 2.2 0 0 1-.4-3c.2-.3.6-.6 1-.8.5-.2 1.1-.3 1.8-.3 1 0 1.9.2 2.4.7.5.4.8 1 .9 1.9h-1.8c0-.4-.2-.7-.5-1l-1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s0 .4.2.6l1.6.5c.9.2 1.5.4 2 .7l.9.8c.2.4.3.9.3 1.4a2.5 2.5 0 0 1-1.6 2.3c-.5.2-1 .4-1.8.4-1.1 0-2-.3-2.5-.8-.6-.5-1-1.2-1-2.2Z"
            data-ubhnchn="381"
            fill="#fff"
          />
          <path
            d="M466.7 739.2l1.6-.2c0 .4.2.7.4 1a1.1 1.1 0 0 0 1.7-.2c.2-.3.3-.7.3-1.3 0-.5 0-.9-.3-1.1-.2-.3-.6-.4-1-.4s-.8.2-1.2.6l-1.3-.2.8-4.5h4.4v1.6H469l-.3 1.4c.4-.2.7-.2 1.1-.2.8 0 1.4.2 1.9.8.5.5.7 1.2.7 2 0 .7-.2 1.4-.6 2-.5.7-1.3 1-2.3 1-.8 0-1.4-.2-2-.6-.4-.4-.7-1-.8-1.7Z"
            data-ubhnchn="381"
            fill="#fff"
          />
          <path
            d="m1268 1258.3 1.4-.1c.1.5.3.8.5 1 .3.3.6.4 1 .4.5 0 .9-.1 1.1-.3.3-.2.4-.5.4-.7 0-.2 0-.3-.2-.4 0-.2-.2-.3-.5-.4l-1.1-.3a4 4 0 0 1-1.7-.7 1.9 1.9 0 0 1 .6-3.2l1.4-.2c.9 0 1.6.2 2 .6.5.4.7.9.7 1.5l-1.4.1c0-.4-.2-.6-.4-.8l-1-.2c-.3 0-.7 0-1 .2l-.1.5c0 .2 0 .3.2.4.2.2.6.3 1.3.5l1.6.5.8.7c.2.3.2.7.2 1.2a2 2 0 0 1-1.3 2 4 4 0 0 1-1.5.2c-1 0-1.6-.2-2.1-.6-.5-.5-.8-1-.9-1.9Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1279.6 1257l-1.4.3a1 1 0 0 0-.3-.7 1 1 0 0 0-.6-.2 1 1 0 0 0-.8.4c-.3.2-.3.6-.3 1.2s0 1 .3 1.3c.2.2.4.4.8.4.3 0 .5-.1.6-.3.2-.1.3-.4.4-.7l1.3.2c-.1.6-.4 1-.8 1.4-.4.3-.9.5-1.6.5-.7 0-1.3-.3-1.8-.7-.4-.5-.7-1.2-.7-2 0-.9.3-1.5.7-2 .5-.5 1-.7 1.9-.7.6 0 1 0 1.5.4.3.2.6.7.8 1.2Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1282 1253.5v2.6a2 2 0 0 1 2.4-.6l.6.5.3.6v4h-1.3v-2.7l-.1-1c0-.2-.2-.3-.3-.4a.9.9 0 0 0-.5 0h-.6a1 1 0 0 0-.4.6l-.1 1v2.6h-1.4v-7.2h1.4Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1286.4 1258c0-.5.1-.9.3-1.3.3-.5.6-.8 1-1 .4-.2.9-.3 1.4-.3a2.6 2.6 0 0 1 2.7 2.6c0 .8-.3 1.5-.8 2s-1.2.8-2 .8a3 3 0 0 1-1.3-.3l-1-1c-.2-.4-.3-1-.3-1.5Zm1-3.2v-1.2h1.3v1.2h-1.2Zm.4 3.3c0 .5.1.9.4 1.2.2.2.5.4.9.4.3 0 .6-.2.9-.5.2-.2.3-.6.3-1.1 0-.5 0-1-.3-1.2-.3-.3-.6-.4-1-.4-.3 0-.6.1-.8.4-.3.3-.4.6-.4 1.2Zm1.8-3.3v-1.2h1.2v1.2h-1.2Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1297.5 1260.7h-1.3v-2.7l-.1-1c0-.2-.2-.4-.3-.5a.8.8 0 0 0-.5 0l-.6.1a1 1 0 0 0-.4.5l-.1 1.2v2.4h-1.4v-5.2h1.3v.7a2 2 0 0 1 1.7-.8l.8.1a1.3 1.3 0 0 1 .9 1v4.2Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1302 1259l1.3.2c-.2.5-.5 1-.8 1.2-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.8.3-1.5.7-2 .5-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.2-.1.3-.3.3-.6Zm0-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.2.5-.2 1h2Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1303.9 1255.5h.8v-1.4l.6-.5a2 2 0 0 1 1-.2c.3 0 .7 0 1.1.2l-.2 1-.6-.2c-.2 0-.4 0-.4.2-.1 0-.2.2-.2.5v.4h1v1h-1v4.2h-1.3v-4.2h-.8v-1Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1310.8 1259l1.4.2c-.2.5-.5 1-.8 1.2-.4.3-.9.4-1.5.4-.9 0-1.5-.3-2-1a3 3 0 0 1-.5-1.7c0-.8.3-1.5.7-2 .4-.5 1-.7 1.7-.7.8 0 1.4.2 1.8.7.5.5.7 1.3.7 2.4h-3.5c0 .4.2.7.4 1 .2.1.4.3.8.3l.5-.2c.1-.1.3-.3.3-.6Zm.1-1.4c0-.4-.1-.7-.3-.9a1 1 0 0 0-.7-.3 1 1 0 0 0-.8.3c-.2.3-.3.5-.3 1h2.1Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1313.4 1260.7v-7.2h1.4v7.2h-1.4Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="M1321 1260.7h-1.4v-.8a2 2 0 0 1-.7.7l-.9.2a2 2 0 0 1-1.5-.7 3 3 0 0 1-.7-2c0-1 .3-1.6.7-2a2 2 0 0 1 3 0v-2.6h1.4v7.2Zm-3.7-2.7c0 .5 0 1 .2 1.2.2.3.5.5 1 .5.2 0 .5-.1.7-.4.2-.3.3-.7.3-1.2 0-.6 0-1-.3-1.3a1 1 0 0 0-.8-.4 1 1 0 0 0-.8.4c-.2.3-.3.6-.3 1.2Z"
            data-ubhnchn="382"
            fill="#000"
          />
          <path
            d="m784.9 262.4 1.7-.2c0 .6.3 1 .6 1.3.3.2.7.4 1.2.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.8 0-.2 0-.4-.2-.5 0-.2-.3-.3-.6-.4l-1.4-.4c-.9-.2-1.5-.5-2-.8a2.2 2.2 0 0 1-.3-3c.2-.4.6-.7 1-.9.5-.2 1-.3 1.7-.3 1.1 0 2 .3 2.5.8.5.4.8 1 .8 1.8l-1.7.1c0-.4-.3-.7-.5-1l-1.1-.2a2 2 0 0 0-1.2.3c-.2.1-.3.3-.3.5s.1.4.3.5c.2.2.8.4 1.6.6l1.9.6c.4.3.7.5 1 1 .1.3.3.7.3 1.3a2.5 2.5 0 0 1-1.6 2.3c-.5.2-1.1.3-1.9.3-1 0-1.9-.2-2.5-.7-.6-.5-1-1.3-1-2.2Z"
            data-ubhnchn="385"
            fill="#fff"
          />
          <path
            d="M797.7 260.5a2 2 0 0 1-1-.7 2 2 0 0 1-.2-1c0-.7.2-1.2.7-1.6.4-.4 1-.6 1.9-.6.8 0 1.4.2 1.9.6.4.4.6 1 .6 1.6a1.9 1.9 0 0 1-1.1 1.7c.4.2.8.5 1 .9.3.4.4.8.4 1.3 0 .8-.2 1.4-.7 1.9-.5.5-1.2.7-2 .7a3 3 0 0 1-2-.6c-.6-.5-1-1.1-1-2 0-.4.2-.9.4-1.3.2-.3.6-.6 1.1-.9Zm.3-1.6c0 .3.1.6.3.8l.8.2c.3 0 .5 0 .7-.2.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8a1 1 0 0 0-.7-.2 1 1 0 0 0-.8.2 1 1 0 0 0-.3.8Zm-.1 3.7c0 .4.1.8.3 1 .3.3.6.4 1 .4.3 0 .5-.1.8-.4.2-.2.3-.6.3-1s-.1-.7-.3-1c-.3-.2-.6-.4-1-.4-.3 0-.6.2-.8.5-.2.2-.3.5-.3.9Z"
            data-ubhnchn="385"
            fill="#fff"
          />
          <path
            d="M803 263l1.6-.2c0 .4.2.7.5.9a1.1 1.1 0 0 0 1.6-.1c.3-.3.4-.7.4-1.3 0-.5-.1-.9-.4-1.2-.2-.2-.5-.4-.9-.4-.5 0-.9.3-1.3.7l-1.3-.2.8-4.5h4.4v1.5h-3.1l-.3 1.5 1.2-.3c.7 0 1.3.3 1.8.8.5.6.8 1.3.8 2.1 0 .7-.2 1.3-.6 1.9-.6.7-1.4 1.1-2.4 1.1-.8 0-1.4-.2-1.9-.6-.5-.4-.8-1-.9-1.7Z"
            data-ubhnchn="385"
            fill="#fff"
          />
        </g>
        <defs
          data-ubhnchn="386"
        >
          <clippath
            data-ubhnchn="387"
            id="a"
          >
            <path
              d="M0 0h1830.3v1362.7H0z"
              data-ubhnchn="388"
              fill="#fff"
            />
          </clippath>
        </defs>
      </svg>
    `)

    const resultString = new XMLSerializer().serializeToString(result)

    await fs.promises.writeFile(output, resultString)
  })
})
