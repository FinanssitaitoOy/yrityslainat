"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

function format(n: number, decimals: number, prefix: string, suffix: string) {
  return (
    prefix +
    n.toLocaleString("fi-FI", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix
  );
}

export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 70,
    damping: 22,
    mass: 0.8,
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest, decimals, prefix, suffix);
      }
    });
    return unsubscribe;
  }, [spring, decimals, prefix, suffix]);

  if (reduce) {
    return (
      <span className={className} aria-label={format(value, decimals, prefix, suffix)}>
        {format(value, decimals, prefix, suffix)}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={className}
      aria-label={format(value, decimals, prefix, suffix)}
      aria-live="off"
    >
      {format(0, decimals, prefix, suffix)}
    </span>
  );
}
