import React, { FunctionComponent } from 'react'

import Head from 'next/head'

import ReactLogo from '../assets/react.svg'

const Home: FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>React | Next - Setup</title>
      </Head>

      <main className="main">
        {/* <ReactLogo /> */}
        <img src={ReactLogo} alt="" />
        <h1>Your app goes here...</h1>
      </main>
    </div>
  )
}

export default Home
