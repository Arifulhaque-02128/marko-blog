import React from 'react';
import NavBar from '../NavBar/Navbar';
import headerStyle from './Header.module.css';

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.headerNav}>
                <NavBar />
            </div>
            <div className={headerStyle.headerContent}>
                <div>
                    <h2 className="text-center text-info my-3"> Blog </h2>
                    <p className="text-center text-dark h6">Markopolo.ai blog is curated and maintained by industry experts and leaders about various topics related to emerging new technologies, digital marketing trends, case studies Saas Products & tech companies</p>
                </div>
            </div> 
        </header>
    );
};

export default Header;