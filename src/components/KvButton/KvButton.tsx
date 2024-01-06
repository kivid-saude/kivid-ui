import { PropsWithChildren } from "react";

type TButton = {
  outline?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  block?: boolean;
  loading?: boolean;
  centered?: boolean;
  href?: string;
} & PropsWithChildren &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;

export const KvButton = (props: TButton) => {
  const classes = ["kv-button"];

  if (props.centered) classes.push("kv-button--centered");
  if (props.outline) classes.push("kv-button--outline");
  if (props.small) classes.push("kv-button--small");
  if (props.medium) classes.push("kv-button--medium");
  if (props.large) classes.push("kv-button--large");
  if (props.block) classes.push("kv-button--block");
  if (props.loading) classes.push("kv-button--loading");

  if (props.href) {
    return (
      <a {...props} className={`${props.className} ${classes.join(" ")}`}>
        {props.children}
      </a>
    );
  }
  return (
    <button {...props} className={`${props.className} ${classes.join(" ")}`}>
      {props.children}
    </button>
  );
};
