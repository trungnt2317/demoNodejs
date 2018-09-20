const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');
const User = require('../models/userProfile');

var contactSchema = new Schema({
    phone: {
        type: Number,
        required: true,
        unique: true},
})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = {
    Contact
};
