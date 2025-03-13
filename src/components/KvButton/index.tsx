import { PropsWithChildren } from "react";
import { KvSpinner } from "../KvSpinner";
import styles from "./style.module.scss";

export type TKvButton = {
  color?:
    | "secondary"
    | "tertiary"
    | "success"
    | "danger"
    | "muted"
    | "clear"
    | "medium";
  size?: "small" | "medium" | "large";
  expand?: "block" | "full";
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
} & PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const KvButton = ({
  children,
  className,
  color = "tertiary",
  size = "medium",
  rounded = true,
  expand,
  loading,
  ...props
}: TKvButton) => {
  const classes = [
    styles["kv-button"],
    styles[`kv-button--${size}`],
    styles[`kv-button--${color}`],
  ];
  if (rounded) classes.push(styles[`kv-button--rounded`]);
  if (expand) classes.push(styles[`kv-button--expand-${expand}`]);
  if (loading) classes.push(styles["kv-button--loading"]);

  const content = () => {
    if (loading) {
      return <KvSpinner color={color === "muted" ? "light" : "white"} />;
    }
    return children;
  };

  return (
    <button className={`${classes.join(" ")} ${className}`} {...props}>
      {content()}
    </button>
  );
};
