import { Button, Card, CardFooter, Image, Link } from "@heroui/react";

interface TechCardProps {
  alt: string;
  img: string;
  link: string;
}

export default function TechCards({ alt, img, link }: TechCardProps) {
  return (
    <Card isFooterBlurred className="border-none w-fit" radius="lg">
      <Image
        alt={alt}
        className="object-cover"
        height={200}
        src={img}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button
          className="text-tiny text-white bg-black/0 w-full"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          <Link isExternal href={link}>
            {alt}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
