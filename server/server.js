const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const registerRoute = require('./routes/register');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/register', registerRoute);

app.listen(process.env.PORT || 3001);
