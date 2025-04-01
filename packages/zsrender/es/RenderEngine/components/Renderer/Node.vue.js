import { defineComponent, resolveComponent, openBlock, createElementBlock, unref, Fragment, normalizeClass, toDisplayString, createCommentVNode, renderList, createVNode, createBlock } from "vue";
import _sfc_main$1 from "./Field.vue2.js";
import _sfc_main$2 from "./Component.vue2.js";
import { isModule, isField, isComponent } from "../../util.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "NodeRender"
  },
  __name: "Node",
  props: {
    node: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_NodeRender = resolveComponent("NodeRender");
      return openBlock(), createElementBlock("div", null, [
        unref(isModule)(__props.node) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          __props.node.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(__props.node.titleClass)
          }, toDisplayString(__props.node.title), 3)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.node.content, (item, index) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(__props.node.contentClass),
              key: index
            }, [
              createVNode(_component_NodeRender, { node: item }, null, 8, ["node"])
            ], 2);
          }), 128))
        ], 64)) : createCommentVNode("", true),
        unref(isField)(__props.node) ? (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          node: __props.node
        }, null, 8, ["node"])) : createCommentVNode("", true),
        unref(isComponent)(__props.node) ? (openBlock(), createBlock(_sfc_main$2, {
          key: 2,
          node: __props.node
        }, null, 8, ["node"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
