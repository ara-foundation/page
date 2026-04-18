import { j as createComponent, k as createAstro, p as addAttribute, x as renderComponent, y as renderHead, z as renderSlot, r as renderTemplate } from './astro/server_DQ3wOqi7.mjs';
import { s as socialLinks, $ as $$ClientRouter, e as $$Analytics, d as SocialLink } from './Analytics_B_TfxMA7.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro = createAstro();
const $$MinimalDarkLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MinimalDarkLayout;
  const { title = "Ara" } = Astro2.props;
  const whitepaperUrl = "https://bitcointalk.org/index.php?topic=5579945.new";
  const headerSocial = [
    socialLinks.github,
    socialLinks.twitter,
    socialLinks.bluesky,
    socialLinks.linkedin
  ];
  return renderTemplate`<html lang="en" class="bg-neutral-50 dark:bg-black"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/ara_logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "Analytics", $$Analytics, {})}${renderHead()}</head> <body class="min-h-screen bg-neutral-50 text-neutral-800 antialiased selection:bg-neutral-200/60 selection:text-neutral-900 dark:bg-black dark:text-neutral-100 dark:selection:bg-white/20 dark:selection:text-neutral-100"> <header class="border-b border-neutral-200 dark:border-white/10"> <div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 md:px-8"> <div class="flex items-center gap-6"> <a href="/" class="text-sm font-medium tracking-wide text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300">
Ara
</a> <nav class="hidden items-center gap-4 text-sm text-neutral-600 md:flex dark:text-neutral-400" aria-label="Primary navigation"> <a href="/aratalk" class="hover:text-neutral-900 dark:hover:text-neutral-200">
Discuss
</a> <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-neutral-900 dark:hover:text-neutral-200">
Whitepaper
</a> <a href="/about" class="hover:text-neutral-900 dark:hover:text-neutral-200">
About Author
</a> </nav> </div> <div class="hidden items-center gap-2 md:flex" aria-label="Social media"> ${headerSocial.map((link) => renderTemplate`${renderComponent($$result, "SocialLink", SocialLink, { "client:load": true, "link": link, "className": "flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white", "client:component-hydration": "load", "client:component-path": "@/components/utilitified_decorations/SocialLink", "client:component-export": "default" })}`)} </div> </div> <div class="mx-auto max-w-3xl px-6 pb-5 md:hidden md:px-8"> <nav class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400"> <a href="/aratalk" class="hover:text-neutral-900 dark:hover:text-neutral-200">
Discuss
</a> <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-neutral-900 dark:hover:text-neutral-200">
Whitepaper
</a> <a href="/about" class="hover:text-neutral-900 dark:hover:text-neutral-200">
About Author
</a> </nav> </div> </header> <main class="minimal-landing-main"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/medet/ara-app/src/layouts/MinimalDarkLayout.astro", void 0);

export { $$MinimalDarkLayout as $ };
