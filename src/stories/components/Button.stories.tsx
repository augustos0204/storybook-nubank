import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Moon, Plus, Settings } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Nubank/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </>
    ),
    variant: 'default',
  },
};

export const IconOnly: Story = {
  args: {
    children: <Settings className="h-4 w-4" />,
    variant: 'outline',
    size: 'icon',
    'aria-label': 'Settings',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        Processing
      </>
    ),
    disabled: true,
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-2">
        <Button variant="default">Save</Button>
        <Button variant="outline">Cancel</Button>
      </div>
      <div className="flex space-x-2">
        <Button variant="default" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New
        </Button>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  ),
};