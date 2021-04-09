import React, {useState, useEffect} from 'react';
import {EditorState, convertFromRaw, convertToRaw } from "draft-js";
import dynamic from 'next/dynamic';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditorContainer = ({blogContentsProp}) => {

    const [blogContents, setBlogContents]= blogContentsProp;

    const [markupBlogContent, setMarkupBlogContent] = useState([])

    const [editor, setEditor] = useState(false);

    useEffect(() => {
        setEditor(true)
    })

    const [draftEditorState, setDraftEditorState] = useState({
        editorState: EditorState.createEmpty(),
    });

    const {editorState} = draftEditorState;

    const onEditorStateChange = async (editorState) => {
        // console.log(editorState)
        await setDraftEditorState({editorState});
        // const blogDataInRow = convertToRaw(editorState.getCurrentContent());
        // setBlog(blogDataInRow.blocks)
    }

    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/marko-ai';

    const uploadImageCallBack = (file) => {
        // const formData = new FormData();
        // formData.append('file', file);
        // formData.append('upload_preset', 'markoImg');
        // formData.append('cloud_name', 'marko-ai');
        // const res = await fetch(`${CLOUDINARY_URL}/image/upload`, {
        //     method: 'POST',
        //     body: formData,
        // });
        // const res2 = await res.json();
        
        return new Promise( async (resolve, reject) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'markoImg');
            formData.append('cloud_name', 'marko-ai');
            const res = await fetch(`${CLOUDINARY_URL}/image/upload`, {
                method: 'POST',
                body: formData,
            });
            const res2 = await res.json();
            console.log(res2)
            if(res2){
                resolve({ data: { link: res2.url }})
            } else{
                console.log("fetch error", error.message)
                reject(new Error(error.message))
            }
            // return await fetch(`${CLOUDINARY_URL}/image/upload`, {
            //     method: 'POST',
            //     body: formData,
            // }).then( response => {
            //   if (response.ok) {
            //     console.log(response)
            //     resolve({ data: { link: response.url }})
            //   } else {
            //     console.log("response error...")
            //     reject(new Error('error'))
            //   }
            // }, (error) => {
            //   console.log("fetch error", error.message)
            //   reject(new Error(error.message))
            // })
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = editorState.getCurrentContent().getPlainText();
        // console.log(blog)

        const rawContentState = convertToRaw(editorState.getCurrentContent());

        const markup = draftToHtml(
            rawContentState, 
            // hashtagConfig, 
            // directional, 
            // customEntityTransform
        );
        setBlogContents(markup);
        setMarkupBlogContent(markup)
        setDraftEditorState({editorState: EditorState.createEmpty(),})
    }

    return (
        <div className="container">
            {
                editor ? 
                <Editor
                    editorState={editorState}
                    wrapperClassName="rich-editor demo-wrapper"
                    editorClassName="demo-editor"
                    placeholder="Write from here..."
                    onEditorStateChange={onEditorStateChange}    
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        image: { uploadCallback: uploadImageCallBack, previewImage: true, alt: { present: true, mandatory: true }, inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg' },
                    }}
                /> : null
            }
            <button  onClick={handleSubmit} className="btn btn-dark my-4"> Submit </button>
            <div>
                {
                    editorState ? 
                    <div>{ ReactHtmlParser (markupBlogContent) }</div> : null
                }
            </div>
        </div>
    );
};

export default EditorContainer;

