import { Colors } from "../../types/styles";
import { KvSeal } from "../KvSeal";
import styles from "./styles.module.scss";

interface KvChipProps {
  label: string;
  labelColor: keyof Colors;
  size: "lg" | "md" | "sm";
  backgroundColor: keyof Colors;
  icon?: string;
  iconBackgroundColor?: keyof Colors;
  iconColor?: keyof Colors;
}

export const KvChip = ({
  size,
  label,
  labelColor,
  backgroundColor,
  icon,
  iconColor = "white",
  iconBackgroundColor,
}: KvChipProps) => {
  return (
    <div
      className={`
        ${styles.chip}
        ${styles[`chip-${size}`]}
        ${styles[`chipBackgroundColor-${backgroundColor}`]}
        ${styles[`chipColor-${labelColor}`]}
      `}
    >
      {!!icon && (
        <KvSeal
          size={size === "sm" ? "xs" : "sm"}
          background={iconBackgroundColor}
          icon={icon}
          color={iconColor}
        />
      )}

      <p>{label}</p>
    </div>
  );
}