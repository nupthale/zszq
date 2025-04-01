import { defineComponent, computed, unref, openBlock, createElementBlock, createBlock, resolveDynamicComponent, normalizeProps, guardReactiveProps, withCtx, Fragment, renderList, createCommentVNode } from "vue";
import { isComponent } from "../../util.js";
import _sfc_main$1 from "./Node.vue.js";
import { context } from "../../../context.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Component",
  props: {
    node: Object
  },
  setup(__props) {
    const props = __props;
    const componentsMap = context.componentsMap;
    const component = computed(() => {
      if (isComponent(props.node)) {
        return componentsMap[props.node.componentType];
      }
    });
    return (_ctx, _cache) => {
      return unref(isComponent)(__props.node) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createBlock(resolveDynamicComponent(component.value), normalizeProps(guardReactiveProps(__props.node.componentProps)), {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.node.content, (subNode) => {
              return openBlock(), createBlock(_sfc_main$1, { node: subNode }, null, 8, ["node"]);
            }), 256))
          ]),
          _: 1
        }, 16))
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
