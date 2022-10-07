import kute from 'kute.js';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

function Home() {
  // const tween = kute.fromTo(
  //   '#blob1',
  //   {
  //     path: '#blob1',
  //   },
  //   { path: '#blob2' },
  //   { repeat: 999, duration: 2000, yoyo: true },
  // );

  // tween.start();
  useEffect(() => {
    document.title = 'Michael Schulz Portfolio';
  }, []);

  const aboutRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;
