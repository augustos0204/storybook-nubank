import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Create a simple component to display the theme colors
const ThemeColors = () => {
  const colorGroups = [
    {
      name: 'Nubank Purple',
      colors: [
        { name: '50', value: 'bg-nubank-50', hex: '#f3e6f8' },
        { name: '100', value: 'bg-nubank-100', hex: '#e3c4ef' },
        { name: '200', value: 'bg-nubank-200', hex: '#d29fe6' },
        { name: '300', value: 'bg-nubank-300', hex: '#bd78dc' },
        { name: '400', value: 'bg-nubank-400', hex: '#ac5bd4' },
        { name: '500', value: 'bg-nubank-500', hex: '#9a3ecc' },
        { name: '600', value: 'bg-nubank-600', hex: '#8a05be' },
        { name: '700', value: 'bg-nubank-700', hex: '#7a04a9' },
        { name: '800', value: 'bg-nubank-800', hex: '#690494' },
        { name: '900', value: 'bg-nubank-900', hex: '#47026a' },
      ],
    },
    {
      name: 'Secondary Purple',
      colors: [
        { name: '50', value: 'bg-nubank2-50', hex: '#e8e8ef' },
        { name: '100', value: 'bg-nubank2-100', hex: '#c6c6d6' },
        { name: '200', value: 'bg-nubank2-200', hex: '#a1a1bc' },
        { name: '300', value: 'bg-nubank2-300', hex: '#7c7ca2' },
        { name: '400', value: 'bg-nubank2-400', hex: '#62618e' },
        { name: '500', value: 'bg-nubank2-500', hex: '#47457a' },
        { name: '600', value: 'bg-nubank2-600', hex: '#413f70' },
        { name: '700', value: 'bg-nubank2-700', hex: '#383763' },
        { name: '800', value: 'bg-nubank2-800', hex: '#2f2f57' },
        { name: '900', value: 'bg-nubank2-900', hex: '#22213e' },
      ],
    },
    {
      name: 'Semantic Colors',
      colors: [
        { name: 'Primary', value: 'bg-primary', textColor: 'text-primary-foreground', hex: 'var(--primary)' },
        { name: 'Secondary', value: 'bg-secondary', textColor: 'text-secondary-foreground', hex: 'var(--secondary)' },
        { name: 'Accent', value: 'bg-accent', textColor: 'text-accent-foreground', hex: 'var(--accent)' },
        { name: 'Destructive', value: 'bg-destructive', textColor: 'text-destructive-foreground', hex: 'var(--destructive)' },
        { name: 'Success', value: 'bg-success', textColor: 'text-success-foreground', hex: 'var(--success)' },
        { name: 'Warning', value: 'bg-warning', textColor: 'text-warning-foreground', hex: 'var(--warning)' },
        { name: 'Muted', value: 'bg-muted', textColor: 'text-muted-foreground', hex: 'var(--muted)' },
      ],
    },
  ];

  return (
    <div className="space-y-8 w-full max-w-3xl">
      {colorGroups.map((group) => (
        <Card key={group.name}>
          <CardHeader>
            <CardTitle>{group.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.colors.map((color) => (
                <div key={color.name} className="flex items-center space-x-4">
                  <div 
                    className={`w-12 h-12 rounded-md ${color.value} ${color.textColor || ''}`}
                  ></div>
                  <div>
                    <div className="font-medium">{color.name}</div>
                    <div className="text-xs text-muted-foreground">{color.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const meta: Meta<typeof ThemeColors> = {
  title: 'Nubank/Theme/Colors',
  component: ThemeColors,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ThemeColors>;

export const Default: Story = {};