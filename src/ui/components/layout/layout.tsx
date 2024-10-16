import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
