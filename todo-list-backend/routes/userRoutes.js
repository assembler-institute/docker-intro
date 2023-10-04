const express = require('express');
const {
  addNewUser,
  loginUser,
  authFirebase,
  editUsername,
  editImage
} = require('../controllers/userControllers');

const router = express.Router();

router.post('/register', addNewUser);
router.post('/login', loginUser);
router.post('/authFirebase', authFirebase);
router.post('/username', editUsername);
router.post('/image', editImage);

module.exports = router;
