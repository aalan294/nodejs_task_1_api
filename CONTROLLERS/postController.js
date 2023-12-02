const Post = require('../MODELS/PostSchema')
const Users = require('../MODELS/UserSchema')

const getAllPosts = async(req,res)=>{
    try {
        const Posts = await Post.find()
        res.status(201).json({Posts})
    } catch (error) {
        res.status(400).json({"error":"error accured while fetching posts"})
    }
}

const newPost = async(req,res)=>{
    try {
        const {username,content} = req.body
        if(!username || !content){
            throw new Error("enter all the required fields")
        }
        const newPost = {
            username,content
        }
        const post = await Post.create(newPost)
        res.status(201).json({post})
    } catch (error) {
        res.status(401).json({"error":error.message})
    }
}

const getPost = async(req,res)=>{
    try {
        const {id} = req.params
        let check = await Post.findOne({_id:id})
        if(!check){
            throw new Error("can't find the post")
        }
        const post = await Post.findById(id)
        res.status(201).json({post})
    } catch (error) {
        res.status(401).json({"error":error.message})
    }
}

const updatePost = async(req,res)=>{
    try {
        const {id} = req.params
        const {username,content} = req.body
        if(!username || !content){
            throw new Error("enter all the required fields")
        }
        let check = await Post.findOne({_id:id})
        if(!check){
            throw new Error("can't find the post")
        }
        const UpdatedPost = {
            username,content
        }
        const post = await Post.findByIdAndUpdate(id,UpdatedPost)
        res.status(201).json({"updated post": post})
    } catch (error) {
        res.status(401).json({"error":error.message})
    }
}

const deletePost = async(req,res)=>{
    try {
        const {id} = req.params
        let check = await Post.findOne({_id:id})
        if(!check){
            throw new Error("can't find the post")
        }
        const deleted = await Post.findByIdAndDelete(id)
        res.status(201).json({"deleted post":deleted})
    } catch (error) {
        res.status(401).json({"error":error.message})
    }
}

const addLikes = async(req,res)=>{
    try {
        const {id} = req.params
        const {username} = req.body
        let postCheck = await Post.findOne({_id:id})
        let userCheck = await Users.findOne({username:username})
        if(!postCheck || !userCheck){
            throw new Error("you can't like this post")
        }
        const post = await Post.findByIdAndUpdate(
            id,
            {
                $push: {
                  likes: {
                    username: username
                  },
                },
              },
            { new: true }
         );
         res.status(201).json({"notification":`${userCheck.username} liked your post`});
    } catch (error) {
        res.status(401).json({"error":error.message})
    }
}

const addComments = async (req, res) => {
    try {
      const { id } = req.params
      const { username, content } = req.body
      let postCheck = await Post.findOne({ _id: id })
      let userCheck = await Users.findOne({username})
      if (!postCheck || !userCheck) {
        throw new Error("you can't comment on this post")
      }
      const post = await Post.findByIdAndUpdate(
        id,
        {
          $push: {
            comments: {
              username: username,
              content: content,
            },
          },
        },
        { new: true }
      );
  
      res.status(201).json({
        notification: `${userCheck.username} commented on your post`,
      });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };
  

module.exports = {getAllPosts,newPost,getPost,updatePost,deletePost,addLikes,addComments}