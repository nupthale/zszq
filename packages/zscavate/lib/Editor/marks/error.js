"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const errorMark = {
  attrs: {
    error: { default: false }
  },
  // 标记的渲染方式，可以在这里定义标记在DOM中的呈现方式
  parseDOM: [
    {
      tag: "span",
      getAttrs: (dom) => ({
        error: dom.classList.contains("zs-field-errorMark")
      })
    }
  ],
  toDOM: (mark) => {
    const { error } = mark.attrs;
    return ["span", { class: `${error ? "zs-field-errorMark" : ""}` }, 0];
  }
};
exports.errorMark = errorMark;
