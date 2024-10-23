import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";
import { REGISTERED } from "@/lib/session-status";

export default function Onboarding() {
  return (
    <>
      <Seo 
        title={"Onboarding sur Dynamic Web"} 
        description={"Onboarding"}
      />
      <Layout sessionStatus={REGISTERED}>
        <div className="flex items-center justify-center">
          <h1>Onboarding</h1>
        </div>
      </Layout>
    </>
  );
}