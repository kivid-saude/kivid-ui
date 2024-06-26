import type { Meta, StoryObj } from "@storybook/react";
import { KvInput } from ".";
import { KvFieldset } from "../KvFieldset";
import { KvLabel } from "../KvLabel";

const meta = {
  title: "Kivid/KvInput",
  component: KvInput,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "radio",
      },
      options: ["idle", "invalid", "valid"],
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    tooltipProps: {
      hasPortal: true,
      content: "",
      status: "idle",
    },
  },
} satisfies Meta<typeof KvInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <KvFieldset>
      <KvInput placeholder="Digite aqui" {...args} />
    </KvFieldset>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <KvFieldset>
      <KvInput placeholder="Digite aqui" {...args} />
    </KvFieldset>
  ),
};

export const Valid: Story = {
  args: {
    status: "valid",
  },
  render: (args) => (
    <KvFieldset>
      <KvInput placeholder="Digite aqui" {...args} />
    </KvFieldset>
  ),
};

export const Invalid: Story = {
  args: {
    status: "invalid",
    tooltipProps: {
      content: "Campo obrigatório",
      status: "invalid",
    },
  },
  render: (args) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      <KvFieldset>
        <KvInput placeholder="Digite aqui" {...args} />
      </KvFieldset>
      <KvFieldset>
        <KvInput placeholder="Digite aqui" {...args} />
      </KvFieldset>
    </div>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <KvFieldset>
      <KvLabel>Label</KvLabel>
      <KvInput placeholder="Digite aqui" {...args} />
    </KvFieldset>
  ),
};

export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <KvFieldset>
      <KvLabel>Label</KvLabel>
      <KvInput placeholder="Digite aqui" {...args} />
    </KvFieldset>
  ),
};

export const ValidWithLabel: Story = {
  args: {
    status: "valid",
  },
  render: (args) => (
    <KvFieldset>
      <KvLabel>Label</KvLabel>
      <KvInput placeholder="Digite aqui" {...args} />
    </KvFieldset>
  ),
};

export const InvalidWithLabel: Story = {
  args: {
    status: "invalid",
    tooltipProps: {
      content: "Campo obrigatório",
      status: "invalid",
      hasPortal: false,
    },
  },
  render: (args) => (
    <KvFieldset>
      <KvLabel>Label</KvLabel>
      <KvInput placeholder="Digite aqui" {...args} />
    </KvFieldset>
  ),
};
