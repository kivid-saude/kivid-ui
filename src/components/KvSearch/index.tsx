import React from "react";
import { KvFieldset, KvIcon, KvLabel } from "..";
import { KvIconButton } from "../KvIconButton";
import { KvInput, TKvInput, TKvInputStatus } from "../KvInput";

type TKvSearchStatus = "loading" | "clean";

type TKvSearch = {
  label?: string;
  status?: TKvInputStatus | TKvSearchStatus;
  onClean?: () => void;
} & Omit<TKvInput, "status">;

export const KvSearch = React.forwardRef<HTMLInputElement, TKvSearch>(
  ({ label, status = "idle", onClean, ...props }, ref) => {
    const hasLabel = Boolean(label?.length);

    return (
      <KvFieldset>
        {hasLabel && <KvLabel>{label}</KvLabel>}

        {status === "clean" && (
          <KvIconButton
            type="button"
            disabled={props.disabled}
            color="muted"
            className="slot slot--right pointer-events-none"
            size={hasLabel ? "medium" : "small"}
            rounded={false}
            onClick={onClean}
            shape={hasLabel ? "rect" : "square"}
          >
            <KvIcon icon="close" color="primary" size="medium" />
          </KvIconButton>
        )}

        {status && ["idle", "loading"].includes(status) && (
          <KvIconButton
            type="button"
            disabled={props.disabled}
            color="success"
            className="slot slot--right pointer-events-none"
            loading={status === "loading"}
            size={hasLabel ? "medium" : "small"}
            rounded={false}
            shape={hasLabel ? "rect" : "square"}
          >
            <KvIcon icon="search" color="white" size="medium" />
          </KvIconButton>
        )}

        <KvInput ref={ref} status={status as TKvInputStatus} {...props} />
      </KvFieldset>
    );
  },
);
