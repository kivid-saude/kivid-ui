import type { Meta, StoryObj } from "@storybook/react";
import { KvSelect } from ".";
import { KvFieldset } from "../KvFieldset";
import { KvLabel } from "../KvLabel";

const meta = {
  title: "Kivid/KvSelect",
  component: KvSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof KvSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <KvFieldset>
      <KvLabel>Selecione uma opção</KvLabel>
      <KvSelect {...args}>
        <option value="">Selecione uma opção</option>
        <option value="option1">Opção 1</option>
        <option value="option2">Opção 2</option>
        <option value="option3">Opção 3</option>
      </KvSelect>
    </KvFieldset>
  ),
};
