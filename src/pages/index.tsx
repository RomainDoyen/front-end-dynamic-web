import Seo from "@/ui/components/seo";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";
import { RiAccountCircleFill } from "react-icons/ri";
import Logo from "@/ui/design-system/logo/logo";
import Avatar from "@/ui/design-system/avatar/avatar";

export default function Home() {
  return (
    <div>
      <Seo 
        title={"Dynamic Web"} 
        description={"Description..."}
      />
      <Typography component="h1" variant="display">
        Bienvenue sur Dynamic Web !
      </Typography>
      <Button variant="accent" size="medium">
        Cliquez ici
      </Button>
      <Button variant="ico" size="medium" icon={{ icon: RiAccountCircleFill }} iconTheme="accent" />
      <Button variant="accent" size="medium" icon={{ icon: RiAccountCircleFill }} iconPosition="right">
        Cliquez ici
      </Button>
      <Button variant="accent" size="medium" isLoading>
        Cliquez ici
      </Button>
      {/* <Spinner size="small" /> */}
      <Logo size="large" />
      <Avatar src="/images/avatar.png" alt="avatar" size="large" />
    </div>
  );
}
