const User = require('../Models/UserModel');
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require('bcrypt');

module.exports.Signup = async (req, res, next) => {
    try {
        
        const { email, password, firstName, lastName, createdAt } = req.body;
        console.log(email);
        const existingUser = await User.findOne({email});
        console.log(existingUser);
        if(existingUser) {
            // console.log('asdfasdfasdf');
            return res.json({message: 'User already exists', success: false});
        }

        const user = await User.create({email, password, firstName, lastName, createdAt});
        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false,
        });
        return res.json({message: 'User signed in successfully', success: true});
    } catch(error) {
        console.error(error);
    }
}

module.exports.Login = async (req, res, next) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.json({message: 'All fields are required'});
        }
        const user = await User.findOne({email});
        if(!user) {
            return res.json({message: 'Incorrect password or email'});
        }
        const auth = await bcrypt.compare(password, user.password);
        if(!auth) {
            return res.json({message: 'Incorrect password or email'});
        }
        const token =  createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        // res.status(201).json({message: 'User logged in successfully', success: true});
        return res.json({message: 'User logged in successfully', success: true, token: token})
    } catch (error) {
        return res.status(500).json({message: 'Server Error', success: false});
    }
}