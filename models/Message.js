const mongoose = require("mongoose");
//A message must belong to a Chatroom
const messageSchema = new mongoose.Schema({
    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'Chatroom is required!',
        ref: "Chatroom"
    },
//A message belongs to a User
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User is required!',
        ref: "User"
    },
    message: {
        type: String,
        required: 'Message is required'
    }

}, {
    timestamps: true
}

)

module.exports = mongoose.model('Message', messageSchema);
