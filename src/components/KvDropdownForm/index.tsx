import React, { useState, useRef, useEffect, ReactNode } from "react";
import { KvIcon, KvLabel } from "..";
import "./kv-dropdown-form.css";

type Option = {
  label: string;
  value: string;
};

type TKvDropdownForm = {
  options: Option[];
  label?: string;
  placeholder?: string;
  children?: ReactNode;
  value?: string;
  overlay?: boolean;
  closeOnOutsideClick?: boolean;
  onChange?: (value: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const KvDropdownForm = React.forwardRef<HTMLDivElement, TKvDropdownForm>(
  ({
    className = "",
    options,
    placeholder = "Selecione uma opção",
    value,
    overlay = true,
    closeOnOutsideClick = true,
    onChange,
    children,
    label,
    ...props
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (value) {
        const selectedOption = options.find((option) => option.value === value);
        setSelected(selectedOption || null);
      }
    }, [value, options]);

    const handleSelect = (option: Option) => {
      setSelected(option);
      onChange?.(option.value);
      setIsOpen(false);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          closeOnOutsideClick &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
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
      <div
        className={`kv-dropdown ${className} ${overlay ? "overlay" : "push"}`}
        ref={dropdownRef}
        {...props}
      >
        {label && <KvLabel>{label}</KvLabel>}
        <div className="kv-dropdown-select" onClick={() => setIsOpen(!isOpen)}>
          {selected ? selected.label : placeholder}
        </div>
        <KvIcon className="slot slot--right" icon="chevron-down" />
        {isOpen && (
          <ul className={`kv-dropdown-list ${overlay ? "overlay" : "push"}`}>
            {children}
            {options.map((option) => (
              <li
                key={option.value}
                className="kv-dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

KvDropdownForm.displayName = "KvDropdownForm";

export { KvDropdownForm };