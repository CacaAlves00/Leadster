import styles from './page.module.css'
import Head from 'next/head'
import HomeHeader from '@/components/Home/HomeHeader/HomeHeader'
import DemoPropaganda from '@/components/Home/DemoPropaganda/DemoPropaganda'
import HomeFooter from '@/components/Home/HomeFooter/HomeFooter'
import { prisma } from '@/db'
import Videos from '@/components/Home/Videos/Videos'

export default async function Home() {

  const videos = await prisma.video.findMany({
    include: { DownloadVideo: true },
  });

  return (
    <article className={styles.article}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' rel='stylesheet' />
      </Head>

      <HomeHeader />
      <Videos videos={videos}/>
      <DemoPropaganda />
      <HomeFooter />
    </article>
  )
}
