const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const myselfRoute = require('./routes/myself');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/myself', myselfRoute);

app.listen(process.env.PORT || 3001);
