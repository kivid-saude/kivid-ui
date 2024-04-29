import React, { useEffect, useState } from "react";
import * as smask from "smask";

type TSmask = {
  children: React.ReactElement;
  mask: [string, ...string[]];
  value?: string;
};

export const Smask = ({ children, mask, value = "" }: TSmask) => {
  const [newValue, setNewValue] = useState(value);

  const minLength = mask.at(0)!.length;
  const maxLength = mask.at(-1)!.length;

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
    if (value === newValue) return;
    const maskedValue = smask.mask(value, mask);
    setNewValue(maskedValue);
  }, [mask, value, newValue]);

  return React.cloneElement(children, {
    value: newValue,
    onInput,
    minLength,
    maxLength,
  });
};
