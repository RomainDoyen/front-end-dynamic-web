import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Container from "../container/container";
import Useraccountnavigation from "../navigation/user-account-navigation";

type LayoutProps = {
  children: React.ReactNode;
  isDisplayBreadcrumb?: boolean;
  withSidebar?: boolean;
};

export default function layout({ children, isDisplayBreadcrumb = true, withSidebar }: LayoutProps) {

  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <Useraccountnavigation />
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
    <>
      <Navigation />
      {isDisplayBreadcrumb && <Breadcrumbs />}
      {view}
      <Footer />
    </>
  )
}
