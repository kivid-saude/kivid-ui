import styles from "./styles.module.scss";

import add from "./seal-icon-add.svg";
import alert from "./seal-icon-alert.svg";
import error from "./seal-icon-error.svg";
import neutral from "./seal-icon-neutral.svg";
import next from "./seal-icon-next.svg";
import success from "./seal-icon-success.svg";

export type TKvSeal = {
  variant: "add" | "success" | "error" | "alert" | "neutral" | "next";
  size?: "medium" | "small";
  disabled?: boolean;
  inverted?: boolean;
  className?: string;
};

export const KvSeal = ({
  variant,
  size = "medium",
  inverted = false,
  disabled = false,
  className = "",
}: TKvSeal) => {
  const classes = [
    styles["kv-seal"],
    styles[`kv-seal--variant-${variant}`],
    styles[`kv-seal--size-${size}`],
  ];

  inverted && classes.push(styles[`kv-seal--inverted`]);
  disabled && classes.push(styles[`kv-seal--disabled`]);
  className && classes.push(className);

  const renderIcon = () => {
    switch (variant) {
      case "success":
        return <use href={`${success}#success`} />;
      case "add":
        return <use href={`${add}#add`} />;
      case "error":
        return <use href={`${error}#error`} />;
      case "next":
        return <use href={`${next}#next`} />;
      case "neutral":
        return <use href={`${neutral}#neutral`} />;
      case "alert":
        return <use href={`${alert}#alert`} />;
    }
  };

  return (
    <div className={classes.join(" ")}>
      <svg>{renderIcon()}</svg>
    </div>
  );
};
