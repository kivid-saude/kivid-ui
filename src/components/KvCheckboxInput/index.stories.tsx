import type { Meta, StoryObj } from "@storybook/react";
import { KvCheckboxInput } from ".";

const meta = {
  title: "Kivid/KvCheckboxInput",
  component: KvCheckboxInput,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {}
} satisfies Meta<typeof KvCheckboxInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "checkbox",
    id: "checkbox"
  }
};

export const NoChecked: Story = {
  args: {
    name: "checkbox",
    id: "checkbox",
    checked: false,
    disabled: true
  }
};

export const Checked: Story = {
  args: {
    name: "checkbox",
    id: "checkbox",
    checked: true,
    disabled: true
  }
};
