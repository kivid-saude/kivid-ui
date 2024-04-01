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

  const onPaste = async (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = event.clipboardData.getData("text");
    const maskedValue = smask.mask(pastedText, mask);
    setNewValue(maskedValue);
  };

  useEffect(() => {
    if (!value) return;
    const maskedValue = smask.mask(value, mask);
    setNewValue(maskedValue);
  }, [mask, value]);

  return React.cloneElement(children, {
    value: newValue,
    onInput,
    onPaste,
    minLength,
    maxLength,
  });
};
