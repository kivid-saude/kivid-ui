import React, { useState } from "react";
import { KvIcon } from "../KvIcon";
import { KvIconButton } from "../KvIconButton";
import { KvInput, TKvInput } from "../KvInput";

const KvPasswordInput = React.forwardRef<HTMLInputElement, TKvInput>(
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <>
        <KvInput type={isVisible ? "text" : "password"} ref={ref} {...props} />
        <KvIconButton
          type="button"
          className="slot slot--right"
          color="muted"
          size="medium"
          rounded={false}
          onClick={() => setIsVisible((prev) => !prev)}
        >
          <KvIcon icon={isVisible ? "eye" : "eye-off"} />
        </KvIconButton>
      </>
    );
  },
);

KvPasswordInput.displayName = "KvPasswordInput";

export { KvPasswordInput };
