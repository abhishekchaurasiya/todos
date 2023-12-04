const cloudinary = require("cloudinary").v2;
const fs = require("fs")

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    secure: true,
});

async function uploadOnCloudinary(localFilePath) {
    try {
        if (!localFilePath) return null;

        // upload the file on cloudinary
        let response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        console.log("file is uploaded on cloudinary", response.url);

        //file has been uploaded successfull
        // fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // Remove the locally saved temporary file as the upload operation got failed
        fs.unlinkSync(localFilePath);
        return null;

    }
};

module.exports = { uploadOnCloudinary }