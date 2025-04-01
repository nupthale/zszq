"use strict";
const vue = require("vue");
const util = require("../../util.js");
const context = require("../../../context.js");
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Field",
  props: {
    node: Object
  },
  setup(__props) {
    const props = __props;
    const schemaMapRef = vue.inject("schemaMap");
    const fieldProps = vue.computed(() => {
      const node = props.node;
      const schemaMap = schemaMapRef.value;
      const schema = schemaMap[node.name] || {};
      return {
        ...schema.fieldProps || {},
        name: schema.name
      };
    });
    const component = vue.computed(() => {
      const componentsMap = context.context.componentsMap;
      if (util.isField(props.node)) {
        const node = props.node;
        const schemaMap = schemaMapRef.value;
        const schema = schemaMap[node.name] || {};
        return componentsMap[schema.fieldType];
      }
    });
    const field = context.context.fieldComponent;
    return (_ctx, _cache) => {
      return vue.unref(util.isField)(__props.node) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(field)), vue.normalizeProps(vue.guardReactiveProps(fieldProps.value)), {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(component.value), vue.normalizeProps(vue.guardReactiveProps(__props.node.componentProps)), null, 16))
          ]),
          _: 1
        }, 16))
      ])) : vue.createCommentVNode("", true);
    };
  }
});
module.exports = _sfc_main;
