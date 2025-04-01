import type { Meta, StoryObj } from '@storybook/vue3';
import { Input, DatePicker } from 'ant-design-vue';

import { SchemaType } from '../../src/RenderEngine/interface';
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

const schema: SchemaType = {
    content: [{
        type: 'module',
        title: '基础信息',
        titleClass: 'font-bold',
        content: [{
            type: 'field',
            fieldType: 'Input',
            name: 'incomeType',
            fieldProps: {
              label: '收支类型1',
              layout: 'vertical',
              required: true,
            },
            componentProps: {
                placeholder: '请输入哈乐',
                // 小程序
                noBorder: true,
            },
        }, {
            type: 'component',
            name: 'date',
            componentType: 'DatePicker',
            componentProps: {
                placeholder: '请选择哈乐日期',
            },
        }],
    }],
};

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