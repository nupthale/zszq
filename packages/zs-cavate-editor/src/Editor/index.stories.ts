import type { Meta, StoryObj } from '@storybook/vue3';
import { Space, Button } from 'ant-design-vue';

import CavateEditor from './index.vue';

import { EditorModeEnum } from './interface';

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
    doc: {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"很长一段话长一段话_"},{"type":"formItem","attrs":{"id":"fac162ed-6f2a-4fab-8130-b539e0256f1a"}},{"type":"text","text":"长———段话长__"},{"type":"formItem","attrs":{"id":"82270e36-0cdc-441c-8991-b645f2bd5c7c"}},{"type":"text","text":"一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一__"},{"type":"formItem","attrs":{"id":"9ed49bf4-df9f-411c-833b-6819b791e0bb"}},{"type":"text","text":")段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段话长一段____"},{"type":"formItem","attrs":{"id":"5d5a7534-f3ed-485f-82b8-c8a002662f75"}},{"type":"text","text":")话长一段话长一段话长一段话长一段话"}]}]}
  },
};
