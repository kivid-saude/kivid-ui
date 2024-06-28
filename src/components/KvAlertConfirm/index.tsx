import { KvDialog } from "..";
import { DialogProps } from "../KvDialog";

import "./kv-alert-confirm.css";

import { ReactNode } from "react";

export type AlertConfirmProps = {
  children?: ReactNode;
} & DialogProps;

export const KvAlertConfirm = ({
  children,
  onDidDismiss,
  ...props
}: AlertConfirmProps) => {
  return (
    <KvDialog {...props} onDidDismiss={onDidDismiss}>
      <div className="kv-alert-confirm-container">{children}</div>
    </KvDialog>
  );
};
