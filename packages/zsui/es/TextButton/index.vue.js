import { defineComponent, computed, openBlock, createBlock, unref, normalizeClass, withCtx, renderSlot } from "vue";
import propsDef from "./props.js";
import "../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/button/index.js";
import Button from "../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/button/button.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: propsDef,
  setup(__props) {
    const props = __props;
    const className = computed(() => `zsui-text-button--${props.type}`);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), {
        type: "text",
        class: normalizeClass(["zsui-text-button", className.value])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
export {
  _sfc_main as default
};
