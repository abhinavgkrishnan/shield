import Head from 'next/head'
import Controls from '../components/Controls'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const item = 'hello'
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-black">
      <h1 className="h-screen w-5/6 text-center text-neutral-400">
        Camera Feed
      </h1>
      <Controls />
      <Head>
        <title>S.H.I.E.L.D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-end">
        <Sidebar />
      </div>
    </div>
  )
}
