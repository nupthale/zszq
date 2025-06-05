import "../node_modules/.pnpm/vue@3.4.31_typescript@5.8.2/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { Button } from "ant-design-vue";
import propsDef from "./props.js";
import { defineComponent, computed, openBlock, createBlock, withCtx, renderSlot } from "../node_modules/.pnpm/@vue_runtime-core@3.4.31/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js";
import { normalizeClass } from "../node_modules/.pnpm/@vue_shared@3.4.31/node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { unref } from "../node_modules/.pnpm/@vue_reactivity@3.4.31/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js";
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
