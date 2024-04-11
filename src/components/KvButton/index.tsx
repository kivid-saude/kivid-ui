import { PropsWithChildren } from "react";
import { KvSpinner } from "../KvSpinner";
import styles from "./style.module.scss";

type TKvButton = {
  color?: "tertiary" | "success" | "danger" | "muted";
  size?: "small" | "medium" | "large";
  expand?: "block" | "full";
  shape?: "default" | "round";
  loading?: boolean;
  disabled?: boolean;
} & PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const KvButton = ({
  children,
  className,
  color = "tertiary",
  size = "medium",
  shape = "default",
  expand,
  loading,
  ...props
}: TKvButton) => {
  const classes = [
    styles["kv-button"],
    styles[`kv-button--${size}`],
    styles[`kv-button--${color}`],
    styles[`kv-button--${shape}`],
  ];
  if (expand) classes.push(styles[`kv-button--expand-${expand}`]);
  if (loading) classes.push(styles["kv-button--loading"]);

  const content = () => {
    if (loading) {
      return <KvSpinner color={`white`} />;
    }
    return children;
  };

  return (
    <button className={`${classes.join(" ")} ${className}`} {...props}>
      {content()}
    </button>
  );
};
