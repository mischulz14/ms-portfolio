import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <section id="portfolio" className="pb-16">
        <div className="container flex flex-col items-center h-[100%]">
          <div className="text-wrapper">
            <h1
              data-cy="pageTitle"
              className="pb-10 text-3xl font-bold text-center title pt-28"
            >
              Projects
            </h1>
            <p className="pb-16 text-lg text-center description">
              <span className="text-effect pb-2 pl-[2px]">These</span> are some
              of my projects! Feel free to check them out!
            </p>

            <div className="flex flex-wrap justify-center gap-10 portfolio-wrapper">
              <div className="portfolio-item">
                <Link
                  href="https://origame-ecommerce.netlify.app/"
                  target="_blank"
                >
                  <Image
                    width="200"
                    height="200"
                    src="/ecommerce.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>

                <h4 className="portfolio-name">E-commerce Mock-up</h4>
              </div>
              <div className="portfolio-item">
                <Link href="https://react-meme-generator14.netlify.app/">
                  <Image
                    width="200"
                    height="200"
                    src="/memes.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>

                <h4 className="portfolio-name">Meme Generator</h4>
              </div>
              <div className="portfolio-item">
                <Link href="https://react-random-colors.netlify.app/">
                  <Image
                    width="200"
                    height="200"
                    src="/randomcolors.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>

                <h4 className="portfolio-name">Random Color Generator</h4>
              </div>

              <div className="portfolio-item">
                <Link href="https://rock-paper-scissors-lizard-spock-ms.netlify.app/">
                  <Image
                    width="200"
                    height="200"
                    src="/rock-paper.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>
                <h4 className="portfolio-name">Rock Paper Scissors Game</h4>
              </div>

              <div className="portfolio-item">
                <Link href="https://cozy-hangman.netlify.app/">
                  <Image
                    width="200"
                    height="200"
                    src="/hangman.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>

                <h4 className="portfolio-name">Cozy Hangman Game</h4>
              </div>
              <div className="portfolio-item">
                <Link href="https://react-landing-page-clone-14.netlify.app/">
                  <Image
                    width="200"
                    height="200"
                    src="/landing-page.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>

                <h4 className="portfolio-name">Landing Page</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
