import React from "react";
import { KvSeal } from "../KvSeal";
import { KvTooltip, TKvTooltip } from "../KvTooltip";
import styles from "./styles.module.scss";

export type TKvInputStatus = "idle" | "invalid" | "valid";

export type TKvInput = {
  invalidMessage?: string;
  rounded?: boolean;
  status?: TKvInputStatus;
  tooltipProps?: Pick<TKvTooltip, "hasPortal">;
} & React.InputHTMLAttributes<HTMLInputElement>;

const KvInput = React.forwardRef<HTMLInputElement, TKvInput>(
  (
    {
      className = "",
      invalidMessage = "",
      rounded = true,
      status = "idle",
      tooltipProps,
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
            variant="error"
            size="medium"
            disabled={props.disabled}
          />
        )}

        {status === "valid" && (
          <KvSeal
            className="slot slot--right"
            variant="success"
            size="medium"
            disabled={props.disabled}
          />
        )}

        <KvTooltip
          content={invalidMessage}
          open={status === "invalid" && !!invalidMessage}
          align="start"
          side="bottom"
          status={status === "invalid" ? status : undefined}
          {...tooltipProps}
        >
          <input className={computedClasses} type="text" ref={ref} {...props} />
        </KvTooltip>
      </>
    );
  },
);

KvInput.displayName = "KvInput";

export { KvInput };
