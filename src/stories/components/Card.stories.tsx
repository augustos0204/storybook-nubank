import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CreditCard, PlusCircle } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Nubank/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const NubankCard: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <CardHeader className="bg-nubank-600 text-white">
        <CardTitle className="flex items-center">
          <CreditCard className="mr-2 h-4 w-4" />
          Nubank Card
        </CardTitle>
        <CardDescription className="text-nubank-100">
          Virtual credit card
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-nubank-600 to-nubank-700 p-4 rounded-md text-white">
            <p className="text-xs mb-6">Credit Card</p>
            <p className="font-mono text-lg tracking-wider mb-4">•••• •••• •••• 1234</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs opacity-70">NAME</p>
                <p>JOHN DOE</p>
              </div>
              <div>
                <p className="text-xs opacity-70">VALID THRU</p>
                <p>12/29</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Available limit</p>
              <p className="text-xl font-bold">$5,000.00</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Current invoice</p>
              <p className="text-xl font-bold">$350.75</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">View details</Button>
        <Button size="sm">Pay invoice</Button>
      </CardFooter>
    </Card>
  ),
};

export const SignIn: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full">Sign In</Button>
        <Button variant="outline" className="w-full">
          Forgot password?
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const AddNew: Story = {
  render: () => (
    <Card className="w-[350px] border-dashed">
      <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
        <PlusCircle className="h-8 w-8 text-muted-foreground mb-2" />
        <p className="text-muted-foreground text-sm">Add new card</p>
        <Button variant="ghost" className="mt-4">Create</Button>
      </CardContent>
    </Card>
  ),
};