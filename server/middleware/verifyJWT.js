const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.status(401).send('You are not authenticated.');
    return;
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      res.status(403).send('You have no premission to access this resource');
    } else {
      req.id = user.id;
      next();
    }
  });
};

module.exports = verifyJWT;
