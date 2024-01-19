import { PropsWithChildren } from "react";
import style from "../KvDialog/styles.module.css";
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
        className={style["dialog__close-button"]}
      >
        &times;
      </button>

      {children}
    </KvDialog>
  );
};
