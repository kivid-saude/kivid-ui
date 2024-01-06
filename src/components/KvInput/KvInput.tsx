import React from "react";
import "./kv-input.css";

type TInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const KvInput = React.forwardRef<HTMLInputElement, TInput>(
  (props, ref) => {
    return <input className="kv-input" type="text" {...props} ref={ref} />;
  }
);
