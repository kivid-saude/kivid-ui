import React, { PropsWithChildren, useState } from "react";
import { KvButton, TKvButton } from "../KvButton";
import { KvCheckbox } from "../KvCheckbox";

type TKvCheckButton = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
} & Pick<TKvButton, "color"> &
  PropsWithChildren;

export const KvCheckButton = React.forwardRef<HTMLInputElement, TKvCheckButton>(
  ({ children, onChange, checked = false, color = "tertiary" }, ref) => {
    const [isChecked, setIsChecked] = useState(checked);
    return (
      <>
        <KvCheckbox
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
