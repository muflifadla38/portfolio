import Head from "next/head";

const Layouts = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Mufly Fadla Portfolio | Web Developer"
        />
        <meta name="keywords" content="Web Developer, Portfolio, Resume, CV" />
        <meta name="author" content="Mufly Fadla Syihab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mufli | Web Developer</title>
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layouts;
