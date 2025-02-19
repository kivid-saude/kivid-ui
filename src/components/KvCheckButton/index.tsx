import React, { PropsWithChildren, useState } from "react";
import { KvButton, TKvButton } from "../KvButton";

type TKvCheckButton = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Pick<TKvButton, "color" | "size"> &
  PropsWithChildren &
  React.InputHTMLAttributes<HTMLInputElement>;

const KvCheckButton = React.forwardRef<HTMLInputElement, TKvCheckButton>(
  ({ children, color, size, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(props.checked);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
      onChange?.(event);
    };

    return (
      <div className="relative">
        <input
          type="checkbox"
          className="absolute inset-0 z-10 opacity-0 w-full h-full m-0 p-0 cursor-pointer"
          ref={ref}
          onChange={handleInputChange}
          {...props}
        />
        <KvButton
          type="button"
          size={size ?? "large"}
          color={isChecked ? color ?? "tertiary" : "muted"}
          style={{ minWidth: "unset", padding: "0.75rem" }}
        >
          {children}
        </KvButton>
      </div>
    );
  },
);

KvCheckButton.displayName = "KvCheckButton";

export { KvCheckButton };
