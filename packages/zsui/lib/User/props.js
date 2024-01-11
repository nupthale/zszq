"use strict";
const _interface = require("./interface.js");
const propsDef = {
  username: String,
  showText: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: _interface.SizeEnum.DEFAULT
  }
};
module.exports = propsDef;
