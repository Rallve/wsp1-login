require('dotenv').config();
const express = require('express');
const router = express.Router();
const pool = require('../utils/database.js');
const promisePool = pool.promise();
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.njk', { title: 'Login ALC' });
});

router.get('/login', function (req, res, next) {
    res.render('form.njk', { title: 'Login ALC' });
});

router.get('/profile', function (req, res, next) {
    //if (LoggedIn) {
    res.render('profile.njk', { title: 'Profile' });
    //} else {res.redirect('/login');}

});

router.post('/login', async function (req, res, next) {
    const { username, password } = req.body;
    const errors = [];

    let LoggedIn = false;

    if (username === "") {
        console.log("Username is Required")
        errors.push("Username is Required")
        return res.json(errors)
    } else if (password === "") {
        console.log("Password is Required")
        errors.push("Password is Required")
        return res.json(errors)
    }
    const [users] = await promisePool.query("SELECT * FROM unusers WHERE name=?", username);
    console.log(users)
    if (users.length > 0) {

        bcrypt.compare(password, users[0].password, function (err, result) {
            // result == true logga in, annars buuuu 
            if (result) {
                
                return res.redirect('/profile');
            } else {
                errors.push("Invalid username or password")
                return res.json(errors)
            }
        });

         

    }




    // if username inte är i db : login fail!
});



//Does this make sense???
router.get('/crypt/:pwd', async function (req, res, next) {
    const pwd = req.params.pwd;

    await bcrypt.hash(pwd, 10, function (err, hash) {

        console.log(hash);
        //return res.json(hash);
        return res.json({ hash });
    });

});


module.exports = router;
