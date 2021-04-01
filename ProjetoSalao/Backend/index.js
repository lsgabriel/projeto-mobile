const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');
const professionalRoute = require('./routes/professional');
const authRoute = require('./routes/auth');

app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/login', authRoute);
app.use('/users', userRoute);
app.use('/professionals', professionalRoute);

app.listen(process.env.PORT || 3000);