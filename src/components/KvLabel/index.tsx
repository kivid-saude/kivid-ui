import styles from "./styles.module.scss";

export const KvLabel = (
  props: React.PropsWithChildren & React.ComponentProps<"label">,
) => {
  return <label className={styles["kv-label"]} {...props} />;
};
