const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.listen(process.env.PORT || 3001);
