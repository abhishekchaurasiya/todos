const { upload } = require("../config/multer");
const { fieldsname } = require("../utils/Collections_Constant");

let uploadImageMid = upload.fields([
    {
        name: fieldsname.avatar,
        maxCount: 1
    },
    {
        name: fieldsname.converImage,
        maxCount: 1
    }
])
module.exports = { uploadImageMid }