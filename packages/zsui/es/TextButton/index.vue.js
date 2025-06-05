import { defineComponent, computed, openBlock, createBlock, unref, normalizeClass, withCtx, renderSlot } from "vue";
import { Button } from "ant-design-vue";
import propsDef from "./props.js";
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
