const User = require("../models/UserModel");

async function existsUser(username, email) {
    let result = await User.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    });

    if (result) return true;
    return false;
};

async function existsPhoneNumber(phone) {
    return await User.findOne({ phone: phone });
}


module.exports = {
    existsUser,
    existsPhoneNumber
}