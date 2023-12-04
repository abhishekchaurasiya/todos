const { OK, NOT_FOUND, BAD_REQUEST } = require("../utils/httpStatusCode")
const sendResponse = require("../utils/sendResponse")

const register = async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.files)
        return res.status(OK).json({ msg: `User created successfully: ${req.body.username}` })
    } catch (error) {
        return sendResponse(res, NOT_FOUND, { message: error.message })
    }
}











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