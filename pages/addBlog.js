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
    const [isSubmitted, setIsSubmitted] = useState('');
    const [excerpt, setExcerpt] = useState('');

    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/marko-ai';

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async ( data, e ) => {
        e.preventDefault();
        const hostedImg = await imageUpload(coverImg, authorImg)
        const {title, authorName} = data;
        const slug = title.toLowerCase().replace(/\s/g, "-")
        const blogData = {title, slug, authorName, excerpt, cover_photo: hostedImg[0], author_img: hostedImg[1], blogContents: blogContents, date: moment().format('ll')}
        postBlog(blogData)
        console.log("in addBlog page ", blogData);
        const postResponse = postToApi(blogData)
        reset({});
        setCoverImg('');
        setExcerpt('')
        setAuthorImg('');
        setBlogContents('');
        setIsSubmitted(postResponse);
    };

    const postToApi = async(blogData) => {
        return await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogData),
            })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            return "Your blog is successfully posted."
        })
        .catch((error) => {
            console.error('Error:', error);
            return "Failed to post."
        });
    }

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

                <label className={`${formStyle.uploadFile} btn`}>
                    <FaCloudUploadAlt size={25} className={`mr-3`} />
                    Upload Cover Image <input onChange={(e) => setCoverImg(e.target.files[0])} name="cover" type="file" hidden /> <br/>
                </label> <br/>
                {
                    coverImg && <img className={formStyle.coverImgStyle} src={coverImg?URL.createObjectURL(coverImg): ''} />
                }

                <div className="mt-3">
                    <BlogModal blogContentsProp={[blogContents, setBlogContents]} excerptProp={[excerpt, setExcerpt]} />
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
                    isSubmitted && <p className="text-secondary my-3">({isSubmitted})</p>
                }
            </form>
            
        </div>
    );
};

const mapDispatchToProps = {
    postBlog: storeBlogData
}

export default connect(null, mapDispatchToProps)(addBlog);