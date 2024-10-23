import { EditorView } from 'prosemirror-view';

export declare enum EditorModeEnum {
    TEMPLATE = "template",
    INPUT_EDITABLE = "input-editable"
}
export interface ContextType {
    mode: EditorModeEnum;
    values: Record<string, string>;
}
export interface CavateEditorExposeType {
    getValues: () => Record<string, string>;
    getView: () => EditorView | null;
    validate: () => boolean;
}
