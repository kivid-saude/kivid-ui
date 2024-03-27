import { PropsWithChildren } from "react";

type TFieldset = PropsWithChildren;

export const KvFieldset = ({ children }: TFieldset) => {
  console.log("children :", children);
  return (
    <fieldset
      className={`kv-fieldset ${
        !Array.isArray(children) ? "kv-fieldset--no-label" : ""
      }`}
    >
      {children}
    </fieldset>
  );
};
