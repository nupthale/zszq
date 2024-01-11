import { PropType } from 'vue';
import { TagColorType } from './interface';

export default {
  color: {
    type: String as PropType<TagColorType>,
    default: 'neutral',
  },
};
