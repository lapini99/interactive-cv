import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { Trans } from "@lingui/react/macro";

export default function Studies() {
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
              radius="lg"
              src="https://pbs.twimg.com/profile_images/1796137558482546688/a1_ZWqFG_400x400.jpg"
            />
          }
          subtitle={<Trans>FP Multi-platform Application Development</Trans>}
          title="EDIB"
        >
          <div className="space-y-2">
            <p>
              <strong>Oct 2022 - Jun 2023 · Palma de Mallorca</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                <Trans>I learnt how to develop applications with Java.</Trans>
              </li>
              <li>
                <Trans>
                  I learnt how to develop web apps with PHP and JavaScript.
                </Trans>
              </li>
              <li>
                <Trans>
                  They also taught me Unity and how to provide a good User
                  Experience.
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
              radius="lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWoQz9JWRFfvx9DKg4Zx4UWHnfIny3VJmAg&s"
            />
          }
          subtitle={<Trans>FP Web Application Development</Trans>}
          title="CIFP Borja Moll"
        >
          <div className="space-y-2 text-sm">
            <p>
              <strong>Mar 2021 - Jun 2022 · Palma de Mallorca</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                <Trans>
                  I learnt how to develop applications with Java and Python.
                </Trans>
              </li>
              <li>
                <Trans>
                  I learnt SOLID, how to debug and other good coding practices.
                </Trans>
              </li>
              <li>
                <Trans>
                  I also learnt how to build optimized SQL or noSQL databases
                </Trans>
              </li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Zoey Lang"
          startContent={
            <Avatar
              isBordered
              radius="lg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEzXKC/XGyTXIyrrmJvqkpXojZDZMjjeUFXqk5bWEhz+9/f87O3ZMTj42drvsbPcSE3fWl7snqHnhonyv8H1zM7lfYHjcnZ+2VsbAAAACnRSTlMA////Tk9TU1VRDYEEpwAAAPlJREFUKJF9k+uSwyAIhRW6dRa8xyTv/6ZFzDZJuyN/MsOnnAMSY0Y8OaPVwMxPcwuHsdKAVCO6G7OweBgQ/ALWXZnF4HelsPsgAu7CpFpatS6tSb/uwiwWtQSFy3DmTibp2K9Qiod2p78I4yRsPnTpbUBJPwzHJZDiIDbFdFBEYYlscvU+FZDr0iBAbxcBSvK+ZoME+8pxCwSZi7gCClvkdQdC09Uo60FqqTXSUpm6srGnRKvMtZ0mDmiHDkt0/SP3DZuau8JJWaDyaagMQ9NW/oZgzyHY9xDeEvjP+KaDnz7Zx2Pj/bHnazJfsPlqzpdaVun6O/wcyRfYKRNzSTkJjwAAAABJRU5ErkJggg=="
            />
          }
          subtitle={<Trans>Graphic Design Advanced course</Trans>}
          title="DEUSTO Formación"
        >
          <div className="space-y-2 text-sm">
            <p>
              <strong>Sep 2019 - Jun 2020 · Remote</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                <Trans>I masterized Photoshop and Illustrator.</Trans>
              </li>
              <li>
                <Trans>I learnt color theories.</Trans>
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
              radius="lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TPE0xwmAhvw1ZPbq9HS5GoMaucheF_2JPw&s"
            />
          }
          subtitle={
            <Trans>
              FP Technical Artist, 2D/3D Animation and Game Development
            </Trans>
          }
          title="CEF"
        >
          <div className="space-y-2 text-sm">
            <p>
              <strong>Oct 2017 - Jun 2019 · Palma de Mallorca</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                <Trans>I learnt 3D Modelling and Animation</Trans>
              </li>
              <li>
                <Trans>
                  I learnt how to use Adobe Premiere and After Effects
                </Trans>
              </li>
              <li>
                <Trans>They also taught me game design and Unity (C#)</Trans>
              </li>
            </ul>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}
