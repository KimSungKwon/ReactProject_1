import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now
    },
});

// create model  Schema name: Post   Collection name: posts
const Post = mongoose.model('Post', PostSchema);
export default Post;