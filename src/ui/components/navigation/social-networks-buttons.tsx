import Button from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links"
import { v4 as uuid4 } from "uuid";
import clsx from "clsx";
import { RiAB } from "react-icons/ri";

type SocialNetworksButtonsProps = {
  className?: string;
  theme?: "gray" | "accent" | "secondary";
};

export default function socialnetworksbuttons({ className, theme = "accent" }: SocialNetworksButtonsProps) {

  const icoList = footerSocialNetworksLinks.map((link) => {
   return <Button 
      key={uuid4()} 
      variant="ico"
      iconTheme={theme}
      icon={{ icon: link.icon ? link.icon : RiAB }}
      data={link}
      baseUrl={link.baseUrl}
      linkType={link.type}
    />;
  });

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  )
}
