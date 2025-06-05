import "../../node_modules/.pnpm/vue@3.4.31_typescript@5.8.2/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { Tooltip } from "ant-design-vue";
import tipTextPropsDef from "./props.js";
import { defineComponent, computed, onMounted, watch, openBlock, createBlock, withCtx, createElementBlock, renderSlot, nextTick, createElementVNode as createBaseVNode } from "../../node_modules/.pnpm/@vue_runtime-core@3.4.31/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js";
import { ref, unref } from "../../node_modules/.pnpm/@vue_reactivity@3.4.31/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js";
import { normalizeStyle } from "../../node_modules/.pnpm/@vue_shared@3.4.31/node_modules/@vue/shared/dist/shared.esm-bundler.js";
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
          createBaseVNode("div", {
            style: normalizeStyle(containerStyle.value),
            class: "zsui-ellipsis-text--tip"
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
        class: "zsui-ellipsis-text--tip"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4));
    };
  }
});
export {
  _sfc_main as default
};
