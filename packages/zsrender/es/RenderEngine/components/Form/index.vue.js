import { defineComponent, ref, provide, openBlock, createElementBlock, renderSlot } from "vue";
import Schema from "../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    model: Object,
    rules: Object
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const validator = new Schema(props.rules || {});
    const errors = ref(null);
    provide("formErrors", errors);
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
      return openBlock(), createElementBlock("div", null, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export {
  _sfc_main as default
};
