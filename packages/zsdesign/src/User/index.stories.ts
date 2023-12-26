import type { Meta, StoryObj } from '@storybook/vue3';

import User from './index.vue';

const meta: Meta<typeof User> = {
  component: User,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof User>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Base: Story = {
  render: args => ({
    components: { User },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template:
      '<div :style="style"><div><User v-bind="args" /></div><div><User username="吴方文" /></div><User username="Sergio Pedercini" /></div>',
  }),
  args: {
    username: '哈乐',
  },
};
