import styles from "./styles.module.css";

export const KvDialogHeader = ({ children }: React.PropsWithChildren) => {
  if (!children) return null;
  return <header className={styles.dialog__header}>{children}</header>;
};
