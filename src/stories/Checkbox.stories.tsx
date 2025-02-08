import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../app/shared/Checkbox/Checkbox';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			options: ['default', 'destructive', 'secondary'],
			control: { type: 'select' }
		},
		size: {
			options: ['default', 'sm', 'lg'],
			control: { type: 'select' }
		}
	}
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Accept terms'
	}
};

export const Secondary: Story = {
	args: {
		label: 'Secondary checkbox',
		variant: 'secondary'
	}
};

export const Destructive: Story = {
	args: {
		label: 'Destructive checkbox',
		variant: 'destructive'
	}
};

export const Small: Story = {
	args: {
		label: 'Small checkbox',
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		label: 'Large checkbox',
		size: 'lg'
	}
};

export const WithHelperText: Story = {
	args: {
		label: 'Subscribe to newsletter',
		helperText: 'We will send you weekly updates'
	}
};

export const WithError: Story = {
	args: {
		label: 'Required field',
		error: 'This field is required'
	}
};

export const Indeterminate: Story = {
	args: {
		label: 'Select all',
		indeterminate: true
	}
};

export const Disabled: Story = {
	args: {
		label: 'Disabled option',
		disabled: true
	}
};
