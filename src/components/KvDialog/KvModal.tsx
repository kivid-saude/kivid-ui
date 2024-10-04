import { PropsWithChildren } from "react";
import { KvIcon } from "../KvIcon";
import { DialogProps, KvDialog } from "./KvDialog";
import style from "./styles.module.css";

export type KvModal = DialogProps & {
  hasCloseButton?: boolean;
  onDidDismiss?: (bool?: boolean) => void;
  onClick?: () => void | (() => unknown);
} & PropsWithChildren;

export const KvModal = ({
  children,
  hasCloseButton = true,
  onDidDismiss,
  onClick,
  ...props
}: KvModal) => {
  return (
    <KvDialog
      style={{
        ["--dialog-max-width" as string]: "920px",
        ["--dialog-min-height" as string]: "min(80vh, 496px)",
      }}
      {...props}
    >
      {hasCloseButton && (
        <button
          onClick={onClick ? onClick : () => onDidDismiss?.()}
          className={style["dialog__close-button"]}
        >
          <KvIcon color="white" icon="close" />
        </button>
      )}

      {children}
    </KvDialog>
  );
};
