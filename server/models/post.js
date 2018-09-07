const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Post Schema
const postSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: 0
  }
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
},

{ collection: 'Posts' });

const Post = module.exports = mongoose.model('Post', postSchema);

module.exports.createPost = function(newPost, res) {
  newPost.save(res);
}