import { default as default2 } from "./RenderEngine/index.vue.js";
import { context } from "./context.js";
const addComponent = (name, component) => {
  context.componentsMap[name] = component;
};
const deleteComponent = (name) => {
  delete context.componentsMap[name];
};
const setFieldComponent = (component) => {
  context.fieldComponent = component;
};
export {
  default2 as RenderEngine,
  addComponent,
  deleteComponent,
  setFieldComponent
};
