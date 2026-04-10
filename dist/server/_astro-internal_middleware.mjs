import { a as auth } from './chunks/auth_Bzq8sfeI.mjs';
import { d as defineMiddleware, s as sequence } from './chunks/index_CiFPbzBz.mjs';
import './chunks/astro-designed-error-pages_CzHyi4p0.mjs';
import './chunks/astro/server_EFpbLn-l.mjs';
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
