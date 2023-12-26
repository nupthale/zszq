import { defineComponent, openBlock, createBlock, normalizeProps, mergeProps, withCtx, renderSlot } from "vue";
import ExpandableText from "./ExpandableText/index.vue.js";
import TipText from "./TipText/index.vue.js";
import propsDef from "./props.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: propsDef,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.expandable ? (openBlock(), createBlock(ExpandableText, normalizeProps(mergeProps({ key: 0 }, _ctx.$props)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)) : (openBlock(), createBlock(TipText, normalizeProps(mergeProps({ key: 1 }, _ctx.$props)), {
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
