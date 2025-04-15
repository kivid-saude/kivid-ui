import type { Meta, StoryObj } from "@storybook/react";
import { KvTooltip } from ".";
import { KvFieldset } from "../KvFieldset";
import { KvInput } from "../KvInput";

const meta = {
  title: "Kivid/KvTooltip",
  component: KvTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      defaultValue: "idle",
      control: "radio",
      options: ["idle", "invalid"],
    },
    align: {
      control: "radio",
      options: ["start", "end", "center"],
    },
    side: {
      control: "radio",
      options: ["top", "bottom"],
    },
  },
  args: {
    content: "Tooltip text",
  },
} satisfies Meta<typeof KvTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <KvTooltip {...args}>
      <span>Hover me to show tooltip</span>
    </KvTooltip>
  ),
};

export const Invalid: Story = {
  args: {
    status: "invalid",
  },
  render: (args) => (
    <KvTooltip {...args}>
      <KvFieldset>
        <KvInput
          status="invalid"
          invalidMessage="Campo obrigatório"
          placeholder="Digite seu nome"
        />
      </KvFieldset>
    </KvTooltip>
  ),
};
