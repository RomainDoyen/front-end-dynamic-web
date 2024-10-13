import Seo from "@/ui/components/seo";
import Typography from "@/ui/design-system/typography/typography";

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
    </div>
  );
}
