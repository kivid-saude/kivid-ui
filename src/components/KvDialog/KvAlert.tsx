import { ReactNode } from "react";
import { KvButton } from "../KvButton/KvButton";
import { KvButtons } from "../KvButtons/KvButtons";
import { DialogProps, KvDialog } from "./KvDialog";
import { KvDialogContent } from "./KvDialogContent";
import { KvDialogFooter } from "./KvDialogFooter";
import { KvDialogHeader } from "./KvDialogHeader";

export type AlertProps = {
  title?: string | ReactNode;
  message?: string | ReactNode;
};

export const KvAlert = ({
  message,
  title,
  onDidDismiss,
  ...props
}: AlertProps & DialogProps) => {
  return (
    <KvDialog {...props}>
      <KvDialogHeader>{title}</KvDialogHeader>
      <KvDialogContent>{message}</KvDialogContent>
      <KvDialogFooter>
        <KvButtons>
          <KvButton centered onClick={() => onDidDismiss?.()}>
            OK
          </KvButton>
        </KvButtons>
      </KvDialogFooter>
    </KvDialog>
  );
};
