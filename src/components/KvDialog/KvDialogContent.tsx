import styles from "./styles.module.css";

export const KvDialogContent = ({ children }: React.PropsWithChildren) => {
  return <main className={styles.dialog__main}>{children}</main>;
};
