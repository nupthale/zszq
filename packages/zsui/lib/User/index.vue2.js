"use strict";
const vue = require("vue");
const util = require("./util.js");
const props = require("./props.js");
const _interface = require("./interface.js");
require("../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/avatar/index.js");
const Avatar = require("../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/avatar/Avatar.js");
const _hoisted_1 = { class: "zsui-user" };
const _hoisted_2 = { class: "zsui-user__name" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props,
  setup(__props) {
    const props2 = __props;
    const avatarSizeMap = {
      [_interface.SizeEnum.SMALL]: 20,
      [_interface.SizeEnum.DEFAULT]: 24
    };
    const fontSizeMap = {
      [_interface.SizeEnum.SMALL]: 12,
      [_interface.SizeEnum.DEFAULT]: 14
    };
    const slicedName = vue.computed(() => props2.username.slice(-2));
    const avatarSize = vue.computed(() => avatarSizeMap[props2.size]);
    const textStyle = vue.computed(() => ({
      fontSize: `${fontSizeMap[props2.size]}px`
    }));
    const avatarStyle = vue.computed(() => ({
      background: util.nameToColor(props2.username)
    }));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
        vue.createVNode(vue.unref(Avatar.default), {
          size: avatarSize.value,
          class: "zsui-user__avatar",
          style: vue.normalizeStyle(avatarStyle.value)
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(slicedName.value), 1)
          ]),
          _: 1
        }, 8, ["size", "style"]),
        vue.createElementVNode("span", {
          class: "zsui-user__namewrap",
          style: vue.normalizeStyle(textStyle.value)
        }, [
          vue.createElementVNode("span", _hoisted_2, vue.toDisplayString(_ctx.username), 1)
        ], 4)
      ]);
    };
  }
});
module.exports = _sfc_main;
