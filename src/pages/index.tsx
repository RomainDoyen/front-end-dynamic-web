import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/navigation";
import Footer from "@/ui/components/navigation/footer";

export default function Home() {
  return (
    <div>
      <Seo 
        title={"Dynamic Web"} 
        description={"Description..."}
      />
      <Navigation />
      <Footer />
    </div>
  );
}
