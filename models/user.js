const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// create schema
const userSchema = new Schema({
  account: {
    type: String,
    default: "default"
  },
  firstName: {
    type: String,
    default: "default"
  },
  lastName: {
    type: String,
    default: "default"
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  plan_id: {
    type: String,
    default: "0"
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  billed: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model("user", userSchema);
