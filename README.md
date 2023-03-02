# SPAGHUTTi

SPAGHUTTi stands for SvelteKit, Postgres, Auth.js, GraphQL, Hasura, URQL, TypeScript, Tailwind. The goal of this scaffolding is to quickly start a production-ready codebase.

<br>

### Technology Stack 🔥

* **Svelte/Kit** (V1 with proper flow & structure)
* **Hasura** (GraphQL & REST)
* **Postgres** (through Neon free tier)
* **Auth.js** (Next Authentication)
* **URQL** (GraphQL client both for frontend and Svelte server)
* **Tailwind** (already with Mobile menu)
* **TypeScript**
* **Prettier**
* **ESLint**
* **Vercel**
* **SendGrid** (_not yet implemented_)
* **Vitest** (_not yet implemented_)
* **Stripe** (_not yet implemented, svelte-stripe package_)

<br>

### Getting Started (Reminder) 👀
* Create your own [Hasura](https://hasura.io/docs/latest/index/) account and create a Postgres DB through Neon
* Create a "user" schema in Hasura and set "email" to unique. Please check /src/routes/api/post/mutate/user/+server.ts file to check all data that are being sent
* Follow [Auth.js documentation](https://authjs.dev/reference/sveltekit) for Svelte and follow instructions on adding providers
* Rename sample.env to .env and fill with your Auth providers data and Hasura key and more

<br>

### Note 🧬
* Demo link has no real provider keys yet, so please get your own public/secret keys for the Auth providers
* If deployed add the environment variables from your .env file in to your server platform

<br>

### TODOs 🕵🏼‍♀️
* Implement the remaining stacks
* Choose between SendGrid or MailJet then implement using the free tier. This will allow us to send free email confirmations, resets, etc.
* Prepare (implement) Stripe just in case using svelte-stripe.
* Add option (implement) for media storage (uploads) where they can choose between DigitalOcean Space or S3.
* Add some starter tests using Vitest.
