import type { Meta, StoryObj } from '@storybook/vue3';
import { Input, DatePicker } from 'ant-design-vue';

import { schema } from '../schemas/base';
import { RenderEngine, setFieldComponent, addComponent } from '../../src';
import Field from './Field.vue';

setFieldComponent(Field);
addComponent('Input', Input);
addComponent('DatePicker', DatePicker);

const meta: Meta<typeof RenderEngine> = {
    component: RenderEngine,
  };

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof RenderEngine>;



export const Base: Story = {
  render: args => {
    return () => (
      <div>
        <RenderEngine schema={schema} />
      </div>
    )
  },
  args: {},
};