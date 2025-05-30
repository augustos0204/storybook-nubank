import type { Meta, StoryObj } from '@storybook/react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Home, Settings, User } from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  title: 'Nubank/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account\" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@johndoe" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const NubankTabs: Story = {
  render: () => (
    <Tabs defaultValue="home" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-4 bg-nubank-100 dark:bg-nubank2-800">
        <TabsTrigger value="home" className="data-[state=active]:bg-nubank-600 data-[state=active]:text-white">
          <Home className="h-4 w-4 mr-1" />
          Home
        </TabsTrigger>
        <TabsTrigger value="cards" className="data-[state=active]:bg-nubank-600 data-[state=active]:text-white">
          <CreditCard className="h-4 w-4 mr-1" />
          Cards
        </TabsTrigger>
        <TabsTrigger value="profile" className="data-[state=active]:bg-nubank-600 data-[state=active]:text-white">
          <User className="h-4 w-4 mr-1" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings" className="data-[state=active]:bg-nubank-600 data-[state=active]:text-white">
          <Settings className="h-4 w-4 mr-1" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home" className="mt-4">
        <Card>
          <CardHeader className="bg-nubank-600 text-white">
            <CardTitle>Welcome back!</CardTitle>
            <CardDescription className="text-nubank-100">
              Your account summary
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Account Balance</p>
                <p className="text-2xl font-bold">$5,750.20</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Income</p>
                  <p className="text-lg font-semibold text-green-500">+$2,500.00</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Expenses</p>
                  <p className="text-lg font-semibold text-red-500">-$1,245.80</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Transactions</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="cards" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Cards</CardTitle>
            <CardDescription>
              Manage your credit and debit cards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-nubank-600 to-nubank-700 p-4 rounded-md text-white">
                <p className="text-xs mb-4">Credit Card</p>
                <p className="font-mono text-lg tracking-wider mb-4">•••• •••• •••• 1234</p>
                <div className="flex justify-between">
                  <p>JOHN DOE</p>
                  <p>12/29</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Freeze Card</Button>
            <Button>Add Card</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="profile" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              View and update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" defaultValue="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Profile</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your app preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <Switch id="dark-mode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Notifications</Label>
                <Switch id="notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="biometrics">Use Biometrics</Label>
                <Switch id="biometrics" defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Save Settings</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" orientation="vertical" className="w-[600px] flex">
      <TabsList className="w-[200px] flex-shrink-0 flex flex-col h-[300px] bg-muted/20">
        <TabsTrigger value="overview" className="justify-start px-4 py-3">
          Overview
        </TabsTrigger>
        <TabsTrigger value="activity" className="justify-start px-4 py-3">
          Activity
        </TabsTrigger>
        <TabsTrigger value="payments" className="justify-start px-4 py-3">
          Payments
        </TabsTrigger>
        <TabsTrigger value="statements" className="justify-start px-4 py-3">
          Statements
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 p-4">
        <TabsContent value="overview" className="h-full">
          <h3 className="text-lg font-medium mb-2">Account Overview</h3>
          <p className="text-muted-foreground mb-4">
            View a summary of your account activity and balances.
          </p>
          <div className="space-y-4">
            <div className="p-4 border rounded-md">
              <div className="font-medium">Total Balance</div>
              <div className="text-2xl font-bold">$12,560.80</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-md">
                <div className="font-medium">Income</div>
                <div className="text-xl font-bold text-green-500">$4,250.00</div>
              </div>
              <div className="p-4 border rounded-md">
                <div className="font-medium">Expenses</div>
                <div className="text-xl font-bold text-red-500">$2,150.30</div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="activity" className="h-full">
          <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
          <p className="text-muted-foreground mb-4">
            Track your recent transactions and account activity.
          </p>
          <div className="space-y-2">
            {[
              { date: '2023-05-01', desc: 'Grocery Store', amount: '-$85.20' },
              { date: '2023-04-28', desc: 'Salary Deposit', amount: '+$3,500.00' },
              { date: '2023-04-26', desc: 'Electric Bill', amount: '-$124.50' },
              { date: '2023-04-24', desc: 'Coffee Shop', amount: '-$5.75' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between p-3 border-b">
                <div>
                  <div className="font-medium">{item.desc}</div>
                  <div className="text-sm text-muted-foreground">{item.date}</div>
                </div>
                <div className={item.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="payments" className="h-full">
          <h3 className="text-lg font-medium mb-2">Payments</h3>
          <p className="text-muted-foreground mb-4">
            Make payments and manage your recurring transactions.
          </p>
          <div className="space-y-4">
            <Button className="w-full">Make a Payment</Button>
            <div className="p-4 border rounded-md">
              <h4 className="font-medium mb-2">Scheduled Payments</h4>
              <div className="text-sm text-muted-foreground">No upcoming payments</div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="statements" className="h-full">
          <h3 className="text-lg font-medium mb-2">Statements</h3>
          <p className="text-muted-foreground mb-4">
            View and download your account statements.
          </p>
          <div className="space-y-2">
            {[
              { period: 'April 2023', date: '2023-05-01', status: 'Available' },
              { period: 'March 2023', date: '2023-04-01', status: 'Available' },
              { period: 'February 2023', date: '2023-03-01', status: 'Available' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between p-3 border-b">
                <div>
                  <div className="font-medium">{item.period}</div>
                  <div className="text-sm text-muted-foreground">Generated: {item.date}</div>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};