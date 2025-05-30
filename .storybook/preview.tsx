import React from 'react';
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import "../src/index.css";
import { ThemeProvider } from '../src/components/theme-provider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'light',
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
      dark: { ...themes.dark },
      light: { ...themes.light }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F8F9FA',
        },
        {
          name: 'dark',
          value: '#1A1A1A',
        },
        {
          name: 'nubank',
          value: '#8A05BE',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const { globals } = context;
      const theme = globals.theme || 'light';
      
      return (
        <ThemeProvider defaultTheme={theme} storageKey="storybook-theme">
          <div className={`${theme} transition-colors duration-300`}>
            <div className="p-6 min-h-screen bg-background text-foreground">
              <Story />
            </div>
          </div>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;