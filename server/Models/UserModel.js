const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Your email address is required'],
        unique: true,
    },
    firstName: {
        type: String,
        required: [true, 'Your firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'Your lastName is required']
    },
    password: {
        type: String,
        required: [true, 'Your password is required']
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12);
})

module.exports = mongoose.model('User', userSchema);