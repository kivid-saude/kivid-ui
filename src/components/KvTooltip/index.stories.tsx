import type { Meta, StoryObj } from "@storybook/react";
import { KvTooltip } from ".";

const meta = {
  title: "Kivid/KvTooltip",
  component: KvTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      // control: "select",
      options: {
        start: "start",
        end: "end",
        center: "center",
      },
    },
  },
  args: {},
} satisfies Meta<typeof KvTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // open: true,
    content: "Tooltip text",
  },
  render: (args) => (
    <KvTooltip {...args}>
      <span>Hover me</span>
    </KvTooltip>
  ),
};

export const Invalid: Story = {
  args: {
    // open: true,
    content: "Tooltip text",
    status: "invalid",
  },
  render: (args) => (
    <KvTooltip {...args}>
      <span>Hover me</span>
    </KvTooltip>
  ),
};
