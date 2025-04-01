"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const util = require("../util.js");
const useContentSchema = (schema) => {
  const schemaMap = vue.ref({});
  const updateSchemaMap = (schema2) => {
    var _a;
    const traverse = (node) => {
      var _a2;
      if (node == null ? void 0 : node.name) {
        schemaMap.value[node.name] = node;
      }
      if (util.isModule(node)) {
        (_a2 = node.content) == null ? void 0 : _a2.forEach(traverse);
      }
    };
    (_a = schema2.content) == null ? void 0 : _a.forEach(traverse);
  };
  vue.watchEffect(() => {
    schemaMap.value = {};
    updateSchemaMap(schema.value);
    debugger;
  });
  vue.provide("schemaMap", schemaMap);
};
exports.useContentSchema = useContentSchema;
