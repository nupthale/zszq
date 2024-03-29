import { defineComponent, computed, openBlock, createElementBlock, createVNode, unref, normalizeStyle, withCtx, createTextVNode, toDisplayString, createElementVNode, createCommentVNode } from "vue";
import { Avatar } from "ant-design-vue";
import { nameToColor } from "./util.js";
import propsDef from "./props.js";
import { SizeEnum } from "./interface.js";
const _hoisted_1 = { class: "zsui-user" };
const _hoisted_2 = { class: "zsui-user__name" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: propsDef,
  setup(__props) {
    const props = __props;
    const avatarSizeMap = {
      [SizeEnum.SMALL]: 20,
      [SizeEnum.DEFAULT]: 24,
      [SizeEnum.XLARGE]: 80
    };
    const fontSizeMap = {
      [SizeEnum.SMALL]: 12,
      [SizeEnum.DEFAULT]: 14,
      [SizeEnum.XLARGE]: 24
    };
    const slicedName = computed(() => {
      var _a;
      return (_a = props.username) == null ? void 0 : _a.slice(-2);
    });
    const avatarSize = computed(() => avatarSizeMap[props.size]);
    const textStyle = computed(() => ({
      fontSize: `${fontSizeMap[props.size]}px`,
      lineHeight: `${avatarSizeMap[props.size]}px`
    }));
    const avatarStyle = computed(() => ({
      fontSize: `${fontSizeMap[props.size]}px`,
      background: nameToColor(props.username)
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1, [
        createVNode(unref(Avatar), {
          size: avatarSize.value,
          class: "zsui-user__avatar",
          style: normalizeStyle(avatarStyle.value)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(slicedName.value), 1)
          ]),
          _: 1
        }, 8, ["size", "style"]),
        _ctx.showText ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "zsui-user__namewrap",
          style: normalizeStyle(textStyle.value)
        }, [
          createElementVNode("span", _hoisted_2, toDisplayString(_ctx.username), 1)
        ], 4)) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
