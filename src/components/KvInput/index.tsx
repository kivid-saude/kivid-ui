import React from "react";
import "./kv-input.css";

type TInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const KvInput = React.forwardRef<HTMLInputElement, TInput>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`kv-input ${className}`}
        type="text"
        ref={ref}
        {...props}
      />
    );
  }
);

KvInput.displayName = "KvInput";

export { KvInput };
