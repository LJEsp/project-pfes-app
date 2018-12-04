const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true
};

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  userType: requiredString,
  firstName: requiredString,
  lastName: requiredString,
  middleName: {
    type: String,
    required: false
  },
  email: requiredString,
  contact: requiredString,
  password: requiredString,
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
