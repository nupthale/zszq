import { Ref } from 'vue';
import { isEmpty } from 'lodash-es';

import { Node, NodeSpec } from 'prosemirror-model';

import { EditorModeEnum, ContextType } from '../interface';

import { EditorView } from 'prosemirror-view';

export const getFieldNodeView= (contextRef: Ref<ContextType>) => {
    return class FieldNodeView {
        public dom: HTMLSpanElement;
        private customContent: HTMLSpanElement | null = null;

        constructor(private node: Node, private view: EditorView, private getPos: () => number | undefined) {
            const $span = document.createElement('span');
            $span.setAttribute('zsField', 'true');

            this.dom = $span;
            this.customContent = this.createCustomDOM();
            this.dom.appendChild(this.customContent);
        
            this.update(node);
        }

        get id() {
            return this.node.attrs.id;
        } 

        createCustomDOM = () => {
            const $span = document.createElement('span');

            if (contextRef.value.mode === EditorModeEnum.TEMPLATE) {
                $span.contentEditable = 'false';
                $span.classList.add('zs-field', 'zs-field--template');
            } else {
                $span.contentEditable = 'true';
                $span.classList.add('zs-field');
               
                $span.addEventListener('input', this.handleInput);
                $span.addEventListener('focus', this.handleFocus);
                $span.addEventListener('blur', this.handleBlur);
            }

            return $span;
        }

        update(node: Node) {
            if (!node.sameMarkup(this.node) || !this.customContent) {
                return false;
            }

            const value = contextRef.value?.values[this.id] || '';

            this.customContent.innerHTML = isEmpty(value) ? '<span style="color: rgb(143, 149, 158)">请填写内容</span>' : value;
            return true;   
        }
        
        handleFocus = (e: Event) => {
            const value = contextRef.value?.values[this.id] || '';

            // 延迟设置内容, 否则直接设置innerText， 会自动blur
            setTimeout(() => {
                if (this.customContent) {
                    this.customContent.innerText = isEmpty(value)? '' : value;
                }
            }, 10);
        }

        handleBlur = (e: Event) => {
            const value = contextRef.value?.values[this.id] || '';

            if (this.customContent) {
                this.customContent.innerHTML = isEmpty(value) ? '<span style="color: rgb(143, 149, 158)">请填写内容</span>' : value;
            }
        }

        handleInput = (e: Event) => {
            if (!this.customContent) {
                return;
            }

            const value = this.customContent?.innerText || '';
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
            this.customContent?.removeEventListener('input', this.handleInput);
            this.customContent?.removeEventListener('focus', this.handleInput);
            this.customContent?.removeEventListener('blur', this.handleInput);
        }
    };
}

export const getFieldSpec = (contextRef: Ref<ContextType>) => {
    return {
        inline: true,
        group: 'inline',
        atom: true,
        attrs: {
            id: { default: '' },
        },
        parseDOM: [
            {
              tag: "span[zsField]"
            }
        ],
        toDOM: () => ["span", { zsField: "true", contentEditable: "false" }, 0],
    } as NodeSpec;
}