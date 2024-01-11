import { SizeEnum } from './interface';
declare const _default: import("vue").DefineComponent<{
    username: StringConstructor;
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<SizeEnum>;
        default: SizeEnum;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    username: StringConstructor;
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<SizeEnum>;
        default: SizeEnum;
    };
}>>, {
    size: SizeEnum;
    showText: boolean;
}, {}>;
export default _default;
