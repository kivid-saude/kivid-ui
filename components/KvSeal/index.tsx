import styles from "./styles.module.scss";

import { SealIconAdd } from "./SealIconAdd";
import { SealIconAlert } from "./SealIconAlert";
import { SealIconError } from "./SealIconError";
import { SealIconNeutral } from "./SealIconNeutral";
import { SealIconNext } from "./SealIconNext";
import { SealIconSuccess } from "./SealIconSuccess";

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
        return <SealIconSuccess />;
      case "add":
        return <SealIconAdd />;
      case "error":
        return <SealIconError />;
      case "next":
        return <SealIconNext />;
      case "neutral":
        return <SealIconNeutral />;
      case "alert":
        return <SealIconAlert />;
    }
  };

  return <div className={classes.join(" ")}>{renderIcon()}</div>;
};
