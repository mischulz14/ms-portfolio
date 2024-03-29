import Head from 'next/head';
import img from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <section className="mx-auto about section" id="about">
        <div className="container flex flex-col items-center h-[100%] mx-auto">
          <div className="flex flex-col items-center justify-center text-wrapper">
            <h1 className="pb-8 text-3xl font-semibold text-center pt-28">
              About Me
            </h1>
            <p className="block text-xl leading-8 text-center description sm:px-16 lg:px-28">
              I am a self-taught/bootcamp-taught developer based in Vienna.
              Before becoming a software developer I studied nutritional science
              and genetics and worked as a molecular biologist. Despite being a
              science enthusiast I also love learning new languages (including
              programming languages!).
            </p>
            <div className="mt-10 tech-wrapper">
              <p className="pt-10 pb-10 text-lg text-center tech-heading">
                <span className="text-effect inline-block pb-[8px] pl-[2px]">
                  This
                </span>{' '}
                is my Tech stack
              </p>
              <div className="grid flex-wrap justify-center w-full grid-cols-4 gap-4 mx-auto sm:flex sm:flex-nowrap stack-wrapper sm:h-auto">
                <div className="img-wrapper">
                  <img src="/html.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/css.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/tailwind.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/sass.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/js.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img
                    src="/typescriptIcon.png"
                    alt=""
                    width="300"
                    height="300"
                  />
                </div>
                <div className="img-wrapper">
                  <img src="/node.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/GraphQLLogo.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/react.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/nextjs.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/git.svg" alt="" width="300" height="300" />
                </div>
                <div className="img-wrapper">
                  <img src="/github.svg" alt="" width="300" height="300" />
                </div>
              </div>
            </div>
            <p className="pb-8 text-lg pt-14">Do you want to work together?</p>
            <Link href="#contact">
              <a className="mb-10 cta">Contact Me!</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
