import { KvIcon } from "..";
import { KeyColors } from "../../types/styles";
import styles from "./style.module.scss";

type TKvWarning = {
  iconColor?: KeyColors;
  icon: string;
  shape?: "square" | "rect";
  size?: "small" | "medium" | "large";
};

export const KvWarning = ({
  iconColor = "success",
  shape = "rect",
  size = "medium",
  icon,
}: TKvWarning) => {
  const classes = [
    styles["kv-warning"],
    styles[`kv-warning--${shape}`],
    styles[`kv-warning--${shape}--${size}`],
    styles[`kv-warning--${iconColor}`],
  ];

  return (
    <div className={classes.join(" ")}>
      <KvIcon icon={icon} size={size} />
    </div>
  );
};
