import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { KvButton } from ".";
import { KvIcon } from "../KvIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Kivid/KvButton",
  component: KvButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof KvButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <KvButton {...args}>Button</KvButton>,
};

export const Medium: Story = {
  render: () => <KvButton size="medium">Button</KvButton>,
};

export const Small: Story = {
  render: () => <KvButton size="small">Button</KvButton>,
};

export const Large: Story = {
  render: () => <KvButton size="large">Button</KvButton>,
};

export const Tertiary: Story = {
  render: () => <KvButton color="tertiary">Button</KvButton>,
};

export const Success: Story = {
  render: () => <KvButton color="success">Button</KvButton>,
};

export const Danger: Story = {
  render: () => <KvButton color="danger">Button</KvButton>,
};

export const Muted: Story = {
  render: () => <KvButton color="muted">Button</KvButton>,
};

export const Clear: Story = {
  render: () => <KvButton color="clear">Button</KvButton>,
};

export const Disabled: Story = {
  render: () => <KvButton disabled>Button</KvButton>,
};

export const NoRounded: Story = {
  render: () => <KvButton rounded={false}>Button</KvButton>,
};

export const Block: Story = {
  render: () => (
    <KvButton color="tertiary" expand="block">
      Button
    </KvButton>
  ),
};

export const Full: Story = {
  render: () => (
    <KvButton color="tertiary" expand="full" rounded={false}>
      Button
    </KvButton>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <KvButton>
      <KvIcon icon="check" color="white" />
      Button
    </KvButton>
  ),
};
