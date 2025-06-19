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
      <h1 className="text-2xl font-bold text-left mt-2 mb-4">Mi vida o algo</h1>
      <p className="text-left mt-4">
        <Trans>
          Había copy pasteado una turra que tengo en mi perfil Linkedin. Pero
          como esta es mi web no hace falta ir de formalito.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>
          Aún así me presento, que eso sí hace falta. Me llamo Alessandro, tengo
          26 años y llevo casi tres años en el mundo del software.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>
          Mi principal pasión y sueño es ser director de videojuegos (Kojima
          fanboy). De hecho empecé estudiando desarrollo de videojuegos. Quería
          ser artista y programar me daba miedo, pero como del arte está difícil
          vivir le eché cara y aprendí a programar. Ahora también veo la
          programación como arte. Cada artista tiene su manera de pintar sobre
          su lienzo (IDE), y eso me encanta.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>
          Sé que para un CV no tiene mucho que ver, pero bueno. Mis aficiones
          son:
        </Trans>
      </p>
      <ul className="list-disc list-inside text-left mt-4">
        <li>Los videojuegos</li>
        <li>El metal (la música, aclaro por si a caso)</li>
        <li>Los gatetes</li>
        <li>Hacer deporte, sobretodo ir al gym</li>
        <li>Hacer reír a los que me rodean</li>
      </ul>
      <p className="text-left mt-4">
        <Trans>
          Antes he comentado cual es mi sueño. Ok, es mi sueño, aún así lo que
          más busco en esta vida es tener una vida tranquila y poder dedicarle
          tiempo a las cosas que me gustan y me hacen sentir bien.
        </Trans>
      </p>
      <Divider className="my-4" />
      <h1 className="text-2xl font-bold text-left mt-2 mb-4">Currele</h1>
      <p className="text-left mt-4">
        <Trans>
          Durante los últimos años me he estado especializando en el desarrollo
          Frontend. He utilizado herramientas como React y Vue, sobretodo React.
          Ahora bien, esto no quiere decir que si me das algo de back me pierda.
          Me gusta aprender, así que siempre que tengo la oportunidad de tocar
          algo que no sé me pongo a leer código y/o documentación. O
          directamente le pregunto a un compañero.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>
          Te adjunto algún que otro proyecto que tengo en Git que considero que
          vale la pena echarle un vistazo:
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
                  Generate static website with retrieving MongoDB data with
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
                <Trans>Ver código en Github</Trans>
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
                <p className="text-md">Entrega final UX</p>
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
                <Trans>Ver código en Github</Trans>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <p className="text-left mt-4">
          <Trans>
            Y si quieres ver mi perfil puedes acceder a mi{" "}
            <Link isExternal showAnchorIcon href="https://github.com/lapini99">
              Github
            </Link>
          </Trans>
          .
        </p>
      </div>
      <Divider className="my-4" />
      <h1 className="text-2xl font-bold text-left mt-2 mb-4">
        Proyecto personal
      </h1>
      <p className="text-left mt-4">
        <Trans>
          Como ya he comentado antes, mi pasión es el desarrollo de videojuegos.
          Por eso estoy trabajando en un proyecto personal que se llama &nbsp;
          <Link
            isExternal
            showAnchorIcon
            href="https://neverbloomproductions.es/"
          >
            <strong>Numb of Joy</strong>
          </Link>
          . Es un juego de terror psicológico en primera persona desarrollado
          con Unreal Engine 5.
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
          En este proyecto estoy poniendo toda mi alma y corazón. Siempre he
          querido publicar una historia que cautive a la gente para que así no
          piense en sus problemas reales, para que se distraigan y alivien. Y sé
          que con Numb of Joy lo voy a conseguir.
        </Trans>
      </p>
      <p className="text-left mt-4">
        <Trans>En el desarrollo me encargo de:</Trans>
      </p>
      <ul className="list-disc list-inside text-left mt-4">
        <li>
          <Trans>Dirección, guión e historia</Trans>
        </li>
        <li>
          <Trans>Modelado 3D y animación</Trans>
        </li>
        <li>
          <Trans>Programación</Trans>
        </li>
        <li>
          <Trans>Concept art</Trans>
        </li>
        <li>
          <Trans>Diseño de nivel</Trans>
        </li>
      </ul>
      <p className="text-left mt-4">
        <Trans>
          Vamos, que lo hago yo todo. Bueno, casi todo. Tengo un buen amigo que
          me ayuda con la música y los efectos de sonido.
        </Trans>
      </p>
      <Divider className="my-4" />
      <h1 className="text-2xl font-bold text-left mt-2 mb-4">
        <Trans>Tecnologías que mejor sé usar</Trans>
      </h1>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {Object.values(siteConfig.techs).map((el) => (
          <TechCards key={el.alt} alt={el.alt} img={el.img} link={el.link} />
        ))}
      </div>
    </>
  );
}
