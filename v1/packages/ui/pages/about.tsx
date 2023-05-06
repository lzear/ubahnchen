import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export { About as default } from '../src/ssr/about'

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale
      ? await serverSideTranslations(locale, ['common', 'about'])
      : {}),
  },
})
