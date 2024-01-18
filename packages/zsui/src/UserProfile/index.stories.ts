import type { Meta, StoryObj } from '@storybook/vue3';

import UserProfile from './index.vue';

const meta: Meta<typeof UserProfile> = {
  component: UserProfile,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof UserProfile>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Base: Story = {
  render: args => ({
    components: { UserProfile },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template: '<div :style="style"><UserProfile username="哈乐"><template #profile>123</template></div>',
  }),
  args: {
  },
};

export const Scroll: Story = {
  render: args => ({
    components: { UserProfile },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template: '<div :style="style"><UserProfile username="哈乐"><template #profile><div style="height: 800px;">2233</div></template></div>',
  }),
  args: {
  },
};
