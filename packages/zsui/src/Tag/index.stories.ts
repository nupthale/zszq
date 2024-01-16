import type { Meta, StoryObj } from '@storybook/vue3';

import Tag from './index.vue';

const meta: Meta<typeof Tag> = {
  component: Tag,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Tag>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Base: Story = {
  render: args => ({
    components: { Tag },
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
      '<div :style="style"><Tag color="blue">签订中</Tag><Tag>已撤回</Tag><Tag color="green">已归档</Tag><Tag color="blue">审批中</Tag><Tag color="red">已作废</Tag><Tag color="orange">变更中</Tag></div>',
  }),
  args: {},
};
