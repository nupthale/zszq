import { SizeEnum } from "./interface.js";
const propsDef = {
  username: String,
  showText: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: SizeEnum.DEFAULT
  }
};
export {
  propsDef as default
};
