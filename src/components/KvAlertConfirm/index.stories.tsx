import type { Meta, StoryObj } from "@storybook/react";
import { KvAlertConfirm } from ".";
import { AlertConfirmTitleHeader } from "./AlertConfirmTitleHeader";
import { AlertConfirmFooter } from "./AlertConfirmFooter";
import { KvButton } from "..";
import { AlertConfirmHeaderContainer } from "./AlertConfirmHeaderContainer";
import { AlertConfirmHeaderDescription } from "./AlertConfirmHeaderDescription";

const meta = {
  title: "Kivid/KvAlertConfirm",
  component: KvAlertConfirm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof KvAlertConfirm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showModal: true,
  },

  render: (props) => (
    <KvAlertConfirm {...props}>
      <AlertConfirmTitleHeader icon="check" iconColor="success">
        <AlertConfirmHeaderContainer
          primaryText="Meio de pagamento"
          secondarySecondary="alterado com sucesso"
        />

        <AlertConfirmHeaderDescription
          primaryText="Curabitur blandit tempus porttitor."
          secondaryText="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis."
        />
      </AlertConfirmTitleHeader>

      <AlertConfirmFooter>
        <KvButton size="large" color="muted">
          Cancelar
        </KvButton>

        <KvButton size="large" color="success">
          Confirmar
        </KvButton>
      </AlertConfirmFooter>
    </KvAlertConfirm>
  ),
};
