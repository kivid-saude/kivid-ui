import React, { PropsWithChildren, useState } from "react";
import { KvButton, TKvButton } from "../KvButton";
import { KvCheckbox } from "../KvCheckbox";

type TKvCheckButton = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
} & Pick<TKvButton, "color"> &
  PropsWithChildren &
  React.InputHTMLAttributes<HTMLInputElement>;

const KvCheckButton = React.forwardRef<HTMLInputElement, TKvCheckButton>(
  ({ children, color = "tertiary", ...props }, ref) => {
    const { onChange, checked = false } = props;
    const [isChecked, setIsChecked] = useState(checked);
    return (
      <>
        <KvCheckbox
          {...props}
          style={{ display: "none" }}
          checked={isChecked}
          onChange={(event) => onChange?.(event)}
          ref={ref}
        />
        <KvButton
          size="large"
          color={isChecked ? color : "muted"}
          style={{ minWidth: "unset" }}
          onClick={() => setIsChecked(!isChecked)}
        >
          {children}
        </KvButton>
      </>
    );
  },
);

KvCheckButton.displayName = "KvCheckButton";

export { KvCheckButton };
