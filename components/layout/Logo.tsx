import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[1.1rem] font-bold tracking-tight",
        inverted ? "text-background" : "text-ink",
        className
      )}
    >
      <span className={cn("text-brand", inverted && "text-background/80")}>Laina</span>kompassi
    </span>
  );
}
