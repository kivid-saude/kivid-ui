import { ReactNode } from "react";
import { DialogProps, KvDialog } from ".";
import { KvButton } from "../KvButton/KvButton";
import { KvButtons } from "../KvButtons/KvButtons";
import { KvDialogContent } from "./KvDialogContent";
import { KvDialogFooter } from "./KvDialogFooter";
import { KvDialogHeader } from "./KvDialogHeader";

export type ConfirmProps = DialogProps & {
  title?: string | ReactNode;
  message?: string | ReactNode;
  accept?: string;
  cancel?: string;
  onDidDismiss?: (bool?: boolean) => void;
};

export const KvConfirm = ({
  title,
  message,
  accept = "Confirmar",
  cancel = "Cancelar",
  onDidDismiss,
  ...props
}: ConfirmProps) => {
  return (
    <KvDialog {...props}>
      <KvDialogHeader>{title}</KvDialogHeader>
      <KvDialogContent>{message}</KvDialogContent>
      <KvDialogFooter>
        <KvButtons column>
          <KvButton outline onClick={() => onDidDismiss?.(false)}>
            {cancel}
          </KvButton>
          <KvButton
            className="kv-color-success"
            onClick={() => onDidDismiss?.(true)}
          >
            {accept}
          </KvButton>
        </KvButtons>
      </KvDialogFooter>
    </KvDialog>
  );
};
