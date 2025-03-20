import { PropsWithChildren } from "react";
import "./kv-buttons.css";

type TKvButtons = {
  column?: boolean;
} & React.DetailedHTMLProps<
  React.MenuHTMLAttributes<HTMLElement>,
  HTMLElement
> &
  PropsWithChildren;

export const KvButtons = ({
  className = "",
  column,
  children,
  ...props
}: TKvButtons) => {
  const classes = ["kv-buttons"];
  if (column) classes.push("kv-buttons--column");

  return (
    <menu {...props} className={`${classes.join(" ")} ${className}`}>
      {children}
    </menu>
  );
};
