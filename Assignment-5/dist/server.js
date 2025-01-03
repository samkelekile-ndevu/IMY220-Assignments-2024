"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 3000;
app.use(_express["default"]["static"]('public'));
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});