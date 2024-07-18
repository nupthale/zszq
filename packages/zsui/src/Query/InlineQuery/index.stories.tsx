import type { Meta, StoryObj } from '@storybook/vue3';

import InlineQuery from './index.vue';
import { useSchema } from '../useSchema';
import { QueryTag } from '../interface';

const meta: Meta<typeof InlineQuery> = {
  component: InlineQuery,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof InlineQuery>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */


export const Base: Story = {
  render: () => ({
    components: { InlineQuery },
    setup() {
      const { schema } = useSchema(true);

      const handleSearch = (values: unknown) => {
        console.info('newValues', values);
      }

      return () => (
        <div>
          <InlineQuery schema={schema.value} onSearch={handleSearch}></InlineQuery>
        </div>
      );
    },
  }),
  args: {
  },
};