import { Plugin } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';

export function placeholderPlugin(text: string) {
    return new Plugin({
        props: {
            decorations(state) {
                const doc = state.doc;
                // 检查文档是否为空
                if (doc.childCount === 1 && doc.firstChild?.isTextblock && doc.firstChild.content.size === 0) {
                    const placeholderNode = document.createElement('span');
                    placeholderNode.className = 'ProseMirror-placeholder';
                    placeholderNode.textContent = text;
                    return DecorationSet.create(doc, [Decoration.widget(1, placeholderNode)]);
                }
                return null;
            }
        }
    });
}