import { Ref } from 'vue';
import { isEmpty } from 'lodash-es';

import { Node } from 'prosemirror-model';

import { EditorModeEnum, ContextType } from '../interface';

import { EditorView, NodeView } from 'prosemirror-view';

export const getFormItemNodeView= (contextRef: Ref<ContextType>) => {
    return class FormItemNodeView {
        private dom: HTMLSpanElement | null = null;
        private contentDOM: HTMLSpanElement | null = null;

        constructor(private node: Node, private view: EditorView, private getPos: () => number) {
            const $span = document.createElement('span');
            $span.setAttribute('zsFormItem', 'true');

            this.dom = $span;
            this.contentDOM = this.createContentDOM();
            this.dom.appendChild(this.contentDOM);
        
            this.update(node);
        }

        createContentDOM = () => {
            const $span = document.createElement('span');

            if (contextRef.value.mode === EditorModeEnum.TEMPLATE) {
                $span.classList.add('zs-form-item', 'zs-form-item--template');
            } else {
                $span.contentEditable = 'true';
                $span.classList.add('zs-form-item');
               
                $span.addEventListener('input', this.handleInput);
                $span.addEventListener('focus', this.handleFocus);
                $span.addEventListener('blur', this.handleBlur);
            }

            return $span;
        }

        update(node: Node) {
            if (!node.sameMarkup(this.node)) {
                return false;
            }

            const attrs = node.attrs;

            if (this.contentDOM) {
                this.contentDOM.innerHTML = isEmpty(attrs.value) ? '<span style="color: rgb(143, 149, 158)">请输入内容</span>' : attrs.value;
            }
        }
        
        handleFocus = (e: Event) => {
            const attrs = this.node.attrs;

            if (this.contentDOM) {
                this.contentDOM.innerHTML = isEmpty(attrs.value) ? '' : attrs.value;
            }
        }

        handleBlur = (e: Event) => {
            const attrs = this.node.attrs;

            if (this.contentDOM) {
                this.contentDOM.innerHTML = isEmpty(attrs.value) ? '<span style="color: rgb(143, 149, 158)">请输入内容</span>' : attrs.value;
            }
        }

        handleInput = (e: Event) => {
            if (!this.contentDOM) {
                return;
            }

            const value = this.contentDOM?.innerText || '';

            // 获取当前节点的 DOM 元素的绝对位置
            const pos = this.getPos();

            const node = this.view.state.doc.nodeAt(pos);

            console.info('###node', node?.attrs, this.node.nodeSize, this.node.content.size);
            
            this.view.dispatch(this.view.state.tr.setNodeMarkup(pos, undefined, {...node?.attrs, value }));
        }
    
        stopEvent() {
            return true;
        }

        ignoreMutation() {
            return true;
        }

        // 在节点销毁时解绑事件
        destroy() {
            this.contentDOM?.removeEventListener('input', this.handleInput);
        }
    };
}

export const getFormItemSpec = (contextRef: Ref<ContextType>) => {
    return {
        inline: true,
        group: 'inline',
        attrs: {
            value: { default: '' },
            error: { default: false },
        },
        parseDOM: [
            {
              tag: "span[zsFormItem]"
            }
        ],
        toDOM: () => ["span", { zsFormItem: "true" }, 0],
    };
}