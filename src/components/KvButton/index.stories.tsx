import type { Meta, StoryObj } from "@storybook/react";
import { KvButton } from ".";
import { KvIcon } from "../KvIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Kivid/KvButton",
  component: KvButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn()
  },
} satisfies Meta<typeof KvButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => <KvButton {...args}>Button</KvButton>,
};

export const WithIcon: Story = {
  render: () => (
    <KvButton>
      <KvIcon icon="check" />
      Button
    </KvButton>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <KvButton iconOnly>
      <KvIcon icon="check" />
    </KvButton>
  ),
};
