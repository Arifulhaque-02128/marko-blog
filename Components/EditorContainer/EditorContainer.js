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

const EditorContainer = () => {

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
                        // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
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

