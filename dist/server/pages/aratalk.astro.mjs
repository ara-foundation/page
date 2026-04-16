import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead, p as addAttribute } from '../chunks/astro/server_DQ3wOqi7.mjs';
import { $ as $$MinimalDarkLayout } from '../chunks/MinimalDarkLayout_BjSaFA6C.mjs';
import { s as socialLinks } from '../chunks/Analytics__czfT5tp.mjs';
export { renderers } from '../renderers.mjs';

const $$Aratalk = createComponent(($$result, $$props, $$slots) => {
  const discourseMalleableUrl = "https://forum.malleable.systems/t/ara-creative-workspace-on-collective-wisdom/420";
  const bitcoinTalkUrl = "https://bitcointalk.org/index.php?topic=5579945";
  const slackVisionsUrl = "https://feelingofcomputing.slack.com/archives/CCL5VVBAN/p1776254574049909";
  const sustainossUrl = "https://discourse.sustainoss.org/t/aras-sustainability-model-make-user-centric-software-and-refactor-to-mvc/1819";
  const collaborationEmail = "medet@ara.foundation";
  const mailtoUrl = `mailto:${collaborationEmail}`;
  return renderTemplate`${renderComponent($$result, "MinimalDarkLayout", $$MinimalDarkLayout, { "title": "AraTalk \xB7 Ara" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl px-6 pb-24 pt-12 text-left md:px-8 md:pt-16 [&_p]:text-pretty [&_li]:text-pretty"> <section class="space-y-8"> <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-500">
AraTalk
</p> <h1 class="text-3xl font-normal leading-tight text-neutral-900 md:text-4xl md:leading-tight dark:text-white">
The discussion layer for Ara.
</h1> <div class="space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"> <p>
Ara is an interdisciplinary project. Discussion is intentionally
          scattered across established communities, each aligned to a specific
          use case, audience, and depth.
</p> <p>
If you want to engage, start with the forum that matches your question.
          It keeps the feedback grounded in the right context and makes it easier
          for others to follow.
</p> </div> </section> <section class="mt-16 md:mt-20"> <ol class="grid list-none grid-cols-[2.25rem_1fr] gap-x-4 text-neutral-700 sm:grid-cols-[2.5rem_1fr] dark:text-neutral-300"> <li class="contents"> <div class="col-span-2 grid grid-cols-subgrid border-t border-neutral-200 py-6 sm:col-span-2 dark:border-white/10"> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-600 dark:text-neutral-500">
1.
</span> <div class="min-w-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-2"> <a${addAttribute(discourseMalleableUrl, "href")} target="_blank" rel="noopener noreferrer" class="font-serif text-base leading-snug text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 md:text-lg dark:text-white dark:decoration-white/30 dark:hover:decoration-white">
Malleable software / software ownership
</a> </div> <p class="mt-2 font-mono text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-neutral-500">
Use this thread for the client-side ownership discourse and any questions about Maydan.
</p> </div> </div> </li> <li class="contents"> <div class="col-span-2 grid grid-cols-subgrid border-t border-neutral-200 py-6 sm:col-span-2 dark:border-white/10"> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-600 dark:text-neutral-500">
2.
</span> <div class="min-w-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-2"> <a${addAttribute(bitcoinTalkUrl, "href")} target="_blank" rel="noopener noreferrer" class="font-serif text-base leading-snug text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 md:text-lg dark:text-white dark:decoration-white/30 dark:hover:decoration-white">
Blockchain questions
</a> </div> <p class="mt-2 font-mono text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-neutral-500">
Technical questions, critique, and discussion of the whitepaper belong on BitcoinTalk.
</p> </div> </div> </li> <li class="contents"> <div class="col-span-2 grid grid-cols-subgrid border-t border-neutral-200 py-6 sm:col-span-2 dark:border-white/10"> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-600 dark:text-neutral-500">
3.
</span> <div class="min-w-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-2"> <a${addAttribute(slackVisionsUrl, "href")} target="_blank" rel="noopener noreferrer" class="font-serif text-base leading-snug text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 md:text-lg dark:text-white dark:decoration-white/30 dark:hover:decoration-white">
Visions (Feeling of Coding Slack)
</a> </div> <p class="mt-2 font-mono text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-neutral-500">
Vision-level threads live in the Feeling of Coding Slack (sign-in required).
</p> </div> </div> </li> <li class="contents"> <div class="col-span-2 grid grid-cols-subgrid border-t border-neutral-200 py-6 sm:col-span-2 dark:border-white/10"> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-600 dark:text-neutral-500">
4.
</span> <div class="min-w-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-2"> <a${addAttribute(sustainossUrl, "href")} target="_blank" rel="noopener noreferrer" class="font-serif text-base leading-snug text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 md:text-lg dark:text-white dark:decoration-white/30 dark:hover:decoration-white">
Open-source sustainability / software architecture
</a> </div> <p class="mt-2 font-mono text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-neutral-500">
For OSS-facing questions and sustainability model discussions, use SustainOSS.
</p> </div> </div> </li> </ol> </section> <section class="mt-12 space-y-8 md:mt-16"> <div class="space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"> <p>
If you don&apos;t have access to the communities above, follow Ara for
          updates on${" "} <a${addAttribute(socialLinks.linkedin.url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">LinkedIn</a>,${" "} <a${addAttribute(socialLinks.twitter.url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">X (Twitter)</a>, or${" "} <a${addAttribute(socialLinks.bluesky.url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">Bluesky</a>.
</p> <p>
For collaboration, please reach out only by email:${" "} <a${addAttribute(mailtoUrl, "href")} class="font-mono text-sm text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">${collaborationEmail}</a>.
</p> </div> </section> <footer class="mt-20 border-t border-neutral-200 pt-10 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-500" aria-label="AraTalk page footer"> <p>
Collaboration:${" "} <a${addAttribute(mailtoUrl, "href")} class="underline decoration-neutral-400 underline-offset-4 hover:text-neutral-900 dark:decoration-neutral-600 dark:hover:text-neutral-300">${collaborationEmail}</a> </p> </footer> </div> ` })}`;
}, "/home/medet/ara-app/src/pages/aratalk.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/aratalk.astro";
const $$url = "/aratalk";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Aratalk,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
