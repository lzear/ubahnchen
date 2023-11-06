import DevLinks from './dev-links.js'

const env = process.env.NODE_ENV
export default function Home() {
  return (
    <main className="center flex h-screen content-center items-center justify-center gap-2 align-middle">
      {env === 'development' && <DevLinks />}
    </main>
  )
}
