import type { Meta, StoryObj } from '@storybook/vue3';
import { Space, Button } from 'ant-design-vue';

import Alert from './index.vue';

const meta: Meta<typeof Alert> = {
  component: Alert,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Alert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Base: Story = {
  render: args => ({
    components: { Alert, Space },
    setup() {
      const style = {
        display: 'flex',
        gap: '12px',
        fontSize: '12px',
        lineHeight: '50px',
      };

      return { args, style };
    },
    template:
      '<Space direction="vertical" style="width: 100%"><Alert show-icon message="Netural Text" type="netrual" /><Alert show-icon message="Success Text" type="success" /><Alert show-icon message="Info Text" type="info" /><Alert show-icon message="Warning Text" type="warning" /><Alert show-icon message="Error Text" type="error" /></Space>',
  }),
  args: {},
};

export const Slot: Story = {
  render: args => ({
    components: { Alert, Space, Button },
    setup() {
      const style = {
        display: 'flex',
        gap: '12px',
        fontSize: '12px',
        lineHeight: '50px',
      };

      return { args, style };
    },
    template:
      '<Alert message="Info Text" description="Info Description Info Description Info Description Info Description" type="info" closable><template #action><Space direction="vertical"><Button size="small" type="primary">Accept</Button><Button size="small" danger type="ghost">Decline</Button></Space></template></Alert>',
}),
  args: {},
};
