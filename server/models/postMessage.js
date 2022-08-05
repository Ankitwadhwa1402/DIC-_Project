import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    price:Number,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    BuyNow: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('DICPROJECT', postSchema);

export default PostMessage;