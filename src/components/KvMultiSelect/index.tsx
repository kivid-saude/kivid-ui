import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  value?: Option["value"][];
  overlay?: boolean;
  closeOnOutsideClick?: boolean;
  listProps?: React.HTMLAttributes<HTMLUListElement>;
  onSelectedChange?: (value: Option["value"][]) => void;
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
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [newSelectedOptions, setNewSelectedOptions] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const multiSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value?.length || !options?.length) return;
    const selectedOptions = options.filter((_) => value.includes(_.value));
    setNewSelectedOptions(selectedOptions);
    setSelectedOptions(selectedOptions);
  }, [value, options]);

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [options, search]);

  const handleSelectedChange = (option: Option) => {
    setNewSelectedOptions((prevSelected) => {
      const hasSelected = prevSelected?.some((_) => _.value === option.value);
      const newSelected = hasSelected
        ? prevSelected.filter((_) => _.value !== option.value)
        : [...prevSelected, option];
      return newSelected;
    });
  };

  const handleSubmit = () => {
    setSelectedOptions(newSelectedOptions);
    onSelectedChange?.(newSelectedOptions.map(({ value }) => value));
    setIsOpen(false);
  };

  const handleReset = () => {
    setSelectedOptions([]);
    setNewSelectedOptions([]);
    onSelectedChange?.([]);
  };

  const toggleIsOpen = useCallback(() => {
    isOpen && setNewSelectedOptions(selectedOptions);
    setIsOpen((open) => !open);
  }, [isOpen, selectedOptions]);

  useEffect(() => {
    if (!closeOnOutsideClick) return;
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!multiSelectRef.current) return;
      if (multiSelectRef.current.contains(event.target as Node)) return;
      toggleIsOpen();
      document.removeEventListener("click", handleClickOutside);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [toggleIsOpen, closeOnOutsideClick, isOpen, selectedOptions]);

  return (
    <div className="kv-multi-select" ref={multiSelectRef} {...props}>
      <div className="kv-multi-select__value" onClick={toggleIsOpen}>
        {selectedOptions?.length
          ? selectedOptions
              .map(({ label }) => label)
              .sort()
              .join(", ")
          : placeholder}
      </div>

      <KvIcon className="slot slot--right" icon="chevron-down" />

      {!!selectedOptions?.length && (
        <div className="slot slot--right" style={{ right: "3.5rem" }}>
          <KvBadge
            label={selectedOptions?.length.toString() ?? ""}
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
                    checked={newSelectedOptions?.some(
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
            <KvButton color="success" type="button" onClick={handleSubmit}>
              Confirmar
            </KvButton>
          </KvButtons>
        </section>
      )}
    </div>
  );
};
