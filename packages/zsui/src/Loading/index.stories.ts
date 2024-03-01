import type { Meta, StoryObj } from '@storybook/vue3';

import Loading from './index.vue';

const meta: Meta<typeof Loading> = {
  component: Loading,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Loading>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Base: Story = {
  render: args => ({
    components: { Loading },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template:
      '<div :style="style"><Loading /></div>',
  }),
  args: {
  },
};