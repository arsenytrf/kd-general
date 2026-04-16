import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div
      className={cn("max-w-3xl mb-14 md:mb-20", alignClasses[align], className)}
    >
      {label && (
        <div className="mb-4">
          <span
            className={cn(
              "inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-body uppercase tracking-[0.22em] font-semibold",
              light ? "text-sky-500" : "text-sand-300"
            )}
          >
            <span className={cn("w-6 h-px", light ? "bg-sky-500" : "bg-sand-300")} aria-hidden="true" />
            {label}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-[34px] sm:text-[42px] md:text-5xl lg:text-[56px] font-bold uppercase tracking-tight leading-[1.03]",
          light ? "text-slate-900" : "text-sand-50"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 md:mt-6 text-[15px] sm:text-base leading-relaxed max-w-2xl font-body",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            light ? "text-slate-600" : "text-sand-200/80"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
