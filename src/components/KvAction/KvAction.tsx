import { PropsWithChildren } from "react";
import "./kv-action.css";

type TKvAction = PropsWithChildren;

export const KvAction = ({ children }: TKvAction) => {
  return <div className="kv-action">{children}</div>;
};
