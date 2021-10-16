import Head from 'next/head'
import PublicGrid from '../components/PublicGrid'

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodlog | Share you food recipes</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Social media for cooking lovers. Share your recipes to the world" />
      </Head>
      <PublicGrid />
    </>
  )
}
