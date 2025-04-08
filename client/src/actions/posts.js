import axios from 'axios';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, SAVE_POST } from '../constants/actionTypes';
import * as api from '../api/index.js';

const API = axios.create({ baseURL: "http://localhost:5000" });

// ✅ Fetch All Posts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("Fetched Data:", data); // Debugging line
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
};

// ✅ Create Post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log("Created Post:", data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("Error creating post:", error);
  }
};

// ✅ Update Post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("Error updating post:", error);
  }
};

// ✅ Delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("Error deleting post:", error);
  }
};

// ✅ Like Post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log("Error liking post:", error);
  }
};

// ✅ Save Post
export const savePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_POST, payload: id });
  } catch (error) {
    console.log("Error saving post:", error);
  }
};

// ✅ Request Access to a Post
export const requestAccess = (postId, requestData) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (!user || !user.result) {
      alert("⚠️ Please log in to request access!");
      return;
    }

    await API.patch(`/posts/${postId}/requestAccess`, requestData);

    alert("✅ Your request has been sent");
  } catch (error) {
    console.log("Error in requesting access:", error.response?.data?.message || error.message);
  }
};


// ✅ Get Pending Requests
export const getPendingRequests = (userId) => async (dispatch) => {
  try {
    const { data } = await API.get(`/posts/pendingRequests/${userId}`);
    dispatch({ type: "FETCH_PENDING_REQUESTS", payload: data });
  } catch (error) {
    console.error("Error fetching pending requests:", error);
  }
};
