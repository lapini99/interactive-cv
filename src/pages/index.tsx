import {
  Tabs,
  Tab,
  Avatar,
  Divider,
  Accordion,
  AccordionItem,
  Card,
  CardHeader,
  Image,
  CardBody,
  CardFooter,
  Link,
} from "@heroui/react";
import { Trans } from "@lingui/react/macro";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Tabs aria-label="Options">
          <Tab key="me" title={<Trans>Who I am</Trans>}>
            <div className="flex flex-row items-left gap-6 w-full h-full">
              <Avatar
                isBordered
                alt="Alessandro avatar"
                className="w-24 h-24"
                src="/images/yo.jpeg"
              />
              <div className="flex flex-col justify-center flex-1 h-full">
                <h1 className={title()}>
                  <Trans>Hello, I&apos;m Alessandro</Trans>
                </h1>
                <p className={subtitle()}>
                  <Trans>
                    A dude that happened to like computers and stuff related to
                    them.
                  </Trans>
                </p>
              </div>
            </div>
            <Divider className="my-4" />
            <h1 className="text-2xl font-bold text-left mt-2 mb-4">
              Mi vida o algo
            </h1>
            <p className="text-left mt-4">
              <Trans>
                Había copy pasteado una turra que tengo en mi perfil Linkedin.
                Pero como esta es mi web no hace falta ir de formalito.
              </Trans>
            </p>
            <p className="text-left mt-4">
              <Trans>
                Aún así me presento, que eso sí hace falta. Me llamo Alessandro,
                tengo 26 años y llevo casi tres años en el mundo del software.
              </Trans>
            </p>
            <p className="text-left mt-4">
              <Trans>
                Mi principal pasión y sueño es ser director de videojuegos
                (Kojima fanboy). De hecho empecé estudiando desarrollo de
                videojuegos. Quería ser artista y programar me daba miedo, pero
                como del arte está difícil vivir le eché cara y aprendí a
                programar. Ahora también veo la programación como arte. Cada
                artista tiene su manera de pintar sobre su lienzo (IDE), y eso
                me encanta.
              </Trans>
            </p>
            <p className="text-left mt-4">
              <Trans>
                Sé que para un CV no tiene mucho que ver, pero bueno. Mis
                aficiones son:
              </Trans>
            </p>
            <ul className="list-disc list-inside text-left mt-4">
              <li>Los videojuegos</li>
              <li>El metal (la música, aclaro por si a caso)</li>
              <li>Los gatetes</li>
              <li>Hacer deporte, sobretodo ir al gym</li>
              <li>Hacer reír a los que me rodean</li>
            </ul>
            <Divider className="my-4" />
            <h1 className="text-2xl font-bold text-left mt-2 mb-4">Currele</h1>
            <p className="text-left mt-4">
              <Trans>
                Durante los últimos años me he estado especializando en el
                desarrollo Frontend. He utilizado herramientas como React y Vue,
                sobretodo React. Ahora bien, esto no quiere decir que si me das
                algo de back me pierda. Me gusta aprender, así que siempre que
                tengo la oportunidad de tocar algo que no sé me pongo a leer
                código y/o documentación. O directamente le pregunto a un
                compañero.
              </Trans>
            </p>
            <p className="text-left mt-4">
              <Trans>
                Te adjunto algún que otro proyecto que tengo en Git que
                considero que vale la pena echarle un vistazo
              </Trans>
            </p>
            <div>
              <Card className="max-w-[400px] mt-4">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="heroui logo"
                    height={40}
                    radius="sm"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNggEtagHz85kQ5Y2FQPwNAFOY93sAVu7B_w&s"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">Pokédex</p>
                    <p className="text-small text-default-500">Svelte + TS</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    <Trans>Pokédex hecha con Svelte y TypeScript</Trans>
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/lapini99/sveltePokedex/tree/dev"
                  >
                    <Trans>Ver código en Github</Trans>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </Tab>
          <Tab key="job" className="w-full" title={<Trans>Job</Trans>}>
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
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>
                      Mar 2023 - <Trans>Present</Trans> · Palma de Mallorca
                    </strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      <Trans>
                        Created an internal tool for online Ikea agents using
                        React, Redux and Axios.
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        Implemented new purchase methods for Ikea Iceland using
                        React, Redux and Axios.
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
                      <Trans>
                        Created optimized 3D models for smartphone games.
                      </Trans>
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
                    <strong>
                      Apr 2019 - Jun 2019 · Palma de Mallorca · Hybrid
                    </strong>
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
                        Contributed to the creation of assets for the E3
                        trailer.
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
          </Tab>
          <Tab key="studies" title={<Trans>Studies</Trans>}>
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
                subtitle={
                  <Trans>FP Multi-platform Application Development</Trans>
                }
                title="EDIB"
              >
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Oct 2022 - Jun 2023 · Palma de Mallorca</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      <Trans>
                        I learnt how to develop applications with Java.
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        I learnt how to develop web apps with PHP and
                        JavaScript.
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
                        I learnt how to develop applications with Java and
                        Python.
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        I learnt SOLID, how to debug and other good coding
                        practices.
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        I also learnt how to build optimized SQL or noSQL
                        databases
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
                      <Trans>
                        They also taught me game design and Unity (C#)
                      </Trans>
                    </li>
                  </ul>
                </div>
              </AccordionItem>
            </Accordion>
          </Tab>
        </Tabs>
      </section>
    </DefaultLayout>
  );
}
