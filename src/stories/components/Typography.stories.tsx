import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Create a simple component to display the typography
const Typography = () => {
  return (
    <div className="space-y-8 w-full max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Typography Scale</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Heading 1 (4xl)</h1>
              <p className="text-sm text-muted-foreground">Font size: 2.25rem / Line height: 2.5rem / Weight: 700</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Heading 2 (3xl)</h2>
              <p className="text-sm text-muted-foreground">Font size: 1.875rem / Line height: 2.25rem / Weight: 700</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Heading 3 (2xl)</h3>
              <p className="text-sm text-muted-foreground">Font size: 1.5rem / Line height: 2rem / Weight: 600</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Heading 4 (xl)</h4>
              <p className="text-sm text-muted-foreground">Font size: 1.25rem / Line height: 1.75rem / Weight: 600</p>
            </div>
            <div>
              <h5 className="text-lg font-medium">Heading 5 (lg)</h5>
              <p className="text-sm text-muted-foreground">Font size: 1.125rem / Line height: 1.75rem / Weight: 500</p>
            </div>
            <div>
              <h6 className="text-base font-medium">Heading 6 (base)</h6>
              <p className="text-sm text-muted-foreground">Font size: 1rem / Line height: 1.5rem / Weight: 500</p>
            </div>
          </div>
          
          <div className="space-y-4 pt-6 border-t">
            <div>
              <p className="text-lg">Large Body Text (lg)</p>
              <p className="text-sm text-muted-foreground">Font size: 1.125rem / Line height: 1.75rem / Weight: 400</p>
            </div>
            <div>
              <p className="text-base">Body Text (base)</p>
              <p className="text-sm text-muted-foreground">Font size: 1rem / Line height: 1.5rem / Weight: 400</p>
            </div>
            <div>
              <p className="text-sm">Small Text (sm)</p>
              <p className="text-sm text-muted-foreground">Font size: 0.875rem / Line height: 1.25rem / Weight: 400</p>
            </div>
            <div>
              <p className="text-xs">Extra Small Text (xs)</p>
              <p className="text-sm text-muted-foreground">Font size: 0.75rem / Line height: 1rem / Weight: 400</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Text Styles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <p className="font-bold">Bold Text</p>
            <p className="font-semibold">Semi-bold Text</p>
            <p className="font-medium">Medium Text</p>
            <p className="font-normal">Regular Text</p>
            <p className="font-light">Light Text</p>
            <p className="italic">Italic Text</p>
            <p className="underline">Underlined Text</p>
            <p className="line-through">Strikethrough Text</p>
            <p className="uppercase">Uppercase Text</p>
            <p className="lowercase">Lowercase Text</p>
            <p className="capitalize">capitalized text</p>
          </div>

          <div className="space-y-3 pt-6 border-t">
            <p className="text-primary">Primary Text</p>
            <p className="text-secondary">Secondary Text</p>
            <p className="text-accent-foreground">Accent Text</p>
            <p className="text-muted-foreground">Muted Text</p>
            <p className="text-destructive">Destructive Text</p>
            <p className="text-nubank-600">Nubank Purple Text</p>
            <p className="text-nubank2-500">Secondary Purple Text</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Text Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-nubank-600">Nubank Design System</h2>
            <p className="text-base">
              This design system provides a collection of reusable components styled with the 
              Nubank theme, built on top of the ShadCN UI library and Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground">
              The components follow Nubank's design language and are optimized for a 
              consistent user experience across different applications.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="text-nubank-600 hover:underline">Learn more</a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-nubank-600 hover:underline">Documentation</a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof Typography> = {
  title: 'Nubank/Theme/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {};