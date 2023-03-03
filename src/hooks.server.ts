import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import axios from 'axios';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Facebook from '@auth/core/providers/facebook';
import Google from '@auth/core/providers/google';

import {
	AUTH_SECRET,
	GITHUB_ID,
	GITHUB_SECRET,
	FACEBOOK_ID,
	FACEBOOK_SECRET,
	GOOGLE_ID,
	GOOGLE_SECRET,
} from '$env/static/private';

import { PUBLIC_APP_URL } from '$env/static/public';

// Authorization
async function authorization({ event, resolve }: any) {
	// Protect any routes under /dashboard but don't depend on this alone,
	// we need to put a check on each page server using the parent(), that way
	// each protected routes will call hooks.server before serving the page
	if (event.url.pathname.startsWith('/dashboard')) {
		const session = await event?.locals?.getSession();
		if (!session) throw redirect(303, '/');
	}

	// If the request is still here, just proceed as normally
	return await resolve(event, {
		transformPageChunk: ({ html }: any) => html,
	});
}

// Handle
export const handle: Handle = sequence(
	SvelteKitAuth({
		providers: <any>[
			GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
			Facebook({ clientId: FACEBOOK_ID, clientSecret: FACEBOOK_SECRET }),
			Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET }),
		],
		secret: AUTH_SECRET as string,
		debug: true,
		callbacks: {
			async signIn({ user, account, profile, email, credentials }) {
				await axios.post(`${PUBLIC_APP_URL}/api/post/mutate/user`, {
					...user,
					oauth: account?.provider,
					token: account?.access_token,
				});
				return true;
			},
		},
	}),
	authorization
);
