import { PropType } from 'vue';
import { SizeEnum } from './interface';

export default {
  username: String,
  size: {
    type: String as PropType<SizeEnum>,
    default: SizeEnum.DEFAULT,
  },
};
