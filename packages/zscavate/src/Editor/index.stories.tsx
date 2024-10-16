import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Space, Button } from 'ant-design-vue';

import CavateEditor from './index.vue';

import { EditorModeEnum, CavateEditorExposeType } from './interface';

const meta: Meta<typeof CavateEditor> = {
  component: CavateEditor,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof CavateEditor>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Template: Story = {
  render: args => ({
    components: { CavateEditor, Space },
    setup() {
      return { args };
    },
    template:
      '<CavateEditor :doc="args.doc" :mode="args.mode" />',
  }),
  args: {
    mode: EditorModeEnum.TEMPLATE,
  },
};


export const InputEditable: Story = {
  render: args => ({
    components: { CavateEditor, Space },
    setup() {
      return { args };
    },
    template:
      '<CavateEditor :doc="args.doc" :mode="args.mode" />',
  }),
  args: {
    mode: EditorModeEnum.INPUT_EDITABLE,
    doc: {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"很长一段话长一段话_"},{"type":"field","attrs":{"id":"fac162ed-6f2a-4fab-8130-b539e0256f1a"}},{"type":"text","text":"长———段话长__"},{"type":"field","attrs":{"id":"82270e36-0cdc-441c-8991-b645f2bd5c7c"}},{"type":"text","text":"一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一__"},{"type":"field","attrs":{"id":"9ed49bf4-df9f-411c-833b-6819b791e0bb"}},{"type":"text","text":")段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段____"},{"type":"field","attrs":{"id":"5d5a7534-f3ed-485f-82b8-c8a002662f75"}},{"type":"text","text":")话长一段话长一段话长一段话长一段话"}]}]}
  },
};


export const Validate: Story = {
  render: args => {
    const editorRef = ref<CavateEditorExposeType | null>(null);

    const handleValidate = () => {
      if (!editorRef.value) {
        return;
      }

      const isValid = editorRef.value.validate();
      console.info('##validate', isValid);
    }

    return () => (
      <div>
        <CavateEditor ref={editorRef} doc={args.doc} mode={args.mode} />
        <Button style="margin-top: 24px;" onClick={handleValidate}>validate</Button>
      </div>
    )
  },
  args: {
    mode: EditorModeEnum.INPUT_EDITABLE,
    doc: {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"很长一段话长一段话_"},{"type":"field","attrs":{"id":"fac162ed-6f2a-4fab-8130-b539e0256f1a"}},{"type":"text","text":"长———段话长__"},{"type":"field","attrs":{"id":"82270e36-0cdc-441c-8991-b645f2bd5c7c"}},{"type":"text","text":"一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一__"},{"type":"field","attrs":{"id":"9ed49bf4-df9f-411c-833b-6819b791e0bb"}},{"type":"text","text":")段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段____"},{"type":"field","attrs":{"id":"5d5a7534-f3ed-485f-82b8-c8a002662f75"}},{"type":"text","text":")话长一段话长一段话长一段话长一段话"}]}]}
  },
};
