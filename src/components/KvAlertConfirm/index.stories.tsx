import type { Meta, StoryObj } from "@storybook/react";
import { KvAlertConfirm } from ".";
import { AlertConfirmTitleHeader } from "./AlertConfirmTitleHeader";
import { AlertConfirmFooter } from "./AlertConfirmFooter";
import { KvButton, KvFieldset, KvPasswordInput } from "..";
import { AlertConfirmContent } from "./KvAlertConfirmContent";

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
      <AlertConfirmTitleHeader icon="close" iconColor="danger">
        <p>
          Excluir <strong>conta</strong>
        </p>

        <p
          style={{
            marginTop: ".5rem",
            fontSize: "12px",
            lineHeight: "1rem",
          }}
        >
          <p>Tem certeza que deseja excluir sua conta?</p>
          <p>Para continuar, digite sua senha.</p>
        </p>
      </AlertConfirmTitleHeader>

      <AlertConfirmContent>
        <KvFieldset>
          <KvPasswordInput />
        </KvFieldset>
      </AlertConfirmContent>

      <AlertConfirmFooter>
        <KvButton size="large" color="muted">
          Cancelar
        </KvButton>

        <KvButton size="large" color="danger">
          Confirmar
        </KvButton>
      </AlertConfirmFooter>
    </KvAlertConfirm>
  ),
};
