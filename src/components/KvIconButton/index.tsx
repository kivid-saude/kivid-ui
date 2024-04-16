import { PropsWithChildren } from "react";
import { KvSpinner } from "../KvSpinner";
import styles from "./style.module.scss";

type TKvIconButton = {
  color?: "tertiary" | "success" | "danger" | "muted";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
} & PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const KvIconButton = ({
  children,
  className = "",
  color = "tertiary",
  size = "medium",
  rounded = true,
  loading,
  ...props
}: TKvIconButton) => {
  const classes = [
    styles["kv-icon-button"],
    styles[`kv-icon-button--${color}`],
    styles[`kv-icon-button--${size}`],
  ];
  if (rounded) classes.push(styles[`kv-icon-button--rounded`]);
  if (loading) classes.push(styles["kv-icon-button--loading"]);

  const content = () => {
    if (loading) {
      return <KvSpinner color={color === "muted" ? "primary" : "white"} />;
    }
    return children;
  };

  return (
    <button className={`${className} ${classes.join(" ")}`} {...props}>
      {content()}
    </button>
  );
};
