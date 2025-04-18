// import React ,{useState,useEffect} from 'react'
// import {Container,Grow,Grid2,Box} from '@mui/material';
// import Posts from '../Posts/Posts';
// import Form from '../Form/Form';
// import { useDispatch } from 'react-redux';
// import { getPosts } from '../../actions/posts';

// const Home = () => {
//   const [currentId, setCurrentId] = useState(null);
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   // Fetch posts on mount and when currentId changes
//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch, currentId]);

//   return (
//     <Grow in>
//           <Container style={{ marginTop: '80px' }}>
//             <Grid2 container justifyContent="space-between" alignItems="stretch" spacing={3}>
//               {/* Posts Section */}
//               <Grid2 item xs={12} sm={8}>
//                 <Posts setCurrentId={setCurrentId} />
//               </Grid2>
//               {/* Form Section */}
//               <Grid2 item xs={12} sm={4}>
//                 // <Box className={classes.formContainer}>
//                   <Form currentId={currentId} setCurrentId={setCurrentId} />
//                 </Box>
//               </Grid2>
//             </Grid2>
//           </Container>
//         </Grow>
//   )
// }

// export default Home;




import React, { useEffect } from 'react';
import { Container, Grow, Grid2 } from '@mui/material';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD

=======
>>>>>>> bd8644c (final changes)
import Posts from '../Posts/Posts';
import { getPosts } from '../../actions/posts';

const Home = ({ setCurrentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid2 container justifyContent="center" spacing={3}>
          <Grid2 item xs={12} sm={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid2>
        </Grid2>
      </Container>
    </Grow>
  );
};

export default Home;
