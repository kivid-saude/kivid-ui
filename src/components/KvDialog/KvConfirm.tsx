import { ReactNode } from "react";
import { DialogProps, KvDialog } from ".";
import { KvButton } from "../KvButton/KvButton";
import { KvButtons } from "../KvButtons/KvButtons";
import { KvDialogContent } from "./KvDialogContent";
import { KvDialogFooter } from "./KvDialogFooter";
import { KvDialogHeader } from "./KvDialogHeader";

export type ConfirmProps = {
  title?: string | ReactNode;
  message?: string | ReactNode;
  accept?: string;
  cancel?: string;
  onDidDismiss?: (bool?: boolean) => void;
};

export const KvConfirm = ({
  title = "",
  message = "",
  accept = "Confirmar",
  cancel = "Cancelar",
  onDidDismiss,
  ...props
}: ConfirmProps & DialogProps) => {
  return (
    <KvDialog {...props}>
      {title && <KvDialogHeader>{title}</KvDialogHeader>}
      {message && <KvDialogContent>{message}</KvDialogContent>}
      <KvDialogFooter>
        <KvButtons column>
          <KvButton outline centered onClick={() => onDidDismiss?.(false)}>
            {cancel}
          </KvButton>
          <KvButton
            centered
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
