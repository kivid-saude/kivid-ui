import React, { ReactNode, useEffect, useRef, useState } from "react";
import { KvIcon } from "..";
import "./kv-dropdown.css";

type Option = {
  label: string;
  value: string;
};

export type TKvDropdown = {
  options: Option[];
  placeholder?: string;
  children?: ReactNode;
  value?: string;
  overlay?: boolean;
  closeOnOutsideClick?: boolean;
  onChange?: (value: string) => void;
};

const KvDropdown = React.forwardRef<
  HTMLDivElement,
  TKvDropdown & React.HTMLAttributes<HTMLDivElement>
>(
  ({
    className = "",
    options,
    placeholder = "Selecione uma opção",
    value = "",
    overlay = true,
    closeOnOutsideClick = true,
    onChange,
    children,
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
  },
);

KvDropdown.displayName = "KvDropdown";

export { KvDropdown };
