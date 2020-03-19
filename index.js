'use strict';
//public node-modules
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
//variable declaration
const app = express();
const port = 8001 || process.env.PORT;
const log = console.log;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//default route for status
app.get(`/`, (req, res) => {
    res.send(`run application successfully`);
});

//attach route with application
const {studentDetail} = require(`./controller`);
app.use(`/student`, studentDetail);

app.listen(port, () => {
    log(`server running on port ${port}`);
});
console.log('run application');