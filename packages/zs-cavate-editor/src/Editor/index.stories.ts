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
    doc: {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"abc"},{"type":"formItem","attrs":{"id":"c8f1a81a-d27f-4e1b-9745-4adcbe33aa7a"}}]}]}
  },
};
