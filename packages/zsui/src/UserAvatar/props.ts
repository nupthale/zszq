import { PropType } from 'vue';
import { SizeEnum } from './interface';

export default {
  username: String,
  showText: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
  },
};
