import React, {useState} from 'react';
import blogStyle from './Blog.module.css';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';

const Blog = ({blog}) => {
    const [isHover, setIsHover] = useState(false);
    const {title, _id, authorName, author_img, blogContents, cover_photo, date} = blog;
    return (
        <Link 
            href = {`/${_id}`}
            // href={`/post/${_id}`}
        >
            <div onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={isHover ? 'blogHover' : 'blog'}>
                <div>
                    <p className="text-right mt-2 mb-5 h6">{date}</p>
                    
                    <h4 className={blogStyle.title}>{title}</h4>

                    <div className="d-flex align-items-center my-3">
                        <Avatar alt="Author Image" src={author_img} />
                        <p className="font-weight-bold mx-3 h6">{authorName}</p>
                    </div>
                    {/* <article className="text-justify text-secondary">{bodyContent}</article> */}
                    <div className="btn btn-secondary">
                        Markopolo.ai
                    </div>
                </div>
                <style jsx>{`
                    .blog{
                        background: url(${cover_photo}) no-repeat;
                        background-size: cover;
                        border: 1px solid #eaeaea;
                        border-radius: 15px;
                        padding: 20px 15px;
                        margin: 25px 10px;
                    }
                    .blogHover{
                        background-color: white;
                        border: 1px solid #eaeaea;
                        border-radius: 15px;
                        padding: 20px 15px;
                        margin: 25px 10px;
                        cursor: pointer;
                    }
                    `}
                </style>
            </div>
        </Link>
    );
};

export default Blog;