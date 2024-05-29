import { ReactNode } from "react";
import { KvIcon } from "../..";
import { KeyColors } from "../../../types/styles";

import "./alert-confirm-title-header.css";

export type TAlertConfirmTitle = {
  children: ReactNode;

  icon?: string;
  iconColor?: KeyColors;
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
};

export const AlertConfirmTitleHeader = ({
  children,
  icon,
  iconColor = "tertiary",
}: TAlertConfirmTitle) => {
  const colorClassMap = {
    primary: "kv-color-primary",
    secondary: "kv-color-secondary",
    tertiary: "kv-color-tertiary",
    success: "kv-color-success",
    warning: "kv-color-warning",
    danger: "kv-color-danger",
    medium: "kv-color-medium",
    light: "kv-color-light",
    white: "kv-color-white",
  };

  const iconColorClass = colorClassMap[iconColor];

  return (
    <header className="kv-header">
      <div className={`kv-title__icon ${iconColorClass}`}>
        <KvIcon className="kv-color-white" icon={icon ?? "check"} />
      </div>

      {children}
    </header>
  );
};
