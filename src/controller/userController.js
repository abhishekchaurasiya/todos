const { OK, NOT_FOUND, BAD_REQUEST } = require("../utils/httpStatusCode")
const sendResponse = require("../utils/sendResponse");
const { textUpperCase, isValidEmail, validatePhoneNumber } = require("../utils/Common");
const { existsUser, existsPhoneNumber } = require("../services/userServices");
const { uploadOnCloudinary } = require("../config/cloudinaryUpload");
const User = require("../models/UserModel");

const register = async (req, res) => {
    try {

        // get user details from frontend
        // validation - not empty
        // check if user already exists: username, email
        // check for images, check for avatar
        // upload them to cloudinary, avatar
        // create user object - create entry in db
        // remove password and refresh token field from response
        // check for user creation
        // return res
        
        let username = req.body.username ? req.body.username : "";
        let fullname = req.body.fullname ? textUpperCase(req.body.fullname) : "";
        let email = req.body.email ? req.body.email : "";
        let phone = req.body.phone ? req.body.phone : "";
        let password = req.body.password ? req.body.password : "";

        if ([username, fullname, email, phone, password].some((field) => field?.trim() === "")) {
            return res.status(BAD_REQUEST).json({ error: "All fields are required!" })
        }

        if (!isValidEmail(email)) {
            return res.status(BAD_REQUEST).json({ error: "Enter the valid email!" })
        }

        if (!validatePhoneNumber(phone)) {
            return res.status(BAD_REQUEST).json({ error: "Enter the valid phone number!" })
        }

        if (await existsUser(username, email) === true) {
            return res.status(BAD_REQUEST).json({ error: "User name & email is already exists!" })
        }

        if (await existsPhoneNumber(phone)) {
            return res.status(BAD_REQUEST).json({ error: "Phone number is already exists!" })
        }

        if (password.length < 8) {
            return res.status(BAD_REQUEST).json({ error: "Passoword length must be 8 !" })
        }

        let avatarLocalPath = req.files?.avatar[0]?.path;
        if (!avatarLocalPath) {
            return res.status(BAD_REQUEST).json({ error: "Avatar file is required!" })
        }

        let coverImageLocalPath;
        if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
            coverImageLocalPath = req.files.coverImage[0].path;
        }

        let avatar = await uploadOnCloudinary(avatarLocalPath);
        let coverImage = await uploadOnCloudinary(coverImageLocalPath);

        let user = await User.create({
            username: username.toLowerCase(),
            fullname: fullname,
            email: email,
            phone: phone,
            avatar: avatar?.url,
            coverImage: coverImage?.url || "",
            password: password
        });

        let createdUser = await User.findById({ _id: user._id }).select("-password");
        if (!createdUser) {
            return res.status(BAD_REQUEST).json({ error: "Something went wrong while registering the user!" })
        }

        return res.status(OK).json({ msg: `User created successfully`, user: createdUser })
    } catch (error) {
        return sendResponse(res, NOT_FOUND, { message: error.message });
    }
};











const login = async (req, res) => {
    try {

    } catch (error) {
        return sendResponse(res, NOT_FOUND, { message: error.message })
    }
};

const logout = async (req, res) => {
    try {

    } catch (error) {
        return sendResponse(res, NOT_FOUND, { message: error.message })
    }
};

const getUserDetails = async (req, res) => {
    try {

    } catch (error) {
        return sendResponse(res, NOT_FOUND, { message: error.message })
    }
};

module.exports = {
    register,
    login,
    logout,
    getUserDetails
}