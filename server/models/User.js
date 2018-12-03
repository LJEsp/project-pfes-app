const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  usertype: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: trune
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
  logsAdded: {
    type: Number,
    required: true,
    default: 0
  },
  logsCompleted: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = User = mongoose.model("users", UserSchema);
