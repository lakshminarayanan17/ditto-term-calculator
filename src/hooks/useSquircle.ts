"use client";

import { useEffect, useRef } from "react";
import { getSvgPath } from "figma-squircle";

export function useSquircle(cornerRadius: number, cornerSmoothing = 0.6) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      const path = getSvgPath({ width, height, cornerRadius, cornerSmoothing });
      el.style.clipPath = `path('${path}')`;
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [cornerRadius, cornerSmoothing]);

  return ref;
}
