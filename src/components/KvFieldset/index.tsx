import { PropsWithChildren } from "react";

type TFieldset = PropsWithChildren;

export const KvFieldset = ({ children }: TFieldset) => {
  return (
    <fieldset
      className={`kv-fieldset ${
        Array.isArray(children) ? "kv-fieldset--has-label" : ""
      }`}
    >
      {children}
    </fieldset>
  );
};
