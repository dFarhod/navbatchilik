import React from "react";

interface InputProps {
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 
        bg-white dark:bg-gray-700 
        border-gray-300 dark:border-gray-600 
        text-gray-900 dark:text-gray-100
        placeholder-gray-400 dark:placeholder-gray-500
        ${className}`}
    />
  );
};

export default Input;
