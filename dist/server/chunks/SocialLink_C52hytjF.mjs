import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { FaLinkedin, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa';
import { g as getIcon } from './Analytics_Day3AV4c.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React__default, { useId, useRef, useEffect, useLayoutEffect, useMemo } from 'react';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function truncateStr(title, maxLength = 58) {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength) + "...";
}
function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h.split("").map((c) => c + c).join("");
  }
  const int = parseInt(h, 16);
  const r = int >> 16 & 255;
  const g = int >> 8 & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const ElectricBorder = React__default.memo(({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 1,
  thickness = 2,
  className,
  style,
  disabled = false
}) => {
  if (disabled) return /* @__PURE__ */ jsx(Fragment, { children });
  const rawId = useId().replace(/[:]/g, "");
  const filterId = `turbulent-displace-${rawId}`;
  const svgRef = useRef(null);
  const rootRef = useRef(null);
  const strokeRef = useRef(null);
  const updateAnim = () => {
    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host) return;
    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }
    const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
    const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));
    const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]'));
    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute("values", `${height}; 0`);
      dyAnims[1].setAttribute("values", `0; -${height}`);
    }
    const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]'));
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute("values", `${width}; 0`);
      dxAnims[1].setAttribute("values", `0; -${width}`);
    }
    const baseDur = 6;
    const dur = Math.max(1e-3, baseDur / (speed || 1));
    [...dyAnims, ...dxAnims].forEach((a) => a.setAttribute("dur", `${dur}s`));
    const disp = svg.querySelector("feDisplacementMap");
    if (disp) disp.setAttribute("scale", String(30 * (chaos || 1)));
    const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
    if (filterEl) {
      filterEl.setAttribute("x", "-200%");
      filterEl.setAttribute("y", "-200%");
      filterEl.setAttribute("width", "500%");
      filterEl.setAttribute("height", "500%");
    }
    requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach((a) => {
        if (typeof a.beginElement === "function") {
          try {
            a.beginElement();
          } catch {
          }
        }
      });
    });
  };
  useEffect(() => {
    updateAnim();
  }, [speed, chaos]);
  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const ro = new ResizeObserver(() => updateAnim());
    ro.observe(rootRef.current);
    updateAnim();
    return () => ro.disconnect();
  }, []);
  const inheritRadius = {
    borderRadius: style?.borderRadius ?? "inherit"
  };
  const strokeStyle = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color
  };
  const glow1Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: hexToRgba(color, 0.6),
    filter: `blur(${0.5 + thickness * 0.25}px)`,
    opacity: 0.5
  };
  const glow2Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
    filter: `blur(${2 + thickness * 0.5}px)`,
    opacity: 0.5
  };
  const bgGlowStyle = {
    ...inheritRadius,
    transform: "scale(1.08)",
    filter: "blur(32px)",
    opacity: 0.3,
    zIndex: -1,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`
  };
  const memoizedChildren = useMemo(() => children, [children]);
  return /* @__PURE__ */ jsxs("div", { ref: rootRef, className: "relative isolate " + (className ?? ""), style, children: [
    /* @__PURE__ */ jsx(
      "svg",
      {
        ref: svgRef,
        className: "fixed -left-[10000px] -top-[10000px] w-[10px] h-[10px] opacity-[0.001] pointer-events-none",
        "aria-hidden": true,
        focusable: "false",
        children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("filter", { id: filterId, colorInterpolationFilters: "sRGB", x: "-20%", y: "-20%", width: "140%", height: "140%", children: [
          /* @__PURE__ */ jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise1", seed: "1" }),
          /* @__PURE__ */ jsx("feOffset", { in: "noise1", dx: "0", dy: "0", result: "offsetNoise1", children: /* @__PURE__ */ jsx("animate", { attributeName: "dy", values: "700; 0", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }),
          /* @__PURE__ */ jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise2", seed: "1" }),
          /* @__PURE__ */ jsx("feOffset", { in: "noise2", dx: "0", dy: "0", result: "offsetNoise2", children: /* @__PURE__ */ jsx("animate", { attributeName: "dy", values: "0; -700", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }),
          /* @__PURE__ */ jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise1", seed: "2" }),
          /* @__PURE__ */ jsx("feOffset", { in: "noise1", dx: "0", dy: "0", result: "offsetNoise3", children: /* @__PURE__ */ jsx("animate", { attributeName: "dx", values: "490; 0", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }),
          /* @__PURE__ */ jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise2", seed: "2" }),
          /* @__PURE__ */ jsx("feOffset", { in: "noise2", dx: "0", dy: "0", result: "offsetNoise4", children: /* @__PURE__ */ jsx("animate", { attributeName: "dx", values: "0; -490", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }),
          /* @__PURE__ */ jsx("feComposite", { in: "offsetNoise1", in2: "offsetNoise2", result: "part1" }),
          /* @__PURE__ */ jsx("feComposite", { in: "offsetNoise3", in2: "offsetNoise4", result: "part2" }),
          /* @__PURE__ */ jsx("feBlend", { in: "part1", in2: "part2", mode: "color-dodge", result: "combinedNoise" }),
          /* @__PURE__ */ jsx(
            "feDisplacementMap",
            {
              in: "SourceGraphic",
              in2: "combinedNoise",
              scale: "30",
              xChannelSelector: "R",
              yChannelSelector: "B"
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", style: inheritRadius, children: [
      /* @__PURE__ */ jsx("div", { ref: strokeRef, className: "absolute inset-0 box-border", style: strokeStyle }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 box-border", style: glow1Style }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 box-border", style: glow2Style }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: bgGlowStyle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative flex items-center justify-center", style: inheritRadius, children: memoizedChildren })
  ] });
}, (prevProps, nextProps) => {
  return prevProps.disabled === nextProps.disabled && prevProps.color === nextProps.color && prevProps.thickness === nextProps.thickness && prevProps.className === nextProps.className && // Compare style objects by reference (shallow comparison)
  prevProps.style === nextProps.style && // Children comparison - if children reference is the same, skip re-render
  // useMemo inside will handle actual children content changes
  prevProps.children === nextProps.children;
});
ElectricBorder.displayName = "ElectricBorder";

const Component = ({ ref, asNewTab = false, className, uri, children, focus = false }) => {
  const fullClassName = `hyperlink text-blue-500 dark:text-blue-200 hover:text-teal-300 dark:hover:text-teal-200 ${focus && "py-2"} transition-colors ${className}`;
  const handleClick = (e) => {
    if (!asNewTab && typeof document !== "undefined") {
      const link = e.currentTarget;
      const href = link.getAttribute("href");
      if (href && !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("#")) ;
    }
  };
  return /* @__PURE__ */ jsx(
    "a",
    {
      ref,
      target: asNewTab ? "_blank" : "_self",
      href: uri,
      className: fullClassName,
      onClick: handleClick,
      "data-astro-transition-scope": true,
      children: /* @__PURE__ */ jsx(
        ElectricBorder,
        {
          color: "#0ea5e950",
          speed: 1,
          chaos: 0.5,
          thickness: 2,
          style: { borderRadius: 2 },
          className: "py-2 px-2 w-full",
          disabled: !focus,
          children
        }
      )
    },
    uri
  );
};

const SocialLink = ({
  link,
  className = "flex rounded-sm w-8 h-8"
}) => {
  const brandColors = {
    github: "#00accc",
    // GitHub dark gray/black
    telegram: "#0088cc",
    // Bluesky blue
    discord: "#5865F2",
    // Discord blurple
    linkedin: "#0077B5"
    // LinkedIn blue
  };
  const brandColorClasses = {
    github: "text-black w-5 h-5",
    // GitHub dark gray/black
    telegram: "text-[#0088cc] w-5 h-5",
    // Telegram blue
    twitter: "text-blue-500 w-5 h-5",
    // Twitter/X black
    bluesky: "text-[#00A3FF] w-5 h-5",
    // Bluesky blue
    discord: "text-[#5865F2] w-5 h-5",
    // Discord blurple
    linkedin: "text-[#0077B5] w-5 h-5"
    // LinkedIn blue
  };
  const renderIcon = () => {
    if (link.useCustomIcon) {
      return getIcon({
        iconType: link.type,
        className: brandColorClasses[link.type]
      });
    }
    const iconMap = {
      github: /* @__PURE__ */ jsx(FaGithub, { color: brandColors.github, size: 20, className: brandColorClasses.github }),
      telegram: /* @__PURE__ */ jsx(FaTelegram, { color: brandColors.telegram, size: 20, className: brandColorClasses.telegram }),
      twitter: getIcon({ iconType: "x", className: brandColorClasses.twitter }),
      bluesky: getIcon({ iconType: "bluesky", className: brandColorClasses.bluesky }),
      discord: /* @__PURE__ */ jsx(FaDiscord, { color: brandColors.discord, size: 20, className: brandColorClasses.discord }),
      linkedin: /* @__PURE__ */ jsx(FaLinkedin, { color: brandColors.linkedin, size: 20, className: brandColorClasses.linkedin })
    };
    return iconMap[link.type];
  };
  return /* @__PURE__ */ jsx(
    Component,
    {
      uri: link.url,
      asNewTab: true,
      className,
      "aria-label": `Visit our ${link.type} page`,
      children: renderIcon()
    }
  );
};

export { Component as C, ElectricBorder as E, SocialLink as S, capitalizeFirstLetter as a, cn as c, truncateStr as t };
