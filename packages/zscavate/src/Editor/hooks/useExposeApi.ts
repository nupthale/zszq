import { Ref } from 'vue';
import { isEmpty } from 'lodash-es';

import { EditorView } from 'prosemirror-view';
import { Node } from 'prosemirror-model';

import { ContextType } from '../interface';

export const useExposeApi = (
    getView: () => EditorView | null,
    contextRef: Ref<ContextType>,
) => {
    const getFieldNodes = () => {
        const view = getView();

        if (!view) return null;

        const nodes: { node: Node, pos: number }[] = [];

        view.state.doc.nodesBetween(0, view.state.doc.content.size, (node, pos) => {
            if (node.type.name === 'field') {
                nodes.push({
                    node,
                    pos,
                });
            }
        });

        return nodes;
    };

    return {
        getView,
        getValues: () => contextRef.value.values,
        validate: () => {
            const view = getView();

            if (!view) return false;

            const errorMark = view.state.schema.marks.error;

            const values = contextRef.value.values;
            const nodes = getFieldNodes();
            let isValid = false;

            nodes?.forEach(({ node, pos }) => {
                const id = node.attrs.id;

                if (isEmpty(values[id]?.trim())) {
                    isValid = false;
                    view.dispatch(
                        view.state.tr.addMark(pos, pos + 1, errorMark.create({ error: true }))
                    );
                } else {
                    view.dispatch(
                        view.state.tr.addMark(pos, pos + 1, errorMark.create({ error: false }))
                    );
                }
            });
            
            return isValid;
        }
    }
}