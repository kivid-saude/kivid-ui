import { PropsWithChildren } from "react";
import "./index.css";

export const KvMultiSelectHeader = ({ children }: PropsWithChildren) => {
  return <header className="kv-multi-select__header">{children}</header>;
};
