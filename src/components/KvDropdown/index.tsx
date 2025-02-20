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
  listProps?: React.HTMLAttributes<HTMLUListElement>;
  onChange?: (value: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const KvDropdown = React.forwardRef<HTMLDivElement, TKvDropdown>(
  ({
    className = "",
    options,
    placeholder = "Selecione uma opção",
    value = "",
    overlay = true,
    closeOnOutsideClick = true,
    onChange,
    children,
    listProps,
    ...props
  }) => {
    const [selected, setSelected] = useState<Option | null>(
      value ? options.find((option) => option.value === value) ?? null : null,
    );
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

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
          <div className={`kv-dropdown-list ${overlay ? "overlay" : "push"}`}>
            {children}
            <ul {...listProps}>
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
          </div>
        )}
      </div>
    );
  },
);

KvDropdown.displayName = "KvDropdown";

export { KvDropdown };
