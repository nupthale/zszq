import { defineComponent, ref, onMounted, openBlock, createElementBlock } from "vue";
import { Schema } from "../node_modules/.pnpm/prosemirror-model@1.23.0/node_modules/prosemirror-model/dist/index.js";
import { EditorState } from "../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js";
import { EditorView } from "../node_modules/.pnpm/prosemirror-view@1.34.3/node_modules/prosemirror-view/dist/index.js";
import { schema } from "../node_modules/.pnpm/prosemirror-schema-basic@1.2.3/node_modules/prosemirror-schema-basic/dist/index.js";
import { keymap } from "../node_modules/.pnpm/prosemirror-keymap@1.2.2/node_modules/prosemirror-keymap/dist/index.js";
import { baseKeymap } from "../node_modules/.pnpm/prosemirror-commands@1.6.1/node_modules/prosemirror-commands/dist/index.js";
import { getFieldSpec, getFieldNodeView } from "./nodes/field.js";
import { fieldPlugin } from "./plugins/field.js";
import { placeholderPlugin } from "./plugins/placeholder.js";
import { errorMark } from "./marks/error.js";
import { useExposeApi } from "./hooks/useExposeApi.js";
import { EditorModeEnum } from "./interface.js";
/* empty css           */
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const mountNodeRef = ref();
    let view = null;
    const contextRef = ref({
      mode: props.mode || EditorModeEnum.TEMPLATE,
      values: props.values || {}
    });
    const field = getFieldSpec();
    const fieldNodeView = getFieldNodeView(contextRef);
    const exposeApi = useExposeApi(() => view, contextRef);
    __expose(exposeApi);
    onMounted(() => {
      if (!mountNodeRef.value) {
        return;
      }
      const customSchema = new Schema({
        nodes: schema.spec.nodes.append({
          field
        }),
        marks: schema.spec.marks.append({
          error: errorMark
        })
      });
      const state = EditorState.create({
        doc: customSchema == null ? void 0 : customSchema.nodeFromJSON(props.doc),
        plugins: [
          keymap(baseKeymap),
          placeholderPlugin(props.placeholder || "请填写内容"),
          fieldPlugin()
        ]
      });
      view = new EditorView(mountNodeRef.value, {
        state,
        editable: () => props.mode === EditorModeEnum.TEMPLATE,
        nodeViews: {
          field: (node, view2, getPos) => {
            return new fieldNodeView(node, view2, getPos);
          }
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "mountNodeRef",
        ref: mountNodeRef
      }, null, 512);
    };
  }
});
export {
  _sfc_main as default
};
