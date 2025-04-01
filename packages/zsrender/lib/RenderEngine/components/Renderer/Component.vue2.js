"use strict";
const vue = require("vue");
const util = require("../../util.js");
const Node_vue_vue_type_script_setup_true_lang = require("./Node.vue.js");
const context = require("../../../context.js");
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Component",
  props: {
    node: Object
  },
  setup(__props) {
    const props = __props;
    const componentsMap = context.context.componentsMap;
    const component = vue.computed(() => {
      if (util.isComponent(props.node)) {
        return componentsMap[props.node.componentType];
      }
    });
    return (_ctx, _cache) => {
      return vue.unref(util.isComponent)(__props.node) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(component.value), vue.normalizeProps(vue.guardReactiveProps(__props.node.componentProps)), {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.node.content, (subNode) => {
              return vue.openBlock(), vue.createBlock(Node_vue_vue_type_script_setup_true_lang, { node: subNode }, null, 8, ["node"]);
            }), 256))
          ]),
          _: 1
        }, 16))
      ])) : vue.createCommentVNode("", true);
    };
  }
});
module.exports = _sfc_main;
