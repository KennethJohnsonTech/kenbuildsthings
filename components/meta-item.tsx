"use client";

interface MetaItemProps {
  label: string;
  value: string;
}

export function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div className="flex gap-2.5">
      <div className="w-0.5 shrink-0 self-stretch bg-silver" />
      <div className="flex flex-col gap-0.5">
        <span className="font-mono text-[9px] font-bold tracking-wider text-dim">
          {label}
        </span>
        <span className="font-mono text-xs font-bold text-silver">{value}</span>
      </div>
    </div>
  );
}
