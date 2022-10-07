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
  useEffect(() => {
    document.title = 'Michael Schulz Portfolio';

    const sections = document.querySelectorAll('.section');
    const sectionShow = document.querySelector('.section-show');

    window.addEventListener('scroll', checkSections);
    // this event listener gets triggered on every scroll!

    function checkSections() {
      // the inner height of the window is basically the vh, meaning the pixels from the top of the window to the bottom
      const triggerNextSection = window.innerHeight * 0.9;

      sections.forEach((section) => {
        // this will get you the y coordinates of how far away the top of the section is from the highest point of the window.
        const topOfSection = section.getBoundingClientRect().top;

        // if you set the window.innerheight to a percentage less than 100% it will eventually be bigger than the top of the section, as the top of the section decreases with every scroll. The distance of the top of the window and the section top will decrease because as you scroll the section to the top the y-value gets smaller
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        if (topOfSection < triggerNextSection) {
          section.classList.add('appear');
        } else {
          // removing the class if the section gets scrolled out of view
          section.classList.remove('appear');
        }
      });
    }
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
