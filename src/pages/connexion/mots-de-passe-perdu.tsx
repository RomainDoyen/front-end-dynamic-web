import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";
import Forgetpasswordcontainer from "@/ui/modules/authentication/forget-password/forget-password.container";
import { GUEST } from "@/lib/session-status";

export default function MotsDePassePerdu() {
  return (
    <>
      <Seo 
        title={"Mots de passe perdu sur Dynamic Web"} 
        description={"Mots de passe perdu"}
      />
      <Layout sessionStatus={GUEST}>
        <Forgetpasswordcontainer />
      </Layout>
    </>
  );
}