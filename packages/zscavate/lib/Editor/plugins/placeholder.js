"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("../../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js");
const index$1 = require("../../node_modules/.pnpm/prosemirror-view@1.34.3/node_modules/prosemirror-view/dist/index.js");
function placeholderPlugin(text) {
  return new index.Plugin({
    props: {
      decorations(state) {
        var _a;
        const doc = state.doc;
        if (doc.childCount === 1 && ((_a = doc.firstChild) == null ? void 0 : _a.isTextblock) && doc.firstChild.content.size === 0) {
          const placeholderNode = document.createElement("span");
          placeholderNode.className = "ProseMirror-placeholder";
          placeholderNode.textContent = text;
          return index$1.DecorationSet.create(doc, [index$1.Decoration.widget(1, placeholderNode)]);
        }
        return null;
      }
    }
  });
}
exports.placeholderPlugin = placeholderPlugin;
