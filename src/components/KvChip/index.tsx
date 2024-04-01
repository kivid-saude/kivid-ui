import { Colors, MapColors } from "../../types/styles";
import { KvSeal } from "../KvSeal";
import styles from "./styles.module.scss";

interface KvChipProps {
  label: string;
  color: keyof Colors;
  size: "large" | "medium" | "small";
  fill?: "solid" | "outline";
  icon?: string;
  iconColor?: keyof Colors;
}

export const KvChip = ({
  size,
  label,
  color = "light",
  fill = "outline",
  icon,
  iconColor = "white",
}: KvChipProps) => {
  const classes = [
    styles.chip,
    styles[`chip--${size}`],
    styles[`chip--${fill}`],
    MapColors[color],
  ].join(" ");

  const sealSize = () => {
    switch (size) {
      case "large":
        return "small";
      case "medium":
        return "small";
      case "small":
        return "xsmall";
      default:
        return undefined;
    }
  };

  return (
    <div className={classes}>
      {!!icon && <KvSeal size={sealSize()} icon={icon} color={iconColor} />}

      <span>{label}</span>
    </div>
  );
};
