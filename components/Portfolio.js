import Head from 'next/head';
import img from 'next/image';
import Link from 'next/link';

import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <section id="portfolio" className="pb-16 section">
        <div className="container flex flex-col items-center h-[100%] mx-auto">
          <div className="text-wrapper">
            <h1
              data-cy="pageTitle"
              className="pb-10 text-3xl font-bold text-center title pt-28"
            >
              Projects
            </h1>
            <p className="px-4 pb-16 text-lg text-center description">
              <span className="text-effect pb-2 pl-[2px]">These</span> are some
              of my projects! Feel free to check them out!
            </p>

            <div className="flex flex-wrap justify-center gap-10 portfolio-wrapper">
              <Link
                href="https://origame-ecommerce.netlify.app/"
                target="_blank"
              >
                <div className="portfolio-item">
                  <img
                    src="/ecommerce.jpg"
                    className="portfolio-image"
                    alt=""
                  />

                  <h4 className="portfolio-name">E-commerce Mock-up</h4>
                </div>
              </Link>
              <Link href="https://react-meme-generator14.netlify.app/">
                <div className="portfolio-item">
                  <img src="/memes.jpg" className="portfolio-image" alt="" />

                  <h4 className="portfolio-name">Meme Generator</h4>
                </div>
              </Link>
              <Link href="https://cozy-hangman.netlify.app/">
                <div className="portfolio-item">
                  <img src="/hangman.jpg" className="portfolio-image" alt="" />

                  <h4 className="portfolio-name">Cozy Hangman Game</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
