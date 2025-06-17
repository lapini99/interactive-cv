import {
  Tabs,
  Tab,
  Avatar,
  Divider,
  Accordion,
  AccordionItem,
} from "@heroui/react";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Tabs aria-label="Options">
          <Tab key="me" title="Who I am">
            <div className="flex flex-row items-left gap-6 w-full h-full">
              <Avatar
                isBordered
                alt="Alessandro avatar"
                className="w-24 h-24"
                src="/images/yo.jpeg"
              />
              <div className="flex flex-col justify-center flex-1 h-full">
                <h1 className={title()}>Hello, I&apos;m Alessandro</h1>
                <p className={subtitle()}>
                  A dude that happened to like computers and stuff related to
                  them.
                </p>
              </div>
            </div>
            <Divider className="my-4" />
            <p className="text-left mt-4">
              I’ve always been driven by a passion for creating. As a kid, I
              started drawing whenever I had the chance,and I still love it. I
              also made my own movies using Lego and my mom’s camcorder. Later,
              I learned how to modify Pokémon games (hackroms) and explored
              video editing tools like Sony Vegas.
            </p>
            <p className="text-left mt-4">
              So, why am I sharing this? What I want to convey is that I’m
              someone who will always go the extra mile to achieve my goals.
              That’s why I studied game development and later dove into
              programming,because I believe everything can be done through code.
            </p>
            <p className="text-left mt-4">
              One of my proudest achievements is that my 3D renders were used by
              a company named Smach Team at major events like E3 and Tokyo Game
              Show. It was a great opportunity to put my creativity and
              technical skills into action, and it really pushed me to continue
              improving in my craft.
            </p>
            <p className="text-left mt-4">
              Another major milestone is that I’m currently developing my own
              horror game using Unreal Engine 5. It’s been an exciting
              challenge, and in February, I had the opportunity to showcase it
              at a fair in Mallorca (Mallorca Game). Seeing people’s positive
              reactions and how much they enjoyed my game was incredibly
              rewarding and filled me with happiness.
            </p>
            <p className="text-left mt-4">
              On a personal level, I’m also proud of the trust people place in
              me. I’ve been fortunate enough that friends and colleagues often
              turn to me for advice or just enjoy hanging out with me. It’s nice
              to know that my company is appreciated, whether it’s for support
              at work or just making people laugh.{" "}
            </p>
            <p className="text-left mt-4">
              What I enjoy the most is helping others, whether that means
              offering a hand at work or simply being the one who lightens the
              mood. I believe in the power of collaboration, solving problems
              together, and always learning something new.
            </p>
          </Tab>
          <Tab key="job" className="w-full" title="Job">
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
                subtitle="Frontend Developer"
                title="Conjurer (IKEA)"
              >
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Mar 2023 - Present · Palma de Mallorca</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Created an internal tool for online Ikea agents using
                      React, Redux and Axios.
                    </li>
                    <li>
                      Implemented new purchase methods for Ikea Iceland using
                      React, Redux and Axios.
                    </li>
                    <li>
                      Fixed and developed new features using Vue or React.
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
                subtitle="Web Developer Internship"
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
                subtitle="Game Developer"
                title="Three Golden Monkeys"
              >
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Nov 2020 - Feb 2021 · Remote</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Created optimized 3D models for smartphone games.</li>
                    <li>Designed levels for a racing game.</li>
                    <li>Crafted environments for a fighting game.</li>
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
                subtitle="3D Artist"
                title="Smach Team"
              >
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Apr 2019 - Jun 2019 · Mallorca · Hybrid</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Redesigned the 3D model of the handheld console in
                      development.
                    </li>
                    <li>
                      Contributed to the creation of assets for the E3 trailer.
                    </li>
                    <li>
                      Produced renders for stands exhibited at E3 2019, Tokyo
                      Gameshow and merch.
                    </li>
                  </ul>
                </div>
              </AccordionItem>
            </Accordion>
          </Tab>
          <Tab key="studies" title="Studies">
            sigma
          </Tab>
        </Tabs>
      </section>
    </DefaultLayout>
  );
}
