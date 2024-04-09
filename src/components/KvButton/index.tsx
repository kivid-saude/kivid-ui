import { PropsWithChildren } from "react";
import { KeyColors, MapColors } from "../../types/styles";
import { KvSpinner } from "../KvSpinner";
import styles from "./style.module.scss";

type TButton = {
  color?: KeyColors;
  fill?: "solid" | "outline";
  size?: "small" | "medium" | "large";
  expand?: "block" | "full";
  shape?: "round";
  textAlign?: "center" | "right";
  iconOnly?: boolean;
  loading?: boolean;
  href?: string;
} & PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const KvButton = ({
  children,
  className = "",
  color = "light",
  fill = "outline",
  size = "medium",
  shape,
  expand,
  textAlign,
  iconOnly,
  loading,
  href,
  ...restProps
}: TButton) => {
  const classes = [
    styles["kv-button"],
    styles[`kv-button--${size}`],
    styles[`kv-button--${fill}`],
    MapColors[color],
  ];
  if (shape) classes.push(styles[`kv-button--${shape}`]);
  if (expand) classes.push(styles[`kv-button--${expand}`]);
  if (textAlign === "center") classes.push(styles["kv-button--centered"]);
  if (iconOnly) classes.push(styles["kv-button--icon-only"]);
  if (loading) classes.push(styles["kv-button--loading"]);

  const content = () => {
    if (loading) {
      return <KvSpinner color={color} />;
    }
    return children;
  };

  if (href) {
    return (
      <a {...restProps} className={`${className} ${classes.join(" ")}`}>
        {content()}
      </a>
    );
  }
  return (
    <button {...restProps} className={`${className} ${classes.join(" ")}`}>
      {content()}
    </button>
  );
};
