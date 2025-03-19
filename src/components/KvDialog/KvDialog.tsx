import React, { useEffect, useRef } from "react";
import { animateClose, animateOpen } from "./animation";
import styles from "./styles.module.css";

export type DialogProps = {
  showModal?: boolean;
  show?: boolean;
  onDidDismiss?: (bool?: boolean) => void;
} & Pick<React.DialogHTMLAttributes<HTMLDialogElement>, "className" | "style"> &
  React.PropsWithChildren;

const handleAnimateClose = async (element: HTMLDialogElement) => {
  const animation = animateClose(element);
  await animation.finished;
  element.close();
};

export const KvDialog = ({
  children,
  showModal = false,
  show = false,
  className = "",
  style,
  onDidDismiss,
}: DialogProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const currentModal = dialog.current;
    if (!currentModal) {
      return;
    }

    if (showModal || show) {
      show ? currentModal.show() : currentModal.showModal();
      animateOpen(currentModal);
    } else if (currentModal.open) {
      handleAnimateClose(currentModal);
    }
  }, [show, showModal]);

  return (
    <dialog
      className={`${styles.dialog} ${className}`}
      ref={dialog}
      style={style}
      onClose={() => onDidDismiss?.()}
    >
      <div className={styles.dialog__container}>{children}</div>
    </dialog>
  );
};
