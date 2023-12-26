import type { Meta, StoryObj } from '@storybook/vue3';

import EllipsisText from './index.vue';

const meta: Meta<typeof EllipsisText> = {
  component: EllipsisText,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof EllipsisText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Base: Story = {
  render: args => ({
    components: { EllipsisText },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template:
      '<div :style="style"><EllipsisText v-bind="args">Storybook isn’t opinionated about how you generate or load CSS. It renders whatever DOM elements you provide. But sometimes, things won’t “look right” out of the box.</EllipsisText></div>',
  }),
  args: {
    title:
      'Storybook isn’t opinionated about how you generate or load CSS. It renders whatever DOM elements you provide. But sometimes, things won’t “look right” out of the box.',
    lineClamp: 2,
  },
};

export const Expandable: Story = {
  render: args => ({
    components: { EllipsisText },
    setup() {
      const style = {
        display: 'inline-block',
        width: '400px',
      };

      return { args, style };
    },
    template: `
        <div :style="{display: 'flex'}">
          <div :style="style"><EllipsisText expandable v-bind="args">Storybook isn’t opinionated about how you generate or load CSS. It renders whatever DOM elements you provide. But sometimes, things won’t “look right” out of the box.</EllipsisText></div>

        </div>
    `,
  }),
  args: {
    lineClamp: 1,
    fontSize: 12,
    ellipsisSymbol: 'abc',
  },
};
