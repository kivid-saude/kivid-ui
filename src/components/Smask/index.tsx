import React, { useState } from "react";
import * as smask from "smask";

type TSmask = {
  children: React.ReactElement;
  mask: [string, ...string[]];
};

export const Smask = ({ children, mask }: TSmask) => {
  const [value, setValue] = useState("");

  const minLength = mask.at(0)!.length;
  const maxLength = mask.at(-1)!.length;

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (!value) {
      setValue(value);
      return;
    }

    try {
      const maskedValue = smask.mask(value, mask);
      setValue(maskedValue);
    } catch {
      setValue(value);
    }
  };

  return React.cloneElement(children, {
    value,
    onInput,
    minLength,
    maxLength,
  });
};