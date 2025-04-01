"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isModule = (node) => {
  return (node == null ? void 0 : node.type) === "module";
};
const isField = (node) => {
  return (node == null ? void 0 : node.type) === "field";
};
const isComponent = (node) => {
  return (node == null ? void 0 : node.type) === "component";
};
exports.isComponent = isComponent;
exports.isField = isField;
exports.isModule = isModule;
