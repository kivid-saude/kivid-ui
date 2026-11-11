import React from "react";
import { KvIcon } from "../KvIcon";
import "./kv-select.css";

type TKvSelect = {
  /**
   * Variante compacta para barras de filtro: 40 px de altura e texto de 14 px.
   * Sem a prop, o seletor é o de sempre (56 px, 16 px). Sem rótulo: dentro de um
   * `KvFieldset` com `KvLabel`, a altura do campo com rótulo continua valendo.
   */
  isCompact?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const KvSelect = React.forwardRef<HTMLSelectElement, TKvSelect>(
  ({ className = "", isCompact = false, ...props }, ref) => {
    if (!isCompact) {
      return (
        <>
          <select className={`kv-select ${className}`} ref={ref} {...props} />
          <KvIcon className="slot slot--right" icon="chevron-down" />
        </>
      );
    }
    return (
      <>
        <select
          className={`kv-select kv-select--compact ${className}`}
          ref={ref}
          {...props}
        />
        <KvIcon
          className="slot slot--right kv-select__chevron--compact"
          icon="chevron-down"
          size="small"
        />
      </>
    );
  }
);

KvSelect.displayName = "KvSelect";

export { KvSelect };
