import React, { useEffect, useState } from "react";
import * as smask from "smask";

type TSmask = {
  children: React.ReactElement;
  mask: [string, ...string[]];
  value: string;
};

export const Smask = ({ children, mask, value = "" }: TSmask) => {
  const [newValue, setNewValue] = useState(value);

  const minLength = mask.at(0)!.length;
  const maxLength = mask.at(-1)!.length;

  useEffect(() => {
    if (value === newValue) return;
    const maskedValue = value ? smask.mask(value, mask) : "";
    setNewValue(maskedValue);
  }, [mask, newValue, value]);

  return React.cloneElement(children, {
    value: newValue,
    minLength,
    maxLength,
  });
};
