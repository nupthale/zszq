import "../node_modules/.pnpm/vue@3.4.31_typescript@5.8.2/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import _sfc_main$1 from "./ExpandableText/index.vue.js";
import "./ExpandableText/index.vue2.js";
import _sfc_main$2 from "./TipText/index.vue.js";
import "./TipText/index.scss.js";
import propsDef from "./props.js";
import { normalizeProps } from "../node_modules/.pnpm/@vue_shared@3.4.31/node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { defineComponent, openBlock, createBlock, withCtx, mergeProps, renderSlot } from "../node_modules/.pnpm/@vue_runtime-core@3.4.31/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: propsDef,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.expandable ? (openBlock(), createBlock(_sfc_main$1, normalizeProps(mergeProps({ key: 0 }, _ctx.$props)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)) : (openBlock(), createBlock(_sfc_main$2, normalizeProps(mergeProps({ key: 1 }, _ctx.$props)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16));
    };
  }
});
export {
  _sfc_main as default
};
