import styles from "./styles.module.scss";

type TKvLabel = React.PropsWithChildren &
  React.LabelHTMLAttributes<HTMLLabelElement>;

export const KvLabel = (props: TKvLabel) => {
  return <label className={styles["kv-label"]}>{props.children}</label>;
};
