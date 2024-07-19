import type { Meta, StoryObj } from '@storybook/vue3';

import GridQuery from './index.vue';
import { useSchema } from '../useSchema';

const meta: Meta<typeof GridQuery> = {
  component: GridQuery,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof GridQuery>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */


export const Base: Story = {
  render: () => ({
    components: { GridQuery },
    setup() {
      const { schema } = useSchema(true);

      const handleSearch = (values: unknown) => {
        console.info('newValues', values);
      }

      return () => (
        <div>
          <GridQuery schema={schema.value} onSearch={handleSearch}></GridQuery>
        </div>
      );
    },
  }),
  args: {
  },
};