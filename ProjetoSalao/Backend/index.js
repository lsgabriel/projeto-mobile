const express = require('express');
const app = express();

const indexRoute = require('./routes');

app.use('/', indexRoute);

app.listen(3000);