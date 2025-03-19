import { PropsWithChildren } from "react";
import { KeyColors, MapColors } from "../../types/styles";
import styles from "./style.module.scss";

type TKvAction = {
  color?: KeyColors;
  fill?: "solid" | "outline";
} & React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren;

export const KvAction = ({
  children,
  color = "light",
  fill = "outline",
  ...props
}: TKvAction) => {
  const classes = [
    styles["kv-action"],
    styles[`kv-action--${fill}`],
    MapColors[color],
  ].join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
