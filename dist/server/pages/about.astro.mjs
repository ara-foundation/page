import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead, p as addAttribute } from '../chunks/astro/server_EFpbLn-l.mjs';
import { $ as $$MinimalDarkLayout } from '../chunks/MinimalDarkLayout_CWKB8fu2.mjs';
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
  const twitterUrl = "https://x.com/MAhmetson";
  const blueskyUrl = medetSocialLinks.find((l) => l.type === "bluesky").url;
  const linkedinUrl = medetSocialLinks.find((l) => l.type === "linkedin").url;
  const emailUrl = medetSocialLinks.find((l) => l.type === "email").url;
  const experiments = [
    "Experiment one",
    "Experiment two",
    "Experiment three",
    "Experiment four",
    "Experiment five"
  ];
  return renderTemplate`${renderComponent($$result, "MinimalDarkLayout", $$MinimalDarkLayout, { "title": "About \xB7 Ara" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl px-6 pb-24 pt-12 text-left md:px-8 md:pt-16 [&_p]:text-pretty [&_li]:text-pretty"> <section class="space-y-8"> <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
About
</p> <h1 class="text-3xl font-normal leading-tight text-white md:text-4xl md:leading-tight">
Medet Ahmetson
</h1> <div class="space-y-4 text-base leading-relaxed text-neutral-300"> <p>
I started with computers in the 2010s as a teenager, on my own, before
          I knew English. To understand what computers actually are and what they
          can do, I learned Prolog and Lisp before PHP or C.
</p> <p>
That gave me the idea for Ara. In Turkmen, <em>ara</em> means &quot;the
          space in between.&quot; I was imagining a programming language called
          Aradil: a language of mediaspace. My first real project, in 2015, was
          already a language: TPL (Testable Programming Language), written from
          scratch, ten thousand lines of C, available on GitHub.
</p> <p>
In 2018 I joined Seascape as their first software engineer, porting a
          game across multiple blockchains. Three years later, when the company
          rebranded and launched its coin as Blocklords, I was appointed
          co-founder and CTO.
</p> <p>
Throughout that time I was skeptical of blockchain for anything beyond
          games. The real use case wasn&apos;t clear to me.
</p> <p>
In 2023 I left Blocklords to work on public good. Three years of
          experimentation, rewriting, and iteration later, I was finally able to
          formulate the vision as Ara, laid out in the${" "} <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">whitepaper</a>.
</p> </div> </section> <section class="mt-16 md:mt-20"> <ol class="grid list-none grid-cols-[2.25rem_1fr] gap-x-4 text-neutral-300 sm:grid-cols-[2.5rem_1fr]"> ${experiments.map((label, i) => renderTemplate`<li class="contents"> <div${addAttribute([
    "col-span-2 grid grid-cols-subgrid border-t border-white/10 py-6 sm:col-span-2",
    i === 0 && "border-t-0 pt-0"
  ], "class:list")}> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-500"> ${i + 1}.
</span> <span>${label}</span> </div> </li>`)} </ol> </section> <section class="mt-12 space-y-8 md:mt-16"> <p class="text-base leading-relaxed text-neutral-300">
If you want to work toward software ownership, OSS sustainability, and a
        Web3 redefined as creativity on computers built on collective wisdom,
        reach out. The${" "} <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">whitepaper</a> ${" "}is on${" "} <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">Bitcointalk</a>.
</p> <nav class="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400" aria-label="Social links"> <a${addAttribute(blueskyUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-white">Bluesky</a> <a${addAttribute(linkedinUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-white">LinkedIn</a> <a${addAttribute(twitterUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-white">Twitter</a> <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-white">Bitcointalk</a> </nav> </section> <footer class="mt-20 border-t border-white/10 pt-10 text-sm text-neutral-500" aria-label="About page footer"> <p class="text-neutral-400">Medet Ahmetson</p> <p class="mt-3 text-neutral-500"> <a${addAttribute(emailUrl, "href")} class="underline decoration-neutral-600 underline-offset-4 hover:text-neutral-300">email</a> <span class="mx-2 text-neutral-600" aria-hidden="true">•</span> <a${addAttribute(linkedinUrl, "href")} target="_blank" rel="noopener noreferrer" class="underline decoration-neutral-600 underline-offset-4 hover:text-neutral-300">LinkedIn</a> </p> </footer> </div> ` })}`;
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
