<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPendingRequests } from '../../actions/posts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
=======
// // // import React, { useEffect } from 'react';
// // // import { Container, Typography, Button, Paper } from '@mui/material';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { getPendingRequests } from '../../actions/posts';
// // // import { useNavigate } from 'react-router-dom';

// // // const Dashboard = () => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const user = JSON.parse(localStorage.getItem("profile"));
// // //   const pendingRequests = useSelector(state => state.pendingRequests || []);

// // //   useEffect(() => {
// // //     if (user?.result?._id) {
// // //       dispatch(getPendingRequests(user.result._id));
// // //     }
// // //   }, [dispatch, user]);

// // //   return (
// // //     <Container>
// // //       <Typography variant="h4" align="center">Dashboard</Typography>

// // //       {/* ✅ Pending Requests Section */}
// // //       {pendingRequests.length > 0 && (
// // //         <Paper style={{ padding: "15px", marginTop: "20px" }}>
// // //           <Typography variant="h6">Pending Access Requests</Typography>
// // //           {pendingRequests.map((post) => (
// // //             <Button
// // //               key={post._id}
// // //               variant="contained"
// // //               onClick={() => navigate(`/pending-requests/${post._id}`)}
// // //             >
// // //               {post.title} - {post.accessRequests.length} Request(s)
// // //             </Button>
// // //           ))}
// // //         </Paper>
// // //       )}
// // //     </Container>
// // //   );
// // // };

// // // export default Dashboard;






import React, { useEffect } from 'react';
import { Container, Typography, Button, Paper, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPendingRequests } from '../../actions/posts';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles'; 

const Dashboard = () => {
  const classes = useStyles();
>>>>>>> bd8644c (final changes)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const pendingRequests = useSelector(state => state.pendingRequests || []);

  useEffect(() => {
    if (user?.result?._id) {
      dispatch(getPendingRequests(user.result._id));
    }
  }, [dispatch, user]);

  return (
<<<<<<< HEAD
    <Container>
      <Typography variant="h4" align="center">Dashboard</Typography>

      {/* ✅ Pending Requests Section */}
      {pendingRequests.length > 0 && (
        <Paper style={{ padding: "15px", marginTop: "20px" }}>
          <Typography variant="h6">Pending Access Requests</Typography>
          {pendingRequests.map((post) => (
            <Button
              key={post._id}
              variant="contained"
              onClick={() => navigate(`/pending-requests/${post._id}`)}
            >
              {post.title} - {post.accessRequests.length} Request(s)
            </Button>
          ))}
        </Paper>
      )}
    </Container>
=======
    <div className={classes.dashboardContainer}>
      <Typography variant="h3" className={classes.pageTitle}>
        Welcome back, {user?.result?.name?.split(" ")[0] || "User"} 👋
      </Typography>

      {pendingRequests.length > 0 && (
        <div className={classes.sectionCard}>
          <Typography variant="h5" className={classes.sectionTitle}>
            Pending Access Requests
          </Typography>
          <Box className={classes.buttonList}>
            {pendingRequests.map((post) => (
              <Button
                key={post._id}
                variant="contained"
                className={classes.requestButton}
                onClick={() => navigate(`/pending-requests/${post._id}`)}
              >
                {post.title} – {post.accessRequests.length} Request(s)
              </Button>
            ))}
          </Box>
        </div>
      )}
    </div>
>>>>>>> bd8644c (final changes)
  );
};

export default Dashboard;
<<<<<<< HEAD
=======




// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Button, Box } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPendingRequests } from '../../actions/posts';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode'; // Updated import
// import useStyles from './styles';

// const Dashboard = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("profile"));
//   const pendingRequests = useSelector(state => state.pendingRequests || []);
//   const [role, setRole] = useState(null);

//   // Check the user's role based on the JWT token
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       // If there's no token, redirect to login page
//       navigate('/login');
//       return;
//     }

//     try {
//       const decodedToken = jwtDecode(token); // Use jwtDecode instead of jwt_decode
//       setRole(decodedToken?.role);  // Set the user's role
//     } catch (error) {
//       // Handle invalid or expired token
//       console.error("Invalid or expired token", error);
//       navigate('/login');
//     }
//   }, [navigate]);

//   // Fetch pending requests for admins
//   useEffect(() => {
//     if (user?.result?._id) {
//       dispatch(getPendingRequests(user.result._id));
//     }
//   }, [dispatch, user]);

//   return (
//     <div className={classes.dashboardContainer}>
//       <Typography variant="h3" className={classes.pageTitle}>
//         Welcome back, {user?.result?.name?.split(" ")[0] || "User"} 👋
//       </Typography>

//       {/* Admin Specific Content */}
//       {role === 'admin' ? (
//         <div>
//           <Typography variant="h5" className={classes.sectionTitle}>
//             Admin Controls
//           </Typography>
//           {/* Pending Requests Section */}
//           {pendingRequests.length > 0 && (
//             <div className={classes.sectionCard}>
//               <Typography variant="h5" className={classes.sectionTitle}>
//                 Pending Access Requests
//               </Typography>
//               <Box className={classes.buttonList}>
//                 {pendingRequests.map((post) => (
//                   <Button
//                     key={post._id}
//                     variant="contained"
//                     className={classes.requestButton}
//                     onClick={() => navigate(`/pending-requests/${post._id}`)}
//                   >
//                     {post.title} – {post.accessRequests.length} Request(s)
//                   </Button>
//                 ))}
//               </Box>
//             </div>
//           )}

//           {/* Admin Actions: Create Post, Pending Requests, Profile */}
//           <Box className={classes.buttonList}>
//             <Button variant="contained" color="primary" onClick={() => navigate('/create-post')}>
//               Create Post
//             </Button>
//             <Button variant="contained" color="secondary" onClick={() => navigate('/pending-requests')}>
//               Pending Requests
//             </Button>
//             <Button variant="contained" onClick={() => navigate('/profile')}>
//               Profile
//             </Button>
//           </Box>
//         </div>
//       ) : (
//         /* Regular User Content */
//         <div>
//           <Typography variant="h5" className={classes.sectionTitle}>
//             User Controls
//           </Typography>
//           {/* User Actions: Save Post, Profile */}
//           <Box className={classes.buttonList}>
//             <Button variant="contained" color="primary" onClick={() => navigate('/saved-posts')}>
//               Saved Posts
//             </Button>
//             <Button variant="contained" color="secondary" onClick={() => navigate('/profile')}>
//               Profile
//             </Button>
//           </Box>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Dashboard;
>>>>>>> bd8644c (final changes)
