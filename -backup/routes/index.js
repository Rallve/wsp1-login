require('dotenv').config();
const express = require('express');
const router = express.Router();
const pool = require('../utils/database.js');
const promisePool = pool.promise();
const bcrypt = require('bcrypt');

let LoggedIn = false;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.njk', { title: 'Login ALC' });
});

router.get('/login', function(req, res, next) {
    res.render('form.njk', { title: 'Login ALC' });
});

router.get('/profile', function(req, res, next) {
    res.render('index.njk', { title: 'Profile' });
});

router.post('/login', async function(req, res, next) { 
    const { username, password } = req.body;
    const errors = [];
    const [users] = await promisePool.query("SELECT * FROM unusers WHERE name=?", username);

    if(username  === "") {
        console.log("Username is Required")
        errors.push("Username is Required")
    } else if(password  === "") {
        console.log("Password is Required")
        errors.push("Password is Required")
    }
    if(users[0] != null){
        
        bcrypt.compare(password, users[0].password, function(err, result) {
            // result == true logga in, annars buuuu 
            LoggedIn = true;
        });

        if(LoggedIn){
            res.redirect("/profile");
        } else {
            errors.push("Invalid username or password")
        }

    }

    res.json(errors)
    // if username inte är i db : login fail!
});



//Does this make sense???
router.get('/:pwd', function(req, res, next) {
    const pwd = req.body.pwd;
    
    bcrypt.hash(pwd, 10, function (err, hash) {

        console.log(hash);
        //return res.json(hash);
    });

    res.send(hash);
});


module.exports = router;
