import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Layout = () => {
    return (
        <div className={`${styles.container}`}>
            <Head>
                <title>Markopolo.ai Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="text-center my-3 h5"> 🎉 <a className='font-weight-bold text-dark' href="https://www.markopolo.ai/offers"> <u>Join</u> </a> today, to get early access to our closed Beta and Get exclusive offers 🎊 </div>
        </div>
    );
};

export default Layout;