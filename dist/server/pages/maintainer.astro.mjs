import { j as createComponent, m as maybeRenderHead, x as renderComponent, r as renderTemplate, p as addAttribute } from '../chunks/astro/server_EFpbLn-l.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_CUYspLTV.mjs';
import { M as MenuName } from '../chunks/PageTransitionProvider_DOjqMmXE.mjs';
import { S as StarIcon, s as socialLinks } from '../chunks/Analytics_Day3AV4c.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'clsx';
import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import mermaid from 'mermaid';
import NumberFlow from '@number-flow/react';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const CheckmarkCircleIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "green",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    )
  }
);
const CheckmarkIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 20 20",
    width: "1.5em",
    height: "1.5em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        clipRule: "evenodd"
      }
    )
  }
);
const SettingsIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        }
      )
    ]
  }
);
const UserIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      }
    )
  }
);
const GraduateHatIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M12 14l9-5-9-5-9 5 9 5z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M12 14v9"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M12 19l-3-3m3 3l3-3"
        }
      )
    ]
  }
);
const WarningTriangleIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "red",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      }
    )
  }
);
const BookIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      }
    )
  }
);
const LockIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "red",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      }
    )
  }
);
const TelegramIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.559z" })
  }
);
const DiscordIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" })
  }
);
const GitHubIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
  }
);
const LinkedInIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
  }
);
const TwitterIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
  }
);
const BlueskyIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 10.8c-1.087-.488-2.13-1.01-3.23-1.547a.5.5 0 0 0-.74.44v9.1a.5.5 0 0 0 .22.41l3.62 2.47a.5.5 0 0 0 .66-.08l3.69-3.12a.5.5 0 0 0 .19-.4v-6.47a.5.5 0 0 0-.4-.49c-1.3-.2-2.6-.4-3.84-.69zm-1.5-8.55c-1.198.54-2.44 1.1-3.7 1.69a.5.5 0 0 0-.3.46v4.2a.5.5 0 0 0 .22.41l2.5 1.7a.5.5 0 0 0 .56.02l4.3-2.5a.5.5 0 0 0 .22-.41V4.5a.5.5 0 0 0-.3-.46c-1.26-.59-2.5-1.15-3.7-1.69z" })
  }
);

const $$DecorativeStarSeparator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Decorative separator -->${maybeRenderHead()}<div class="flex items-center justify-center gap-4"> <div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-300 dark:via-slate-600 dark:to-slate-600"></div> <div class="flex items-center gap-2"> ${renderComponent($$result, "StarIcon", StarIcon, { "className": "w-4 h-4 text-yellow-500 dark:text-yellow-600" })} ${renderComponent($$result, "StarIcon", StarIcon, { "className": "w-4 h-4 text-yellow-500 dark:text-yellow-600" })} ${renderComponent($$result, "StarIcon", StarIcon, { "className": "w-4 h-4 text-yellow-500 dark:text-yellow-600" })} </div> <div class="flex-1 h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-300 dark:via-slate-600 dark:to-slate-600"></div> </div>`;
}, "/home/medet/ara-app/src/components/utilitified_decorations/DecorativeStarSeparator.astro", void 0);

const $$DecorativeSeparator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Decorative separator -->${maybeRenderHead()}<div class="flex items-center justify-center gap-2 opacity-50"> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> </div>`;
}, "/home/medet/ara-app/src/components/utilitified_decorations/DecorativeSeparator.astro", void 0);

const AraLayerStack = ({
  className = ""
}) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.5 },
      className: `ara-layer-stack ${className} flex flex-col items-center gap-4`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md backdrop-blur-md bg-blue-500/20 dark:bg-blue-400/20 border-2 border-blue-500/40 dark:border-blue-400/40 rounded-xl p-4 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-blue-600 dark:text-blue-400", children: "Ara Layer" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 border border-blue-300/50 dark:border-blue-500/50 rounded-lg p-2 text-center", children: /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-blue-700 dark:text-blue-300", children: "Funded issues" }) }),
            /* @__PURE__ */ jsx("div", { className: "backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 border border-blue-300/50 dark:border-blue-500/50 rounded-lg p-2 text-center", children: /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-blue-700 dark:text-blue-300", children: "Roadmap" }) }),
            /* @__PURE__ */ jsx("div", { className: "backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 border border-blue-300/50 dark:border-blue-500/50 rounded-lg p-2 text-center", children: /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-blue-700 dark:text-blue-300", children: "Versions" }) }),
            /* @__PURE__ */ jsx("div", { className: "backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 border border-blue-300/50 dark:border-blue-500/50 rounded-lg p-2 text-center", children: /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-blue-700 dark:text-blue-300", children: "Transparent Record" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6 text-slate-600 dark:text-slate-400",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-md backdrop-blur-md bg-slate-500/20 dark:bg-slate-600/20 border-2 border-slate-500/40 dark:border-slate-500/40 rounded-xl p-6 shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-slate-700 dark:text-slate-300 mb-2", children: "GitHub / GitLab repository" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 italic", children: "(unchanged)" })
        ] }) })
      ]
    }
  );
};

const MermaidDiagram = ({
  definition,
  className = "",
  id
}) => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const diagramId = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`);
  useEffect(() => {
    if (!containerRef.current) return;
    mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
      themeVariables: {
        primaryColor: "#3b82f6",
        primaryTextColor: "#1e293b",
        primaryBorderColor: "#3b82f6",
        lineColor: "#64748b",
        secondaryColor: "#e2e8f0",
        tertiaryColor: "#f1f5f9"
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis"
      }
    });
    const renderDiagram = async () => {
      try {
        setIsLoading(true);
        setError(null);
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
        const { svg } = await mermaid.render(diagramId.current, definition);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Mermaid rendering error:", err);
        setError(err instanceof Error ? err.message : "Failed to render diagram");
        setIsLoading(false);
      }
    };
    renderDiagram();
  }, [definition]);
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (containerRef.current && definition) {
        mermaid.initialize({
          startOnLoad: false,
          theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
          themeVariables: {
            primaryColor: "#3b82f6",
            primaryTextColor: "#1e293b",
            primaryBorderColor: "#3b82f6",
            lineColor: "#64748b",
            secondaryColor: "#e2e8f0",
            tertiaryColor: "#f1f5f9"
          }
        });
        const renderDiagram = async () => {
          try {
            if (containerRef.current) {
              containerRef.current.innerHTML = "";
              const { svg } = await mermaid.render(diagramId.current, definition);
              if (containerRef.current) {
                containerRef.current.innerHTML = svg;
              }
            }
          } catch (err) {
            console.error("Mermaid re-render error:", err);
          }
        };
        renderDiagram();
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => observer.disconnect();
  }, [definition]);
  if (error) {
    return /* @__PURE__ */ jsxs("div", { className: `text-red-500 text-sm p-4 ${className}`, children: [
      "Error rendering diagram: ",
      error
    ] });
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: `mermaid-diagram ${className} ${isLoading ? "opacity-50" : ""}`,
      id,
      "aria-label": "Mermaid diagram"
    }
  );
};

const OwnershipTransferDiagram = ({
  className = ""
}) => {
  const mermaidDefinition = `
    flowchart TD
      Users["Users fund maintainer"]
      Points["☀️ Points<br/>+ 1,000 sunshines"]
      Issues["Issues completed & accepted"]
      Tokens["⭐ 300 tokens minted"]
      Maintainer["⭐ 1/3 Maintainer"]
      User["⭐ 1/3 User"]
      Contributor["⭐ 1/3 Contributor"]
      
      Users --> Points
      Points -->|"Attach ☀️ 1,000 points to issue"| Issues
      Issues --> Tokens
      Tokens --> Maintainer
      Tokens --> User
      Tokens --> Contributor
      
      Maintainer ~~~ User
      User ~~~ Contributor
      
      style Users fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
      style Points fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
      style Issues fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
      style Tokens fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
      style Maintainer fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
      style User fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
      style Contributor fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
      
      linkStyle 1 stroke:#8b5cf6,stroke-width:3px
  `;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: `ownership-transfer-diagram ${className}`,
      children: /* @__PURE__ */ jsx(MermaidDiagram, { definition: mermaidDefinition })
    }
  );
};

const TokenSupplyProgress = ({
  className = ""
}) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFullyMinted, setShowFullyMinted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const animationRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const countdownIntervalRef = useRef(null);
  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowFullyMinted(false);
    setProgress(0);
    const startTime = Date.now();
    const duration = 1e4;
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(rawProgress);
      const newProgress = easedProgress * 100;
      setProgress(newProgress);
      if (rawProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setShowFullyMinted(true);
        setIsAnimating(false);
        setCountdown(5);
        let remaining = 5;
        countdownIntervalRef.current = setInterval(() => {
          remaining -= 1;
          setCountdown(remaining);
          if (remaining <= 0) {
            if (countdownIntervalRef.current) {
              clearInterval(countdownIntervalRef.current);
            }
            resetToZero();
            startAnimation();
          }
        }, 1e3);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
  };
  const resetToZero = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
    setIsAnimating(false);
    setShowFullyMinted(false);
    setProgress(0);
    setCountdown(5);
  };
  const setToHundred = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
    setIsAnimating(false);
    setProgress(100);
    setShowFullyMinted(true);
    setCountdown(5);
    let remaining = 5;
    countdownIntervalRef.current = setInterval(() => {
      remaining -= 1;
      setCountdown(remaining);
      if (remaining <= 0) {
        if (countdownIntervalRef.current) {
          clearInterval(countdownIntervalRef.current);
        }
        resetToZero();
        startAnimation();
      }
    }, 1e3);
  };
  useEffect(() => {
    startAnimation();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, []);
  const isFullyMinted = progress >= 100 && showFullyMinted;
  const isAtHundred = progress >= 100;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: `token-supply-progress ${className} space-y-6`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-slate-800 dark:text-slate-200", children: "Token supply minted" }),
            isAtHundred && /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-green-600 dark:text-green-400", children: "Supply minted" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative w-full flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: resetToZero,
                className: "px-3 py-1.5 text-xs font-semibold bg-slate-500 hover:bg-slate-600 text-white rounded-lg transition-colors flex-shrink-0",
                children: "Reset to 0"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative flex-1 h-8 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: `absolute top-0 left-0 h-full transition-colors duration-300 ${isAtHundred ? "bg-green-500 dark:bg-green-400" : "bg-yellow-500 dark:bg-yellow-400"}`,
                  style: {
                    width: `${progress}%`
                  },
                  transition: {
                    duration: 0.05,
                    ease: "linear"
                  }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold text-slate-800 dark:text-slate-200", children: [
                Math.round(progress),
                "%"
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: setToHundred,
                className: "px-3 py-1.5 text-xs font-semibold bg-slate-500 hover:bg-slate-600 text-white rounded-lg transition-colors flex-shrink-0 min-w-[100px]",
                children: isAtHundred ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx(
                    NumberFlow,
                    {
                      value: countdown,
                      locales: "en-US",
                      format: { style: "decimal", maximumFractionDigits: 0 },
                      className: "text-xs font-semibold"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: "s to reset" })
                ] }) : "Set to 100"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: !isFullyMinted ? (
          // Not Fully Minted Card
          /* @__PURE__ */ jsx("div", { className: "backdrop-blur-md bg-yellow-500/10 dark:bg-yellow-900/20 border-2 border-yellow-500/40 dark:border-yellow-400/40 rounded-xl p-6 shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-4", children: "Supply not fully minted" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-left", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-500 dark:text-yellow-400 mt-1", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Maintainer control" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-500 dark:text-yellow-400 mt-1", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Tokens locked" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-500 dark:text-yellow-400 mt-1", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "No governance" })
              ] })
            ] })
          ] }) })
        ) : (
          // Fully Minted Card
          /* @__PURE__ */ jsx("div", { className: "backdrop-blur-md bg-green-500/10 dark:bg-green-900/20 border-2 border-green-500/40 dark:border-green-400/40 rounded-xl p-6 shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-green-700 dark:text-green-400 mb-4", children: "Supply fully minted" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-left", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500 dark:text-green-400 mt-1", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Tokens unlock" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500 dark:text-green-400 mt-1", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Token holders = owners" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500 dark:text-green-400 mt-1", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Gradual ownership shift" })
              ] })
            ] })
          ] }) })
        ) })
      ]
    }
  );
};

const $$Maintainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectList, "hideLinks": Object.keys(MenuName), "projectName": "Ara", "initialZoom": 100, "minZoom": 25, "maxZoom": 150, "isStatic": true }, { "center": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="w-full max-w-6xl mx-auto px-4"> ${renderComponent($$result2, "DecorativeStarSeparator", $$DecorativeStarSeparator, {})} <!-- Header Section with Integrated Benefits --> <section id="header-section" class="text-center space-y-12"> <!-- Benefits Cards --> <div class="mt-12"> <div class="grid md:grid-cols-3 gap-8 md:gap-10"> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-8 md:p-10 text-left"> <div class="flex items-center gap-3 mb-4"> <div class="p-2 rounded-lg bg-blue-500/20 dark:bg-blue-400/20"> ${renderComponent($$result2, "SettingsIcon", SettingsIcon, { "class": "text-blue-500 dark:text-blue-400" })} </div> <h4 class="text-xl font-bold text-slate-800 dark:text-slate-200">
For maintainers
</h4> </div> <p class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
Get funded while maintaining full control
</p> <ul class="space-y-3"> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Funding to sustain your work</span> </li> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Build reputation & visibility</span> </li> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Grow your contributor team</span> </li> </ul> </div> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-700/40 rounded-xl p-8 md:p-10 text-left"> <div class="flex items-center gap-3 mb-4"> <div class="p-2 rounded-lg bg-purple-500/20 dark:bg-purple-400/20"> ${renderComponent($$result2, "UserIcon", UserIcon, { "class": "text-purple-500 dark:text-purple-400" })} </div> <h4 class="text-xl font-bold text-slate-800 dark:text-slate-200">
For users
</h4> </div> <p class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
Support projects you depend on
</p> <ul class="space-y-3"> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Connect with project creators</span> </li> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Track project direction & decisions</span> </li> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Protect critical features & APIs</span> </li> </ul> </div> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-700/40 rounded-xl p-8 md:p-10 text-left"> <div class="flex items-center gap-3 mb-4"> <div class="p-2 rounded-lg bg-green-500/20 dark:bg-green-400/20"> ${renderComponent($$result2, "GraduateHatIcon", GraduateHatIcon, { "class": "text-green-500 dark:text-green-400" })} </div> <h4 class="text-xl font-bold text-slate-800 dark:text-slate-200">
For learners
</h4> </div> <p class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
Learn by contributing to real projects
</p> <ul class="space-y-3"> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Real-world project experience</span> </li> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Learn production-grade practices</span> </li> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Earn funding & build credibility</span> </li> </ul> </div> </div> </div> </section> <!-- What's Ara Section --> <section id="ara-layer-section" class="space-y-8 mt-8"> <!-- Decorative separator --> ${renderComponent($$result2, "DecorativeSeparator", $$DecorativeSeparator, {})} <h3 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 text-center mb-8">
What's Ara
</h3> <div class="flex flex-col md:flex-row gap-8 items-start"> <!-- Diagram on the left --> <div class="flex-1 md:flex-none md:w-1/2"> ${renderComponent($$result2, "AraLayerStack", AraLayerStack, { "client:load": true, "className": "w-full", "client:component-hydration": "load", "client:component-path": "@/components/diagrams/AraLayerStack", "client:component-export": "default" })} </div> <!-- Explanation on the right --> <div class="flex-1 space-y-6"> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300">
Ara adds funded issues, roadmap/version management, and transparent
            record.
</p> <ul class="space-y-4 text-slate-700 dark:text-slate-300"> <li class="flex items-start gap-3"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>
Your code stays where it is. GitHub (or GitLab) for code.
                Nothing in your workflow is replaced.
</span> </li> <li class="flex items-start gap-3"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Your license the same.</span> </li> <li class="flex items-start gap-3"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Ara works only on top of existing repository.</span> </li> </ul> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-semibold">
And, adds two rules, applied inside Ara.
</p> </div> </div> </section> <!-- Decorative separator --> <!-- Two Rules Section --> <section id="two-rules-section" class="space-y-12 my-16"> ${renderComponent($$result2, "DecorativeStarSeparator", $$DecorativeStarSeparator, {})} <h3 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 text-center mb-8">
TWO RULES (INSIDE ARA ONLY)
</h3> <!-- Rule 1: Funding follows dependencies --> <div class="space-y-6"> <h4 class="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 text-center">
Rule 1. Funding follows dependencies
</h4> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 md:p-8 relative" style="min-height: 600px;"> <!-- Full size diagram --> <div class="absolute inset-0 w-full h-full rounded-xl overflow-hidden"> ${renderComponent($$result2, "IsometricFundingFlow", null, { "client:only": "react", "className": "w-full h-full", "client:component-hydration": "only", "client:component-path": "@/components/diagrams/IsometricFundingFlow", "client:component-export": "default" })} </div> <!-- Split overlay descriptions positioned around the flow --> <div class="relative z-10 pointer-events-none"> <!-- Main description - top center --> <div class="absolute top-4 left-1/2 transform -translate-x-1/2 p-4 max-w-[300px]"> <div class="backdrop-blur-lg bg-white/90 dark:bg-slate-900/90 border border-slate-300/50 dark:border-slate-700/50 rounded-lg p-4 shadow-xl pointer-events-auto"> <p class="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
When a project on Ara receives funding, a portion of that
                  funding automatically flows to the projects it depends on.
</p> </div> </div> <!-- Benefits list - top right area --> <div class="absolute top-4 right-4 p-4 max-w-xs"> <div class="backdrop-blur-lg bg-white/90 dark:bg-slate-900/90 border border-slate-300/50 dark:border-slate-700/50 rounded-lg p-4 shadow-xl pointer-events-auto"> <p class="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
What this means for you:
</p> <ul class="space-y-2 text-sm md:text-base text-slate-700 dark:text-slate-300"> <li class="flex items-start gap-2"> <span class="text-blue-500 dark:text-blue-400 mt-1">•</span> <span>
If other projects build on your code and get funded, you
                      get funded too
</span> </li> <li class="flex items-start gap-2"> <span class="text-blue-500 dark:text-blue-400 mt-1">•</span> <span>
Popularity becomes a source of sustainability, not burnout
</span> </li> </ul> </div> </div> <!-- Hyperpayment note - bottom left area --> <div class="absolute top-90 left-4 p-4 max-w-xs"> <div class="backdrop-blur-lg bg-white/90 dark:bg-slate-900/90 border border-slate-300/50 dark:border-slate-700/50 rounded-lg p-4 shadow-xl pointer-events-auto"> <div class="space-y-2 text-sm md:text-base text-slate-700 dark:text-slate-300"> <p>
This rule applies only inside Ara and called <strong>Hyperpayment</strong>.
</p> <p>
Outside Ara, your project works exactly as it does today.
</p> </div> </div> </div> </div> </div> </div> <!-- Decorative separator --> <!-- Rule 2: Progressive ownership transfer --> <div class="space-y-6"> ${renderComponent($$result2, "DecorativeSeparator", $$DecorativeSeparator, {})} <h4 class="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 text-center">
Rule 2. Progressive ownership transfer
</h4> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 md:p-8"> <div class="flex flex-col md:flex-row gap-8 items-start"> <!-- Explanation on the left --> <div class="flex-1 space-y-4"> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
Projects on Ara agree that ownership move from maintainer to
                community over time.
</p> <ul class="space-y-3 text-lg md:text-xl text-slate-700 dark:text-slate-300"> <li class="flex items-start gap-2"> <span class="text-blue-500 dark:text-blue-400 mt-1">•</span> <span>
Ownership is tracked with blockchain tokens (separate for
                    each project).
</span> </li> <li class="flex items-start gap-2"> <span class="text-blue-500 dark:text-blue-400 mt-1">•</span> <span>Maintainer sets the token supply.</span> </li> <li class="flex items-start gap-2"> <span class="text-blue-500 dark:text-blue-400 mt-1">•</span> <span>Tokens are minted only for funded, maintainer's accepted
                    work.</span> </li> <li class="flex items-start gap-2"> <span class="text-blue-500 dark:text-blue-400 mt-1">•</span> <span>
Ownership changes only when 100% of tokens are minted.
</span> </li> </ul> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
Projects shouldn't depend on a single person forever, but
                ownership should change only after real work, real funding, and
                real trust.
</p> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
Ara makes ownership transition earned, slow, and maintainer-led.
</p> </div> <!-- Diagram on the right --> <div class="flex-1"> ${renderComponent($$result2, "OwnershipTransferDiagram", OwnershipTransferDiagram, { "client:load": true, "className": "w-full", "client:component-hydration": "load", "client:component-path": "@/components/diagrams/OwnershipTransferDiagram", "client:component-export": "default" })} </div> </div> <!-- Token Supply Progress Section --> <div class="mt-8 pt-8 border-t border-slate-300/40 dark:border-slate-700/40"> ${renderComponent($$result2, "TokenSupplyProgress", TokenSupplyProgress, { "client:load": true, "className": "w-full", "client:component-hydration": "load", "client:component-path": "@/components/diagrams/TokenSupplyProgress", "client:component-export": "default" })} </div> <!-- Maintainer Safety Cards inside Rule 2 --> <div class="mt-8 pt-8 border-t border-slate-300/40 dark:border-slate-700/40"> <h5 class="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 text-center mb-8">
MAINTAINER SAFETY
</h5> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px] transition-all hover:shadow-lg hover:scale-[1.02]"> <div class="mb-5 flex items-center justify-center"> ${renderComponent($$result2, "LockIcon", LockIcon, { "class": "w-10 h-10 text-blue-500 dark:text-blue-400" })} </div> <h4 class="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
Control by default
</h4> </div> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px] transition-all hover:shadow-lg hover:scale-[1.02]"> <div class="mb-5 flex items-center justify-center"> ${renderComponent($$result2, "CheckmarkCircleIcon", CheckmarkCircleIcon, { "class": "w-10 h-10 text-green-500 dark:text-green-400" })} </div> <h4 class="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
Only accepted work creates tokens
</h4> </div> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px] transition-all hover:shadow-lg hover:scale-[1.02]"> <div class="mb-5 flex items-center justify-center"> ${renderComponent($$result2, "WarningTriangleIcon", WarningTriangleIcon, { "class": "w-10 h-10 text-yellow-500 dark:text-yellow-400" })} </div> <h4 class="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
No early governance
</h4> </div> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px] transition-all hover:shadow-lg hover:scale-[1.02]"> <div class="mb-5 flex items-center justify-center"> ${renderComponent($$result2, "BookIcon", BookIcon, { "class": "w-10 h-10 text-purple-500 dark:text-purple-400" })} </div> <h4 class="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
Repo & license untouched
</h4> </div> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px] transition-all hover:shadow-lg hover:scale-[1.02] md:col-span-2 lg:col-span-1"> <div class="mb-5 flex items-center justify-center"> <svg class="w-10 h-10 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </div> <h4 class="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
Leave anytime
</h4> </div> </div> </div> </div> </div> </section> <!-- Decorative separator --> ${renderComponent($$result2, "DecorativeSeparator", $$DecorativeSeparator, {})} <!-- Footer CTA Section --> <section id="footer-cta-section" class="text-center space-y-6"> <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400">
For maintainers • users • people learning programming
</p> <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
Grow projects without losing control
</h2> <div class="flex justify-center"> ${renderComponent($$result2, "AddProjectButton", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/auth/AddProjectButton", "client:component-export": "default" })} </div> </section> <!-- Social Links --> <section class="text-center space-y-4"> <p class="text-lg text-slate-600 dark:text-slate-400 mt-2">
Also, let's stay connected!
</p> <div class="flex items-center justify-center gap-6 flex-wrap"> ${Object.values(socialLinks).map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-700/40 hover:bg-white/40 dark:hover:bg-slate-900/40 transition-all"${addAttribute(link.label, "aria-label")}> ${link.type === "telegram" ? renderTemplate`${renderComponent($$result2, "TelegramIcon", TelegramIcon, { "class": "text-[#0088cc]" })}` : link.type === "discord" ? renderTemplate`${renderComponent($$result2, "DiscordIcon", DiscordIcon, { "class": "text-[#5865F2]" })}` : link.type === "github" ? renderTemplate`${renderComponent($$result2, "GitHubIcon", GitHubIcon, { "class": "text-slate-800 dark:text-slate-200" })}` : link.type === "linkedin" ? renderTemplate`${renderComponent($$result2, "LinkedInIcon", LinkedInIcon, { "class": "text-[#0077B5]" })}` : link.type === "twitter" ? renderTemplate`${renderComponent($$result2, "TwitterIcon", TwitterIcon, { "class": "text-blue-500" })}` : link.type === "bluesky" ? renderTemplate`${renderComponent($$result2, "BlueskyIcon", BlueskyIcon, { "class": "text-[#00A3FF]" })}` : null} </a>`)} </div> </section> <!-- Notice Section --> <section class="text-center space-y-4 mt-8"> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 max-w-2xl mx-auto"> <p class="text-base md:text-lg text-slate-700 dark:text-slate-300">
Ara is currently a solo-dev work. Try out the Testnet version. Become
          one of early pioneers with me. More about me is on${" "} <a href="/people" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
/people
</a>
.
</p> </div> </section> </div>`, "hero": ($$result2) => renderTemplate`<section class="relative flex flex-col items-center justify-center min-h-[40vh] text-center px-4 pointer-events-auto" style="pointer-events: auto;"> <div class="w-full max-w-7xl mx-auto space-y-6"> <div class="flex items-center justify-center gap-4 mb-6"> <div class="text-5xl md:text-6xl lg:text-7xl font-bold"> ${renderComponent($$result2, "AraGradientText", null, { "client:only": "react", "className": "font-bold", "client:component-hydration": "only", "client:component-path": "@/components/AraGradientText", "client:component-export": "default" })} </div> </div> <p class="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400 space-y-4">
Maintainer-centric funding & coordination layer
</p> <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 space-y-4">
for open source users, project owners, and people who learn programming.
</p> </div> </section>` })} `;
}, "/home/medet/ara-app/src/pages/maintainer.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/maintainer.astro";
const $$url = "/maintainer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Maintainer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
