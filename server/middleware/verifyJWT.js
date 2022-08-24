const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization;

  !token
    ? res.status(401)
    : jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) res.status(403);
        else {
          req.id = user.id;
          req.user = user.username;
          next();
        }
      });
};

module.exports = verifyJWT;
