import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { KvOtp } from ".";

const meta = {
  title: "Kivid/KvOtp",
  component: KvOtp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["idle", "loading", "valid", "invalid"],
      control: {
        type: "radio",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    disableTryAgain: {
      control: {
        type: "boolean",
      },
    },
    handleResendToken: {
      action: "handleResendToken",
    },
  },
  args: {
    handleResendToken: fn(),
    placeholder: "______",
    status: "idle",
    invalidMessage: "Código não confere",
  },
} satisfies Meta<typeof KvOtp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <KvOtp {...args} />,
};
