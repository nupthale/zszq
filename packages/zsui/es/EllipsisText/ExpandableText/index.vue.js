import { defineComponent, useCssVars, computed, ref, onMounted, watch, createElementBlock, openBlock, normalizeStyle, Fragment, createElementVNode, renderSlot, createTextVNode, createVNode, toDisplayString, withCtx } from "vue";
import _sfc_main$1 from "../../TextButton/index.vue.js";
/* empty css                          */
import expandableTextPropsDef from "./props.js";
const _hoisted_1 = { class: "zsui-ellipsis-text__foldAction" };
const _hoisted_2 = {
  key: 1,
  class: "zsui-ellipsis-text__unfold"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: expandableTextPropsDef,
  setup(__props) {
    useCssVars((_ctx) => ({
      "4ffb5711": beforeStyle.value,
      "2114aba7": boxShadowStyle.value
    }));
    const lineHeightMap = {
      12: 20,
      14: 22
    };
    const props = __props;
    const lineHeight = computed(() => lineHeightMap[props.fontSize]);
    const hasOverflowChildren = ref(false);
    const isFold = ref(true);
    const targetRef = ref(null);
    const containerStyle = computed(() => ({
      fontSize: `${props.fontSize}px`,
      lineHeight: `${lineHeight.value}px`
    }));
    const foldStyle = computed(() => ({
      maxHeight: `${lineHeight.value * props.lineClamp}px`
    }));
    const foldWrapStyle = computed(() => ({
      lineHeight: `${lineHeight.value}px`
    }));
    const foldButtonStyle = computed(() => ({
      fontSize: `${props.fontSize}px`,
      lineHeight: `${lineHeight.value}px`,
      height: `${lineHeight.value}px`
    }));
    const beforeStyle = computed(() => `calc(100% - ${lineHeight.value}px)`);
    const boxShadowStyle = computed(
      () => `inset calc(100px - 999vw) calc(${lineHeight.value} - 999vw) 0 0 ${props.overlayColor}`
    );
    ({
      fontSize: `${props.fontSize}px`,
      lineHeight: `${lineHeight.value}px`,
      maxHeight: `${lineHeight.value * props.lineClamp}px`,
      foldBtnLH: `${lineHeight.value - 4}px`
    });
    const update = () => {
      if (!targetRef.value)
        return;
      setTimeout(() => {
        hasOverflowChildren.value = Boolean(targetRef.value) && targetRef.value.offsetHeight / lineHeight.value > props.lineClamp;
      }, 0);
    };
    onMounted(() => {
      update();
    });
    watch(
      () => [props.lineClamp, props.fontSize],
      () => {
        hasOverflowChildren.value = false;
        update();
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "zsui-ellipsis-text--expandable",
        style: normalizeStyle(containerStyle.value)
      }, [
        hasOverflowChildren.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          isFold.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "zsui-ellipsis-text__fold",
            style: normalizeStyle(foldStyle.value)
          }, [
            createElementVNode("div", {
              class: "zsui-ellipsis-text__foldWrap",
              style: normalizeStyle(foldWrapStyle.value)
            }, [
              createElementVNode("span", _hoisted_1, [
                createTextVNode(toDisplayString(_ctx.ellipsisSymbol) + " ", 1),
                createVNode(_sfc_main$1, {
                  size: "small",
                  type: "primary",
                  class: "zsui-ellipsis-text__foldButton",
                  style: normalizeStyle(foldButtonStyle.value),
                  onClick: _cache[0] || (_cache[0] = ($event) => isFold.value = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode("展开")
                  ]),
                  _: 1
                }, 8, ["style"])
              ]),
              renderSlot(_ctx.$slots, "default")
            ], 4)
          ], 4)) : (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "default"),
            createVNode(_sfc_main$1, {
              size: "small",
              type: "primary",
              class: "zsui-ellipsis-text__foldButton",
              style: normalizeStyle(foldButtonStyle.value),
              onClick: _cache[1] || (_cache[1] = ($event) => isFold.value = true)
            }, {
              default: withCtx(() => [
                createTextVNode("收起")
              ]),
              _: 1
            }, 8, ["style"])
          ]))
        ], 64)) : (openBlock(), createElementBlock("div", {
          key: 1,
          ref_key: "targetRef",
          ref: targetRef
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 512))
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
