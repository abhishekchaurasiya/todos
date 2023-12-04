const mongose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, Todo } = require("../utils/Collections_Constant");
const { Schema } = mongose;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowecase: true
    },
    fullname: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowecase: true
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
        lowecase: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required'],
        required:true
    },
    todos: [
        {
            type: mongose.Schema.Types.ObjectId,
            ref: Todo
        }
    ]
}, { timestamps: true, id: false });


exports.User = mongose.model(User, userSchema);