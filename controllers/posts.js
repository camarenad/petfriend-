const Post = require('../models/post');
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
// const bluebird = require('bluebird');
const multiparty = require('multiparty');

async function createPost(req, res) {
  const post = new Post(req.body);
  post.author = req.user._id;
  try {
    await post.save();
    // Send back just the id of the new post.
    // A second request will submit the file
    return res.json({ postId: post._id });
  } catch (err) {
    return res.status(400).json(err);
  }
}

function uploadFile(request, response, next) {
  // create S3 instance
  const s3 = new AWS.S3();

  // abstracts function to upload a file returning a promise
  const uploadFile = (buffer, name, type) => {
    const params = {
      ACL: 'public-read',
      Body: buffer,
      Bucket: process.env.S3_BUCKET,
      ContentType: type.mime,
      Key: `${name}.${type.ext}`
    };
    return s3.upload(params).promise();
  };

  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
    if (error) throw new Error(error);
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = fileType(buffer);
      const timestamp = Date.now().toString();
      const fileName = `bucketFolder/${timestamp}-lg`;
      const data = await uploadFile(buffer, fileName, type);
      const post = await Post.findById(request.params.postId);
      post.picture = data.Location;
      await post.save();
      return response.json(post);
    } catch (error) {
      return response.status(400).send(error);
    }
  });
}

async function indexAnimals(req, res, next) {
  const animals = await Post.find({})
    .sort({createdAt: -1})
    .populate('author')
    .limit(req.query.limit || 10);

  return res.json(animals);
}
function show(res, req, next) {
  var id = req.req.params.id;
  Post.findById(id).then(function(post) {
    console.log(post);
    res.res.status(200).json(post);
  });
}

function updatePost(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(
    post
  ) {
    res.status(200).json(post);
  });
}

function deletePost(req, res) {
  Post.findByIdAndRemove(req.params.id).then(post => {
    res.status(200).json(post);
  });
}

module.exports = {
  createPost,
  uploadFile,
  indexAnimals,
  show,
  updatePost,
  deletePost
};


// Post.find(author: req.body.author, (err,posts)=>{
//   res.status.json(posts)
// })
// }