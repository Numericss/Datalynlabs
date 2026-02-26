export type MetricFormat = {
  /** Numeric value to animate toward */
  target: number;
  /** Number of decimal places to display */
  decimals: number;
  /** String prepended before the number (e.g. "$") */
  prefix: string;
  /** String appended after the number (e.g. "%", "x", " hrs") */
  suffix: string;
};

/**
 * Parses a human-readable metric string into its numeric components.
 *
 * Supported formats:
 * - Percentage: `"38%"` → `{ target: 38, suffix: "%" }`
 * - Multiplier: `"3.1x"` → `{ target: 3.1, decimals: 1, suffix: "x" }`
 * - Hours:      `"62 hrs"` → `{ target: 62, suffix: " hrs" }`
 * - Plain:      `"100"` → `{ target: 100, suffix: "" }`
 */
export function parseMetric(value: string): MetricFormat {
  if (value.endsWith("%")) {
    return { target: Number.parseFloat(value), decimals: 0, prefix: "", suffix: "%" };
  }

  if (value.endsWith("x")) {
    return { target: Number.parseFloat(value), decimals: 1, prefix: "", suffix: "x" };
  }

  if (value.includes("hrs")) {
    return { target: Number.parseFloat(value), decimals: 0, prefix: "", suffix: " hrs" };
  }

  return { target: Number.parseFloat(value), decimals: 0, prefix: "", suffix: "" };
}
