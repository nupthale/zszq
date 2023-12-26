"use strict";
const vue = require("vue");
const props = require("./props.js");
require("../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/button/index.js");
const button = require("../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/button/button.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props,
  setup(__props) {
    const props2 = __props;
    const className = vue.computed(() => `zsui-text-button--${props2.type}`);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(button.default), {
        type: "text",
        class: vue.normalizeClass(["zsui-text-button", className.value])
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
module.exports = _sfc_main;
