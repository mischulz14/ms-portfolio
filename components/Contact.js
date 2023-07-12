import Head from 'next/head';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <section id="contact" className="pb-10 text-center section">
        <div className="container mx-auto">
          <div className="w-full text-wrapper">
            <h1
              data-cy="pageTitle"
              className="pt-20 pb-10 text-3xl font-bold text-center title"
            >
              Ready to work?
            </h1>
            <p className="mb-8 text-lg description">
              Thanks for checking out my page! Currently I am happily employed
              at <a href="https://www.atempo.at/">Atempo</a> and not looking for
              new opportunities. But if you have any questions or just want to
              say hi, feel free to contact me!
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
