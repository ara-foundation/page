import { j as createComponent, k as createAstro, x as renderComponent, r as renderTemplate } from '../chunks/astro/server_DQ3wOqi7.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_Ct6HZhHl.mjs';
import { M as MenuName } from '../chunks/PageTransitionProvider_Bh2cOy5w.mjs';
import { B as BackButton } from '../chunks/BackButton_CrfcobeW.mjs';
import { g as getGalaxyById, d as getAllGalaxies } from '../chunks/galaxy_B3y4ZFqy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const frontmatterStartTime = performance.now();
  console.log("[all-stars] Frontmatter execution started");
  const galaxyId = Astro2.url.searchParams.get("galaxy");
  const queryParamTime = performance.now();
  console.log(
    `[all-stars] Query param read: ${(queryParamTime - frontmatterStartTime).toFixed(2)}ms`
  );
  let selectedGalaxy = null;
  if (galaxyId) {
    const getGalaxyStartTime = performance.now();
    selectedGalaxy = await getGalaxyById(galaxyId);
    const getGalaxyTime = performance.now();
    console.log(
      `[all-stars] getGalaxyById(${galaxyId}): ${(getGalaxyTime - getGalaxyStartTime).toFixed(2)}ms`
    );
  } else {
    console.log("[all-stars] No galaxyId provided, skipping getGalaxyById");
  }
  const getAllGalaxiesStartTime = performance.now();
  const allGalaxiesData = await getAllGalaxies(true);
  const getAllGalaxiesTime = performance.now();
  console.log(
    `[all-stars] getAllGalaxies(true): ${(getAllGalaxiesTime - getAllGalaxiesStartTime).toFixed(2)}ms (found ${allGalaxiesData.length} galaxies)`
  );
  const currentStarsunshines = 0;
  const mapStartTime = performance.now();
  const allGalaxies = allGalaxiesData.map((galaxy, index) => ({
    x: galaxy.x,
    y: galaxy.y,
    projectName: galaxy.name,
    projectId: galaxy._id?.toString() || "",
    galaxyData: galaxy,
    tags: galaxy.tags,
    leaderboardPosition: index + 1
  }));
  const mapTime = performance.now();
  console.log(
    `[all-stars] Mapping galaxies: ${(mapTime - mapStartTime).toFixed(2)}ms`
  );
  const frontmatterEndTime = performance.now();
  const totalFrontmatterTime = frontmatterEndTime - frontmatterStartTime;
  console.log(
    `[all-stars] Total frontmatter execution time: ${totalFrontmatterTime.toFixed(2)}ms`
  );
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectList, "hideLinks": Object.keys(MenuName), "projectName": "Ara Universe", "projectX": 0, "projectY": 0, "projectGalaxies": allGalaxies, "isStatic": true }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "UniverseHero", null, { "slot": "center", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/all-stars/UniverseHero", "client:component-export": "default" })}`, "default": async ($$result2) => renderTemplate`    ${renderComponent($$result2, "GalaxyAutoZoom", null, { "client:only": "react", "galaxyX": selectedGalaxy?.x || 0, "galaxyY": selectedGalaxy?.y || 0, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/GalaxyAutoZoom", "client:component-export": "default" })} `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "UniverseResearchPanel", null, { "slot": "footer", "client:only": "react", "starsunshines": currentStarsunshines, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/UniverseResearchPanel", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}` })} `;
}, "/home/medet/ara/page/src/pages/all-stars/index.astro", void 0);

const $$file = "/home/medet/ara/page/src/pages/all-stars/index.astro";
const $$url = "/all-stars";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
