import { PropType } from 'vue';
import { SizeEnum } from './interface';
declare const _default: {
    username: StringConstructor;
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<SizeEnum>;
        default: SizeEnum;
    };
};
export default _default;
