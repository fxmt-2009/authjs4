<script>
     import { page } from '$app/stores';
     import { signIn, signOut } from '@auth/sveltekit/client';
     import logo from '$lib/assets/logo.png';
	import Google from '$lib/components/Google.svelte';
	import Discord from '$lib/components/Discord.svelte';
	import Apple from '$lib/components/Apple.svelte';
	import Instagram from '$lib/components/Instagram.svelte';
	import Facebook from '$lib/components/Facebook.svelte';
    import Github from '../../lib/components/Github.svelte';


     let email = '';

const handleEmailSignIn = () => {
    signIn('email', { email, callbackUrl: '/protected' });
};

const handleGithubSignIn = () => {
    signIn('github', { callbackUrl: '/protected' });
};

const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/protected' });
};

// const handleFacebookSignIn = () => {
//     signIn('facebook', { callbackUrl: '/protected' });
// };

const handleAppleSignIn = () => {
    signIn('apple', { callbackUrl: '/protected' });
};

// const handleInstagramSignIn = () => {
//     signIn('instagram', { callbackUrl: '/protected' });
// };

const handleDiscordSignIn = () => {
    signIn('discord', { callbackUrl: '/protected' });
};

const handleSignOut = () => {
    signOut();
}
</script>

<p>login page</p>


<div style="margin : 5rem;"></div>
<div class="container">
	{#if !$page.data.session}
		<img src={logo} alt="auth.js logo" class="logo" />
		<h1 class="welcome">Welcome</h1>
		<p class="text">Log in to continue to SvelteKit Auth Example</p>

        <div class="divider-container">
			<div />
			<span>Email Login</span>
			<div />
		</div>
        
		<form on:submit={handleEmailSignIn}>
			<input label="Email" type="email" placeholder="example@gmail.com" bind:value={email} />
			<p>Provide an email and we'll send you an email with a login link.</p>
            <button>Continue</button>
            
		</form>

		<div class="divider-container">
			<div />
			<span>OR</span>
			<div />
		</div>

		<button on:click={handleGithubSignIn}>
			<Github/>Continue with Github
		</button>
		
		<button on:click={handleGoogleSignIn}>
			<Google /> Continue with Google
		</button>

		<!-- <button on:click={handleFacebookSignIn}>
			<Facebook/> Continue with Facebook
		</button> -->

		<button on:click={handleAppleSignIn}>
			<Apple/> Continue with Apple
		</button>

		<!-- <button on:click={handleInstagramSignIn}>
			<Instagram/> Continue with Instagram
		</button> -->

		<button on:click={handleDiscordSignIn}>
		   <Discord/>  Continue with Discord
		</button>

		
		
	{/if}

	{#if $page.data.session}
		<div class="signout-container">
			<img src={logo} alt="auth.js logo" class="logo" />
           <p>You're loggedin as : {$page.data.session.user.email}</p>
			<button on:click={handleSignOut}>Sign out</button>
		</div>
	{/if}
</div>


<style>
.container {
	    
		padding: 1rem;
		margin: 0 auto;
		border-radius: 0.375rem;
		width: 22rem;
		height: auto;
		box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
	}

	.logo {
		display: block;
		width: 3.5rem;
		margin: 0 auto;
	}

	.welcome {
		margin-top: 1.25rem;
		font-size: 1.5rem;
		line-height: 2rem;
		text-align: center;
	}

	.text {
        font-size: 1rem;
		margin-top: 1rem;
		text-align: center;
	}

    p{
        font-size: .8rem;
        margin-top: 1rem;
		text-align: center;
    }

	form {
		margin-top: 1rem;
	}

	input {
		box-sizing: border-box;
		width: 100%;
		padding: 0.75rem;
		border: 1px solid seagreen;
	}

	button {
		background: none;
		margin-top: 1.5rem;
		display: flex;
		width: 100%;
		padding: 0.75rem;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		border: 1px solid seagreen;
		border-radius: 0.125rem;
		transition-timing-function: all 225ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	form button {
		margin-top: 1rem;
		background-color: seagreen;
		color: white;
	}

	.divider-container {
		display: flex;
		margin-top: 1.5rem;
		gap: 0.5rem;
		align-items: center;
	}

	.divider-container div {
		flex: 1 1 0%;
		height: 1px;
		background-color: black;
	}

	.divider-container span {
		font-size: 1rem;
		line-height: 1rem;
	}

	.signout-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	.signout-container img {
		flex: 1;
		object-fit: contain;
		width: 75%;
		justify-self: center;
	}
</style>