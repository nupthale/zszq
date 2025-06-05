import "../node_modules/.pnpm/vue@3.4.31_typescript@5.8.2/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { Avatar } from "ant-design-vue";
import { nameToColor } from "./util.js";
import propsDef from "./props.js";
import { SizeEnum } from "./interface.js";
import { defineComponent, computed, openBlock, createElementBlock, createVNode, withCtx, createElementVNode as createBaseVNode, createCommentVNode, createTextVNode } from "../node_modules/.pnpm/@vue_runtime-core@3.4.31/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js";
import { normalizeStyle, toDisplayString } from "../node_modules/.pnpm/@vue_shared@3.4.31/node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { unref } from "../node_modules/.pnpm/@vue_reactivity@3.4.31/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js";
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
          createBaseVNode("span", _hoisted_2, toDisplayString(_ctx.username), 1)
        ], 4)) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
