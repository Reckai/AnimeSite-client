import type { Meta, StoryObj } from '@storybook/react';
import AnimeWatchButton from './AnimeWatchButton';
import '../../../../globals.css'


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AnimeWatchButton> = {
  component: AnimeWatchButton,
};

export default meta;
type Story = StoryObj<typeof AnimeWatchButton>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};