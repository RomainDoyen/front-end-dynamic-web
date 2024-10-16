import Container from "@/ui/components/container/container"
import Typography from "../typography/typography"
import Button from "../button/button"
import { linkTypes } from "@/lib/link-type"
import Image from "next/image"

export default function calltoactionview() {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typography 
            variant="h2" 
            component="h2"
            theme="white"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Typography>
          <div>
            <Button 
              baseUrl="/#"
              variant="success"
              linkType={linkTypes.external}
            >
              Ici
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/svg/bombers.svg"
            alt="Bombers"
            width={1210}
            height={1210}
            className="absolute -bottom-[620px] right-[0px]"
          />
        </div>
      </Container>
    </div>
  )
}
