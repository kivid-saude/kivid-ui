import { useEffect, useState } from "react";
import { KvCheckButton } from "../KvCheckButton";

type TKvCheckButtonGroup = {
  value: number[];
  options: { label: string; value: number }[];
  onChange: (values: number[]) => void;
};

export const KvCheckButtonGroup = ({
  onChange,
  value = [],
  options = [],
}: TKvCheckButtonGroup) => {
  const [selectedValue, setSelectedValue] = useState<number[]>(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  // const firstLetterCapitalise = weekday.charAt(0).toUpperCase();
  // const restOfWeekdayWorld = weekday.slice(1);
  // const capitalizedWorld = `${firstLetterCapitalise}${restOfWeekdayWorld}`;

  return (
    <div
      className="grid gap-1"
      style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
    >
      {options.map((option) => (
        <KvCheckButton
          key={option.value}
          color="secondary"
          checked={selectedValue.includes(option.value)}
          onChange={() => {
            const newValue = selectedValue.includes(option.value)
              ? selectedValue.filter((v) => v !== option.value)
              : [...selectedValue, option.value];
            setSelectedValue(newValue);
            onChange?.(newValue);
          }}
        >
          {option.label}
        </KvCheckButton>
      ))}
    </div>
  );
};
