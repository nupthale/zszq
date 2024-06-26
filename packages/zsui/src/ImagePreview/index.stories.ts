import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import TextButton from '../TextButton/index.vue';

import ImagePreview from './index.vue';

const meta: Meta<typeof ImagePreview> = {
  component: ImagePreview,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof ImagePreview>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Base: Story = {
  render: args => ({
    components: { ImagePreview, TextButton },
    setup() {
      const visible = ref(false);

      return { args, visible };
    },
    template:
      '<div><TextButton type="primary" @click="visible = true">预览</TextButton><ImagePreview v-if="visible" filename="abcd.png" src="https://vuejs.org/assets/lifecycle.MuZLBFAS.png" @close="visible = false" /></div>',
  }),
  args: {},
};
