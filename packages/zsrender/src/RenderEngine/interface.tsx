export type NodeType = ModuleNode | FieldNode | ComponentNode;

export interface BaseNode {
    type: string,
} 

export interface ModuleNode extends BaseNode {
    // 除了ModuleNode外的类型
    type: 'module';
    title: string;
    name?: string;
    titleClass: string;
    content: NodeType[];
}

export interface FieldNode extends BaseNode {
    type: 'field',
    fieldType: string;
    // name不支持string[]， 因为如果是list或者table， 直接通过组件， 内部去使用Form、Field组件， 来完成model和rule的绑定。
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
   // 字段名， 用于从Form获取数据
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

enum LifeCycleEnum {
  FORM_MOUNT = 'onFormMount',
  FORM_CHANGE = 'onFormChange',
  FORM_SUBMIT = 'onFormSubmit',
  FORM_UNMOUNT = 'onFormUnmount',
  FIELD_MOUNT = 'onFieldMount',
  FIELD_UNMOUNT = 'onFieldUnmount',
  FIELD_CHANGE = 'onFieldChange',
  FIELD_BLUR = 'onFieldBlur',
  COMPONENT_MOUNT = 'onComponetMount',
  COMPONENT_UNMOUNT = 'onComponentUnmount',
}

export interface TriggerType {
    field: string;
    triggerOn: 'change' | 'blur' | 'focus';
}

export interface LifeCycleEffectType {
    // 优先级
    order: number;
    triggerOn: LifeCycleEnum;
    tap: Function;
}

// 把某个field的某个prop， 修改为propValue
export interface PropActionType {
    field: string;
    propKey: string;
    propValue: any;
}

export interface PropEffectType {
    triggers: TriggerType[]; // 默认是OR逻辑， 暂不考虑AND
    actions: PropActionType[];
    expression: string;
}

export interface ReqParamType {
    field: string;
    // 把哪个field， name是api的入参名
    name: string;
}

export interface ApiActionType {
     field: string;
     name: string; //  接口api返回的字段名
     propKey: string; // 把接口返回的字段， 配置到哪个prop上；
}

export interface ApiEffectType {
    api: string;
    triggers: TriggerType[];
    reqParams: ReqParamType[];
    actions: ApiActionType[];
}