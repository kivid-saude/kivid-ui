import { PropsWithChildren } from "react";
import "./kv-actions.css";

export const KvActions = ({ children }: PropsWithChildren) => {
  return <section className="kv-actions">{children}</section>;
};
