import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className="xl:max-w-[60vw] lg:max-w-[90vw] mx-auto layout">
      <Navbar />
      <main className="mx-auto">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
