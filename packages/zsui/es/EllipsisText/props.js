import tipTextPropsDef from "./TipText/props.js";
import expandableTextPropsDef from "./ExpandableText/props.js";
const propsDef = {
  ...expandableTextPropsDef,
  ...tipTextPropsDef,
  expandable: Boolean
};
export {
  propsDef as default
};
