import type { Meta, StoryObj } from "@storybook/react";
import { KvPasswordInput } from ".";
import { KvFieldset } from "../KvFieldset";
import { KvLabel } from "../KvLabel";

const meta = {
  title: "Kivid/KvPasswordInput",
  component: KvPasswordInput,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof KvPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <KvFieldset>
      <KvLabel>Senha</KvLabel>
      <KvPasswordInput placeholder="Digite sua senha" {...args} />
    </KvFieldset>
  ),
};
