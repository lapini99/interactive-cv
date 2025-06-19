import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { messages } from "@/locales/es/messages.ts";
import IndexPage from "@/pages/index";

i18n.load("es", messages);
i18n.activate("es");

function App() {
  return (
    <I18nProvider i18n={i18n}>
      <IndexPage />
    </I18nProvider>
  );
}

export default App;
