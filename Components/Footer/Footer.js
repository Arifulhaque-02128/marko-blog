import React from 'react';
import footerStyle from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={footerStyle.footer}>
            <p className="text-light">Developed by <span className="font-weight-bold"> Markopolo.ai Developer </span> </p>
            <p className="text-light"> &copy;  <span> { year } </span>, All rights reserved</p>
        </footer>
    );
};

export default Footer;