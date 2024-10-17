import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

type LayoutProps = {
  children: React.ReactNode;
  isDisplayBreadcrumb?: boolean;
};

export default function layout({ children, isDisplayBreadcrumb = true }: LayoutProps) {
  return (
    <>
      <Navigation />
      {isDisplayBreadcrumb && <Breadcrumbs />}
      {children}
      <Footer />
    </>
  )
}
