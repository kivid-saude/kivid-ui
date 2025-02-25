import React, { ReactNode, useEffect, useRef, useState } from "react";
import { KvBadge, KvIcon } from "..";
import { KvCheckbox } from "../KvCheckbox";
import { KvSearch } from "../KvSearch";
import "./index.scss";
import { KvMultiSelectHeader } from "./MultiSelectHeader";

type Option = {
  label: string;
  value: string;
};

export type TKvMultiSelect = {
  options: Option[];
  placeholder?: string;
  children?: ReactNode;
  value?: string[];
  overlay?: boolean;
  closeOnOutsideClick?: boolean;
  listProps?: React.HTMLAttributes<HTMLUListElement>;
  onSelectedChange?: (value: string[]) => void;
};

export const KvMultiSelect = ({
  options,
  placeholder = "Selecione...",
  value = [],
  closeOnOutsideClick = true,
  onSelectedChange,
  listProps,
  ...props
}: TKvMultiSelect) => {
  const [selected, setSelected] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const multiSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value?.length || !options?.length) return;
    const selectedOption = options.filter((option) =>
      value.includes(option.value),
    );
    setSelected((prevSelected) => selectedOption ?? prevSelected);
  }, [value, options]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectedChange = (option: Option) => {
    setSelected((prevSelected) => {
      const hasSelected = prevSelected?.some(
        ({ value }) => value === option.value,
      );
      const newSelected = hasSelected
        ? prevSelected?.filter(({ value }) => value !== option.value)
        : [...(prevSelected ?? []), option];
      onSelectedChange?.(newSelected.map(({ value }) => value));
      return newSelected;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeOnOutsideClick &&
        multiSelectRef.current &&
        !multiSelectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (closeOnOutsideClick) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [closeOnOutsideClick]);

  return (
    <div className={`kv-multi-select relative`} ref={multiSelectRef} {...props}>
      <div className="kv-multi-select-value" onClick={() => setIsOpen(!isOpen)}>
        {selected?.length
          ? selected
              .map(({ label }) => label)
              .sort()
              .join(", ")
          : placeholder}
      </div>

      <KvIcon className="slot slot--right" icon="chevron-down" />

      {!!selected?.length && (
        <div style={{ position: "absolute", right: "3rem", top: "1.5rem" }}>
          <KvBadge
            color="secondary"
            label={selected?.length.toString() ?? ""}
          />
        </div>
      )}

      {isOpen && (
        <div className="kv-multi-select-list">
          <div style={{ padding: "0 1rem" }}>
            <KvMultiSelectHeader>
              <KvSearch
                placeholder="Digite para buscar"
                status={search ? "clean" : "idle"}
                value={search}
                isSmall
                onChange={(e) => setSearch(e.target.value)}
                onClean={() => setSearch("")}
              />
            </KvMultiSelectHeader>
          </div>

          <div style={{ padding: "0 0.5rem" }}>
            <ul {...listProps}>
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="kv-multi-select-item"
                  onClick={() => handleSelectedChange(option)}
                >
                  <KvCheckbox
                    id={option.value}
                    name={option.value}
                    checked={selected?.some((s) => s.value === option.value)}
                    label={option.label}
                    color="secondary"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
