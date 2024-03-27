import { PropsWithChildren } from "react";
import { Colors } from "../../types/styles";
import styles from "./styles.module.scss";

type TKvBadge = {
  background?: keyof Colors;
  color: keyof Colors;
} & PropsWithChildren;

export const KvBadge = ({
  children,
  background = "medium",
  color,
}: TKvBadge) => {
  return (
    <span
      className={`
        ${styles.badge}
        ${styles[`badge--background-${background}`]}
        ${styles[`badge--color-${color}`]}
      `}
    >
      {children}
    </span>
  );
};
