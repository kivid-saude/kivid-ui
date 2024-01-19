import { PropsWithChildren } from "react";
import { DialogProps, KvDialog } from "./KvDialog";

export type KvModal = DialogProps & {
  onDidDismiss?: (bool?: boolean) => void;
} & PropsWithChildren;

export const KvModal = ({ children, onDidDismiss, ...props }: KvModal) => {
  return (
    <KvDialog
      {...props}
      style={{
        ["--dialog-max-width" as string]: "920px",
        ["--dialog-min-height" as string]: "496px",
      }}
    >
      <button
        onClick={() => onDidDismiss?.()}
        style={{ position: "absolute", top: "1rem", right: "1rem" }}
      >
        &times;
      </button>

      {children}
    </KvDialog>
  );
};
