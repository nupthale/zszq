import { Ref } from 'vue';
import { EditorView } from 'prosemirror-view';
import { ContextType } from '../interface';

export declare const useExposeApi: (getView: () => EditorView | null, contextRef: Ref<ContextType>) => {
    getView: () => EditorView | null;
    getValues: () => Record<string, string>;
    validate: () => boolean;
};
