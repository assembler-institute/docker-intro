const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "listkeeper",
  });
};

const deleteImage = async (public_id) => {
  return await cloudinary.uploader.destroy(public_id);
};

module.exports = { uploadImage, deleteImage };
