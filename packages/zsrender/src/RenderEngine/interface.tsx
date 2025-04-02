import { Ref } from 'vue';
import type { Rule } from 'async-validator';

export interface ContextType {
    schema: Ref<SchemaType>;
    schemaMap: Ref<Record<string, NodeType>>;
    formModel: Ref<Record<string, any>>;
    errors: Ref<ErrorType | null>;
    validate: () => Promise<boolean>;
    getValues: () => Record<string, any>;
    updateNodeSchema: (name: string, propName: string, propValue: any) => void;
    updateFieldProps: (name: string, propName: string, propValue: any) => void;
    updateComponentProps: (name: string, propName: string, propValue: any) => void;
    updateFieldValue: (name: string, value: any) => void;
}

export interface ErrorType {
    errors: Array<{
        field: string,
        message: string,
    }>,
    fields: Record<string, Array<{
        field: string,
        message: string,
    }>>,
};

export type NodeType = ModuleNode | FieldNode | ComponentNode;

export interface BaseNode {
    type: string,
    visible?: boolean,
    editable?: boolean,
} 

export interface ModuleNode extends BaseNode {
    // 除了ModuleNode外的类型
    type: 'module';
    title: string;
    name?: string;
    titleClass?: string;
    contentClass?: string;
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
    rules: Rule,
}

export interface ComponentNode extends BaseNode {
   type: 'component';
   // 字段名， 用于从Form获取数据
   name: string;
   componentType: string;
   componentProps: Record<string, any>;
   content?: NodeType[];
}

export interface SchemaType {
    content: NodeType[];
    lifeCycleEffects?: LifeCycleEffectType[];
    propEffects?: PropEffectType[];
    apiEffects?: ApiEffectType[];
}

export enum LifeCycleEnum {
  FORM_MOUNT = 'onFormMount',
  FORM_UNMOUNT = 'onFormUnmount',
  FORM_CHANGE = 'onFormChange',
  FIELD_MOUNT = 'onFieldMount',
  FIELD_UNMOUNT = 'onFieldUnmount',
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