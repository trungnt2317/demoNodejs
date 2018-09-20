var mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/userprofile';

const dbName = 'userprofile';

const con = mongoose.connect(url, (error) => {
    if(error){
        console.log("Error " + error);
    }else{
        console.log("Connected successfully to server")
    }
});

module.exports = con;
