import { ReactNode } from "react";
import { DialogProps, KvDialog } from ".";
import { KvButton, TKvButton } from "../KvButton";
import { KvButtons } from "../KvButtons";
import { KvDialogContent } from "./KvDialogContent";
import { KvDialogFooter } from "./KvDialogFooter";
import { KvDialogHeader } from "./KvDialogHeader";

export type ConfirmProps = {
  title?: string | ReactNode;
  message?: string | ReactNode;
  accept?: string;
  cancel?: string;
  cancelButtonProps?: TKvButton;
  confirmButtonProps?: TKvButton;
} & DialogProps;

export const KvConfirm = ({
  title = "",
  message = "",
  accept = "Confirmar",
  cancel = "Cancelar",
  cancelButtonProps,
  confirmButtonProps,
  onDidDismiss,
  ...props
}: ConfirmProps) => {
  return (
    <KvDialog {...props}>
      {title && <KvDialogHeader>{title}</KvDialogHeader>}
      {message && <KvDialogContent>{message}</KvDialogContent>}
      <KvDialogFooter>
        <KvButtons column>
          <KvButton
            color="muted"
            onClick={() => onDidDismiss?.(false)}
            {...cancelButtonProps}
          >
            {cancel}
          </KvButton>
          <KvButton
            color="success"
            onClick={() => onDidDismiss?.(true)}
            {...confirmButtonProps}
          >
            {accept}
          </KvButton>
        </KvButtons>
      </KvDialogFooter>
    </KvDialog>
  );
};
