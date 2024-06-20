import React, { useCallback, useEffect, useState } from "react";
import * as smask from "smask";

export type TSmaskUncontrolled = {
  children?: React.ReactElement;
  mask: "number" | "currency" | [string, ...string[]];
};

export type TSmaskControlled = {
  value: string;
} & TSmaskUncontrolled;

export type TSmask = TSmaskUncontrolled | TSmaskControlled;

export const Smask = (props: TSmask) => {
  const [newValue, setNewValue] = useState("value" in props ? props.value : "");

  const setMaskedValue = useCallback((value: string) => {
    let maskedValue: string;

    if (props.mask === "number") {
      const number = Number(value.replace(/\D/g, ""));
      maskedValue = smask.numberFormat(number);
      console.log("maskedValue :", maskedValue);
    } else if (props.mask === "currency") {
      const number = Number(value.replace(/\D/g, ""));
      maskedValue = smask.currencyFormat(number / 100);
    } else {
      const maskLettersLength = props.mask.at(-1)!.replace(/\W/g, "").length;
      const unmaskedValue = value
        .replace(/\W/g, "")
        .slice(0, maskLettersLength);
      maskedValue = smask.mask(unmaskedValue, props.mask);
    }

    setNewValue(maskedValue);
  }, []);

  const onChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (!value) {
      setNewValue(value);
      return;
    }

    try {
      setMaskedValue(value);
      props.children?.props?.onChange?.(event);
    } catch {
      setNewValue(value);
    }
  }, []);

  useEffect(() => {
    if (!("value" in props)) return;
    if (typeof props.value !== "string") return;

    setMaskedValue(props.value);
  }, [props]);

  if (props.mask === "number" || props.mask === "currency") {
    return React.cloneElement(props.children!, {
      value: newValue,
      onChange,
    });
  }

  return React.cloneElement(props.children!, {
    value: newValue,
    minLength: props.mask.at(0)!.length,
    maxLength: props.mask.at(-1)!.length,
    onChange,
  });
};
