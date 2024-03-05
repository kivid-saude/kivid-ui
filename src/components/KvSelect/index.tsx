import React from "react";
import { KvIcon } from "../KvIcon";
import "./kv-select.css";

type TKvSelect = React.SelectHTMLAttributes<HTMLSelectElement>;

const KvSelect = React.forwardRef<HTMLSelectElement, TKvSelect>(
  ({ className = "", ...props }, ref) => {
    return (
      <>
        <select className={`kv-select ${className}`} ref={ref} {...props} />
        <KvIcon icon="chevron-down" />
      </>
    );
  }
);

KvSelect.displayName = "KvSelect";

export { KvSelect };
