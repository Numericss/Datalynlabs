"use client";

import { useState } from "react";
import { Reveal } from "@/components/home/reveal";
import type { FaqItem } from "@/lib/home-content";

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-band border-y border-white/10 section-space">
      <div className="section-container">
        <p className="kicker">FAQ</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Strategic Clarity Before You Deploy{" "}
          <span className="text-cyan-300">AI Voice Infrastructure</span>
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Clear implementation answers for teams evaluating rollout speed, reliability, and conversion outcomes.
        </p>

        <div className="mt-10 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <Reveal key={item.question} delayMs={index * 45}>
                <article className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                      className="faq-trigger"
                    >
                      <span className="pr-4 text-left text-base font-semibold text-white sm:text-lg">{item.question}</span>
                      <span className={`faq-plus ${isOpen ? "faq-plus-open" : ""}`} aria-hidden>
                        <span className="faq-plus-line" />
                        <span className="faq-plus-line faq-plus-line-v" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`faq-panel ${isOpen ? "faq-panel-open" : ""}`}
                  >
                    <div className="faq-panel-inner">
                      <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{item.answer}</p>
                      {item.details?.map((line) => (
                        <p key={line} className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                          {line}
                        </p>
                      ))}
                      {item.bullets ? (
                        <ul className="mt-3 space-y-2">
                          {item.bullets.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                              <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,212,255,0.75)]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
