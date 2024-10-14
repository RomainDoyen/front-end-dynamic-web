import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/navigation";

export default function Home() {
  return (
    <div>
      <Seo 
        title={"Dynamic Web"} 
        description={"Description..."}
      />
      <Navigation />
    </div>
  );
}
