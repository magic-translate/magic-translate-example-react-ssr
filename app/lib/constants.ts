import { Language } from "@magic-translate/react-ssr";

export const magicTranslateConfig = {
  apiKey: process.env.NEXT_PUBLIC_MAGIC_TRANSLATE_API_KEY!!,
} as const;
