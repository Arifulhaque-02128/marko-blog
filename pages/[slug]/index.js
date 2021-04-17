import React from 'react';
import styles from '../../styles/Home.module.css'
import { Avatar } from '@material-ui/core';
import Head from 'next/head';
import ReactHtmlParser from 'react-html-parser';
import Footer from '../../Components/Footer/Footer';
import { getSingleBlogById, getAllSlugName } from '../../lib/data';

const singleBlog = ({mainContent, title, authorName, author_img}) => {

    const content = mainContent
    return (
        <div>
            <div className={`${styles.container}`}>
                <Head>
                    <title>Blog - {title}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="text-center my-3 h5"> 🎉 <a className='font-weight-bold text-dark' href="https://www.markopolo.ai/offers"> <u>Join</u> </a> today, to get early access to our closed Beta and Get exclusive offers 🎊 </div>
            </div>
            <div className='container'>
                <h3 className="text-center my-3">{title}</h3>
                <div className="text-center d-flex justify-content-center align-items-center">
                    <Avatar alt="Author Image" src={author_img} />
                    <h6 className="mx-3">{authorName}</h6>
                </div>
                <div className="m-5 p-5" >
                    <div className={`text-center ${styles.contentStyle}`}>{ ReactHtmlParser (content) }</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default singleBlog;

export async function getStaticProps({ params }) {
    const singleBlog = getSingleBlogById(params.slug)
    const {data, content} = singleBlog;
    const {title, authorName, author_img} = data;
    const mainContent = content.replace(/↵/gi, "<br />")
    return {
      props: { mainContent, title, authorName, author_img, }, 
    }
}
export async function getStaticPaths() {
    const allPaths = getAllSlugName();
    const paths = allPaths.map((path) => ({
        params: { slug: path.toString() },
      }))
      return { paths, fallback: false }
}