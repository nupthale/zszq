"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index_vue_vue_type_script_setup_true_lang = require("./RenderEngine/index.vue.js");
const context = require("./context.js");
const addComponent = (name, component) => {
  context.context.componentsMap[name] = component;
};
const deleteComponent = (name) => {
  delete context.context.componentsMap[name];
};
const setFieldComponent = (component) => {
  context.context.fieldComponent = component;
};
exports.RenderEngine = index_vue_vue_type_script_setup_true_lang;
exports.addComponent = addComponent;
exports.deleteComponent = deleteComponent;
exports.setFieldComponent = setFieldComponent;
