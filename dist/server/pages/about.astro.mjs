import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead, p as addAttribute } from '../chunks/astro/server_DQ3wOqi7.mjs';
import { $ as $$MinimalDarkLayout } from '../chunks/MinimalDarkLayout_DRUSXn-b.mjs';
import { c as companyInfo } from '../chunks/Analytics_B_TfxMA7.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const whitepaperUrl = "https://bitcointalk.org/index.php?topic=5579945.new";
  const personalWebsiteUrl = "https://ahmetson.com";
  const linkedinProfileUrl = "https://www.linkedin.com/in/ahmetson";
  const twitterProfileUrl = "https://x.com/MAhmetson";
  const blueskyProfileUrl = "https://bsky.app/profile/ahmetson.bsky.social";
  const emailAddress = "medet@ara.foundation";
  const mailtoUrl = `mailto:${emailAddress}`;
  const experiments = [
    {
      title: "Experiment 1",
      href: "https://youtu.be/suOaUQmMSGo?si=mDn4L7LUN21IaQv8",
      subtitle: "Private code \u2014 package licenses",
      demo: true
    },
    {
      title: "Experiment 2",
      href: "https://github.com/ara-foundation/forum",
      subtitle: "Minimal, just with the community. No blockchain. Just a forum."
    },
    {
      title: "Experiment 3",
      href: "https://github.com/ara-foundation/app-v1"
    },
    {
      title: "Experiment 4",
      href: "https://github.com/ara-foundation/ara-v1"
    },
    {
      title: "Experiment 5",
      href: "https://github.com/ara-foundation/ara-v2"
    },
    {
      title: "Experiment 6",
      href: "https://github.com/ara-foundation/ara-v3"
    },
    {
      title: "Experiment 7",
      href: "https://github.com/ara-foundation/app/tree/pre-blockchain",
      subtitle: "Social media for sustainable open source projects with payment distribution by software semantics"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MinimalDarkLayout", $$MinimalDarkLayout, { "title": "About \xB7 Ara" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl px-6 pb-24 pt-12 text-left md:px-8 md:pt-16 [&_p]:text-pretty [&_li]:text-pretty"> <section class="space-y-8"> <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-500">
About
</p> <h1 class="text-3xl font-normal leading-tight text-neutral-900 md:text-4xl md:leading-tight dark:text-white">
Medet Ahmetson
</h1> <div class="flex flex-wrap items-center gap-2"> <a${addAttribute(personalWebsiteUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="Personal website" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M12 2a10 10 0 100 20 10 10 0 000-20Z" stroke="currentColor" stroke-width="1.8"></path> <path d="M2 12h20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path> <path d="M12 2c2.8 2.7 4.5 6.2 4.5 10S14.8 19.3 12 22c-2.8-2.7-4.5-6.2-4.5-10S9.2 4.7 12 2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> <a${addAttribute(linkedinProfileUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1c1.36 0 2.48 1.12 2.48 2.5ZM.5 23.5h4V7.9h-4V23.5ZM8.2 7.9h3.8v2.1h.06c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.08v9.52h-4v-8.44c0-2.01-.04-4.6-2.8-4.6-2.8 0-3.23 2.19-3.23 4.45v8.59h-4V7.9Z"></path> </svg> </a> <a${addAttribute(linkedinProfileUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="GitHub (profile link)" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path> </svg> </a> <a${addAttribute(mailtoUrl, "href")} aria-label="Email" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path> </svg> </a> <a${addAttribute(twitterProfileUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> <a${addAttribute(blueskyProfileUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="Bluesky" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 600 530" preserveAspectRatio="xMidYMid meet" aria-hidden="true"> <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3 .5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9 120.3 124.6 164.8-26.7 187.7-103.4 22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7 5.9-19.9 15-138.9 15-155.5s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8-66.1 46.6-137.1 141.1-163.2 191.8z"></path> </svg> </a> </div> <div class="space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"> <p>
In the 2010s, as a teenager, I taught myself computer science before I
          knew English. To understand what computers actually are and what they
          can do, I learned Prolog and Lisp before PHP or C.
</p> <p>
That gave me the idea for Ara. In Turkmen, <em>ara</em> means &quot;the
          space in between.&quot; I was imagining a programming language called Aradil:
          a language of mediaspace. My first real project, in 2015, was already a
          language: TPL (Testable Programming Language), written from scratch, ten
          thousand lines of C, available on GitHub.
</p> <p>
In 2018 I joined Seascape as their first software engineer, porting a
          game across multiple blockchains. Three years later, when the company
          rebranded and launched to Blocklords, I was appointed co-founder and
          CTO.
</p> <p>
Throughout that time I was skeptical of blockchain for anything beyond
          games.
</p> <p>
In 2023 I left Blocklords to work on public good. Three years of
          experimentation, rewriting, and iteration later, I was finally able to
          formulate the vision as Ara, laid out in the${" "} <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">whitepaper</a>.
</p> </div> </section> <section class="mt-16 md:mt-20"> <ol class="grid list-none grid-cols-[2.25rem_1fr] gap-x-4 text-neutral-700 sm:grid-cols-[2.5rem_1fr] dark:text-neutral-300"> ${experiments.map((exp, i) => renderTemplate`<li class="contents"> <div${addAttribute([
    "col-span-2 grid grid-cols-subgrid border-t border-neutral-200 py-6 sm:col-span-2 dark:border-white/10",
    i === 0 && "border-t-0 pt-0"
  ], "class:list")}> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-600 dark:text-neutral-500"> ${i + 1}.
</span> <div class="min-w-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-2"> <a${addAttribute(exp.href, "href")} target="_blank" rel="noopener noreferrer" class="font-serif text-base leading-snug text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 md:text-lg dark:text-white dark:decoration-white/30 dark:hover:decoration-white"> ${exp.title} </a> ${"demo" in exp && exp.demo ? renderTemplate`<a${addAttribute(exp.href, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:border-white/15 dark:bg-white/[0.04] dark:text-neutral-300 dark:hover:border-white/25 dark:hover:bg-white/[0.07] dark:hover:text-white"> <svg class="h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg>
Demo
</a>` : null} </div> ${"subtitle" in exp && exp.subtitle ? renderTemplate`<p class="mt-2 font-mono text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-neutral-500"> ${exp.subtitle} </p>` : null} </div> </div> </li>`)} </ol> </section> <section class="mt-12 space-y-8 md:mt-16"> <div class="space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"> <p>
For questions, critique, and discussion, use${" "} <a href="/aratalk" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">Discuss (AraTalk)</a>.
</p> <p class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
Follow me if you want authentic opinions. Don&apos;t follow me if you get raged — I deleted my Reddit account because of that.
</p> <div class="flex flex-wrap items-center gap-2 pt-2" aria-label="Personal links"> <a${addAttribute(personalWebsiteUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="Personal website" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M12 2a10 10 0 100 20 10 10 0 000-20Z" stroke="currentColor" stroke-width="1.8"></path> <path d="M2 12h20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path> <path d="M12 2c2.8 2.7 4.5 6.2 4.5 10S14.8 19.3 12 22c-2.8-2.7-4.5-6.2-4.5-10S9.2 4.7 12 2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> <a${addAttribute(linkedinProfileUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1c1.36 0 2.48 1.12 2.48 2.5ZM.5 23.5h4V7.9h-4V23.5ZM8.2 7.9h3.8v2.1h.06c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.08v9.52h-4v-8.44c0-2.01-.04-4.6-2.8-4.6-2.8 0-3.23 2.19-3.23 4.45v8.59h-4V7.9Z"></path> </svg> </a> <a${addAttribute(linkedinProfileUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="GitHub (profile link)" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path> </svg> </a> <a${addAttribute(mailtoUrl, "href")} aria-label="Email" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path> </svg> </a> <a${addAttribute(twitterProfileUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> <a${addAttribute(blueskyProfileUrl, "href")} target="_blank" rel="noopener noreferrer" aria-label="Bluesky" class="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 600 530" preserveAspectRatio="xMidYMid meet" aria-hidden="true"> <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3 .5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9 120.3 124.6 164.8-26.7 187.7-103.4 22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7 5.9-19.9 15-138.9 15-155.5s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8-66.1 46.6-137.1 141.1-163.2 191.8z"></path> </svg> </a> </div> </div> </section> <footer class="mt-20 border-t border-neutral-200 pt-10 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-500" aria-label="About page footer"> <p class="text-neutral-600 dark:text-neutral-500">
© ${companyInfo.copyrightYear} Ara Foundation.
</p> </footer> </div> ` })}`;
}, "/home/medet/ara-app/src/pages/about.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
