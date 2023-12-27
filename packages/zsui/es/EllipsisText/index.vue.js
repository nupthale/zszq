import { defineComponent, openBlock, createBlock, normalizeProps, mergeProps, withCtx, renderSlot } from "vue";
import _sfc_main$1 from "./ExpandableText/index.vue.js";
import "./ExpandableText/index.vue2.js";
import _sfc_main$2 from "./TipText/index.vue.js";
import "./TipText/index.scss.js";
import propsDef from "./props.js";
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
