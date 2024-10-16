<template>
    <div>
        <div ref="mountNodeRef"></div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue';

import { Schema, DOMParser } from 'prosemirror-model';
import { EditorState, AllSelection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import { schema } from 'prosemirror-schema-basic';
import { keymap } from "prosemirror-keymap";
import { baseKeymap } from "prosemirror-commands";

import { getFormItemSpec, getFormItemNodeView } from './nodes/formItem';
import { formItemPlugin } from './plugins/formItem';
import { placeholderPlugin } from './plugins/placeholder';

import { ContextType, EditorModeEnum } from './interface';

import './theme.less';

const props = defineProps({
    mode: String as PropType<EditorModeEnum>,
    doc: {
        type: Object,
        default: () => ({
            "type": "doc",
            "content":[{
                "type":"paragraph",
                "content":[]
            }]
        }),
    },
    values: Object as PropType<Record<string, string>>,
    placeholder: String,
});

const mountNodeRef = ref();

let schemaRef: Ref<Schema | null> = ref(null);
let stateRef: Ref<EditorState | null> = ref(null);
let viewRef: Ref<EditorView | null> = ref(null);

const contextRef = ref<ContextType>({
    mode: props.mode || EditorModeEnum.TEMPLATE,
    values: props.values || {},
});

const formItem = getFormItemSpec(contextRef);
const formItemNodeView = getFormItemNodeView(contextRef);

onMounted(() => {
    if (!mountNodeRef.value) {
        return;
    }

    const customSchema = new Schema({
        nodes: schema.spec.nodes.append({
            formItem,
        }),
        marks: schema.spec.marks
    });

    const state = EditorState.create({
        doc: customSchema?.nodeFromJSON(props.doc),
        plugins: [
            keymap(baseKeymap),
            placeholderPlugin(props.placeholder || '请填写内容'),
            formItemPlugin(contextRef),
        ],
    });

    const view = new EditorView(mountNodeRef.value, {
        state,
        editable: () => props.mode === EditorModeEnum.TEMPLATE,
        nodeViews: {
            formItem: (node, view, getPos) => {
                return new formItemNodeView(node, view, getPos); 
            }
        }
    });
});
</script>

<style lang="less" src="./index.less"></style>
  