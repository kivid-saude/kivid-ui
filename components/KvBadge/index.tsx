import { KeyColors, MapColors } from "../../types/styles";
import styles from "./styles.module.scss";

type TKvBadge = {
  color: KeyColors;
  label: string;
};

export const KvBadge = ({ label, color }: TKvBadge) => {
  return <span className={`${styles.badge} ${MapColors[color]}`}>{label}</span>;
};
