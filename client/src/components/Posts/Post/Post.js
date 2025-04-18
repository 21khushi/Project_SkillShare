<<<<<<< HEAD
=======
// // import React from "react";
// // import {
// //   Card,
// //   CardActions,
// //   CardContent,
// //   CardMedia,
// //   Button,
// //   Typography,
// //   Divider,
// // } from "@mui/material";
// // import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// // import BookmarkIcon from "@mui/icons-material/Bookmark";
// // import LockOpenIcon from "@mui/icons-material/LockOpen"; // ✅ Request Access Icon
// // import moment from "moment";
// // import useStyles from "./styles";
// // import { useDispatch, useSelector } from "react-redux";
// // import { deletePost, likePost, savePost, requestAccess } from "../../../actions/posts";

// // const Post = ({ post, setCurrentId }) => {
// //   const classes = useStyles();
// //   const dispatch = useDispatch();
  
// //   // ✅ Get the logged-in user
// //   const user = useSelector((state) => state.auth?.user || null);
// //   const userId = user?.result?._id || null;
// //   const userName = user?.result?.name || "Unknown User";

// //   // ✅ Show "Request Access" button **only if**:
// //   // - User is logged in
// //   // - User is **not** the post creator
// //   const showRequestAccess = userId && post.creator && userId !== post.creator;

// //   const handleRequestAccess = () => {
// //     if (!userId) {
// //       alert("⚠️ You need to be logged in to request access!");
// //       return;
// //     }
// //     dispatch(requestAccess(post._id, { userId, userName }));
// //     alert("✅ Your request has been sent");
// //   };

// //   return (
// //     <Card className={classes.card}>
// //     {post.selectedFile && (
// //       <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
// //     )}
  
// //     <div className={classes.overlay}>
// //       <Typography variant="h6" className={classes.creator}>
// //         {post.name}
// //       </Typography>
// //       <Typography variant="body2" className={classes.time}>
// //         {moment(post.createdAt).fromNow()}
// //       </Typography>
// //     </div>
  
// //     <div className={classes.overlay2}>
// //       <Button size="small" onClick={() => setCurrentId(post._id)}>
// //         <MoreHorizIcon fontSize="medium" />
// //       </Button>
// //     </div>
  
// //     <CardContent>
// //       <Typography variant ="h5"  componemt="h2" className={classes.title}>{post.title}</Typography>
// //       <Typography className={classes.details}>
// //         {post.description || "No description available"}
// //       </Typography>
// //     </CardContent>
  
// //     <Divider />
  
// //     <CardActions className={classes.cardActions}>
// //       <Button className={classes.cardButton} onClick={() => dispatch(likePost(post._id))}>
// //         <ThumbUpAltIcon fontSize="small" /> &nbsp; Like ({post.likeCount})
// //       </Button>
// //       <Button className={classes.cardButton} onClick={() => dispatch(deletePost(post._id))}>
// //         <DeleteIcon fontSize="small" /> &nbsp; Delete
// //       </Button>
// //       <Button className={classes.cardButton} onClick={() => dispatch(savePost(post._id))}>
// //         <BookmarkIcon fontSize="small" /> &nbsp; {post.saved ? "Unsave" : "Save"}
// //       </Button>
// //       {userId && userId !== post.creator && (
// //         <Button className={classes.cardButton} onClick={handleRequestAccess}>
// //           <LockOpenIcon fontSize="small" /> &nbsp; Request Access
// //         </Button>
// //       )}
// //     </CardActions>
// //   </Card>
  
// //   );
// // };

// // export default Post;






// import React from "react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
//   Divider,
// } from "@mui/material";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import DeleteIcon from "@mui/icons-material/Delete";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import LockOpenIcon from "@mui/icons-material/LockOpen"; // ✅ Request Access Icon
// import moment from "moment";
// import useStyles from "./styles";
// import { useDispatch, useSelector } from "react-redux";
// import { deletePost, likePost, savePost, requestAccess } from "../../../actions/posts";

// const Post = ({ post, setCurrentId }) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   // ✅ Get the logged-in user
//   const user = useSelector((state) => state.auth?.user || null);
//   const userId = user?.result?._id || null;
//   const userName = user?.result?.name || "Unknown User";

//   // ✅ Show "Request Access" button **only if**:
//   // - User is logged in
//   // - User is **not** the post creator
//   const showRequestAccess = userId && post.creator && userId !== post.creator;

//   const handleRequestAccess = () => {
//     if (!userId) {
//       alert("⚠️ You need to be logged in to request access!");
//       return;
//     }
//     dispatch(requestAccess(post._id, { userId, userName }));
//     alert("✅ Your request has been sent");
//   };

//   return (
//     <Card className={classes.card}>
//       {post.selectedFile && (
//         <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
//       )}

//       <div className={classes.overlay}>
//         <Typography variant="h6" className={classes.creator}>
//           {post.name}
//         </Typography>
//         <Typography variant="body2" className={classes.time}>
//           {moment(post.createdAt).fromNow()}
//         </Typography>
//       </div>

//       <div className={classes.overlay2}>
//         <Button size="small" onClick={() => setCurrentId(post._id)}>
//           <MoreHorizIcon fontSize="medium" />
//         </Button>
//       </div>

//       <CardContent>
//         <Typography variant="h5" component="h2" className={classes.title}>
//           {post.title}
//         </Typography>
//         <Typography className={classes.details}>
//           {post.description || "No description available"}
//         </Typography>
//       </CardContent>

//       <Divider />

//       <CardActions className={classes.cardActions}>
//         <Button
//           className={classes.cardButton}
//           onClick={() => dispatch(likePost(post._id))}
//         >
//           <ThumbUpAltIcon fontSize="small" /> &nbsp; Like ({post.likeCount})
//         </Button>
//         <Button
//           className={classes.cardButton}
//           onClick={() => dispatch(deletePost(post._id))}
//         >
//           <DeleteIcon fontSize="small" /> &nbsp; Delete
//         </Button>
//         <Button
//           className={classes.cardButton}
//           onClick={() => dispatch(savePost(post._id))}
//         >
//           <BookmarkIcon fontSize="small" /> &nbsp; {post.saved ? "Unsave" : "Save"}
//         </Button>
//         {showRequestAccess && (
//           <Button className={classes.cardButton} onClick={handleRequestAccess}>
//             <LockOpenIcon fontSize="small" /> &nbsp; Request Access
//           </Button>
//         )}
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;




// import React from "react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
//   Divider,
// } from "@mui/material";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import DeleteIcon from "@mui/icons-material/Delete";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
// import moment from "moment";
// import useStyles from "./styles";
// import { useDispatch, useSelector } from "react-redux";
// import { deletePost, likePost, savePost, requestAccess } from "../../../actions/posts";
// import { jwtDecode } from "jwt-decode";

// const Post = ({ post, setCurrentId }) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const user = useSelector((state) => state.auth?.user || null);
//   const userId = user?.result?._id || null;
//   const userName = user?.result?.name || "Unknown User";

//   // Get role from token
//   let role = "user";
//   const token = localStorage.getItem("token");
//   if (token) {
//     try {
//       const decoded = jwtDecode(token);
//       role = decoded.role || "user";
//     } catch (err) {
//       console.error("Invalid token:", err);
//     }
//   }

//   const showRequestAccess = userId && post.creator && userId !== post.creator;

//   const handleRequestAccess = () => {
//     if (!userId) {
//       alert("⚠️ You need to be logged in to request access!");
//       return;
//     }
//     dispatch(requestAccess(post._id, { userId, userName }));
//     alert("✅ Your request has been sent");
//   };

//   return (
//     <Card className={classes.card}>
//       {post.selectedFile && (
//         <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
//       )}

//       <div className={classes.overlay}>
//         <Typography variant="h6" className={classes.creator}>
//           {post.name}
//         </Typography>
//         <Typography variant="body2" className={classes.time}>
//           {moment(post.createdAt).fromNow()}
//         </Typography>
//       </div>

//       <div className={classes.overlay2}>
//         <Button size="small" onClick={() => setCurrentId(post._id)}>
//           <MoreHorizIcon fontSize="medium" />
//         </Button>
//       </div>

//       <CardContent>
//         <Typography variant="h5" component="h2" className={classes.title}>
//           {post.title}
//         </Typography>
//         <Typography className={classes.details}>
//           {post.description || "No description available"}
//         </Typography>
//       </CardContent>

//       <Divider />

//       <CardActions className={classes.cardActions}>
//         {/* Like for both roles */}
//         <Button
//           className={classes.cardButton}
//           onClick={() => dispatch(likePost(post._id))}
//         >
//           <ThumbUpAltIcon fontSize="small" /> &nbsp; Like ({post.likeCount})
//         </Button>

//         {role === "admin" ? (
//           // Admin-only buttons
//           <Button
//             className={classes.cardButton}
//             onClick={() => dispatch(deletePost(post._id))}
//           >
//             <DeleteIcon fontSize="small" /> &nbsp; Delete
//           </Button>
//         ) : (
//           // User-only buttons
//           <>
//             <Button
//               className={classes.cardButton}
//               onClick={() => dispatch(savePost(post._id))}
//             >
//               <BookmarkIcon fontSize="small" /> &nbsp; {post.saved ? "Unsave" : "Save"}
//             </Button>
//             {showRequestAccess && (
//               <Button className={classes.cardButton} onClick={handleRequestAccess}>
//                 <LockOpenIcon fontSize="small" /> &nbsp; Request Access
//               </Button>
//             )}
//           </>
//         )}
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;








// Update code for all four buttons


>>>>>>> bd8644c (final changes)
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkIcon from "@mui/icons-material/Bookmark";
<<<<<<< HEAD
import LockOpenIcon from "@mui/icons-material/LockOpen"; // ✅ Request Access Icon
=======
import LockOpenIcon from "@mui/icons-material/LockOpen";
>>>>>>> bd8644c (final changes)
import moment from "moment";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost, savePost, requestAccess } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
<<<<<<< HEAD
  
  // ✅ Get the logged-in user
  const user = useSelector((state) => state.auth?.user || null);
  const userId = user?.result?._id || null;
  const userName = user?.result?.name || "Unknown User";

  // ✅ Show "Request Access" button **only if**:
  // - User is logged in
  // - User is **not** the post creator
  const showRequestAccess = userId && post.creator && userId !== post.creator;

  const handleRequestAccess = () => {
    if (!userId) {
      alert("⚠️ You need to be logged in to request access!");
      return;
    }
    dispatch(requestAccess(post._id, { userId, userName }));
=======

  // Access user and role from Redux
  const user = useSelector((state) => state.auth.user);
  const userId = user?.result?._id || user?.user?._id || user?.user?.id;
  const userName = user?.result?.name || user?.user?.name || "Unknown User";
  const role = user?.result?.role || user?.user?.role || "user";

  console.log("Post component debug:", { user, userId, role, postCreator: post.creator });

  const handleRequestAccess = () => {
    let currentUserId = userId;
    if (!currentUserId) {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const jwtDecode = require("jwt-decode");
          const decoded = jwtDecode(token);
          currentUserId = decoded.id || decoded._id || null;
        } catch (err) {
          console.error("Invalid token:", err);
        }
      }
    }
    console.log("handleRequestAccess called with userId:", currentUserId);
    if (!currentUserId) {
      alert("⚠️ You need to be logged in to request access!");
      return;
    }
    dispatch(requestAccess(post._id, { userId: currentUserId, userName }));
>>>>>>> bd8644c (final changes)
    alert("✅ Your request has been sent");
  };

  return (
    <Card className={classes.card}>
      {post.selectedFile && (
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      )}

      <div className={classes.overlay}>
<<<<<<< HEAD
        <Typography variant="h6" style={{ fontSize: "0.7rem" }}>
          {post.name}
        </Typography>
        <Typography variant="body2" style={{ fontSize: "0.7rem", color: "black" }}>
=======
        <Typography variant="h6" className={classes.creator}>
          {post.name}
        </Typography>
        <Typography variant="body2" className={classes.time}>
>>>>>>> bd8644c (final changes)
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={classes.overlay2}>
<<<<<<< HEAD
        <Button style={{ color: "blue" }} size="small" onClick={() => setCurrentId(post._id)}>
=======
        <Button size="small" onClick={() => setCurrentId(post._id)}>
>>>>>>> bd8644c (final changes)
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      <CardContent>
<<<<<<< HEAD
        <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
=======
        <Typography variant="h5" component="h2" className={classes.title}>
          {post.title}
        </Typography>
        <Typography className={classes.details}>
>>>>>>> bd8644c (final changes)
          {post.description || "No description available"}
        </Typography>
      </CardContent>

      <Divider />

      <CardActions className={classes.cardActions}>
<<<<<<< HEAD
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        <Button size="small" color="secondary" onClick={() => dispatch(savePost(post._id))}>
          <BookmarkIcon fontSize="small" />
          {post.saved ? "Unsave" : "Save"}
        </Button>

       {/* Request Access Button */}
       {user?.result && user.result._id !== post.creator && (
  <Button 
    size="small" 
    color="primary" 
    onClick={() => dispatch(requestAccess(post._id, { userId: user.result._id, userName: user.result.name }))}>
    <LockOpenIcon fontSize="small" />
    Request Access
  </Button>
)}

=======
        {/* Like button visible to all */}
        <Button
          className={`${classes.cardButton} ${classes.like}`}
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> &nbsp; Like ({post.likeCount})
        </Button>

        {role === "admin" ? (
          <>
            {/* Admin buttons */}
            <Button
              className={`${classes.cardButton} ${classes.delete}`}
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" /> &nbsp; Delete
            </Button>
            <Button
              className={`${classes.cardButton} ${classes.save}`}
              onClick={() => dispatch(savePost(post._id))}
            >
              <BookmarkIcon fontSize="small" /> &nbsp; {post.saved ? "Unsave" : "Save"}
            </Button>
          </>
        ) : (
          <>
            {/* User buttons */}
            <Button
              className={`${classes.cardButton} ${classes.save}`}
              onClick={() => dispatch(savePost(post._id))}
            >
              <BookmarkIcon fontSize="small" /> &nbsp; {post.saved ? "Unsave" : "Save"}
            </Button>
            {userId && (
              <Button
                className={`${classes.cardButton} ${classes.request}`}
                onClick={handleRequestAccess}
              >
                <LockOpenIcon fontSize="small" /> &nbsp; Request Access
              </Button>
            )}
          </>
        )}
>>>>>>> bd8644c (final changes)
      </CardActions>
    </Card>
  );
};

export default Post;
