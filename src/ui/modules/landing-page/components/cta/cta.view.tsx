import Container from "@/ui/components/container/container"
import Typography from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiPlayCircleLine } from "react-icons/ri"

export default function cta() {
  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography 
          variant="h2" 
          component="h2"
          className="mb-2.5"
        >
          Titre de la section
        </Typography>
        <Typography 
          variant="lead" 
          component="h3"
          className="mb-5"
        >
          Sous Titre de la section
        </Typography>
        <Typography 
          variant="caption3" 
          theme="gray"
          component="p"
          className="mb-16"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat debitis ex accusamus corrupti libero.
        </Typography>
        <a href="/#" target="_blank">
          <div className="relative bg-gray-400 rounded h-[626px]">
            <div className="flex flex-col relative h-full bg-gray z-10 items-center justify-center gap-2 rounded opacity-0 hover:opacity-95 text-white animate">
              <RiPlayCircleLine size={42} />
              <Typography 
                variant="caption2" 
                theme="white"
                component="h3"
                weight="medium"
              >
                CTA
              </Typography>
            </div>
            <Image 
              fill
              src="/images/computer.jpg"
              alt="Image"
              className="object-cover object-center rounded"
            />
          </div>
        </a>
      </Container>
    </div>
  )
}
