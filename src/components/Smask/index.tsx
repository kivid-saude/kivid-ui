import React, { useEffect, useState } from "react";
import * as smask from "smask";

type TSmask = {
  children: React.ReactElement;
  mask: [string, ...string[]];
  value?: string;
};

export const Smask = ({ children, mask, ...props }: TSmask) => {
  const [newValue, setNewValue] = useState(props.value);

  const minLength = mask.at(0)!.length;
  const maxLength = mask.at(-1)!.length;
  // const maskFormattedLength = mask.at(-1)?.replace(/\W/g, "").length;

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
    if (!props) return;
    if (typeof props.value === "undefined") return;
    if (props.value === newValue) return;

    const maskedValue = smask.mask(props.value.slice(0, maxLength), mask);
    setNewValue(maskedValue);
  }, [mask, maxLength, newValue, props]);

  if (typeof props.value !== "undefined") {
    return React.cloneElement(children, {
      value: newValue,
      minLength,
      maxLength,
    });
  }

  return React.cloneElement(children, {
    value: newValue,
    minLength,
    maxLength,
    onInput,
  });
};
