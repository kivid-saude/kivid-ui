import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { KvChip } from ".";

const meta = {
  title: "Kivid/KvChip",
  component: KvChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof KvChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    variant: "neutral",
  },
  render: (args) => <KvChip {...args} />,
};

export const MediumOutline: Story = {
  args: {
    size: "medium",
    variant: "neutral",
    fill: "outline",
    label: "Label",
  },
};
export const LargeOutline: Story = {
  args: {
    size: "large",
    variant: "neutral",
    fill: "outline",
    label: "Label",
  },
};
export const MediumSolid: Story = {
  args: {
    size: "medium",
    variant: "neutral",
    fill: "solid",
    label: "Label",
  },
};
export const LargeSolid: Story = {
  args: {
    size: "large",
    variant: "neutral",
    fill: "solid",
    label: "Label",
  },
};
