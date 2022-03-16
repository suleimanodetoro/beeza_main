import Head from 'next/head'
import Image from 'next/image'
import { ConstructionCard } from '../components'
const getConstruction = [{name:'Site is Currently Under Construction :(.', featuredImage:"/beeza_construction.png", title:'construction',excerpt:"check out our blog instead :)"},]


export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Beeza</title>
        <meta name="description" content="Beeza is a your mental health companion." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 ">
      <div className="lg:col-span-8 col-span-1">
        <ConstructionCard />
      </div>

      </div>

    </div>
  )
}
