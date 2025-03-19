import {
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

type ButtonConfig = {
  color:
  | "secondary"
  | "tertiary"
  | "success"
  | "danger"
  | "muted"
  | "clear"
  | "medium";
  size: "small" | "medium" | "large";
  text: string
}

export type TKvMultiSelect = {
  options: Option[];
  placeholder?: string;
  children?: ReactNode;
  value?: Option["value"][];
  overlay?: boolean;
  closeOnOutsideClick?: boolean;
  maxHeight?: React.CSSProperties["maxHeight"];
  disabled?: boolean;
  onSelectedChange?: (value: Option["value"][]) => void;
  confirmButtonColor?: ButtonConfig["color"];
  confirmButtonText?: ButtonConfig["text"];
  cancelButtonColor?: ButtonConfig["color"];
  cancelButtonText?: ButtonConfig["text"];
  buttonSize?: ButtonConfig["size"];
  resetAllValues?: boolean
};

export const KvMultiSelect = ({
  options,
  placeholder = "Selecione...",
  value = [],
  closeOnOutsideClick = true,
  onSelectedChange,
  maxHeight = "unset",
  disabled,
  confirmButtonColor = 'success',
  confirmButtonText = 'Confirmar',
  cancelButtonColor = 'muted',
  cancelButtonText = 'Limpar',
  buttonSize,
  resetAllValues = false,
  ...props
}: TKvMultiSelect) => {
  const [selectedValue, setSelectedValue] = useState<Option["value"][]>(value);
  const [selectedOldValue, setSelectedOldValue] = useState<Option["value"][]>(
    [],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const multiSelectRef = useRef<HTMLDivElement>(null);

  const selectedOptions = useMemo(() => {
    return options.filter((o) => selectedValue.includes(o.value));
  }, [options, selectedValue]);

  useEffect(() => {
    if (!value?.length) return;
    setSelectedValue(value);
  }, [value]);

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [options, search]);

  const handleSelectedChange = (value: Option["value"]) => {
    setSelectedValue((oldSelected) => {
      const hasSelected = oldSelected?.includes(value);
      const newValue = hasSelected
        ? oldSelected.filter((item) => item !== value)
        : [...oldSelected, value];
      return newValue;
    });
  };

  const handleSubmit = () => {
    setIsOpen(false);
    onSelectedChange?.(selectedValue);
    setSelectedOldValue(selectedValue);
  };

  const handleReset = useCallback(() => {
    setSelectedValue([]);
  }, []);

  useEffect(() => {
    if (resetAllValues) {
      handleReset();
    }
  }, [resetAllValues, handleReset]);

  const close = useCallback(() => {
    setSelectedValue(selectedOldValue);
    setIsOpen(false);
  }, [selectedOldValue]);

  useEffect(() => {
    if (!closeOnOutsideClick) return;
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!multiSelectRef.current) return;
      if (multiSelectRef.current.contains(event.target as Node)) return;
      close();
      document.removeEventListener("click", handleClickOutside);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [close, closeOnOutsideClick, isOpen, selectedValue]);

  const shouldRenderPlaceholder = !!disabled || !selectedOptions.length;

  function handleClick() {
    if (disabled) return;

    if (isOpen) {
      close();
      return;
    }

    setIsOpen(true);
  }

  return (
    <div className="kv-multi-select " ref={multiSelectRef} {...props}>
      <div
        className={`kv-multi-select__value ${disabled ? "kv-multi-select__disabled" : "kv-multi-select__enabled"}`}
        onClick={() => handleClick()}
      >
        {shouldRenderPlaceholder
          ? placeholder
          : selectedOptions
            .map(({ label }) => label)
            .sort()
            .join(", ")}
      </div>

      <KvIcon className="slot slot--right" icon="chevron-down" />

      {!!selectedValue?.length && (
        <div className="slot slot--right" style={{ right: "3.5rem" }}>
          <KvBadge
            label={selectedValue?.length.toString()}
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
            <ul style={{ overflow: "auto", maxHeight: maxHeight }}>
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="kv-multi-select__item"
                  onClick={() => handleSelectedChange(option.value)}
                >
                  <KvCheckbox
                    id={option.value}
                    name={option.value}
                    checked={selectedValue.includes(option.value)}
                    label={option.label}
                    color="secondary"
                  />
                </li>
              ))}
            </ul>
          </div>

          <hr className="kv-multi-select__hr" />

          <KvButtons column style={{ marginTop: "0.5rem", padding: "0 1rem" }}>
            <KvButton color={cancelButtonColor} size={buttonSize} type="button" onClick={handleReset}>
              {cancelButtonText}
            </KvButton>
            <KvButton color={confirmButtonColor} size={buttonSize} type="button" onClick={handleSubmit}>
              {confirmButtonText}
            </KvButton>
          </KvButtons>
        </section>
      )}
    </div>
  );
};
