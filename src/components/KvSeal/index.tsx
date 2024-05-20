import styles from "./styles.module.scss";

import add from "./seal-icon-add.svg?raw";
import alert from "./seal-icon-alert.svg?raw";
import error from "./seal-icon-error.svg?raw";
import neutral from "./seal-icon-neutral.svg?raw";
import next from "./seal-icon-next.svg?raw";
import success from "./seal-icon-success.svg?raw";

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
        return success;
      case "add":
        return add;
      case "error":
        return error;
      case "next":
        return next;
      case "neutral":
        return neutral;
      case "alert":
        return alert;
    }
  };

  return (
    <div
      className={classes.join(" ")}
      dangerouslySetInnerHTML={{ __html: renderIcon() }}
    ></div>
  );
};
