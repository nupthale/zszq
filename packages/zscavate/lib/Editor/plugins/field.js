"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("../../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js");
const v4 = require("../../node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-browser/v4.js");
const fieldPlugin = (_contextRef) => new index.Plugin({
  props: {
    handleTextInput(view, from, to, text) {
      const state = view.state;
      const tr = state.tr;
      const doc = tr.doc;
      const schema = state.schema;
      const fieldType = schema.nodes.field;
      const start = from - 2;
      const end = to;
      const prevText = doc.textBetween(start, from);
      if (text === "_" && prevText === "__") {
        view.dispatch(
          tr.replaceRangeWith(start, end, fieldType.create({
            id: v4()
          }))
        );
        return true;
      }
      return false;
    }
  }
});
exports.fieldPlugin = fieldPlugin;
