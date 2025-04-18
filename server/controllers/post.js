<<<<<<< HEAD
=======
// import mongoose from 'mongoose';
// import PostMessage from '../models/postMessage.js';

// export const getPosts = async (req, res) => {
//   const { searchQuery } = req.query;
  
//   try {
//     let query = {};
    
//     if (searchQuery) {
//       query = {
//         $or: [
//           { title: { $regex: searchQuery, $options: "i" } },
//           { description: { $regex: searchQuery, $options: "i" } },
//           { skills: { $regex: searchQuery, $options: "i" } },
//         ],
//       };
//     }

//     const posts = await PostMessage.find(query);
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };


// export const getPost = async (req, res) => { 
//   const { id } = req.params;
//   try {
//     const post = await PostMessage.findById(id);
//     res.status(200).json(post);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const createPost = async (req, res) => {
//   const { title, description, selectedFile, creator, skills, category, mediaType, embeddedContent, name } = req.body;

//   const newPostMessage = new PostMessage({ 
//     title, 
//     description, 
//     selectedFile, 
//     creator, 
//     skills, 
//     category, 
//     mediaType, 
//     embeddedContent,
//     name, 
//   });

//   try {
//     await newPostMessage.save();
//     res.status(201).json(newPostMessage);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// export const updatePost = async (req, res) => {
//   const { id } = req.params;
//   const { title, description, creator, selectedFile, skills, category, mediaType, embeddedContent, name } = req.body;
  
//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   const updatedPost = { creator, title, description, skills, category, mediaType, embeddedContent, selectedFile, name, _id: id };

//   await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//   res.json(updatedPost);
// };

// export const deletePost = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   await PostMessage.findByIdAndDelete(id);
//   res.json({ message: "Post deleted successfully." });
// };

// export const likePost = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);
  
//   const post = await PostMessage.findById(id);
//   const updatedPost = await PostMessage.findByIdAndUpdate(
//     id,
//     { likeCount: post.likeCount + 1 },
//     { new: true }
//   );
//   res.json(updatedPost);
// };

// // New endpoint: add a comment to a post
// export const addComment = async (req, res) => {
//   const { id } = req.params;
//   const { user, comment } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   try {
//     const post = await PostMessage.findById(id);
//     post.comments.push({ user, comment, createdAt: new Date() });
//     const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
//     res.json(updatedPost);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };


// export const requestAccess = async (req, res) => {
//   const { id } = req.params;  // Post ID
//   const { userId, userName } = req.body;  // Requester’s details

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).send(`No post with id: ${id}`);
//   }

//   try {
//     const post = await PostMessage.findById(id);

//     // Check if request already exists
//     const alreadyRequested = post.accessRequests.some(req => req.userId.toString() === userId);
//     if (alreadyRequested) {
//       return res.status(400).json({ message: "Access already requested" });
//     }

//     // Add request to the post
//     post.accessRequests.push({ userId, userName, status: "Pending" });
//     await post.save();

//     res.status(200).json(post);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Approve or Decline Access Request
// // export const handleAccessRequest = async (req, res) => {
// //   const { id, requestId } = req.params;
// //   const { status } = req.body;

// //   try {
// //     const post = await PostMessage.findById(id);
// //     const requestIndex = post.accessRequests.findIndex(req => req._id.toString() === requestId);

// //     if (requestIndex !== -1) {
// //       post.accessRequests[requestIndex].status = status;
// //       await post.save();
// //       res.status(200).json(post);
// //     } else {
// //       res.status(404).json({ message: "Request not found" });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };




// // Get pending request for a user
// //================================

// export const getPendingRequests=async(req,res)=>{
//   const {userId}=req.params;
//   try{
//     const posts=await PostMessage.find({creator:userId,"accessRequests.status":"Pending"});
//     res.status(200).json(posts);
//   }
//   catch(error){
//     res.status(500).json({message:error.message});
//   }
// };








>>>>>>> bd8644c (final changes)
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
<<<<<<< HEAD
  const { searchQuery } = req.query;
  
=======
  const { searchQuery, category } = req.query;  // Accept category from query params
>>>>>>> bd8644c (final changes)
  try {
    let query = {};
    
    if (searchQuery) {
      query = {
<<<<<<< HEAD
=======
        ...query,
>>>>>>> bd8644c (final changes)
        $or: [
          { title: { $regex: searchQuery, $options: "i" } },
          { description: { $regex: searchQuery, $options: "i" } },
          { skills: { $regex: searchQuery, $options: "i" } },
        ],
      };
    }
<<<<<<< HEAD
=======
    
    if (category) {
      query.category = category;  // Filter by category if provided
    }
>>>>>>> bd8644c (final changes)

    const posts = await PostMessage.find(query);
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

<<<<<<< HEAD

=======
>>>>>>> bd8644c (final changes)
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
<<<<<<< HEAD
  const { title, description, selectedFile, creator, skills, category, mediaType, embeddedContent, name } = req.body;
=======
  const { title, description, selectedFile, creator, skills, category, mediaType, embeddedContent, name, email } = req.body;
>>>>>>> bd8644c (final changes)

  const newPostMessage = new PostMessage({ 
    title, 
    description, 
    selectedFile, 
    creator, 
    skills, 
<<<<<<< HEAD
    category, 
    mediaType, 
    embeddedContent,
    name, 
=======
    category,
    mediaType,
    embeddedContent,
    name,
    email,  // Save email field
>>>>>>> bd8644c (final changes)
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

<<<<<<< HEAD

export const requestAccess = async (req, res) => {
  const { id } = req.params;  // Post ID
  const { userId, userName } = req.body;  // Requester’s details

  if (!mongoose.Types.ObjectId.isValid(id)) {
=======
import User from '../models/user.js';
import { sendRequestAccessEmail } from '../utils/mailer.js';

export const requestAccess = async (req, res) => {
  console.log('requestAccess controller called');
  const { id } = req.params;  // Post ID
  const { userId, userName, userEmail } = req.body;  // Requester’s details including email

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log(`Invalid post id: ${id}`);
>>>>>>> bd8644c (final changes)
    return res.status(404).send(`No post with id: ${id}`);
  }

  try {
    const post = await PostMessage.findById(id);
<<<<<<< HEAD
=======
    if (!post) {
      console.log(`Post not found with id: ${id}`);
      return res.status(404).json({ message: `No post with id: ${id}` });
    }
    console.log('Post found:', post);
>>>>>>> bd8644c (final changes)

    // Check if request already exists
    const alreadyRequested = post.accessRequests.some(req => req.userId.toString() === userId);
    if (alreadyRequested) {
<<<<<<< HEAD
      return res.status(400).json({ message: "Access already requested" });
    }

    // Add request to the post
    post.accessRequests.push({ userId, userName, status: "Pending" });
    await post.save();

    res.status(200).json(post);
  } catch (error) {
=======
      console.log('Access already requested by user:', userId);
      return res.status(400).json({ message: "Access already requested" });
    }

    // Add request to the post, including userEmail
    post.accessRequests.push({ userId, userName, status: "Pending", userEmail });
    await post.save();
    console.log('Access request saved to post');

    // Send email notification to post creator/admin using email saved in post
    if (post.email) {
      console.log(`Sending access request email to admin: ${post.email} from user: ${userEmail}`);
      try {
        await sendRequestAccessEmail(post.email, userName, post.title, userEmail);
        console.log('Access request email sent successfully');
      } catch (emailError) {
        console.error('Failed to send access request email:', emailError);
      }
    } else {
      console.warn('Post creator email not found, cannot send access request email');
    }

    res.status(200).json(post);
  } catch (error) {
    console.error('Error in requestAccess controller:', error);
>>>>>>> bd8644c (final changes)
    res.status(500).json({ message: error.message });
  }
};

<<<<<<< HEAD
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
=======
// New endpoint: Get pending access requests for posts created by admin
export const getPendingRequestsForAdmin = async (req, res) => {
  const { userId } = req.params; // Admin user ID
  try {
    // Find posts created by admin with pending access requests
    const posts = await PostMessage.find({
      creator: userId,
      "accessRequests.status": "Pending"
    });

    // Extract pending requests with post info
    const pendingRequests = [];

    // Fetch user details for each request
    for (const post of posts) {
      for (const request of post.accessRequests) {
        if (request.status === "Pending") {
          // Fetch user details from User model
          const user = await User.findById(request.userId).select('name email role');
          pendingRequests.push({
            postId: post._id,
            postTitle: post.title,
            requestId: request._id,
            userId: request.userId,
            userName: user ? user.name : request.userName,
            userEmail: user ? user.email : request.userEmail,
            userRole: user ? user.role : null,
            status: request.status
          });
        }
      }
    }

    res.status(200).json(pendingRequests);
  } catch (error) {
    console.error('Error fetching pending requests for admin:', error);
    res.status(500).json({ message: error.message });
  }
};

// New endpoint: Approve or reject an access request
export const handleAccessRequest = async (req, res) => {
  const { postId, requestId } = req.params;
  const { status } = req.body; // Expected values: "Approved" or "Rejected"

  if (!mongoose.Types.ObjectId.isValid(postId) || !mongoose.Types.ObjectId.isValid(requestId)) {
    return res.status(400).json({ message: "Invalid postId or requestId" });
  }

  try {
    const post = await PostMessage.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const requestIndex = post.accessRequests.findIndex(req => req._id.toString() === requestId);
    if (requestIndex === -1) {
      return res.status(404).json({ message: "Request not found" });
    }

    post.accessRequests[requestIndex].status = status;
    await post.save();

    res.status(200).json({ message: `Request ${status.toLowerCase()} successfully` });
  } catch (error) {
    console.error('Error handling access request:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get pending requests for a user
export const getPendingRequests = async (req, res) => {
  const { userId } = req.params;
  try {
    const posts = await PostMessage.find({ creator: userId, "accessRequests.status": "Pending" });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
>>>>>>> bd8644c (final changes)
  }
};
