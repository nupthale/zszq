import { defineComponent, computed, unref, openBlock, createElementBlock, createBlock, resolveDynamicComponent, normalizeProps, guardReactiveProps, createCommentVNode } from "vue";
import { isComponent } from "../../util.js";
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
        (openBlock(), createBlock(resolveDynamicComponent(component.value), normalizeProps(guardReactiveProps(__props.node.componentProps)), null, 16))
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
