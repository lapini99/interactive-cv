import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@heroui/react";
import { Trans } from "@lingui/react/macro";

import TechCards from "../TechCards";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Me() {
  return (
    <>
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
              A dude that happened to like computers and stuff related to them.
            </Trans>
          </p>
        </div>
      </div>
      <Divider className="my-4" />
      <h1 className="text-2xl font-bold text-left mt-2 mb-4">
        <Trans>My life or something</Trans>
      </h1>
      <p className="text-left mt-4">
        <Trans>
          I had copy-pasted a big spiel from my LinkedIn profile. But since this
          is my own website, I don’t need to be all formal.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>
          Still, I should introduce myself, that part’s necessary. My name is
          Alessandro, I’m 26 years old and I’ve been in the software world for
          almost three years.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>
          My biggest passion and dream is to become a video game director
          (Kojima fanboy). I actually started by studying video game
          development. I wanted to be an artist, and programming used to scare
          me, but since it’s hard to make a living with art, I went for it and
          learned to code. Now I see programming as a form of art too. Every
          artist has their way of painting on their canvas (IDE), and I love
          that.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>
          I know this doesn’t really belong in a CV, but I don&apos;t mind. My
          hobbies are:
        </Trans>
      </p>
      <ul className="list-disc list-inside text-left mt-4">
        <li>
          <Trans>Gaming</Trans>
        </li>
        <li>
          <Trans>Metal (the music genre, just to be clear)</Trans>
        </li>
        <li>
          <Trans>Cats</Trans>
        </li>
        <li>
          <Trans>Working out, especially hitting the gym</Trans>
        </li>
        <li>
          <Trans>Making people around me laugh</Trans>
        </li>
      </ul>
      <p className="text-left mt-4">
        <Trans>
          I already mentioned what my dream is. Sure, that’s my dream, but what
          I really want is a peaceful life where I can spend time doing the
          things I enjoy and that make me feel good.
        </Trans>
      </p>
      <Divider className="my-4" />
      <h1 className="text-2xl font-bold text-left mt-2 mb-4">
        <Trans>Work stuff</Trans>
      </h1>
      <p className="text-left mt-4">
        <Trans>
          Over the last few years, I’ve specialized in Frontend development.
          I’ve worked with tools like React and Vue, mostly React. That doesn’t
          mean I get lost when doing Backend, though. I love learning, so
          whenever I get the chance to touch something new, I dive into the code
          or documentation. Or I just ask a teammate.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>
          Here are a few projects on GitHub I think are worth checking out:
        </Trans>
      </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card className="max-w-[400px] w-full">
            <CardHeader className="flex gap-3">
              <Image
                alt="pokedex logo"
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
                <Trans>Pokédex made with Svelte and TypeScript</Trans>
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/lapini99/sveltePokedex/tree/dev"
              >
                <Trans>View code on GitHub</Trans>
              </Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px] w-full">
            <CardHeader className="flex gap-3">
              <Image
                alt="python logo"
                height={40}
                radius="sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">PyDevOps</p>
                <p className="text-small text-default-500">
                  MongoDB + Python + HUGO
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                <Trans>
                  Generates static website with retrieving MongoDB data with
                  Python and Hugo.
                </Trans>
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/lapini99/PyDevops"
              >
                <Trans>View code on GitHub</Trans>
              </Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px] w-full">
            <CardHeader className="flex gap-3">
              <Image
                alt="php logo"
                height={40}
                radius="sm"
                src="https://images.seeklogo.com/logo-png/44/2/php-logo-png_seeklogo-441548.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">
                  <Trans>Final UX Project</Trans>
                </p>
                <p className="text-small text-default-500">
                  PhP + JS + PhPMyAdmin
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                <Trans>Website to CRUD content with an admin panel.</Trans>
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/lapini99/practicaPHP_Alessandro"
              >
                <Trans>View code on GitHub</Trans>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <p className="text-left mt-4">
          <Trans>
            And if you want to see more, feel free to check out my{" "}
            <Link isExternal showAnchorIcon href="https://github.com/lapini99">
              Github
            </Link>
          </Trans>
          profile.
        </p>
      </div>
      <Divider className="my-4" />
      <h1 className="text-2xl font-bold text-left mt-2 mb-4">
        <Trans>Personal project</Trans>
      </h1>
      <p className="text-left mt-4">
        <Trans>
          As I mentioned before, my passion is video game development. That’s
          why I’m working on a personal project called &nbsp;
          <Link
            isExternal
            showAnchorIcon
            href="https://neverbloomproductions.es/"
          >
            <strong>Numb of Joy</strong>
          </Link>
          . It’s a first-person psychological horror game made with Unreal
          Engine 5.
        </Trans>
      </p>
      <div className="flex flex-col items-center justify-center mt-4">
        <Image
          alt="HeroUI Image with fallback"
          // fallbackSrc="https://via.placeholder.com/300x200"
          // height={500}
          src="https://neverbloomproductions.es/themes/neverbloom/assets/images/bannerdef.png"
          // width={auto}
        />
      </div>
      <p className="text-left mt-4">
        <Trans>
          I’m putting my heart and soul into this project. I’ve always wanted to
          tell a story that captivates people, helps them forget their real-life
          problems, and brings them some relief. I truly believe Numb of Joy can
          do that.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>In the development, I handle:</Trans>
      </p>
      <ul className="list-disc list-inside text-left mt-4">
        <li>
          <Trans>Direction, script, and story</Trans>
        </li>
        <li>
          <Trans>3D modeling and animation</Trans>
        </li>
        <li>
          <Trans>Programming</Trans>
        </li>
        <li>
          <Trans>Concept art</Trans>
        </li>
        <li>
          <Trans>Level design</Trans>
        </li>
      </ul>
      <p className="text-left mt-4">
        <Trans>
          Basically, I do everything. Well, almost. A good friend helps me with
          music and sound effects.
        </Trans>
      </p>
      <Divider className="my-4" />
      <h1 className="text-2xl font-bold text-left mt-2 mb-4">
        <Trans>Technologies I know best</Trans>
      </h1>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {Object.values(siteConfig.techs).map((el) => (
          <TechCards key={el.alt} alt={el.alt} img={el.img} link={el.link} />
        ))}
      </div>
    </>
  );
}
