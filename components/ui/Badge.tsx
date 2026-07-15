import { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  variant?: "glass" | "primary" | "outline";
}

export default function Badge({
  children,
  variant = "glass",
  className = "",
  ...props
}: BadgeProps) {
  const variants = {
    glass:
      "border border-white/20 bg-white/10 text-white backdrop-blur",

    primary:
      "bg-indigo-600 text-white",

    outline:
      "border border-white/30 text-white",
  };

  return (
    <div
      className={[
        "inline-flex items-center rounded-full px-5 py-2 text-sm font-medium",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}