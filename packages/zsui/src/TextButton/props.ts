import { PropType } from 'vue';
import { TextButtonType } from './interface';

export default {
  type: {
    type: String as PropType<TextButtonType>,
    default: 'default',
  },
};
