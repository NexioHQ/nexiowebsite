import {
  AppWindow,
  Braces,
  Database,
  KeyRound,
  ServerCog,
  Settings2,
  Users,
  type LucideIcon,
} from "lucide-react";
import logo from "@/assets/logo2.png";

/* -------------------------------------------------------------------------- */
/*  Hero — abstract application architecture                                   */
/*  Stacked application layers, API nodes, data pathways and access points.    */
/*  Deliberately geometric: no dashboards, no scanners, no shield clichés.     */
/* -------------------------------------------------------------------------- */

const PLANE_Y = [96, 226, 356, 486];
const PLANE_W = 186;
const PLANE_D = 48;
const PLANE_T = 12;
const PLANE_CX = 240;
const PLANE_DX = 14;

const planeTop = (cx: number, y: number) =>
  `M ${cx - PLANE_W} ${y} L ${cx} ${y - PLANE_D} L ${cx + PLANE_W} ${y} L ${cx} ${y + PLANE_D} Z`;

const planeSide = (cx: number, y: number, dir: -1 | 1) =>
  `M ${cx + dir * PLANE_W} ${y} L ${cx} ${y + PLANE_D} L ${cx} ${y + PLANE_D + PLANE_T} L ${cx + dir * PLANE_W} ${y + PLANE_T} Z`;

/** Access points sit exactly on the layer edges and front vertex. */
const accessPoints = (cx: number, y: number) => [
  { x: cx - PLANE_W / 2, y: y - PLANE_D / 2 },
  { x: cx + PLANE_W / 2, y: y - PLANE_D / 2 },
  { x: cx, y: y + PLANE_D },
];

/** Two access points are flagged as areas worth closer inspection. */
const ATTENTION: Record<number, number> = { 1: 1, 2: 2 };

export function HeroArchitectureVisual() {
  return (
    <svg
      viewBox="0 0 560 620"
      className="h-auto w-full"
      role="img"
      aria-label="Abstract diagram of connected application layers, API nodes, data pathways and access points"
    >
      <defs>
        <linearGradient id="cv-top" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="cv-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#132347" />
          <stop offset="100%" stopColor="#0A1428" />
        </linearGradient>
        <radialGradient id="cv-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.36" />
          <stop offset="70%" stopColor="#1D4ED8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0B1120" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cv-glow-2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </radialGradient>
        <pattern id="cv-grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M44 0 H0 V44" fill="none" stroke="#3B82F6" strokeOpacity="0.16" strokeWidth="1" />
        </pattern>
        <radialGradient id="cv-grid-fade" cx="50%" cy="48%" r="66%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <mask id="cv-grid-mask">
          <rect width="560" height="620" fill="url(#cv-grid-fade)" />
        </mask>
      </defs>

      <rect width="560" height="620" fill="url(#cv-grid)" mask="url(#cv-grid-mask)" />
      <ellipse cx="280" cy="300" rx="250" ry="270" fill="url(#cv-glow)" />
      <ellipse cx="430" cy="140" rx="150" ry="140" fill="url(#cv-glow-2)" />

      <g transform="translate(12,0)" className="animate-drift">
        <path
          d="M70 556 C150 520 168 470 232 452 C300 432 330 380 372 344 C420 302 452 250 472 196 C482 168 488 148 494 128"
          fill="none"
          stroke="#60A5FA"
          strokeOpacity="0.5"
          strokeWidth="1.4"
          strokeDasharray="6 8"
          className="animate-dash-flow"
        />

        {PLANE_Y.slice(0, -1).map((y, i) => {
          const cx = PLANE_CX + i * PLANE_DX;
          const nextCx = PLANE_CX + (i + 1) * PLANE_DX;
          return (
            <g key={y}>
              <line
                x1={cx}
                y1={y + PLANE_D + PLANE_T}
                x2={nextCx}
                y2={y + 130 - PLANE_D}
                stroke="#60A5FA"
                strokeOpacity="0.32"
                strokeWidth="1.2"
              />
              <circle cx={(cx + nextCx) / 2} cy={y + 71} r="2.6" fill="#93C5FD" fillOpacity="0.85" />
            </g>
          );
        })}

        {PLANE_Y.map((y, i) => {
          const cx = PLANE_CX + i * PLANE_DX;
          return (
            <g key={y}>
              <path d={planeSide(cx, y, -1)} fill="url(#cv-side)" stroke="#3B82F6" strokeOpacity="0.22" strokeWidth="1" />
              <path d={planeSide(cx, y, 1)} fill="url(#cv-side)" stroke="#3B82F6" strokeOpacity="0.22" strokeWidth="1" />
              <path d={planeTop(cx, y)} fill="url(#cv-top)" stroke="#60A5FA" strokeOpacity="0.45" strokeWidth="1.1" />

              {accessPoints(cx, y).map((p, j) =>
                ATTENTION[i] === j ? (
                  <g key={j}>
                    <circle cx={p.x} cy={p.y} r="15" fill="none" stroke="#F59E0B" strokeOpacity="0.14" className="animate-pulse-glow" />
                    <circle cx={p.x} cy={p.y} r="9" fill="none" stroke="#F59E0B" strokeOpacity="0.4" />
                    <circle cx={p.x} cy={p.y} r="4.4" fill="#FBBF24" />
                  </g>
                ) : (
                  <g key={j}>
                    <circle cx={p.x} cy={p.y} r="7" fill="none" stroke="#60A5FA" strokeOpacity="0.26" />
                    <circle cx={p.x} cy={p.y} r="3.1" fill="#BFDBFE" fillOpacity="0.9" />
                  </g>
                )
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Featured service — the application examined layer by layer                 */
/* -------------------------------------------------------------------------- */

interface ExaminedLayer {
  icon: LucideIcon;
  label: string;
  note: string;
  flagged?: boolean;
}

const EXAMINED_LAYERS: ExaminedLayer[] = [
  { icon: AppWindow, label: "Application", note: "Entry points, user flows and functionality" },
  { icon: KeyRound, label: "Authentication", note: "Sign-in, sessions and identity handling", flagged: true },
  { icon: Braces, label: "API", note: "Endpoints, tokens and returned data" },
  { icon: Database, label: "Database", note: "Access rules, storage and data boundaries" },
  { icon: Users, label: "User Access", note: "Roles, permissions and tenant separation", flagged: true },
  { icon: Settings2, label: "Configuration", note: "Secrets, security headers and environments", flagged: true },
  { icon: ServerCog, label: "Infrastructure", note: "Hosting, services and deployment settings" },
];

export function AssessmentStackVisual() {
  return (
    <div className="relative rounded-[30px] border border-slate-200/80 bg-white/70 p-3 shadow-[0_40px_100px_-60px_rgba(15,23,42,0.45)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-4">
      <div className="flex items-center justify-between px-2 pb-3 pt-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          Assessment scope
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
          End to end
        </span>
      </div>

      <ul className="relative space-y-2.5">
        <div
          className="pointer-events-none absolute bottom-6 left-[38px] top-6 w-px bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 dark:from-blue-500/10 dark:via-blue-500/25 dark:to-blue-500/10"
          aria-hidden="true"
        />
        {EXAMINED_LAYERS.map((layer, i) => (
          <li
            key={layer.label}
            className={`group relative flex items-center gap-4 rounded-2xl border bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 dark:bg-[#0F1B33] ${
              layer.flagged
                ? "border-blue-200/90 shadow-[0_16px_40px_-32px_rgba(37,99,235,0.9)] dark:border-blue-500/30"
                : "border-slate-200/70 dark:border-white/10"
            }`}
            style={{ transitionDelay: `${i * 15}ms` }}
          >
            <span
              className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                layer.flagged
                  ? "border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/25 dark:bg-blue-500/10 dark:text-blue-400"
                  : "border-slate-200/80 bg-slate-50 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
              }`}
            >
              <layer.icon className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{layer.label}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {layer.note}
              </p>
            </div>
            {layer.flagged && (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 animate-pulse-glow" aria-hidden="true" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Deliverables — report-inspired document (not a product interface)          */
/* -------------------------------------------------------------------------- */

const REPORT_CONTENTS = [
  "Executive Summary",
  "Security Findings",
  "Severity & Risk",
  "Technical Evidence",
  "Remediation Guidance",
];

const SEVERITY_LEGEND = [
  { label: "High", dot: "bg-rose-500" },
  { label: "Medium", dot: "bg-amber-500" },
  { label: "Low", dot: "bg-slate-400" },
];

export function ReportDocumentVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -bottom-3 left-5 right-5 h-full rounded-[24px] border border-white/70 bg-white/40 dark:border-white/10 dark:bg-white/[0.06]" aria-hidden="true" />
      <div className="absolute -bottom-1.5 left-2.5 right-2.5 h-full rounded-[24px] border border-white/80 bg-white/60 dark:border-white/10 dark:bg-white/[0.09]" aria-hidden="true" />

      <div className="relative rounded-[24px] border border-slate-200/90 bg-white p-6 shadow-[0_40px_90px_-55px_rgba(15,23,42,0.5)] dark:border-white/15 dark:bg-[#F7F9FD] sm:p-7">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Nexio Global" className="h-4 w-auto" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Confidential</span>
        </div>

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
          Security assessment
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">Findings Report</h3>

        <dl className="mt-5 grid grid-cols-2 gap-y-3 border-y border-slate-100 py-4">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Prepared for</dt>
            <dd className="mt-1 text-xs font-medium text-slate-700">Your application team</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Scope</dt>
            <dd className="mt-1 text-xs font-medium text-slate-700">Application, API &amp; configuration</dd>
          </div>
        </dl>

        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Contents</p>
        <ol className="mt-2 space-y-2.5">
          {REPORT_CONTENTS.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              <span className="text-[11px] font-medium tabular-nums text-slate-300">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xs font-medium text-slate-700">{item}</span>
              <span className="ml-2 h-px flex-1 bg-slate-100" />
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Severity</span>
          {SEVERITY_LEGEND.map((s) => (
            <span key={s.label} className="inline-flex items-center gap-1.5 text-xs text-slate-600">
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing CTA — restrained abstract geometry                                 */
/* -------------------------------------------------------------------------- */

export function CtaGeometry() {
  return (
    <svg
      viewBox="0 0 1200 560"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="cta-grid" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M64 0 H0 V64" fill="none" stroke="#93C5FD" strokeOpacity="0.12" strokeWidth="1" />
        </pattern>
        <radialGradient id="cta-fade" cx="50%" cy="50%" r="62%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <mask id="cta-mask">
          <rect width="1200" height="560" fill="url(#cta-fade)" />
        </mask>
        <radialGradient id="cta-glow" cx="15%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="560" fill="url(#cta-grid)" mask="url(#cta-mask)" />
      <ellipse cx="200" cy="120" rx="520" ry="380" fill="url(#cta-glow)" />

      <g fill="none" stroke="#93C5FD" strokeOpacity="0.14" strokeWidth="1">
        <path d="M1200 560 L -120 250" />
        <path d="M1200 560 L 120 560" />
        <path d="M1200 560 L 260 0" />
        <path d="M1200 560 L 700 0" />
        <path d="M1200 560 L 1080 0" />
      </g>

      <g fill="#BFDBFE" fillOpacity="0.35">
        <circle cx="360" cy="150" r="2.5" />
        <circle cx="620" cy="96" r="2.5" />
        <circle cx="880" cy="200" r="2.5" />
        <circle cx="470" cy="300" r="2.5" />
        <circle cx="200" cy="392" r="2.5" />
      </g>
    </svg>
  );
}

