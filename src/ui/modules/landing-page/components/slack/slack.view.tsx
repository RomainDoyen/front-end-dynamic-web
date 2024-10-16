import Container from "@/ui/components/container/container"
import Image from "next/image"
import Logo from "@/ui/design-system/logo/logo"
import Typography from "@/ui/design-system/typography/typography"
import Button from "@/ui/design-system/button/button"
import { linkTypes } from "@/lib/link-type"

export default function slack() {
  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="small" />
          <Typography 
            variant="caption2"
            component="span"
            weight="medium"
          >
            Moatrax
          </Typography>
        </div>
        <Typography 
          variant="h2"
          component="h2"
        >
          Join our Slack community
        </Typography>
        <Typography 
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-lg"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod exercitationem placeat voluptas sequi? Cum dolore excepturi porro nostrum est sequi vitae quo, obcaecati ex laudantium expedita, nisi voluptatum dolorem quaerat!
        </Typography>
        <Button 
          size="large"
          baseUrl="/#"
          linkType={linkTypes.external}
        >
          Join now
        </Button>
      </div>
      <div className="relative w-[600px] h-[600px]">
        <Image 
          fill
          src="/svg/logo-slack.svg" 
          alt="slack" 
        />
      </div>
    </Container>
  )
}
