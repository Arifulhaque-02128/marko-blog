import React from 'react';
import mainBodyStyle from './MainBody.module.css'
import Blog from './Blog';

const MainBody = ({allBlogs}) => {

    
    return (
        <main className={mainBodyStyle.mainBody}>
            {
                allBlogs.map(( blog )=> <Blog key={blog.slug} blog={blog} /> )
            }
        </main>
    );
};

export default MainBody;