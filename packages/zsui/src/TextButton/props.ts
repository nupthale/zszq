import { PropType } from 'vue';
import { ButtonPropsType } from 'ant-design-vue';
import { buttonProps } from 'ant-design-vue/es/button/button';
import { TextButtonType } from './interface';

export default buttonProps() && {
  type: String as PropType<TextButtonType>
} as (ButtonPropsType & {
  type: TextButtonType,
});