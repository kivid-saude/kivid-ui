import { PropsWithChildren } from "react";
import "./kv-action.css";

type TKvAction = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const KvAction = ({ children, className = "", ...props }: TKvAction) => {
  return (
    <div className={`kv-action ${className}`} {...props}>
      {children}
    </div>
  );
};
