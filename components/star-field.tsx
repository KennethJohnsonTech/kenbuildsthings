"use client";

const stars = [
  { x: 42, y: 37 },
  { x: 1407, y: 95 },
  { x: 1383, y: 207 },
  { x: 365, y: 212 },
  { x: 33, y: 487 },
  { x: 988, y: 325 },
  { x: 1415, y: 563 },
  { x: 17, y: 762 },
  { x: 1175, y: 785 },
  { x: 1398, y: 870 },
  { x: 27, y: 965 },
  { x: 1402, y: 1185 },
  { x: 12, y: 1418 },
  { x: 1377, y: 1537 },
  { x: 38, y: 1695 },
  { x: 1413, y: 1835 },
  { x: 1392, y: 2145 },
  { x: 22, y: 2310 },
  { x: 1408, y: 2520 },
  { x: 45, y: 2690 },
];

function StarSvg() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="#E0E0E0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1l1.2 5.8 5.2 4.6-6.4-2.2-6.4 2.2 5.2-4.6z" />
    </svg>
  );
}

export function StarField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${(star.x / 1440) * 100}%`,
            top: star.y,
            animation: `twinkle ${3 + (i % 5) * 0.8}s ease-in-out ${i * 0.3}s infinite`,
          }}
        >
          <StarSvg />
        </div>
      ))}
    </div>
  );
}
