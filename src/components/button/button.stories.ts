import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button.component";
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: "Sign In",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Sign In",
  },
};
export const PrimaryOutlined: Story = {
  args: {
    ...Primary.args,
    hasOutline: true,
  },
};

export const SecondaryOutlined: Story = {
  args: {
    ...Secondary.args,
    hasOutline: true
  },
};
