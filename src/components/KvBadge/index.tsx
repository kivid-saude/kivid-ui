import { Colors } from "../../types/styles";
import styles from "./styles.module.scss";
import { KvIcon } from "../KvIcon";

interface BadgeProps {
  backgroundColor?: keyof Colors;
  contentColor: keyof Colors;
  size: "lg" | "md" | "sm" | "xs";
  icon?: string;
  content?: number | string;
  shape?: "circle" | "rect"
}

export const KvBadge = ({
  backgroundColor = "medium",
  contentColor,
  size,
  icon,
  content,
  shape = "circle",
}: BadgeProps) => {
  return (
    <span
      className={`
        ${styles.badge}
        ${styles[`badge-${shape}-${size}`]}
        ${styles[`badgeBackgroundColor-${backgroundColor}`]}
        ${styles[`badgeColor-${contentColor}`]}
      `}
    >
      {icon ? <KvIcon icon={icon} /> : content}
    </span>
  );
};
