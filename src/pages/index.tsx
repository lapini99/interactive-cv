import { Tabs, Tab } from "@heroui/react";
import { Trans } from "@lingui/react/macro";

import DefaultLayout from "@/layouts/default";
import Me from "@/components/tabsContent/Me";
import Job from "@/components/tabsContent/Job";
import Studies from "@/components/tabsContent/Studies";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Tabs aria-label="Options">
          <Tab key="me" title={<Trans>Who I am</Trans>}>
            <Me />
          </Tab>
          <Tab key="job" className="w-full" title={<Trans>Job</Trans>}>
            <Job />
          </Tab>
          <Tab key="studies" className="w-full" title={<Trans>Studies</Trans>}>
            <Studies />
          </Tab>
        </Tabs>
      </section>
    </DefaultLayout>
  );
}
