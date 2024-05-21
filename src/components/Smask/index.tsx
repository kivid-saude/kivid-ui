import React, { useEffect, useState } from "react";
import * as smask from "smask";

export type TSmaskUncontrolled = {
  children?: React.ReactElement;
  mask: [string, ...string[]];
};

export type TSmaskControlled = {
  value: string;
} & TSmaskUncontrolled;

export type TSmask = TSmaskUncontrolled | TSmaskControlled;

export const Smask = (props: TSmask) => {
  const [newValue, setNewValue] = useState("value" in props ? props.value : "");

  const minLength = props.mask.at(0)!.length;
  const maxLength = props.mask.at(-1)!.length;
  const maskLettersLength = props.mask.at(-1)!.replace(/\W/g, "").length;

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (!value) {
      setNewValue(value);
      return;
    }

    try {
      const maskedValue = smask.mask(value, props.mask);
      setNewValue(maskedValue);
      props.children?.props?.onChange?.(event);
    } catch {
      setNewValue(value);
    }
  };

  useEffect(() => {
    if (!("value" in props)) return;

    const maskedValue = smask.mask(
      props.value?.replace(/\W/g, "").slice(0, maskLettersLength),
      props.mask,
    );
    setNewValue(maskedValue);
  }, [maxLength, props, maskLettersLength]);

  return React.cloneElement(props.children!, {
    value: newValue,
    minLength,
    maxLength,
    onChange,
  });
};
