import React, { PropsWithChildren } from "react";
import { KvLabel } from "../KvLabel";

type TFieldset = PropsWithChildren;

export const KvFieldset = ({ children }: TFieldset) => {
  const classes: string[] = [];

  React.Children.forEach(children, (child) => {
    const bool = child && (child as { type: unknown }).type === KvLabel;
    bool && classes.push("kv-fieldset--has-label");
  });

  return (
    <fieldset className={`kv-fieldset ${classes.join(" ")}`}>
      {children}
    </fieldset>
  );
};
