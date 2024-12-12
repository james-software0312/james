require('dotenv').config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
    console.log('process.env.TOKEN_KEY >>>>',process.env.TOKEN_KEY, process.env.PORT);
    return jwt.sign({id},  process.env.TOKEN_KEY, {
        expiresIn: 3*24*60*60,
    })
}