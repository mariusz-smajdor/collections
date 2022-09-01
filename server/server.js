const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const collectionRoute = require('./routes/collection');
const itemRoute = require('./routes/item');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/collection', collectionRoute);
app.use('/item', itemRoute);

app.listen(process.env.PORT || 3001);
