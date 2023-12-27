import { defineComponent, computed, openBlock, createElementBlock, createVNode, unref, normalizeStyle, withCtx, createTextVNode, toDisplayString, createElementVNode } from "vue";
import { nameToColor } from "./util.js";
import propsDef from "./props.js";
import { SizeEnum } from "./interface.js";
import "../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/avatar/index.js";
import Avatar from "../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/avatar/Avatar.js";
const _hoisted_1 = { class: "zsui-user" };
const _hoisted_2 = { class: "zsui-user__name" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: propsDef,
  setup(__props) {
    const props = __props;
    const avatarSizeMap = {
      [SizeEnum.SMALL]: 20,
      [SizeEnum.DEFAULT]: 24
    };
    const fontSizeMap = {
      [SizeEnum.SMALL]: 12,
      [SizeEnum.DEFAULT]: 14
    };
    const slicedName = computed(() => props.username.slice(-2));
    const avatarSize = computed(() => avatarSizeMap[props.size]);
    const textStyle = computed(() => ({
      fontSize: `${fontSizeMap[props.size]}px`
    }));
    const avatarStyle = computed(() => ({
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
        createElementVNode("span", {
          class: "zsui-user__namewrap",
          style: normalizeStyle(textStyle.value)
        }, [
          createElementVNode("span", _hoisted_2, toDisplayString(_ctx.username), 1)
        ], 4)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
