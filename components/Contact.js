import Head from 'next/head';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <section id="contact" className="h-[50vh] text-center">
        <div className="container">
          <div className="w-full text-wrapper">
            <h1
              data-cy="pageTitle"
              className="pt-20 pb-10 text-3xl font-bold text-center title"
            >
              Ready to work?
            </h1>
            <p className="mb-8 text-lg description">
              Thanks for checking out my page! If you want to work together
              write me an email or call me!
            </p>
            <ul className="contact-links">
              <li className="mb-6 contact-item">
                <span className="text-effect pb-[12px] pl-[2px]">Email:</span>{' '}
                mi.schulz@hotmail.com
              </li>
              <li className="contact-item">
                <span className="text-effect pb-[12px] pl-[2px]">Phone:</span>{' '}
                +4369911388765
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
