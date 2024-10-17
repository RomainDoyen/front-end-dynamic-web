import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";
import Registercontainer from "@/ui/modules/authentication/register/register.container";

export default function Inscription() {
  return (
    <>
      <Seo 
        title={"Inscription sur Dynamic Web"} 
        description={"Page d' inscription"}
      />
      <Layout>
        <Registercontainer />
      </Layout>
    </>
  );
}