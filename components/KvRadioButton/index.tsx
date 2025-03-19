import React from "react";
import styles from "./style.module.scss";

type TKVRadioButton = React.InputHTMLAttributes<HTMLInputElement>;

export const KvRadioButton = React.forwardRef<HTMLInputElement, TKVRadioButton>(
  ({ className = "", type = "radio", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`${styles["kv-input-radio"]} ${className}`}
        {...props}
      />
    );
  },
);

KvRadioButton.displayName = "KvRadioButton";
