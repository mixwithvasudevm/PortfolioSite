import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
  selectedFile: {
    type: String,
    trim: true,
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Blogs = mongoose.model("Blogs", BlogSchema);
export default Blogs;
