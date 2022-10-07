import Link from 'next/link';
import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Navbar({ router }) {
  const [change, setChange] = useState(false);
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

        <ul className="flex gap-8 nav-links">
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
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
