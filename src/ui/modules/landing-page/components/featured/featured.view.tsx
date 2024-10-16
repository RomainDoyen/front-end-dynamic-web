import Container from "@/ui/components/container/container"
import Image from "next/image";
import Typography from "@/ui/design-system/typography/typography";
import { v4 as uuidv4 } from "uuid";
import Button from "@/ui/design-system/button/button";
import { RiArrowRightLine } from "react-icons/ri";
import Socialnetworksbuttons from "@/ui/components/navigation/social-networks-buttons";

type FeaturesDataType = {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
};

export default function featuredview() {

  const featuresData: FeaturesDataType[] = [
    {
      title: "Titre 1",
      description: "Description 1",
      imagePath: "/svg/diskette.svg",
      imageAlt: "dfdfd"
    },
    {
      title: "Titre 2",
      description: "Description 2",
      imagePath: "/svg/joystick.svg",
      imageAlt: "fdfdd"
    },
    {
      title: "Titre 3",
      description: "Description 3",
      imagePath: "/svg/loudspeaker.svg",
      imageAlt: "rhhtht"
    },
    {
      title: "Titre 4",
      description: "Description 4",
      imagePath: "/svg/compass.svg",
      imageAlt: "jkiuliu"
    },
  ];

  const featureData = featuresData.map((feature) => {
    return (
      <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
        <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
          <Image 
            src={feature.imagePath} 
            alt={feature.imageAlt}
            width={130} 
            height={130}
            className="object-scale-down blur-2xl" 
          />
          <Image 
            src={feature.imagePath} 
            alt={feature.imageAlt} 
            width={150} 
            height={150}
            className="object-scale-down" 
          />
        </div>
        <div>
          <Typography 
            variant="lead" 
            component="h3" 
            weight="medium" 
            className="text-center mb-2.5"
          >
            {feature.title}
          </Typography>
          <Typography 
            variant="body-base" 
            theme="gray" 
            component="p" 
            className="text-center"
          >
            {feature.description}
          </Typography>
        </div>
      </div>
    )
  });

  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 gap-7 col-span-7">
          {featureData}
        </div>
        <div className="flex flex-col justify-between col-span-5 gap-10">
          <div>
            <Typography
              variant="h2"
              component="h2"
              className="mb-5"
            >
              Titre de la section
            </Typography>
            <Typography
              variant="body-lg"
              theme="gray"
              component="p"
              className="mb-8"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button
              baseUrl="/#"
              variant="secondary"
              icon={{icon: RiArrowRightLine}}
              iconPosition="right"
            >
              Commencer
            </Button>
          </div>
          <div>
            <Typography
              variant="caption3"
              theme="gray"
              component="div"
              className="mb-4"
            >
              Nos réseaux sociaux
            </Typography>
            <Socialnetworksbuttons />
          </div>
        </div>
      </Container>
    </div>
  )
}
