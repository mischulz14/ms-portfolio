import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero mx-auto sm:h-[100vh] appear pb-16 sm:pb-0">
      <div className="grid items-center h-full grid-cols-1 mx-auto sm:grid-cols-2 justify-items-center sm:flex-row hero-container">
        <div className="text-wrapper mt-28 hero-text sm:w-[100%] lg:w-[60%]">
          <h1
            data-cy="homePageTitle"
            className="px-10 mb-6 text-2xl sm:px-0 title"
          >
            <span className="inline-block py-2 text-effect font-semibold">
              Hi,
            </span>{' '}
            my name is Michael!
          </h1>
          <p className="mb-8 text-lg description">
            I'm a software developer from Vienna, nice to meet you!
          </p>
          <div className="z-[999]">
            <Link href="#contact">
              <a className="cta">Work with me!</a>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="portfolio-img " alt="developer-picture" />
          <svg
            fill="#6b63ff3d"
            id="blob1"
            className="absolute -top-20 blob scale-[1.4] -right-28 -z-50"
            viewBox="0 0 900 600"
            width="450"
            height="450"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(483.88765805468245 325.97879196882786)">
              <path
                d="M127.9 -132.4C165.7 -70 196.4 -45 197.8 1.4C199.2 47.8 171.4 95.7 133.5 120.7C95.7 145.7 47.8 147.9 -10 157.9C-67.9 167.9 -135.8 185.8 -185.8 160.8C-235.8 135.8 -267.9 67.9 -265.5 2.4C-263.2 -63.2 -226.3 -126.3 -176.3 -168.7C-126.3 -211 -63.2 -232.5 -9.1 -223.4C45 -214.4 90 -174.7 127.9 -132.4"
                fill="#6c63ff"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
