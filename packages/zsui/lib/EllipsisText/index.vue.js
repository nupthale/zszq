"use strict";
const vue = require("vue");
const index_vue_vue_type_script_setup_true_lang = require("./ExpandableText/index.vue.js");
require("./ExpandableText/index.vue2.js");
const index_vue_vue_type_script_setup_true_lang$1 = require("./TipText/index.vue.js");
require("./TipText/index.scss.js");
const props = require("./props.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.expandable ? (vue.openBlock(), vue.createBlock(index_vue_vue_type_script_setup_true_lang, vue.normalizeProps(vue.mergeProps({ key: 0 }, _ctx.$props)), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)) : (vue.openBlock(), vue.createBlock(index_vue_vue_type_script_setup_true_lang$1, vue.normalizeProps(vue.mergeProps({ key: 1 }, _ctx.$props)), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16));
    };
  }
});
module.exports = _sfc_main;
