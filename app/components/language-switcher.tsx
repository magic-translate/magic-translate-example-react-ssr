"use client";

import React from "react";
import { Language } from "@magic-translate/react-ssr";
import { useRouter } from "next/navigation";

export const LanguageSwitcher: React.FunctionComponent<{
  label: string;
  currentLanguage: string;
}> = ({ label, currentLanguage }) => {
  const router = useRouter();

  return (
    <>
      <label
        htmlFor="languages"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        onChange={(val) => router.push(`/${val.target.value}`)}
        value={currentLanguage}
        id="languages"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {Object.values<Language>(Language)
          .sort((a, b) => a.localeCompare(b))
          .map((lang) => (
            <option value={lang} key={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
      </select>
    </>
  );
};
