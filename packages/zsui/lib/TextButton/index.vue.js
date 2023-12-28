"use strict";
const vue = require("vue");
const antDesignVue = require("ant-design-vue");
const props = require("./props.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props,
  setup(__props) {
    const props2 = __props;
    const className = vue.computed(() => `zsui-text-button--${props2.type}`);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(antDesignVue.Button), {
        type: "text",
        class: vue.normalizeClass(["zsui-text-button", className.value])
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
module.exports = _sfc_main;
