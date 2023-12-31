"use strict";
const vue = require("vue");
const antDesignVue = require("ant-design-vue");
const props = require("./props.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props,
  setup(__props) {
    const props2 = __props;
    const hasOverflowChildren = vue.ref(false);
    const containerStyle = vue.computed(() => ({
      lineClamp: props2.lineClamp || 1
    }));
    const targetRef = vue.ref(null);
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
    vue.onMounted(() => {
      handleUpdateOverflow();
    });
    vue.watch(
      () => [props2.lineClamp],
      async () => {
        hasOverflowChildren.value = false;
        await vue.nextTick();
        handleUpdateOverflow();
      }
    );
    return (_ctx, _cache) => {
      return hasOverflowChildren.value ? (vue.openBlock(), vue.createBlock(vue.unref(antDesignVue.Tooltip), {
        key: 0,
        title: _ctx.title,
        "destroy-tooltip-on-hide": ""
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            style: vue.normalizeStyle(containerStyle.value),
            class: "zsui-ellipsis-text--tip"
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 4)
        ]),
        _: 3
      }, 8, ["title"])) : (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        ref_key: "targetRef",
        ref: targetRef,
        style: vue.normalizeStyle(containerStyle.value),
        class: "zsui-ellipsis-text--tip"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 4));
    };
  }
});
module.exports = _sfc_main;
