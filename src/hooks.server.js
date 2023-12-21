

import { sequence } from '@sveltejs/kit/hooks'; 


//to import private variables/key for npm run build, you need to import {env} from $env/dynamic/private
// then attach the variable name to env so : env.variablename
import { env } from '$env/static/private'
import { SvelteKitAuth } from '@auth/sveltekit';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GitHubProvider from '@auth/core/providers/github';
import InstagramProvider from "@auth/core/providers/instagram"
import FacebookProvider from "@auth/core/providers/facebook"
import GoogleProvider from '@auth/core/providers/google';
import  AppleProvider  from '@auth/core/providers/apple';
import DiscordProvider from "@auth/core/providers/discord"
//to use magic links, you need to config sending emails - clientPromise
// and add EmailProvider from the auth/core. It'll show a button to send an email with login link to the email provided by the user.
import clientPromise from '$lib/database/clientPromise';
import EmailProvider from '@auth/core/providers/email';
import { building } from '$app/environment';

//
// if (!building) {
	
// 	console.log("I need to get the event.getClientIp.....")
// 	async function somefn({ event, resolve }) {
// 	     let requestIp = event.getClientAddress(); // IP from Client Request
//          console.log('log layout.server.js IP Address from Client Request: ', requestIp);
	     
// 		 const result = await resolve(event)
// 		 return result
// 		}

// }




//import { GITHUB_ID, GITHUB_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	trustHost :true,
	providers: [
		GitHubProvider({clientId : "58be4caf4cad2b6f12c1", clientSecret : "185ee74459515dcfc9a7645dfecd8e66e0326a95"}),
		DiscordProvider({cliendId :"1187061066430173234", clientSecret :"26b583836076296d26b62d19ddefef3f98f034bc14656a1f40008d3f8862cea0" }),
		GoogleProvider({ clientId:"622249660823-svtgmsjpormuv89va3fd92lr3urrnfjf.apps.googleusercontent.com", clientSecret: "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" }),
		EmailProvider({
			      server: {
			       host: "smtp.ionos.com",
			       port: 587,
			       auth: {
			          user: 'orders@foodmood.club',
                      pass: '@Adel4000'
			       }
			      },
			      from: "orders@foodmood.club authjs magic link",
				  
		}),
	
	],
	adapter: MongoDBAdapter(clientPromise, { databaseName: "authjsdb" }),
	secret : "wGRfp8DAPvXzptuuXqusOsL+Q1qyj19dmoRxEhaQIqQ",
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