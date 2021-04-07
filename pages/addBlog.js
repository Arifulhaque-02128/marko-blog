import React, { useState } from 'react';
import BlogModal from '../Components/Modal/BlogModal';
import { useForm } from "react-hook-form";
import formStyle from '../styles/Home.module.css'
import {FaCloudUploadAlt} from 'react-icons/fa'


const addBlog = () => {

    const [coverImg, setCoverImg] = useState('');

    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/marko-ai';

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async ( data, e ) => {
        e.preventDefault();
        const coverImage = await imageUpload(coverImg)
        const {title, authorName} = data;
        const blogData = {title, authorName, cover_photo: coverImage}
        console.log(blogData);
        reset({});
        setCoverImg('');
    };

    const imageUpload = async (coverImg) => {
        const formData = new FormData();
        formData.append('file', coverImg);
        formData.append('upload_preset', 'markoImg');
        formData.append('cloud_name', 'marko-ai');
        const res = await fetch(`${CLOUDINARY_URL}/image/upload`, {
            method: 'POST',
            body: formData,
        });
        const res2 = await res.json();
        return res2
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
                    <BlogModal />
                </div>

                <br/>
                <input className='btn btn-dark' type="submit" />
            </form>
            
        </div>
    );
};

export default addBlog;


