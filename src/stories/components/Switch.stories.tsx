import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Switch> = {
  title: 'Nubank/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    id: 'default-switch',
  },
};

export const Checked: Story = {
  args: {
    id: 'checked-switch',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: 'disabled-checked-switch',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const WithLabelRight: Story = {
  render: () => (
    <div className="flex items-center justify-between w-[300px] p-4 border rounded-lg">
      <Label htmlFor="wifi" className="font-medium">Wi-Fi</Label>
      <Switch id="wifi" defaultChecked />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [enabled, setEnabled] = useState(false);
    
    return (
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-2">
          <Switch 
            id="interactive-switch" 
            checked={enabled} 
            onCheckedChange={setEnabled} 
          />
          <Label htmlFor="interactive-switch">
            {enabled ? 'Enabled' : 'Disabled'}
          </Label>
        </div>
        <div className={`p-4 rounded-md transition-colors ${
          enabled ? 'bg-nubank-600 text-white' : 'bg-muted text-muted-foreground'
        }`}>
          This content changes based on the switch state.
        </div>
      </div>
    );
  },
};

export const SwitchGroup: Story = {
  render: () => (
    <div className="space-y-4 border p-6 rounded-md w-[300px]">
      <h3 className="font-medium mb-2">Notification Settings</h3>
      <div className="flex items-center justify-between">
        <Label htmlFor="email-notifs">Email notifications</Label>
        <Switch id="email-notifs" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="push-notifs">Push notifications</Label>
        <Switch id="push-notifs" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="sms-notifs">SMS notifications</Label>
        <Switch id="sms-notifs" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="marketing-notifs">Marketing emails</Label>
        <Switch id="marketing-notifs" />
      </div>
    </div>
  ),
};