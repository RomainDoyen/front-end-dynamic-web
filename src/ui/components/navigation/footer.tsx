import Container from "../container/container"
import Typography from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { v4 as uuid4 } from "uuid";
import ActiveLink from "@/ui/components/navigation/active-link";
import { FooterLinks } from "@/types/app-links";
import { footerLinks } from "./app-links";
import { linkTypes } from "@/lib/link-type";
import Socialnetworksbuttons from "./social-networks-buttons";

export default function footer() {

  const currentYear = new Date().getFullYear();

  const footerNavigationLinks = footerLinks.map((link) => {
    return <Footerlinks key={uuid4()} data={link} />;
  });

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
        <div className="flex gap-7">
          {footerNavigationLinks}
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
          <div className="">
            <Socialnetworksbuttons theme="gray" />
          </div>
        </div>
      </Container>
    </div>
  )
}

type FooterLinksProps = {
  data: FooterLinks;
}

function Footerlinks({ data }: FooterLinksProps) {

  const linkLists = data.links.map((link) => {
    return (
      <div key={uuid4()}>
        {link.type === linkTypes.internal && (
          <ActiveLink href={link.baseUrl}>
            {link.label}
          </ActiveLink>
        )} 
        {link.type === linkTypes.external && (
          <a href={link.baseUrl} target="_blank">
            {link.label}
          </a>
        )}
      </div>
    )
  });

  return (
    <div className="min-w-[190px]">
      <Typography 
        theme="white" 
        variant="caption2" 
        weight="medium" 
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography 
        theme="gray" 
        variant="caption3" 
        className="space-y-4"
      >
        {linkLists}
      </Typography>
    </div>
  )
}