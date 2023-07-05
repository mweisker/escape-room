const bcrypt = require('bcrypt');
const db = require('../models/escapeModels');

const userController = {};

userController.newUser = async (req, res, next) => {
  const { UserName, Password } = req.body;

  try {
    const saltRounds = 10; // number of salt rounds for bcrypt to generate

    // Hash the password using bcrypt
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(Password, saltRounds, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });

    const text = `
      INSERT INTO Users (UserName, Password)
      VALUES ($1, $2)
      RETURNING *
    `;
    const params = [ UserName, hashedPassword ];
    const result = await db.query(text, params);
    res.locals.result = result.rows[0];
    return next();
  } catch (err) {
    next({
      log: `userController.newUser: ERROR: ${err}`,
      message: { err: 'Error ocurred in userController.newUser.  Check server logs for more details.'}
    });
  }
}

userController.findUser = async (req, res, next) => {
  const { UserName, Password } = req.body;

  try {
    const text = `
      SELECT *
      FROM  Users
      WHERE UserName=$1
    `;
    const params = [UserName];
    const result = await db.query(text, params);

    if (!result.rows[0]) {
      return next({
        log: 'User does not exist',
        message: { err: 'Username or Password was not found in the database' }
      });
    }

    let foundUser;
    for (const user of result.rows) {
      const isPasswordMatch = await bcrypt.compare(Password, user.password);
      if (isPasswordMatch) {
        foundUser = user;
        break;
      }
    }

    if (!foundUser) {
      return next({
        log: 'Invalid password',
        message: { err: 'Password is incorrect' }
      });
    }

    res.locals.result = foundUser;
    return next();
  } catch (err) {
    next({
      log: `userController.findUser: ERROR: ${err}`,
      message: { err: 'Error occurred in userController.findUser. Check server logs for more details.' }
    });
  }
};




module.exports = userController;