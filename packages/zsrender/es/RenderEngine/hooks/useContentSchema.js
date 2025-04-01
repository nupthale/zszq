import { ref, watchEffect, provide } from "vue";
import { isModule } from "../util.js";
const useContentSchema = (schema) => {
  const schemaMap = ref({});
  const updateSchemaMap = (schema2) => {
    var _a;
    const traverse = (node) => {
      var _a2;
      if (node == null ? void 0 : node.name) {
        schemaMap.value[node.name] = node;
      }
      if (isModule(node)) {
        (_a2 = node.content) == null ? void 0 : _a2.forEach(traverse);
      }
    };
    (_a = schema2.content) == null ? void 0 : _a.forEach(traverse);
  };
  watchEffect(() => {
    schemaMap.value = {};
    updateSchemaMap(schema.value);
  });
  provide("schemaMap", schemaMap);
};
export {
  useContentSchema
};
