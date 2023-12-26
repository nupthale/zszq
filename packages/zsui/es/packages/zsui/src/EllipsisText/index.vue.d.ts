declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    expandable: BooleanConstructor;
    lineClamp: {
        type: NumberConstructor;
        default: number;
    };
    title: StringConstructor;
    disabled: BooleanConstructor;
    ellipsisSymbol: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: NumberConstructor;
        default: number;
    };
    overlayColor: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    expandable: BooleanConstructor;
    lineClamp: {
        type: NumberConstructor;
        default: number;
    };
    title: StringConstructor;
    disabled: BooleanConstructor;
    ellipsisSymbol: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: NumberConstructor;
        default: number;
    };
    overlayColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    disabled: boolean;
    lineClamp: number;
    ellipsisSymbol: string;
    fontSize: number;
    overlayColor: string;
    expandable: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
