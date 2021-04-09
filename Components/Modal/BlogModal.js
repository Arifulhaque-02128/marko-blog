import React, { useState } from 'react';
import EditorContainer from '../EditorContainer/EditorContainer';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {FiEdit3} from 'react-icons/fi';

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: "90vw",
      height: "95vh",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const BlogModal = ({blogContentsProp}) => {

    const [blogContents, setBlogContents] = blogContentsProp;

    const classes = useStyles();
    
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 className="text-center my-3" id="simple-modal-title">Write Your Blog</h2>
          <EditorContainer blogContentsProp={[blogContents, setBlogContents]} />
        </div>
    );
    return (
        <div>
            <button className="btn btn-info" type="button" onClick={handleOpen}>
                <FiEdit3 size={20} className={`mr-3`} />
                Start Writing Blog...
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
};

export default BlogModal;