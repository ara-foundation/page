/**
 * Interactive diagram — geometry mirrors public/ara_diagram.svg; keep both in sync.
 */
import React from "react";
import Badge from "@/components/badge/Badge";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/animate-ui/components/animate/tooltip";
import { cn } from "@/lib/utils";

const tooltipSurface = cn(
  "rounded-xs max-w-md h-auto text-pretty",
  "bg-white/90 backdrop-blur-md text-slate-800",
  "dark:bg-white/10 dark:backdrop-blur-md dark:text-slate-100",
  "border border-slate-200/50 dark:border-slate-700/50",
  "shadow-lg text-sm leading-snug",
);

const TOOLTIPS = {
  ckMalleable:
    "Ara combines blockchain, semantic web and open source to address malleable systems' problem. Blockchain provides an economy, semantic web provides description, open source provides software worth describing.",
  ckBlockchain:
    "Ara combines malleable systems, semantic web and open source to address blockchain's problem. Software semantics gives it a real use case: decentralized storage of what software means, combining open source with user agency.",
  ckSemantic:
    "Ara combines malleable systems, blockchain and open source to address semantic web's problem. Using it for open source apps and giving them malleability makes it valuable by storing on blockchain as collectively owned data.",
  ckOss:
    "Ara combines malleable systems, semantic web and blockchain to address open source's problem. Semantics and malleability make it modular. Blockchain provides money flow cascading to all modules and contributors.",
  softwareOwnership:
    "The result of malleable systems and blockchain combined. A protocol-level agreement that software is user-centric. Users can compose and reshape it beyond what was originally provided.",
  softwareSemantic:
    "Software semantic is using semantic web to describe web applications — making software discoverable and composable by meaning, not by platform curation.",
  ara: "Your device is a creative workspace, the internet is collective wisdom. Software ownership is possible through blockchain, because Ara acts as semantic storage and provides environment for software on computers.",
} as const;

function TooltipBody({ text }: { text: string }) {
  const parts = text.split(/(?<=\.)\s+/);
  return (
    <div className="space-y-2">
      {parts.map((chunk, i) => (
        <p key={i}>{chunk}</p>
      ))}
    </div>
  );
}

/** Circular “?” matching diagram checkmark circles — only used beside checkmarks. */
function DiagramHelpMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
      <circle
        className="fill-[#FAF9F6] stroke-[#1a1a18] dark:fill-[#2c2c2a] dark:stroke-[#F1EFE8]"
        cx="12"
        cy="12"
        r="11"
        strokeWidth="1"
      />
      <text
        x="12"
        y="12"
        className="fill-[#1a1a18] font-serif text-[13px] font-semibold dark:fill-[#F1EFE8]"
        dominantBaseline="central"
        textAnchor="middle"
      >
        ?
      </text>
    </svg>
  );
}

function TermBadge({
  text,
  ariaLabel,
}: {
  text: string;
  ariaLabel: string;
}) {
  return (
    <Tooltip sideOffset={10}>
      <TooltipTrigger asChild>
        <span
          className="inline-flex translate-y-px cursor-help select-none"
          tabIndex={0}
          aria-label={ariaLabel}
        >
          <Badge variant="info" static className="px-1 py-0 text-[0.65rem] leading-none">
            ?
          </Badge>
        </span>
      </TooltipTrigger>
      <TooltipContent className={tooltipSurface} layout="preserve-aspect">
        <TooltipBody text={text} />
      </TooltipContent>
    </Tooltip>
  );
}

function CheckHelpBadge({
  text,
  ariaLabel,
}: {
  text: string;
  ariaLabel: string;
}) {
  return (
    <Tooltip sideOffset={10}>
      <TooltipTrigger asChild>
        <span
          className="inline-flex cursor-help select-none items-center"
          tabIndex={0}
          aria-label={ariaLabel}
        >
          <DiagramHelpMark />
        </span>
      </TooltipTrigger>
      <TooltipContent className={tooltipSurface} layout="preserve-aspect">
        <TooltipBody text={text} />
      </TooltipContent>
    </Tooltip>
  );
}

function UnderlineRow({
  label,
  tooltipKey,
  ariaLabel,
}: {
  label: string;
  tooltipKey: keyof typeof TOOLTIPS;
  ariaLabel: string;
}) {
  return (
    <div className="inline-flex h-full w-full items-center justify-center gap-0.5 px-1">
      <span
        className={cn(
          "font-serif text-[12px] tracking-wide text-[#FAF9F6] dark:text-[#1a1a18]",
        )}
      >
        {label}
      </span>
      <TermBadge text={TOOLTIPS[tooltipKey]} ariaLabel={ariaLabel} />
    </div>
  );
}

const CHECK_PATH = "M7 12 L11 16 L18 8";

/** Native checkmarks sit on the hex stroke (drawn after polygon so they cover the line). */
function DiagramCheckmarks() {
  const mark = (cx: number, cy: number) => (
    <g key={`${cx}-${cy}`}>
      <circle
        className="fill-[#FAF9F6] stroke-[#1a1a18] dark:fill-[#2c2c2a] dark:stroke-[#F1EFE8]"
        cx={cx}
        cy={cy}
        r="11"
        strokeWidth="1"
      />
      <path
        className="fill-none stroke-[#1a1a18] stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round] dark:stroke-[#F1EFE8]"
        transform={`translate(${cx - 12} ${cy - 12})`}
        d={CHECK_PATH}
      />
    </g>
  );
  return (
    <g aria-hidden="true">
      {mark(272, 211)}
      {mark(408, 211)}
      {mark(272, 361)}
      {mark(408, 361)}
    </g>
  );
}

/** Tooltip trigger only; checkmark is drawn in SVG above. */
function CheckHelpHotspot({
  x,
  y,
  tooltipKey,
  ariaLabel,
}: {
  x: number;
  y: number;
  tooltipKey: keyof typeof TOOLTIPS;
  ariaLabel: string;
}) {
  return (
    <foreignObject x={x} y={y} width="28" height="28">
      <div
        {...({ xmlns: "http://www.w3.org/1999/xhtml" } as React.HTMLAttributes<HTMLDivElement>)}
        className="flex h-full w-full items-center justify-center"
      >
        <CheckHelpBadge text={TOOLTIPS[tooltipKey]} ariaLabel={ariaLabel} />
      </div>
    </foreignObject>
  );
}

export default function AraIntersectionDiagram() {
  return (
    <TooltipProvider openDelay={100}>
      <svg
        width="680"
        height="580"
        viewBox="0 0 680 580"
        role="img"
        aria-label="Ara at the intersection of four fields, shown as a hexagon diagram"
        className="mx-auto h-auto w-full max-w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Ara intersection</title>
        <desc>
          Hexagon layout with Ara at center; solid connectors run from Ara outward to the four
          corner ideas and to software ownership / software semantic.
        </desc>

        <defs>
          <marker
            id="arr-ara-diagram"
            viewBox="0 0 8 8"
            refX="6.5"
            refY="4"
            markerWidth="4.5"
            markerHeight="4.5"
            orient="auto"
          >
            <path
              d="M1 1.5 L6.5 4 L1 6.5"
              fill="none"
              stroke="context-stroke"
              strokeWidth="1.15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        <polygon
          className="fill-none stroke-neutral-300 dark:stroke-neutral-600"
          points="340,58 555,168 555,398 340,508 125,398 125,168"
          strokeWidth="1.25"
          strokeDasharray="6 4"
        />

        {/* Connectors: Ara outward (marker at outer end). Drawn before checks so marks sit on top. */}
        <line
          className="fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90"
          x1="317.6"
          y1="257.3"
          x2="266.8"
          y2="205"
          strokeWidth="1"
          strokeLinecap="round"
          markerEnd="url(#arr-ara-diagram)"
        />
        <line
          className="fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90"
          x1="362.4"
          y1="257.3"
          x2="415"
          y2="205"
          strokeWidth="1"
          strokeLinecap="round"
          markerEnd="url(#arr-ara-diagram)"
        />
        <line
          className="fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90"
          x1="322"
          y1="298.3"
          x2="267.4"
          y2="367.6"
          strokeWidth="1"
          strokeLinecap="round"
          markerEnd="url(#arr-ara-diagram)"
        />
        <line
          className="fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90"
          x1="358"
          y1="298.3"
          x2="414.3"
          y2="367.6"
          strokeWidth="1"
          strokeLinecap="round"
          markerEnd="url(#arr-ara-diagram)"
        />
        <line
          className="fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90"
          x1="340"
          y1="256"
          x2="340"
          y2="68"
          strokeWidth="1"
          strokeLinecap="round"
          markerEnd="url(#arr-ara-diagram)"
        />
        <line
          className="fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90"
          x1="340"
          y1="300"
          x2="340"
          y2="512"
          strokeWidth="1"
          strokeLinecap="round"
          markerEnd="url(#arr-ara-diagram)"
        />

        <DiagramCheckmarks />

        <rect
          className="fill-[#1a1a18] dark:fill-[#F1EFE8]"
          x="210"
          y="34"
          width="260"
          height="34"
          rx="17"
        />

        <rect
          className="fill-[#1a1a18] dark:fill-[#F1EFE8]"
          x="210"
          y="512"
          width="260"
          height="34"
          rx="17"
        />

        <rect
          className="fill-none stroke-neutral-900 dark:fill-[#2c2c2a] dark:stroke-[#9a9a92]"
          x="52"
          y="132"
          width="196"
          height="58"
          rx="5"
          strokeWidth="1"
        />
        <text
          className="fill-neutral-900 font-serif text-[13px] font-bold dark:fill-[#F1EFE8]"
          x="150"
          y="155"
          textAnchor="middle"
        >
          Malleable systems
        </text>
        <text
          className="fill-[#5a5a55] font-serif text-[11px] dark:fill-[#B4B2A9]"
          x="150"
          y="176"
          textAnchor="middle"
        >
          No platform to compete
        </text>

        <rect
          className="fill-none stroke-neutral-900 dark:fill-[#2c2c2a] dark:stroke-[#9a9a92]"
          x="432"
          y="132"
          width="196"
          height="58"
          rx="5"
          strokeWidth="1"
        />
        <text
          className="fill-neutral-900 font-serif text-[13px] font-bold dark:fill-[#F1EFE8]"
          x="530"
          y="155"
          textAnchor="middle"
        >
          Blockchain
        </text>
        <text
          className="fill-[#5a5a55] font-serif text-[11px] dark:fill-[#B4B2A9]"
          x="530"
          y="176"
          textAnchor="middle"
        >
          Needs a real use case
        </text>

        <rect
          className="fill-none stroke-neutral-900 dark:fill-[#2c2c2a] dark:stroke-[#9a9a92]"
          x="52"
          y="390"
          width="196"
          height="58"
          rx="5"
          strokeWidth="1"
        />
        <text
          className="fill-neutral-900 font-serif text-[13px] font-bold dark:fill-[#F1EFE8]"
          x="150"
          y="413"
          textAnchor="middle"
        >
          Semantic web
        </text>
        <text
          className="fill-[#5a5a55] font-serif text-[11px] dark:fill-[#B4B2A9]"
          x="150"
          y="434"
          textAnchor="middle"
        >
          {"Built for data, didn't work"}
        </text>

        <rect
          className="fill-none stroke-neutral-900 dark:fill-[#2c2c2a] dark:stroke-[#9a9a92]"
          x="432"
          y="390"
          width="196"
          height="58"
          rx="5"
          strokeWidth="1"
        />
        <text
          className="fill-neutral-900 font-serif text-[13px] font-bold dark:fill-[#F1EFE8]"
          x="530"
          y="413"
          textAnchor="middle"
        >
          Open source
        </text>
        <text
          className="fill-[#5a5a55] font-serif text-[11px] dark:fill-[#B4B2A9]"
          x="530"
          y="434"
          textAnchor="middle"
        >
          Needs sustainability
        </text>

        <rect
          className="fill-[#1a1a18] dark:fill-[#F1EFE8]"
          x="286"
          y="256"
          width="108"
          height="44"
          rx="5"
        />

        <foreignObject x="210" y="34" width="260" height="34">
          <div
            {...({ xmlns: "http://www.w3.org/1999/xhtml" } as React.HTMLAttributes<HTMLDivElement>)}
            className="flex h-full w-full items-stretch"
          >
            <UnderlineRow
              label="software ownership"
              tooltipKey="softwareOwnership"
              ariaLabel="Tooltip: software ownership"
            />
          </div>
        </foreignObject>

        <foreignObject x="210" y="512" width="260" height="34">
          <div
            {...({ xmlns: "http://www.w3.org/1999/xhtml" } as React.HTMLAttributes<HTMLDivElement>)}
            className="flex h-full w-full items-stretch"
          >
            <UnderlineRow
              label="software semantic"
              tooltipKey="softwareSemantic"
              ariaLabel="Tooltip: software semantic"
            />
          </div>
        </foreignObject>

        <foreignObject x="286" y="256" width="108" height="44">
          <div
            {...({ xmlns: "http://www.w3.org/1999/xhtml" } as React.HTMLAttributes<HTMLDivElement>)}
            className="flex h-full w-full items-center justify-center"
          >
            <div className="inline-flex items-baseline gap-0.5">
              <span
                className={cn(
                  "font-serif text-[15px] font-bold tracking-wide text-[#FAF9F6] dark:text-[#1a1a18]",
                )}
              >
                Ara
              </span>
              <TermBadge text={TOOLTIPS.ara} ariaLabel="Tooltip: Ara" />
            </div>
          </div>
        </foreignObject>

        <CheckHelpHotspot
          x={285}
          y={199}
          tooltipKey="ckMalleable"
          ariaLabel="Why Ara addresses malleable systems"
        />
        <CheckHelpHotspot
          x={367}
          y={199}
          tooltipKey="ckBlockchain"
          ariaLabel="Why Ara addresses blockchain"
        />
        <CheckHelpHotspot
          x={285}
          y={349}
          tooltipKey="ckSemantic"
          ariaLabel="Why Ara addresses semantic web"
        />
        <CheckHelpHotspot
          x={367}
          y={349}
          tooltipKey="ckOss"
          ariaLabel="Why Ara addresses open source"
        />
      </svg>
    </TooltipProvider>
  );
}
