"use strict";
const vue = require("vue");
const Field_vue_vue_type_script_setup_true_lang = require("./Field.vue2.js");
const Component_vue_vue_type_script_setup_true_lang = require("./Component.vue2.js");
const util = require("../../util.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "NodeRender"
  },
  __name: "Node",
  props: {
    node: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_NodeRender = vue.resolveComponent("NodeRender");
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.unref(util.isModule)(__props.node) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          __props.node.title ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(__props.node.titleClass)
          }, vue.toDisplayString(__props.node.title), 3)) : vue.createCommentVNode("", true),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.node.content, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass(__props.node.contentClass),
              key: index
            }, [
              vue.createVNode(_component_NodeRender, { node: item }, null, 8, ["node"])
            ], 2);
          }), 128))
        ], 64)) : vue.createCommentVNode("", true),
        vue.unref(util.isField)(__props.node) ? (vue.openBlock(), vue.createBlock(Field_vue_vue_type_script_setup_true_lang, {
          key: 1,
          node: __props.node
        }, null, 8, ["node"])) : vue.createCommentVNode("", true),
        vue.unref(util.isComponent)(__props.node) ? (vue.openBlock(), vue.createBlock(Component_vue_vue_type_script_setup_true_lang, {
          key: 2,
          node: __props.node
        }, null, 8, ["node"])) : vue.createCommentVNode("", true)
      ]);
    };
  }
});
module.exports = _sfc_main;
