

import { sequence } from '@sveltejs/kit/hooks'; 


//to import private variables/key for npm run build, you need to import {env} from $env/dynamic/private
// then attach the variable name to env so : env.variablename
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

  
//   export const handle =  SvelteKitAuth({
// 	trustHost :true,
// 	providers: [
// 		GitHub({ clientId:"58be4caf4cad2b6f12c1", clientSecret:"9af329c4829e203c5ec132b012f1bec050d60c69" }),
// 		GoogleProvider({ clientId:"622249660823-svtgmsjpormuv89va3fd92lr3urrnfjf.apps.googleusercontent.com", clientSecret: "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" }),
// 		EmailProvider({
// 			      server: {
// 			       host: "smtp.ionos.com",
// 			       port: 587,
// 			       auth: {
// 			          user: 'orders@foodmood.club',
//                       pass: '@Adel4000'
// 			       }
// 			      },
// 			      from: "orders@foodmood.club authjs magic link"
// 		}),
// 		 AppleProvider({clientId : "", clientSecret : ""})
// 	],
// 	adapter: MongoDBAdapter(clientPromise, { databaseName: "authjsdb" }),
// 	secret : "wGRfp8DAPvXzptuuXqusOsL+Q1qyj19dmoRxEhaQIqQ",
// 	pages: {
// 		signIn: '/login',
// 		signOut: '/login'
// 	}
// });
