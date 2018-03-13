"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _config = require("./config.base");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _extends({}, _config2.default, {
  mongo: _extends({}, _config2.default.mongo, {
    uri: "mongodb://localhost:27017"
  })
});
//# sourceMappingURL=config.dev.js.map