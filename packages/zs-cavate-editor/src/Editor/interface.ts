export enum EditorModeEnum {
    // 模版编辑态
    TEMPLATE = 'template',
    // 可输入态
    INPUT_EDITABLE = 'input-editable',
}

export interface ContextType {
    mode: EditorModeEnum,
}