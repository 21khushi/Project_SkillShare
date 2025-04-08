import React from 'react';
import { Grid2, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid2 className={classes.container} container spacing={3}>  {/* ✅ Proper spacing */}
        {posts.map((post) => (
          <Grid2 key={post._id} item xs={12} sm={6} md={4}>  {/* ✅ More posts per row */}
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid2>
        ))}
      </Grid2>
    )
  );
};

export default Posts;
