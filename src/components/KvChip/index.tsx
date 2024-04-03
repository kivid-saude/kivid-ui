import { KeyColors, MapColors } from "../../types/styles";
import { KvSeal } from "../KvSeal";
import styles from "./styles.module.scss";

type TKvChip = {
  label: string;
  color?: KeyColors;
  size?: "large" | "medium" | "small";
  fill?: "solid" | "outline";
  icon?: string;
  iconColor?: KeyColors;
};

export const KvChip = ({
  label,
  color = "light",
  size = "medium",
  fill = "outline",
  icon,
  iconColor,
}: TKvChip) => {
  const classes = [
    styles["kv-chip"],
    styles[`kv-chip--size-${size}`],
    styles[`kv-chip--fill-${fill}`],
    icon ? styles[`kv-chip--with-icon`] : "",
    MapColors[color],
  ].join(" ");

  const sealSize = () => {
    switch (size) {
      case "large":
      case "medium":
        return "small";
      case "small":
        return "xsmall";
    }
  };

  return (
    <div className={classes}>
      {!!icon && <KvSeal size={sealSize()} icon={icon} color={iconColor} />}

      <span>{label}</span>
    </div>
  );
};
