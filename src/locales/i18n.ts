import { i18n } from "@lingui/core";

const defaultLocale = "es";

async function loadDefaultTranslations(): Promise<void> {
  const { messages } = await import(`./${defaultLocale}/messages.ts`);

  i18n.load(defaultLocale, messages);
  i18n.activate(defaultLocale);
}

loadDefaultTranslations();

export async function loadTranslations(locale: string): Promise<void> {
  try {
    const { messages } = await import(`./${locale}/messages.ts`);

    i18n.load(locale, messages);
    i18n.activate(locale);
  } catch (error) {
    throw new Error(`Error cargando traducciones para ${locale}: ${error}`);
  }
}

export default i18n;
