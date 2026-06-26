import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  tone = "default",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "canvas" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28 lg:py-32",
        tone === "canvas" && "bg-canvas",
        tone === "ink" && "bg-ink text-background",
        className
      )}
    >
      {children}
    </section>
  );
}
