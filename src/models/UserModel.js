const mongose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users, Todo } = require("../utils/Collections_Constant");
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
        minlength: 8
    },
    todos: [
        {
            type: mongose.Schema.Types.ObjectId,
            ref: Todo
        }
    ],
    refreshToken: {
        type: String,
        // required: true 
    }
}, { timestamps: true, id: false });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
})

// create method
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

const User = mongose.model(Users, userSchema);
module.exports = User;
