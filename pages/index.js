import MainBody from '../Components/Mainbody/MainBody'
import Footer from '../Components/Footer/Footer'
import Layout from '../Layout/Layout'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header/Header';
import { getBlogsData } from '../lib/data'

function Home({allBlogs}) {
  console.log(allBlogs)
  return (
    <div>
      <Layout />
      <Header />
      <main className={styles.main}>
        <MainBody allBlogs={allBlogs} />
      </main>
      <Footer />
    </div>
  )
}

export default Home

export function getStaticProps(){
  const allBlogs = getBlogsData()
  return {
    props: {allBlogs}
  }
}
