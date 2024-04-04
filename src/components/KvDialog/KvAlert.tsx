import { ReactNode } from "react";
import { KvButton } from "../KvButton";
import { KvButtons } from "../KvButtons";
import { DialogProps, KvDialog } from "./KvDialog";
import { KvDialogContent } from "./KvDialogContent";
import { KvDialogFooter } from "./KvDialogFooter";
import { KvDialogHeader } from "./KvDialogHeader";

export type AlertProps = {
  title?: string | ReactNode;
  message?: string | ReactNode;
} & DialogProps;

export const KvAlert = ({
  message,
  title,
  onDidDismiss,
  ...props
}: AlertProps) => {
  return (
    <KvDialog {...props}>
      <KvDialogHeader>{title}</KvDialogHeader>
      <KvDialogContent>{message}</KvDialogContent>
      <KvDialogFooter>
        <KvButtons>
          <KvButton
            fill="outline"
            textAlign="center"
            onClick={() => onDidDismiss?.()}
          >
            OK
          </KvButton>
        </KvButtons>
      </KvDialogFooter>
    </KvDialog>
  );
};
