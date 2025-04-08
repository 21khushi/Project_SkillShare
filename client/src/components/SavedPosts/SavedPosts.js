import React from 'react';
import { Container, Grid2, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post';

const SavedPosts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const savedPosts = posts.filter((post) => post.saved);  // ✅ Filter saved posts

  return (
    <Container style={{marginTop:'0px'}}>
      {/* <Typography variant="h4" align="center" gutterBottom>
        Saved Posts
      </Typography> */}
      <Grid2 container spacing={3}>
        {savedPosts.length > 0 ? (
          savedPosts.map((post) => (
            <Grid2 key={post._id} item xs={12} sm={6} md={4}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid2>
          ))
        ) : (
          <Typography variant="h6" align="center">No saved posts yet.</Typography>
        )}
      </Grid2>
    </Container>
  );
};

export default SavedPosts;
