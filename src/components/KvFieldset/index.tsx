import { PropsWithChildren } from "react";

type TFieldset = PropsWithChildren;

export const KvFieldset = (props: TFieldset) => {
  return <fieldset className="kv-fieldset">{props.children}</fieldset>;
};
