import { Meta, StoryObj } from '@storybook/vue3';
import { default as CavateEditor } from './index.vue';

declare const meta: Meta<typeof CavateEditor>;
export default meta;
type Story = StoryObj<typeof CavateEditor>;
export declare const Template: Story;
export declare const InputEditable: Story;
export declare const Validate: Story;
