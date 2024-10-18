<template>
    <div ref="mountNodeRef"></div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue';

import { Schema } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import { schema } from 'prosemirror-schema-basic';
import { keymap } from "prosemirror-keymap";
import { baseKeymap } from "prosemirror-commands";

import { getFieldSpec, getFieldNodeView } from './nodes/field';
import { fieldPlugin } from './plugins/field';
import { placeholderPlugin } from './plugins/placeholder';

import { errorMark } from './marks/error';
import { useExposeApi } from './hooks/useExposeApi';

import { ContextType, EditorModeEnum, CavateEditorExposeType } from './interface';

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
let view: EditorView | null = null;

const contextRef = ref<ContextType>({
    mode: props.mode || EditorModeEnum.TEMPLATE,
    values: props.values || {},
});

const field = getFieldSpec(contextRef);
const fieldNodeView = getFieldNodeView(contextRef);

const exposeApi = useExposeApi(() => view, contextRef);
defineExpose<CavateEditorExposeType>(exposeApi);

onMounted(() => {
    if (!mountNodeRef.value) {
        return;
    }

    const customSchema = new Schema({
        nodes: schema.spec.nodes.append({
            field,
        }),
        marks: schema.spec.marks.append({
            error: errorMark,
        }),
    });

    const state = EditorState.create({
        doc: customSchema?.nodeFromJSON(props.doc),
        plugins: [
            keymap(baseKeymap),
            placeholderPlugin(props.placeholder || '请填写内容'),
            fieldPlugin(contextRef),
        ],
    });

    view = new EditorView(mountNodeRef.value, {
        state,
        editable: () => props.mode === EditorModeEnum.TEMPLATE,
        nodeViews: {
            field: (node, view, getPos) => {
                return new fieldNodeView(node, view, getPos); 
            }
        }
    });
});
</script>

<style lang="less" src="./index.less"></style>
  