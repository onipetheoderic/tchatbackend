const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required!'
    },
    description: {
        type: String,
        required: 'Description is required!'
    },


}, {
    timestamps: true
}

)

module.exports = mongoose.model('Chatroom', chatroomSchema);

