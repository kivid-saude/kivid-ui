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
  const {
    children,
    className,
    outline,
    small,
    medium,
    large,
    block,
    loading,
    centered,
    href,
    ...restProps
  } = props;
  const classes = ["kv-button"];

  if (centered) classes.push("kv-button--centered");
  if (outline) classes.push("kv-button--outline");
  if (small) classes.push("kv-button--small");
  if (medium) classes.push("kv-button--medium");
  if (large) classes.push("kv-button--large");
  if (block) classes.push("kv-button--block");
  if (loading) classes.push("kv-button--loading");

  if (href) {
    return (
      <a {...restProps} className={`${className} ${classes.join(" ")}`}>
        {children}
      </a>
    );
  }
  return (
    <button {...restProps} className={`${className} ${classes.join(" ")}`}>
      {children}
    </button>
  );
};