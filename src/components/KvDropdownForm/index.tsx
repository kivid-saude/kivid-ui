import React, { useState, useRef, useEffect, ReactNode } from "react";
import "./kv-dropdown-form.css";
import { KvIcon, KvLabel } from "..";

type Option = {
  label: string;
  value: string;
};

type TKvDropdownForm = {
  options: Option[];
  placeholder?: string;
  children?: ReactNode
} & React.HTMLAttributes<HTMLDivElement>;

const KvDropdownForm = React.forwardRef<HTMLDivElement, TKvDropdownForm>(
  ({ className = "",
    options,
    placeholder = "Selecione uma opção",
    children,
    ...props }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleSelect = (option: Option) => {
      setSelected(option);
      setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div className={`kv-dropdown ${className}`} ref={dropdownRef} {...props}>
        <KvLabel>label</KvLabel>
        <div className="kv-dropdown-select" onClick={() => setIsOpen(!isOpen)}>
          {selected ? selected.label : placeholder}
        </div>
        <KvIcon className="slot slot--right" icon="chevron-down" />
        {isOpen && (
          <ul className="kv-dropdown-list">
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
