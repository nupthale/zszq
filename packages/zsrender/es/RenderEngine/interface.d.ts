export type NodeType = ModuleNode | FieldNode | ComponentNode;
export interface BaseNode {
    type: string;
}
export interface ModuleNode extends BaseNode {
    type: 'module';
    title: string;
    name?: string;
    titleClass: string;
    content: NodeType[];
}
export interface FieldNode extends BaseNode {
    type: 'field';
    fieldType: string;
    name: string;
    fieldProps: {
        label: string;
        layout: 'vertical' | 'horizontal';
        required: boolean;
    };
    componentProps: Record<string, any>;
}
export interface ComponentNode extends BaseNode {
    type: 'component';
    name: string;
    componentType: string;
    componentProps: Record<string, any>;
}
export interface SchemaType {
    content: NodeType[];
    lifeCycleEffects?: LifeCycleEffectType[];
    propEffects?: PropEffectType[];
    apiEffects?: ApiEffectType[];
}
declare enum LifeCycleEnum {
    FORM_MOUNT = "onFormMount",
    FORM_CHANGE = "onFormChange",
    FORM_SUBMIT = "onFormSubmit",
    FORM_UNMOUNT = "onFormUnmount",
    FIELD_MOUNT = "onFieldMount",
    FIELD_UNMOUNT = "onFieldUnmount",
    FIELD_CHANGE = "onFieldChange",
    FIELD_BLUR = "onFieldBlur",
    COMPONENT_MOUNT = "onComponetMount",
    COMPONENT_UNMOUNT = "onComponentUnmount"
}
export interface TriggerType {
    field: string;
    triggerOn: 'change' | 'blur' | 'focus';
}
export interface LifeCycleEffectType {
    order: number;
    triggerOn: LifeCycleEnum;
    tap: Function;
}
export interface PropActionType {
    field: string;
    propKey: string;
    propValue: any;
}
export interface PropEffectType {
    triggers: TriggerType[];
    actions: PropActionType[];
    expression: string;
}
export interface ReqParamType {
    field: string;
    name: string;
}
export interface ApiActionType {
    field: string;
    name: string;
    propKey: string;
}
export interface ApiEffectType {
    api: string;
    triggers: TriggerType[];
    reqParams: ReqParamType[];
    actions: ApiActionType[];
}
export {};
