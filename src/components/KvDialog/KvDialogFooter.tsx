import styles from "./styles.module.css";

export const KvDialogFooter = ({ children }: React.PropsWithChildren) => {
  return <footer className={styles.dialog__footer}>{children}</footer>;
};
