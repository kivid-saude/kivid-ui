import React from "react";
import { KvIcon } from "../KvIcon";
import { KvLabel } from "../KvLabel";
import styles from "./style.module.scss";

type TKvCheckbox = {
  label?: string;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger";
  onCheckedChange?: (checked: boolean) => void;
};

export const KvCheckbox = React.forwardRef<
  HTMLInputElement,
  TKvCheckbox & React.ComponentProps<"input">
>(
  (
    {
      className,
      onChange,
      onCheckedChange,
      label,
      color = "tertiary",
      ...props
    },
    ref,
  ) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(event.currentTarget.checked);
      onChange?.(event);
    };

    return (
      <div className={styles["kv-checkbox"]}>
        <div
          className={`${styles["kv-checkbox-container"]} ${className}`}
          style={{
            ["--background-checked" as string]: `var(--kv-color-${color})`,
          }}
        >
          <input
            ref={ref}
            type="checkbox"
            className={`${styles["kv-checkbox-input"]}`}
            onChange={handleInputChange}
            {...props}
          />

          {props.checked && (
            <KvIcon
              icon="check"
              color="white"
              size="small"
              className={styles["kv-checkbox-icon"]}
            />
          )}
        </div>

        {label && <KvLabel htmlFor={props.id}>{label}</KvLabel>}
      </div>
    );
  },
);

KvCheckbox.displayName = "KvCheckbox";
