import { defineComponent, ref, computed, onMounted, watch, nextTick, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeStyle, renderSlot, createElementBlock } from "vue";
import tipTextPropsDef from "./props.js";
import Tooltip from "../../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/tooltip/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: tipTextPropsDef,
  setup(__props) {
    const props = __props;
    const hasOverflowChildren = ref(false);
    const containerStyle = computed(() => ({
      lineClamp: props.lineClamp || 1
    }));
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
    watch(
      () => [props.lineClamp],
      async () => {
        hasOverflowChildren.value = false;
        await nextTick();
        handleUpdateOverflow();
      }
    );
    return (_ctx, _cache) => {
      return hasOverflowChildren.value ? (openBlock(), createBlock(unref(Tooltip), {
        key: 0,
        title: _ctx.title,
        "destroy-tooltip-on-hide": ""
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            style: normalizeStyle(containerStyle.value),
            class: "zsui-ellipsis-text"
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 4)
        ]),
        _: 3
      }, 8, ["title"])) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "targetRef",
        ref: targetRef,
        style: normalizeStyle(containerStyle.value),
        class: "zsui-ellipsis-text"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4));
    };
  }
});
export {
  _sfc_main as default
};
