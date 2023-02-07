const express = require('express');
const router = express.Router();
const promisePool = require('../utils/database.js');
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.njk', { title: 'Login ALC' });
});

router.get('/login', function(req, res, next) {
    res.render('form.njk', { title: 'Login ALC' });
});

router.post('/login', async function(req, res, next) { 
    const { username, password} = req.body;
    const encrypted = password.hash; 
    console.log(encrypted);
    const [rows] = await promisePool.query("INSERT INTO unusers (name, password) VALUES (?,?)", [username, encrypted]);

});

//Does this make sense???
router.get('/:pwd', function(req, res, next) {
    const pwd = req.body.pwd;
    res.render('form.njk', { title: 'Login ALC' });
});
bcrypt.hash(LÖSENORDSSTRÄNG, 10, function (err, hash) {

    console.log(hash);
    return res.json(hash);
});

module.exports = router;
