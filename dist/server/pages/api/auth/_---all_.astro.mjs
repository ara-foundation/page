import { g as getAuth } from '../../../chunks/auth_DNh0kpf3.mjs';
export { renderers } from '../../../renderers.mjs';

const ALL = async (ctx) => {
  const auth = await getAuth();
  return auth.handler(ctx.request);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
