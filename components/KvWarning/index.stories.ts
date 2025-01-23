import type { Meta, StoryObj } from "@storybook/react";
import { KvWarning } from ".";

const meta = {
  title: "Kivid/KvWarning",
  component: KvWarning,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},

  args: {},
} satisfies Meta<typeof KvWarning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "pictogram-check",
  },
};
