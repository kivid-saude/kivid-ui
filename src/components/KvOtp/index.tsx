import React from "react";
import { KvButton } from "../KvButton";
import { KvIcon } from "../KvIcon";
import "../KvInput/kv-input.css";
import "./kv-otp.css";

type TInput = {
  handleResendToken?: () => void;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const KvOtp = React.forwardRef<HTMLInputElement, TInput>(
  ({ className = "", handleResendToken, ...props }, ref) => {
    return (
      <div style={{ display: "grid", gap: "1rem", justifyItems: "center" }}>
        <input
          className={`kv-otp kv-input ${className}`}
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
        >
          <KvIcon icon="phone-message" />
          Reenviar Código
        </KvButton>
      </div>
    );
  }
);

KvOtp.displayName = "KvOtp";

export { KvOtp };
