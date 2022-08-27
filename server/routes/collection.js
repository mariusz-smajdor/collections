const express = require('express');
const db = require('../config/database');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.post('/', verifyJWT, req => {
  const { name, description, topic, items } = req.body.collection || false;
  if (!name || !description || !topic || !items) return;

  db.query(
    'INSERT INTO collections (userId, name, description, topic, items) VALUES (?, ?, ?, ?, ?)',
    [req.id, name, description, topic, items],
    err => {
      err?.status(500).send('Something went wrong, try again later.');
    }
  );
});

router.get('/', verifyJWT, (req, res) => {
  const { id, user } = req;

  db.query(
    'SELECT id, name, description, topic, items FROM collections WHERE userId = ?',
    [id],
    (err, data) => {
      err?.status(500).send(err);
      res?.status(201).send({ data, user });
    }
  );
});

router.delete('/:id', req => {
  const { id } = req.params;

  db.query('DELETE FROM collections WHERE id = ?', [id], (err, data) => {
    if (err) console.log(err);
    if (data) console.log(data);
  });
});

module.exports = router;
