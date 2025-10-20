import React from "react";

export interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Option[];
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  className = "",
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500
        bg-white dark:bg-gray-700 
        border-gray-300 dark:border-gray-600 
        text-gray-900 dark:text-gray-100
        ${className}`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
