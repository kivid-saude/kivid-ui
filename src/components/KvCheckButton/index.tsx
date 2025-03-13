import React, { PropsWithChildren, useEffect, useState } from "react";
import { KvButton, TKvButton } from "../KvButton";

type TKvCheckButton = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Pick<TKvButton, "color" | "size"> &
  PropsWithChildren &
  React.InputHTMLAttributes<HTMLInputElement>;

const KvCheckButton = React.forwardRef<HTMLInputElement, TKvCheckButton>(
  ({ children, color, size, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState<boolean>();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
      onChange?.(event);
    };

    useEffect(() => {
      setIsChecked(props.checked);
    }, [props.checked]);

    return (
      <div className="relative">
        <input
          type="checkbox"
          ref={ref}
          onChange={handleInputChange}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            opacity: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            cursor: "pointer",
          }}
          {...props}
        />
        <KvButton
          type="button"
          size={size ?? "large"}
          color={isChecked ? color ?? "tertiary" : "medium"}
          style={{
            minWidth: "unset",
            padding: "0.75rem",
            width: "100%",
            borderRadius: "0.5rem",
          }}
        >
          {children}
        </KvButton>
      </div>
    );
  },
);

KvCheckButton.displayName = "KvCheckButton";

export { KvCheckButton };
