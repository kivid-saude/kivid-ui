import { ReactNode } from "react";
import { KvButton, TKvButton } from "../KvButton";
import { KvButtons } from "../KvButtons";
import { DialogProps, KvDialog } from "./KvDialog";
import { KvDialogContent } from "./KvDialogContent";
import { KvDialogFooter } from "./KvDialogFooter";
import { KvDialogHeader } from "./KvDialogHeader";

export type AlertProps = {
  title?: string | ReactNode;
  message?: string | ReactNode;

  buttonLabel?: string;
  buttonProps?: TKvButton;
} & DialogProps;

export const KvAlert = ({
  title,
  message,
  buttonLabel = "OK",
  onDidDismiss,
  buttonProps,
  ...props
}: AlertProps) => {
  return (
    <KvDialog
      {...props}
      dialogContainerStyle={{
        rowGap: message ? 0 : 32,
      }}
    >
      <KvDialogHeader>{title}</KvDialogHeader>
      {!!message && <KvDialogContent>{message}</KvDialogContent>}
      <KvDialogFooter>
        <KvButtons>
          <KvButton
            color="muted"
            onClick={() => onDidDismiss?.()}
            {...buttonProps}
          >
            {buttonLabel}
          </KvButton>
        </KvButtons>
      </KvDialogFooter>
    </KvDialog>
  );
};
