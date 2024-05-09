import { KvSpinner } from "../KvSpinner";
import styles from "./style.module.scss";

type TKvIconButton = {
  color?: "tertiary" | "success" | "danger" | "muted";
  size?: "xsmall" | "small" | "medium" | "large";
  shape?: "square" | "rect";
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren;

export const KvIconButton = ({
  children,
  className = "",
  color = "tertiary",
  size = "medium",
  shape = "square",
  rounded = true,
  loading,
  ...props
}: TKvIconButton) => {
  const classes = [
    styles["kv-icon-button"],
    styles[`kv-icon-button--${color}`],
    styles[`kv-icon-button--${size}`],
    styles[`kv-icon-button--${shape}`],
  ];
  if (rounded) classes.push(styles["kv-icon-button--rounded"]);
  if (loading) classes.push(styles["kv-icon-button--loading"]);
  if (className) classes.push(className);

  const renderContent = () => {
    if (loading) {
      return <KvSpinner color={color === "muted" ? "light" : "white"} />;
    }
    return children;
  };

  return (
    <button className={classes.join(" ")} {...props}>
      {renderContent()}
    </button>
  );
};
