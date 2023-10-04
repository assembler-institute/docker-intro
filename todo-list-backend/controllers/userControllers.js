const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { uploadImage, deleteImage } = require("../cloudinary/cloudinary");
const fs = require("fs-extra");

const addNewUser = async (req, res) => {
  const userData = req.body;
  const { username, email, password } = userData;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "A user already exists with this email",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hash,
    });

    await newUser.save();
    const { _id, todos, img, comesFromFirebase } = newUser;
    return res.status(201).json({
      ok: true,
      user: {
        userId: _id,
        username,
        email,
        img: img.secure_url,
        comesFromFirebase,
      },
      todos,
    });
  } catch (error) {
    return res.status(503).json({
      ok: false,
      msg: "Something happened",
    });
  }
};

const loginUser = async (req, res) => {
  const userData = req.body;
  const { email, password } = userData;

  try {
    const user = await User.findOne({ email: email }).populate("todos");
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "Wrong email or password",
      });
    }

    const userPassword = user.password;
    const isPasswordOk = await bcrypt.compare(password, userPassword);

    if (!isPasswordOk) {
      return res.status(400).json({
        ok: false,
        msg: "Wrong email or password",
      });
    }

    const { _id, username, img, todos, comesFromFirebase } = user;
    return res.status(200).json({
      ok: true,
      user: {
        userId: _id,
        username,
        email,
        img: img.secure_url,
        comesFromFirebase,
      },
      todos,
    });
  } catch (error) {
    return res.status(503).json({
      ok: false,
      msg: "Something happened",
    });
  }
};

const authFirebase = async (req, res) => {
  const userData = req.body;
  const { email } = userData;

  try {
    const user = await User.findOne({ email: email }).populate("todos");
    if (!user) {
      const newUser = new User({
        username: userData.username,
        email,
        comesFromFirebase: true,
      });

      await newUser.save();
      const { _id, username, todos, img, comesFromFirebase } = newUser;
      return res.status(201).json({
        ok: true,
        user: {
          userId: _id,
          username,
          email,
          img: img.secure_url,
          comesFromFirebase,
        },
        todos,
      });
    }

    const { _id, username, img, todos, comesFromFirebase } = user;

    return res.status(200).json({
      ok: true,
      user: {
        userId: _id,
        username,
        email,
        img: img.secure_url,
        comesFromFirebase,
      },
      todos,
    });
  } catch (error) {
    return res.status(503).json({
      ok: false,
      msg: "Something happened",
    });
  }
};

const editUsername = async (req, res) => {
  const { username, userId } = req.body;
  try {
    await User.findByIdAndUpdate(userId, { username });
    return res.status(200).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      ok: false,
      msg: "Something happened",
    });
  }
};

const editImage = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findOne({ _id: userId });
    const resultToUpload = await uploadImage(req.files.file.tempFilePath);
    const { public_id, secure_url } = resultToUpload;
    const imgToDelete = user.img.public_id;

    user.img.public_id = public_id;
    user.img.secure_url = secure_url;

    if (imgToDelete) {
      await deleteImage(imgToDelete);
    }

    await user.save();

    await fs.unlink(req.files.file.tempFilePath);

    return res.status(200).json({
      ok: true,
      img: user.img.secure_url,
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      ok: false,
      msg: "Something happened",
    });
  }
};

module.exports = {
  addNewUser,
  loginUser,
  authFirebase,
  editUsername,
  editImage,
};
