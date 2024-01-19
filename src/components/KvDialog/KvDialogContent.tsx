import styles from "./styles.module.css";

export const KvDialogContent = ({ children }: React.PropsWithChildren) => {
  return <section className={styles.dialog__main}>{children}</section>;
};
