import React, { useState } from "react";
import { KvIcon } from "../KvIcon";
import "../KvInput/kv-input.css";

const KvPasswordInput = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>(({ className = "", ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <input
        className={`kv-input ${className}`}
        type={isVisible ? "text" : "password"}
        {...props}
        ref={ref}
      />
      <KvIcon
        icon={isVisible ? "eye" : "eye-off"}
        onClick={() => setIsVisible((prev) => !prev)}
        style={{ pointerEvents: "auto", cursor: "pointer" }}
      />
    </>
  );
});

KvPasswordInput.displayName = "KvPasswordInput";

export { KvPasswordInput };
