import { PropsWithChildren, useState } from "react";
import { KvButton, TKvButton } from "../KvButton";
import { KvCheckbox } from "../KvCheckbox";

type TKvCheckButton = Pick<TKvButton, "color"> &
  PropsWithChildren &
  React.InputHTMLAttributes<HTMLInputElement>;

export const KvCheckButton = ({
  children,
  color = "tertiary",
  ...props
}: TKvCheckButton) => {
  const [isChecked, setIsChecked] = useState(props.checked ?? false);
  return (
    <>
      <KvCheckbox
        {...props}
        checked={isChecked}
        onChange={(event) => {
          props.onChange?.(event);
        }}
        style={{ display: "none" }}
      />
      <KvButton
        color={isChecked ? color : "muted"}
        onClick={() => setIsChecked(!isChecked)}
      >
        {children}
      </KvButton>
    </>
  );
};
