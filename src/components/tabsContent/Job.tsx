import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { Trans } from "@lingui/react/macro";

export default function Job() {
  return (
    <>
      <Accordion
        defaultExpandedKeys={["1"]}
        fullWidth={true}
        selectionMode="multiple"
      >
        <AccordionItem
          key="1"
          aria-label="Chung Miller"
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="https://media.licdn.com/dms/image/v2/C4D0BAQGziK4hzOPj5w/company-logo_200_200/company-logo_200_200/0/1631544888886/conjurer_services_sa_logo?e=2147483647&v=beta&t=XBebN_jWqYvegTBtI7d6pTgR_voZmdVaoTHhzwyDN1s"
            />
          }
          subtitle={<Trans>Frontend Developer</Trans>}
          title="Conjurer (IKEA)"
        >
          <div className="space-y-2">
            <p>
              <strong>
                Mar 2023 - <Trans>Present</Trans> · Palma de Mallorca
              </strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                <Trans>
                  Created an internal tool for online Ikea agents using React,
                  Redux and Axios.
                </Trans>
              </li>
              <li>
                <Trans>
                  Implemented new purchase methods for Ikea Iceland using React,
                  Redux and Axios.
                </Trans>
              </li>
              <li>
                <Trans>
                  Fixed and developed new features using Vue or React.
                </Trans>
              </li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Janelle Lenard"
          startContent={
            <Avatar
              isBordered
              color="success"
              radius="lg"
              src="https://media.licdn.com/dms/image/v2/D4E0BAQHMUppMoqVo2w/company-logo_200_200/company-logo_200_200/0/1687164936670/innovationstrategies_logo?e=2147483647&v=beta&t=w5vkfypsDCZ6zgQ0J76IgV_IuWS9uvMBpuuo2nB2nPU"
            />
          }
          subtitle={<Trans>Web Developer Internship</Trans>}
          title="Innovation Strategies"
        >
          <div className="space-y-2 text-sm">
            <p>
              <strong>Mar 2022 - Jul 2022 · Palma de Mallorca</strong>
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Zoey Lang"
          startContent={
            <Avatar
              isBordered
              color="warning"
              radius="lg"
              src="https://3gm.es/wp-content/uploads/2022/02/cropped-Logo-3GM-512-Transparente.png"
            />
          }
          subtitle={<Trans>Game Developer</Trans>}
          title="Three Golden Monkeys"
        >
          <div className="space-y-2 text-sm">
            <p>
              <strong>Nov 2020 - Feb 2021 · Remote</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                <Trans>Created optimized 3D models for smartphone games.</Trans>
              </li>
              <li>
                <Trans>Designed levels for a racing game.</Trans>
              </li>
              <li>
                <Trans>Crafted environments for a fighting game.</Trans>
              </li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Zoey Lang"
          startContent={
            <Avatar
              isBordered
              color="danger"
              radius="lg"
              src="https://media.pocketgamer.biz/images/63583/std/smach-z-logo_320.jpg"
            />
          }
          subtitle={<Trans>3D Artist</Trans>}
          title="Smach Team"
        >
          <div className="space-y-2 text-sm">
            <p>
              <strong>Apr 2019 - Jun 2019 · Palma de Mallorca · Hybrid</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                <Trans>
                  Redesigned the 3D model of the handheld console in
                  development.
                </Trans>
              </li>
              <li>
                <Trans>
                  Contributed to the creation of assets for the E3 trailer.
                </Trans>
              </li>
              <li>
                <Trans>
                  Produced renders for stands exhibited at E3 2019, Tokyo
                  Gameshow and merch.
                </Trans>
              </li>
            </ul>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}
