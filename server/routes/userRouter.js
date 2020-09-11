const express = require('express');

const router = express.Router();

const UserController = require('../controllers/userController');

router.post('/register', UserController.createUser, (req, res) => {
  res.json(res.locals.username);
});

// router.post('/login', userController.login, (req, res) => {
//   res.status(200).json(res.locals.username);
// });

module.exports = router;
