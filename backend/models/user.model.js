require('dotenv').config()

const { isEmail } = require("validator");

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        Branch: {
            type: String,     
        },
        email: {
            type: String,
            unique: true,
            required: [true, "User's email address required!"],
            lowercase: true,
            validate: [isEmail, "Please enter a valid email address!"],
        },
      
        password: {
            type: String,
            required: [true, "User's password required!"],
            minlength: [8, "Minimum length of password is 8 characters!"],
        },
        phone: {
            type: String,
        },
        Sapid: {
            type: String,
            required:[true, "Sapid is required"],
            minlength: [11 , "Sapid should contain 11 numbers"],
            maxlength: [11 ,"Sapid should not exceed 11 numbers"]
        },
        googleId: {
            type: String,
        },
        tokens: [{
            token: {
                type: String, 
                required: true
            }
        }]
    },
    {
        timestamps: true,
    }
);

// Hashing the password
userSchema.pre('save', async function(next) {
    let currentUser = this;
    if(!currentUser.isModified('password')) { 
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        currentUser.password = await bcrypt.hash(currentUser.password, salt);
        return next();
    } catch(error) {
        return next(error);
    }
});

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET); 
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
} 

userSchema.statics.findByCredentials = async function ( Sapid, password ) {
    const user = await this.findOne({ Sapid });
  
    if(!user) {
        throw new Error('Unable to login');
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if(!isMatch) {
        throw new Error('Unable to login');
    }
  
    return user;
}


const User = mongoose.model('User', userSchema)
module.exports = User;