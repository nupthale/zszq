"use strict";
const vue = require("vue");
const index = require("../node_modules/.pnpm/prosemirror-model@1.23.0/node_modules/prosemirror-model/dist/index.js");
const index$2 = require("../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js");
const index$4 = require("../node_modules/.pnpm/prosemirror-view@1.34.3/node_modules/prosemirror-view/dist/index.js");
const index$1 = require("../node_modules/.pnpm/prosemirror-schema-basic@1.2.3/node_modules/prosemirror-schema-basic/dist/index.js");
const index$3 = require("../node_modules/.pnpm/prosemirror-keymap@1.2.2/node_modules/prosemirror-keymap/dist/index.js");
const index$5 = require("../node_modules/.pnpm/prosemirror-commands@1.6.1/node_modules/prosemirror-commands/dist/index.js");
const field$1 = require("./nodes/field.js");
const field = require("./plugins/field.js");
const placeholder = require("./plugins/placeholder.js");
const error = require("./marks/error.js");
const useExposeApi = require("./hooks/useExposeApi.js");
const _interface = require("./interface.js");
;/* empty css            */
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  props: {
    mode: String,
    doc: {
      type: Object,
      default: () => ({
        "type": "doc",
        "content": [{
          "type": "paragraph",
          "content": []
        }]
      })
    },
    values: Object,
    placeholder: String
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const mountNodeRef = vue.ref();
    let view = null;
    const contextRef = vue.ref({
      mode: props.mode || _interface.EditorModeEnum.TEMPLATE,
      values: props.values || {}
    });
    const field$2 = field$1.getFieldSpec();
    const fieldNodeView = field$1.getFieldNodeView(contextRef);
    const exposeApi = useExposeApi.useExposeApi(() => view, contextRef);
    __expose(exposeApi);
    vue.onMounted(() => {
      if (!mountNodeRef.value) {
        return;
      }
      const customSchema = new index.Schema({
        nodes: index$1.schema.spec.nodes.append({
          field: field$2
        }),
        marks: index$1.schema.spec.marks.append({
          error: error.errorMark
        })
      });
      const state = index$2.EditorState.create({
        doc: customSchema == null ? void 0 : customSchema.nodeFromJSON(props.doc),
        plugins: [
          index$3.keymap(index$5.baseKeymap),
          placeholder.placeholderPlugin(props.placeholder || "请填写内容"),
          field.fieldPlugin()
        ]
      });
      view = new index$4.EditorView(mountNodeRef.value, {
        state,
        editable: () => props.mode === _interface.EditorModeEnum.TEMPLATE,
        nodeViews: {
          field: (node, view2, getPos) => {
            return new fieldNodeView(node, view2, getPos);
          }
        }
      });
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "mountNodeRef",
        ref: mountNodeRef
      }, null, 512);
    };
  }
});
module.exports = _sfc_main;
