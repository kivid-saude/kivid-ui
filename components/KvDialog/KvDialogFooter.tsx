import styles from "./styles.module.css";

export const KvDialogFooter = ({ children }: React.PropsWithChildren) => {
  if (!children) return <div></div>;
  return <footer className={styles.dialog__footer}>{children}</footer>;
};
