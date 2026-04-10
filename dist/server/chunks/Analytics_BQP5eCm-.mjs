import { j as createComponent, k as createAstro, p as addAttribute, B as renderScript, r as renderTemplate, x as renderComponent, C as Fragment, m as maybeRenderHead } from './astro/server_EFpbLn-l.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/medet/ara-app/node_modules/.pnpm/astro@5.15.3_@types+node@24.10.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._9a9bea42e0c44ef794a5a52fe5586ada/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/medet/ara-app/node_modules/.pnpm/astro@5.15.3_@types+node@24.10.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._9a9bea42e0c44ef794a5a52fe5586ada/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/home/medet/ara-app/node_modules/.pnpm/@vercel+speed-insights@1.3.1_react@19.2.0/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/medet/ara-app/node_modules/.pnpm/@vercel+speed-insights@1.3.1_react@19.2.0/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", `<script defer src="https://www.googletagmanager.com/gtag/js?id=G-1C3STMHZBW" onerror="console.warn('Google Analytics failed to load')"></script><script defer>
            // Wait for script to load or use timeout
            (function() {
                const timeout = setTimeout(() => {
                    console.warn('Google Analytics initialization timeout');
                }, 5000);
                
                function initGtag() {
                    if (typeof gtag === 'undefined') {
                        window.dataLayer = window.dataLayer || [];
                        window.gtag = function() {
                            dataLayer.push(arguments);
                        };
                        gtag("js", new Date());
                        gtag("config", "G-1C3STMHZBW");
                    }
                    clearTimeout(timeout);
                }
                
                // Try to initialize after script loads
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', initGtag);
                } else {
                    setTimeout(initGtag, 100);
                }
            })();
        </script><script type="text/javascript" defer>
            (function() {
                // Defer initialization until after page load
                function initYandex() {
                    try {
                        (function (m, e, t, r, i, k, a) {
                            m[i] = m[i] || function () {
                                (m[i].a = m[i].a || []).push(arguments);
                            };
                            m[i].l = 1 * new Date();
                            
                            // Check if already loaded
                            for (var j = 0; j < document.scripts.length; j++) {
                                if (document.scripts[j].src === r) {
                                    return;
                                }
                            }
                            
                            // Create script with async
                            k = e.createElement(t);
                            a = e.getElementsByTagName(t)[0];
                            k.async = 1;
                            k.src = r;
                            
                            // Add error handling
                            k.onerror = function() {
                                console.warn('Yandex Metrika failed to load');
                            };
                            
                            // Add timeout
                            const timeout = setTimeout(() => {
                                console.warn('Yandex Metrika load timeout');
                            }, 5000);
                            
                            k.onload = function() {
                                clearTimeout(timeout);
                            };
                            
                            a.parentNode.insertBefore(k, a);
                        })(
                            window,
                            document,
                            "script",
                            "https://mc.yandex.ru/metrika/tag.js?id=105948361",
                            "ym",
                        );
                        
                        // Initialize after a delay to ensure script is loaded
                        setTimeout(function() {
                            if (typeof ym !== 'undefined') {
                                ym(105948361, "init", {
                                    ssr: true,
                                    webvisor: true,
                                    clickmap: true,
                                    ecommerce: "dataLayer",
                                    accurateTrackBounce: true,
                                    trackLinks: true,
                                });
                            }
                        }, 1000);
                    } catch (error) {
                        console.warn('Yandex Metrika initialization error:', error);
                    }
                }
                
                // Defer until after page load
                if (document.readyState === 'loading') {
                    window.addEventListener('load', initYandex);
                } else {
                    setTimeout(initYandex, 500);
                }
            })();
        </script>`, '<noscript><div><img src="https://mc.yandex.ru/watch/105948361" style="position:absolute; left:-9999px;" alt=""></div></noscript>'])), renderComponent($$result2, "SpeedInsights", $$Index, {}), maybeRenderHead()) })}`}`;
}, "/home/medet/ara-app/src/layouts/Analytics.astro", void 0);

export { $$ClientRouter as $, $$Analytics as a };
