import type { ReactNode } from "react";

type SectionHeaderProps = {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
  /** Override the default h2 className */
  titleClass?: string;
  /** Override the default subtitle paragraph className */
  subtitleClass?: string;
};

const DEFAULT_TITLE_CLASS = "mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl";
const DEFAULT_SUBTITLE_CLASS = "mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base";

export function SectionHeader({ kicker, title, subtitle, titleClass, subtitleClass }: SectionHeaderProps) {
  return (
    <>
      <p className="kicker">{kicker}</p>
      <h2 className={titleClass ?? DEFAULT_TITLE_CLASS}>{title}</h2>
      {subtitle && <p className={subtitleClass ?? DEFAULT_SUBTITLE_CLASS}>{subtitle}</p>}
    </>
  );
}
