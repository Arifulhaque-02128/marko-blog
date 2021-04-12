import React from 'react';
import footerStyle from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={footerStyle.footer}>
            <div className={`${footerStyle.section1} row border-bottom py-3`}>
                <div className='col-6'>
                    <img className={footerStyle.logo} src="/brand.png" alt="logo"/> <br/>
                    <h6 className="text-secondary mx-2">Markopolo.ai</h6>
                    <a className="h6" href="">sales@markopolo.ai</a>
                </div>
                <div className='col-6 row'>
                    <div className='col-12 col-lg-4'>
                        <h5>Company</h5>
                        <p>About</p>
                        <p>Customers</p>
                        <p>Jobs</p>
                        <p>Blog</p>
                        <p>Team</p>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <h5>Resources</h5>
                        <p>Product Roadmap</p>
                        <p>Free Tools</p>
                        <p>Podcast</p>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <h5>Contact</h5>
                        <p>Support</p>
                        <p>Cells</p>
                        <p>Request a Demo</p>
                    </div>
                </div>
            </div>
            <div className={`${footerStyle.section2} row pt-3`}>
                <div className='col-6'>
                    <p>{year} all rights reserved</p>
                </div>
                <div className='col-6 row'>
                    <p className='col-6'>Privacy Policy</p>
                    <p className='col-6'>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;