const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required!'
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'Creator is required!',
        ref: "User"
    },

}, {
    timestamps: true
}

)

module.exports = mongoose.model('Category', categorySchema);

