/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ClassValue, clsx } from "clsx";
import { cubicOut } from "svelte/easing";
import { twMerge } from "tailwind-merge";

const transitionDuration = 200;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FlyAndScaleParameters {
  duration?: number;
  start?: number;
  x?: number;
  y?: number;
}

export const flyAndScale = (
  node: Element,
  { duration = 150, start = 0.95, x = 0, y = -8 }: FlyAndScaleParameters,
) => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;

  const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;

    const percentage = (valueA - minA) / (maxA - minA);

    return percentage * (maxB - minB) + minB;
  };

  const styleToString = (style: { [key: string]: number | string | undefined }): string =>
    Object.keys(style).reduce((string_, key) => {
      if (style[key] === undefined) {
        return string_;
      }

      return `${string_}${key}:${style[key]};`;
    }, "");

  return {
    css: (t) => {
      const cssY = scaleConversion(t, [0, 1], [y ?? 5, 0]);
      const cssX = scaleConversion(t, [0, 1], [x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [start ?? 0.95, 1]);

      return styleToString({
        opacity: t,
        transform: `${transform} translate3d(${cssX}px, ${cssY}px, 0) scale(${scale})`,
      });
    },

    delay: 0,
    duration: duration ?? transitionDuration,
    easing: cubicOut,
  };
};
