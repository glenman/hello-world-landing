import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;

  /**
   * HTML id
   */
  id?: string;

  /**
   * 上下间距
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";

  /**
   * 背景样式
   */
  background?: "transparent" | "light" | "dark";

  /**
   * 自定义样式
   */
  className?: string;
}

export default function Section({
  children,
  id,
  spacing = "lg",
  background = "transparent",
  className = "",
}: SectionProps) {
  const spacings = {
    none: "",
    sm: "py-12",
    md: "py-20",
    lg: "py-24",
    xl: "py-32",
  };

  const backgrounds = {
    transparent: "",
    light: "bg-white",
    dark: "bg-slate-950",
  };

  return (
    <section
      id={id}
      className={[
        spacings[spacing],
        backgrounds[background],
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}