import { Plugin } from "../../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js";
import { DecorationSet, Decoration } from "../../node_modules/.pnpm/prosemirror-view@1.34.3/node_modules/prosemirror-view/dist/index.js";
function placeholderPlugin(text) {
  return new Plugin({
    props: {
      decorations(state) {
        var _a;
        const doc = state.doc;
        if (doc.childCount === 1 && ((_a = doc.firstChild) == null ? void 0 : _a.isTextblock) && doc.firstChild.content.size === 0) {
          const placeholderNode = document.createElement("span");
          placeholderNode.className = "ProseMirror-placeholder";
          placeholderNode.textContent = text;
          return DecorationSet.create(doc, [Decoration.widget(1, placeholderNode)]);
        }
        return null;
      }
    }
  });
}
export {
  placeholderPlugin
};
