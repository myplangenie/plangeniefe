import Footer from "./Footer";
import Navigation from "./nav";

interface LayoutProps {
  children: React.ReactNode;
  title?: String;
  desc?: String;
  page?: String;
}

export default function DisplayLayout({ children, title, desc, page }: LayoutProps) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer title={title} desc={desc} page={page} />
    </div>
  );
}
