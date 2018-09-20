const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');
const Contact = require('../models/Contact');

var userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    contact :
      {
        type : Schema.Types.ObjectId,
        ref: 'Contact'
    },
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
