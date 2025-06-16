import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { Tabs, Tab, Avatar, Divider, Accordion, AccordionItem } from "@heroui/react";

export default function IndexPage() {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Tabs aria-label="Options">
          <Tab key="me" title="Who I am">
            <div className="flex flex-row items-left gap-6 w-full h-full">
              <Avatar
                className="w-24 h-24"
                alt="Alessandro avatar"
                src="/images/yo.jpeg"
                isBordered
              />
              <div className="flex flex-col justify-center flex-1 h-full">
                <h1 className={title()}>Hello, I'm Alessandro</h1>
                <p className={subtitle()}>
                  A dude that happened to like computers and stuff related to them.
                </p>
                {/* <Link
                isExternal
                href={siteConfig.links.github}
                className={buttonStyles({ variant: "solid", color: "primary" })}
              >
                <GithubIcon className="w-4 h-4" />
                View on GitHub
              </Link> */}
              </div>
            </div>
            <Divider className="my-4" />
            <p className="text-left text-default-700 dark:text-default-400 mt-4">
              I’ve always been driven by a passion for creating. As a kid, I started drawing whenever I had the chance—and I still love it.
              I also made my own movies using Lego and my mom’s camcorder. Later, I
              learned how to modify Pokémon games (hackroms) and explored video editing tools like Sony Vegas.
            </p>
            <p className="text-left text-default-700 dark:text-default-400 mt-4">
              So, why am I sharing this? What I want to convey is that I’m someone who will always go the extra mile to achieve my goals. That’s why I studied game development and later dove into programming—because I believe everything can be done through code.
            </p>
            <p className="text-left text-default-700 dark:text-default-400 mt-4">
              One of my proudest achievements is that my 3D renders were used by a company called Smach Team at major events like E3 and Tokyo Game Show. It was a great opportunity to put my creativity and technical skills into action, and it really pushed me to continue improving in my craft.
            </p>
            <p className="text-left text-default-700 dark:text-default-400 mt-4">
              Another major milestone is that I’m currently developing my own horror game using Unreal Engine 5. It’s been an exciting challenge, and in February, I had the opportunity to showcase it at a fair in Mallorca. Seeing people’s positive reactions and how much they enjoyed my game was incredibly rewarding and filled me with happiness.
            </p>
            <p className="text-left text-default-700 dark:text-default-400 mt-4">
              On a personal level, I’m also proud of the trust people place in me. I’ve been fortunate enough that friends and colleagues often turn to me for advice or just enjoy hanging out with me. It’s nice to know that my company is appreciated, whether it’s for support at work or just making people laugh.            </p>
            <p className="text-left text-default-700 dark:text-default-400 mt-4">
              What I enjoy the most is helping others, whether that means offering a hand at work or simply being the one who lightens the mood. I believe in the power of collaboration, solving problems together, and always learning something new.
            </p>
          </Tab>
          <Tab key="job" title="Job" className="w-full">
            <Accordion selectionMode="multiple" defaultExpandedKeys={["1"]} fullWidth={true}>
              <AccordionItem
                key="1"
                aria-label="Chung Miller"
                startContent={
                  <Avatar
                    isBordered
                    color="primary"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                }
                subtitle="Frontend Developer"
                title="Conjurer (IKEA)"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Janelle Lenard"
                startContent={
                  <Avatar
                    isBordered
                    color="success"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                }
                subtitle="Web Developer Internship"
                title="Innovation Strategies"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Zoey Lang"
                startContent={
                  <Avatar
                    isBordered
                    color="warning"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  />
                }
                subtitle="Game Developer"
                title="Three Golden Monkeys"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Zoey Lang"
                startContent={
                  <Avatar
                    isBordered
                    color="warning"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  />
                }
                subtitle="3D Artist"
                title="Smach Team"
              >
                {defaultContent}
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
