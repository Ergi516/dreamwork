const db = require('../models/db');

const UserController = {};

UserController.createUser((req, res, next) => {
  //console.log('inside the userController.createUser function');

  const queryString =
    'INSERT INTO User (email, username, password) VALUES ($1, $2, $3)';

  const values = [req.body.email.toLowerCase(), req.body.username];

  res.locals.username = req.body.username;

  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: {
          err: 'Username taken,',
        },
      });
    }
  });
  res.json(res.locals.username);
  return next();
});

module.exports = UserController;
