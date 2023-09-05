import { Language } from "@magic-translate/react-ssr";

export const magicTranslateConfig = {
  apiKey: process.env.NEXT_PUBLIC_MAGIC_TRANSLATE_API_KEY!!,
  _apiUrl: process.env.NEXT_PUBLIC_MAGIC_TRANSLATE_API_URL!!,
} as const;

export const languages = {
  [Language.EN]: "English",
  [Language.ZH]: "Chinese",
  [Language.DE]: "German",
} as const;

export type AvailableLanguages = keyof typeof languages;
