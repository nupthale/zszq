"use strict";
const _interface = require("./interface.js");
const propsDef = {
  username: String,
  size: {
    type: String,
    default: _interface.SizeEnum.DEFAULT
  }
};
module.exports = propsDef;
