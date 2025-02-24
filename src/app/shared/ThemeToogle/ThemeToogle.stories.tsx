import type { Meta, StoryObj } from '@storybook/react';

import '../../globals.css';
import { ThemeToggle } from './ThemeToggle';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example/ThemeToggle',
	component: ThemeToggle,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs']

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeToogles: Story = {};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
