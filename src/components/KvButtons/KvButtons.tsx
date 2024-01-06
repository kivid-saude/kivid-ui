import { PropsWithChildren } from "react";
import "./kv-buttons.css";

type TKvButtons = {
  column?: boolean;
} & PropsWithChildren;

export const KvButtons = (props: TKvButtons) => {
  const classes = ["kv-buttons"];

  if (props.column) classes.push("kv-buttons--column");

  return <menu className={classes.join(" ")}>{props.children}</menu>;
};
