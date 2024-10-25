import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";

export default function CallsToActionSideBarContribution() {
  return (
    <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-primary">
      <Typography 
        variant="lead"
        weight="medium"
        theme="white"
        className="text-center"
      >
        Vous souhaitez contribuer à la plateforme ?
      </Typography>
      <div className="flex justify-center">
        <Button
          baseUrl="/#"
          linkType="external"
          variant="success"
        >
          Contribuer
        </Button>
      </div>
      <Image 
        src="/svg/pig.svg"
        alt="Contribution"
        width={183}
        height={183}
        className="absolute -bottom-7 transform -translate-x-1/2 left-1/2"
      />
    </div>
  )
}
