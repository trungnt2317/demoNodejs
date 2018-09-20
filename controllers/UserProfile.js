const { User } = require('../models/userProfile');
const ContactController = require('../controllers/Contacts');
const Contact = require('../models/Contact');
const request = require('request');
const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    User.find().then((user) => {
        res.send({user});
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', (req, res) => {

    console.log ("req.body", req.body)
    var user = new User({
      username: req.body.userName
    });
     console.log (user);
    var options = {
      uri: 'http://localhost:3000/contact',
      method: 'POST',
      json: {
        "phone": req.body.phone
      }
    };

  user.save().then((user) => {
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log ("......", body)
        user.contact = body.id;
        user.save()
        res.send(user);
      }
    });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/user/:userID', (req, res) => {
    var userID = req.params.userID;

    User.findOne({userID:userID}).then((user) => {
        res.send(user);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.put('/user/:userID', (req, res) => {
    var query = { userID: req.params.userID };

    User.findOneAndUpdate(query, {
        role: req.body.role,
        password: req.body.password
    }, {upsert:true}, (e, raw) => {
        if (e) {
            res.status(400).send('Invalid user supplied');
        }
        res.send(raw);
    });
});

router.delete('/user/:userID', (req, res) => {
    var query = { userID: req.params.userID };
    User.findOneAndRemove(query,
        (e, raw) => {
            if (e) {
                res.status(400).send('Invalid username supplied');
            }
            res.send(raw);
        });
});
module.exports = router;
