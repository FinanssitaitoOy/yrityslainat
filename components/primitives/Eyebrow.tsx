import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="inline-block h-px w-6 bg-accent"
      />
      {children}
    </span>
  );
}
