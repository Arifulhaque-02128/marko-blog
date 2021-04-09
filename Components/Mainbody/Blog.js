import React, {useState} from 'react';
import blogStyle from './Blog.module.css';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';

const Blog = ({blog}) => {
    const [isHover, setIsHover] = useState(false);
    const {title, _id, authorName, author_img, blogContents, cover_photo, date} = blog;
    return (
        <div onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={isHover ? 'blogHover' : 'blog'}>
            <div>
                <p className="text-right mt-2 mb-5">{date}</p>
                <Link 
                    href = '/post'
                    // href={`/post/${_id}`}
                >
                    <h4 className={blogStyle.title}>{title}</h4>
                </Link>
                <div className="d-flex align-items-center my-3">
                    <Avatar alt="Remy Sharp" src={author_img} />
                    <p className="font-weight-bold mx-3 h6">{authorName}</p>
                </div>
                {/* <article className="text-justify text-secondary">{bodyContent}</article> */}
                <div className="my-3 d-flex justify-content-end">
                    {/* <Link
                        href='/update'
                        // href={`/update/${_id}`}
                    >
                        <button className="btn btn-outline-success mx-3">Edit Article</button>
                    </Link>    */}
                    {/* <Link
                        href = '/delete'
                        // href={`/delete/${_id}`}
                    >
                        <button className="btn btn-outline-danger mx-3">Delete Article</button>
                    </Link> */}
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
                }
                `}
            </style>
        </div>
    );
};

export default Blog;