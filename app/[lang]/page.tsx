import { GetStarted } from "@/app/components/get-started";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import React from "react";
import { Logo } from "@/app/components/logo";
import { translate, T } from "@/app/lib/translate";
import { createT, Language } from "@magic-translate/react-ssr";
import { Metadata, NextPage, ResolvingMetadata } from "next";

type Props = {
  params: { lang: Language };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: await translate(
      params.lang,
      "Magic Translate | Example React Application"
    ),
    description: await translate(
      params.lang,
      "Magic Translate is the easiest way to translate React applications into any language."
    ),
  };
}

export default async function Home({ params: { lang } }: Props) {
  return (
    <>
      <GetStarted>
        <T lang={lang}>Get started with</T>&nbsp;
        <code className="font-mono font-bold inline">
          npm i @magic-translate/react-ssr
        </code>
      </GetStarted>

      <div>
        <LanguageSwitcher
          label={await translate(lang, "Choose a language")}
          currentLanguage={lang}
        />
      </div>

      <Logo />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://magic-translate.gitbook.io"
          className="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T lang={lang}>Documentation </T>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T lang={lang}>
              Find out how to get started and read about features and the API
            </T>
          </p>
        </a>

        <a
          href="https://magictranslate.io"
          className="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T lang={lang}>Sign up </T>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T lang={lang}>
              Check out the official Magic Translate website to create an
              account
            </T>
          </p>
        </a>

        <a
          href="https://magictranslate.io/pricing"
          className="border flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T lang={lang}>Pricing </T>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T lang={lang}>Learn about the available packages and their cost</T>
          </p>
        </a>

        <a
          href="https://github.com/magic-translate"
          className="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T lang={lang}>Examples </T>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T lang={lang}>Find Magic Translate code examples on GitHub</T>
          </p>
        </a>
      </div>
    </>
  );
}
