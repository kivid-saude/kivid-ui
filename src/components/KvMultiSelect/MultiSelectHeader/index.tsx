import { PropsWithChildren } from "react";
import "./index.css";

export const KvMultiSelectHeader = ({ children }: PropsWithChildren) => {
  return (
    <header>
      {children}
      <hr className="multi-select-header-hr" />
    </header>
  );
};
