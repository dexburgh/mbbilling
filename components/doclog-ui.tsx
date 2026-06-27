"use client";

import React from "react";

// ─── Layout Shells ───────────────────────────────────────────────

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F14] text-[#DDE7F5]">
      {children}
    </div>
  );
}

export function ContentShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:p-6">{children}</main>
  );
}

// ─── App Header ──────────────────────────────────────────────────

interface AppHeaderProps {
  title: string;
  byline?: string;
  tagline?: string;
  subline?: string;
  right?: React.ReactNode;
}

export function AppHeader({ title, byline, tagline, subline, right }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-[#1F242C] bg-[#0B0F14]/90 px-4 py-3 backdrop-blur-md md:px-6">
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-black uppercase tracking-[0.15em] text-[#E8F1FF]">
            {title}
          </span>
          {byline && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#00C2D1]">
              {byline}
            </span>
          )}
        </div>
        {tagline && (
          <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#6C7A89]">
            {tagline}
            {subline && (
              <span className="ml-2 text-[#4A5568]">• {subline}</span>
            )}
          </span>
        )}
      </div>
      {right && (
        <div className="flex items-center gap-2">{right}</div>
      )}
    </header>
  );
}

// ─── Card ────────────────────────────────────────────────────────

interface AppCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AppCard({ children, className = "" }: AppCardProps) {
  return (
    <div
      className={`rounded-[16px] border border-[#1F242C] bg-[#10141A] p-4 ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Typography ──────────────────────────────────────────────────

interface ClassNameProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: ClassNameProps) {
  return (
    <h2
      className={`mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#A9B7CA] ${className}`}
    >
      {children}
    </h2>
  );
}

export function FieldLabel({ children, className = "" }: ClassNameProps) {
  return (
    <label
      className={`mb-1 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7F8FA3] ${className}`}
    >
      {children}
    </label>
  );
}

// ─── Input primitives ────────────────────────────────────────────

export const inputClassName =
  "w-full rounded-[10px] border border-[#1F242C] bg-[#14181F] px-3 py-2 text-xs font-medium text-[#E8F1FF] placeholder:text-[#4A5568] outline-none transition focus:border-[#00C2D1] focus:shadow-[0_0_0_3px_rgba(0,194,209,0.12)]";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClassName} ${props.className ?? ""}`} />;
}

export function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`${inputClassName} cursor-pointer appearance-none ${props.className ?? ""}`}
    />
  );
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${inputClassName} resize-none ${props.className ?? ""}`}
    />
  );
}

// ─── Stat Pill ───────────────────────────────────────────────────

interface StatPillProps {
  label: string;
  value: string | number;
  className?: string;
}

export function StatPill({ label, value, className = "" }: StatPillProps) {
  return (
    <div
      className={`flex flex-col items-center rounded-[10px] border border-[#1F242C] bg-[#14181F] px-3 py-1.5 ${className}`}
    >
      <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#6C7A89]">
        {label}
      </span>
      <span className="font-mono text-sm font-bold text-[#E8F1FF]">{value}</span>
    </div>
  );
}

// ─── Exit Button ─────────────────────────────────────────────────

interface ExitButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function ExitButton({ children, onClick }: ExitButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-[10px] border border-[#5A2323] bg-[#2A1313] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-red-400 transition hover:bg-[#3A1A1A]"
    >
      {children}
    </button>
  );
}

// ─── Metric Tile ─────────────────────────────────────────────────

type MetricEmphasis = "accent" | "primary" | "success" | "warning";

interface MetricTileProps {
  label: string;
  value: string | number;
  emphasis?: MetricEmphasis;
}

const emphasisColors: Record<MetricEmphasis, string> = {
  accent: "text-[#00C2D1]",
  primary: "text-[#E8F1FF]",
  success: "text-[#A8FFEA]",
  warning: "text-[#E7B75B]",
};

export function MetricTile({ label, value, emphasis = "primary" }: MetricTileProps) {
  return (
    <div className="flex flex-col items-center rounded-[12px] border border-[#1F242C] bg-[#14181F] p-3 text-center">
      <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#6C7A89]">
        {label}
      </span>
      <span
        className={`mt-1 font-mono text-base font-bold ${emphasisColors[emphasis]}`}
      >
        {value}
      </span>
    </div>
  );
}

// ─── Message Bubble ──────────────────────────────────────────────

interface MessageBubbleProps {
  children: React.ReactNode;
  isMine: boolean;
  timestamp?: string;
}

export function MessageBubble({ children, isMine, timestamp }: MessageBubbleProps) {
  return (
    <div className={`flex flex-col ${isMine ? "items-end" : "items-start"}`}>
      <div
        className={`max-w-[85%] rounded-[12px] px-3 py-2 text-xs leading-relaxed ${
          isMine
            ? "bg-[#16232A] text-[#DDE7F5] border border-[#00C2D1]/30"
            : "bg-[#14181F] text-[#A9B7CA] border border-[#1F242C]"
        }`}
      >
        {children}
      </div>
      {timestamp && (
        <span className="mt-0.5 text-[9px] text-[#4A5568]">{timestamp}</span>
      )}
    </div>
  );
}

// ─── Ticket List Item ────────────────────────────────────────────

interface TicketListItemProps {
  title: React.ReactNode;
  subtitle?: string;
  active?: boolean;
  onClick?: () => void;
}

export function TicketListItem({ title, subtitle, active, onClick }: TicketListItemProps) {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer rounded-[10px] border px-2 py-1.5 transition ${
        active
          ? "border-[#00C2D1] bg-[#16232A]"
          : "border-transparent hover:bg-[#111820]"
      }`}
    >
      <p className="truncate text-[11px] font-semibold text-[#DDE7F5]">{title}</p>
      {subtitle && (
        <p className="truncate text-[9px] text-[#6C7A89]">{subtitle}</p>
      )}
    </li>
  );
}
