import React from "react";
import { KvButton } from "../KvButton/KvButton";
import { KvIcon } from "../KvIcon/KvIcon";
import "../KvInput/kv-input.css";
import "./kv-otp.css";

type TInput = {
  handleResendToken?: () => void;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const KvOtp = React.forwardRef<HTMLInputElement, TInput>(
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
          required
          ref={ref}
          {...props}
        />
        <KvButton type="button" onClick={() => handleResendToken?.()}>
          <KvIcon icon="token" />
          Reenviar Código
        </KvButton>
      </div>
    );
  }
);
