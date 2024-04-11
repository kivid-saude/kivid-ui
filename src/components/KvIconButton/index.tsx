import { PropsWithChildren } from "react";
import { KeyColors, MapColors } from "../../types/styles";
import { KvSpinner } from "../KvSpinner";
import styles from "./style.module.scss";

type TKvIconButton = {
  color?: KeyColors;
  fill?: "solid" | "outline";
  size?: "small" | "medium" | "large";
  shape?: "round";
  loading?: boolean;
  disabled?: boolean;
} & PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const KvIconButton = ({
  children,
  className = "",
  color = "tertiary",
  fill = "solid",
  size = "medium",
  shape,
  loading,
  ...props
}: TKvIconButton) => {
  const classes = [
    styles["kv-icon-button"],
    styles[`kv-icon-button--${size}`],
    styles[`kv-icon-button--${fill}`],
    MapColors[color],
  ];
  if (shape) classes.push(styles[`kv-icon-button--${shape}`]);
  if (loading) classes.push(styles["kv-icon-button--loading"]);

  const content = () => {
    if (loading) {
      return <KvSpinner color={color} />;
    }
    return children;
  };

  return (
    <button className={`${className} ${classes.join(" ")}`} {...props}>
      {content()}
    </button>
  );
};
