import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { KvSearch } from "./";

const meta = {
  title: "Kivid/KvSearch",
  component: KvSearch,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "radio",
      },
      options: ["idle", "clean", "loading", "valid", "invalid"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    onClean: {
      action: "onClean",
    },
    invalidMessage: {
      control: {
        type: "text",
      },
    },
  },
  args: {},
} satisfies Meta<typeof KvSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const Loading: Story = {
  args: {
    status: "loading",
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const Clean: Story = {
  args: {
    status: "clean",
    onClean: fn(),
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const Valid: Story = {
  args: {
    status: "valid",
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const Invalid: Story = {
  args: {
    status: "invalid",
    invalidMessage: "Campo obrigatório",
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const LoadingWithLabel: Story = {
  args: {
    label: "Label",
    status: "loading",
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const CleanWithLabel: Story = {
  args: {
    label: "Label",
    status: "clean",
    onClean: fn(),
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const ValidWithLabel: Story = {
  args: {
    label: "Label",
    status: "valid",
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};

export const InvalidWithLabel: Story = {
  args: {
    label: "Label",
    status: "invalid",
    invalidMessage: "Campo obrigatório",
  },
  render: (args) => <KvSearch placeholder="Digite sua busca" {...args} />,
};
