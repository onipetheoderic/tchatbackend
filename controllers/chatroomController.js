const mongoose = require('mongoose');
const Chatroom = mongoose.model("Chatroom");

exports.createChatroom = async (req, res) => {
    // now we can acccess req.payload because we have added it in the middleware
    const { name, description } = req.body;
  

    const nameRegex = /^[A-Za-z\s]+$/

    if(!nameRegex.test(name)) throw "Chatroom name can contain only alphabets.";
    if(description.length<=10) throw "Description must be more than 10 characters"
    const chatroomExists = await Chatroom.findOne({ name });

    if (chatroomExists) throw "Chatroom with that name already exists!";

    const chatroom = new Chatroom({
        name, description
    })

    await chatroom.save();

    res.json({
        message: "Chatroom created!",
    });

}

exports.getAllChatrooms = async (req, res) => {
    const chatrooms = await Chatroom.find({});
    res.json(chatrooms)
}