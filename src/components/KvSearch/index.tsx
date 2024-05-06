import { KvFieldset, KvIcon, KvLabel, KvSeal } from "..";
import { KvIconButton } from "../KvIconButton";

type TKvSearch = {
  label?: string;
  status: "idle" | "loading" | "error" | "success" | "clean";
  disabled?: boolean;
  onClean?: () => void;
} & React.PropsWithChildren;

export const KvSearch = ({
  label,
  status = "idle",
  disabled = false,
  onClean,
  children,
}: TKvSearch) => {
  const hasLabel = Boolean(label?.length);

  return (
    <KvFieldset>
      {hasLabel && <KvLabel>{label}</KvLabel>}
      {status === "error" && (
        <div className="slot slot--right">
          <KvSeal
            icon="close"
            color="danger"
            size="medium"
            disabled={disabled}
          />
        </div>
      )}
      {status === "success" && (
        <div className="slot slot--right">
          <KvSeal
            icon="check"
            color="success"
            size="medium"
            disabled={disabled}
          />
        </div>
      )}

      {status === "clean" && (
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

      {["idle", "loading"].includes(status) && (
        <KvIconButton
          type="button"
          disabled={disabled}
          color="success"
          className="slot slot--right pointer-events-none"
          loading={status === "loading"}
          size={hasLabel ? "large" : "medium"}
          rounded={false}
          onClick={onClean}
        >
          <KvIcon icon="search" color="white" size="medium" />
        </KvIconButton>
      )}

      {children}
    </KvFieldset>
  );
};
