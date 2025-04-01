"use strict";
const vue = require("vue");
const index = require("../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    model: Object,
    rules: Object
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const validator = new index(props.rules || {});
    const errors = vue.ref(null);
    vue.provide("formErrors", errors);
    const validate = async () => {
      try {
        await validator.validate(props.model || {});
        errors.value = null;
        return true;
      } catch (e) {
        errors.value = e;
        return false;
      }
    };
    __expose({ validate });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
module.exports = _sfc_main;
