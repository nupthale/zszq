import { EditorView } from "prosemirror-view";
import { Node } from "prosemirror-model";

export enum EditorModeEnum {
    // 模版编辑态
    TEMPLATE = 'template',
    // 可输入态
    INPUT_EDITABLE = 'input-editable',
}

export interface ContextType {
    mode: EditorModeEnum,
    // 记录挖空输入的值， 无法直接记录到field类型的attrs里， 因为一直报错
    values: Record<string, string>,
}

export interface CavateEditorExposeType {
    getValues: () => Record<string, string>,
    getView: () => EditorView | null,
    validate: () => boolean,
}