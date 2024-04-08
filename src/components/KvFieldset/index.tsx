import React, { PropsWithChildren } from "react";
import { KvLabel } from "../KvLabel";

type TFieldset = PropsWithChildren;

export const KvFieldset = ({ children }: TFieldset) => {
  const classes: string[] = [];

  React.Children.forEach(children, (child) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bool = child && (child as any).type === KvLabel;
    bool && classes.push("kv-fieldset--has-label");
  });

  return (
    <fieldset className={`kv-fieldset ${classes.join(" ")}`}>
      {children}
    </fieldset>
  );
};
