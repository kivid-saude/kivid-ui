import styles from "./styles.module.scss";

type TKvItem = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren;

export const KvItem = ({ children, className, ...props }: TKvItem) => {
  return (
    <div className={`${styles.KvItem} ${className}`} {...props}>
      {children}
    </div>
  );
};
