"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Create an Express application
var app = (0, _express["default"])();

// Serve static files from the 'frontend/public' directory
app.use(_express["default"]["static"]("frontend/public"));

// Define the port to listen on
var PORT = 3000;
app.listen(PORT, function () {
  console.log("Server is listening on http://localhost:".concat(PORT));
});