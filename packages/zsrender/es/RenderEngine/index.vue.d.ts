import { PropType } from 'vue';
import { SchemaType } from './interface';

declare const _default: import('vue').DefineComponent<{
    schema: {
        type: PropType<SchemaType>;
        default: () => void;
    };
    data: ObjectConstructor;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    schema: {
        type: PropType<SchemaType>;
        default: () => void;
    };
    data: ObjectConstructor;
}>>, {
    schema: SchemaType;
}, {}>;
export default _default;
