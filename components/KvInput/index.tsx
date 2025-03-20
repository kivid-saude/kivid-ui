import React from "react";
import { KvSeal } from "../KvSeal";
import { KvTooltip, TKvTooltip } from "../KvTooltip";
import styles from "./styles.module.scss";

export type TKvInputStatus = "idle" | "invalid" | "valid";

export type TKvInput = {
  rounded?: boolean;
  status?: TKvInputStatus;
  tooltipProps?: TKvTooltip;
  isSmall?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>;

const KvInput = React.forwardRef<HTMLInputElement, TKvInput>(
  (
    { className = "", rounded = true, status = "idle", tooltipProps, isSmall, ...props },
    ref,
  ) => {
    const classes = [styles["kv-input"]];
    if (rounded) classes.push(styles["kv-input--rounded"]);
    if (status === "invalid") classes.push(styles["kv-input--invalid"]);
    if (className) classes.push(className);
    if (isSmall) classes.push(styles["kv-input--small"])
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
          align="start"
          side="bottom"
          content={tooltipProps?.content}
          open={tooltipProps?.status === "invalid" && !!tooltipProps?.content}
          status={tooltipProps?.status}
          maxWidthAsChild
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
