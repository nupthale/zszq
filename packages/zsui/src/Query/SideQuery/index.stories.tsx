import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import TextButton from '../../TextButton/index.vue';

import SideQuery from './index.vue';
import QueryTags from '../QueryTags/index.vue';
import { useSchema } from '../useSchema';
import { QueryTag } from '../interface';

const meta: Meta<typeof SideQuery> = {
  component: SideQuery,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof SideQuery>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */


export const Base: Story = {
  render: args => ({
    components: { SideQuery, TextButton, QueryTags },
    setup() {
      const sideRef = ref();

      const { schema } = useSchema(false);
      const queryTags = ref({});

      const handleChange = (_values: unknown, tags: QueryTag[]) => {
        queryTags.value = tags;
      }

      const handleClearAll = () => {
        sideRef.value?.reset();
      }

      const handleRemoveTag = (field: string) => {
        sideRef.value?.resetField(field, undefined);
      }

      return () => (
        <div>
          <SideQuery ref={sideRef} schema={schema.value} onChange={handleChange}>
            <TextButton type="primary">筛选</TextButton>
          </SideQuery>
          <div>
            <QueryTags tags={queryTags.value} onClearAll={handleClearAll} onRemove={handleRemoveTag}></QueryTags>
          </div>
        </div>
      );
    },
  }),
  args: {
  },
};