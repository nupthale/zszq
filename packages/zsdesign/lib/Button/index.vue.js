"use strict";
const vue = require("vue");
require("../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/button/index.js");
const button = require("../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/button/button.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(button.default), null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("测试按钮")
        ]),
        _: 1
      });
    };
  }
});
module.exports = _sfc_main;
