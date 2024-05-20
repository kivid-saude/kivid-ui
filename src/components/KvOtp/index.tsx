import React from "react";
import { KvButton } from "../KvButton";
import { KvChip } from "../KvChip";
import kvInputStyles from "../KvInput/styles.module.scss";
import KvSpinner from "../KvSpinner";
import { KvTooltip } from "../KvTooltip";
import styles from "./styles.module.scss";

type TKvOTPInput = {
  status?: "idle" | "loading" | "valid" | "invalid";
  invalidMessage?: string;
  disableTryAgain?: boolean;
  handleResendToken?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const KvOtp = React.forwardRef<HTMLInputElement, TKvOTPInput>(
  (
    {
      className = "",
      invalidMessage = "Código não confere",
      status = "idle",
      handleResendToken,
      disableTryAgain,
      ...props
    },
    ref,
  ) => {
    return (
      <div style={{ display: "grid", gap: "1rem", justifyItems: "center" }}>
        <KvTooltip
          open={status === "invalid" && !!invalidMessage}
          content={invalidMessage}
          status={status === "invalid" ? "invalid" : undefined}
        >
          <input
            className={`
            ${styles["kv-otp"]}
            ${kvInputStyles["kv-input"]}
            ${kvInputStyles[`kv-input--${status}`]}
            ${className}
            `}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            pattern="\d{6}"
            placeholder="______"
            ref={ref}
            {...props}
          />
        </KvTooltip>

        {["idle", "invalid"].includes(status) && (
          <KvButton
            type="button"
            color="muted"
            onClick={() => handleResendToken?.()}
            disabled={disableTryAgain}
          >
            Reenviar Código
          </KvButton>
        )}

        {["loading"].includes(status) && <KvSpinner color="light" />}

        {["valid"].includes(status) && (
          <KvChip label="Confirmado" variant="success" />
        )}
      </div>
    );
  },
);

KvOtp.displayName = "KvOtp";

export { KvOtp };
