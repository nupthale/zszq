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

        get id() {
            return this.node.attrs.id;
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

            const value = contextRef.value?.values[this.id] || '';

            if (this.contentDOM) {
                this.contentDOM.innerHTML = isEmpty(value) ? '<span style="color: rgb(143, 149, 158)">请输入内容</span>' : value;
            }
        }
        
        handleFocus = (e: Event) => {
            const value = contextRef.value?.values[this.id] || '';

            if (this.contentDOM) {
                this.contentDOM.innerHTML = isEmpty(value) ? '' : value;
            }
        }

        handleBlur = (e: Event) => {
            const value = contextRef.value?.values[this.id] || '';

            if (this.contentDOM) {
                this.contentDOM.innerHTML = isEmpty(value) ? '<span style="color: rgb(143, 149, 158)">请输入内容</span>' : value;
            }
        }

        handleInput = (e: Event) => {
            if (!this.contentDOM) {
                return;
            }

            const value = this.contentDOM?.innerText || '';
            const id = this.node.attrs.id as string;

            if (!id) {
                throw Error(`${this.node}的id 不存在`);
            }

            contextRef.value.values[id] = value;
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
            this.contentDOM?.removeEventListener('focus', this.handleInput);
            this.contentDOM?.removeEventListener('blur', this.handleInput);
        }
    };
}

export const getFormItemSpec = (contextRef: Ref<ContextType>) => {
    return {
        inline: true,
        group: 'inline',
        attrs: {
            id: { default: '' },
        },
        parseDOM: [
            {
              tag: "span[zsFormItem]"
            }
        ],
        toDOM: () => ["span", { zsFormItem: "true" }, 0],
    };
}