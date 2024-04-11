import React from "react";
import styles from "./style.module.scss";

type TInput = React.InputHTMLAttributes<HTMLInputElement>;

export const KvRadioInput = React.forwardRef<HTMLInputElement, TInput>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="radio"
        id={props.id}
        className={`${styles["kv-input-radio"]} ${className}`}
        {...props}
      />
    );
  }
);

KvRadioInput.displayName = "KvRadio";
