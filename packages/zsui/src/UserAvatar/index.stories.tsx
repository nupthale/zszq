import type { Meta, StoryObj } from '@storybook/vue3';

import UserAvatar from './index.vue';

const meta: Meta<typeof UserAvatar> = {
  component: UserAvatar,
};

// 👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof UserAvatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const containerStyle = 'display: inline-block; width: 100px;';

const userNames = [
  '赵明', '钱伟', '孙强', '李华', '周杰', '吴磊', '郑爽', '王芳', '冯军', '陈静',
  '褚丽', '卫东', '蒋涛', '沈红', '韩梅', '杨帆', '朱军', '秦明', '尤佳', '许晴',
  '何伟', '吕强', '施华', '张伟', '孔明', '曹军', '严丽', '华强', '金涛', '魏红'
];

export const Base: Story = {
  render() {
    return () => (
      <div>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          {
            userNames.map(user => <UserAvatar username={user} />)
          }
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          {
            userNames.map(user => <UserAvatar size="small" username={user} />)
          }
        </div>
      </div>
    );
  }
}
