import React, { useState } from "react";
import styles from "./style.module.scss";
import { KvIcon } from "../KvIcon";

type TKvCheckbox = React.InputHTMLAttributes<HTMLInputElement>;

export const KvCheckbox = React.forwardRef<HTMLInputElement, TKvCheckbox>(
  ({ className = "", onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(props.checked ?? false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);

      onChange?.(event);
    };

    return (
      <div className={`${styles["kv-input-container"]} ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          id={props.id}
          className={`${styles["kv-checkbox-input"]}`}
          onChange={handleInputChange}
          {...props}
        />

        {isChecked && (
          <KvIcon
            icon="check"
            color="white"
            size="small"
            className={styles["kv-checkbox-icon"]}
          />
        )}
      </div>
    );
  },
);

KvCheckbox.displayName = "KvCheckbox";
