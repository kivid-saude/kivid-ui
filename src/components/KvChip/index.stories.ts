import type { Meta, StoryObj } from "@storybook/react";
import { KvChip } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Kivid/KvChip",
  component: KvChip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn()
  },
} satisfies Meta<typeof KvChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Example",
  },
};
export const Small: Story = {
  args: {
    size: "small",
    color: "light",
    fill: "outline",
    label: "Example",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
    color: "light",
    fill: "outline",
    label: "Example",
  },
};
export const Large: Story = {
  args: {
    size: "large",
    color: "light",
    fill: "outline",
    label: "Example",
  },
};
export const SmallWithIcon: Story = {
  args: {
    size: "small",
    color: "light",
    fill: "outline",
    label: "Example",
    icon: "check",
    iconColor: "success",
  },
};
export const MediumWithIcon: Story = {
  args: {
    size: "medium",
    color: "light",
    fill: "outline",
    label: "Example",
    icon: "check",
    iconColor: "success",
  },
};
export const LargeWithIcon: Story = {
  args: {
    size: "large",
    color: "light",
    fill: "outline",
    label: "Example",
    icon: "check",
    iconColor: "success",
  },
};
