import { PropsWithChildren } from "react";
import "./kv-card.css";

type TKvCard = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  PropsWithChildren;

export const KvCard = (props: TKvCard) => {
  const { children, className, ...restProps } = props;
  return (
    <div className={`kv-card ${className ? className : ""}`} {...restProps}>
      {children}
    </div>
  );
};
