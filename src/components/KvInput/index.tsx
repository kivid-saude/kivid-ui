import React from "react";
import "./kv-input.css";

type TInput = {
  errorMessage?: string;
  fullRounded?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const KvInput = React.forwardRef<HTMLInputElement, TInput>(
  ({ className = "", errorMessage, fullRounded = true, ...props }, ref) => {
    const classes = ["kv-input"];
    if (fullRounded) classes.push("kv-input--full-rounded");

    return (
      <input
        className={`${classes.join(" ")} ${className} ${errorMessage && "kv-input--error"}`}
        type="text"
        ref={ref}
        {...props}
      />
    );
  },
);

KvInput.displayName = "KvInput";

export { KvInput };
