import styles from "./styles.module.scss";

type TKvItem = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren;

export const KvItem = ({ children, className, ...props }: TKvItem) => {
  const classes = [styles.KvItem, className].join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
