import type { Meta, StoryObj } from '@storybook/vue3';

import Tag from '../Tag/index.vue';
import TextButton from '../TextButton/index.vue';
import File from './index.vue';

const meta: Meta<typeof File> = {
  component: File,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof File>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

export const Base: Story = {
  render: args => {
    return () => (
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <File fileName="很长的名字.pdf"></File>
        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.docx"></File>
        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.png"></File>
        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.xlsx"></File>
        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.pptx"></File>
        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.mp3"></File>
        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.mp4"></File>
        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.zip"></File>
        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.ps"></File>
      </div>
    );
  },
  args: {
  },
};

export const SlotNameExtra: Story = {
  render: args => {
    return () => (
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <File fileName="很长.pdf">
          {{
            nameExtra: () => (
              <Tag color="blue" size="small">测试标签</Tag>
            )
          }}
        </File>

        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.pdf">
          {{
            nameExtra: () => (
              <Tag color="blue" size="small">测试标签</Tag>
            )
          }}
        </File>
      </div>
    );
  },
  args: {
  },
};

export const SlotExtra: Story = {
  render: args => {
    return () => (
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <File fileName="很长.pdf">
          {{
            nameExtra: () => (
              <Tag color="blue" size="small">测试标签</Tag>
            ),
            extra: () => (
              <div style="color: rgb(143, 149, 158); font-size: 12px;">这是一段描述</div>
            ),
          }}
        </File>

        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.pdf">
          {{
            nameExtra: () => (
              <Tag color="blue" size="small">测试标签</Tag>
            ),
            extra: () => (
              <div style="color: rgb(143, 149, 158); font-size: 12px;">这是一段描述</div>
            ),
          }}
        </File>
      </div>
    );
  },
  args: {
  },
};

export const SlotActions: Story = {
  render: args => {
    return () => (
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <File fileName="很长.pdf">
          {{
            nameExtra: () => (
              <Tag color="blue" size="small">测试标签</Tag>
            ),
            extra: () => (
              <div style="color: rgb(143, 149, 158); font-size: 12px;">这是一段描述</div>
            ),
            actions: () => (
              <div>
                <TextButton type="primary" size="small">下载</TextButton>
              </div>
            )
          }}
        </File>

        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.pdf">
          {{
            nameExtra: () => (
              <Tag color="blue" size="small">测试标签</Tag>
            ),
            extra: () => (
              <div style="color: rgb(143, 149, 158); font-size: 12px;">这是一段描述</div>
            ),
            actions: () => (
              <div>
                <TextButton type="primary" size="small">下载</TextButton>
              </div>
            )
          }}
        </File>
      </div>
    );
  },
  args: {
  },
};


export const PercentBar: Story = {
  render: args => {
    return () => (
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <File fileName="很长.pdf" showPercentBar percent={30}>
          {{
            nameExtra: () => (
              <Tag color="blue" size="small">测试标签</Tag>
            ),
            extra: () => (
              <div style="color: rgb(143, 149, 158); font-size: 12px;">这是一段描述</div>
            ),
            actions: () => (
              <div>
                <TextButton type="primary" size="small">下载</TextButton>
              </div>
            )
          }}
        </File>

        <File fileName="很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字.pdf" showPercentBar percent={130}>
          {{
            nameExtra: () => (
              <Tag color="blue" size="small">测试标签</Tag>
            ),
            extra: () => (
              <div style="color: rgb(143, 149, 158); font-size: 12px;">这是一段描述</div>
            ),
            actions: () => (
              <div>
                <TextButton type="primary" size="small">下载</TextButton>
              </div>
            )
          }}
        </File>
      </div>
    );
  },
  args: {
  },
};