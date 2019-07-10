var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    favList: [{type:mongoose.Schema.Types.ObjectId, ref:'Post'}],
    posts: [{type:mongoose.Schema.Types.ObjectId, ref:'Post'}],
    messages:[[{type:mongoose.Schema.Types.ObjectId, ref:'User'}]]
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);
