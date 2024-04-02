import { Colors, MapColors } from "../../types/styles";
import styles from "./styles.module.scss";

type TKvIcon = {
  icon: string;
  color?: keyof Colors;
  size?: "large" | "medium" | "small" | "xsmall";
} & React.SVGProps<SVGSVGElement>;

const iconsPath = "/kivid-icons/sprites.svg";

export const KvIcon = ({
  icon,
  color = "primary",
  className = "",
  size = "medium",
  ...props
}: TKvIcon) => {
  const classes = [
    styles["kv-icon"],
    styles[`kv-icon--size-${size}`],
    className,
    MapColors[color],
  ].join(" ");

  return (
    <svg className={classes} {...props}>
      <use href={`${iconsPath}#${icon}`} />
    </svg>
  );
};
