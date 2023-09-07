# Magic Translate Next.js SSR Example App

This is an example React (Next.js) app  with Magic Translate SSR integrated. You can see this app deployed
here: https://magic-translate-example-react-ssr.vercel.app/

The entire HTML is translated server-side and doesn't need to be translated
on the client anymore. This is done with the Magic Translate React server components (RSC). 

For more information visit https://magictranslate.io or read the [Magic Translate Docs](https://docs.magictranslate.io).

## Getting Started

First create a Magic Translate account at https://magictranslate.io/signin to obtain your API key.
No credit card is required for the Free plan.

Then copy your API key and set it in your `env.local` file:

```bash
# env.local

NEXT_PUBLIC_MAGIC_TRANSLATE_API_KEY=<your API key>
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

The website's content is now automatically translated in your desired language.


## Learn More

To learn more about Magic Translate please visit
[https://magictranslate.io](https://magictranslate.io).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
