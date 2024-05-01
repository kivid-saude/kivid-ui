import { ReactNode } from "react";
import { KvFieldset, KvIcon, KvLabel, KvSeal } from "..";
import { KvIconButton } from "../KvIconButton";

type TKvSearch = {
  label?: string;
  searchStatus: "loading" | "error" | "success" | "idle" | "clean";
  disabled?: boolean;
  onCleanSearch?: () => void;
  children?: ReactNode;
};

export const KvSearch = ({
  label,
  searchStatus = "idle",
  disabled = false,
  onCleanSearch,
  children,
}: TKvSearch) => {
  const hasLabel = Boolean(label?.length);

  return (
    <KvFieldset>
      {hasLabel && <KvLabel>{label}</KvLabel>}
      {searchStatus === "error" && (
        <div className="slot slot--right">
          <KvSeal
            icon="close"
            color="danger"
            size="medium"
            disabled={disabled}
          />
        </div>
      )}
      {searchStatus === "success" && (
        <div className="slot slot--right">
          <KvSeal
            icon="check"
            color="success"
            size="medium"
            disabled={disabled}
          />
        </div>
      )}

      {searchStatus === "clean" && (
        <KvIconButton
          type="button"
          disabled={disabled}
          color="muted"
          className="slot slot--right pointer-events-none"
          size={hasLabel ? "large" : "medium"}
          rounded={false}
        >
          <KvIcon icon="close" color="primary" size="medium" />
        </KvIconButton>
      )}

      {["idle", "loading"].includes(searchStatus) && (
        <KvIconButton
          type="button"
          disabled={disabled}
          color="success"
          className="slot slot--right pointer-events-none"
          loading={searchStatus === "loading"}
          size={hasLabel ? "large" : "medium"}
          rounded={false}
          onClick={onCleanSearch}
        >
          <KvIcon icon="search" color="white" size="medium" />
        </KvIconButton>
      )}

      {children}
    </KvFieldset>
  );
};
