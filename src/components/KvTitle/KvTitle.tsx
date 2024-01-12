import React from "react";
import { KvIcon } from "../KvIcon/KvIcon";
import "./kv-title.css";

type TKvTitle = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  color?: "success" | "danger";
  icon?: string;
};

export const KvTitle = ({ title, description, color, icon }: TKvTitle) => {
  const colorClassMap = {
    success: "kv-color-success",
    danger: "kv-color-danger",
  };

  const colorClass = color ? colorClassMap[color] : "kv-color-tertiary";

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
