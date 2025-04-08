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
import LockOpenIcon from "@mui/icons-material/LockOpen"; // ✅ Request Access Icon
import moment from "moment";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost, savePost, requestAccess } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
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
    alert("✅ Your request has been sent");
  };

  return (
    <Card className={classes.card}>
      {post.selectedFile && (
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      )}

      <div className={classes.overlay}>
        <Typography variant="h6" style={{ fontSize: "0.7rem" }}>
          {post.name}
        </Typography>
        <Typography variant="body2" style={{ fontSize: "0.7rem", color: "black" }}>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: "blue" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      <CardContent>
        <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description || "No description available"}
        </Typography>
      </CardContent>

      <Divider />

      <CardActions className={classes.cardActions}>
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

      </CardActions>
    </Card>
  );
};

export default Post;
