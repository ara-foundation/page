import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead, p as addAttribute } from '../chunks/astro/server_DQ3wOqi7.mjs';
import { $ as $$MinimalDarkLayout } from '../chunks/MinimalDarkLayout_CttNH107.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Roadmap = createComponent(($$result, $$props, $$slots) => {
  const experiments = [
    {
      title: "Experiment 2",
      href: "https://github.com/ara-foundation/forum",
      subtitle: "Minimal community-first forum, no blockchain."
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
      subtitle: "Social media for sustainable open source projects with semantic payment distribution."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MinimalDarkLayout", $$MinimalDarkLayout, { "title": "Ara Roadmap", "data-astro-cid-khueswxm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="roadmap-main" data-astro-cid-khueswxm> <div class="roadmap-shell" data-astro-cid-khueswxm> <aside class="roadmap-nav-wrap" data-astro-cid-khueswxm> <nav class="roadmap-nav" aria-label="Roadmap section navigation" data-astro-cid-khueswxm> <p class="roadmap-nav-label" data-astro-cid-khueswxm>Roadmap</p> <a href="#pre-2024-2026" class="nav-link nav-link-pre" data-astro-cid-khueswxm>Pre with date (2024-2026)</a> <a href="#now" class="nav-link nav-link-now" data-astro-cid-khueswxm>Now</a> <a href="#from-2026" class="nav-link nav-link-next" data-astro-cid-khueswxm>2026-onward</a> <a href="#join-us" class="nav-link nav-link-join" data-astro-cid-khueswxm>Join us</a> </nav> </aside> <div class="roadmap-content" data-astro-cid-khueswxm> <section id="pre-2024-2026" class="roadmap-section section-pre" data-astro-cid-khueswxm> <p class="s-label" data-astro-cid-khueswxm>Pre with date (2024-2026)</p> <h1 class="section-title" data-astro-cid-khueswxm>What Has Been Done</h1> <div class="timeline" data-astro-cid-khueswxm> <article class="timeline-item" data-astro-cid-khueswxm> <p data-astro-cid-khueswxm>
First it was a 3D software environment with AI assistant. The
                idea was right but asbtract. 3D space was a desktop app. It
                didn't work out because the UI metaphor was not properly built,
                and the blockchain side was not ready.
</p> <div class="shot-grid three" data-astro-cid-khueswxm> <figure class="screenshot-photo" data-astro-cid-khueswxm> <img src="/roadmap/roadmap-3d-1.png" alt="3D environment screenshot showing AI assistant and command panel." loading="lazy" data-astro-cid-khueswxm> <figcaption data-astro-cid-khueswxm>screenshot 1 - 3D environment</figcaption> </figure> <figure class="screenshot-photo" data-astro-cid-khueswxm> <img src="/roadmap/roadmap-3d-2.png" alt="3D environment screenshot showing UI panel and browser action." loading="lazy" data-astro-cid-khueswxm> <figcaption data-astro-cid-khueswxm>screenshot 2 - 3D environment</figcaption> </figure> <figure class="screenshot-photo" data-astro-cid-khueswxm> <img src="/roadmap/roadmap-3d-3.png" alt="3D environment screenshot showing multiple users and Ara transfers." loading="lazy" data-astro-cid-khueswxm> <figcaption data-astro-cid-khueswxm>screenshot 3 - 3D environment</figcaption> </figure> </div> <p data-astro-cid-khueswxm>
Demo showcase available on
<a href="https://www.youtube.com/watch?v=suOaUQmMSGo&t=41s" target="_blank" rel="noopener" data-astro-cid-khueswxm>YouTube</a>.
</p> </article> <article class="timeline-item" data-astro-cid-khueswxm> <p data-astro-cid-khueswxm>
Then it moved to the web to ship faster. It experiment with 2D
                new metaphor for malleable interface: instead typography based
                component, its like a universe with galaxies (projects) and
                stars (users).
</p> <figure class="screenshot-photo" data-astro-cid-khueswxm> <img src="/roadmap/roadmap-galaxy-interface.png" alt="Galaxy interface screenshot from Ara web version." loading="lazy" data-astro-cid-khueswxm> <figcaption data-astro-cid-khueswxm>screenshot - galaxy interface</figcaption> </figure> <p data-astro-cid-khueswxm>
The site itself came with meta tools that let you step outside
                the page.
</p> <figure class="screenshot-photo" data-astro-cid-khueswxm> <img src="/roadmap/roadmap-meta-tools-scrolled.png" alt="Scrolled Ara page showing meta tools and galaxy background." loading="lazy" data-astro-cid-khueswxm> <figcaption data-astro-cid-khueswxm>
screenshot - scrolled version with meta tools visible
</figcaption> </figure> <p data-astro-cid-khueswxm>
UI is malleable with AI: in screenshot below you can see how to
                customize zoom controller with AI.
</p> <figure class="screenshot-photo" data-astro-cid-khueswxm> <img src="/roadmap/roadmap-zoom-controller.png" alt="Ara interface screenshot with zoom controller customization panel." loading="lazy" data-astro-cid-khueswxm> <figcaption data-astro-cid-khueswxm>screenshot - zoom controller</figcaption> </figure> </article> <article class="timeline-item" data-astro-cid-khueswxm> <p data-astro-cid-khueswxm>
It didn't work out because I was trying to push it as a social
                network. Then I tried to work on each of the Ara component and
                as only focus on malleable interface was misdirecting
                trajectory.
</p> </article> <article class="timeline-item" data-astro-cid-khueswxm> <p data-astro-cid-khueswxm>
After countless feedbacks I finally get the proper idea and
                structure and here we are.
</p> </article> </div> <div class="completion-block" data-astro-cid-khueswxm> <h2 class="sub-title" data-astro-cid-khueswxm>Completed</h2> <ul class="done-list" data-astro-cid-khueswxm> <li data-astro-cid-khueswxm> <a href="/ara.pdf" target="_blank" rel="noopener" data-astro-cid-khueswxm><strong data-astro-cid-khueswxm>Whitepaper</strong></a>
- the full framework, published April 2026.
</li> <li data-astro-cid-khueswxm> <a href="https://hyperpayment.org" target="_blank" rel="noopener" data-astro-cid-khueswxm><strong data-astro-cid-khueswxm>Hyperpayment protocol</strong></a>
- pays money according to semantics, not manual invoicing or
                fixed subscriptions.
</li> <li data-astro-cid-khueswxm> <strong data-astro-cid-khueswxm>Malleable interface that people need</strong> (draft).
</li> </ul> </div> </section> <section id="now" class="roadmap-section section-now" data-astro-cid-khueswxm> <p class="s-label" data-astro-cid-khueswxm>Now</p> <h2 class="section-title" data-astro-cid-khueswxm>What Is Now</h2> <article class="phase-card" data-astro-cid-khueswxm> <div class="phase-head" data-astro-cid-khueswxm> <h3 class="phase-title" data-astro-cid-khueswxm>Phase I - Cascade Fund</h3> <span class="phase-state state-active" data-astro-cid-khueswxm>Active</span> </div> <p data-astro-cid-khueswxm>
The first version brings together two communities: users who want
              to feel like kings of their computers, and the open source
              developers who build the tools they depend on.
</p> <p data-astro-cid-khueswxm>
Users pay open source projects monthly. In return they choose from
              three options:
</p> <ul class="detail-list" data-astro-cid-khueswxm> <li data-astro-cid-khueswxm>Prevent features or API deprecation.</li> <li data-astro-cid-khueswxm>Add features to the API that make their lives easier.</li> <li data-astro-cid-khueswxm>Turn the project into Ara.</li> </ul> <p data-astro-cid-khueswxm>Turning into Ara has two forms.</p> <ol class="detail-list ordered" data-astro-cid-khueswxm> <li data-astro-cid-khueswxm>
Split the interface, data, and logic so personal data stays on
                the local side.
</li> <li data-astro-cid-khueswxm>
Bring open source communities together to create shared
                protocols and messages, so apps are aligned with each other.
</li> </ol> <p data-astro-cid-khueswxm>
What users get: a bundle of open source software where features
              and APIs are guaranteed not to disappear, all data stays local,
              and nothing is locked to a vendor.
</p> <p data-astro-cid-khueswxm>
To surface what matters, Ara will build an analyzer that reads
              what APIs exist and how users actually use them - then suggests
              improvements that save time.
</p> <p class="onboard-line" data-astro-cid-khueswxm> <span data-astro-cid-khueswxm>Onboards:</span> open source developers and their users
</p> </article> </section> <section id="from-2026" class="roadmap-section section-next" data-astro-cid-khueswxm> <p class="s-label" data-astro-cid-khueswxm>2026-onward</p> <article class="phase-card" data-astro-cid-khueswxm> <div class="phase-head" data-astro-cid-khueswxm> <h3 class="phase-title" data-astro-cid-khueswxm>Phase II - Project Management</h3> <span class="phase-state state-next" data-astro-cid-khueswxm>Coming next</span> </div> <p data-astro-cid-khueswxm>
Built on what Cascade Fund proved, the second phase is a project
              management environment that runs in the browser.
</p> <p data-astro-cid-khueswxm>
Local first: all your data stays on your machine. AI ready: the
              model runs locally, trained on what you already own. Composable:
              apps are Lego bricks built on other apps, reshuffled without
              worrying about licenses.
</p> <p data-astro-cid-khueswxm>
This is the malleable surface. Software you own, not software you
              rent.
</p> <p class="onboard-line" data-astro-cid-khueswxm> <span data-astro-cid-khueswxm>Onboards:</span> designers, power users, productivity-focused
              teams
</p> </article> <article class="phase-card" data-astro-cid-khueswxm> <div class="phase-head" data-astro-cid-khueswxm> <h3 class="phase-title" data-astro-cid-khueswxm>Phase III - Blockchain</h3> <span class="phase-state state-horizon" data-astro-cid-khueswxm>The horizon</span> </div> <p data-astro-cid-khueswxm>
The third phase puts the foundation on-chain. Two wings: one that
              stores the semantics of open source software, one that runs
              recommendation on top of those semantics.
</p> <p data-astro-cid-khueswxm>
The blockchain here is not a financial instrument - it is
              collective wisdom. A trustless recommendation engine that surfaces
              what users actually need, not what someone paid to promote.
</p> <p data-astro-cid-khueswxm>
And if it succeeds: it whitewashes blockchain from its infamous
              reputation.
</p> <p class="onboard-line" data-astro-cid-khueswxm> <span data-astro-cid-khueswxm>Onboards:</span> node operators, the broader ecosystem
</p> </article> </section> <section id="join-us" class="roadmap-section section-join" data-astro-cid-khueswxm> <p class="s-label" data-astro-cid-khueswxm>Join us</p> <h2 class="section-title" data-astro-cid-khueswxm>Stay updated and collaborate</h2> <p data-astro-cid-khueswxm>
Lastly, to keep updated follow on our social media. Or if you want
            to collaborate mail me at
<a href="mailto:medet@ara.foundation" data-astro-cid-khueswxm>medet@ara.foundation</a>.
</p> </section> </div> <aside class="roadmap-right-wrap" data-astro-cid-khueswxm> <section class="roadmap-right-panel" aria-label="Experiments source code" data-astro-cid-khueswxm> <p class="roadmap-right-label" data-astro-cid-khueswxm>Code archive</p> <h2 class="roadmap-right-title" data-astro-cid-khueswxm>Experiment GitHub links</h2> <ol class="experiment-list" data-astro-cid-khueswxm> ${experiments.map((exp, i) => renderTemplate`<li class="experiment-item" data-astro-cid-khueswxm> <span class="experiment-index" data-astro-cid-khueswxm>${i + 2}.</span> <div data-astro-cid-khueswxm> <a${addAttribute(exp.href, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-khueswxm> ${exp.title} </a> ${"subtitle" in exp && exp.subtitle ? renderTemplate`<p data-astro-cid-khueswxm>${exp.subtitle}</p>` : null} </div> </li>`)} </ol> </section> </aside> </div> </div> ` })} `;
}, "/home/medet/ara/page/src/pages/roadmap.astro", void 0);

const $$file = "/home/medet/ara/page/src/pages/roadmap.astro";
const $$url = "/roadmap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Roadmap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
