import english from "@/i18n/locales/en.json";
import português from "@/i18n/locales/pt-br.json";
import espanhol from "@/i18n/locales/es.json";

const LANG = {
  ENGLISH: "en",
  PORTUGUÊS: "pt-br",
  ESPANHOL: "es",
};

export const getI18N = ({
  currentLocale = "pt-br",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return english;
  if (currentLocale === LANG.ESPANHOL) return espanhol;
  return português;
};
