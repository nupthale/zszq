import { PropType } from 'vue';
import { TagColorType, SizeType } from './interface';

export default {
  color: {
    type: String as PropType<TagColorType>,
    default: 'neutral',
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'default',
  }
};
