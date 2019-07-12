const Post = require('../models/post');
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
// const bluebird = require('bluebird');
const multiparty = require('multiparty');

// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
//   });

//   // configure AWS to work with promises
//   AWS.config.setPromisesDependency(bluebird);

function create(request, response, next) {
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
      const post = new Post(request.body);
      post.picture = data.Location;
      post.author = request.user._id;
      await post.save();
      return response.json(post);
    } catch (error) {
      return response.status(400).send(error);
    }
  });
}

module.exports = {
  create
};
