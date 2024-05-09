import React from "react";
import { KvSeal } from "../KvSeal";
import { KvTooltip } from "../KvTooltip";
import styles from "./styles.module.scss";

export type TKvInputStatus = "idle" | "invalid" | "valid";

export type TKvInput = {
  invalidMessage?: string;
  rounded?: boolean;
  status?: TKvInputStatus;
} & React.InputHTMLAttributes<HTMLInputElement>;

const KvInput = React.forwardRef<HTMLInputElement, TKvInput>(
  (
    {
      className = "",
      invalidMessage = "",
      rounded = true,
      status = "idle",
      ...props
    },
    ref,
  ) => {
    const classes = [styles["kv-input"]];
    if (rounded) classes.push(styles["kv-input--rounded"]);
    if (status === "invalid") classes.push(styles["kv-input--invalid"]);
    if (className) classes.push(className);
    const computedClasses = classes.join(" ");

    return (
      <>
        {status === "invalid" && (
          <KvSeal
            className="slot slot--right"
            icon="close"
            color="danger"
            size="medium"
            disabled={props.disabled}
          />
        )}

        {status === "valid" && (
          <KvSeal
            className="slot slot--right"
            icon="check"
            color="success"
            size="medium"
            disabled={props.disabled}
          />
        )}

        <KvTooltip
          content={invalidMessage}
          open={!!invalidMessage}
          align="start"
          side="bottom"
          status={status === "invalid" ? status : undefined}
        >
          <input className={computedClasses} type="text" ref={ref} {...props} />
        </KvTooltip>
      </>
    );
  },
);

KvInput.displayName = "KvInput";

export { KvInput };
