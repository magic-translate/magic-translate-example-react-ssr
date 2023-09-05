import { headers } from "next/headers";
import { Language } from "@magic-translate/react-ssr";

export function useCurrentLanguage() {
  const headersList = headers();
  return headersList.get("Content-Language") as Language;
}
