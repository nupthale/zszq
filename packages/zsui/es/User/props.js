import { SizeEnum } from "./interface.js";
const propsDef = {
  username: String,
  size: {
    type: String,
    default: SizeEnum.DEFAULT
  }
};
export {
  propsDef as default
};
