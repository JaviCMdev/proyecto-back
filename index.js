const express = require('express');
const dbconnect = require('./db/dbconnect');
// const router = require('./router');

const app = express();

const PORT = 5500;

app.use(express.json());
// app.use(router);

dbconnect();


app.listen(PORT, () => console.log("Servidor del proyecto de backend levantado"));