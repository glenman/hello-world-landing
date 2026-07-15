import { HTMLAttributes, ReactNode } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  /**
   * 渐变风格
   */
  variant?: "primary" | "ocean" | "sunset";

  /**
   * 字体大小
   */
  size?: "inherit" | "sm" | "md" | "lg";
  
  /**
   * 是否添加动画效果
   */
  animated?: boolean;
}

export default function GradientText({
  children,
  variant = "primary",
  size = "inherit",
  className = "",
  ...props
}: GradientTextProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300",

    ocean:
      "bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500",

    sunset:
      "bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300",
  };

  const sizes = {
    inherit: "",
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  return (
    <span
      className={[
        variants[variant],
        sizes[size],
        "bg-clip-text text-transparent",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}