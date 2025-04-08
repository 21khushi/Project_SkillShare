import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  // Basic post info
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: String, required: true },
  skills: { type: [String], default: [] },
  // New advanced content fields:
  category: { type: String, default: 'General' },
  mediaType: { type: String, default: 'image' }, // e.g., image, video, document
  embeddedContent: { type: String, default: '' }, // for quizzes, code snippets, etc.
  selectedFile: { type: String, default: '' },
  likeCount: { type: Number, default: 0 },
  // Comments for interactive engagement:
  comments: [
    {
      user: String,
      comment: String,
      createdAt: { type: Date, default: new Date() },
    }
  ],
  createdAt: { type: Date, default: new Date() },
  
  accessRequests: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      userName: { type: String },
      status: { type: String, default: "Pending" },
      requestedAt:{type:Date,default:new Date()},
    }
  ]
});


export default mongoose.model("PostMessage", postSchema);
