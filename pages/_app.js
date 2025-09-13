import '../public/css/harvard-style.css';
import '../public/css/footer-social.css';
import '../public/css/mobile-optimizations.css';
import '../public/css/enhanced-mobile.css';
import Head from 'next/head';

// This file is used to initialize pages
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;