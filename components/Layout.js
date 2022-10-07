import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className="max-w-[60vw] mx-auto">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
