const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require('js-sha256');
const jwt = require('jwt-then');

exports.register = async (req, res) => {
    const { name, password, phone } = req.body;
    
    // const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;

    // if(!emailRegex.test(email)) throw "Email is not supported from your domain.";
    if(password.length < 6) throw "Password must be atleast 6 characters long";
    if(phone.length < 11) throw "Phone number must be atleast 12 numbers long";
    if(name.length<=3) throw "Name must be atleast 4 characters long"

    // const userEmailExists = await User.findOne({
    //     email
    // })
    // if(userEmailExists) throw "User with same email already exists"

    const userPhoneExists = await User.findOne({
        phone
    })
    if(userPhoneExists) throw "User with same Phone Number already exists"

    const user = new User({ 
        name, 
        phone,
        password: sha256(password + process.env.SALT),
    });

    await user.save();

    res.json({
        message: "User registered Successfully!"
    })

}

exports.login = async (req, res) => {
    const {phone, password} = req.body;
    const user = await User.findOne({
        phone, 
        password: sha256(password + process.env.SALT)
    });
    console.log(user,"iiii")
    if(!user) throw "Phone Number and Password did not match.";
    let {name} = user;
    const token = await jwt.sign({ id: user.id}, process.env.SECRET);

    res.json({
        name:name,
        message: "User logged in successfully",
        token,
    })
}

