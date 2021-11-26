const express = require("express");
const app = express();

app.use(express.json());

//impport all routes
const products = require("./Routes/products");

app.use("/api/v1", products);

module.exports = app;
