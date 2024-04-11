import type { Meta, StoryObj } from "@storybook/react";
import { KvRadioInput } from ".";

const meta = {
  title: "Kivid/KvRadioInput",
  component: KvRadioInput,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {}
} satisfies Meta<typeof KvRadioInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "radio-default",
    id: "radio-default"
  }
};

export const Checked: Story = {
  args: {
    name: "radio-checked",
    id: "radio-checked",
    checked: true
  }
};

export const NotChecked: Story = {
  args: {
    name: "radio-not-checked",
    id: "radio-not-checked",
    checked: false
  }
};
