import { PropsWithChildren } from "react";
import { KvIcon } from "../KvIcon";
import { DialogProps, KvDialog } from "./KvDialog";
import style from "./styles.module.css";

export type KvModal = DialogProps & {
  onDidDismiss?: (bool?: boolean) => void;
} & PropsWithChildren;

export const KvModal = ({ children, onDidDismiss, ...props }: KvModal) => {
  return (
    <KvDialog
      style={{
        ["--dialog-max-width" as string]: "920px",
        ["--dialog-min-height" as string]: "496px",
        margin: "10vh auto",
        maxHeight: "80vh",
      }}
      {...props}
    >
      <button
        onClick={() => onDidDismiss?.()}
        className={style["dialog__close-button"]}
      >
        <KvIcon icon="close" />
      </button>

      {children}
    </KvDialog>
  );
};
