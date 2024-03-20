import { ReactNode } from "react";
import { Colors } from "../../types/styles";
import styles from "./styles.module.scss";

interface SealProps {
  backgroundColor: keyof Colors;
  contentColor: keyof Colors;
  size: "lg" | "md" | "sm" | "xs";
  children?: ReactNode;
  content?: number | string;
}

export const KvSeal = ({
  backgroundColor,
  contentColor,
  size,
  children,
  content,
}: SealProps) => {
  return (
    <span
      className={`
        ${styles.seal}
        ${styles[size]}
        ${styles[`sealBackgroundColor-${backgroundColor}`]}
        ${styles[`sealColor-${contentColor}`]}
      `}
    >
      {children ? children : content}
    </span>
  );
};
