import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export { Main2 as default } from '../src/ssr'

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  }
}
