import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead, p as addAttribute } from '../chunks/astro/server_DQ3wOqi7.mjs';
import { $ as $$MinimalDarkLayout } from '../chunks/MinimalDarkLayout_DRUSXn-b.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import React__default from 'react';
import { B as Badge } from '../chunks/Badge_B8Esv6UX.mjs';
import { C as Component, T as TooltipProvider, a as Tooltip, b as TooltipTrigger, c as TooltipContent } from '../chunks/Tooltip_BRAqOQb0.mjs';
import { a as cn, c as companyInfo, s as socialLinks } from '../chunks/Analytics_B_TfxMA7.mjs';
export { renderers } from '../renderers.mjs';

function Term({ href, label, tooltip }) {
  const body = /* @__PURE__ */ jsxs("div", { className: "max-w-sm space-y-2 text-sm leading-snug", children: [
    /* @__PURE__ */ jsx("p", { children: tooltip }),
    /* @__PURE__ */ jsx("p", { className: "underline", children: "Visit the link to view more." })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "inline-flex items-baseline gap-0.5", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-inherit underline underline-offset-2 decoration-neutral-400 transition-opacity hover:opacity-90 dark:decoration-neutral-500",
        children: label
      }
    ),
    /* @__PURE__ */ jsx(Component, { content: body, openDelay: 100, tooltipClassName: "text-sm", children: /* @__PURE__ */ jsx(
      "span",
      {
        className: "inline-flex translate-y-px cursor-help select-none",
        tabIndex: 0,
        "aria-label": `Short definition of ${label}`,
        children: /* @__PURE__ */ jsx(Badge, { variant: "info", static: true, className: "px-1 py-0 text-[0.65rem] leading-none", children: "?" })
      }
    ) })
  ] });
}
const TERMS = [
  {
    href: "https://en.wikipedia.org/wiki/Blockchain",
    label: "blockchain",
    tooltip: "Decentralized deterministic state machine, others call it decentralized public ledger."
  },
  {
    href: "https://www.inkandswitch.com/essay/malleable-software/",
    label: "malleable software",
    tooltip: "Tools that users can reshape with minimal friction to suit their unique needs. Modification becomes routine, not exceptional."
  },
  {
    href: "https://en.wikipedia.org/wiki/Semantic_Web",
    label: "semantic web",
    tooltip: "Make internet data machine readable."
  },
  {
    href: "https://en.wikipedia.org/wiki/Open-source_software",
    label: "open-source software",
    tooltip: "Software released under license and copyright distributing with source code."
  }
];
function WhatIsAraIntersectionTerms() {
  return /* @__PURE__ */ jsx(Fragment, { children: TERMS.map((t, i) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
    i > 0 && (i === TERMS.length - 1 ? " and " : ", "),
    /* @__PURE__ */ jsx(Term, { ...t })
  ] }, t.href)) });
}

const tooltipSurface = cn(
  "rounded-xs max-w-md h-auto text-pretty",
  "bg-white/90 backdrop-blur-md text-slate-800",
  "dark:bg-white/10 dark:backdrop-blur-md dark:text-slate-100",
  "border border-slate-200/50 dark:border-slate-700/50",
  "shadow-lg text-sm leading-snug"
);
const TOOLTIPS = {
  ckMalleable: "Ara combines blockchain, semantic web and open source to address malleable systems' problem. Blockchain provides an economy, semantic web provides description, open source provides software worth describing.",
  ckBlockchain: "Ara combines malleable systems, semantic web and open source to address blockchain's problem. Software semantics gives it a real use case: decentralized storage of what software means, combining open source with user agency.",
  ckSemantic: "Ara combines malleable systems, blockchain and open source to address semantic web's problem. Using it for open source apps and giving them malleability makes it valuable by storing on blockchain as collectively owned data.",
  ckOss: "Ara combines malleable systems, semantic web and blockchain to address open source's problem. Semantics and malleability make it modular. Blockchain provides money flow cascading to all modules and contributors.",
  softwareOwnership: "The result of malleable systems and blockchain combined. A protocol-level agreement that software is user-centric. Users can compose and reshape it beyond what was originally provided.",
  softwareSemantic: "Software semantic is using semantic web to describe web applications — making software discoverable and composable by meaning, not by platform curation.",
  ara: "Your device is a creative workspace, the internet is collective wisdom. Software ownership is possible through blockchain, because Ara acts as semantic storage and provides environment for software on computers."
};
function TooltipBody({ text }) {
  const parts = text.split(/(?<=\.)\s+/);
  return /* @__PURE__ */ jsx("div", { className: "space-y-2", children: parts.map((chunk, i) => /* @__PURE__ */ jsx("p", { children: chunk }, i)) });
}
function DiagramHelpMark() {
  return /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", className: "shrink-0", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx(
      "circle",
      {
        className: "fill-[#FAF9F6] stroke-[#1a1a18] dark:fill-[#2c2c2a] dark:stroke-[#F1EFE8]",
        cx: "12",
        cy: "12",
        r: "11",
        strokeWidth: "1"
      }
    ),
    /* @__PURE__ */ jsx(
      "text",
      {
        x: "12",
        y: "12",
        className: "fill-[#1a1a18] font-serif text-[13px] font-semibold dark:fill-[#F1EFE8]",
        dominantBaseline: "central",
        textAnchor: "middle",
        children: "?"
      }
    )
  ] });
}
function TermBadge({
  text,
  ariaLabel
}) {
  return /* @__PURE__ */ jsxs(Tooltip, { sideOffset: 10, children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      "span",
      {
        className: "inline-flex translate-y-px cursor-help select-none",
        tabIndex: 0,
        "aria-label": ariaLabel,
        children: /* @__PURE__ */ jsx(Badge, { variant: "info", static: true, className: "px-1 py-0 text-[0.65rem] leading-none", children: "?" })
      }
    ) }),
    /* @__PURE__ */ jsx(TooltipContent, { className: tooltipSurface, layout: "preserve-aspect", children: /* @__PURE__ */ jsx(TooltipBody, { text }) })
  ] });
}
function CheckHelpBadge({
  text,
  ariaLabel
}) {
  return /* @__PURE__ */ jsxs(Tooltip, { sideOffset: 10, children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      "span",
      {
        className: "inline-flex cursor-help select-none items-center",
        tabIndex: 0,
        "aria-label": ariaLabel,
        children: /* @__PURE__ */ jsx(DiagramHelpMark, {})
      }
    ) }),
    /* @__PURE__ */ jsx(TooltipContent, { className: tooltipSurface, layout: "preserve-aspect", children: /* @__PURE__ */ jsx(TooltipBody, { text }) })
  ] });
}
function UnderlineRow({
  label,
  tooltipKey,
  ariaLabel
}) {
  return /* @__PURE__ */ jsxs("div", { className: "inline-flex h-full w-full items-center justify-center gap-0.5 px-1", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "font-serif text-[12px] tracking-wide text-[#FAF9F6] dark:text-[#1a1a18]"
        ),
        children: label
      }
    ),
    /* @__PURE__ */ jsx(TermBadge, { text: TOOLTIPS[tooltipKey], ariaLabel })
  ] });
}
const CHECK_PATH = "M7 12 L11 16 L18 8";
function DiagramCheckmarks() {
  const mark = (cx, cy) => /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "circle",
      {
        className: "fill-[#FAF9F6] stroke-[#1a1a18] dark:fill-[#2c2c2a] dark:stroke-[#F1EFE8]",
        cx,
        cy,
        r: "11",
        strokeWidth: "1"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        className: "fill-none stroke-[#1a1a18] stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round] dark:stroke-[#F1EFE8]",
        transform: `translate(${cx - 12} ${cy - 12})`,
        d: CHECK_PATH
      }
    )
  ] }, `${cx}-${cy}`);
  return /* @__PURE__ */ jsxs("g", { "aria-hidden": "true", children: [
    mark(272, 211),
    mark(408, 211),
    mark(272, 361),
    mark(408, 361)
  ] });
}
function CheckHelpHotspot({
  x,
  y,
  tooltipKey,
  ariaLabel
}) {
  return /* @__PURE__ */ jsx("foreignObject", { x, y, width: "28", height: "28", children: /* @__PURE__ */ jsx(
    "div",
    {
      ...{ xmlns: "http://www.w3.org/1999/xhtml" },
      className: "flex h-full w-full items-center justify-center",
      children: /* @__PURE__ */ jsx(CheckHelpBadge, { text: TOOLTIPS[tooltipKey], ariaLabel })
    }
  ) });
}
function AraIntersectionDiagram() {
  return /* @__PURE__ */ jsx(TooltipProvider, { openDelay: 100, children: /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "680",
      height: "580",
      viewBox: "0 0 680 580",
      role: "img",
      "aria-label": "Ara at the intersection of four fields, shown as a hexagon diagram",
      className: "mx-auto h-auto w-full max-w-full",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Ara intersection" }),
        /* @__PURE__ */ jsx("desc", { children: "Hexagon layout with Ara at center; solid connectors run from Ara outward to the four corner ideas and to software ownership / software semantic." }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
          "marker",
          {
            id: "arr-ara-diagram",
            viewBox: "0 0 8 8",
            refX: "6.5",
            refY: "4",
            markerWidth: "4.5",
            markerHeight: "4.5",
            orient: "auto",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M1 1.5 L6.5 4 L1 6.5",
                fill: "none",
                stroke: "context-stroke",
                strokeWidth: "1.15",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            className: "fill-none stroke-neutral-300 dark:stroke-neutral-600",
            points: "340,58 555,168 555,398 340,508 125,398 125,168",
            strokeWidth: "1.25",
            strokeDasharray: "6 4"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            className: "fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90",
            x1: "317.6",
            y1: "257.3",
            x2: "266.8",
            y2: "205",
            strokeWidth: "1",
            strokeLinecap: "round",
            markerEnd: "url(#arr-ara-diagram)"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            className: "fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90",
            x1: "362.4",
            y1: "257.3",
            x2: "415",
            y2: "205",
            strokeWidth: "1",
            strokeLinecap: "round",
            markerEnd: "url(#arr-ara-diagram)"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            className: "fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90",
            x1: "322",
            y1: "298.3",
            x2: "267.4",
            y2: "367.6",
            strokeWidth: "1",
            strokeLinecap: "round",
            markerEnd: "url(#arr-ara-diagram)"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            className: "fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90",
            x1: "358",
            y1: "298.3",
            x2: "414.3",
            y2: "367.6",
            strokeWidth: "1",
            strokeLinecap: "round",
            markerEnd: "url(#arr-ara-diagram)"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            className: "fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90",
            x1: "340",
            y1: "256",
            x2: "340",
            y2: "68",
            strokeWidth: "1",
            strokeLinecap: "round",
            markerEnd: "url(#arr-ara-diagram)"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            className: "fill-none stroke-neutral-900/85 dark:stroke-[#F1EFE8]/90",
            x1: "340",
            y1: "300",
            x2: "340",
            y2: "512",
            strokeWidth: "1",
            strokeLinecap: "round",
            markerEnd: "url(#arr-ara-diagram)"
          }
        ),
        /* @__PURE__ */ jsx(DiagramCheckmarks, {}),
        /* @__PURE__ */ jsx(
          "rect",
          {
            className: "fill-[#1a1a18] dark:fill-[#F1EFE8]",
            x: "210",
            y: "34",
            width: "260",
            height: "34",
            rx: "17"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            className: "fill-[#1a1a18] dark:fill-[#F1EFE8]",
            x: "210",
            y: "512",
            width: "260",
            height: "34",
            rx: "17"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            className: "fill-none stroke-neutral-900 dark:fill-[#2c2c2a] dark:stroke-[#9a9a92]",
            x: "52",
            y: "132",
            width: "196",
            height: "58",
            rx: "5",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            className: "fill-neutral-900 font-serif text-[13px] font-bold dark:fill-[#F1EFE8]",
            x: "150",
            y: "155",
            textAnchor: "middle",
            children: "Malleable systems"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            className: "fill-[#5a5a55] font-serif text-[11px] dark:fill-[#B4B2A9]",
            x: "150",
            y: "176",
            textAnchor: "middle",
            children: "No platform to compete"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            className: "fill-none stroke-neutral-900 dark:fill-[#2c2c2a] dark:stroke-[#9a9a92]",
            x: "432",
            y: "132",
            width: "196",
            height: "58",
            rx: "5",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            className: "fill-neutral-900 font-serif text-[13px] font-bold dark:fill-[#F1EFE8]",
            x: "530",
            y: "155",
            textAnchor: "middle",
            children: "Blockchain"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            className: "fill-[#5a5a55] font-serif text-[11px] dark:fill-[#B4B2A9]",
            x: "530",
            y: "176",
            textAnchor: "middle",
            children: "Needs a real use case"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            className: "fill-none stroke-neutral-900 dark:fill-[#2c2c2a] dark:stroke-[#9a9a92]",
            x: "52",
            y: "390",
            width: "196",
            height: "58",
            rx: "5",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            className: "fill-neutral-900 font-serif text-[13px] font-bold dark:fill-[#F1EFE8]",
            x: "150",
            y: "413",
            textAnchor: "middle",
            children: "Semantic web"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            className: "fill-[#5a5a55] font-serif text-[11px] dark:fill-[#B4B2A9]",
            x: "150",
            y: "434",
            textAnchor: "middle",
            children: "Built for data, didn't work"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            className: "fill-none stroke-neutral-900 dark:fill-[#2c2c2a] dark:stroke-[#9a9a92]",
            x: "432",
            y: "390",
            width: "196",
            height: "58",
            rx: "5",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            className: "fill-neutral-900 font-serif text-[13px] font-bold dark:fill-[#F1EFE8]",
            x: "530",
            y: "413",
            textAnchor: "middle",
            children: "Open source"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            className: "fill-[#5a5a55] font-serif text-[11px] dark:fill-[#B4B2A9]",
            x: "530",
            y: "434",
            textAnchor: "middle",
            children: "Needs sustainability"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            className: "fill-[#1a1a18] dark:fill-[#F1EFE8]",
            x: "286",
            y: "256",
            width: "108",
            height: "44",
            rx: "5"
          }
        ),
        /* @__PURE__ */ jsx("foreignObject", { x: "210", y: "34", width: "260", height: "34", children: /* @__PURE__ */ jsx(
          "div",
          {
            ...{ xmlns: "http://www.w3.org/1999/xhtml" },
            className: "flex h-full w-full items-stretch",
            children: /* @__PURE__ */ jsx(
              UnderlineRow,
              {
                label: "software ownership",
                tooltipKey: "softwareOwnership",
                ariaLabel: "Tooltip: software ownership"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("foreignObject", { x: "210", y: "512", width: "260", height: "34", children: /* @__PURE__ */ jsx(
          "div",
          {
            ...{ xmlns: "http://www.w3.org/1999/xhtml" },
            className: "flex h-full w-full items-stretch",
            children: /* @__PURE__ */ jsx(
              UnderlineRow,
              {
                label: "software semantic",
                tooltipKey: "softwareSemantic",
                ariaLabel: "Tooltip: software semantic"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("foreignObject", { x: "286", y: "256", width: "108", height: "44", children: /* @__PURE__ */ jsx(
          "div",
          {
            ...{ xmlns: "http://www.w3.org/1999/xhtml" },
            className: "flex h-full w-full items-center justify-center",
            children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-baseline gap-0.5", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "font-serif text-[15px] font-bold tracking-wide text-[#FAF9F6] dark:text-[#1a1a18]"
                  ),
                  children: "Ara"
                }
              ),
              /* @__PURE__ */ jsx(TermBadge, { text: TOOLTIPS.ara, ariaLabel: "Tooltip: Ara" })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsx(
          CheckHelpHotspot,
          {
            x: 285,
            y: 199,
            tooltipKey: "ckMalleable",
            ariaLabel: "Why Ara addresses malleable systems"
          }
        ),
        /* @__PURE__ */ jsx(
          CheckHelpHotspot,
          {
            x: 367,
            y: 199,
            tooltipKey: "ckBlockchain",
            ariaLabel: "Why Ara addresses blockchain"
          }
        ),
        /* @__PURE__ */ jsx(
          CheckHelpHotspot,
          {
            x: 285,
            y: 349,
            tooltipKey: "ckSemantic",
            ariaLabel: "Why Ara addresses semantic web"
          }
        ),
        /* @__PURE__ */ jsx(
          CheckHelpHotspot,
          {
            x: 367,
            y: 349,
            tooltipKey: "ckOss",
            ariaLabel: "Why Ara addresses open source"
          }
        )
      ]
    }
  ) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const whitepaperUrl = "https://bitcointalk.org/index.php?topic=5579945.new";
  return renderTemplate`${renderComponent($$result, "MinimalDarkLayout", $$MinimalDarkLayout, { "title": "Ara" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl px-6 pb-24 pt-12 text-left md:px-8 md:pt-16 [&_p]:text-pretty"> <!-- Hero --> <section class="space-y-8"> <h1 class="text-center text-3xl font-normal leading-tight text-neutral-900 md:text-4xl md:leading-tight dark:text-white">
Ara
</h1> <div class="-mt-4 text-center space-y-2 text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-300"> <p>Your device is a creative workspace,</p> <p>The internet is collective wisdom.</p> </div> <div class="space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"> <p>
You use software every day that you cannot reshape. Over time, the
          interface nudges you toward revenue increase and vendor lock-in. Ara
          is a desktop environment and dual-blockchain protocol for <a href="#software-ownership" class="text-inherit underline underline-offset-2 hover:opacity-90">software ownership.</a> </p> </div> </section> <!-- Software ownership --> <section id="software-ownership" class="mt-20 border-t border-neutral-200 pt-16 md:mt-24 md:pt-20 dark:border-white/10"> <h2 class="text-xl font-normal italic leading-snug text-neutral-900 md:text-2xl md:leading-snug dark:text-white">
Software ownership
</h2> <p class="mt-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
Compose apps like lego components.
</p><p>
Modify the interface beyond what the developer originally built.
</p> </section> <!-- What is Ara? --> <section id="what-is-ara" class="mt-10 border-t border-neutral-200 pt-16 md:mt-24 md:pt-20 dark:border-white/10"> <h2 class="text-2xl font-normal text-neutral-900 md:text-3xl dark:text-white">
What is Ara?
</h2> <div role="paragraph" class="mt-6 text-pretty text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
Ara is at the intersection of${" "} ${renderComponent($$result2, "WhatIsAraIntersectionTerms", WhatIsAraIntersectionTerms, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/landing/WhatIsAraIntersectionTerms", "client:component-export": "default" })}. Each of those fields has
        unsolved problems that are resolved when they are combined together.
</div> <div class="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/[0.03] md:p-6"> ${renderComponent($$result2, "AraIntersectionDiagram", AraIntersectionDiagram, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/landing/AraIntersectionDiagram", "client:component-export": "default" })} </div> <p class="mx-auto mt-10 max-w-2xl text-center text-lg font-bold leading-snug tracking-tight text-neutral-900 md:mt-12 md:text-xl dark:text-white">
Each of them aims for user agency and decentralized yet accessible for
        all network. Together they achieve it.
</p> <h3 class="mt-12 text-xl font-normal text-neutral-900 md:text-2xl dark:text-white">
Three core components
</h3> <div class="mt-8 border-t border-neutral-200 pt-10 dark:border-white/10"> <div class="grid gap-8 border-b border-neutral-200 pb-10 md:grid-cols-[minmax(0,12rem)_1fr] md:gap-x-10 md:gap-y-0 dark:border-white/10"> <div> <p class="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 dark:text-neutral-500">
Desktop shell
</p> <p class="mt-3 font-serif text-xl font-normal text-neutral-900 md:text-2xl dark:text-white">
Maydan
</p> </div> <div class="space-y-4 self-start text-base leading-relaxed text-neutral-700 md:pt-1 dark:text-neutral-300"> <p>
You open a video tutorial and a code editor side by side. You tag
              them together semantically as &ldquo;Learn programming&rdquo;: the
              code editor follows the video player. As you type, video pauses,
              as you complete coding, the video continues automatically.
</p> <p>
But code doesn&apos;t compile. Maydan surfaces a hint from another
              user who hit the same failure. You apply it. A short clip overlays
              explaining the packages to install. You install, compile, overlay
              disappears, tutorial continues.
</p> </div> </div> <div class="grid gap-8 border-b border-neutral-200 py-10 md:grid-cols-[minmax(0,12rem)_1fr] md:gap-x-10 md:gap-y-0 dark:border-white/10"> <div> <p class="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 dark:text-neutral-500">
Blockchain A
</p> <p class="mt-3 font-serif text-xl font-normal text-neutral-900 md:text-2xl dark:text-white">
Arada
</p> </div> <p class="self-start text-base leading-relaxed text-neutral-700 md:pt-1 dark:text-neutral-300">
Open-source authors publish
<code class="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-sm text-neutral-800 dark:bg-white/10 dark:text-neutral-200">ara.json</code>, a machine-readable description of their software&apos;s meaning.
            Registered apps grant software ownership to the user.
</p> </div> <div class="grid gap-8 pt-10 md:grid-cols-[minmax(0,12rem)_1fr] md:gap-x-10 md:gap-y-0"> <div> <p class="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 dark:text-neutral-500">
Blockchain B
</p> <p class="mt-3 font-serif text-xl font-normal text-neutral-900 md:text-2xl dark:text-white">
Aramak
</p> </div> <p class="self-start text-base leading-relaxed text-neutral-700 md:pt-1 dark:text-neutral-300">
A decentralized recommendation engine. Software surfaces through
            real user behavior, not platform curation. No actual user data —
            only semantics tracked.
</p> </div> </div> </section> <!-- User-centric AI --> <section id="user-centric-ai" class="mt-20 border-t border-neutral-200 pt-16 md:mt-24 md:pt-20 dark:border-white/10"> <h2 class="text-2xl font-normal text-neutral-900 md:text-3xl dark:text-white">
Ara is a foundation for user-centric AI.
</h2> <p class="mt-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
You can use any AI. With Ara, they get full functional over the apps
        without being pretrained. They work locally with semantics only, without
        touching your data.
</p> <p class="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
Those same semantics, collectively contributed by all users, become the
        network data for Aramak. Available for anyone to train own local AI on
        verifiable public data.
</p> </section> <!-- Metaverse reimagined --> <section id="metaverse-reimagined" class="mt-20 border-t border-neutral-200 pt-16 md:mt-24 md:pt-20 dark:border-white/10"> <h2 class="text-2xl font-normal text-neutral-900 md:text-3xl dark:text-white">
Metaverse reimagined.
</h2> <div class="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"> <p>
Metaverse is not a virtual reality based social network, but your
          computer as a creative space.
</p> <p>
Think of your device as Macromedia Flash or HyperCard but unlike them,
          the lego bricks for creativity is the software. Any user can compose
          them, change their interfaces and share it.
</p> </div> </section> <!-- Participation --> <section id="participation" class="mt-20 border-t border-neutral-200 pt-16 md:mt-24 md:pt-20 dark:border-white/10"> <h2 class="text-2xl font-normal leading-snug text-neutral-900 md:text-3xl md:leading-snug dark:text-white">
What is ready and what you can do if you want to be part of it.
</h2> <div class="mt-8 space-y-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"> <p>
The whitepaper is released under CC0 (public domain). Although it is
          from a blockchain perspective, it explains the Ara framework and its
          applications.
</p> <p> <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-[0.2em] transition-colors hover:decoration-neutral-600 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">
READ THE WHITEPAPER →
</a> </p> <p>
For feedback on the whitepaper, visit the${" "} <a href="/aratalk" class="text-neutral-900 underline decoration-neutral-400 underline-offset-[0.2em] transition-colors hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-500 dark:hover:decoration-neutral-300">discussion page</a>, find the appropriate community and leave your message there.
</p> <p>
Whitepaper is the result of multiple experiments since 2024. The
          source code links and how idea of Ara came to live on the${" "} <a href="/about" class="text-neutral-900 underline decoration-neutral-400 underline-offset-[0.2em] transition-colors hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-500 dark:hover:decoration-neutral-300">about page</a>.
</p> <p>
The whitepaper is done. Now comes implementation. Follow us on${" "} <a${addAttribute(socialLinks.twitter.url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-[0.2em] transition-colors hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-500 dark:hover:decoration-neutral-300">X</a>,${" "} <a${addAttribute(socialLinks.bluesky.url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-[0.2em] transition-colors hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-500 dark:hover:decoration-neutral-300">Bluesky</a>, or${" "} <a${addAttribute(socialLinks.linkedin.url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-[0.2em] transition-colors hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-500 dark:hover:decoration-neutral-300">LinkedIn</a>${" "}for roadmap release.
</p> </div> </section> <footer class="mt-20 border-t border-neutral-200 pt-10 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-500" aria-label="Site footer"> <p class="text-neutral-600 dark:text-neutral-500">
© ${companyInfo.copyrightYear} Ara Foundation.
</p> </footer> </div> ` })}`;
}, "/home/medet/ara-app/src/pages/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
