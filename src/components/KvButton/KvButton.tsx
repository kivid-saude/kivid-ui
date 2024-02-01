import { PropsWithChildren } from "react";
import "./kv-button.css";

type TButton = {
  fill?: "solid" | "outline" | "clear";
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
  fill = "solid",
  size = "medium",
  shape,
  expand,
  textAlign,
  iconOnly,
  loading,
  href,
  ...restProps
}: TButton) => {
  const classes = ["kv-button"];

  if (textAlign === "center") classes.push("kv-button--centered");
  if (fill === "outline") classes.push("kv-button--outline");
  if (size === "small") classes.push("kv-button--small");
  if (size === "medium") classes.push("kv-button--medium");
  if (size === "large") classes.push("kv-button--large");
  if (expand === "block") classes.push("kv-button--block");
  if (shape === "round") classes.push("kv-button--rounded");
  if (iconOnly) classes.push("kv-button--icon-only");
  if (loading) classes.push("kv-button--loading");

  if (href) {
    return (
      <a {...restProps} className={`${className} ${classes.join(" ")}`}>
        {children}
      </a>
    );
  }
  return (
    <button {...restProps} className={`${className} ${classes.join(" ")}`}>
      {children}
    </button>
  );
};
