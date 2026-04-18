import { j as createComponent, k as createAstro, m as maybeRenderHead, p as addAttribute, r as renderTemplate, x as renderComponent, z as renderSlot } from './astro/server_DQ3wOqi7.mjs';
import { C as Component, g as getIcon, c as companyInfo, s as socialLinks, d as SocialLink, a as cn } from './Analytics_B_TfxMA7.mjs';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Badge } from './Badge_B8Esv6UX.mjs';
import { motion, AnimatePresence } from 'framer-motion';
import 'clsx';
import * as React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion as motion$1 } from 'motion/react';
import { Renderer, Triangle, Program, Color, Mesh } from 'ogl';
import { Rocket } from 'lucide-react';

const $$Astro$3 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logo;
  const { className, imgClassName, noLink = false } = Astro2.props;
  return renderTemplate`${noLink ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-start h-14 items-center ${className || ""}`, "class")} data-astro-cid-nlmvrfkw><div${addAttribute(`w-8 h-8 bg-transparent rounded flex items-center justify-center relative ${imgClassName || ""}`, "class")} data-astro-cid-nlmvrfkw><img src="/ara_logo.png" alt="Ara Logo" class="w-full h-full" loading="eager" fetchpriority="high" decoding="async" data-astro-cid-nlmvrfkw></div></div>` : renderTemplate`${renderComponent($$result, "Link", Component, { "id": "logo", "uri": "/", "className": " flex flex-start h-14 items-center " + (className || ""), "data-astro-cid-nlmvrfkw": true }, { "default": ($$result2) => renderTemplate`<div${addAttribute(`w-8 h-8 bg-transparent rounded flex items-center justify-center relative ${imgClassName || ""}`, "class")} data-astro-cid-nlmvrfkw><img src="/ara_logo.png" id="logoImg" alt="Ara Logo" class="w-full h-full absolute inset-0" loading="eager" fetchpriority="high" decoding="async" data-astro-cid-nlmvrfkw><img src="/ara_logo_hover.png" id="hoveredLogoImg" alt="Ara Logo" class="w-full h-full absolute inset-0" loading="lazy" decoding="async" data-astro-cid-nlmvrfkw></div>` })}`}`;
}, "/home/medet/ara-app/src/components/utilitified_decorations/Logo.astro", void 0);

const MenuItem = ({ icon, label, badges, uri, active, focus = false, className = "" }) => {
  const baseClassName = `no-underline! flex items-center justify-between px-3 py-1 rounded-sm cursor-pointer transition-colors`;
  const activeClassName = `bg-slate-100/60 dark:bg-slate-700/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-700/60`;
  const inactiveClassName = `text-slate-600 dark:text-slate-400 hover:bg-slate-50/40 dark:hover:bg-slate-800/30 hover:text-slate-700 dark:hover:text-slate-300`;
  const linkClassName = `${baseClassName} ${active ? activeClassName : inactiveClassName} ${className}`;
  return /* @__PURE__ */ jsx(Component, { focus, uri, className: linkClassName, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      getIcon(icon),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: label })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center ml-1 -space-x-2", children: badges && badges.map((badge) => /* @__PURE__ */ jsx(Badge, { ...badge, children: badge.children })) })
  ] }) });
};

const $$Astro$2 = createAstro();
var MenuName = /* @__PURE__ */ ((MenuName2) => {
  MenuName2["ProjectList"] = "ProjectList";
  MenuName2["ProjectName"] = "ProjectName";
  return MenuName2;
})(MenuName || {});
const $$WorkNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkNavbar;
  const { tabIndex, vertical, active, hideLinks, className, additional } = Astro2.props;
  const isItemShown = (item) => {
    return active !== item && (hideLinks === void 0 || hideLinks.findIndex((el) => el === item) == -1);
  };
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(` ${className || ""} z-999! ${vertical ? "shadow-lg w-40" : "w-full"}`, "class")}${addAttribute(tabIndex, "tabindex")}> ${renderSlot($$result, $$slots["default"])} <div${addAttribute(vertical ? "text-sm " : "breadcrumbs text-sm", "class")}> <ul${addAttribute(vertical ? "flex flex-col " : "w-full justify-center", "class")}> ${additional?.map((item) => renderTemplate`<li> ${renderComponent($$result, "MenuItem", MenuItem, { ...item })} </li>`)} ${isItemShown("ProjectList" /* ProjectList */) && renderTemplate`<li class=""> ${renderComponent($$result, "MenuItem", MenuItem, { "icon": "project-info", "label": "Projects", "uri": "/data/projects", "active": active === "ProjectList" /* ProjectList */, "badges": [
    {
      children: "2",
      variant: "blue",
      active: active === "ProjectList" /* ProjectList */
    },
    {
      children: "2",
      variant: "red",
      active: active === "ProjectList" /* ProjectList */
    }
  ] }, { "default": ($$result2) => renderTemplate`
Projects
` })} </li>`} ${isItemShown("ProjectName" /* ProjectName */) && renderTemplate`<li> ${renderComponent($$result, "MenuItem", MenuItem, { "icon": "project-info", "label": "Reflect", "uri": "/data/project", "active": active === "ProjectName" /* ProjectName */ }, { "default": ($$result2) => renderTemplate`
Reflect
` })} </li>`} </ul> </div> </nav>`;
}, "/home/medet/ara-app/src/components/navbar/WorkNavbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeaderCosmic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderCosmic;
  const { active, hideLinks, hideAuth, additional } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`shadow-sm border-b border-purple-200/10 dark:border-purple-700/10 fixed top-0 right-0 left-0 z-900`, "class")}> <div class="navbar bg-base-transparent dark:bg-transparent shadow-sm items-start min-h-6"> <div class="navbar-start h-6"> <div class="dropdown"> <div${addAttribute(0, "tabindex")} role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </div> ${renderComponent($$result, "WorkNavbar", $$WorkNavbar, { "tabIndex": "-1", "additional": additional, "className": "menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-box z-1 mt-3 w-52 p-2 shadow dark:shadow-slate-700", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0, "vertical": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Badge", Badge, { "variant": "blue", "className": "text-slate-500 dark:text-slate-400 text-sm" }, { "default": ($$result2) => renderTemplate`testnet` })} </div> <div class="navbar-center h-6 hidden lg:flex lg:min-w-[50vw]"> ${renderComponent($$result, "WorkNavbar", $$WorkNavbar, { "className": "space-x-6", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0 }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> <div class="navbar-end flex h-6 items-center gap-3"> ${!hideAuth && renderTemplate`${renderComponent($$result, "AuthHeader", null, { "className": "py-2! px-2!", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/auth/AuthHeader", "client:component-export": "default" })}`} </div> </div> </header> `;
}, "/home/medet/ara-app/src/components/utilitified_decorations/HeaderCosmic.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`backdrop-blur-lg text-slate-500 dark:text-slate-500 flex justify-between p-2 items-center overflow-hidden `, "class")}> <div${addAttribute(`flex space-x-4`, "class")}> ${renderComponent($$result, "Link", Component, { "uri": "/how-it-works", "className": " text-slate-600 dark:text-slate-400 transition-colors" }, { "default": ($$result2) => renderTemplate`How it Works?` })} ${renderComponent($$result, "Link", Component, { "uri": "/people", "className": " text-slate-600 dark:text-slate-400 transition-colors" }, { "default": ($$result2) => renderTemplate`People` })} ${renderComponent($$result, "Link", Component, { "uri": "/privacy-policy", "className": " text-slate-600 dark:text-slate-400 transition-colors" }, { "default": ($$result2) => renderTemplate`Privacy Policy (fun-storylike-edition)` })} </div> <div> ${renderComponent($$result, "motion.div", motion.div, { "className": "flex flex-row items-center space-x-2 ml-4 w-full" }, { "default": ($$result2) => renderTemplate`${Object.values(socialLinks).map((link) => renderTemplate`${renderComponent($$result2, "SocialLink", SocialLink, { "className": "flex rounded-sm w-8 h-8 mt-3", "link": link })}`)}` })} </div> <div class="text-sm">
(c) ${companyInfo.copyrightYear}, <a${addAttribute("mailto:" + companyInfo.email, "href")} class="text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400">${companyInfo.email}</a>, registered: ${companyInfo.registeredName}, ${companyInfo.address} </div> </footer>`;
}, "/home/medet/ara-app/src/components/utilitified_decorations/Footer.astro", void 0);

var RoundedSize = /* @__PURE__ */ ((RoundedSize2) => {
  RoundedSize2["roundedXs"] = "rounded-xs";
  RoundedSize2["roundedNone"] = "rounded-none";
  RoundedSize2["roundedSm"] = "rounded-sm";
  RoundedSize2["roundedMd"] = "rounded-md";
  RoundedSize2["roundedLg"] = "rounded-lg";
  RoundedSize2["roundedXl"] = "rounded-xl";
  RoundedSize2["rounded2xl"] = "rounded-2xl";
  RoundedSize2["rounded3xl"] = "rounded-3xl";
  RoundedSize2["roundedFull"] = "rounded-full";
  return RoundedSize2;
})(RoundedSize || {});
var ShadowSize = /* @__PURE__ */ ((ShadowSize2) => {
  ShadowSize2["shadowSm"] = "shadow-sm";
  ShadowSize2["shadowXs"] = "shadow-xs";
  ShadowSize2["shadowMd"] = "shadow-md";
  ShadowSize2["shadowLg"] = "shadow-lg";
  ShadowSize2["shadowXl"] = "shadow-xl";
  ShadowSize2["shadow2xl"] = "shadow-2xl";
  ShadowSize2["shadow3xl"] = "shadow-3xl";
  ShadowSize2["shadow4xl"] = "shadow-4xl";
  ShadowSize2["shadow5xl"] = "shadow-5xl";
  ShadowSize2["shadowNone"] = "shadow-none";
  return ShadowSize2;
})(ShadowSize || {});
var BorderSize = /* @__PURE__ */ ((BorderSize2) => {
  BorderSize2["border0"] = "border-0";
  BorderSize2["border1"] = "border-1";
  BorderSize2["border2"] = "border-2";
  BorderSize2["border4"] = "border-4";
  BorderSize2["borderNone"] = "border-none";
  return BorderSize2;
})(BorderSize || {});
const GridStyle = {
  panel: {
    gap: {
      y: "space-y-4"},
    margin: {
      x: "mx-4",
      left: "ml-4",
      right: "mr-4",
      bottom: "mb-6"
    }
  }};
const bgClassNames = {
  ["listContent" /* listContent */]: "bg-gradient-to-b from-gray-200 via-transparent to-gray-300 dark:text-gray-900 dark:from-gray-800 dark:via-transparent dark:to-gray-800"
};

const $$Astro = createAstro();
const $$ThreeColumnGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThreeColumnGrid;
  let {
    className,
    centerPercents,
    centerClassName,
    leftClassName,
    rightClassName
  } = Astro2.props;
  if (className === void 0) {
    className = " mx-auto ";
  }
  if (centerPercents === void 0) {
    centerPercents = 50;
  }
  const cols = centerPercents === "1/3" ? "lg:grid-cols-3" : centerPercents === 50 ? "lg:grid-cols-4" : centerPercents === "3/4" ? "lg:grid-cols-8" : centerPercents === "4/5" ? "lg:grid-cols-10" : "lg:grid-cols-10";
  const centerSpan = centerPercents === "1/3" ? "lg:col-span-1" : centerPercents === 50 ? "lg:col-span-2" : centerPercents === "3/4" ? "lg:col-span-6" : centerPercents === "4/5" ? "lg:col-span-8" : "lg:col-span-6";
  const leftSpan = centerPercents === "3/5" ? "lg:col-span-2" : "lg:col-span-1";
  const rightSpan = centerPercents === "3/5" ? "lg:col-span-2" : "lg:col-span-1";
  return renderTemplate`${maybeRenderHead()}<main${addAttribute(`grid grid-cols-1 ${cols} ${className}`, "class")}> <div${addAttribute(`${leftSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.right} ${leftClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["left"])} </div> <div${addAttribute(`${centerSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.x} ${centerClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["center"])} </div> <div${addAttribute(`${rightSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.left} ${rightClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["right"])} </div> </main>`;
}, "/home/medet/ara-app/src/components/grid/ThreeColumnGrid.astro", void 0);

function GridSmallBackground() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed h-screen w-screen z-0 bg-transparent", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "absolute inset-0 bg-fixed",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-fixed pointer-events-none absolute inset-0 flex items-center justify-center bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black/50" })
  ] });
}

function GravityStarsBackground({
  starsCount = 75,
  starsSize = 2,
  starsOpacity = 0.75,
  glowIntensity = 15,
  glowAnimation = "ease",
  movementSpeed = 0.3,
  starsInteraction = false,
  starsInteractionType = "bounce",
  className,
  ...props
}) {
  const containerRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const animRef = React.useRef(null);
  const starsRef = React.useRef([]);
  const [dpr, setDpr] = React.useState(1);
  const [canvasSize, setCanvasSize] = React.useState({
    width: 800,
    height: 600
  });
  const readColor = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return "#ffffff";
    const cs = getComputedStyle(el);
    return cs.color || "#ffffff";
  }, []);
  const initStars = React.useCallback(
    (w, h) => {
      starsRef.current = Array.from({ length: starsCount }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = movementSpeed * (0.5 + Math.random() * 0.5);
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * starsSize + 1,
          opacity: starsOpacity,
          baseOpacity: starsOpacity,
          mass: Math.random() * 0.5 + 0.5,
          glowMultiplier: 1,
          glowVelocity: 0
        };
      });
    },
    [starsCount, movementSpeed, starsOpacity, starsSize]
  );
  const redistributeStars = React.useCallback((w, h) => {
    starsRef.current.forEach((p) => {
      p.x = Math.random() * w;
      p.y = Math.random() * h;
    });
  }, []);
  const resizeCanvas = React.useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const nextDpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    setDpr(nextDpr);
    canvas.width = Math.max(1, Math.floor(rect.width * nextDpr));
    canvas.height = Math.max(1, Math.floor(rect.height * nextDpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    setCanvasSize({ width: rect.width, height: rect.height });
    if (starsRef.current.length === 0) {
      initStars(rect.width, rect.height);
    } else {
      redistributeStars(rect.width, rect.height);
    }
  }, [initStars, redistributeStars]);
  const updateStars = React.useCallback(() => {
    const w = canvasSize.width;
    const h = canvasSize.height;
    for (let i = 0; i < starsRef.current.length; i++) {
      const p = starsRef.current[i];
      p.opacity = p.baseOpacity;
      p.glowMultiplier = 1;
      if (starsInteraction) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const o = starsRef.current[j];
          const dx2 = o.x - p.x;
          const dy2 = o.y - p.y;
          const d = Math.hypot(dx2, dy2);
          const minD = p.size + o.size + 5;
          if (d < minD && d > 0) {
            if (starsInteractionType === "bounce") {
              const nx = dx2 / d;
              const ny = dy2 / d;
              const rvx = p.vx - o.vx;
              const rvy = p.vy - o.vy;
              const speed = rvx * nx + rvy * ny;
              if (speed < 0) continue;
              const impulse = 2 * speed / (p.mass + o.mass);
              p.vx -= impulse * o.mass * nx;
              p.vy -= impulse * o.mass * ny;
              o.vx += impulse * p.mass * nx;
              o.vy += impulse * p.mass * ny;
              const overlap = minD - d;
              const sx = nx * overlap * 0.5;
              const sy = ny * overlap * 0.5;
              p.x -= sx;
              p.y -= sy;
              o.x += sx;
              o.y += sy;
            } else {
              const mergeForce = (minD - d) / minD;
              p.glowMultiplier = (p.glowMultiplier || 1) + mergeForce * 0.5;
              o.glowMultiplier = (o.glowMultiplier || 1) + mergeForce * 0.5;
              const af = mergeForce * 0.01;
              p.vx += dx2 * af;
              p.vy += dy2 * af;
              o.vx -= dx2 * af;
              o.vy -= dy2 * af;
            }
          }
        }
      }
      p.x += p.vx;
      p.y += p.vy;
      p.vx += (Math.random() - 0.5) * 1e-3;
      p.vy += (Math.random() - 0.5) * 1e-3;
      const currentSpeed = Math.hypot(p.vx, p.vy);
      const targetSpeed = movementSpeed * (0.5 + Math.random() * 0.5);
      if (currentSpeed > 0) {
        const speedRatio = targetSpeed / currentSpeed;
        if (currentSpeed < targetSpeed * 0.5 || currentSpeed > targetSpeed * 1.5) {
          p.vx *= speedRatio;
          p.vy *= speedRatio;
        }
      } else {
        const angle = Math.random() * Math.PI * 2;
        p.vx = Math.cos(angle) * targetSpeed;
        p.vy = Math.sin(angle) * targetSpeed;
      }
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    }
  }, [
    canvasSize.width,
    canvasSize.height,
    movementSpeed,
    starsInteraction,
    starsInteractionType
  ]);
  const drawStars = React.useCallback(
    (ctx) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const color = readColor();
      for (const p of starsRef.current) {
        ctx.save();
        ctx.shadowColor = color;
        ctx.shadowBlur = glowIntensity * (p.glowMultiplier || 1) * 2;
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    [dpr, glowIntensity, readColor]
  );
  const animate = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    updateStars();
    drawStars(ctx);
    animRef.current = requestAnimationFrame(animate);
  }, [updateStars, drawStars]);
  React.useEffect(() => {
    resizeCanvas();
    const container = containerRef.current;
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resizeCanvas) : null;
    if (container && ro) ro.observe(container);
    const onResize = () => resizeCanvas();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (ro && container) ro.disconnect();
    };
  }, [resizeCanvas]);
  React.useEffect(() => {
    if (starsRef.current.length === 0) {
      initStars(canvasSize.width, canvasSize.height);
    } else {
      starsRef.current.forEach((p) => {
        p.baseOpacity = starsOpacity;
        p.opacity = starsOpacity;
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > 0) {
          const ratio = movementSpeed / spd;
          p.vx *= ratio;
          p.vy *= ratio;
        }
      });
    }
  }, [
    starsCount,
    starsOpacity,
    movementSpeed,
    canvasSize.width,
    canvasSize.height,
    initStars
  ]);
  React.useEffect(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
    };
  }, [animate]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      "data-slot": "gravity-stars-background",
      className: cn("relative size-full overflow-hidden", className),
      ...props,
      children: /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "w-full h-full" })
    }
  );
}

function GradientBackground({
  className,
  transition = { duration: 15, ease: "easeInOut", repeat: Infinity },
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      "data-slot": "gradient-background",
      className: cn(
        // Light theme: light grayish colors
        "size-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300",
        // Dark theme: cosmic universe colors (deep purples, blues, dark colors)
        "dark:from-slate-900 dark:via-purple-950 dark:to-indigo-950",
        "bg-[length:400%_400%]",
        className
      ),
      animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
      transition,
      ...props
    }
  );
}

const STORAGE_KEY = "ara-browse-stack";
const MAX_STACK_SIZE = 100;
function getStack() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter((item) => typeof item === "string");
    }
    return [];
  } catch (error) {
    console.error("Error reading browse stack from localStorage:", error);
    return [];
  }
}
function saveStack(stack) {
  try {
    const limitedStack = stack.slice(-MAX_STACK_SIZE);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedStack));
    window.dispatchEvent(new CustomEvent("browse-stack-changed", {
      detail: { stackSize: limitedStack.length, topUrl: limitedStack[limitedStack.length - 1] || null }
    }));
  } catch (error) {
    console.error("Error saving browse stack to localStorage:", error);
  }
}
function pushUrl(url) {
  if (!url || typeof url !== "string") {
    console.warn("Invalid URL provided to pushUrl:", url);
    return;
  }
  const stack = getStack();
  const topUrl = stack[stack.length - 1];
  if (topUrl === url) {
    return;
  }
  const parentIndex = stack.indexOf(url);
  if (parentIndex !== -1) {
    const newStack = stack.slice(0, parentIndex + 1);
    saveStack(newStack);
    return;
  }
  stack.push(url);
  saveStack(stack);
}
function popUrl() {
  const stack = getStack();
  if (stack.length === 0) {
    return null;
  }
  const url = stack.pop() || null;
  saveStack(stack);
  return url;
}
function peekParent() {
  const stack = getStack();
  if (stack.length < 2) {
    return null;
  }
  return stack[stack.length - 2] || null;
}

const BrowseTracker = () => {
  useEffect(() => {
    const currentUrl = window.location.pathname + window.location.search;
    pushUrl(currentUrl);
  }, []);
  return null;
};

const MIN_DELAY_MS = 1e3;
function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const transitionStartTimeRef = useRef(null);
  const delayTimeoutRef = useRef(null);
  const overlayShownRef = useRef(false);
  const isInitialMountRef = useRef(true);
  const handleAfterNavigate = useCallback(() => {
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
      delayTimeoutRef.current = null;
    }
    if (overlayShownRef.current) {
      setTimeout(() => {
        setShowOverlay(false);
        setIsTransitioning(false);
        setTargetUrl("");
        transitionStartTimeRef.current = null;
        overlayShownRef.current = false;
      }, 100);
    } else {
      setIsTransitioning(false);
      setTargetUrl("");
      transitionStartTimeRef.current = null;
    }
  }, []);
  useEffect(() => {
    const initialMountTimeout = setTimeout(() => {
      isInitialMountRef.current = false;
    }, 1e3);
    const handleBeforeNavigate = (event) => {
      if (isInitialMountRef.current) {
        return;
      }
      const customEvent = event;
      let urlPath = "";
      if (customEvent.detail?.to) {
        const toUrl = customEvent.detail.to;
        if (toUrl instanceof URL) {
          urlPath = toUrl.pathname + toUrl.search;
        } else if (typeof toUrl === "string") {
          try {
            const url = new URL(toUrl, window.location.origin);
            urlPath = url.pathname + url.search;
          } catch {
            urlPath = toUrl;
          }
        }
      } else {
        urlPath = window.location.pathname + window.location.search;
      }
      if (urlPath) {
        setTargetUrl(urlPath);
        setIsTransitioning(true);
        transitionStartTimeRef.current = Date.now();
        overlayShownRef.current = false;
        delayTimeoutRef.current = setTimeout(() => {
          setShowOverlay(true);
          overlayShownRef.current = true;
        }, MIN_DELAY_MS);
      }
    };
    document.addEventListener("astro:before-preparation", handleBeforeNavigate);
    document.addEventListener("astro:after-swap", handleAfterNavigate);
    document.addEventListener("astro:page-load", handleAfterNavigate);
    document.addEventListener("astro:before-navigation", handleBeforeNavigate);
    document.addEventListener("astro:after-navigation", handleAfterNavigate);
    return () => {
      clearTimeout(initialMountTimeout);
      document.removeEventListener("astro:before-preparation", handleBeforeNavigate);
      document.removeEventListener("astro:after-swap", handleAfterNavigate);
      document.removeEventListener("astro:page-load", handleAfterNavigate);
      document.removeEventListener("astro:before-navigation", handleBeforeNavigate);
      document.removeEventListener("astro:after-navigation", handleAfterNavigate);
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
      }
    };
  }, [handleAfterNavigate]);
  return {
    isTransitioning,
    targetUrl,
    showOverlay
  };
}

const GALAXY_ZOOM_EVENTS = {
  ZOOM_CHANGE: "galaxy-zoom-change"
};

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;
const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      
      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);
  
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;
function Galaxy({
  focal = [0.5, 0.5],
  rotation = [1, 0],
  starSpeed = 0.5,
  density = 1,
  hueShift = 140,
  disableAnimation = false,
  speed = 1,
  mouseInteraction = true,
  glowIntensity = 0.3,
  saturation = 0,
  mouseRepulsion = true,
  repulsionStrength = 2,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  autoCenterRepulsion = 0,
  transparent = true,
  ...rest
}) {
  const ctnDom = useRef(null);
  const targetMousePos = useRef({ x: 0.5, y: 0.5 });
  const smoothMousePos = useRef({ x: 0.5, y: 0.5 });
  const targetMouseActive = useRef(0);
  const smoothMouseActive = useRef(0);
  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer({
      alpha: transparent,
      premultipliedAlpha: false
    });
    const gl = renderer.gl;
    if (transparent) {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    } else {
      gl.clearColor(0, 0, 0, 1);
    }
    let program;
    function resize(event) {
      const customEvent = event;
      const zoom = customEvent?.detail?.zoom;
      const scale = 1 + (zoom ? 1 - zoom / 100 : 0);
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    function handleZoomChange(event) {
      resize(event);
    }
    window.addEventListener("resize", resize, false);
    window.addEventListener(GALAXY_ZOOM_EVENTS.ZOOM_CHANGE, resize);
    resize();
    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uFocal: { value: new Float32Array(focal) },
        uRotation: { value: new Float32Array(rotation) },
        uStarSpeed: { value: starSpeed },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uSpeed: { value: speed },
        uMouse: {
          value: new Float32Array([smoothMousePos.current.x, smoothMousePos.current.y])
        },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
        uMouseRepulsion: { value: mouseRepulsion },
        uTwinkleIntensity: { value: twinkleIntensity },
        uRotationSpeed: { value: rotationSpeed },
        uRepulsionStrength: { value: repulsionStrength },
        uMouseActiveFactor: { value: 0 },
        uAutoCenterRepulsion: { value: autoCenterRepulsion },
        uTransparent: { value: transparent }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });
    let animateId;
    function update(t) {
      animateId = requestAnimationFrame(update);
      if (!disableAnimation) {
        program.uniforms.uTime.value = t * 1e-3;
        program.uniforms.uStarSpeed.value = t * 1e-3 * starSpeed / 10;
      }
      const lerpFactor = 0.05;
      smoothMousePos.current.x += (targetMousePos.current.x - smoothMousePos.current.x) * lerpFactor;
      smoothMousePos.current.y += (targetMousePos.current.y - smoothMousePos.current.y) * lerpFactor;
      smoothMouseActive.current += (targetMouseActive.current - smoothMouseActive.current) * lerpFactor;
      program.uniforms.uMouse.value[0] = smoothMousePos.current.x;
      program.uniforms.uMouse.value[1] = smoothMousePos.current.y;
      program.uniforms.uMouseActiveFactor.value = smoothMouseActive.current;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);
    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      targetMousePos.current = { x, y };
      targetMouseActive.current = 1;
    }
    function handleMouseLeave() {
      targetMouseActive.current = 0;
    }
    if (mouseInteraction) {
      ctn.addEventListener("mousemove", handleMouseMove);
      ctn.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      window.removeEventListener(GALAXY_ZOOM_EVENTS.ZOOM_CHANGE, handleZoomChange);
      if (mouseInteraction) {
        ctn.removeEventListener("mousemove", handleMouseMove);
        ctn.removeEventListener("mouseleave", handleMouseLeave);
      }
      ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    focal,
    rotation,
    starSpeed,
    density,
    hueShift,
    disableAnimation,
    speed,
    mouseInteraction,
    glowIntensity,
    saturation,
    mouseRepulsion,
    twinkleIntensity,
    rotationSpeed,
    repulsionStrength,
    autoCenterRepulsion,
    transparent
  ]);
  return /* @__PURE__ */ jsx("div", { ref: ctnDom, className: "w-full h-full relative", ...rest });
}

const AnimatedRocket = ({
  className = "",
  size = 24
}) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: `inline-flex items-center justify-center ${className}`,
      initial: { x: -20, opacity: 0 },
      animate: {
        x: [0, 10, 0],
        opacity: 1,
        rotate: [0, 5, -5, 0]
      },
      transition: {
        x: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.3
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: {
              scale: [1, 1.1, 1]
            },
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            },
            children: /* @__PURE__ */ jsx(Rocket, { size, className: "text-blue-400 dark:text-blue-300" })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute w-8 h-1 bg-gradient-to-r from-blue-400/50 to-transparent blur-sm",
            style: { left: -32 },
            animate: {
              opacity: [0.3, 0.7, 0.3],
              scaleX: [0.8, 1.2, 0.8]
            },
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        )
      ]
    }
  );
};

const PageTransitionOverlay = ({
  isVisible,
  targetUrl,
  direction = "ltr"
}) => {
  const getClipPath = (progress) => {
    switch (direction) {
      case "ltr":
        return `inset(0 ${100 - progress * 100}% 0 0)`;
      case "rtl":
        return `inset(0 0 0 ${100 - progress * 100}%)`;
      case "ttb":
        return `inset(${100 - progress * 100}% 0 0 0)`;
      case "btt":
        return `inset(0 0 ${100 - progress * 100}% 0)`;
      default:
        return `inset(0 ${100 - progress * 100}% 0 0)`;
    }
  };
  const veilVariants = {
    hidden: {
      clipPath: getClipPath(0),
      opacity: 0
    },
    visible: {
      clipPath: getClipPath(1),
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      clipPath: getClipPath(0),
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  const contentVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[9999]",
      style: { pointerEvents: isVisible ? "auto" : "none" },
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-transparent dark:bg-transparent backdrop-blur-sm",
            variants: veilVariants
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-80", children: /* @__PURE__ */ jsx(
          Galaxy,
          {
            speed: 10,
            starSpeed: 2,
            rotationSpeed: 0.5,
            autoCenterRepulsion: 2,
            glowIntensity: 0.8,
            twinkleIntensity: 0.5,
            density: 1.5,
            mouseInteraction: false,
            transparent: false
          }
        ) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 flex items-center justify-center",
            variants: contentVariants,
            children: /* @__PURE__ */ jsx("div", { className: "text-center px-8", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "text-4xl md:text-5xl font-bold text-white/90 dark:text-white/95 mb-4",
                style: {
                  filter: "blur(0.5px)",
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)"
                },
                children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-3", children: [
                  "Travelling to",
                  /* @__PURE__ */ jsx("span", { className: "text-blue-400 dark:text-blue-300 font-mono", children: targetUrl }),
                  /* @__PURE__ */ jsx(AnimatedRocket, { size: 32 })
                ] })
              }
            ) })
          }
        )
      ]
    }
  ) });
};

const PageTransitionProvider = ({
  direction = "ltr"
}) => {
  const { targetUrl, showOverlay } = usePageTransition();
  const transitionDirection = direction;
  return /* @__PURE__ */ jsx(
    PageTransitionOverlay,
    {
      isVisible: showOverlay,
      targetUrl,
      direction: transitionDirection
    }
  );
};

export { $$HeaderCosmic as $, BorderSize as B, GridStyle as G, MenuName as M, PageTransitionProvider as P, RoundedSize as R, ShadowSize as S, MenuItem as a, bgClassNames as b, Galaxy as c, BrowseTracker as d, GradientBackground as e, GridSmallBackground as f, GravityStarsBackground as g, $$ThreeColumnGrid as h, $$Footer as i, popUrl as j, peekParent as p };
