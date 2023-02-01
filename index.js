const express = require('express');
const dbconnect = require('./db/dbconnect');
const router = require('./router');
const cors = require('cors');

const app = express();

const PORT = 5500;

//Configuro cors
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

dbconnect();


exports.server = app.listen(PORT, () => console.log("Servidor del proyecto de backend levantado"));