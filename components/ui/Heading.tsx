import { ReactNode } from "react";
import GradientText from "./GradientText";

interface HeadingProps {
  /**
   * 小标题
   */
  subtitle?: ReactNode;

  /**
   * 主标题
   */
  title: ReactNode;

  /**
   * 高亮文字
   */
  highlight?: ReactNode;

  /**
   * 描述
   */
  description?: ReactNode;

  /**
   * 对齐方式
   */
  align?: "left" | "center";

  /**
   * 自定义样式
   */
  className?: string;
}

export default function Heading({
  subtitle,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}: HeadingProps) {
  const alignment = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <div className={`${alignment[align]} ${className}`}>
      {subtitle && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-bold leading-tight text-white md:text-7xl">
        {title}

        {highlight && (
          <>
            <br />
            <GradientText>
              {highlight}
            </GradientText>
          </>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
          {description}
        </p>
      )}
    </div>
  );
}