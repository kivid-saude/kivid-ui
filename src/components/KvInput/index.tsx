import React from "react";
import "./kv-input.css";

type TKvInput = {
  errorMessage?: string;
  rounded?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const KvInput = React.forwardRef<HTMLInputElement, TKvInput>(
  ({ className = "", errorMessage, rounded = true, ...props }, ref) => {
    const classes = ["kv-input"];
    if (rounded) classes.push("kv-input--rounded");
    if (errorMessage) classes.push("kv-input--error");
    if (className) classes.push(className);
    const computedClasses = classes.join(" ");

    return (
      <input className={computedClasses} type="text" ref={ref} {...props} />
    );
  },
);

KvInput.displayName = "KvInput";

export { KvInput };
