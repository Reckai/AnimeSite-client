import type { Meta, StoryObj } from '@storybook/react';
import '../../../../../../globals.css'
import InfoButton from './InfoButton';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof InfoButton> = {
  component: InfoButton,
};

export default meta;
type Story = StoryObj<typeof InfoButton>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    count: 1,
    status: 'DROPPED',
  },
};