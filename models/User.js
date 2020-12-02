const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required!'
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: 'Password is required!'
    },
    phone: {
        type: String,
        required: 'Phone number is required'
    }

}, {
    timestamps: true
}

)

module.exports = mongoose.model('User', userSchema);

