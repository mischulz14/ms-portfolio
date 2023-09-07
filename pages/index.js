import { motion, useScroll } from 'framer-motion';
import kute from 'kute.js';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Portfolio from '../components/Portfolio';

function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imagePaths = [
    '/portfolio-img.jpg',
    'randomcolors.jpg',
    'memes.jpg',
    'ecommerce.jpg',
    'hangman.jpg',
    'rock-paper.jpg',
    'landing-page.jpg',
    'kajian.jpg',
    'sass.jpg',
  ];

  useEffect(() => {
    const images = imagePaths.map((path) => {
      const img = new Image();
      img.src = path;
      return img;
    });
    Promise.all(
      images.map((image) => {
        return new Promise((resolve, reject) => {
          image.onload = resolve;
        });
      }),
    ).then(() => setIsImageLoaded(true));
  }, []);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  const heroScroll = useScroll({ target: heroRef });
  const aboutScroll = useScroll({ target: aboutRef });

  return (
    <>
      {!isImageLoaded ? (
        <div className="loader h-[100vh] absolute top-0 left-0 w-full z-[9999] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <Head>
            <title>Home</title>
          </Head>

          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroScroll.scrollYProgress }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Hero />
          </motion.div>
          <About />

          {/* Repeat for other components as needed */}
          <Portfolio />
          <Contact />
        </>
      )}
    </>
  );
}

export default Home;
