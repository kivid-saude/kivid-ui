import styles from "./styles.module.scss";

import add from "./seal-icon-add.svg";
import alert from "./seal-icon-alert.svg";
import error from "./seal-icon-error.svg";
import neutral from "./seal-icon-neutral.svg";
import next from "./seal-icon-next.svg";
import success from "./seal-icon-success.svg";

export type TKvSeal = {
  mode: "add" | "success" | "error" | "alert" | "neutral" | "next";
  size?: "medium" | "small";
  disabled?: boolean;
  inverted?: boolean;
};

export const KvSeal = ({
  mode,
  size = "medium",
  inverted = false,
  disabled = false,
}: TKvSeal) => {
  const classes = [
    styles["kv-seal"],
    styles[`kv-seal--mode-${mode}`],
    styles[`kv-seal--size-${size}`],
  ];

  inverted && classes.push(styles[`kv-seal--inverted`]);
  disabled && classes.push(styles[`kv-seal--disabled`]);

  const renderIcon = () => {
    switch (mode) {
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
      <svg className={styles["kv-seal--icon"]}>{renderIcon()}</svg>
    </div>
  );
};
