import { useEffect, useRef } from "react";

const GRID = 40;
const W = 1600;
const H = 900;

const pulseColors = [
  "oklch(0.83 0.11 35)",
  "oklch(0.92 0.09 122)",
  "oklch(0.83 0.18 75)",
];

function snap(value: number) {
  return Math.round(value / GRID) * GRID;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function choice<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function pointsToPath(points: Array<[number, number]>) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"}${point[0]},${point[1]}`).join(" ");
}

function makeEl(tag: string, attrs: Record<string, string>) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const key in attrs) {
    element.setAttribute(key, attrs[key]);
  }
  return element;
}

function buildTracePath(startX: number, startY: number, segments: number) {
  let x = snap(startX);
  let y = snap(startY);
  const points: Array<[number, number]> = [[x, y]];
  let lastAxis = Math.random() < 0.5 ? "h" : "v";

  for (let i = 0; i < segments; i += 1) {
    const axis = lastAxis === "h" ? "v" : "h";
    const step = choice([1, 2, 3]) * GRID * choice([-1, 1]);
    if (axis === "h") {
      x = Math.min(Math.max(x + step, 40), W - 40);
    } else {
      y = Math.min(Math.max(y + step, 40), H - 40);
    }
    points.push([x, y]);
    lastAxis = axis;
  }

  return points;
}

export default function CircuitBackground() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.innerHTML = "";

    const filterDefs = makeEl("defs", {});
    filterDefs.innerHTML =
      '<filter id="glow" x="-200%" y="-200%" width="500%" height="500%">' +
      '<feGaussianBlur stdDeviation="4" result="blur" />' +
      '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>' +
      "</filter>";
    svg.appendChild(filterDefs);

    const traceData: Array<{ id: string; length: number }> = [];
    const TRACE_COUNT = 24;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    for (let i = 0; i < TRACE_COUNT; i += 1) {
      const startX = rand(0, W);
      const startY = rand(0, H);
      const segments = Math.floor(rand(3, 7));
      const points = buildTracePath(startX, startY, segments);
      const d = pointsToPath(points);
      const id = `trace-${i}`;

      const path = makeEl("path", { d, class: "trace", id });
      svg.appendChild(path);

      const start = points[0];
      const end = points[points.length - 1];
      svg.appendChild(makeEl("circle", { cx: `${start[0]}`, cy: `${start[1]}`, r: "3", class: "pad" }));
      svg.appendChild(makeEl("circle", { cx: `${end[0]}`, cy: `${end[1]}`, r: "3", class: "pad" }));
      traceData.push({ id, length: path.getTotalLength() });
    }

    for (let i = 0; i < 5; i += 1) {
      const cx = snap(rand(160, W - 160));
      const cy = snap(rand(120, H - 120));
      const cw = choice([80, 100, 120]);
      const ch = choice([60, 80]);
      const group = makeEl("g", {});
      group.appendChild(
        makeEl("rect", {
          x: `${cx - cw / 2}`,
          y: `${cy - ch / 2}`,
          width: `${cw}`,
          height: `${ch}`,
          rx: "4",
          class: "chip",
        }),
      );
      const pins = 4;
      for (let s = 0; s < pins; s += 1) {
        const px = cx - cw / 2 + ((s + 1) * cw) / (pins + 1);
        group.appendChild(makeEl("line", { x1: `${px}`, y1: `${cy - ch / 2 - 8}`, x2: `${px}`, y2: `${cy - ch / 2}`, class: "chip-pin" }));
        group.appendChild(makeEl("line", { x1: `${px}`, y1: `${cy + ch / 2}`, x2: `${px}`, y2: `${cy + ch / 2 + 8}`, class: "chip-pin" }));
      }
      const led = makeEl("circle", {
        cx: `${cx + cw / 2 - 10}`,
        cy: `${cy - ch / 2 + 10}`,
        r: "3",
        fill: choice(pulseColors),
        class: "led",
        style: `animation-delay: ${rand(0, 3)}s`,
      });
      group.appendChild(led);
      svg.appendChild(group);
    }

    const glowGroup = makeEl("g", {});
    svg.appendChild(glowGroup);

    if (!reduceMotion) {
      const pulseTraces = [...traceData].sort(() => Math.random() - 0.5).slice(0, 10);
      pulseTraces.forEach((trace, index) => {
        const color = pulseColors[index % pulseColors.length];
        const circle = makeEl("circle", {
          r: "3.2",
          fill: color,
          class: "pulse",
          filter: "url(#glow)",
        });
        glowGroup.appendChild(circle);

        const animMotion = makeEl("animateMotion", {
          dur: `${rand(3.5, 7).toFixed(2)}s`,
          repeatCount: "indefinite",
          begin: `${rand(0, 4).toFixed(2)}s`,
        });
        const mpath = makeEl("mpath", {});
        mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${trace.id}`);
        animMotion.appendChild(mpath);
        circle.appendChild(animMotion);

        const animOpacity = makeEl("animate", {
          attributeName: "opacity",
          values: "0;1;1;0",
          keyTimes: "0;0.05;0.9;1",
          dur: animMotion.getAttribute("dur") ?? "5s",
          repeatCount: "indefinite",
          begin: animMotion.getAttribute("begin") ?? "0s",
        });
        circle.appendChild(animOpacity);
      });
    }
  }, []);

  return (
    <>
      <style>{`
        .circuit-bg {
          position: absolute;
          inset: 0;
          background: var(--ink);
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .circuit-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          background-position: -4px -4px;
        }

        .circuit-bg svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .trace {
          fill: none;
          stroke: oklch(1 0 0 / 0.14);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .pad {
          fill: oklch(1 0 0 / 0.16);
        }

        .chip {
          fill: oklch(1 0 0 / 0.045);
          stroke: oklch(1 0 0 / 0.16);
          stroke-width: 1.4;
        }

        .chip-pin {
          stroke: oklch(1 0 0 / 0.16);
          stroke-width: 1.4;
        }

        .led {
          animation: blink 3.6s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 18% { opacity: 0.15; }
          9% { opacity: 1; }
          100% { opacity: 0.15; }
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, oklch(0.15 0 0 / 0.55) 62%, oklch(0.15 0 0 / 0.92) 100%);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse,
          .led {
            animation: none !important;
          }
          .pulse {
            display: none;
          }
        }
      `}</style>
      <div className="circuit-bg" aria-hidden="true">
        <svg ref={svgRef} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" />
        <div className="vignette" />
      </div>
    </>
  );
}
