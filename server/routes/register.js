const express = require('express');
const db = require('../config/database');

const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body.user || false;
  if (!username || !password) return;

  db.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    err => {
      if (err) {
        err.code === 'ER_DUP_ENTRY'
          ? res.status(409).send('Such username already exists.')
          : res.status(500).send('Something went wrong, try again later.');
      } else {
        res.status(201).send('Successfully created an account.');
      }
    }
  );
});

module.exports = router;
