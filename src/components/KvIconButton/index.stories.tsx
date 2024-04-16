import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentType } from "react";
import { KvIconButton } from ".";
import { KvIcon } from "../KvIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Kivid/KvIconButton",
  component: KvIconButton,
  subcomponents: { KvIcon: KvIcon as ComponentType<unknown> },
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
    onClick: fn(),
  },
} satisfies Meta<typeof KvIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const Disabled: Story = {
  render: () => (
    <KvIconButton disabled>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const Small: Story = {
  render: () => (
    <KvIconButton size="small">
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const Large: Story = {
  render: () => (
    <KvIconButton size="large">
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const NoRounded: Story = {
  render: () => (
    <KvIconButton rounded={false}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const NoRoundedSmall: Story = {
  render: () => (
    <KvIconButton size="small" rounded={false}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const NoRoundedLarge: Story = {
  render: () => (
    <KvIconButton size="large" rounded={false}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};