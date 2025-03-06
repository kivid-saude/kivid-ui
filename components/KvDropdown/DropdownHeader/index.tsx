import { PropsWithChildren } from "react";
import "./DropdownHeader.css";

export const DropdownHeader = ({ children }: PropsWithChildren) => {
  return (
    <header>
      {children}
      <hr className="dropdown-header-hr" />
    </header>
  );
};