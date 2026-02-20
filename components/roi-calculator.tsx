"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/home/reveal";

const CURRENCY = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type RoiCalculatorProps = {
  bookingUrl: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function RoiCalculator({ bookingUrl }: RoiCalculatorProps) {
  const [callsPerMonth, setCallsPerMonth] = useState(600);
  const [avgCallLength, setAvgCallLength] = useState(3.5);
  const [agentsOnStaff, setAgentsOnStaff] = useState(1);
  const [closeRatePercent, setCloseRatePercent] = useState(30);

  const model = useMemo(() => {
    const closeRate = closeRatePercent / 100;

    const aiCost = callsPerMonth * avgCallLength * 0.1;
    const agentMonthlyCost = 4200;
    const baselineStaffCost = agentsOnStaff * agentMonthlyCost;
    const recoveredCapacity = baselineStaffCost * 0.22;
    const closeRateLift = clamp(closeRate - 0.22, 0, 0.35);
    const estimatedRecoveredRevenue = callsPerMonth * closeRateLift * 24;
    const monthlySavings = Math.max(recoveredCapacity + estimatedRecoveredRevenue - aiCost, 0);
    const roundedSavings = Math.round(monthlySavings / 10) * 10;

    return {
      aiCost,
      monthlySavings,
      roundedSavings,
      yearlySavings: monthlySavings * 12,
      baselineStaffCost,
      closeRateLift,
    };
  }, [agentsOnStaff, avgCallLength, callsPerMonth, closeRatePercent]);

  return (
    <section aria-label="ROI calculator" className="section-container section-space">
      <Reveal>
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">Calculate Your Savings</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-300 sm:text-base">
          Estimate capacity and revenue impact with transparent assumptions. Move sliders to model your workflow.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal as="article" className="lift-card p-5 sm:p-6">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Your Current Inputs</h3>

          <div className="mt-6 space-y-5">
            <SliderField
              id="calls-per-month"
              label="Calls per month"
              value={callsPerMonth}
              min={200}
              max={5000}
              step={50}
              format={(value) => value.toLocaleString()}
              onChange={setCallsPerMonth}
            />
            <SliderField
              id="avg-call-length"
              label="Average call length"
              value={avgCallLength}
              min={1}
              max={15}
              step={0.5}
              format={(value) => `${value.toFixed(1)} min`}
              onChange={setAvgCallLength}
            />
            <SliderField
              id="agents-on-staff"
              label="Agents on staff"
              value={agentsOnStaff}
              min={1}
              max={12}
              step={1}
              format={(value) => `${Math.round(value)}`}
              onChange={setAgentsOnStaff}
            />
            <SliderField
              id="close-rate"
              label="Close rate"
              value={closeRatePercent}
              min={10}
              max={60}
              step={1}
              format={(value) => `${Math.round(value)}%`}
              onChange={setCloseRatePercent}
            />
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-300">
            <p>
              Baseline staff cost: <span className="font-semibold text-white">{CURRENCY.format(model.baselineStaffCost)}</span>
            </p>
            <p className="mt-1">
              AI agent cost: <span className="font-semibold text-cyan-300">{CURRENCY.format(model.aiCost)}</span>
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal as="article" delayMs={80} className="roi-highlight-card">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">Estimated monthly savings</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {CURRENCY.format(model.roundedSavings)}
            </p>
            <p className="mt-2 text-sm text-slate-300">Based on recovered capacity + conversion lift - AI runtime costs.</p>
            <div className="mt-4 border-t border-white/15 pt-4">
              <p className="text-xs uppercase tracking-[0.11em] text-slate-300">Projected yearly impact</p>
              <p className="mt-1 text-2xl font-semibold text-cyan-300">{CURRENCY.format(model.yearlySavings)}</p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            <Reveal as="article" delayMs={120} className="lift-card p-4">
              <p className="text-sm font-semibold text-white">24/7 Availability</p>
              <p className="mt-1 text-xs text-slate-300">Never miss high-intent calls after hours.</p>
            </Reveal>
            <Reveal as="article" delayMs={160} className="lift-card p-4">
              <p className="text-sm font-semibold text-white">Instant Pickup</p>
              <p className="mt-1 text-xs text-slate-300">Answer within seconds, even during peak load.</p>
            </Reveal>
            <Reveal as="article" delayMs={200} className="lift-card p-4">
              <p className="text-sm font-semibold text-white">20 Calls At Once</p>
              <p className="mt-1 text-xs text-slate-300">Parallel conversations without hold queues.</p>
            </Reveal>
            <Reveal as="article" delayMs={240} className="lift-card p-4">
              <p className="text-sm font-semibold text-white">$0.10/Minute</p>
              <p className="mt-1 text-xs text-slate-300">Transparent runtime pricing model.</p>
            </Reveal>
          </div>

          <Reveal delayMs={280}>
            <a href={bookingUrl} data-cta="roi-primary" aria-label="Book Strategy Call" className="primary-btn w-full">
              Book Strategy Call
            </a>
          </Reveal>
        </div>
      </div>

    </section>
  );
}

function SliderField({
  id,
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (value: number) => string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-semibold text-cyan-300">{format(value)}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="range-input"
      />
      <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}
