import { PropType } from 'vue';
import { EditorView } from 'prosemirror-view';
import { EditorModeEnum } from './interface';

declare const _default: import('vue').DefineComponent<{
    mode: PropType<EditorModeEnum>;
    doc: {
        type: ObjectConstructor;
        default: () => {
            type: string;
            content: {
                type: string;
                content: never[];
            }[];
        };
    };
    values: PropType<Record<string, string>>;
    placeholder: StringConstructor;
}, {
    getValues: () => Record<string, string>;
    getView: () => EditorView | null;
    validate: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    mode: PropType<EditorModeEnum>;
    doc: {
        type: ObjectConstructor;
        default: () => {
            type: string;
            content: {
                type: string;
                content: never[];
            }[];
        };
    };
    values: PropType<Record<string, string>>;
    placeholder: StringConstructor;
}>>, {
    doc: Record<string, any>;
}, {}>;
export default _default;
