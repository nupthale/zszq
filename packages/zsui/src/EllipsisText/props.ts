import tipTextPropsDef from './TipText/props';
import expandableTextPropsDef from './ExpandableText/props';

export default {
  ...expandableTextPropsDef,
  ...tipTextPropsDef,
  expandable: Boolean,
};
