import React from "react";
import { KvIcon } from "../KvIcon/KvIcon";
import "./kv-title.css";

type TKvTitle = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  color?:
    | "tertiary"
    | "tertiary-alt"
    | "success"
    | "danger"
    | "medium"
    | "warning";
  icon?: string;
  size?: "small" | "medium" | "large" | "xlarge";
};

export const KvTitle = ({
  title,
  description,
  color = "tertiary",
  icon,
  size = "xlarge",
}: TKvTitle) => {
  const colorClassMap = {
    tertiary: "kv-color-tertiary",
    "tertiary-alt": "kv-color-tertiary-alt",
    success: "kv-color-success",
    warning: "kv-color-warning",
    danger: "kv-color-danger",
    medium: "kv-color-medium",
  };

  const sizeClassMap = {
    small: "kv-title--small",
    medium: "kv-title--medium",
    large: "kv-title--large",
    xlarge: "kv-title--xlarge",
  };

  const colorClass = colorClassMap[color];
  const sizeClass = sizeClassMap[size];

  return (
    <>
      <header className={`kv-header ${colorClass} ${sizeClass}`}>
        {!!icon && (
          <div className="kv-title-icon">
            <KvIcon icon={icon} />
          </div>
        )}

        <h1 className={`kv-title ${icon ? "" : "kv-title--bordered"}`}>
          {title}
        </h1>

        {!!description && <p className="kv-description">{description}</p>}
      </header>
    </>
  );
};
