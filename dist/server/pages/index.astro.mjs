import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead, p as addAttribute } from '../chunks/astro/server_EFpbLn-l.mjs';
import { $ as $$MinimalDarkLayout } from '../chunks/MinimalDarkLayout_CWKB8fu2.mjs';
import { s as socialLinks, d as SocialLink } from '../chunks/SocialLink_aBJu88wy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const whitepaperUrl = "https://docs.google.com/document/d/1Zls4ORhzHje0t6WPOlAw-IjzizotYrmwCPElaCHFPz8/edit?usp=sharing";
  const footerSocial = [
    socialLinks.twitter,
    socialLinks.bluesky,
    socialLinks.linkedin
  ];
  return renderTemplate`${renderComponent($$result, "MinimalDarkLayout", $$MinimalDarkLayout, { "title": "Ara" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl px-6 pb-24 pt-12 text-left md:px-8 md:pt-16 [&_p]:text-pretty [&_li]:text-pretty"> <!-- Hero --> <section class="space-y-8"> <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
Collective wisdom
</p> <h1 class="text-3xl font-normal leading-tight text-white md:text-4xl md:leading-tight">
Web3 is a creative workspace built on collective wisdom.
</h1> <div class="space-y-4 text-base leading-relaxed text-neutral-300"> <p>
The first open protocol where each component, from small logic to complex
          dapps, is a building block that adds value to the whole. We want to
          empower creators to build, own, and distribute their work freely, all
          while discovering the inherent value they create.
</p> </div> <div class="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium"> <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
Read the Whitepaper on Collective Wisdom →
</a> <a href="#get-started" class="text-neutral-400 underline decoration-neutral-600 underline-offset-4 transition-colors hover:text-white hover:decoration-white/40">
Get started
</a> </div> </section> <!-- Problem --> <section class="mt-20 border-t border-white/10 pt-16 md:mt-24 md:pt-20"> <h2 class="text-2xl font-normal text-white md:text-3xl">
How we see the space: Web3 must become a creative workspace
</h2> <p class="mt-6 text-base leading-relaxed text-neutral-300">
The current web of trust is based on personal ledger. That was necessary
        but not sufficient. The whitepaper identifies critical gaps in the
        current landscape:
</p> <ul class="mt-8 grid list-none grid-cols-[1.25rem_1fr] gap-x-4 gap-y-5 text-neutral-300"> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>
Lack of a global, standard, and open infrastructure for collaborative
            work in Web3.
</span> </li> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>
Difficulty in discovering and integrating existing work into new
            projects, leading to duplication of effort.
</span> </li> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>
Inability for creators to capture the true value of their work and
            share it with the community.
</span> </li> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>
Lack of transparent and fair governance models for decentralized
            organizations.
</span> </li> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>
Barriers to entry for new participants due to the complexity of the
            Web3 ecosystem.
</span> </li> </ul> </section> <!-- Three components --> <section id="components" class="mt-20 border-t border-white/10 pt-16 md:mt-24 md:pt-20"> <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
The framework
</p> <h2 class="mt-4 text-2xl font-normal text-white md:text-3xl">
Three components. One coherent vision.
</h2> <div class="mt-10 space-y-10"> <div class="border-b border-white/10 pb-10"> <p class="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
Protocol
</p> <p class="mt-1 text-sm font-medium text-neutral-200">Arada</p> <p class="mt-3 text-base leading-relaxed text-neutral-300">
The first protocol where each component, from small logic to complex
            dapps, is a building block that adds value to the whole. We want to
            empower creators to build, own, and distribute their work freely, all
            while discovering the inherent value they create.
</p> </div> <div class="border-b border-white/10 pb-10"> <p class="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
Contract language
</p> <p class="mt-1 text-sm font-medium text-neutral-200">
Human–machine agreement
</p> <p class="mt-3 text-base leading-relaxed text-neutral-300">
A protocol agreement between human and machine. Ara’s semantics and
<code class="rounded-md bg-white/10 px-2 py-0.5 font-mono text-sm text-neutral-200">ara.json</code>
give a readable description of the software contract. This contract
            layer is the domain-specific language the network uses to register and
            compose work on <strong class="font-medium text-neutral-200">Arada</strong>.
</p> </div> <div> <p class="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
Network
</p> <p class="mt-1 text-sm font-medium text-neutral-200">Maydan</p> <p class="mt-3 text-base leading-relaxed text-neutral-300">
A decentralized infrastructure for hosting and running Web3
            applications. It provides a secure and scalable environment for
            creators to deploy their work and interact with the community.
</p> </div> </div> </section> <!-- How it works --> <section class="mt-20 border-t border-white/10 pt-16 md:mt-24 md:pt-20"> <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
How it works
</p> <h2 class="mt-4 text-2xl font-normal text-white md:text-3xl">
From components to a shared workspace
</h2> <ol class="mt-10 grid list-none grid-cols-[1.75rem_1fr] gap-x-4 gap-y-6 text-neutral-300"> <li class="contents"> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-500">1.</span> <span class="leading-relaxed">
A developer creates a functional component using the Ara framework and
            the contract language around
<code class="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">ara.json</code>.
</span> </li> <li class="contents"> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-500">2.</span> <span class="leading-relaxed">
The component is registered on <strong class="font-medium text-neutral-200">Arada</strong>,
            making it available for others to use and compose.
</span> </li> <li class="contents"> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-500">3.</span> <span class="leading-relaxed">
A user interacts with <strong class="font-medium text-neutral-200">Maydan</strong>
to discover and use components, building a custom workflow that matches
            their needs.
</span> </li> <li class="contents"> <span class="pt-0.5 text-right font-mono text-sm tabular-nums text-neutral-500">4.</span> <span class="leading-relaxed"> <strong class="font-medium text-neutral-200">Arada</strong> tracks usage of
            components; rewards reach creators through the value-sharing protocol,
            while <strong class="font-medium text-neutral-200">Aramak</strong> helps
            surface discovery from collective signals.
</span> </li> </ol> </section> <!-- Protocol agreement & workspace --> <section class="mt-20 border-t border-white/10 pt-16 md:mt-24 md:pt-20"> <h2 class="text-2xl font-normal text-white md:text-3xl">
A protocol agreement &amp; a creative workspace
</h2> <p class="mt-6 text-base leading-relaxed text-neutral-300">
Web3 is a creative workspace built on collective wisdom. This is not just
        a protocol but a platform for collaboration and value creation.
</p> <div class="mt-10 grid gap-6 md:grid-cols-2"> <article class="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8"> <h3 class="text-sm font-medium uppercase tracking-wide text-neutral-400">
A protocol agreement
</h3> <p class="mt-4 text-sm leading-relaxed text-neutral-300">
“This software is open-source, and business or personal.” Registration
            on Arada is an Ara-first, public, common core: semantics tied to signed
            source so commitments stay readable to people and machines.
</p> </article> <article class="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8"> <h3 class="text-sm font-medium uppercase tracking-wide text-neutral-400">
Markup apps
</h3> <p class="mt-4 text-sm leading-relaxed text-neutral-300">
Markup apps as logic components, or reshape interface elements so
            applications communicate data the way you intend. Maydan is yours to
            shape.
</p> </article> </div> </section> <!-- Collective Intelligence Network --> <section class="mt-20 border-t border-white/10 pt-16 md:mt-24 md:pt-20"> <h2 class="text-2xl font-normal text-white md:text-3xl">
Collective Intelligence Network
</h2> <p class="mt-6 text-base leading-relaxed text-neutral-300">
The network is a complex system of actors. It is built on components that
        each capture an element of value and emerge from collective intelligence.
<strong class="font-medium text-neutral-200">Aramak</strong> turns
        behavior into discovery signals; <strong class="font-medium text-neutral-200">Arada</strong>
and the contract layer keep composition and attribution explicit.
</p> <ul class="mt-8 grid list-none grid-cols-[1.25rem_1fr] gap-x-4 gap-y-5 text-neutral-300"> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>Each node is an independent actor.</span> </li> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>
Nodes interact through <strong class="font-medium text-neutral-200">Arada</strong>,
            the contract language, and <strong class="font-medium text-neutral-200">Maydan</strong>.
</span> </li> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>Value is created through the interaction of the nodes.</span> </li> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>
The network is governed by the community through a DAO.
</span> </li> <li class="contents"> <span class="pt-1 text-neutral-500" aria-hidden="true">•</span> <span>
The value-sharing protocol ensures that creators are rewarded for their
            contributions; <strong class="font-medium text-neutral-200">Aramak</strong>
informs fair, intent-oriented discovery.
</span> </li> </ul> </section> <!-- Get started --> <section id="get-started" class="mt-20 border-t border-white/10 pt-16 md:mt-24 md:pt-20"> <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
Next step
</p> <h2 class="mt-4 text-2xl font-normal text-white md:text-3xl">
Get started
</h2> <p class="mt-6 text-base leading-relaxed text-neutral-300">
The ecosystem is built on collective intelligence, and the network is built
        on components that each capture an element of value and emerge from
        collective intelligence.
</p> <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="mt-8 inline-block text-sm font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
Join the network →
</a> </section> <footer class="mt-20 border-t border-white/10 pt-10 text-sm text-neutral-500" aria-label="Site footer"> <div class="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between"> <nav class="flex flex-col gap-3 text-neutral-400" aria-label="Primary footer links"> <a${addAttribute(whitepaperUrl, "href")} target="_blank" rel="noopener noreferrer" class="w-fit hover:text-neutral-200">
Whitepaper
</a> <a href="/about" class="w-fit hover:text-neutral-200">About</a> <a href="#components" class="w-fit hover:text-neutral-200">
Components
</a> <a href="#discussion" class="w-fit hover:text-neutral-200">
Discussion
</a> </nav> <div class="flex flex-wrap items-center gap-2" aria-label="Social media"> ${footerSocial.map((link) => renderTemplate`${renderComponent($$result2, "SocialLink", SocialLink, { "client:load": true, "link": link, "className": "flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neutral-400 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white", "client:component-hydration": "load", "client:component-path": "@/components/utilitified_decorations/SocialLink", "client:component-export": "default" })}`)} </div> </div> <p id="discussion" class="mt-10 max-w-prose text-xs leading-relaxed text-neutral-600">
Discussion is a placeholder for now. A dedicated space for community and
        technical conversation will be linked here later. You can still reach the
        project on X, Bluesky, and LinkedIn above.
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
