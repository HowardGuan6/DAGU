import Head from 'next/head'
import Feature from '../components/Feature'
import FoodList from '../components/FoodList'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DaGu Rice Noodle</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="DaGu Rice Noodle" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,500;1,300&display=swap" rel="stylesheet" />
      </Head>
      <Feature />
      <FoodList />
    </div>
  )
}
