import { KeyColors, MapColors } from "../../types/styles";
import { KvIcon } from "../KvIcon";
import styles from "./styles.module.scss";

type TKvSeal = {
  color?: KeyColors;
  size?: "large" | "medium" | "small" | "xsmall";
  shape?: "circle" | "rect";
  icon: string;
};

export const KvSeal = ({
  color = "medium",
  size = "large",
  shape = "circle",
  icon,
}: TKvSeal) => {
  const iconSize = () => {
    switch (size) {
      case "large":
        return "medium";
      case "medium":
        return "small";
      case "small":
      case "xsmall":
        return "xsmall";
    }
  };

  const classes = [
    styles["kv-seal"],
    styles[`kv-seal--size-${size}`],
    styles[`kv-seal--shape-${shape}`],
    MapColors[color],
  ].join(" ");

  return (
    <div className={classes}>
      <KvIcon
        className={styles["kv-seal__icon"]}
        size={iconSize()}
        icon={icon}
      />
    </div>
  );
};
