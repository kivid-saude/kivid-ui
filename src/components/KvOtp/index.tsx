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
  hideResendButton?: boolean;
  handleResendToken?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const KvOtp = React.forwardRef<HTMLInputElement, TKvOTPInput>(
  (
    {
      className = "",
      invalidMessage = "Código não confere",
      status = "idle",
      hideResendButton = false,
      handleResendToken,
      disableTryAgain,
      ...props
    },
    ref,
  ) => {
    function renderResendButton() {
      if (hideResendButton) return null

      if (["idle", "invalid"].includes(status)) {
        return (
          <KvButton
            type="button"
            color="muted"
            size="small"
            onClick={() => handleResendToken?.()}
            disabled={disableTryAgain}
          >
            Reenviar Código
          </KvButton>
        )
      }

      return null
    }

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

        {renderResendButton()}

        {["loading"].includes(status) && <KvSpinner color="light" />}

        {["valid"].includes(status) && (
          <KvChip label="Confirmado" variant="success" size="large" />
        )}
      </div>
    );
  },
);

KvOtp.displayName = "KvOtp";

export { KvOtp };
