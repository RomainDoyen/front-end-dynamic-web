import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";
import Useraccountcontainer from "@/ui/modules/user-profile/user-account/user-account.container";
import { REGISTERED } from "@/lib/session-status";

export default function MonEspace() {
  return (
    <>
      <Seo 
        title={"Mon espace sur Dynamic Web"} 
        description={"Mon espace"}
      />
      <Layout withSidebar sessionStatus={REGISTERED}>
        <Useraccountcontainer />
      </Layout>
    </>
  );
}