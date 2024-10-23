import isEmpty from "../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js";
const useExposeApi = (getView, contextRef) => {
  const getFieldNodes = () => {
    const view = getView();
    if (!view) return null;
    const nodes = [];
    view.state.doc.nodesBetween(0, view.state.doc.content.size, (node, pos) => {
      if (node.type.name === "field") {
        nodes.push({
          node,
          pos
        });
      }
    });
    return nodes;
  };
  return {
    getView,
    getValues: () => contextRef.value.values,
    validate: () => {
      const view = getView();
      if (!view) return false;
      const errorMark = view.state.schema.marks.error;
      const values = contextRef.value.values;
      const nodes = getFieldNodes();
      let isValid = false;
      nodes == null ? void 0 : nodes.forEach(({ node, pos }) => {
        var _a;
        const id = node.attrs.id;
        if (isEmpty((_a = values[id]) == null ? void 0 : _a.trim())) {
          isValid = false;
          view.dispatch(
            view.state.tr.addMark(pos, pos + 1, errorMark.create({ error: true }))
          );
        } else {
          view.dispatch(
            view.state.tr.addMark(pos, pos + 1, errorMark.create({ error: false }))
          );
        }
      });
      return isValid;
    }
  };
};
export {
  useExposeApi
};
