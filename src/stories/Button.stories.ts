import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['docsPage'],
  argTypes: {
    onClick: {
      action: () => console.log('clicked'),
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args:https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    onClick: () => {
      console.log('clicked');
    },
    size: 'large',
    children: 'Button',
    type: 'primary',
  },
};

export const Secondary: Story = {
  parameters: {
    themes: {
      default: 'dark',
    },
  },
  args: {
    onClick() {
      console.log('clicked');
    },
    size: 'large',
    children: 'Button',
    type: 'primary',
  },
};
