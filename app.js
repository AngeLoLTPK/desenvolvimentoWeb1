require("./layout/header.js");

const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 'yourPasswordHere';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Hashed password:', hash);
});