import { ReactNode } from "react";
import { CONTAINER_SIZES } from "@/constants/layout";


interface ContainerProps {
  children: ReactNode;

  /**
   * 最大宽度
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";

  /**
   * 自定义样式
   */
  className?: string;
}

export default function Container({
  children,
  size = "xl",
  className = "",
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={[
        "mx-auto w-full px-6",
        sizes[size],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}