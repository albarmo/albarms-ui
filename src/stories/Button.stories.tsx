import React from "react"
import { Button } from "@/components/atoms/button/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Plus } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Learn More",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Continue",
    leftIcon: <ArrowRight size={18} />,
    rightIcon: <ArrowRight size={18} />,
    variant: "primary",
  },
};

export const Loading: Story = {
  args: {
    children: "Processing",
    loading: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Playground: Story = {
  args: {
    children: "Play with me",
    variant: "primary",
    size: "md",
    rounded: "md",
    leftIcon: <Plus size={18} />,
  },
};
