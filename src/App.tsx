import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Home, PieChart, Settings, User } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider defaultTheme={darkMode ? 'dark' : 'light'} storageKey="nubank-ui-theme">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Card className="w-full max-w-3xl overflow-hidden shadow-lg">
          <CardHeader className="bg-nubank-600 text-white p-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-bold">Nubank Design System</CardTitle>
                <CardDescription className="text-nubank-100 mt-1">
                  ShadCN components with Nubank theme
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="dark-mode" className="text-sm">Dark Mode</Label>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
            </div>
          </CardHeader>
          
          <Tabs defaultValue="components" className="w-full">
            <TabsList className="w-full grid grid-cols-4 rounded-none">
              <TabsTrigger value="components" className="py-3">
                <CreditCard className="h-4 w-4 mr-2" />
                Components
              </TabsTrigger>
              <TabsTrigger value="theme" className="py-3">
                <PieChart className="h-4 w-4 mr-2" />
                Theme
              </TabsTrigger>
              <TabsTrigger value="docs" className="py-3">
                <Home className="h-4 w-4 mr-2" />
                Docs
              </TabsTrigger>
              <TabsTrigger value="settings" className="py-3">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="components" className="p-6">
              <div className="flex flex-col space-y-6">
                <h3 className="text-xl font-medium mb-4">Button Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Primary Button</CardTitle>
                      <CardDescription>Main call-to-action button</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-2">
                        <Button>Default</Button>
                        <Button disabled>Disabled</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Secondary Button</CardTitle>
                      <CardDescription>Alternative action button</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-2">
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="secondary" disabled>Disabled</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Explore the Storybook for complete component documentation
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="theme" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Nubank Color Palette</CardTitle>
                    <CardDescription>Brand colors used throughout the system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-md bg-nubank-600 mr-3"></div>
                        <div>
                          <p className="font-medium">Primary Purple</p>
                          <p className="text-xs text-muted-foreground">#8A05BE</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-md bg-nubank2-500 mr-3"></div>
                        <div>
                          <p className="font-medium">Secondary Purple</p>
                          <p className="text-xs text-muted-foreground">#47457A</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Typography</CardTitle>
                    <CardDescription>Font styles used in the design system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h1 className="text-2xl font-bold">Heading 1</h1>
                        <p className="text-xs text-muted-foreground">2xl / Bold / 1.2 line height</p>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">Heading 2</h2>
                        <p className="text-xs text-muted-foreground">xl / Semibold / 1.3 line height</p>
                      </div>
                      <div>
                        <p className="text-base">Body Text</p>
                        <p className="text-xs text-muted-foreground">base / Regular / 1.5 line height</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="docs" className="p-6">
              <Card>
                <CardHeader>
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Learn how to use the Nubank Design System</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This design system provides Nubank-themed components based on ShadCN UI. 
                    Use Storybook to explore component variations and usage examples.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      npm run storybook
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Launch Storybook
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="p-6">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Customize your design system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dark-mode-setting">Dark Mode</Label>
                      <Switch
                        id="dark-mode-setting"
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animations">Enable Animations</Label>
                      <Switch id="animations" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="high-contrast">High Contrast</Label>
                      <Switch id="high-contrast" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Save Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </Card>
        
        <div className="mt-6 flex items-center">
          <User className="text-nubank-600 h-5 w-5 mr-2" />
          <p className="text-sm text-muted-foreground">
            Design System preview page
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;