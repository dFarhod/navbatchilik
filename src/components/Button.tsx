import React from "react";
import { type LucideIcon } from "lucide-react"; // agar siz Lucide ikonlardan foydalansangiz

type ButtonVariant = "primary" | "success" | "danger" | "secondary";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  icon?: LucideIcon; // yoki `React.ComponentType<{ size?: number }>`
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  className = "",
  icon: Icon,
}) => {
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    secondary:
      "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
