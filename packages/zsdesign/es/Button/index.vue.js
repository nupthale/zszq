import { defineComponent, openBlock, createBlock, unref, withCtx, createTextVNode } from "vue";
import "../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/button/index.js";
import Button from "../node_modules/.pnpm/ant-design-vue@4.0.8_vue@3.3.13/node_modules/ant-design-vue/es/button/button.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), null, {
        default: withCtx(() => [
          createTextVNode("测试按钮")
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
