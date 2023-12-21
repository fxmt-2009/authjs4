

import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
 const session = await event.locals.getSession();
 console.log("layout.server.js inside protected session log :", session)

 if (!session) {
  throw redirect(307, 'auth/signin');
 }

 return {
  session
 };
};