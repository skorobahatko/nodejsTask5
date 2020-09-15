const express = require('express');
const path = require('path');
const app = express();
const apiRouter = require('./routes/api.router');

const instance = require('./database').getInstance();
instance.setModels();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('api', apiRouter);

app.listen(8080, (err) => {
    if (err) throw err;
    console.log ('server listening on 8080');
});
