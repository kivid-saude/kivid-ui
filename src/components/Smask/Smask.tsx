import React, { useState } from "react";
import * as smask from "smask";

type TSmask = {
  children: React.ReactElement;
  mask: [string, ...string[]];
};

export const Smask = ({ children, mask }: TSmask) => {
  const [value, setValue] = useState("");

  const maxLength = mask.at(-1)!.length;

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const maskedValue = smask.mask(value, mask);
    setValue(maskedValue);
  };

  return React.cloneElement(children, {
    value,
    onInput,
    maxLength,
  });
};