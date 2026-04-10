import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead, p as addAttribute } from '../chunks/astro/server_EFpbLn-l.mjs';
import { $ as $$MinimalDarkLayout } from '../chunks/MinimalDarkLayout_CSIRAPK0.mjs';
import { s as socialLinks } from '../chunks/Analytics_Day3AV4c.mjs';
export { renderers } from '../renderers.mjs';

const medetSocialLinks = [
  {
    type: "github",
    url: "https://github.com/ahmetson",
    label: "GitHub"
  },
  {
    type: "linkedin",
    url: "https://www.linkedin.com/in/ahmetson",
    label: "LinkedIn"
  },
  {
    type: "telegram",
    url: "https://t.me/blocklord",
    label: "Telegram"
  },
  {
    type: "bluesky",
    url: "https://bsky.app/profile/ahmetson.bsky.social",
    label: "Bluesky"
  },
  {
    type: "youtube",
    url: "https://www.youtube.com/@medet-ahmetson",
    label: "YouTube"
  },
  {
    type: "email",
    url: "mailto:medet@ara.foundation",
    label: "Email"
  },
  {
    type: "website",
    url: "https://ahmetson.com",
    label: "Personal Website"
  }
];

const $$About = createComponent(($$result, $$props, $$slots) => {
  const whitepaperUrl = "https://docs.google.com/document/d/1Zls4ORhzHje0t6WPOlAw-IjzizotYrmwCPElaCHFPz8/edit?usp=sharing";
  const linkedinUrl = medetSocialLinks.find((l) => l.type === "linkedin").url;
  const emailUrl = medetSocialLinks.find((l) => l.type === "email").url;
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
</h1> <div class="space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"> <p>
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
The${" "} <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">whitepaper</a> ${" "}is available on${" "} <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">Bitcointalk</a>. For any questions, I will be glad to answer there.
</p> <p>
If you care about software ownership, OSS sustainability, or the
          future of Web3 as a creative space built on collective wisdom, I
          invite you to collaborate. Message me at${" "} <a${addAttribute(emailUrl, "href")} class="font-mono text-sm text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">medet@ara.foundation</a>.
</p> <p>
To keep up with updates, follow us on${" "} <a${addAttribute(socialLinks.twitter.url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex align-[-0.15em] text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white" aria-label="X"> <svg class="h-[1.1em] w-[1.1em] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a>
,${" "} <a${addAttribute(socialLinks.bluesky.url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">Bluesky</a> ${" "}or${" "} <a${addAttribute(socialLinks.linkedin.url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-700 dark:text-white dark:decoration-white/30 dark:hover:decoration-white">LinkedIn</a>.
</p> </div> </section> <footer class="mt-20 border-t border-neutral-200 pt-10 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-500" aria-label="About page footer"> <p class="text-neutral-600 dark:text-neutral-400">Medet Ahmetson</p> <p class="mt-3 text-neutral-600 dark:text-neutral-500"> <a${addAttribute(emailUrl, "href")} class="underline decoration-neutral-400 underline-offset-4 hover:text-neutral-900 dark:decoration-neutral-600 dark:hover:text-neutral-300">Email</a> <span class="mx-2 text-neutral-400 dark:text-neutral-600" aria-hidden="true">•</span> <a${addAttribute(linkedinUrl, "href")} target="_blank" rel="noopener noreferrer" class="underline decoration-neutral-400 underline-offset-4 hover:text-neutral-900 dark:decoration-neutral-600 dark:hover:text-neutral-300">LinkedIn</a> </p> </footer> </div> ` })}`;
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
