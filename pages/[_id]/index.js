import React from 'react';
import { useRouter } from 'next/router';
import blogData from '../../DummyData/DummyData';
import styles from '../../styles/Home.module.css'
import { Avatar } from '@material-ui/core';
import Head from 'next/head';
import ReactHtmlParser from 'react-html-parser';
import Footer from '../../Components/Footer/Footer';

const singleBlog = () => {

    const router = useRouter()
    const { _id } = router.query

    const blogDataById = blogData.find(blog => blog._id === _id)
    const {title, authorName, author_img, blogContents} = blogDataById;
    const content = blogContents.replace(/↵/gi, "<br />")
    
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