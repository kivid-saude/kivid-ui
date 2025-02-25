import React, { ReactNode, useEffect, useRef, useState } from "react";
import { KvBadge, KvButton, KvButtons, KvIcon } from "..";
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
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const [currentValues, setCurrentValues] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const multiSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value?.length || !options?.length) return;
    const hasSelected = options.some((option) => value.includes(option.value));
    if (!hasSelected) return;
    const selectedOptions = options.filter((option) =>
      value.includes(option.value),
    );
    setCurrentValues(selectedOptions);
    setSelectedValues(selectedOptions);
  }, [value, options]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectedChange = (option: Option) => {
    setCurrentValues((prevSelected) => {
      const hasSelected = prevSelected?.some(
        ({ value }) => value === option.value,
      );
      const newSelected = hasSelected
        ? prevSelected?.filter(({ value }) => value !== option.value)
        : [...(prevSelected ?? []), option];
      return newSelected;
    });
  };

  const handleSubmitSelected = () => {
    setSelectedValues(currentValues);
    onSelectedChange?.(currentValues.map(({ value }) => value));
    setIsOpen(false);
  };

  const handleReset = () => {
    setSelectedValues([]);
    setCurrentValues([]);
    onSelectedChange?.([]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeOnOutsideClick &&
        multiSelectRef.current &&
        !multiSelectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setCurrentValues(selectedValues);
      }
    };

    if (closeOnOutsideClick) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [closeOnOutsideClick, selectedValues]);

  return (
    <div className="kv-multi-select" ref={multiSelectRef} {...props}>
      <div
        className="kv-multi-select__value"
        onClick={() => {
          isOpen && setCurrentValues(selectedValues);
          setIsOpen(!isOpen);
        }}
      >
        {selectedValues?.length
          ? selectedValues
              .map(({ label }) => label)
              .sort()
              .join(", ")
          : placeholder}
      </div>

      <KvIcon className="slot slot--right" icon="chevron-down" />

      {!!selectedValues?.length && (
        <div className="slot slot--right" style={{ right: "3.5rem" }}>
          <KvBadge
            label={selectedValues?.length.toString() ?? ""}
            color="secondary"
            size="large"
          />
        </div>
      )}

      {isOpen && (
        <section className="kv-multi-select__content">
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

          <hr className="kv-multi-select__hr" />

          <div className="kv-multi-select__list">
            <ul {...listProps}>
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="kv-multi-select__item"
                  onClick={() => handleSelectedChange(option)}
                >
                  <KvCheckbox
                    id={option.value}
                    name={option.value}
                    checked={currentValues?.some(
                      (s) => s.value === option.value,
                    )}
                    label={option.label}
                    color="secondary"
                  />
                </li>
              ))}
            </ul>
          </div>

          <hr className="kv-multi-select__hr" />

          <KvButtons column style={{ marginTop: "0.5rem", padding: "0 1rem" }}>
            <KvButton color="muted" type="button" onClick={handleReset}>
              Limpar
            </KvButton>
            <KvButton
              color="success"
              type="button"
              onClick={handleSubmitSelected}
            >
              Confirmar
            </KvButton>
          </KvButtons>
        </section>
      )}
    </div>
  );
};
