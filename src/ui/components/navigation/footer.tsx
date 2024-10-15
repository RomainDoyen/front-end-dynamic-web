import Container from "../container/container"
import Typography from "@/ui/design-system/typography/typography"
import Image from "next/image"

export default function footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography 
            variant="caption1"
            theme="white"
            weight="medium"
          >
            Formation gratuites
            </Typography>
          <Typography 
            variant="caption3"
            theme="gray"
          >
            SFDSFdd
          </Typography>
          <a href="#" target="_blank">
            <Image 
              src="/svg/YTB.svg"
              alt="youtube" 
              width={229} 
              height={216} 
            />
          </a>
        </div>
        <div className="">
          Liste de liens
        </div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography 
            variant="caption4"
            theme="gray"
          >
            {`Copyright © ${currentYear} | Propulsed by `} 
            <a href="#" target="_blank" className="underline">
              Moatrax
            </a>
            {` - Design And Creation`}
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </div>
  )
}