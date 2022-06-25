import Head from 'next/head'

import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Feed from './../components/Feed';
import Modal from './../components/Modal';

export default function Home() {


  return (
    // <div className={styles.container}>
    <div className ="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      
      <Head>
        <title>instagram clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      
      <Header />
      <Feed />
      <Modal />

    </div>
  )
}
