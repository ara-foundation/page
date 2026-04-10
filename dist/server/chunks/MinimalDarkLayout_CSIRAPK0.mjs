import { j as createComponent, k as createAstro, p as addAttribute, x as renderComponent, y as renderHead, z as renderSlot, r as renderTemplate } from './astro/server_EFpbLn-l.mjs';
import { $ as $$ClientRouter, a as $$Analytics } from './Analytics_Day3AV4c.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro = createAstro();
const $$MinimalDarkLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MinimalDarkLayout;
  const { title = "Ara" } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-neutral-50 dark:bg-black"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/ara_logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "Analytics", $$Analytics, {})}${renderHead()}</head> <body class="min-h-screen bg-neutral-50 text-neutral-800 antialiased selection:bg-neutral-200/60 selection:text-neutral-900 dark:bg-black dark:text-neutral-100 dark:selection:bg-white/20 dark:selection:text-neutral-100"> <header class="border-b border-neutral-200 dark:border-white/10"> <div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 md:px-8"> <a href="/" class="text-sm font-medium tracking-wide text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300">
Ara
</a> </div> </header> <main class="minimal-landing-main"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/medet/ara-app/src/layouts/MinimalDarkLayout.astro", void 0);

export { $$MinimalDarkLayout as $ };
