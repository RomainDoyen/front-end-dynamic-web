import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";
import Registercontainer from "@/ui/modules/authentication/register/register.container";
import { GUEST } from "@/lib/session-status";

export default function Inscription() {
  return (
    <>
      <Seo 
        title={"Inscription sur Dynamic Web"} 
        description={"Page d' inscription"}
      />
      <Layout sessionStatus={GUEST}>
        <Registercontainer />
      </Layout>
    </>
  );
}