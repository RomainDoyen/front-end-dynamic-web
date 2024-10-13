import Seo from "@/ui/components/seo";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";

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
    </div>
  );
}
