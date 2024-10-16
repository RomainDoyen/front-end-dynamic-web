import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";

export default function Home() {
  return (
    <>
      <Seo 
        title={"Dynamic Web"} 
        description={"Description..."}
      />
      <Layout>
        <h1>Home</h1>
      </Layout>
    </>
  );
}
