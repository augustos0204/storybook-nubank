import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ShadowTokens = () => {
  const shadowTokens = [
    { 
      name: 'nubank-sm', 
      value: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)',
      class: 'shadow-nubank-sm'
    },
    { 
      name: 'nubank-md', 
      value: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      class: 'shadow-nubank-md'
    },
    { 
      name: 'nubank-lg', 
      value: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      class: 'shadow-nubank-lg'
    },
    { 
      name: 'shadow-sm (default)', 
      value: 'Tailwind default shadow-sm',
      class: 'shadow-sm'
    },
    { 
      name: 'shadow (default)', 
      value: 'Tailwind default shadow',
      class: 'shadow'
    },
    { 
      name: 'shadow-md (default)', 
      value: 'Tailwind default shadow-md',
      class: 'shadow-md'
    },
    { 
      name: 'shadow-lg (default)', 
      value: 'Tailwind default shadow-lg',
      class: 'shadow-lg'
    },
  ];

  return (
    <div className="w-full max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Shadow Tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shadowTokens.map((token) => (
              <div key={token.name} className="space-y-2">
                <div 
                  className={`${token.class} bg-white dark:bg-gray-800 w-full h-24 rounded-lg flex items-center justify-center`}
                >
                  <span className="text-sm">{token.name}</span>
                </div>
                <p className="text-xs text-muted-foreground">{token.value}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 space-y-6">
            <h3 className="text-lg font-medium mb-4">Examples</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="shadow-nubank-sm bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm font-medium mb-2">Card with Small Shadow</div>
                <p className="text-xs text-muted-foreground">
                  This card uses the small shadow token.
                </p>
              </div>
              
              <div className="shadow-nubank-md bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm font-medium mb-2">Card with Medium Shadow</div>
                <p className="text-xs text-muted-foreground">
                  This card uses the medium shadow token.
                </p>
              </div>
              
              <div className="shadow-nubank-lg bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm font-medium mb-2">Card with Large Shadow</div>
                <p className="text-xs text-muted-foreground">
                  This card uses the large shadow token.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-medium mb-4">Hover Effects</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="shadow-nubank-sm hover:shadow-nubank-md transition-shadow duration-300 bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-medium mb-2">Hover Effect: Small to Medium</div>
                  <p className="text-xs text-muted-foreground">
                    Hover over this card to see the shadow change.
                  </p>
                </div>
                
                <div className="shadow-nubank-md hover:shadow-nubank-lg transition-shadow duration-300 bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm font-medium mb-2">Hover Effect: Medium to Large</div>
                  <p className="text-xs text-muted-foreground">
                    Hover over this card to see the shadow change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof ShadowTokens> = {
  title: 'Nubank/Design Tokens/Shadows',
  component: ShadowTokens,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ShadowTokens>;

export const Default: Story = {};