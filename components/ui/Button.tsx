import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant?: "primary" | "secondary" | "outline" | "ghost";

  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;
}

export default function Button({
  children,

  variant = "primary",

  size = "md",

  fullWidth = false,

  className = "",

  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-105 shadow-lg shadow-indigo-500/30",

    secondary:
      "bg-white/10 text-white backdrop-blur border border-white/10 hover:bg-white/20",

    outline:
      "border border-white/30 text-white hover:bg-white/10",

    ghost:
      "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",

    md: "px-7 py-3 text-base",

    lg: "px-9 py-4 text-lg",
  };

  return (
    <button
      className={[
        baseStyle,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}