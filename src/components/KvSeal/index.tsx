import { Colors } from "../../types/styles";
import { KvIcon } from "../KvIcon";
import styles from "./styles.module.scss";

type TKvSeal = {
  background?: keyof Colors;
  color?: keyof Colors;
  size?: "lg" | "md" | "sm" | "xs";
  icon: string;
  shape?: "circle" | "rect";
};

export const KvSeal = ({
  background = "medium",
  color = "white",
  size = "md",
  icon,
  shape = "circle",
}: TKvSeal) => {
  return (
    <span
      className={`
        ${styles.seal}
        ${styles[`seal-${shape}-${size}`]}
        ${styles[`seal--background-${background}`]}
        ${styles[`seal--color-${color}`]}
      `}
    >
      <KvIcon icon={icon} />
    </span>
  );
};
