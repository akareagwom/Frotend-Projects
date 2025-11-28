import React from 'react'

type Variant="primary"|"secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  text?: string;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-blue-400 text-white hover:bg-blue-600",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  // danger: "bg-red-600 text-white hover:bg-red-700",
  // success: "bg-green-600 text-white hover:bg-green-700",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> =({
  
  variant = "primary",
  size = "md",
  text = "Button",
  className = "",
  ...props
}) =>{
  return (
    <button  className={`rounded-md font-medium transition-all duration-200 
        ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}>
      {text}
    </button>
  )
}

export default Button
