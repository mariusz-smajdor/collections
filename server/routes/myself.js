const express = require('express');
const db = require('../config/database');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.get('/', verifyJWT, (req, res) => {
  db.query(
    'SELECT username, status FROM users WHERE id = ?',
    [req.id],
    (_, user) => {
      res.status(201).send(user);
    }
  );
});

module.exports = router;
