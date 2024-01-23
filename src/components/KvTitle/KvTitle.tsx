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
};

export const KvTitle = ({
  title,
  description,
  color = "tertiary",
  icon,
}: TKvTitle) => {
  const colorClassMap = {
    tertiary: "kv-color-tertiary",
    "tertiary-alt": "kv-color-tertiary-alt",
    success: "kv-color-success",
    warning: "kv-color-warning",
    danger: "kv-color-danger",
    medium: "kv-color-medium",
  };

  const colorClass = colorClassMap[color];

  return (
    <>
      <header className={`kv-header ${colorClass}`}>
        {!!icon && (
          <div className="kv-title-icon">
            <KvIcon icon="check" />
          </div>
        )}
        <h1 className={`kv-title ${icon ? "" : "kv-title--bordered"}`}>
          {title}
        </h1>
        <p className="kv-description">{description}</p>
      </header>
    </>
  );
};
