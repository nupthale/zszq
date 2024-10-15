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
    }
});

const mountNodeRef = ref();

let schemaRef: Ref<Schema | null> = ref(null);
let stateRef: Ref<EditorState | null> = ref(null);
let viewRef: Ref<EditorView | null> = ref(null);

const contextRef = ref<ContextType>({
    mode: props.mode || EditorModeEnum.TEMPLATE,
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
        // editable: () => props.mode === EditorModeEnum.TEMPLATE,
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
    const formItemType = schemaRef.value?.nodes.formItem;
    const state: EditorState = viewRef.value?.state;

    // 获取文档的最后一个位置
    const endPosition = state.doc.content.size;

    // viewRef.value?.dispatch(viewRef.value?.state.tr.insert(endPosition - 1, formItemType.create()));

      // 检查节点是否存在
    // const nodeAtPosition = state.doc.nodeAt(4);
    // if (!nodeAtPosition) {
    //     console.error("Node at position 4 does not exist.");
    //     return;
    // }

     // 打印节点信息
    //  console.log("Node at position 4:", nodeAtPosition, viewRef.value?.state.tr);

    console.info('###state.doc.nodeAt(4)?.attrs', state.doc.nodeAt(4)?.attrs);

    viewRef.value?.focus();
    let transaction = viewRef.value?.state.tr;
    transaction = transaction.setSelection(new AllSelection(viewRef.value?.state.doc));
    transaction = transaction.setNodeMarkup(4, undefined, { 
        ...state.doc.nodeAt(4)?.attrs, // 保留其他属性
        value: 'value123' 
    });

    viewRef.value?.dispatch(
        transaction,
        // viewRef.value?.state.tr.setNodeAttribute(4, 'value', 'value123'),
    );
}
</script>

<style lang="less" src="./index.less"></style>
  