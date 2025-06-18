import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { Trans } from "@lingui/react/macro";

import { loadTranslations } from "@/locales/i18n.ts";

export default function LanguageSelector() {
  const handleTranslation = (value: string): void => {
    loadTranslations(value);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          <Trans>Switch Language</Trans>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="es" onClick={() => handleTranslation("es")}>
          <Trans>Spanish</Trans>
        </DropdownItem>
        <DropdownItem key="en" onClick={() => handleTranslation("en")}>
          <Trans>English</Trans>
        </DropdownItem>
        <DropdownItem key="it" onClick={() => handleTranslation("it")}>
          <Trans>Italian</Trans>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
