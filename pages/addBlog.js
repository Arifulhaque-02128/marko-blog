import React, { useState } from 'react';
import BlogModal from '../Components/Modal/BlogModal';
import { useForm } from "react-hook-form";
import formStyle from '../styles/Home.module.css'
import {FaCloudUploadAlt} from 'react-icons/fa'
import { connect } from 'react-redux';
import { storeBlogData } from '../Store/Actions/Actions';
import moment from 'moment';


const addBlog = ({postBlog}) => {

    const [coverImg, setCoverImg] = useState('');
    const [authorImg, setAuthorImg] = useState('');
    const [blogContents, setBlogContents] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    console.log(coverImg);

    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/marko-ai';

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async ( data, e ) => {
        e.preventDefault();
        const hostedImg = await imageUpload(coverImg, authorImg)
        const {title, authorName} = data;
        const blogData = {title, authorName, cover_photo: hostedImg[0], author_img: hostedImg[1], blogContents, date: moment().format('ll')}
        postBlog(blogData)
        console.log("in addBlog page ", blogData);
        reset({});
        setCoverImg('');
        setAuthorImg('');
        setBlogContents('');
        setIsSubmitted(true);
    };

    const imageUpload = async (coverImg, authorImg) => {
        const formData = new FormData();
        formData.append('file', coverImg);
        formData.append('upload_preset', 'markoImg');
        formData.append('cloud_name', 'marko-ai');
        const res = await fetch(`${CLOUDINARY_URL}/image/upload`, {
            method: 'POST',
            body: formData,
        });
        const res2 = await res.json();

        const formData2 = new FormData();
        formData2.append('file', authorImg);
        formData2.append('upload_preset', 'markoImg');
        formData2.append('cloud_name', 'marko-ai');
        const res3 = await fetch(`${CLOUDINARY_URL}/image/upload`, {
            method: 'POST',
            body: formData2,
        });
        const res4 = await res3.json();

        return [res2.url, res4.url]
    }

    return (
        <div className={`${formStyle.formContainer} my-5`}>
            <h3 className={`${formStyle.header} my-3`}>Add Blog...</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input className={`${formStyle.formInput} form-control mt-2`} {...register("authorName", { required: true })} placeholder="Author's name..."/> 
                {errors.authorName && <span className="text-danger">This field is required</span>} <br/>
                
                <input className={`${formStyle.formInput} form-control mt-2`} {...register("title", { required: true })} placeholder="Title of the Blog..." />
                {errors.title && <span className="text-danger">This field is required</span>} <br/>

                {/* <input className={`${formStyle.uploadFile}`} type="file" id="customFile" {...register("cover", { required: true })} /> <br/>
                {errors.cover && <span className="text-danger">This field is required</span>} <br/> */}

                <label className={`${formStyle.uploadFile} btn`}>
                    <FaCloudUploadAlt size={25} className={`mr-3`} />
                    Upload Cover Image <input onChange={(e) => setCoverImg(e.target.files[0])} name="cover" type="file" hidden /> <br/>
                </label> <br/>
                {
                    coverImg && <img className={formStyle.coverImgStyle} src={coverImg?URL.createObjectURL(coverImg): ''} />
                }

                <div className="mt-3">
                    <BlogModal blogContentsProp={[blogContents, setBlogContents]} />
                    { 
                        blogContents && <p className="text-success">(Blog is written and stored successfully...)</p>
                    }
                </div>
                <br/>
                <label className={`${formStyle.uploadFile} btn`}>
                    <FaCloudUploadAlt size={25} className={`mr-3`} />
                    Upload Author's Image <input onChange={(e) => setAuthorImg(e.target.files[0])} name="cover" type="file" hidden /> <br/>
                </label> <br/>
                {
                    authorImg && <img className={formStyle.coverImgStyle} src={authorImg?URL.createObjectURL(authorImg): ''} />
                }
                <br/>
                <input className='btn btn-dark mt-2' type="submit" />
                {
                    isSubmitted && <p className="text-success">Your blog is submitted successfully...</p>
                }
            </form>
            
        </div>
    );
};

const mapDispatchToProps = {
    postBlog: storeBlogData
}

export default connect(null, mapDispatchToProps)(addBlog);