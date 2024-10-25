import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Container from "../container/container";
import Useraccountnavigation from "../navigation/user-account-navigation";
import Session from "../session/session";
import { SessionStatusTypes } from "@/types/session-status-types";
import CallsToActionSideBarContribution from "../calls-to-action/calls-to-action-side-bar-contribution";

type LayoutProps = {
  children: React.ReactNode;
  isDisplayBreadcrumb?: boolean;
  withSidebar?: boolean;
  sessionStatus?: SessionStatusTypes;
};

export default function layout({ children, isDisplayBreadcrumb = true, withSidebar, sessionStatus }: LayoutProps) {

  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 space-y-8">
            <Useraccountnavigation />
            <CallsToActionSideBarContribution />
          </div>
          <div className="col-span-9">
            {children}
          </div>
        </div>
      </Container>
    )
  } else {
    view = <>{children}</>;
  }

  return (
    <Session sessionStatus={sessionStatus}>
      <Navigation />
      {isDisplayBreadcrumb && <Breadcrumbs />}
      {view}
      <Footer />
    </Session>
  )
}
