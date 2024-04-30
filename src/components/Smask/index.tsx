import React, { useEffect, useState } from "react";
import * as smask from "smask";

type TSmask = {
  mask: [string, ...string[]];
  value?: string;
} & React.PropsWithChildren;

export const Smask = ({ children, mask, ...props }: TSmask) => {
  const [newValue, setNewValue] = useState(props.value);

  const minLength = mask?.at?.(0)?.length;
  const maxLength = mask?.at?.(-1)?.length;

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (!value) {
      setNewValue(value);
      return;
    }

    try {
      const maskedValue = smask.mask(value, mask);
      setNewValue(maskedValue);
    } catch {
      setNewValue(value);
    }
  };

  useEffect(() => {
    if (!props.value) return;
    if (props.value === newValue) return;
    const maskedValue = smask.mask(props.value, mask);
    setNewValue(maskedValue);
  }, [mask, newValue, props.value]);

  if (props.value) {
    return React.cloneElement(children as React.ReactElement, {
      value: newValue,
      minLength,
      maxLength,
    });
  }

  return React.cloneElement(children as React.ReactElement, {
    value: newValue,
    onInput,
    minLength,
    maxLength,
  });
};
