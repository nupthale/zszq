"use strict";
const vue = require("vue");
const antDesignVue = require("ant-design-vue");
const util = require("./util.js");
const props = require("./props.js");
const _interface = require("./interface.js");
const _hoisted_1 = { class: "zsui-user" };
const _hoisted_2 = { class: "zsui-user__name" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props,
  setup(__props) {
    const props2 = __props;
    const avatarSizeMap = {
      [_interface.SizeEnum.SMALL]: 20,
      [_interface.SizeEnum.DEFAULT]: 24,
      [_interface.SizeEnum.XLARGE]: 80
    };
    const fontSizeMap = {
      [_interface.SizeEnum.SMALL]: 12,
      [_interface.SizeEnum.DEFAULT]: 14,
      [_interface.SizeEnum.XLARGE]: 24
    };
    const slicedName = vue.computed(() => {
      var _a;
      return (_a = props2.username) == null ? void 0 : _a.slice(-2);
    });
    const avatarSize = vue.computed(() => avatarSizeMap[props2.size]);
    const textStyle = vue.computed(() => ({
      fontSize: `${fontSizeMap[props2.size]}px`,
      lineHeight: `${avatarSizeMap[props2.size]}px`
    }));
    const avatarStyle = vue.computed(() => ({
      fontSize: `${fontSizeMap[props2.size]}px`,
      background: util.nameToColor(props2.username)
    }));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
        vue.createVNode(vue.unref(antDesignVue.Avatar), {
          size: avatarSize.value,
          class: "zsui-user__avatar",
          style: vue.normalizeStyle(avatarStyle.value)
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(slicedName.value), 1)
          ]),
          _: 1
        }, 8, ["size", "style"]),
        _ctx.showText ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: "zsui-user__namewrap",
          style: vue.normalizeStyle(textStyle.value)
        }, [
          vue.createElementVNode("span", _hoisted_2, vue.toDisplayString(_ctx.username), 1)
        ], 4)) : vue.createCommentVNode("", true)
      ]);
    };
  }
});
module.exports = _sfc_main;
