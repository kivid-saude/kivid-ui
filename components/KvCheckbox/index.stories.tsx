import type { Meta, StoryObj } from "@storybook/react";
import { KvCheckbox } from ".";
import { fn } from "@storybook/test";

const meta = {
  title: "Kivid/KvCheckbox",
  component: KvCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof KvCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "checkbox",
    id: "checkbox",
  },
};

export const UncheckedDisabled: Story = {
  args: {
    name: "checkbox",
    id: "checkbox",
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    name: "checkbox",
    id: "checkbox",
    checked: true,
    disabled: true,
  },
};
