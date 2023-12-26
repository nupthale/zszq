import { defineComponent, ref, reactive, onMounted, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeStyle, renderSlot, createElementBlock } from "vue";
import Tooltip from "../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/tooltip/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    lineClamp: {
      type: Number,
      default: 1
    },
    title: String,
    disabled: Boolean
  },
  setup(__props) {
    const props = __props;
    const hasOverflowChildren = ref(false);
    const containerStyle = reactive({
      webkitLineClamp: props.lineClamp || 1,
      mozLineClamp: props.lineClamp || 1
    });
    const targetRef = ref(null);
    const handleUpdateOverflow = () => {
      const el = targetRef.value;
      if (!el) {
        return;
      }
      if (!hasOverflowChildren.value && el.scrollHeight > el.clientHeight) {
        hasOverflowChildren.value = true;
      } else {
        hasOverflowChildren.value = false;
      }
    };
    onMounted(() => {
      handleUpdateOverflow();
    });
    return (_ctx, _cache) => {
      return hasOverflowChildren.value ? (openBlock(), createBlock(unref(Tooltip), {
        key: 0,
        title: __props.title,
        "destroy-tooltip-on-hide": ""
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            style: normalizeStyle(containerStyle),
            class: "zsui-ellipsis-text"
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 4)
        ]),
        _: 3
      }, 8, ["title"])) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "targetRef",
        ref: targetRef,
        style: normalizeStyle(containerStyle),
        class: "zsui-ellipsis-text"
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4));
    };
  }
});
export {
  _sfc_main as default
};
