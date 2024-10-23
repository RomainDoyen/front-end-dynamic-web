import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";
import Logincontainer from "@/ui/modules/authentication/login/login.container";
import { GUEST } from "@/lib/session-status";

export default function Connexion() {
  return (
    <>
      <Seo 
        title={"Connexion sur Dynamic Web"} 
        description={"Page de connexion"}
      />
      <Layout sessionStatus={GUEST}>
        <Logincontainer />
      </Layout>
    </>
  );
}