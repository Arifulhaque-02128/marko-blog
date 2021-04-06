import React from 'react';
import BlogModal from '../Components/Modal/BlogModal';
import { useForm } from "react-hook-form";
import formStyle from '../styles/Home.module.css'


const addBlog = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = ( data, e ) => {
        console.log(data);
        reset({});
    };

    return (
        <div className={`${formStyle.formContainer} my-5`}>
            <h3 className="text-info my-3">Add Blog...</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input className={`${formStyle.formInput} form-control mt-2`} {...register("authorName", { required: true })} placeholder="Author's name..."/> 
                {errors.exampleRequired && <span className="text-danger">This field is required</span>} <br/>
                
                <input className={`${formStyle.formInput} form-control mt-2`} {...register("title", { required: true })} placeholder="Title of the Blog..." />
                {errors.exampleRequired && <span className="text-danger">This field is required</span>} <br/> 

                <div className="my-2">
                    <BlogModal />
                </div>

                <br/>
                <input type="submit" />
            </form>
            
        </div>
    );
};

export default addBlog;


