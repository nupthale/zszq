import { defineComponent, toRef, openBlock, createBlock, unref, withCtx, createElementBlock, Fragment, renderList, createVNode } from "vue";
import { useContentSchema } from "./hooks/useContentSchema.js";
import _sfc_main$1 from "./components/Form/index.vue.js";
import _sfc_main$2 from "./components/Renderer/Node.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    schema: {
      type: Object,
      default: () => {
      }
    },
    data: Object
  },
  setup(__props) {
    const props = __props;
    useContentSchema(toRef(props, "schema"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.schema.content, (node) => {
            return openBlock(), createElementBlock("div", null, [
              createVNode(unref(_sfc_main$2), { node }, null, 8, ["node"])
            ]);
          }), 256))
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
