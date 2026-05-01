import { a as auth } from './chunks/auth_DNh0kpf3.mjs';
import { d as defineMiddleware, s as sequence } from './chunks/index_BFAyHFtU.mjs';
import './chunks/astro-designed-error-pages_BW3UJcOD.mjs';
import './chunks/astro/server_DQ3wOqi7.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers
  });
  if (isAuthed) {
    context.locals.user = isAuthed.user;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
