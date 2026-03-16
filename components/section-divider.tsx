"use client";

export function SectionDivider() {
  return (
    <div className="w-full">
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #00C4B4 50%, transparent 100%)",
        }}
      />
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #181820 15%, #282830 50%, #181820 85%, transparent 100%)",
        }}
      />
    </div>
  );
}
