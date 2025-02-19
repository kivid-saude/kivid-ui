import React, { PropsWithChildren, useState } from "react";
import { KvButton, TKvButton } from "../KvButton";
import { KvCheckbox } from "../KvCheckbox";

type TKvCheckButton = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
} & Pick<TKvButton, "color" | "size"> &
  PropsWithChildren &
  React.InputHTMLAttributes<HTMLInputElement>;

const KvCheckButton = React.forwardRef<HTMLInputElement, TKvCheckButton>(
  ({ children, color, size, ...props }, ref) => {
    const { onChange, checked = false } = props;
    const [isChecked, setIsChecked] = useState(checked);
    return (
      <div>
        <KvCheckbox
          {...props}
          style={{ display: "none" }}
          checked={isChecked}
          onChange={(event) => onChange?.(event)}
          ref={ref}
        />
        <KvButton
          type="button"
          size={size ?? "large"}
          color={isChecked ? color ?? "tertiary" : "muted"}
          style={{ minWidth: "unset" }}
          onClick={() => setIsChecked(!isChecked)}
        >
          {children}
        </KvButton>
      </div>
    );
  },
);

KvCheckButton.displayName = "KvCheckButton";

export { KvCheckButton };
