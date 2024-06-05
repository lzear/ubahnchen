import localFont from 'next/font/local'

import { lineColors } from './line-colors'

const berlin = localFont({
  src: [
    {
      path: './_font/BerlinTypeWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './_font/BerlinTypeWeb-Regular.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const gtfs = {
  url: 'https://www.vbb.de/fileadmin/user_upload/VBB/Dokumente/API-Datensaetze/gtfs-mastscharf/GTFS.zip',

  lineColors,

  colors: ['#F0D722'],

  color: '#F0D722',

  font: berlin,
}
