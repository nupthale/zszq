"use strict";
const vue = require("vue");
const index_vue_vue_type_script_setup_true_lang = ;/* empty css                          */
;/* empty css                           */
const props = require("./props.js");
const _hoisted_1 = { class: "zsui-ellipsis-text__foldAction" };
const _hoisted_2 = {
  key: 1,
  class: "zsui-ellipsis-text__unfold"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props,
  setup(__props) {
    vue.useCssVars((_ctx) => ({
      "4ffb5711": beforeStyle.value,
      "2114aba7": boxShadowStyle.value
    }));
    const lineHeightMap = {
      12: 20,
      14: 22
    };
    const props2 = __props;
    const lineHeight = vue.computed(() => lineHeightMap[props2.fontSize]);
    const hasOverflowChildren = vue.ref(false);
    const isFold = vue.ref(true);
    const targetRef = vue.ref(null);
    const containerStyle = vue.computed(() => ({
      fontSize: `${props2.fontSize}px`,
      lineHeight: `${lineHeight.value}px`
    }));
    const foldStyle = vue.computed(() => ({
      maxHeight: `${lineHeight.value * props2.lineClamp}px`
    }));
    const foldWrapStyle = vue.computed(() => ({
      lineHeight: `${lineHeight.value}px`
    }));
    const foldButtonStyle = vue.computed(() => ({
      fontSize: `${props2.fontSize}px`,
      lineHeight: `${lineHeight.value}px`,
      height: `${lineHeight.value}px`
    }));
    const beforeStyle = vue.computed(() => `calc(100% - ${lineHeight.value}px)`);
    const boxShadowStyle = vue.computed(
      () => `inset calc(100px - 999vw) calc(${lineHeight.value} - 999vw) 0 0 ${props2.overlayColor}`
    );
    ({
      fontSize: `${props2.fontSize}px`,
      lineHeight: `${lineHeight.value}px`,
      maxHeight: `${lineHeight.value * props2.lineClamp}px`,
      foldBtnLH: `${lineHeight.value - 4}px`
    });
    const update = () => {
      if (!targetRef.value)
        return;
      setTimeout(() => {
        hasOverflowChildren.value = Boolean(targetRef.value) && targetRef.value.offsetHeight / lineHeight.value > props2.lineClamp;
      }, 0);
    };
    vue.onMounted(() => {
      update();
    });
    vue.watch(
      () => [props2.lineClamp, props2.fontSize],
      () => {
        hasOverflowChildren.value = false;
        update();
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "zsui-ellipsis-text--expandable",
        style: vue.normalizeStyle(containerStyle.value)
      }, [
        hasOverflowChildren.value ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          isFold.value ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "zsui-ellipsis-text__fold",
            style: vue.normalizeStyle(foldStyle.value)
          }, [
            vue.createElementVNode("div", {
              class: "zsui-ellipsis-text__foldWrap",
              style: vue.normalizeStyle(foldWrapStyle.value)
            }, [
              vue.createElementVNode("span", _hoisted_1, [
                vue.createTextVNode(vue.toDisplayString(_ctx.ellipsisSymbol) + " ", 1),
                vue.createVNode(index_vue_vue_type_script_setup_true_lang, {
                  size: "small",
                  type: "primary",
                  class: "zsui-ellipsis-text__foldButton",
                  style: vue.normalizeStyle(foldButtonStyle.value),
                  onClick: _cache[0] || (_cache[0] = ($event) => isFold.value = false)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("展开")
                  ]),
                  _: 1
                }, 8, ["style"])
              ]),
              vue.renderSlot(_ctx.$slots, "default")
            ], 4)
          ], 4)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "default"),
            vue.createVNode(index_vue_vue_type_script_setup_true_lang, {
              size: "small",
              type: "primary",
              class: "zsui-ellipsis-text__foldButton",
              style: vue.normalizeStyle(foldButtonStyle.value),
              onClick: _cache[1] || (_cache[1] = ($event) => isFold.value = true)
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("收起")
              ]),
              _: 1
            }, 8, ["style"])
          ]))
        ], 64)) : (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          ref_key: "targetRef",
          ref: targetRef
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 512))
      ], 4);
    };
  }
});
module.exports = _sfc_main;
