import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";
import Landingpagecontainer from "@/ui/modules/landing-page/components/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo 
        title={"Dynamic Web"} 
        description={"Description..."}
      />
      <Layout isDisplayBreadcrumb={false}>
        <Landingpagecontainer />
      </Layout>
    </>
  );
}
