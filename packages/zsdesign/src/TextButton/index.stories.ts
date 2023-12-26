import type { Meta, StoryObj } from '@storybook/vue3';

import TextButton from './index.vue';

const meta: Meta<typeof TextButton> = {
  component: TextButton,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof TextButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Base: Story = {
  render: args => ({
    components: { TextButton },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template: '<div :style="style"><TextButton>测试</TextButton></div>',
  }),
  args: {
    type: 'default',
  },
};

export const Size: Story = {
  render: args => ({
    components: { TextButton },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template:
      '<div :style="style"><TextButton size="small">测试</TextButton><TextButton size="large">测试</TextButton></div>',
  }),
  args: {
    type: 'default',
  },
};

export const Primary: Story = {
  render: args => ({
    components: { TextButton },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template:
      '<div :style="style"><TextButton type="primary">测试</TextButton><TextButton type="warning" size="small">测试</TextButton></div>',
  }),
  args: {
    type: 'default',
  },
};
