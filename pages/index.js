import MainBody from '../Components/Mainbody/MainBody'
import Footer from '../Components/Footer/Footer'
import Layout from '../Layout/Layout'
import styles from '../styles/Home.module.css'
import blogsData from '../DummyData/DummyData'
import { fetchBlogData } from '../Store/Actions/Actions'
import { connect } from 'react-redux'

function Home({fetchBlogData}) {
  fetchBlogData(blogsData)
  return (
    <div>
      <Layout />
      <main className={styles.main}>
        <MainBody />
      </main>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = {
  fetchBlogData: fetchBlogData
}

export default connect(null, mapDispatchToProps)(Home)
