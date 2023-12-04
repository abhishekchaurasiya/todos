const mongoose = require("mongoose");

function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};

function covertObjectId(id) {
    return mongoose.Types.ObjectId(id)
}

function stringValidate(str) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str)
}

function validatePhoneNumber(phonenumber) {
    const reg = /^\d{10}$/
    return reg.test(phonenumber)
}

function objectId(id) {
    if (mongoose.isValidObjectId(id)) {
        return true;
    }
    return false;
}

function paramsValidate(paramVal) {
    if (!paramVal) {
        return false;
    }
    else if (typeof (paramVal) === 'string') {
        let val = paramVal.trim();
        if (val === '') {
            return false;
        }
    }
    return true;
}

module.exports = {
    isValidEmail,
    covertObjectId,
    stringValidate,
    validatePhoneNumber,
    objectId,
    paramsValidate,
}