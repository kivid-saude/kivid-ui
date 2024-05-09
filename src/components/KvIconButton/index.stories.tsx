import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentType } from "react";
import { KvIconButton } from ".";
import { KvIcon } from "../KvIcon";

const meta = {
  title: "Kivid/KvIconButton",
  component: KvIconButton,
  subcomponents: { KvIcon: KvIcon as ComponentType<unknown> },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: {
        xsmall: "xsmall",
        small: "small",
        medium: "medium",
        large: "large",
      },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof KvIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon
        icon="check"
        color={args.color === "muted" ? undefined : "white"}
      />
    </KvIconButton>
  ),
};

export const XSmall: Story = {
  args: {
    size: "xsmall",
  },
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const Small: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const Large: Story = {
  args: {
    size: "large",
  },
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const NoRoundedSmall: Story = {
  args: {
    size: "small",
    rounded: false,
  },
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const NoRoundedMedium: Story = {
  args: {
    size: "medium",
    rounded: false,
  },
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};

export const NoRoundedLarge: Story = {
  args: {
    size: "large",
    rounded: false,
  },
  render: (args) => (
    <KvIconButton {...args}>
      <KvIcon icon="check" color="white" />
    </KvIconButton>
  ),
};