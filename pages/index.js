import Head from 'next/head'
import Feature from '../components/Feature'
import FoodList from '../components/FoodList'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DaGu Rice Noodle</title>
        <meta name="description" content="DaGu Rice Noodle" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,500;1,300&display=swap" rel="stylesheet" />
      </Head>
      <Feature />
      <FoodList />
    </div>
  )
}
