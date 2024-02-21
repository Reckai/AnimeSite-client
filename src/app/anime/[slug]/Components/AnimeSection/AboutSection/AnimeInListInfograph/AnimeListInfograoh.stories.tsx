import type { Meta, StoryObj } from '@storybook/react';
import '../../../../../globals.css'
import AnimeListInfograph from './AnimeListInfograph';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AnimeListInfograph> = {
  component: AnimeListInfograph,
};

export default meta;
type Story = StoryObj<typeof AnimeListInfograph>;

export const FirstStory: Story = {
  args: {
    StatusList:[
        {
            count: 1,
            status: 'DROPPED',

        },
        {
            count: 2,
            status: 'WATCHING',

        },
        {
            count: 3,
            status: 'COMPLETED',

        },
        {
            count: 4,
            status: 'PLANNED',

        },
        {
            count: 5,
            status: 'DELAYED',

        }
    ]
    //👇 The args you need here will depend on your component
  },
};