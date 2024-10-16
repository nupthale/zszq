export enum EditorModeEnum {
    // 模版编辑态
    TEMPLATE = 'template',
    // 可输入态
    INPUT_EDITABLE = 'input-editable',
}

export interface ContextType {
    mode: EditorModeEnum,
    // 记录挖空输入的值， 无法直接记录到formItem类型的attrs里， 因为一直报错
    values: Record<string, string>,
}