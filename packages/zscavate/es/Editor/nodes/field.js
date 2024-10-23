import { EditorModeEnum } from "../interface.js";
import isEmpty from "../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js";
const getFieldNodeView = (contextRef) => {
  return class FieldNodeView {
    constructor(node, view, getPos) {
      this.node = node;
      this.view = view;
      this.getPos = getPos;
      this.customContent = null;
      this.createCustomDOM = () => {
        const $span2 = document.createElement("span");
        if (contextRef.value.mode === EditorModeEnum.TEMPLATE) {
          $span2.contentEditable = "false";
          $span2.classList.add("zs-field", "zs-field--template");
        } else {
          $span2.contentEditable = "true";
          $span2.classList.add("zs-field");
          $span2.addEventListener("input", this.handleInput);
          $span2.addEventListener("focus", this.handleFocus);
          $span2.addEventListener("blur", this.handleBlur);
        }
        return $span2;
      };
      this.handleFocus = (e) => {
        var _a;
        const value = ((_a = contextRef.value) == null ? void 0 : _a.values[this.id]) || "";
        setTimeout(() => {
          if (this.customContent) {
            this.customContent.innerText = isEmpty(value) ? "" : value;
          }
        }, 10);
      };
      this.handleBlur = (e) => {
        var _a;
        const value = ((_a = contextRef.value) == null ? void 0 : _a.values[this.id]) || "";
        if (this.customContent) {
          this.customContent.innerHTML = isEmpty(value) ? '<span style="color: rgb(143, 149, 158)">请填写内容</span>' : value;
        }
      };
      this.handleInput = (e) => {
        var _a;
        if (!this.customContent) {
          return;
        }
        const value = ((_a = this.customContent) == null ? void 0 : _a.innerText) || "";
        const id = this.node.attrs.id;
        if (!id) {
          throw Error(`${this.node}的id 不存在`);
        }
        contextRef.value.values[id] = value;
      };
      const $span = document.createElement("span");
      $span.setAttribute("zsField", "true");
      this.dom = $span;
      this.customContent = this.createCustomDOM();
      this.dom.appendChild(this.customContent);
      this.update(node);
    }
    get id() {
      return this.node.attrs.id;
    }
    update(node) {
      var _a;
      if (!node.sameMarkup(this.node) || !this.customContent) {
        return false;
      }
      const value = ((_a = contextRef.value) == null ? void 0 : _a.values[this.id]) || "";
      this.customContent.innerHTML = isEmpty(value) ? '<span style="color: rgb(143, 149, 158)">请填写内容</span>' : value;
      return true;
    }
    stopEvent() {
      return true;
    }
    ignoreMutation() {
      return true;
    }
    // 在节点销毁时解绑事件
    destroy() {
      var _a, _b, _c;
      (_a = this.customContent) == null ? void 0 : _a.removeEventListener("input", this.handleInput);
      (_b = this.customContent) == null ? void 0 : _b.removeEventListener("focus", this.handleInput);
      (_c = this.customContent) == null ? void 0 : _c.removeEventListener("blur", this.handleInput);
    }
  };
};
const getFieldSpec = (contextRef) => {
  return {
    inline: true,
    group: "inline",
    atom: true,
    attrs: {
      id: { default: "" }
    },
    parseDOM: [
      {
        tag: "span[zsField]"
      }
    ],
    toDOM: () => ["span", { zsField: "true", contentEditable: "false" }, 0]
  };
};
export {
  getFieldNodeView,
  getFieldSpec
};
