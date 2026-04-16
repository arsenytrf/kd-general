import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "sky" | "outline" | "dark" | "white" | "ghost" | "clay";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  /** kept for API compat with older callers; no longer renders a clip-path */
  geometric?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  sky: "bg-sky-500 text-sand-50 hover:bg-sky-600 active:bg-sky-700 shadow-[0_4px_18px_-4px_rgba(44,74,62,0.35)] hover:shadow-[0_8px_24px_-4px_rgba(44,74,62,0.45)]",
  outline:
    "border border-sky-500 text-sky-500 bg-transparent hover:bg-sky-500 hover:text-sand-50 active:bg-sky-600",
  dark:
    "bg-slate-900 text-sand-50 hover:bg-slate-800 active:bg-slate-950 border border-slate-700",
  white:
    "bg-sand-50 text-slate-900 hover:bg-white active:bg-sand-100 shadow-[0_4px_18px_-4px_rgba(26,24,20,0.15)]",
  ghost:
    "text-slate-600 hover:text-sky-500 hover:bg-sand-100/60 active:bg-sand-100",
  clay:
    "bg-clay-500 text-sand-50 hover:bg-clay-600 active:bg-clay-700 shadow-[0_4px_18px_-4px_rgba(184,117,74,0.40)]",
};

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "px-5 py-2.5 text-[13px] gap-1.5 rounded-md",
  md: "px-7 py-3.5 text-sm gap-2 rounded-md",
  lg: "px-9 py-4 text-[15px] gap-2.5 rounded-sm",
};

export default function Button({
  variant = "sky",
  size = "md",
  children,
  className,
  geometric: _geometric,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center",
    "font-body font-medium tracking-normal",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer select-none whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
