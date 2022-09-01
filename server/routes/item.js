const express = require('express');
const db = require('../config/database');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.post('/', verifyJWT, req => {
  const { id, item } = req.body || false;
  if (!id || !item) return;
  db.query('INSERT INTO items (collectionId, item) VALUES (?, ?)', [id, item]);
});

module.exports = router;
