import React, { PropsWithChildren } from "react";
import { KvLabel } from "../KvLabel";
import styles from "./styles.module.scss";

type TFieldset = {
  className?: string
  hasLabel?: boolean
} & PropsWithChildren;

export const KvFieldset = ({ children, className, hasLabel = true }: TFieldset) => {
  const classes = [styles["kv-fieldset"]];
  if (className) classes.push(className);

  React.Children.forEach(children, (child) => {
    const bool = child && (child as { type: unknown }).type === KvLabel;
    bool || hasLabel && classes.push("kv-fieldset--has-label")
    !hasLabel && classes.push("kv-fieldset--no-label")
  });

  return <fieldset className={classes.join(" ")}>{children}</fieldset>;
};
