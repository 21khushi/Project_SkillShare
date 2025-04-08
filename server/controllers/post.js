import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  const { searchQuery } = req.query;
  
  try {
    let query = {};
    
    if (searchQuery) {
      query = {
        $or: [
          { title: { $regex: searchQuery, $options: "i" } },
          { description: { $regex: searchQuery, $options: "i" } },
          { skills: { $regex: searchQuery, $options: "i" } },
        ],
      };
    }

    const posts = await PostMessage.find(query);
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getPost = async (req, res) => { 
  const { id } = req.params;
  try {
    const post = await PostMessage.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, description, selectedFile, creator, skills, category, mediaType, embeddedContent, name } = req.body;

  const newPostMessage = new PostMessage({ 
    title, 
    description, 
    selectedFile, 
    creator, 
    skills, 
    category, 
    mediaType, 
    embeddedContent,
    name, 
  });

  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, creator, selectedFile, skills, category, mediaType, embeddedContent, name } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, description, skills, category, mediaType, embeddedContent, selectedFile, name, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndDelete(id);
  res.json({ message: "Post deleted successfully." });
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};

// New endpoint: add a comment to a post
export const addComment = async (req, res) => {
  const { id } = req.params;
  const { user, comment } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    const post = await PostMessage.findById(id);
    post.comments.push({ user, comment, createdAt: new Date() });
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const requestAccess = async (req, res) => {
  const { id } = req.params;  // Post ID
  const { userId, userName } = req.body;  // Requester’s details

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  try {
    const post = await PostMessage.findById(id);

    // Check if request already exists
    const alreadyRequested = post.accessRequests.some(req => req.userId.toString() === userId);
    if (alreadyRequested) {
      return res.status(400).json({ message: "Access already requested" });
    }

    // Add request to the post
    post.accessRequests.push({ userId, userName, status: "Pending" });
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve or Decline Access Request
// export const handleAccessRequest = async (req, res) => {
//   const { id, requestId } = req.params;
//   const { status } = req.body;

//   try {
//     const post = await PostMessage.findById(id);
//     const requestIndex = post.accessRequests.findIndex(req => req._id.toString() === requestId);

//     if (requestIndex !== -1) {
//       post.accessRequests[requestIndex].status = status;
//       await post.save();
//       res.status(200).json(post);
//     } else {
//       res.status(404).json({ message: "Request not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };




// Get pending request for a user
//================================

export const getPendingRequests=async(req,res)=>{
  const {userId}=req.params;
  try{
    const posts=await PostMessage.find({creator:userId,"accessRequests.status":"Pending"});
    res.status(200).json(posts);
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
};
