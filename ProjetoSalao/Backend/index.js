const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRoute = require('./routes/index');
const userRoute = require('./routes/client');
const professionalRoute = require('./routes/professional');
const authRoute = require('./routes/auth');
const calendarRoute = require('./routes/calendar');
const selectRoute = require('./routes/select');
const executeRoute = require('./routes/execute')

app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/login', authRoute);
app.use('/clients', userRoute);
app.use('/professionals', professionalRoute);
app.use('/calendar', calendarRoute);
app.use('/select', selectRoute);
app.use('/execute', executeRoute);

app.listen(process.env.PORT || 3000);