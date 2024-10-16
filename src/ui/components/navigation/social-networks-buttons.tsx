import Button from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links"
import { v4 as uuid4 } from "uuid";
// import { RiFacebookBoxFill } from "react-icons/ri";
import clsx from "clsx";
import { RiAB } from "react-icons/ri";

type SocialNetworksButtonsProps = {
  className?: string;
};

export default function socialnetworksbuttons({ className }: SocialNetworksButtonsProps) {

  const icoList = footerSocialNetworksLinks.map((link) => {
   return <Button 
      key={uuid4()} 
      variant="ico"
      iconTheme="gray"
      icon={{ icon: link.icon ? link.icon : RiAB }}
      data={link} 
    />;
  });

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  )
}
