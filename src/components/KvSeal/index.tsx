import { Colors, MapColors } from "../../types/styles";
import { KvIcon } from "../KvIcon";
import styles from "./styles.module.scss";

type TKvSeal = {
  color?: keyof Colors;
  size?: "large" | "medium" | "small" | "xsmall";
  icon: string;
  shape?: "circle" | "rect";
};

export const KvSeal = ({
  color = "white",
  size = "medium",
  icon,
  shape = "circle",
}: TKvSeal) => {
  return (
    <span
      className={`
        ${styles.seal}
        ${styles[`seal-${shape}-${size}`]}
        ${MapColors[color]}
      `}
    >
      <KvIcon className={styles["seal__icon"]} icon={icon} />
    </span>
  );
};
