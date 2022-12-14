import Link from 'next/link';
import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Navbar({ router }) {
  const [change, setChange] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const navs = [
    { text: 'About', href: '#about', dataCy: 'aboutPageLink' },
    { text: 'Portfolio', href: '#portfolio', dataCy: 'portfolioPageLink' },
    { text: 'Contact', href: '#contact', dataCy: 'contactPageLink' },
    // { text: '', href: '' },
  ];

  function controlNavbar() {
    if (window.scrollY > 0) {
      setChange(true);
    } else {
      setChange(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <nav
      className={` transition-all duration-300 mx-auto  ease-in navbar py-6 px-4 text-xl fixed  flex justify-between xl:w-[60vw] lg:w-[90vw] sm:w-[100vw] w-[100vw] z-50 bg-white ${
        change ? 'change' : ''
      }`}
    >
      <div className="container flex justify-between mx-auto">
        <Link href="/">
          <a className="text-3xl font-bold logo">MS.</a>
        </Link>

        <ul className="hidden gap-8 sm:flex nav-links">
          {navs.map((nav) => (
            <li
              data-cy={nav.dataCy}
              className="font-semibold nav-item text-effect"
              key={nav.href}
            >
              <Link href={nav.href}>
                <a>{nav.text}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setShowSideNav(true)}
          className={`hamburger ${
            showSideNav ? 'hidden' : 'block'
          } flex flex-col items-center justify-center sm:hidden  w-[35px] cursor-pointer`}
        >
          <div className=" h-[2px] bg-black mb-[8px] mt-[7px] w-[100%]"></div>
          <div className=" h-[2px] bg-black mb-[8px] w-[100%]"></div>
          <div className=" h-[2px] bg-black w-[100%]"></div>
        </div>
      </div>

      <ul
        className={`side-nav ${
          showSideNav ? 'block' : 'hidden'
        } flex flex-col pt-20 px-10 bg-slate-50 backdrop-blur-sm opacity-95 gap-8 absolute top-0 right-0 h-[100vh] transition-all duration-300`}
      >
        <button
          onClick={() => setShowSideNav(false)}
          className="absolute text-bold translate-x-[180%] z-50 -translate-y-[150%] bg-slate-500 text-white rounded-full opacity-100 w-[40px] h-[40px]"
        >
          X
        </button>
        {navs.map((nav) => (
          <li
            data-cy={nav.dataCy}
            className="font-semibold nav-item "
            key={nav.href}
          >
            <Link href={nav.href}>
              <a>{nav.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Navbar);
