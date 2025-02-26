import type { Meta, StoryObj } from "@storybook/react";
import { KvRadioButton } from ".";

const meta = {
  title: "Kivid/KvRadioButton",
  component: KvRadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof KvRadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "radio-default",
    id: "radio-default",
  },
};

export const Checked: Story = {
  args: {
    name: "radio-checked",
    id: "radio-checked",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    name: "radio-not-checked",
    id: "radio-not-checked",
    checked: false,
  },
};

export const UncheckedDisabled: Story = {
  args: {
    name: "radio-not-checked",
    id: "radio-not-checked",
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    name: "radio-not-checked",
    id: "radio-not-checked",
    checked: true,
    disabled: true,
  },
};
