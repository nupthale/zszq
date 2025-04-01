"use strict";
const vue = require("vue");
const useContentSchema = require("./hooks/useContentSchema.js");
const index_vue_vue_type_script_setup_true_lang = require("./components/Form/index.vue.js");
const Node_vue_vue_type_script_setup_true_lang = require("./components/Renderer/Node.vue.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    schema: {
      type: Object,
      default: () => {
      }
    },
    data: Object
  },
  setup(__props) {
    const props = __props;
    useContentSchema.useContentSchema(vue.toRef(props, "schema"));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(index_vue_vue_type_script_setup_true_lang), null, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.schema.content, (node) => {
            return vue.openBlock(), vue.createElementBlock("div", null, [
              vue.createVNode(vue.unref(Node_vue_vue_type_script_setup_true_lang), { node }, null, 8, ["node"])
            ]);
          }), 256))
        ]),
        _: 1
      });
    };
  }
});
module.exports = _sfc_main;
