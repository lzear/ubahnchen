import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export { Stats as default } from '../src/ssr/stats'

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale
      ? await serverSideTranslations(locale, ['common', 'about', 'stats'])
      : {}),
  },
})
