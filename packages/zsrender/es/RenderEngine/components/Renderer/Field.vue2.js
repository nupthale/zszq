import { defineComponent, inject, computed, unref, openBlock, createElementBlock, createBlock, resolveDynamicComponent, normalizeProps, guardReactiveProps, withCtx, createCommentVNode } from "vue";
import { isField } from "../../util.js";
import { context } from "../../../context.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Field",
  props: {
    node: Object
  },
  setup(__props) {
    const props = __props;
    const schemaMapRef = inject("schemaMap");
    const fieldProps = computed(() => {
      const node = props.node;
      const schemaMap = schemaMapRef.value;
      const schema = schemaMap[node.name] || {};
      return {
        ...schema.fieldProps || {},
        name: schema.name
      };
    });
    const component = computed(() => {
      const componentsMap = context.componentsMap;
      if (isField(props.node)) {
        const node = props.node;
        const schemaMap = schemaMapRef.value;
        const schema = schemaMap[node.name] || {};
        return componentsMap[schema.fieldType];
      }
    });
    const field = context.fieldComponent;
    return (_ctx, _cache) => {
      return unref(isField)(__props.node) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(field)), normalizeProps(guardReactiveProps(fieldProps.value)), {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(component.value), normalizeProps(guardReactiveProps(__props.node.componentProps)), null, 16))
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
