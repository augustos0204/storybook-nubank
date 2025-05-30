import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SpacingTokens = () => {
  const spacingTokens = [
    { name: 'nubank-xs', value: '4px' },
    { name: 'nubank-sm', value: '8px' },
    { name: 'nubank-md', value: '16px' },
    { name: 'nubank-lg', value: '24px' },
    { name: 'nubank-xl', value: '32px' },
    { name: 'nubank-2xl', value: '40px' },
    { name: 'nubank-3xl', value: '48px' },
  ];

  return (
    <div className="w-full max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Spacing Tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {spacingTokens.map((token) => (
              <div key={token.name} className="flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-sm font-medium">{token.name}</span>
                </div>
                <div className="flex items-center">
                  <div className={`bg-nubank-600 h-4`} style={{ width: token.value }}></div>
                  <span className="ml-4 text-sm text-muted-foreground">{token.value}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 space-y-6">
            <h3 className="text-lg font-medium mb-4">Spacing Examples</h3>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Margin Example</h4>
              <div className="border border-dashed border-muted-foreground p-4">
                <div className="bg-muted p-2 mb-nubank-sm">
                  <span className="text-xs">mb-nubank-sm (8px)</span>
                </div>
                <div className="bg-muted p-2 mb-nubank-md">
                  <span className="text-xs">mb-nubank-md (16px)</span>
                </div>
                <div className="bg-muted p-2 mb-nubank-lg">
                  <span className="text-xs">mb-nubank-lg (24px)</span>
                </div>
                <div className="bg-muted p-2">
                  <span className="text-xs">Last element</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Padding Example</h4>
              <div className="space-y-4">
                <div className="bg-muted p-nubank-sm border border-border">
                  <span className="text-xs">p-nubank-sm (8px)</span>
                </div>
                <div className="bg-muted p-nubank-md border border-border">
                  <span className="text-xs">p-nubank-md (16px)</span>
                </div>
                <div className="bg-muted p-nubank-lg border border-border">
                  <span className="text-xs">p-nubank-lg (24px)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Gap Example</h4>
              <div className="border border-dashed border-muted-foreground p-4">
                <div className="flex flex-col gap-nubank-md">
                  <div className="bg-muted p-2">
                    <span className="text-xs">Item 1</span>
                  </div>
                  <div className="bg-muted p-2">
                    <span className="text-xs">Item 2</span>
                  </div>
                  <div className="bg-muted p-2">
                    <span className="text-xs">Item 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof SpacingTokens> = {
  title: 'Nubank/Design Tokens/Spacing',
  component: SpacingTokens,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SpacingTokens>;

export const Default: Story = {};