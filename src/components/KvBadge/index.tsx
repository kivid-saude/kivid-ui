import { KeyColors, MapColors } from "../../types/styles";
import styles from "./styles.module.scss";

type TKvBadge = {
  color: KeyColors;
  label: string;
  size?: "medium" | "large";
};

export const KvBadge = ({
  label = "",
  color = "tertiary",
  size = "medium",
}: TKvBadge) => {
  return (
    <span className={`${styles.badge} ${MapColors[color]} ${styles[size]}`}>
      {label}
    </span>
  );
};
