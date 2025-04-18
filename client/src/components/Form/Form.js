import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    name: '',
    title: '',
    description: '',
    creator: '',
<<<<<<< HEAD
=======
    email: '',  // Added email field
>>>>>>> bd8644c (final changes)
    skills: '',
    category: '',
    mediaType: 'image',
    embeddedContent: '',
    selectedFile: '',
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clearForm = () => {
    setCurrentId(null);
    setPostData({
      name: '',
      title: '',
      description: '',
      creator: '',
      skills: '',
      category: '',
      mediaType: 'image',
      embeddedContent: '',
      selectedFile: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clearForm();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostData((prevData) => ({ ...prevData, selectedFile: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Paper className={classes.paper} style={{marginTop:'170px', padding:'20px'}}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editing Post' : 'Create a New Post'}</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Your Name"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator ID (if applicable)"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
<<<<<<< HEAD
=======
          name="email"
          variant="outlined"
          label="Email (optional)"
          fullWidth
          value={postData.email}
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />
        <TextField
>>>>>>> bd8644c (final changes)
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
        />
        <TextField
          name="skills"
          variant="outlined"
          label="Skills (comma separated)"
          fullWidth
          value={postData.skills}
          onChange={(e) => setPostData({ ...postData, skills: e.target.value.split(',') })}
        />
        <TextField
          name="category"
          variant="outlined"
          label="Category"
          fullWidth
          value={postData.category}
          onChange={(e) => setPostData({ ...postData, category: e.target.value })}
        />
        <TextField
          select
          name="mediaType"
          variant="outlined"
          label="Media Type"
          fullWidth
          value={postData.mediaType}
          onChange={(e) => setPostData({ ...postData, mediaType: e.target.value })}
        >
          <MenuItem value="image">Image</MenuItem>
          <MenuItem value="video">Video</MenuItem>
          <MenuItem value="document">Document</MenuItem>
        </TextField>
        <TextField
          name="embeddedContent"
          variant="outlined"
          label="Embedded Content (Optional - quiz, code snippet, etc.)"
          fullWidth
          value={postData.embeddedContent}
          onChange={(e) => setPostData({ ...postData, embeddedContent: e.target.value })}
        />
        <div className={classes.fileInput}>
          <input type="file" accept="image/*,video/*,application/pdf" onChange={handleFileChange} />
          {postData.selectedFile && (
            <img
              src={postData.selectedFile}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
            />
          )}
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clearForm} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
