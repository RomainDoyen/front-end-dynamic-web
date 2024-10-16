import Container from "@/ui/components/container/container";
import Image from "next/image";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";

export default function herotopview() {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typography 
          variant="h1"
          component="h1"
          className="mx-w-lg"
        >
          Titre de la page d'accueil
        </Typography>
        <Typography 
          variant="body-lg" 
          theme="gray"
          component="p"
          className="mx-w-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button 
            baseUrl=""
          >
            Commencer
          </Button>
          <Button 
            baseUrl=""
            variant="secondary"
          >
            En savoir plus
          </Button>
        </div>
      </div>
      <Image 
        src="/svg/rocket.svg" 
        alt="Hero Top" 
        width={811} 
        height={596} 
        className="absolute top-0 right-0 z-0"
      />
    </Container>
  )
}
