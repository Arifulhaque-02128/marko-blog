import React from 'react';
import mainBodyStyle from './MainBody.module.css'
import Blog from './Blog';
import { connect } from 'react-redux';

const MainBody = ({blogsData}) => {
    
    return (
        <main className={mainBodyStyle.mainBody}>
            {
                blogsData.map(( blog, index )=> <Blog key={index} blog={blog} /> )
            }
        </main>
    );
};

const mapStateToProps = (state) => {
    return { 
      blogsData: state.posts
    }
}

export default connect(mapStateToProps)(MainBody);