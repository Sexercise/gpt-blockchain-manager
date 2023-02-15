var express = require("express");
const cors = require('cors');

var bodyParser = require("body-parser");
let commandroutes = require("./routes/commandroutes");

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-A