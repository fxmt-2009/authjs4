

import { sequence } from '@sveltejs/kit/hooks'; 
import { env } from '$env/static/private'
import { SvelteKitAuth } from '@auth/sveltekit';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GitHubProvider from '@auth/core/providers/github';
import DiscordProvider from "@auth/core/providers/discord"
import clientPromise from '$lib/database/clientPromise';
import { building } from '$app/environment';

export const handle = SvelteKitAuth({
	trustHost :true,
	providers: [
		GitHubProvider({clientId : "58be4caf4cad2b6f12c1", clientSecret : "185ee74459515dcfc9a7645dfecd8e66e0326a95"}),
		DiscordProvider({cliendId :"1187061066430173234", clientSecret :"26b583836076296d26b62d19ddefef3f98f034bc14656a1f40008d3f8862cea0" }),
	],
	adapter: MongoDBAdapter(clientPromise, { databaseName: "authjsdb" }),
	secret : "RxEhaQIqQ",
	pages: {
		signIn: '/login',
		signOut: '/login'
	}
});


// 	}
// });
