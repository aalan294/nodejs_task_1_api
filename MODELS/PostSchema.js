const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        ref: 'Users',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes:  [{
        username: {
            type: String,
            ref: 'Users',
            required: true
        }
    }],
    comments: [{
        username: {
            type: String,
            ref: 'Users',
            required: true
        },
        content: String
    }],
}, { timestamps: true });


module.exports = mongoose.model('Post', PostSchema);