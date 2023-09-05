import { magicTranslateConfig } from "@/app/lib/constants";
import { createT, setupTranslate } from "@magic-translate/react-ssr";

export const translate = setupTranslate(magicTranslateConfig);

export const T = createT(translate);
