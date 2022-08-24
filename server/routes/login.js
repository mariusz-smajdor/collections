const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body.user || false;
  if (!username || !password) return;

  db.query(
    'SELECT id, username, password, status FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, data) => {
      err && res.status(500).send('Something went wrong.');
      if (data.length) {
        const { id } = data[0];
        const accessToken = jwt.sign({ id, username }, process.env.JWT_TOKEN);
        res.send({ accessToken });
      } else {
        res.status(403).send('Wrong username or password.');
      }
    }
  );
});

module.exports = router;
