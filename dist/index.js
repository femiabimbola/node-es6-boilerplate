"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send("Welcome to the root app");
});
app.listen(3000, function () {
  console.log("The server is listen on port 3000");
});