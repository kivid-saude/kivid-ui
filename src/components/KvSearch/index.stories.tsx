import type { Meta, StoryObj } from "@storybook/react";

import { KvSearch } from ".";
import { KvInput } from "..";

const meta = {
  title: "Kivid/KvSearch",
  component: KvSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {},
  args: {},
} satisfies Meta<typeof KvSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchStatus: "idle",
  },
  render: ({ searchStatus, disabled, ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args} searchStatus={searchStatus} disabled={disabled}>
        <KvInput
          type="text"
          placeholder={searchStatus !== "error" ? searchStatus : ""}
          value={searchStatus === "error" ? "Sua busca falhou" : ""}
          errorMessage={searchStatus === "error" ? "Sua busca falhou" : ""}
          disabled={disabled}
        />
      </KvSearch>
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    searchStatus: "idle",
  },
  render: ({ ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args} label="Label">
        <KvInput type="text" placeholder="placeholder" value="Input" />
      </KvSearch>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    searchStatus: "loading",
  },
  render: ({ ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args}>
        <KvInput type="text" placeholder="placeholder" value="Input" />
      </KvSearch>
    </div>
  ),
};

export const Clean: Story = {
  args: {
    searchStatus: "clean",
  },
  render: ({ ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args}>
        <KvInput type="text" placeholder="placeholder" value="Input" />
      </KvSearch>
    </div>
  ),
};

export const Success: Story = {
  args: {
    searchStatus: "success",
  },
  render: ({ ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args}>
        <KvInput type="text" placeholder="placeholder" value="Input" />
      </KvSearch>
    </div>
  ),
};

export const Error: Story = {
  args: {
    searchStatus: "error",
  },
  render: ({ ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args}>
        <KvInput
          type="text"
          placeholder="placeholder"
          value="Input"
          errorMessage="Sua busca falhou"
        />
      </KvSearch>
    </div>
  ),
};

export const WithLabelAndError: Story = {
  args: {
    searchStatus: "error",
  },
  render: ({ ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args} label="label">
        <KvInput
          type="text"
          placeholder="placeholder"
          value="Input"
          errorMessage="Sua busca falhou"
        />
      </KvSearch>
    </div>
  ),
};

export const ErrorDisabled: Story = {
  args: {
    searchStatus: "error",
    disabled: true,
  },
  render: ({ disabled, ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args}>
        <KvInput
          type="text"
          placeholder="placeholder"
          value="Input"
          errorMessage="Sua busca falhou"
          disabled={disabled}
        />
      </KvSearch>
    </div>
  ),
};

export const DefaultDisabled: Story = {
  args: {
    searchStatus: "idle",
    disabled: true,
  },
  render: ({ disabled, ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args}>
        <KvInput
          type="text"
          placeholder="placeholder"
          value="Input"
          disabled={disabled}
        />
      </KvSearch>
    </div>
  ),
};

export const DefaultWithSmallRounded: Story = {
  args: {
    searchStatus: "idle",
  },
  render: ({ ...args }) => (
    <div style={{ width: "23rem" }}>
      <KvSearch {...args}>
        <KvInput
          type="search"
          placeholder="placeholder"
          value="Input"
          fullRounded={false}
        />
      </KvSearch>
    </div>
  ),
};
