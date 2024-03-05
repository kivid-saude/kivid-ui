import { PropsWithChildren } from "react";

type TLabel = PropsWithChildren &
  React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;

export const KvLabel = (props: TLabel) => {
  return <label className="kv-label">{props.children}</label>;
};
