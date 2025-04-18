import axios from "axios";

const url = "http://localhost:5000/posts";

<<<<<<< HEAD
export const fetchPosts = () => axios.get(url);
=======
export const fetchPosts = (category, sortBy) => {
  const params = {};
  if (category) params.category = category;
  if (sortBy) params.sortBy = sortBy;
  return axios.get(url, { params });
};
>>>>>>> bd8644c (final changes)
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const requestAccess = (id, requestData) => axios.patch(`${url}/${id}/requestAccess`, requestData); // ✅ New API request
export const fetchPendingRequests = (userId) => axios.get(`http://localhost:5000/posts/pending/${userId}`);
