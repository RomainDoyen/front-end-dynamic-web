import Container from "@/ui/components/container/container"
import Image from "next/image"
import Typography from "@/ui/design-system/typography/typography"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"
import Button from "@/ui/design-system/button/button"

export default function highlightlist() {
  return (
    <Container className="py-24 space-y-10">
      <div className="flex justify-center gap-24">
        <div className="relative w-[520px] h-[350px] mt-10">
          <Image
            fill
            src="/svg/cake.svg"
            alt="cake"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography 
            variant="h3"
            component="h2" 
          >
            Titre 1 de la section
          </Typography>
          <div className="space-y-3">
            <ListPoint>Point 1</ListPoint>
            <ListPoint>Point 2</ListPoint>
            <ListPoint>Point 3</ListPoint>
          </div>
          <div className="relative inline-block">
            <Button 
              baseUrl="/#"
              icon={{icon: RiArrowRightLine}}
              iconPosition="right"
            >
              Ici
            </Button>
            <Image
              src="/svg/cursor.svg"
              alt="cursor"
              width={24}
              height={24}
              className="absolute right-7 -bottom-5"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="relative w-[520px] h-[350px] mt-10">
          <Image
            fill
            src="/svg/top.svg"
            alt="toupille"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography 
            variant="h3"
            component="h2" 
          >
            Titre 2 de la section
          </Typography>
          <div className="space-y-3">
            <ListPoint>Point 1</ListPoint>
            <ListPoint>Point 2</ListPoint>
            <ListPoint>Point 3</ListPoint>
          </div>
          <div className="relative inline-block">
            <Button 
              variant="secondary"
              baseUrl="/#"
              icon={{icon: RiArrowRightLine}}
              iconPosition="right"
            >
              Ici
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

type ListPointProps = {
  children: React.ReactNode
}

const ListPoint = ({ children }: ListPointProps) => (
  <div className="flex items-start gap-2">
    <RiCheckboxCircleLine className="mt-0.5 text-secondary" size={24} />
    <Typography 
      variant="body-lg"
      component="span" 
    >
      {children}
    </Typography>
  </div>
)
