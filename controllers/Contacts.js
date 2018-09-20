const { Contact } = require('../models/Contact');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log ("req.body", req.body)
  var contact = new Contact({
    phone: req.body.phone
  });
  console.log (contact);
  contact.save().then((contact) => {
        res.send(contact._id);
    });
  }, (e) => {
    res.status(400).send(e);
  });

module.exports = router;
