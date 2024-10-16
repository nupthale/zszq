<template>
    <div>
        <div ref="mountNodeRef"></div>
        <button @click="handleOutput">output</button>
        <button @click="handleNodes">nodes</button>
        <button @click="handleAddFormItem">addFormItem</button>
        <div contenteditable="true" id="test"></div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue';

import { Schema, DOMParser } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { EditorState, AllSelection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { exampleSetup } from 'prosemirror-example-setup';

import { getFormItemSpec, getFormItemNodeView } from './nodes/formItem';
import { formItemPlugin } from './plugins/formItem';

import { ContextType, EditorModeEnum } from './interface';

const props = defineProps({
    mode: String as PropType<EditorModeEnum>,
    doc: {
        type: Object,
        default: () => ({
            type: 'doc',
            content: [{
                type: 'paragraph',
                content: [],
            }],
        }),
    },
    values: Object as PropType<Record<string, string>>,
});

const mountNodeRef = ref();

let schemaRef: Ref<Schema | null> = ref(null);
let stateRef: Ref<EditorState | null> = ref(null);
let viewRef: Ref<EditorView | null> = ref(null);

const contextRef = ref<ContextType>({
    mode: props.mode || EditorModeEnum.TEMPLATE,
    values: props.values || {
        'c8f1a81a-d27f-4e1b-9745-4adcbe33aa7a': '哈乐123'
    },
});

const formItem = getFormItemSpec(contextRef);
const formItemNodeView = getFormItemNodeView(contextRef);

onMounted(() => {
    if (!mountNodeRef.value) {
        return;
    }

    schemaRef.value = new Schema({
        nodes: schema.spec.nodes.append({
            formItem,
        }),
        marks: schema.spec.marks
    });

    stateRef.value = EditorState.create({
        doc: schemaRef.value?.nodeFromJSON(props.doc),
        plugins: [
            ...exampleSetup({
                schema: schemaRef.value,
                menuBar: false,
                floatingMenu: false,
            }),
            formItemPlugin(contextRef),
        ],
    });

    viewRef.value = new EditorView(mountNodeRef.value, {
        state: stateRef.value,
        editable: () => props.mode === EditorModeEnum.TEMPLATE,
        nodeViews: {
            formItem: (node, view, getPos) => {
                return new formItemNodeView(node, view, getPos); 
            }
        }
    });
});

const handleOutput = () => {
    console.log(JSON.stringify(viewRef.value?.state.doc.toJSON()));
    console.log(viewRef.value?.state.doc.toJSON());
}

const handleNodes = () => {
    const output = {
        nodes: []
    };

    viewRef.value?.state.doc.nodesBetween(0, viewRef.value.state.doc.content.size, (node, pos) => {
        output.nodes.push({
            type: node.type.name,
            attrs: node.attrs,
            from: pos,
            to: pos + node.nodeSize,
            isLeaf: node.isLeaf,
            content: node.content.toJSON() // 如果节点有内容，转换为 JSON
        });
    });

    console.log(JSON.stringify(output));
    console.log(output);
}

const handleAddFormItem = () => {
    console.info('###context', contextRef.value);
}
</script>

<style lang="less" src="./index.less"></style>
  