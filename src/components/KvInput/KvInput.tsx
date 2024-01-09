import React from "react";
import "./kv-input.css";

type TInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const KvInput = React.forwardRef<HTMLInputElement, TInput>(
  (props, ref) => {
    const { className, ...restProps } = props;
    return (
      <input
        className={`kv-input ${className ? className : ""}`}
        type="text"
        ref={ref}
        {...restProps}
      />
    );
  }
);
