import { PropsWithChildren } from "react";
import { KeyColors, MapColors } from "../../types/styles";
import { KvIcon } from "../KvIcon";
import styles from "./style.module.scss";

type TKvAction = {
  label: string;
  color?: KeyColors;
  fill?: "solid" | "outline";
  icon?: string;
  iconColor?: KeyColors;
} & React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren;

export const KvAction = ({
  label,
  color = "light",
  fill = "outline",
  icon,
  iconColor,
  ...props
}: TKvAction) => {
  const classes = [
    styles["kv-action"],
    styles[`kv-action--${fill}`],
    MapColors[color],
  ].join(" ");

  return (
    <div className={classes} {...props}>
      {!!icon && <KvIcon color={iconColor} icon={icon} />}
      {label}
    </div>
  );
};
