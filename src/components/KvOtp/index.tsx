import React from "react";
import { KvButton } from "../KvButton";
import { KvIcon } from "../KvIcon";
import styles from "../KvInput/styles.module.scss";
import "./kv-otp.css";

type TKvOTPInput = {
  handleResendToken?: () => void;
  disableTryAgain?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const KvOtp = React.forwardRef<HTMLInputElement, TKvOTPInput>(
  ({ className = "", handleResendToken, disableTryAgain, ...props }, ref) => {
    return (
      <div style={{ display: "grid", gap: "1rem", justifyItems: "center" }}>
        <input
          className={`kv-otp ${styles["kv-input"]} ${className}`}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={6}
          pattern="\d{6}"
          placeholder="______"
          ref={ref}
          {...props}
        />
        <KvButton
          type="button"
          color="muted"
          onClick={() => handleResendToken?.()}
          disabled={disableTryAgain}
        >
          <KvIcon icon="phone-message" />
          Reenviar Código
        </KvButton>
      </div>
    );
  },
);

KvOtp.displayName = "KvOtp";

export { KvOtp };
