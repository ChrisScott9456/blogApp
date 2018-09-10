const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Post Schema
const postSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: 0
  },
  // type: {
  //   type: String,
  //   required: true,
  //   default: ''
  // },
  // priority: {
  //   type: Boolean, //false = Low, true = High
  //   required: true,
  //   default: false
  // },
  // label: {
  //   type: String
  // },
  // requestingDepartment: {
  //   type: String,
  //   required: true,
  //   default: ''
  // },
  // sprintStartDate: {
  //   type: Date, 
  //   required: true
  // },
  // sprintEndDate: {
  //   type: Date,
  //   required: true
  // },
  // status: {
  //   type: String,
  //   required: true,
  //   default: ''
  // },
  // resolution: {
  //   type: String
  // }
  comments: {
    type: String,
    default: ''
  }
},

{ collection: 'Posts' });

const Post = module.exports = mongoose.model('Post', postSchema);

//GET Call for Posts
module.exports.getPost = function(id, res) {
  Post.findById(id, function(err, post) {
    if(err) throw err;

    res(post);
  });
}

//POST Call for Posts
module.exports.createPost = function(newPost, res) {
  newPost.save(res);
}