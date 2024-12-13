const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Article',articleSchema);