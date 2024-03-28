import React from "react";
import { KvIcon } from "../KvIcon";
import "./kv-title.css";

type TKvTitle = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  color?: "primary" | "medium" | "white";
  iconColor?:
    | "secondary"
    | "tertiary"
    | "tertiary-alt"
    | "success"
    | "danger"
    | "medium"
    | "warning"
    | "white";
  icon?: string;
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
};

export const KvTitle = ({
  title,
  description,
  iconColor = "tertiary",
  icon,
  size = "xlarge",
  color = "primary",
}: TKvTitle) => {
  const colorClassMap = {
    secondary: "kv-color-secondary",
    tertiary: "kv-color-tertiary",
    "tertiary-alt": "kv-color-tertiary-alt",
    success: "kv-color-success",
    warning: "kv-color-warning",
    danger: "kv-color-danger",
    medium: "kv-color-medium",
    white: "kv-color-white",
    primary: "kv-color-primary",
  };

  const sizeClassMap = {
    small: "kv-title--small",
    medium: "kv-title--medium",
    large: "kv-title--large",
    xlarge: "kv-title--xlarge",
    xxlarge: "kv-title--xxlarge",
  };

  const iconColorClass = colorClassMap[iconColor];
  const textColorClass = colorClassMap[color];
  const sizeClass = sizeClassMap[size];

  return (
    <>
      <header className={`kv-header ${sizeClass}`}>
        {!icon && <div className={`kv-title__border ${iconColorClass}`}></div>}

        {!!icon && (
          <div className={`kv-title__icon ${iconColorClass}`}>
            <KvIcon className="kv-color-white" icon={icon} />
          </div>
        )}

        <h1 className={`kv-title ${textColorClass}`}>{title}</h1>

        {!!description && (
          <p className={`kv-description ${textColorClass}`}>{description}</p>
        )}
      </header>
    </>
  );
};
