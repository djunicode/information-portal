import Head from 'next/head'
import { DiApple } from "react-icons/di";
// import { Inter } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Information Portal</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-lgreen font-bold underline">
      Hello world! <DiApple/>
      
    </h1>
    <h1 className='font-ubuntu'>Hello</h1>
      <h1 className=''>Hello</h1>
    </>
  )
}
